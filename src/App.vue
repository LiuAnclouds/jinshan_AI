<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import Modals from '@/components/Blockly/Modals/index.vue';

const route = useRoute()

// 监听路由变化
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (store.modal) store.setModal('');
  }
)

</script>

<template>
  <div>
    <router-view />
    <Modals />
  </div>
</template>

<style scoped>

</style>
