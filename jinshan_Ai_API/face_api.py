import cv2
import os
import base64
import numpy as np


class FaceRecognitionBlockAPI:
    def __init__(self):
        # 内部状态存储
        self.face_cascade = None
        self.raw_image = None  # 原始图像
        self.gray_image = None  # 灰度图像
        self.faces = []  # 检测到的人脸数据
        self.processed_image = None  # 绘制后的图像

        # 逻辑控制状态: 0:未初始化, 1:已初始化, 2:已载入, 3:已预处理, 4:已检测, 5:已绘制
        self.state = 0

    def _img_to_base64(self, img):
        """辅助函数：将OpenCV图像转换为前端可显示的Base64字符串"""
        if img is None:
            return None
        _, buffer = cv2.imencode('.jpg', img)
        img_str = base64.b64encode(buffer).decode('utf-8')
        return f"data:image/jpeg;base64,{img_str}"

    # 1. 初始化
    def init_engine(self, model_path='haarcascade_frontalface_default.xml'):
        # 这里的路径通常在cv2的data目录下
        system_path = cv2.data.haarcascades + model_path

        # 如果系统路径没找到，尝试找当前目录下的文件
        final_path = system_path if os.path.exists(system_path) else model_path

        try:
            if not os.path.exists(final_path):
                # 为了演示方便，如果没找到文件，尝试直接加载文件名，让cv2去内部找
                final_path = model_path

            self.face_cascade = cv2.CascadeClassifier(final_path)
            if self.face_cascade.empty():
                return {"status": "error", "msg": "加载模型失败，文件可能损坏"}

            self.state = 1
            return {"status": "success", "msg": "AI引擎初始化就绪"}
        except Exception as e:
            return {"status": "error", "msg": f"初始化异常: {str(e)}"}

    # 2. 载入图像
    def load_source(self, source_type, source_value):
        """
        source_type: 'camera' 或 'file'
        source_value: 摄像头ID(0) 或 文件路径
        """
        if self.state < 1:
            return {"status": "error", "msg": "逻辑错误：请先连接【初始化引擎】积木"}

        try:
            if source_type == 'camera':
                cap = cv2.VideoCapture(int(source_value))
                if not cap.isOpened():
                    return {"status": "error", "msg": "无法打开摄像头"}
                ret, frame = cap.read()
                cap.release()
                if not ret:
                    return {"status": "error", "msg": "读取摄像头画面失败"}
                self.raw_image = frame
            else:
                # 文件模式
                if not os.path.exists(source_value):
                    return {"status": "error", "msg": f"文件不存在: {source_value}"}
                # 处理中文路径问题
                self.raw_image = cv2.imdecode(np.fromfile(source_value, dtype=np.uint8), -1)

            if self.raw_image is None:
                return {"status": "error", "msg": "无法读取图像数据"}

            self.state = 2
            # 返回Base64用于前端预览
            return {
                "status": "success",
                "msg": "图像加载成功",
                "image": self._img_to_base64(self.raw_image)
            }
        except Exception as e:
            return {"status": "error", "msg": f"加载源失败: {str(e)}"}

    # 3. 预处理
    def preprocess_image(self):
        if self.state < 2:
            return {"status": "error", "msg": "逻辑错误：请先连接【获取输入】积木"}

        try:
            self.gray_image = cv2.cvtColor(self.raw_image, cv2.COLOR_BGR2GRAY)
            self.state = 3
            # 这里通常不需要看灰度图，如果想看也可以返回
            return {
                "status": "success",
                "msg": "图像预处理完成(灰度化)",
                "image": self._img_to_base64(self.gray_image)
            }
        except Exception as e:
            return {"status": "error", "msg": f"预处理失败: {str(e)}"}

    # 4. 检测
    def run_detection(self, scale_factor=1.1, min_neighbors=5):
        if self.state < 3:
            return {"status": "error", "msg": "逻辑错误：缺少【图像预处理】积木"}

        try:
            self.faces = self.face_cascade.detectMultiScale(
                self.gray_image,
                scaleFactor=float(scale_factor),
                minNeighbors=int(min_neighbors)
            )
            self.state = 4
            return {"status": "success", "msg": f"检测完成，发现 {len(self.faces)} 张人脸"}
        except Exception as e:
            return {"status": "error", "msg": f"检测算法出错: {str(e)}"}

    # 5. 获取数据
    def get_face_data(self):
        if self.state < 4:
            return {"status": "error", "msg": "逻辑错误：请先运行【人脸检测】积木"}

        faces_list = []
        for (x, y, w, h) in self.faces:
            faces_list.append({"x": int(x), "y": int(y), "w": int(w), "h": int(h)})

        return {"status": "success", "data": faces_list, "count": len(faces_list)}

    # 6. 绘制结果
    def draw_results(self, r=255, g=0, b=0, thickness=2):
        if self.state < 4:
            return {"status": "error", "msg": "逻辑错误：没有检测数据，无法进行【视觉绘制】"}

        try:
            self.processed_image = self.raw_image.copy()
            color = (int(b), int(g), int(r))  # OpenCV使用BGR顺序
            for (x, y, w, h) in self.faces:
                cv2.rectangle(self.processed_image, (x, y), (x + w, y + h), color, int(thickness))
                # 简单的标签
                cv2.putText(self.processed_image, "Face", (x, y - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.9, color, 2)

            self.state = 5
            return {
                "status": "success",
                "msg": "结果绘制完成",
                "image": self._img_to_base64(self.processed_image)
            }
        except Exception as e:
            return {"status": "error", "msg": f"绘制失败: {str(e)}"}

    # 7. 最终显示 (前端其实可以直接用第6步返回的图片，这个API主要用于重置或确认)
    def get_final_image(self):
        if self.state < 2:
            return {"status": "error", "msg": "没有图像可显示"}

        current_img = self.processed_image if self.state >= 5 else self.raw_image
        return {
            "status": "success",
            "msg": "获取当前图像成功",
            "image": self._img_to_base64(current_img)
        }