<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store';
import Blockly from 'blockly';
import { arraysEqualIgnoreOrder } from '@/utils/tool';

const TOOL_URLS = [
  {
    path: '/environmental/image-rec',
    blocks: ['env_bcst_init', 'env_bcst_img_analyze'],
    params: {
      view_mode: 'recognize'
    }
  }, {
    path: '/environmental/image-rec',
    blocks: ['env_bcst_init', 'env_bcst_txt_to_speech'],
    params: {
      view_mode: 'audio_only'
    }
  }, {
    path: '/environmental/image-rec',
    blocks: ['env_bcst_init', 'env_bcst_web_to_speech'],
    params: {
      view_mode: 'audio_only_web'
    }
  }, {
    path: '/environmental/image-rec',
    blocks: ['env_bcst_init', 'env_bcst_txt_to_speech', 'env_bcst_web_to_speech'],
    params: {
      view_mode: 'audio_and_web'
    }
  }
]
const router = useRouter();
let menu = ref('');
let timer = null;

function showMenu(val, event) {
  event?.stopPropagation();
  menu.value = !val || val === menu.value ? '' : val;
}

function teachMode(val) {
  const { gui, editor, teach, console } = store.viewMode;
  if (editor) return;
  store.setViewMode({teach: !teach,  console: !console})
}

function runCode() {
  const { xmlCode, pyCode } = store;
  store.setRunState(true);
  let arr = xmlCode ? xmlCode.match(/(?<=type=")[\w_]+(?=")/g) : [];

  let obj = null;
  for (let i = 0; i < TOOL_URLS.length; i++) {
    if (arraysEqualIgnoreOrder(TOOL_URLS[i].blocks, arr)) {
      obj = TOOL_URLS[i];
      break;
    }
  }
  console.log(obj);
  if (obj) {
    router.push({ path: obj.path, query: obj?.params || {} });
  }
  // console.log(pyCode);
  timer = setTimeout(() => {
    store.setRunState(false);
  }, 5000);
}

function stopCode() {
  clearTimeout(timer)
  store.setRunState(false);
}

function editorCode() {
  const { gui, editor, teach, console } = store.viewMode;
  let newGui = !gui;
  let newEditor = !editor;
  if (newEditor) {
    let have = false;
    let arr = store.editorList;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].path === 'main.py') {
        arr.unshift(...arr.splice(i, 1));
        arr[0].select = true;
        arr[0].data = store.pyCode;
        arr[0].noPre = true;
        have = true;
      } else {
        arr[i].select = false;
      }
    }
    if (!have) {
      arr.unshift({
        id: new Date().getTime(),
        data: store.pyCode,
        noPre: true,
        path: 'main.py',
        select: true
      })
    }
  } else {
    var code = Blockly.Python.workspaceToCode(store.workspace);
    store.setPyCode(code);
  }
  
  store.setViewMode({
    gui: newGui,
    editor: newEditor,
    teach: 0,
    console: 1
  })
}

function openLocal(e) {
  if (!e) return;
  let file = e.target.files[0];
  if (!file) return;

  let reader = new FileReader();
  reader.onload = function () {
    let dom = null;
    try {
      dom = Blockly.Xml.textToDom(this.result);
    } catch (e) {
      console.log(e)
    }
    if (dom) {
      store.loadXMLCode({
        title: file.name,
        xmlCode: this.result,
        notClear: false
      });
    } else {
      store.loadPyCode({ code: this.result });
    }
    e.target.value = null;
  };
  reader.readAsText(file)
}

function saveLocal() {
  store.setModal('saveModal');
}

// ⭐ 暴露出去让父组件可以调用
defineExpose({
  showMenu
})
</script>

<template>
  <div class="heaer">
    <div class="left">
      <img class="logo" src="./images/python-logo.png" alt="" srcset="" />
      <div :class="menu === 'file' ? 'menu-btn active' : 'menu-btn'" @click="showMenu('file', $event)">
        <span><i></i>文件</span>
        <ul class="menu">
          <!-- <li class="new">新建文件</li> -->
          <li class="open">
            <span>打开本地</span>
            <input type="file" @change="openLocal($event)" style="width: 100%; height: 100%;" />
          </li>
          <li class="save" @click="saveLocal">保存本地</li>
        </ul>
      </div>
      <div class="teach-btn" v-show="store.viewMode.gui">
        <div :class="!store.viewMode.teach ? 'active' : ''" @click="teachMode(0)"><i></i>普通</div>
        <div :class="store.viewMode.teach ? 'active' : ''" @click="teachMode(1)"><i></i>教学</div>
      </div>
    </div>
    <div class="right">
      <div class="head-btn stop" @click="stopCode" v-if="store.running">
        <i class="stop-icon"></i>
        <span>停止</span>
      </div>
      <div class="head-btn" @click="runCode" v-else>
        <i class="run-icon"></i>
        <span>运行</span>
      </div>
      <div class="head-btn" @click="editorCode">
        <i class="code-icon"></i>
        <span>代码</span>
      </div>
    </div>
  </div>
</template>

<style src="./index.css" scoped></style>
