<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';
window.tf = tf // 挂全局，供 mobilenet 使用

const imgRef = ref(null);
const audioRef = ref(null);
const isUploaded = ref(false);
const analyzing = ref(null);
const imgSrc = ref(null);
const analyzeRes = ref(null);
const audioTxt = ref('');
const audioUrl = ref(null);
const speeching = ref(null);
const viewMode = ref(null);

onMounted(() => {
  const route = useRoute();
  console.log(route.query);
  viewMode.value = route.query?.view_mode;
  console.log(viewMode.value);
});

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  isUploaded.value = false;
  analyzing.value = null;
  analyzeRes.value = null; 
  audioUrl.value = null;
  speeching.value = null;
  // 生成本地 URL 并等待 DOM 更新与图片加载完成
  imgSrc.value = URL.createObjectURL(file);
  await nextTick();

  await new Promise((resolve) => {
    const imgEl = imgRef.value;;
    if (!imgEl) return resolve();
    // 如果已经加载好了直接继续
    if (imgEl.complete && imgEl.naturalWidth) return resolve();
    imgEl.onload = () => resolve();
    imgEl.onerror = () => resolve(); // 出错也继续（可根据需求改成 reject）
  });
  isUploaded.value = true;
}

async function startAnaly() {
  if (!imgSrc.value) {
    alert('请先上传图片！');
    return;
  }
  
  analyzing.value = true;
  analyzeRes.value = null;

  // 再动态导入 mobilenet UMD 脚本（确保它能找到 window.tf）
  const mobilenetModule = await import('./model/mobilenet@1.0.0');

  // mobilenet lib 可能挂在全局 mobilenet，也可能通过模块导出，兼容处理：
  const mobilenetLib = window.mobilenet || mobilenetModule.mobilenet || mobilenetModule.default || mobilenetModule;

  // 加载模型并分类
  const model = await mobilenetLib.load();
  const predictions = await model.classify(imgRef.value);
  const maxItem = predictions.reduce((prev, current) => {
    return current.probability > prev.probability ? current : prev;
  })
  console.log('Predictions:', maxItem);
  analyzeRes.value = maxItem;
  analyzing.value = false;
}

async function textToSpeech() {
  if (!viewMode.value?.includes('audio') && !analyzeRes.value) {
    alert('请先完成图片识别！');
    return;
  }
  audioUrl.value = null;
  speeching.value = true;
  const res = await axios.post('/api/speech', {
    text: viewMode.value?.includes('audio') ? audioTxt.value : `我识别到这是一种：${analyzeRes.value?.className}`
  });
  if (!res.data || !res.data.flag) {
    speeching.value = false;
    alert(res.data?.msg || '音频转换失败！');
    return;
  }
  speeching.value = false;
  audioUrl.value = `http://localhost:8001/audio/${res.data.result}`;
  console.log(audioUrl.value);
}


function playAudio() {
  audioRef.value.play();
}

async function urlToBase64(url) {
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result); // result = data:audio/wav;base64,xxxx
    reader.readAsDataURL(blob);
  });
}

async function openAudioPage() {
  // 1. 把 URL 转成 Base64
  const base64Audio = await urlToBase64(audioUrl.value);

  // 2. 构造 HTML
  const str = `
<!DOCTYPE html>
<html>
<head>
    <title>语音播放</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .container {
            text-align: center;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .text-content {
            margin: 20px 0;
            padding: 10px;
            background-color: #f8f8f8;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>语音播放</h2>
        <div class="text-content">
            <p>${viewMode.value?.includes('audio') ? audioTxt.value : `我识别到这是一种：${analyzeRes.value?.className}`}</p>
        </div>
        <audio controls autoplay>
            <source src="${base64Audio}" type="audio/wav">
            您的浏览器不支持音频播放。
        </audio>
    </div>
</body>
</html>
`

  // 3. 打开新窗口并写入 HTML
  const newWin = window.open("", "_blank");
  newWin.document.write(str);
  newWin.document.close();
}
const INTRODUCES = {
  introduce: '本工具包含图像识别、识别结果语音播报、网页播放功能；点击上传识别图片后点击开始识别，等待识别完成后会得到图片的识别结果和置信度，还可以通过语音播报出识别结果，也可以将音频文件转换为网页，在其他电脑上打开。',
  recognize: '本工具包含图像识别；点击上传识别图片后点击开始识别，等待识别完成后会得到图片的识别结果和置信度。',
  audio_only: '本工具包含语音播报功能；通过输入语音内容转换为音频文件，可以语音播报出转换结果。',
  audio_only_web: '本工具包含网页播放功能；通过输入语音内容转换为音频文件，可以将音频文件转换为网页，在其他电脑上打开。',
  audio_and_web: '本工具包含语音播报、网页播放功能；通过输入语音内容转换为音频文件，可以语音播报出转换结果，也可以将音频文件转换为网页，在其他电脑上打开。'
}
</script>

<template>
  <div class="container">
    <h4 class="title">智能环境语音播报系统</h4>
    <div class="content-box">
      <div class="tool-introduce">简介：<br />{{INTRODUCES[viewMode ? viewMode : 'introduce']}}</div>
      <div class="content">
        <div class="analyze-content" v-if="viewMode === 'recognize' || !viewMode">
          <div class="box upload-box">
            <div class="upload-icon" v-if="!imgSrc">
              <p>上传识别图片</p>
              <span><i></i><i></i></span>
            </div>
            <img :src="imgSrc" v-else alt="" srcset="" ref="imgRef" />
            <input type="file" @change="handleFileChange" accept="image/*" />
          </div>
          <div class="transform-arrow">
            <span></span><span></span>
          </div>
          <div class="box analyzing-box">
            <button v-if="analyzing === null" @click="startAnaly" :disabled="!isUploaded">开始识别</button>
            <p v-else>{{ analyzing ? '识别中...' : '识别完成' }}</p>
          </div>
          <div class="transform-arrow">
            <span></span><span></span>
          </div>
          <div class="box info-box">
            <p>识别结果：<br />{{ analyzeRes?.className || '---' }}</p>
            <span class="line"></span>
            <p>置信度：<br />{{ (analyzeRes?.probability?.toFixed(4)) || '---' }}</p>
          </div>
        </div>
        <div class="audio-content" v-if="viewMode?.includes('audio') || !viewMode">
          <div class="box input-box" v-if="viewMode?.includes('audio')">
            <p>请输入语音内容：</p>
            <textarea v-model="audioTxt" placeholder="请输入语音内容..." />
            <span class="line"></span>
            <button @click="textToSpeech" :disabled="!audioTxt || speeching">转换语音</button>
          </div>
          <div class="transform-arrow">
            <span></span><span></span>
          </div>
          <div class="box audio-box">
            <button v-if="!viewMode?.includes('audio') && !audioUrl && !speeching" @click="textToSpeech" :disabled="!analyzeRes">转换语音</button>
            <p v-else-if="!audioUrl && speeching">语音转换中...</p>
            <p v-else-if="!audioUrl">待转换...</p>
            <button v-if="audioUrl&&viewMode !=='audio_only_web'" @click="playAudio">语音播报</button>
            <button v-if="audioUrl&&viewMode !=='audio_only'" @click="openAudioPage">网页播放</button>
          </div>
        </div>
      </div>
    </div>
    <audio :src="audioUrl" ref="audioRef"></audio>
  </div>
</template>

<style src="./index.css" scoped></style>
