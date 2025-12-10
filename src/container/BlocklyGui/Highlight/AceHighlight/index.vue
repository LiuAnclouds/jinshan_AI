<script setup>
import { VAceEditor } from 'vue3-ace-editor'
import { ref, watch, onMounted } from 'vue'
import * as ace from 'ace-builds'

import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/ext-language_tools'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  // 单行或关键字（用于回退）
  highlightText: {
    type: String,
    default: ''
  },
  // 完整片段（可多行），优先用于高亮范围匹配
  highlightSnippet: {
    type: String,
    default: ''
  },
  // 直接根据行号高亮（0-based），用于区分重复积木
  highlightLine: {
    type: Number,
    default: -1
  }
})

const emit = defineEmits(['update:modelValue'])
const editorRef = ref(null) // holds Vue component ref
const editorInstance = ref(null) // holds real ace editor instance
let highlightMarker = null

const updateValue = (val) => {
  emit('update:modelValue', val)
}

function clearHighlight() {
  const editor = getAceInstance()
  if (!editor || highlightMarker === null) return
  const session = editor.getSession()
  session.removeMarker(highlightMarker)
  highlightMarker = null
  console.log('[highlight] clear marker')
}

function applyHighlight(text) {
  if (typeof props.highlightLine === 'number' && props.highlightLine >= 0) {
    applyHighlightLine(props.highlightLine)
    return
  }
  const editor = getAceInstance()
  const snippet = (props.highlightSnippet || '').trim()
  const targetText = snippet || text

  if (!editor || !targetText) {
    console.log('[highlight] no editor or text', { editor: !!editor, text: targetText })
    clearHighlight()
    return
  }
  const session = editor.getSession()
  const full = session.getValue()

  // 优先用完整片段（支持多行）匹配全文
  if (snippet) {
    const idx = full.indexOf(snippet)
    if (idx !== -1) {
      const start = idx
      const end = idx + snippet.length
      const startLine = full.slice(0, start).split('\n').length - 1
      const startCol = start - full.lastIndexOf('\n', start - 1) - 1
      const endLine = full.slice(0, end).split('\n').length - 1
      const endCol = end - full.lastIndexOf('\n', end - 1) - 1
      markRange(session, startLine, startCol, endLine, endCol)
      console.log('[highlight] applied snippet', { startLine: startLine + 1, endLine: endLine + 1 })
      return
    }
    console.log('[highlight] snippet not found, fallback to single line')
  }

  // 回退：按单行包含匹配
  const lines = session.getDocument().getAllLines()
  const target = targetText.trim()
  let foundLine = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(target)) {
      foundLine = i
      break
    }
  }
  if (foundLine === -1) {
    console.log('[highlight] not found line for text', target)
    clearHighlight()
    return
  }
  clearHighlight()
  markRange(session, foundLine, 0, foundLine, lines[foundLine].length)
  console.log('[highlight] applied at line', foundLine + 1, 'for text', target)
}

watch(
  () => props.highlightText,
  (val) => applyHighlight(val)
)

watch(
  () => props.highlightLine,
  (line) => applyHighlight(props.highlightText)
)

onMounted(() => {
  applyHighlight(props.highlightText)
})

function onEditorInit(editor) {
  editorInstance.value = editor
  console.log('[highlight] editor init', { hasSession: typeof editor?.getSession === 'function' })
  applyHighlight(props.highlightText)
}

function getAceInstance() {
  if (editorInstance.value) return editorInstance.value
  const comp = editorRef.value
  if (!comp) return null
  // vue3-ace-editor 暴露 editor 属性或 getEditor 方法
  if (comp.editor) return comp.editor
  if (typeof comp.getEditor === 'function') return comp.getEditor()
  return null
}

function markRange(session, startLine, startCol, endLine, endCol) {
  clearHighlight()
  const Range = ace.require('ace/range').Range
  highlightMarker = session.addMarker(
    new Range(startLine, startCol, endLine, endCol),
    'ace-highlight-snippet',
    'text',
    false
  )
  const editor = getAceInstance()
  if (editor) {
    editor.scrollToLine(startLine, true, true, () => {})
    editor.gotoLine(startLine + 1, 0, true)
  }
}

function applyHighlightLine(line) {
  const editor = getAceInstance()
  if (!editor || line < 0) {
    clearHighlight()
    return
  }
  const session = editor.getSession()
  const doc = session.getDocument()
  const lines = doc.getAllLines()
  const safeLine = Math.min(line, lines.length - 1)
  const len = lines[safeLine]?.length || 0
  clearHighlight()
  markRange(session, safeLine, 0, safeLine, len)
  console.log('[highlight] applied by line', safeLine + 1)
}
</script>

<template>
  <VAceEditor
    ref="editorRef"
    :value="modelValue"
    @update:value="updateValue"
    @init="onEditorInit"
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

