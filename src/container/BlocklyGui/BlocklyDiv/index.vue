<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import * as Blockly from 'blockly/core';
import './blockly.css';
import '@/blocks';
import getToolbox from '@/global/toolbox';
import { loadFaceBlocks } from '@/blocks';
import store from '@/store';
import { createBlockClickListener } from '@/blocks/Highlight';


const blocklyDiv = ref(null)
let observer = null;
let workspace = null;
let goCreate = ref(false);

onMounted(() => {

  init()

  observer = new ResizeObserver(() => {
    if (workspace) Blockly.svgResize(workspace);
  });
  observer.observe(blocklyDiv.value);
})

onBeforeUnmount(() => {
  observer?.disconnect();
});


async function init() {
  // 初始化blockly
  const options = {
    media: './media/',
    grid:
    {
      spacing: 25,
      length: 3,
      colour: '#ccc',
      snap: true
    },
    toolbox: '<xml><category name="System" colour="#CC0000"></category></xml>',
    zoom: {
      controls: true,
      // wheel: true,
      startScale: 1,
      scaleSpeed: 1.2,
      minScale: 0.8,
      maxScale: 1.8
    },
    theme: {
      blockStyles: {
        colour_blocks: { colourPrimary: "20" },
        hat_blocks: { colourPrimary: "330", hat: "cap" },
        list_blocks: { colourPrimary: "#035703" },
        logic_blocks: { colourPrimary: "#D435D4" },
        loop_blocks: { colourPrimary: "#5454BF" },
        math_blocks: { colourPrimary: "#039A9A" },
        procedure_blocks: { colourPrimary: "#EF5D5D" },
        text_blocks: { colourPrimary: "#257DB1" },
        variable_blocks: { colourPrimary: "#6969FF" },
        variable_dynamic_blocks: { colourPrimary: "#6969FF" }
      },
      startHats: 1
    }
  };
  workspace = Blockly.inject(blocklyDiv.value, options);
  workspace.options.maxTrashcanContents = 10;
  workspace.options.oneBasedIndex = false;
  workspace.addChangeListener(updateFunction);
  // 使用统一的积木点击监听器
  workspace.addChangeListener(createBlockClickListener(
    workspace,
    ({ blockCode, workspaceCode, startLine, endLine }) => {
      store.setSelectedCodes({ blockCode, workspaceCode, startLine, endLine });
    },
    (error) => {
      console.error('[highlight] block click handler error', error);
    }
  ));
  workspace.clear();
  workspace.variableList = workspace.variableList || []
  store.setWorkspace(workspace);
  editBlock();

  const route = useRoute();
  const faceTypes = ['newface', 'face-detection', 'face-registration', 'face-recognition'];
  if (faceTypes.includes(route.query?.type)) {
    try {
      await loadFaceBlocks();
    } catch (e) {
      console.error('加载人脸识别积木失败', e);
    }
  }
  workspace.updateToolbox(getToolbox(route.query));
  store.setICON();

  // 如果是人脸场景且未指定 example，自动铺设预置示例积木，方便直接运行
  if (faceTypes.includes(route.query?.type) && !route.query?.example) {
    applyFacePreset(route.query?.type);
  }

  if (Object.keys(route.query).length <= 0) return;
  setTimeout(() => {
    loadExample(route.query);
  }, 100)
}

async function loadExample(data) {
  const name = data?.example;
  if (!name) return;
  const res = await axios.get('http://localhost:8001/api/example?name=' + name);
  if (!res.data || !res.data.flag) {
    alert(res.data?.msg || '加载失败！');
    return;
  }
  store.loadXMLCode({xmlCode: res.data?.result || ''});
}

function updateFunction(event) {
  if (!goCreate.value) return;
  var code = Blockly.Python.workspaceToCode(workspace);
  localStorage.code = code;
  store.setPyCode(code);


  // localStorage储存代码以便下一次打开软件时记忆
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  var blockxml = Blockly.Xml.domToPrettyText(xmlDom);
  localStorage.xml = blockxml;
  store.setXmlCode(blockxml);
}

// handleBlockClick 函数已移至 src/blocks/Highlight/index.js，使用统一的工具函数

function onBlocklyChange(event) {
  if (event.type === Blockly.Events.UI && event.element === "click") {
    const blockId = event.blockId;
    if (!blockId) return;
  const block = workspace.getBlockById(blockId);
  if (!block) return;
  Blockly.Python.blockToCode(block);
  }
}

function highlightPythonFromBlock(block) {
  const info = blockLineMap[block.id]
  if (!info) return

  highlightLine(editor, info.startLine)
}

function editBlock() {
  Blockly.Toolbox.prototype.handleAfterTreeSelected_ = function (a, b) {
    if (b && b.children_ && b.children_.length > 0) {
      store.setBlocklyIcon(b.children_);
    }

    b && b.blocks && b.blocks.length ? (this.flyout_.show(b.blocks),
      this.lastCategory_ != b && this.flyout_.scrollToStart(),
      this.workspace_.keyboardAccessibilityMode && Blockly.navigation.setState(Blockly.navigation.STATE_TOOLBOX)) : (this.flyout_.hide(),
        !this.workspace_.keyboardAccessibilityMode || b instanceof Blockly.Toolbox.TreeSeparator || Blockly.navigation.setState(Blockly.navigation.STATE_WS));
    a != b && a != this && (a = new Blockly.Events.Ui(null, "category", a && a.content, b && b.content),
      a.workspaceId = this.workspace_.id,
      Blockly.Events.fire(a));
    b && (this.lastCategory_ = b)
  }

  // 在块拖动过程中更新光标
  Blockly.BlockDragger.prototype.updateCursorDuringBlockDrag_ = function (event) {
    goCreate.value = false;
    this.wouldDeleteBlock_ = this.draggedConnectionManager_.wouldDeleteBlock();
    var trashcan = this.workspace_.trashcan;
    if (this.wouldDeleteBlock_) {
      this.draggingBlock_.setDeleteStyle(true);
      if (this.deleteArea_ == Blockly.DELETE_AREA_TRASH && trashcan) {
        // 尝试打开盖子：先试旧方法 setOpen，再试新方法 setLidOpen
        if (typeof trashcan.setOpen === 'function') {
        trashcan.setOpen(true);
        } else if (typeof trashcan.setLidOpen === 'function') {
          trashcan.setLidOpen(true); // 新版Blockly通常使用这个名字
        }
      }
    } else {
      this.draggingBlock_.setDeleteStyle(false);
      if (trashcan) {
        // 尝试关闭盖子
        if (typeof trashcan.setOpen === 'function') {
        trashcan.setOpen(false);
        } else if (typeof trashcan.setLidOpen === 'function') {
          trashcan.setLidOpen(false);
        }
      }
    }
  };

  // 解封（松开）
  Blockly.Tooltip.unblock = function () {
    goCreate.value = true;
    Blockly.Tooltip.blocked_ = false;
  };

  // 重写设置blocklyFlyout位置的方法
  Blockly.Flyout.prototype.positionAt_ = function (a, b, c, d) {
    if (this.svgGroup_ === document.querySelector('.injectionDiv').childNodes[6]) {
      c = document.querySelector('.blocklyToolboxDiv').offsetWidth;
    }
    this.svgGroup_.setAttribute("width", a);
    this.svgGroup_.setAttribute("height", b);
    "svg" == this.svgGroup_.tagName ? Blockly.utils.dom.setCssTransform(this.svgGroup_, "translate(" + c + "px," + d + "px)") : this.svgGroup_.setAttribute("transform", "translate(" + c + "," + d + ")");
    this.scrollbar_ && (this.scrollbar_.setOrigin(c, d),
      this.scrollbar_.resize(),
      this.scrollbar_.setPosition_(this.scrollbar_.position_.x, this.scrollbar_.position_.y))
  }
}

// 根据入口类型加载默认示例积木布局
function applyFacePreset(type) {
  const presetXml = buildFacePresetXml(type);
  if (!presetXml) return;
  try {
    const dom = Blockly.Xml.textToDom(presetXml);
    workspace.clear();
    Blockly.Xml.domToWorkspace(dom, workspace);
    goCreate.value = true;
    updateFunction();
  } catch (e) {
    console.error('应用人脸预置积木失败', e);
  }
}

function buildFacePresetXml(type) {
  // 公共色块值
  const rgbBlock = `
    <value name="COLOR">
      <block type="face_ai_rgb">
        <field name="R">255</field>
        <field name="G">215</field>
        <field name="B">0</field>
      </block>
    </value>`;

  if (type === 'face-detection') {
    return `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="face_ai_init_globals" deletable="false" movable="true" x="20" y="20">
    <next>
      <block type="face_ai_step1_init">
        <next>
          <block type="face_ai_step2_input">
            <value name="VALUE">
              <block type="face_ai_local_image"></block>
            </value>
            <next>
              <block type="face_ai_step3_process">
                <next>
                  <block type="face_ai_step4_detect">
                    <next>
                      <block type="face_ai_step5_data">
                        <next>
                          <block type="face_ai_step6_draw">
                            ${rgbBlock}
                            <next>
                              <block type="face_ai_step7_show"></block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`;
  }

  if (type === 'face-registration') {
    return `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="face_ai_reg_init_globals" deletable="false" movable="true" x="20" y="20">
    <next>
      <block type="face_ai_reg_input">
        <next>
          <block type="face_ai_reg_commit"></block>
        </next>
      </block>
    </next>
  </block>
</xml>`;
  }

  if (type === 'face-recognition') {
    return `
<xml xmlns="https://developers.google.com/blockly/xml">
  <!-- 单一初始化：直接用识别初始化驱动全流程 -->
  <block type="face_ai_rec_init_globals" deletable="false" movable="true" x="20" y="20">
    <next>
      <!-- 先注册：输入+提交 -->
      <block type="face_ai_reg_input">
        <next>
          <block type="face_ai_reg_commit">
            <next>
              <!-- 再识别：输入+运行 -->
              <block type="face_ai_rec_input">
                <next>
                  <block type="face_ai_rec_run"></block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>

  <!-- 输出块单独放置，避免连接到无 next 的值块 -->
  <block type="face_ai_rec_label" x="420" y="40"></block>
  <block type="face_ai_rec_score" x="420" y="120"></block>
</xml>`;
  }

  // 默认：不返回预置
  return '';
}


</script>

<template>
  <div ref="blocklyDiv" class="blockly-div"></div>
</template>

<style scoped>
.blockly-div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
