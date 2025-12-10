<template>
  <div class="h5-container">
    <div class="control-panel">
<<<<<<< HEAD
      <h2>🔍 人脸检测控制台</h2>
=======
      <h2>🔍 AI 人脸识别控制台</h2>

      <p class="status-text" :class="{ success: isModelLoaded }">
        <span v-if="isModelLoaded">
          ✅ 模型加载完毕 (耗时 {{ loadTime }} 秒)，可以开始识别
        </span>
        <span v-else>
          ⏳ 正在初始化 AI 模型...
        </span>
      </p>

>>>>>>> b24584f (HighLight)
      <div class="mode-switch">
        <button :class="{ active: mode === 'upload' }" @click="setMode('upload')">📂 上传图片</button>
        <button :class="{ active: mode === 'camera' }" @click="setMode('camera')">📷 摄像头实时</button>
      </div>

      <div v-if="mode === 'camera'" class="action-box">
<<<<<<< HEAD
        <button v-if="!isCameraOpen" @click="openCamera" class="btn primary">开启摄像头</button>
=======
        <button v-if="!isCameraOpen" @click="openCamera" class="btn primary" :disabled="!isModelLoaded">开启摄像头</button>
>>>>>>> b24584f (HighLight)
        <button v-else @click="captureFrame" class="btn warning">拍照并识别</button>
        <button v-if="isCameraOpen" @click="closeCamera" class="btn danger">关闭</button>
      </div>

      <div v-else class="action-box">
        <input type="file" ref="fileInput" @change="handleFile" accept="image/*" style="display:none">
<<<<<<< HEAD
        <button @click="$refs.fileInput.click()" class="btn primary">选择图片</button>
=======
        <button @click="$refs.fileInput.click()" class="btn primary" :disabled="!isModelLoaded">选择图片</button>
>>>>>>> b24584f (HighLight)
      </div>
    </div>

    <div class="display-area">
      <video v-show="mode === 'camera' && isCameraOpen" ref="video" autoplay playsinline class="preview-media"></video>

      <div class="canvas-wrapper" v-show="imageUrl || (mode === 'camera' && captured)">
<<<<<<< HEAD
        <img v-if="imageUrl" :src="imageUrl" ref="targetImg" class="preview-media" />
=======
        <img
            v-if="imageUrl"
            :src="imageUrl"
            ref="targetImg"
            class="preview-media"
            @load="onImageLoad"
        />
>>>>>>> b24584f (HighLight)
        <canvas ref="overlay" class="overlay-canvas"></canvas>
      </div>

      <div v-if="loading" class="loading-overlay">
        <div class="spinner"></div>
        <p>AI 正在分析人脸特征...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'upload', // 'upload' | 'camera'
      isCameraOpen: false,
      imageUrl: null,
      captured: false,
      loading: false,
<<<<<<< HEAD
      stream: null
    };
  },
  methods: {
    setMode(m) {
      this.mode = m;
      this.reset();
      if (m === 'upload') this.closeCamera();
    },
    reset() {
=======
      stream: null,
      isModelLoaded: false,
      faceApi: null,
      loadTime: 0 // 新增：用于存储模型加载耗时
    };
  },
  async mounted() {
    // 1. 检查本地 face-api.js 是否加载
    const checkTimer = setInterval(async () => {
      if (window.faceapi) {
        clearInterval(checkTimer);
        console.log("本地 face-api.js 库加载成功");
        this.faceApi = window.faceapi;
        await this.loadFaceModel();
      }
    }, 100);

    // 10秒超时保护
    setTimeout(() => {
      if (!this.faceApi) clearInterval(checkTimer);
    }, 10000);
  },
  methods: {
    async loadFaceModel() {
      try {
        this.loading = true;
        // 记录开始时间
        const startTime = performance.now();

        // 确保你的模型文件位于 public/NewFace/model/ 目录下
        const modelPath = '/NewFace/model';
        console.log(`正在从 ${modelPath} 加载模型...`);

        await this.faceApi.nets.tinyFaceDetector.loadFromUri(modelPath);

        // 记录结束时间并计算耗时 (保留2位小数)
        const endTime = performance.now();
        this.loadTime = ((endTime - startTime) / 1000).toFixed(2);

        console.log(`✅ 模型加载成功！耗时 ${this.loadTime} 秒`);
        this.isModelLoaded = true;
      } catch (error) {
        console.error("❌ 模型加载失败:", error);
        alert(`模型加载失败！\n请检查 public/NewFace/model/ 目录下是否有模型文件。`);
      } finally {
        this.loading = false;
      }
    },

    setMode(m) {
      this.mode = m;
      this.resetData();
      if (m === 'upload') this.closeCamera();
    },

    // 重置数据，释放旧图片内存
    resetData() {
      if (this.imageUrl && this.imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(this.imageUrl);
      }
>>>>>>> b24584f (HighLight)
      this.imageUrl = null;
      this.captured = false;
      this.clearCanvas();
    },
<<<<<<< HEAD
=======

    // --- 摄像头控制 ---
>>>>>>> b24584f (HighLight)
    async openCamera() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        this.isCameraOpen = true;
<<<<<<< HEAD
        this.reset();
=======
        this.resetData();
>>>>>>> b24584f (HighLight)
      } catch (err) {
        alert("无法访问摄像头: " + err.message);
      }
    },
    closeCamera() {
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop());
        this.stream = null;
      }
      this.isCameraOpen = false;
    },
<<<<<<< HEAD
    handleFile(e) {
      const file = e.target.files[0];
      if (!file) return;
      this.imageUrl = URL.createObjectURL(file);
      this.$nextTick(() => {
        this.simulateDetection(this.$refs.targetImg);
      });
    },
    captureFrame() {
      const video = this.$refs.video;
=======

    // --- 图片处理逻辑 ---

    // 1. 处理文件上传
    handleFile(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.resetData();
      this.imageUrl = URL.createObjectURL(file);
      e.target.value = '';
    },

    // 2. 处理摄像头拍照
    captureFrame() {
      const video = this.$refs.video;
      if (!video) return;

>>>>>>> b24584f (HighLight)
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
<<<<<<< HEAD
      this.imageUrl = canvas.toDataURL('image/png');
      this.closeCamera(); // 拍照后暂停视频流
      this.captured = true;
      this.$nextTick(() => {
        this.simulateDetection(this.$refs.targetImg);
      });
    },
=======

      this.resetData();
      this.imageUrl = canvas.toDataURL('image/png');
      this.closeCamera();
      this.captured = true;
    },

    // 3. 图片加载完毕的回调
    onImageLoad() {
      console.log("图片资源加载完毕，开始识别...");
      this.detectFaces(this.$refs.targetImg);
    },

>>>>>>> b24584f (HighLight)
    clearCanvas() {
      const canvas = this.$refs.overlay;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    },
<<<<<<< HEAD
    // 模拟人脸识别算法 (因为没有后端Python环境，这里用Mock演示逻辑)
    simulateDetection(imgElement) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (!imgElement) return;

        const canvas = this.$refs.overlay;
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        const ctx = canvas.getContext('2d');

        // 模拟：在图片中心画一个识别框
        const faceW = imgElement.width * 0.4;
        const faceH = imgElement.height * 0.4;
        const faceX = (imgElement.width - faceW) / 2;
        const faceY = (imgElement.height - faceH) / 3;

        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 4;
        ctx.strokeRect(faceX, faceY, faceW, faceH);

        // 标签
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(faceX, faceY - 30, faceW, 30);
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.fillText("User_Admin (98%)", faceX + 10, faceY - 8);

        alert("识别成功！检测到 1 张人脸。");
      }, 1500);
=======

    // --- 辅助函数：画圆角矩形 ---
    drawRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    },

    // --- AI 识别核心 (美化版) ---
    async detectFaces(imgElement) {
      if (!this.isModelLoaded || !imgElement) return;

      this.loading = true;

      try {
        const options = new this.faceApi.TinyFaceDetectorOptions({
          inputSize: 416,
          scoreThreshold: 0.5
        });

        // 1. 检测人脸
        const detections = await this.faceApi.detectAllFaces(imgElement, options);

        // 2. 匹配画布尺寸
        const canvas = this.$refs.overlay;
        const displaySize = { width: imgElement.width, height: imgElement.height };
        this.faceApi.matchDimensions(canvas, displaySize);

        // 3. 调整结果比例
        const resizedDetections = this.faceApi.resizeResults(detections, displaySize);

        // 4. 清空画布
        this.clearCanvas();

        this.loading = false;

        // 5. 绘制美化后的框
        if (detections.length > 0) {
          const ctx = canvas.getContext('2d');

          resizedDetections.forEach(det => {
            const { x, y, width, height } = det.box;
            const score = Math.round(det.score * 100);

            // --- A. 画圆角框 ---
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#FFD700'; // 金黄色
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // 阴影
            ctx.shadowBlur = 10;

            this.drawRoundedRect(ctx, x, y, width, height, 10);
            ctx.stroke();

            // 重置阴影
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;

            // --- B. 画可爱的标签背景 ---
            const label = `🤖 准确率: ${score}%`; // 这里的文案修改了
            ctx.font = 'bold 16px "Microsoft YaHei", sans-serif';
            const textWidth = ctx.measureText(label).width + 20;
            const textHeight = 30;

            ctx.fillStyle = '#FFD700';

            // 标签画在框的上方
            this.drawRoundedRect(ctx, x, y - textHeight, textWidth, textHeight, 5);
            ctx.fill();

            // --- C. 画文字 ---
            ctx.fillStyle = '#5a3e00'; // 深褐色文字
            ctx.fillText(label, x + 10, y - 8);
          });

          console.log(`检测到 ${detections.length} 张人脸`);
        } else {
          alert("哎呀，没找到人脸！请调整光线或角度。");
        }

      } catch (error) {
        console.error("识别出错:", error);
        alert("识别过程出错: " + error.message);
        this.loading = false;
      }
>>>>>>> b24584f (HighLight)
    }
  },
  beforeUnmount() {
    this.closeCamera();
<<<<<<< HEAD
=======
    // 离开页面时清理内存
    if (this.imageUrl && this.imageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this.imageUrl);
    }
>>>>>>> b24584f (HighLight)
  }
};
</script>

<style scoped>
<<<<<<< HEAD
.h5-container { padding: 20px; display: flex; flex-direction: column; align-items: center; max-width: 900px; margin: 0 auto; }
.control-panel { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 100%; text-align: center; margin-bottom: 20px; }
.mode-switch { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; }
.mode-switch button { padding: 10px 20px; border: none; background: #eee; cursor: pointer; border-radius: 20px; transition: 0.3s; }
.mode-switch button.active { background: #409eff; color: white; }
.btn { padding: 10px 25px; border: none; border-radius: 6px; cursor: pointer; color: white; font-weight: bold; margin: 0 5px; }
.primary { background: #409eff; }
.warning { background: #e6a23c; }
.danger { background: #f56c6c; }
.display-area { position: relative; width: 100%; min-height: 400px; background: #000; border-radius: 12px; display: flex; justify-content: center; align-items: center; overflow: hidden; }
.preview-media { max-width: 100%; max-height: 600px; }
.canvas-wrapper { position: relative; display: inline-block; }
.overlay-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
.loading-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; }
=======
.h5-container { padding: 20px; display: flex; flex-direction: column; align-items: center; max-width: 900px; margin: 0 auto; font-family: 'Segoe UI', sans-serif; }
.control-panel { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); width: 100%; text-align: center; margin-bottom: 25px; }
.status-text { font-size: 14px; color: #666; margin-bottom: 15px; font-weight: bold; }
.status-text.success { color: #67C23A; }

.mode-switch { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; }
.mode-switch button { padding: 10px 20px; border: none; background: #f0f2f5; cursor: pointer; border-radius: 20px; transition: 0.3s; color: #666; font-weight: 600;}
.mode-switch button.active { background: #409eff; color: white; box-shadow: 0 4px 10px rgba(64,158,255,0.3); }

.btn { padding: 10px 30px; border: none; border-radius: 8px; cursor: pointer; color: white; font-weight: bold; margin: 0 5px; font-size: 15px; transition: 0.2s; }
.btn:active { transform: scale(0.98); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; background: #ccc; }
.primary { background: linear-gradient(135deg, #409eff, #3a8ee6); }
.warning { background: linear-gradient(135deg, #e6a23c, #d6922c); }
.danger { background: #F56C6C; }

.display-area { position: relative; width: 100%; min-height: 400px; background: #1a1a1a; border-radius: 16px; display: flex; justify-content: center; align-items: center; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
.preview-media { max-width: 100%; max-height: 70vh; display: block; }
.canvas-wrapper { position: relative; display: inline-block; line-height: 0; }
.overlay-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }

.loading-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.75); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 10; }
>>>>>>> b24584f (HighLight)
.spinner { width: 40px; height: 40px; border: 4px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 15px; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>