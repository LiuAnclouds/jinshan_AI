import axios from 'axios';

// 后端人脸检测 API 封装，放置在 NewFace 模块下便于统一管理
const BASE_URL = import.meta.env.VITE_FACE_API_URL || 'http://127.0.0.1:5000';

function getBaseUrl() {
  return BASE_URL.replace(/\/$/, '');
}

export async function uploadDetectionImage(file) {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await axios.post(`${getBaseUrl()}/api/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  if (data?.status !== 'success') {
    throw new Error(data?.msg || '图片上传失败');
  }
  return data.path;
}

export async function runDetectionPipeline({
  model = 'haarcascade_frontalface_default.xml',
  type = 'file',
  value,
  scale = 1.1,
  neighbors = 5,
  draw = true,
  color = [255, 0, 0],
  thickness = 2,
} = {}) {
  const [r = 255, g = 0, b = 0] = color || [];
  const payload = {
    model,
    type,
    value,
    scale,
    neighbors,
    draw,
    r,
    g,
    b,
    thickness,
  };

  const { data } = await axios.post(`${getBaseUrl()}/api/face/detect`, payload);

  if (data?.status !== 'success') {
    throw new Error(data?.msg || '人脸检测失败');
  }

  return data;
}

export async function resetDetectionBackend() {
  const { data } = await axios.post(`${getBaseUrl()}/api/reset`);
  if (data?.status !== 'success') {
    throw new Error(data?.msg || '重置后端失败');
  }
  return data;
}


