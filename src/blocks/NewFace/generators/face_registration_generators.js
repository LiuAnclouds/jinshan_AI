import * as Blockly from 'blockly/core';
import 'blockly/python';

function ensureDefinitions() {
    Blockly.Python.definitions_ = Blockly.Python.definitions_ || Object.create(null);
}

// === 核心 Python 代码：构建一个能够真实运行的人脸引擎 ===
const FACE_ENGINE_CLASS = `
import cv2
import numpy as np
import os
import math

class FaceEngine:
    def __init__(self):
        self.known_faces = [] # [{'label': 'name', 'img': img_data, 'feature': hist/encoding}]
        self.mode = 'opencv_hist' # 默认使用OpenCV直方图，无需额外模型文件

    def load_image(self, path):
        if not os.path.exists(path):
            print(f"Warning: File not found {path}")
            return None
        # 读取并转为 RGB (OpenCV默认BGR)
        img = cv2.imdecode(np.fromfile(path, dtype=np.uint8), -1)
        if img is None: return None
        return img

    def get_feature(self, img):
        # 简单实现：使用 HSV 直方图作为特征（轻量，无需DL模型）
        # 如果需要更强功能，可在此处接入 dlib 或 face_recognition 库
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        hist = cv2.calcHist([hsv], [0, 1], None, [180, 256], [0, 180, 0, 256])
        cv2.normalize(hist, hist, 0, 1, cv2.NORM_MINMAX)
        return hist

    def register(self, path, label):
        img = self.load_image(path)
        if img is None: return False
        feature = self.get_feature(img)
        self.known_faces.append({
            'label': str(label), 
            'path': path, 
            'feature': feature
        })
        print(f"[注册成功] 标签: {label}, 路径: {path}")
        return True

    def train(self):
        print(f"[系统就绪] 已加载 {len(self.known_faces)} 张人脸底库")

    def recognize(self, source_type, source_value):
        # 1. 获取输入图像
        target_img = None
        if source_type == 'camera':
            cap = cv2.VideoCapture(int(source_value) if str(source_value).isdigit() else 0)
            if cap.isOpened():
                ret, target_img = cap.read()
                cap.release()
        else:
            target_img = self.load_image(source_value)

        if target_img is None:
            return {'label': '未知', 'score': 0.0, 'msg': '无法获取输入图像'}

        # 2. 提取特征
        target_feature = self.get_feature(target_img)
        
        # 3. 比对 (寻找最相似)
        best_score = -1.0
        best_label = "Unknown"
        
        for person in self.known_faces:
            # OpenCV 直方图比较: Correlation (方法0)，值越大越相似(max 1.0)
            score = cv2.compareHist(target_feature, person['feature'], 0)
            if score > best_score:
                best_score = score
                best_label = person['label']
        
        # 阈值判断 (简单逻辑)
        final_label = best_label if best_score > 0.5 else "Unknown"
        
        return {
            'label': final_label,
            'score': round(best_score, 4),
            'source': 'camera' if source_type == 'camera' else source_value
        }

# 单例模式初始化
if 'face_engine' not in globals():
    face_engine = FaceEngine()
`;

Blockly.Python['face_ai_init_system'] = function(block) {
    ensureDefinitions();
    // 注入核心类定义
    Blockly.Python.definitions_['class_face_engine'] = FACE_ENGINE_CLASS;
    return `print("=== 初始化人脸识别系统 ===")\n`;
};

Blockly.Python['face_ai_reg_add'] = function(block) {
    ensureDefinitions();
    // 获取上传的路径（字符串）
    var path = block.getFieldValue('FILEPATH') || '';
    // 获取标签（Value 输入）
    var label = Blockly.Python.valueToCode(block, 'LABEL', Blockly.Python.ORDER_ATOMIC) || "'Unknown'";

    // 生成注册代码
    // 注意：路径需要转义
    const safePath = path.replace(/\\/g, '/');
    const code = `face_engine.register('${safePath}', ${label})\n`;
    return code;
};

Blockly.Python['face_ai_reg_finish'] = function(block) {
    return `face_engine.train()\n`;
};