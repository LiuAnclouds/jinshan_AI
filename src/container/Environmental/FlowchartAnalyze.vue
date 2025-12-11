<script setup>
import { ref, onMounted } from 'vue';
import LogicFlow, { RectNode, RectNodeModel } from '@logicflow/core';
import "@logicflow/core/lib/style/index.css";

const lfRef = ref(null);
let lf = null;
let dragstartX = null;
let dragstartY = null;

// 左侧可拖拽模块
const palette = ref([
  { type: 'photo', label: '拍照', text: '拍照' },
  { type: 'vision', label: '图像识别技术', text: '图像识别技术' },
  { type: 'nlg', label: '自然语言生成技术', text: '自然语言生成技术' },
  { type: 'tts', label: '语音生成技术', text: '语音生成技术' },
  { type: 'speaker', label: '语音播放', text: '语音播放' },
])

// 槽位 → 允许放入的类型
const slotRules = {
  slot1: 'photo',
  slot2: 'vision',
  slot3: 'nlg',
  slot4: 'tts',
  slot5: 'speaker'
};

onMounted(() => {
  lf = new LogicFlow({ container: lfRef.value })

  // 注册节点类型
  const nodeTypes = ['process', 'emptySlot', ...palette.value.map(p => p.type)]
  nodeTypes.forEach(type => {
    lf.register({
      type,
      view: class extends RectNode {},
      model: class extends RectNodeModel {
        initNodeData(data) {
          super.initNodeData(data);
          this.width = 100;
          this.height = 60;
          this.radius = 18;
          if (this.type === 'emptySlot' || this.type === 'process') {
            this.draggable = false;
          }
        }
      },
    })
  })

  lf.on('node:dragstart', ({ data }) => {
    dragstartX = data.x;
    dragstartY = data.y;
  })

  // 拖入节点 → 替换空白节点
  lf.on('node:drop', ({ data }) => {
    const { x, y, text, id, type } = data;
    if (type === 'emptySlot') return;

    const graph = lf.getGraphData()

    const empty = graph.nodes.find(n =>
      n.type === 'emptySlot' &&
      Math.abs(n.x - x) < 60 &&
      Math.abs(n.y - y) < 30
    )

    if (!empty) {
      // ❌ 没有槽 → 回弹
      // const dx = dragstartX - data.x;
      // const dy = dragstartY - data.y;
      // lf.graphModel.moveNode(id, dx, dy);
      return;
    }

    // 检查是否匹配规则
    const requiredType = slotRules[empty.id];

    if (requiredType && requiredType !== type) {
      // ❌ 槽位规则不匹配 → 回弹
      const dx = dragstartX - data.x;
      const dy = dragstartY - data.y;
      lf.graphModel.moveNode(id, dx, dy);
      alert(`填写错误`);
      return;
    }

    // ✔️ 合法 → 执行替换
    const inEdges = graph.edges.filter(e => e.targetNodeId === empty.id);
    const outEdges = graph.edges.filter(e => e.sourceNodeId === empty.id);

    lf.deleteNode(empty.id);

    const newNode = lf.addNode({
      type: 'process',
      x: empty.x,
      y: empty.y,
      text: text.value,
      style: { color: '#ff6666' }
    });

    inEdges.forEach(e =>
      lf.addEdge({ sourceNodeId: e.sourceNodeId, targetNodeId: newNode.id })
    );

    outEdges.forEach(e =>
      lf.addEdge({ sourceNodeId: newNode.id, targetNodeId: e.targetNodeId })
    );

    lf.deleteNode(id);
    // console.log(getFlowOrder());
    
  })

  lf.on('graph:rendered', () => {
    console.log('流程图渲染完成');
    // 设置第一个节点颜色
    lf.updateAttributes('env', { style: { fill: '#caedbf' } });
    
    // 设置最后一个节点颜色
    lf.updateAttributes('blind', { style: { fill: '#caedbf' } });

    const graph = lf.getGraphData();
    const arr = palette.value.map(item => item.type);
    graph.nodes.forEach(item => {
      if (arr.includes(item.type))
        lf.updateAttributes(item.id, { style: { fill: '#efc9a0' } });
    })
  });

  // 节点样式
  lf.setTheme({
    baseNode: {
      fill: "#def0ff",
      stroke: "#000000",
      strokeWidth: 2,
    },
  });

  // // 节点文本样式
  lf.setTheme({
    nodeText: {
      color: "#333333",
      overflowMode: "autoWrap",
      lineHeight: 1.2,
      fontSize: 16, 
      padding: '0 14px'
    },
  });

  // 初始化节点和箭头
  lf.render({
    nodes: [
      { id: 'env', type: 'process', x: 200, y: 100, text: '环境' },
      { id: 'slot1', type: 'emptySlot', x: 400, y: 100, text: '' },
      { id: 'slot2', type: 'emptySlot', x: 600, y: 100, text: '' },
      { id: 'slot3', type: 'emptySlot', x: 800, y: 100, text: '' },
      { id: 'slot4', type: 'emptySlot', x: 800, y: 240, text: '' },
      { id: 'slot5', type: 'emptySlot', x: 600, y: 240, text: '' },
      { id: 'blind', type: 'process', x: 400, y: 240, text: '视障人士' },
      ...palette.value.map((item, index) => ({type: item.type, x: 220 + (index * 140), y: 400, text: item.text }))
    ],
    edges: [
      { type: 'polyline', sourceNodeId: 'env', targetNodeId: 'slot1' },
      { type: 'polyline', sourceNodeId: 'slot1', targetNodeId: 'slot2' },
      { type: 'polyline', sourceNodeId: 'slot2', targetNodeId: 'slot3' },
      { type: 'polyline', sourceNodeId: 'slot3', targetNodeId: 'slot4' },
      { type: 'polyline', sourceNodeId: 'slot4', targetNodeId: 'slot5' },
      { type: 'polyline', sourceNodeId: 'slot5', targetNodeId: 'blind' },
    ]
  })

})

function getFlowOrder() {
  const graph = lf.getGraphData();
  const nodesMap = {};
  graph.nodes.forEach(n => nodesMap[n.id] = n);

  const edgesMap = {};
  graph.edges.forEach(e => {
    if (!edgesMap[e.sourceNodeId]) edgesMap[e.sourceNodeId] = [];
    edgesMap[e.sourceNodeId].push(e.targetNodeId);
  });

  const order = [];
  let currentId = 'env'; // 从起始节点开始
  while (currentId) {
    const node = nodesMap[currentId];
    if (!node) break;
    order.push(node.text || node.type);

    const nextIds = edgesMap[currentId];
    if (!nextIds || nextIds.length === 0) break;
    // 假设每个节点只有一条出边
    currentId = nextIds[0];
  }

  return order;
}
</script>

<template>
  <div class="container">
    <div class="tool-introduce">简介：<br />通过连接流程图建立完整的智能环境语音播报系统功能逻辑</div>
    <div class="canvas" ref="lfRef"></div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  height: 600px;
  display: flex;
  padding: 50px;
  margin: 0 auto;
  position: relative;
}
.tool-introduce {
  width: 16%;
  font-size: 16px;
  color: #000;
  padding-right: 20px;
}
.canvas {
  width: 84%;
  height: 100%;
  background-color: #efc9a0;
}
</style>
