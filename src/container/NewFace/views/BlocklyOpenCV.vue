<template>
  <div class="app-container">
    <header class="top-bar">
      <div class="brand-section">
        <div class="logo-circle">👁️</div>
        <div class="titles">
          <h1>AI 视觉工厂</h1>
          <p>Python 智能编程</p>
        </div>
      </div>

      <div class="control-center">
        <button
            class="ctrl-btn run"
            :class="{ active: isRunning }"
            @click="toggleRun"
        >
          <span class="btn-icon">{{ isRunning ? '⏳' : '▶' }}</span>
          <span class="btn-text">{{ isRunning ? '运行中...' : '开始运行' }}</span>
        </button>

        <button
            class="ctrl-btn stop"
            :disabled="!isRunning"
            @click="stopSimulation"
        >
          <span class="btn-icon">⏹</span>
          <span class="btn-text">停止</span>
        </button>
      </div>

      <div class="tools-right">
        <button class="icon-btn" @click="workspace.undo()" title="撤销">↩️</button>
        <button class="icon-btn" @click="workspace.redo()" title="重做">↪️</button>
        <div class="divider"></div>
        <button class="exit-btn" @click="$router.push('/face-project')">退出 🚪</button>
      </div>
    </header>

    <div class="main-body">
      <div class="sidebar-panel">
        <transition name="fade-slide" mode="out-in">

          <div v-if="!currentCategory" key="home" class="nav-grid">
            <div
                v-for="cat in categories"
                :key="cat.id"
                class="nav-card"
                :style="{ '--theme-color': cat.color }"
                @click="enterCategory(cat)"
            >
              <div class="nav-icon" :style="{ background: cat.color }">{{ cat.icon }}</div>
              <span>{{ cat.name }}</span>
            </div>
          </div>

          <div v-else key="blocks" class="blocks-container">
            <button class="back-btn" @click="backToHome">
              <span class="arrow">‹</span> 返回菜单
            </button>
            <div class="category-header" :style="{ color: currentCategory.color }">
              {{ currentCategory.icon }} {{ currentCategory.name }}
            </div>
            <div class="blocks-area-placeholder">
              <p class="hint">⬇️ 拖拽积木到右侧 ⬇️</p>
            </div>
          </div>

        </transition>
      </div>

      <div class="workspace-panel">
        <div id="blocklyDiv" ref="blocklyDiv"></div>
      </div>

      <div class="dashboard-panel">

        <div class="dash-card video-card">
          <div class="card-title">
            <span>📷 机器之眼</span>
            <span class="live-badge" v-if="isRunning">LIVE</span>
          </div>
          <div class="video-display">
            <video ref="videoElement" autoplay playsinline class="real-video"></video>
            <canvas ref="canvasElement" class="ai-overlay"></canvas>

            <div v-if="!isRunning" class="standby-gradient">
              <div class="standby-content">
                <div class="pulse-icon">🔌</div>
                <p>等待连接摄像头...</p>
                <small>请点击顶部的 [开始运行]</small>
              </div>
            </div>
          </div>
        </div>

        <div class="dash-card code-card">
          <div class="tab-header">
            <button
                :class="{ active: codeTab === 'module' }"
                @click="codeTab = 'module'">🧩 积木代码</button>
            <button
                :class="{ active: codeTab === 'full' }"
                @click="codeTab = 'full'">📜 完整代码</button>
          </div>
          <div class="code-viewport custom-scroll">
            <pre v-if="codeTab === 'full'" class="code-text" v-html="highlightedCode"></pre>
            <div v-else class="module-view">
              <p v-if="!selectedBlockCode" class="empty-tip">点击画布上的积木<br>查看对应代码</p>
              <pre v-else class="code-text highlight">{{ selectedBlockCode }}</pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Blockly from 'blockly';
import 'blockly/python';
import '../blocks/definitions.js';
import { initPythonGenerator } from '../blocks/generators.js';
// 确保文件路径正确
import { TOOLBOX_CATEGORIES, getToolboxXML } from '../blocks/toolbox_data.js';

export default {
  data() {
    return {
      workspace: null,
      categories: TOOLBOX_CATEGORIES || [], // 防错处理
      currentCategory: null,
      isRunning: false,
      codeTab: 'full', // 'full' | 'module'
      fullCode: '',
      highlightedCode: '',
      selectedBlockCode: '',
      stream: null,
      animationFrame: null,
    };
  },
  mounted() {
    initPythonGenerator();
    this.initBlockly();
  },
  methods: {
    initBlockly() {
      this.workspace = Blockly.inject(this.$refs.blocklyDiv, {
        toolbox: '<xml></xml>', // 初始为空，由 Sidebar 控制
        scrollbars: true,
        zoom: { controls: true, wheel: true, startScale: 0.9 },
        grid: { spacing: 40, length: 2, colour: '#ccc', snap: true },
        trashcan: false
      });

      // 监听代码变化
      this.workspace.addChangeListener((e) => {
        // 1. 生成全量代码
        const code = Blockly.Python.workspaceToCode(this.workspace);
        this.fullCode = code;
        this.highlightedCode = this.colorize(code);

        // 2. 监听点击事件，获取模块代码
        if (e.type === Blockly.Events.CLICK) {
          const block = this.workspace.getBlockById(e.blockId);
          if (block) {
            let bCode = Blockly.Python.blockToCode(block);
            if (Array.isArray(bCode)) bCode = bCode[0]; // 处理返回值
            this.selectedBlockCode = bCode;
            this.codeTab = 'module'; // 自动切到模块视图
          }
        }
      });

      window.addEventListener('resize', () => Blockly.svgResize(this.workspace));
    },

    // 导航逻辑
    enterCategory(cat) {
      this.currentCategory = cat;
      const xml = getToolboxXML(cat.id);
      this.workspace.updateToolbox(xml);
    },
    backToHome() {
      this.currentCategory = null;
      this.workspace.updateToolbox('<xml></xml>'); // 清空工具栏
    },

    // 运行逻辑
    toggleRun() {
      if (this.isRunning) this.stopSimulation();
      else this.runSimulation();
    },
    async runSimulation() {
      if (!this.fullCode.includes('cv2.VideoCapture')) {
        alert("请先拖入 [📷 启动 AI 摄像头] 积木！");
        return;
      }
      this.isRunning = true;
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.videoElement.srcObject = this.stream;
        this.startAiLoop();
      } catch (e) {
        alert("无法打开摄像头: " + e.message);
        this.isRunning = false;
      }
    },
    stopSimulation() {
      this.isRunning = false;
      if (this.stream) this.stream.getTracks().forEach(t => t.stop());
      if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
      const ctx = this.$refs.canvasElement?.getContext('2d');
      if (ctx) ctx.clearRect(0,0,1000,1000);
    },
    startAiLoop() {
      const loop = () => {
        if (!this.isRunning) return;
        // 简单的模拟画框效果
        if (this.fullCode.includes('detectMultiScale') && this.$refs.canvasElement) {
          const cvs = this.$refs.canvasElement;
          const vid = this.$refs.videoElement;
          if (cvs.width !== vid.clientWidth) {
            cvs.width = vid.clientWidth;
            cvs.height = vid.clientHeight;
          }
          const ctx = cvs.getContext('2d');
          ctx.clearRect(0,0,cvs.width,cvs.height);

          // 模拟动态框
          const t = Date.now()/500;
          const x = cvs.width/2 - 100 + Math.sin(t)*20;
          ctx.strokeStyle = '#00ff00';
          ctx.lineWidth = 4;
          ctx.strokeRect(x, cvs.height/2-100, 200, 200);
          ctx.fillStyle = '#00ff00';
          ctx.font = 'bold 16px Arial';
          ctx.fillText("Face: 98%", x, cvs.height/2 - 110);
        }
        this.animationFrame = requestAnimationFrame(loop);
      };
      loop();
    },

    // 简单的高亮函数
    colorize(text) {
      return text
          .replace(/import/g, '<span style="color:#c678dd">import</span>')
          .replace(/cv2/g, '<span style="color:#e06c75">cv2</span>')
          .replace(/print/g, '<span style="color:#61afef">print</span>')
          .replace(/#.*/g, '<span style="color:#98c379">$&</span>');
    }
  },
  beforeUnmount() {
    this.stopSimulation();
  }
};
</script>

<style scoped>
/* 全局布局 - 极光背景 */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* 这里的渐变是你要求的“最美观的渐变色” */
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

/* 1. 顶部控制栏 (Fixed Layout) */
.top-bar {
  height: 64px;
  background: rgba(255, 255, 255, 0.85); /* 磨砂玻璃 */
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  z-index: 100;
}

.brand-section { display: flex; align-items: center; gap: 12px; }
.logo-circle {
  width: 40px; height: 40px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 20px;
}
.titles h1 { margin: 0; font-size: 18px; color: #333; }
.titles p { margin: 0; font-size: 11px; color: #666; letter-spacing: 1px; }

.control-center { display: flex; gap: 16px; }
.ctrl-btn {
  border: none; padding: 10px 24px; border-radius: 30px;
  font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.ctrl-btn.run { background: #00b894; color: white; }
.ctrl-btn.run:hover { background: #00a884; transform: translateY(-2px); }
.ctrl-btn.run.active { background: #fab1a0; color: #d63031; animation: pulse 2s infinite; }

.ctrl-btn.stop { background: #ff7675; color: white; opacity: 0.6; cursor: not-allowed; }
.ctrl-btn.stop:not(:disabled) { opacity: 1; cursor: pointer; }
.ctrl-btn.stop:not(:disabled):hover { background: #d63031; transform: translateY(-2px); }

.tools-right { display: flex; align-items: center; gap: 10px; }
.icon-btn { background: none; border: none; font-size: 20px; cursor: pointer; padding: 5px; border-radius: 8px; }
.icon-btn:hover { background: rgba(0,0,0,0.05); }
.exit-btn {
  padding: 8px 16px; border: 2px solid #dfe6e9; background: white;
  border-radius: 8px; color: #636e72; cursor: pointer; font-weight: 600;
}
.exit-btn:hover { border-color: #ff7675; color: #ff7675; }

/* 主体布局 */
.main-body { display: flex; flex: 1; overflow: hidden; }

/* 2. 左侧导航 (层级逻辑) */
.sidebar-panel {
  width: 260px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  border-right: 1px solid rgba(255,255,255,0.3);
  padding: 20px;
  display: flex; flex-direction: column;
}

/* 首页网格 */
.nav-grid { display: grid; gap: 12px; }
.nav-card {
  background: white;
  padding: 15px; border-radius: 12px;
  display: flex; align-items: center; gap: 12px;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  border: 1px solid transparent;
}
.nav-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.05);
  border-color: var(--theme-color, #409eff);
}.nav-icon {
  width: 36px; height: 36px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 18px;
}

/* 积木容器 */
.blocks-container { height: 100%; display: flex; flex-direction: column; }
.back-btn {
  background: none; border: none; color: #636e72;
  font-size: 14px; cursor: pointer; margin-bottom: 10px;
  display: flex; align-items: center;
}
.category-header { font-size: 18px; font-weight: 800; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 2px solid rgba(0,0,0,0.05); }
.blocks-area-placeholder { flex: 1; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 12px; font-style: italic; }

/* 3. 中间工作区 */
.workspace-panel { flex: 1; background: rgba(255,255,255,0.4); margin: 10px; border-radius: 16px; overflow: hidden; box-shadow: inset 0 0 10px rgba(0,0,0,0.02); position: relative; }
#blocklyDiv { width: 100%; height: 100%; }

/* 4. 右侧仪表盘 */
.dashboard-panel { width: 350px; display: flex; flex-direction: column; gap: 15px; padding: 15px 15px 15px 0; }
.dash-card {
  background: white; border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  overflow: hidden; display: flex; flex-direction: column;
}

/* A. 视频卡片 */
.video-card { flex: 0 0 auto; }
.card-title {
  padding: 12px 16px; background: #fff; font-weight: 700; color: #2d3436;
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid #f1f2f6;
}
.live-badge { background: #ff7675; color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px; }

.video-display {
  position: relative; width: 100%; aspect-ratio: 4/3;
  background: #000;
}
.real-video { width: 100%; height: 100%; object-fit: cover; }
.ai-overlay { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none; }

/* 待机状态：绝对居中 + 美观渐变 */
.standby-gradient {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  /* 赛博朋克风渐变 */
  background: linear-gradient(45deg, #85ffbd 0%, #ffffb4 100%);
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  text-align: center;
}
.standby-content { color: #2d3436; }
.pulse-icon { font-size: 40px; animation: bounce 2s infinite; display: block; margin-bottom: 10px; }
.standby-content p { margin: 0; font-weight: 600; font-size: 14px; }
.standby-content small { font-size: 11px; opacity: 0.7; }

/* B. 代码卡片 */
.code-card { flex: 1; min-height: 200px; display: flex; flex-direction: column; }
.tab-header { display: flex; background: #f1f2f6; pading: 4px; }
.tab-header button {
  flex: 1; border: none; background: transparent; padding: 10px;
  cursor: pointer; font-size: 12px; color: #636e72;
  border-bottom: 2px solid transparent;
}
.tab-header button.active { background: white; color: #0984e3; border-bottom-color: #0984e3; font-weight: bold; }

.code-viewport { flex: 1; position: relative; overflow: hidden; background: #282c34; }
.custom-scroll { overflow-y: auto; }
.code-text {
  margin: 0; padding: 15px; color: #abb2bf; font-family: 'Consolas', monospace;
  font-size: 12px; line-height: 1.5; white-space: pre-wrap;
}
.module-view { height: 100%; display: flex; justify-content: center; align-items: center; text-align: center; }
.empty-tip { color: #5c6370; font-size: 12px; }

/* 动画 */
@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s; }
.fade-slide-enter-from { opacity: 0; transform: translateX(20px); }
.fade-slide-leave-to { opacity: 0; transform: translateX(-20px); }
</style>

<style>
/* 强制调整 Blockly 注入的 DOM */
.blocklyToolboxDiv {
  background-color: transparent !important;
  border: none !important;
  width: 240px !important;
  left: 20px !important;
  top: 130px !important; /* 避开头部和返回按钮 */
  height: calc(100% - 160px) !important;
  z-index: 50 !important;
}
.blocklyTreeRoot { padding: 0 !important; }
/* 隐藏原生分类树，只显示积木列表 */
.blocklyTreeRow { display: none !important; }
/* 注意：这里我们其实利用 Blockly 的 Simple Toolbox 模式 */
</style>