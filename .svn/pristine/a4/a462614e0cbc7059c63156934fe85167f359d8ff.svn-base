<script setup>
import { VAceEditor } from 'vue3-ace-editor'

// 引入 Ace Editor
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/ext-language_tools'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(["update:modelValue"])

const updateValue = (val) => {
  emit("update:modelValue", val)
}
</script>

<template>
  <VAceEditor
    :value="modelValue"
    @update:value="updateValue"
    lang="python"
    theme="chrome"
    :options="{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      tabSize: 4,
      useWorker: false
    }"
    class="vue-ace-editor"
  />
</template>

<style src="./index.css"></style>