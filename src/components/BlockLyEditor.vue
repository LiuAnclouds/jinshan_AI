<template>
  <div class="h-full flex gap-6">
    <!-- 左侧：工作区 -->
    <div class="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative min-h-[500px]">
      <div ref="blocklyDiv" class="flex-1 w-full bg-white"></div>
    </div>

    <!--HZ 右侧：交互区 -->
    <div class="w-80 flex flex-col gap-6">

      <!-- AI 助手提示卡 -->
      <div class="bg-white rounded-xl p-6 border border-yellow-200 shadow-sm relative overflow-hidden">
        <div class="flex items-center mb-3">
          <div class="text-4xl mr-3">{{ selectedHelp.icon }}</div>
          <h3 class="font-bold text-gray-700 text-lg">{{ selectedHelp.title }}</h3>
        </div>
        <p class="text-gray-500 text-sm leading-relaxed">{{ selectedHelp.desc }}</p>
      </div>

      <!-- 代码预览卡 -->
      <div class="flex-1 bg-gray-800 rounded-xl p-5 shadow-inner flex flex-col relative overflow-hidden">
        <div class="flex justify-between items-center mb-2 text-gray-400 text-xs uppercase font-bold tracking-wider">
          <span>🐍 Python 代码</span>
          <button class="hover:text-white transition" @click="copyCode">复制</button>
        </div>
        <div class="flex-1 overflow-auto">
          <pre class="text-green-400 font-mono text-xs leading-5 whitespace-pre-wrap">{{ generatedCode || '# 等待拼搭...' }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import * as ZhHans from 'blockly/msg/zh-hans';
import { pythonGenerator } from 'blockly/python';
import { defineCustomBlocks, BLOCK_HELP_DATA } from '../utils/customBlocks';

// 设置语言
Blockly.setLocale(ZhHans);

const props = defineProps(['initialXml']);
const blocklyDiv = ref(null);
const generatedCode = ref("");
const selectedHelp = ref({
  title: "准备就绪",
  desc: "点击左边的积木块，AI 助手会告诉你它是做什么的哦！",
  icon: "👋"
});

const toolboxXml = `
<xml xmlns="https://developers.google.com/blockly/xml">
    <category name="👁️ 视觉 (看)" colour="#FBBF24">
        <block type="kid_load_img"></block>
        <block type="kid_import"></block>
    </category>
    <category name="🧠 大脑 (想)" colour="#34D399">
        <block type="kid_load_detector"></block>
        <block type="kid_find_faces"></block>
        <block type="kid_get_features"></block>
        <block type="kid_compare"></block>
    </category>
    <category name="✏️ 动作 (做)" colour="#F87171">
        <block type="kid_mark_faces"></block>
        <block type="kid_show_img"></block>
        <block type="kid_save_memory"></block>
    </category>
    <category name="🧩 逻辑" colour="#A78BFA">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
    </category>
    <category name="📦 盒子 (变量)" colour="#F472B6" custom="VARIABLE"></category>
</xml>
`;

let workspace = null;

const updateHelp = (event) => {
  if (event.type === Blockly.Events.SELECTED && event.newElementId) {
    const block = workspace.getBlockById(event.newElementId);
    if (block && BLOCK_HELP_DATA[block.type]) {
      selectedHelp.value = BLOCK_HELP_DATA[block.type];
    }
  }
};

const copyCode = () => {
  navigator.clipboard.writeText(generatedCode.value);
  alert("代码已复制！");
};

onMounted(() => {
  defineCustomBlocks();
  nextTick(() => {
    workspace = Blockly.inject(blocklyDiv.value, {
      toolbox: toolboxXml,
      scrollbars: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      trashcan: true,
    });

    workspace.addChangeListener(updateHelp);
    workspace.addChangeListener(() => {
      const code = pythonGenerator.workspaceToCode(workspace);
      generatedCode.value = code;
    });

    if (props.initialXml) {
      try {
        const xml = Blockly.utils.xml.textToDom(props.initialXml);
        Blockly.Xml.domToWorkspace(xml, workspace);
      } catch (e) {
        console.error("Error loading XML", e);
      }
    }
  });
});
</script>

<style scoped>
</style>