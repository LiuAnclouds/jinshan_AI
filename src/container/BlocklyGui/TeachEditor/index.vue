<script setup>
import { ref, onMounted } from 'vue';
import store from '@/store';
import AceHighlight from '@/container/BlocklyGui/Highlight/AceHighlight/index.vue';

</script>

<template>
  <div class="teach-container">
    <AceHighlight
      v-model="store.pyCode"
      :highlight-text="store.selectedBlockCode"
      :highlight-snippet="store.selectedBlockSnippet"
      :highlight-line="store.selectedBlockLine"
    />
  </div>
</template>

<style src="./index.css" scoped></style>
