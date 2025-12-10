<script setup>
import { ref } from 'vue';
import store from '@/store';
import AceEditor from '@/components/Blockly/AceEditor/index.vue';

// let editorList = ref([{data: '123456', path: 'main.py'}]);
const show = ref(0)

function selectTag(val) {
  show.value = val;
}

</script>

<template>
  <div class="editor-container">
    <ul class="editor-tags">
      <li
        v-for="(item, index) in store.editorList"
        @click="selectTag(index)"
        :class="show === index ? 'select' : ''"
        :index="index"
      >
        <span class="file-icon computer"></span>
        <span class="file-name">{{ item.path }}</span>
        <!-- <span class="save-icon">*</span>
        <span class="del-icon"></span> -->
      </li>
    </ul>
    <div class="editor-list">
      <AceEditor
        v-for="(item, index) in store.editorList"
        v-model="item.data"
        :index="index"
        v-show="index === show"
      />
    </div>
  </div>
</template>

<style src="./index.css" scoped></style>
