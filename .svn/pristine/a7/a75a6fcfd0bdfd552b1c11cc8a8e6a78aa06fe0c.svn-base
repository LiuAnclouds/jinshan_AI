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
  { type: 'upload-file', label: '选取上传文件', text: '选取上传文件' },
  { type: 'analyze-txt', label: '识别生成文字', text: '识别生成文字' },
  { type: 'txt-audio', label: '文字转换频对象', text: '文字转换频对象' },
  { type: 'audio-base64', label: '音频转为base64编码返回', text: '音频转为\nbase64编码返回' },
  { type: 'play-adio', label: '显示音频供用户播放', text: '显示音频供用户播放' },
])

// 槽位 → 允许放入的类型
const slotRules = {
  slot1: 'upload-file',
  slot2: 'analyze-txt',
  slot3: 'txt-audio',
  slot4: 'audio-base64',
  slot5: 'play-adio'
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
          this.width = 120;
          this.height = 80;
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

    // 保存空白节点的入度和出度
    const inEdges = graph.edges.filter(e => e.targetNodeId === empty.id)
    const outEdges = graph.edges.filter(e => e.sourceNodeId === empty.id)

    // 删除空白节点
    lf.deleteNode(empty.id)

    // 添加新节点
    const newNode = lf.addNode({
      type: 'process',
      x: empty.x,
      y: empty.y,
      text: text.value,
      style: {
        color: '#ff6666'
      }
    })

    // 重新连线
    inEdges.forEach(e => lf.addEdge({ sourceNodeId: e.sourceNodeId, targetNodeId: newNode.id, text: e?.text?.value }))
    outEdges.forEach(e => lf.addEdge({ sourceNodeId: newNode.id, targetNodeId: e.targetNodeId, text: e?.text?.value }))

    // 删除拖入节点
    lf.deleteNode(id)
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
      { id: 'slot1', type: 'emptySlot', x: 200, y: 100, text: '' },
      { id: 'receive-img', type: 'process', x: 500, y: 100, text: '接收到图片对象' },
      { id: 'slot2', type: 'emptySlot', x: 800, y: 100, text: '' },
      { id: 'slot3', type: 'emptySlot', x: 800, y: 260, text: '' },
      { id: 'slot4', type: 'emptySlot', x: 500, y: 260, text: '' },
      { id: 'slot5', type: 'emptySlot', x: 200, y: 260, text: '' },
      ...palette.value.map((item, index) => ({type: item.type, x: 220 + (index * 140), y: 400, text: item.text }))
    ],
    edges: [
      { type: 'polyline', sourceNodeId: 'slot1', targetNodeId: 'receive-img', text: '图片' },
      { type: 'polyline', sourceNodeId: 'receive-img', targetNodeId: 'slot2' },
      { type: 'polyline', sourceNodeId: 'slot2', targetNodeId: 'slot3', text: '文字' },
      { type: 'polyline', sourceNodeId: 'slot3', targetNodeId: 'slot4', text: '音频' },
      { type: 'polyline', sourceNodeId: 'slot4', targetNodeId: 'slot5', text: '音频\n解码' },
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
  let currentId = 'slot1'; // 从起始节点开始
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
    <div class="tool-introduce">简介：<br />通过连接流程图建立完整的智能环境语音播报系统程序逻辑</div>
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
