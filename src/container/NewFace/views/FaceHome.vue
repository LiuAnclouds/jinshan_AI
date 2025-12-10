<<<<<<< HEAD
=======
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle navigation to the H5 demo
const goToH5Demo = () => {
  router.push({ name: 'FaceH5Demo' })
}

// Function to handle navigation to the Blockly GUI with the 'newface' type
const goToBlocklyGui = () => {
  router.push({ path: '/blockly-gui', query: { type: 'newface' } })
}
</script>

>>>>>>> b24584f (HighLight)
<template>
  <div class="face-home">
    <div class="header-section">
      <h1>🤖 AI 人脸识别实验室</h1>
      <p>探索计算机视觉的奥秘：从 Web 应用到 Python 算法编程</p>
    </div>

    <div class="cards-container">
<<<<<<< HEAD
      <div class="feature-card h5-card" @click="$router.push({ name: 'FaceH5Demo' })">
=======
      <div class="feature-card h5-card" @click="goToH5Demo">
>>>>>>> b24584f (HighLight)
        <div class="card-icon">📸</div>
        <div class="card-content">
          <h3>Web 端智能识别</h3>
          <p>无需编程，直接体验！支持上传照片或调用本机摄像头进行实时人脸检测。</p>
          <span class="tag">H5 实战</span>
        </div>
      </div>

<<<<<<< HEAD
      <div class="feature-card code-card" @click="$router.push({ name: 'FaceBlocklyDemo' })">
        <div class="card-icon">🧩</div>
        <div class="card-content">
          <h3>OpenCV 图形化训练</h3>
          <p>像搭积木一样编写 Python 代码！学习如何收集人脸数据并训练你自己的 AI 模型。</p>
          <span class="tag">Blockly x OpenCV</span>
=======
      <div class="feature-card ai-card" @click="goToBlocklyGui">
        <div class="card-icon">🧠</div>
        <div class="card-content">
          <h3>人脸识别积木编程</h3>
          <p>基于 NewFace 模块！自定义积木工具箱，体验 AI 初始化、模型加载与人脸录入。</p>
          <span class="tag">NewFace 实战</span>
>>>>>>> b24584f (HighLight)
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.face-home {
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
}

.header-section h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.header-section p {
  font-size: 1.2rem;
  color: #555;
}

.cards-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-card {
  background: white;
  width: 320px;
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.card-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.card-content h3 {
  margin: 0 0 10px;
  color: #333;
}

.card-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.tag {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

<<<<<<< HEAD
.h5-card .tag { background: #e1f5fe; color: #0288d1; }
.code-card .tag { background: #e8f5e9; color: #388e3c; }
=======
/* Styles for the H5 card tag */
.h5-card .tag {
  background: #e1f5fe;
  color: #0288d1;
}

/* Styles for the AI card tag (Purple theme) */
.ai-card .tag {
  background: #f3e5f5;
  color: #7b1fa2;
}
>>>>>>> b24584f (HighLight)
</style>