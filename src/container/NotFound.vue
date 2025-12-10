<!-- @/container/NotFound/index.vue -->
<template>
  <div class="not-found-container">
    <div class="error-content">
      <!-- 错误图标 -->
      <div class="error-icon">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ff4d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V12" stroke="#ff4d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16H12.01" stroke="#ff4d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- 错误信息 -->
      <h1 class="error-title">404</h1>
      <h2 class="error-subtitle">页面不存在</h2>
      <p class="error-description">
        抱歉，您访问的页面不存在或已被移除。<br>
        请检查URL是否正确<!-- ，或点击下方按钮返回 -->。
      </p>
      
      <!-- 操作按钮 -->
      <!-- <div class="action-buttons">
        <button class="btn btn-secondary" @click="goBack">
          <span class="btn-icon">←</span>
          返回上一页
        </button>
        <button class="btn btn-primary" @click="goHome">
          <span class="btn-icon">🏠</span>
          返回首页
        </button>
        <button class="btn btn-outline" @click="goToGitHub" v-if="showGitHub">
          <span class="btn-icon">📄</span>
          查看文档
        </button>
      </div> -->
      
      <!-- 额外信息 -->
      <div class="extra-info">
        <p>如果你认为这是一个错误，请联系管理员。</p>
        <p class="timestamp">错误时间：{{ currentTime }}</p>
        <p class="path">请求路径：{{ currentPath }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// 当前时间
const currentTime = ref('');
// 是否显示GitHub按钮
const showGitHub = ref(true);

// 获取当前路径
const currentPath = computed(() => route.fullPath);

// 更新时间
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// 返回上一页
const goBack = () => {
  if (window.history.length > 2) {
    router.go(-1);
  } else {
    router.push('/');
  }
};

// 返回首页
const goHome = () => {
  router.push('/');
};

// 跳转到文档（可以根据需要修改）
const goToGitHub = () => {
  window.open('https://github.com', '_blank');
};

// 初始化
onMounted(() => {
  updateTime();
  // 每秒钟更新时间
  setInterval(updateTime, 1000);
  
  // 可以根据环境决定是否显示GitHub按钮
  showGitHub.value = import.meta.env.DEV;
});
</script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.error-content {
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.error-icon {
  margin-bottom: 24px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.error-title {
  font-size: 72px;
  font-weight: 800;
  color: #ff4d4f;
  margin: 0 0 8px 0;
  line-height: 1;
}

.error-subtitle {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
}

.error-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
}

.action-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-icon {
  margin-right: 8px;
  font-size: 18px;
}

.btn-primary {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
}

.btn-secondary {
  background: #f0f0f0;
  color: #333;
}

.btn-outline {
  background: transparent;
  color: #1890ff;
  border: 2px solid #1890ff;
}

.btn-outline:hover {
  background: #1890ff;
  color: white;
}

.extra-info {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: #999;
}

.extra-info p {
  margin: 8px 0;
}

.timestamp {
  font-family: 'Courier New', monospace;
}

.path {
  font-family: 'Courier New', monospace;
  color: #666;
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 12px;
  word-break: break-all;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .error-content {
    padding: 24px;
  }
  
  .error-title {
    font-size: 56px;
  }
  
  .error-subtitle {
    font-size: 24px;
  }
  
  .btn {
    min-width: 120px;
    padding: 10px 20px;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .action-buttons .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>