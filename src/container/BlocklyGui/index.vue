<script setup>
import { ref, computed, watch } from 'vue';
import * as Blockly from 'blockly';
import './lang/blocks_lang';
import Header from './Header/index.vue';
import BlocklyDiv from './BlocklyDiv/index.vue';
import EditorList from './EditorList/index.vue';
import TeachEditor from './TeachEditor/index.vue';
import Terminal from './Terminal/index.vue';
import store from '@/store';

let header = ref(null)
let rightWidth = ref(336)
let offsetX = 0;
let teachWidth = null;


function globalClick() {
  // console.log(header.value);
  header.value?.showMenu('')
}

const onDown = (e) => {
  const target = e.target;
  const dw = document.body.offsetWidth;
  const tw = document.querySelector('.blocklyToolboxDiv')?.offsetWidth || 148;

  offsetX = e.clientX - (dw - (teachWidth || rightWidth.value));

  // 关键：捕获指针，事件不会再丢
  target.setPointerCapture(e.pointerId);

  const onMove = (ev) => {
    teachWidth = dw - ev.clientX + offsetX;
    teachWidth = Math.max(40, Math.min(teachWidth, dw - tw));
    if (store.viewMode.teach) rightWidth.value = teachWidth;
  };

  const onUp = (ev) => {
    target.releasePointerCapture(e.pointerId);
    target.removeEventListener('pointermove', onMove);
    target.removeEventListener('pointerup', onUp);
  };

  target.addEventListener('pointermove', onMove);
  target.addEventListener('pointerup', onUp);
};



watch(
  () => [store.viewMode.teach, store.viewMode.console],
  ([tea, con]) => {
    if (tea) {
      rightWidth.value = teachWidth ? teachWidth : Math.floor(document.body.offsetWidth / 2);
    } else if (con) {
      rightWidth.value = 366;
    }
  }
)


</script>

<template>
  <div class="container" @click="globalClick">
    <Header ref="header" />
    <div class="content">
      <div class="content-left">
        <BlocklyDiv :style="{zIndex: store.viewMode.gui ? 9 : 1}" />
        <EditorList :style="{zIndex: store.viewMode.editor ? 9 : 1}" />
      </div>
      <div class="content-right" :style="{width: (rightWidth + 'px')}">
        <div class="drag-box" @pointerdown="onDown" v-show="store.viewMode.teach"></div>
        <TeachEditor v-show="store.viewMode.teach" />
        <Terminal v-show="store.viewMode.console" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
}
.content-left {
  height: 100%;
  flex: 1;
  position: relative;
}
.content-right {
  height: 100%;
  position: relative;
}
.drag-box {
  width: 40px;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  cursor: col-resize;
}
</style>
