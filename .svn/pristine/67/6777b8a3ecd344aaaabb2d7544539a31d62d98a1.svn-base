<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Blockly from 'blockly';
import './blockly.css';
import '@/blocks';
import getToolbox from '@/global/toolbox';
import store from '@/store';


const blocklyDiv = ref(null)
let observer = null;
let workspace = null;
let goCreate = ref(false);

onMounted(() => {
  
  init()

  observer = new ResizeObserver(() => {
    console.log("blocklyDiv resized!");
    if (workspace) Blockly.svgResize(workspace);
  });
  observer.observe(blocklyDiv.value);
})

onBeforeUnmount(() => {
  observer?.disconnect();
});


function init() {
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
  // workspace.addChangeListener(clickFunction);
  // workspace.addChangeListener(onBlocklyChange)
  workspace.clear();
  workspace.variableList = workspace.variableList || []
  store.setWorkspace(workspace);
  editBlock();
  
  const route = useRoute();
  console.log(route.query);
  workspace.updateToolbox(getToolbox(route.query));
  store.setICON();

  if (Object.keys(route.query).length <= 0) return;
  setTimeout(() => {
    loadExample(route.query);
  }, 100)
}

async function loadExample(data) {
  const name = data?.example;
  if (!name) return;
  const res = await axios.get('http://localhost:8001/api/example?name=' + name);
  // console.log(res);
  
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

function onBlocklyChange(event) {
  if (event.type === Blockly.Events.UI && event.element === "click") {
    const blockId = event.blockId;
    if (!blockId) return;
    const block = workspace.getBlockById(blockId);
    if (!block) return;
    const code = Blockly.Python.blockToCode(block);
    console.log(code);
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
        trashcan.setOpen(true);
      }
    } else {
      this.draggingBlock_.setDeleteStyle(false);
      if (trashcan) {
        trashcan.setOpen(false);
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
// function clickFunction(e) {
//   console.log('22222',e);
// }



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
