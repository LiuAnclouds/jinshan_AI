from flask import Flask, request, jsonify
from flask_cors import CORS
from face_detection_api import FaceDetectionAPI
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
# 允许所有域名跨域，方便前端调试
CORS(app)

# 全局实例
api_instance = FaceDetectionAPI()
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.route('/')
def index():
    return "Face Detection Backend is Running!"


@app.route('/api/reset', methods=['POST'])
def reset():
    """重置整个流程"""
    global api_instance
    api_instance = FaceDetectionAPI()
    return jsonify({"status": "success", "msg": "环境已重置"})


@app.route('/api/upload', methods=['POST'])
def upload_image():
    """
    接收前端上传的本地图片，保存到后端本地目录，返回可供检测使用的绝对路径。
    """
    if 'file' not in request.files:
        return jsonify({"status": "error", "msg": "缺少文件字段"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"status": "error", "msg": "未选择文件"}), 400

    filename = secure_filename(file.filename)
    save_path = os.path.join(UPLOAD_DIR, filename)
    # 避免覆盖，简单处理同名文件
    counter = 1
    base, ext = os.path.splitext(filename)
    while os.path.exists(save_path):
        filename = f"{base}_{counter}{ext}"
        save_path = os.path.join(UPLOAD_DIR, filename)
        counter += 1

    file.save(save_path)
    return jsonify({
        "status": "success",
        "msg": "文件上传成功",
        "path": os.path.abspath(save_path)
    })


@app.route('/api/step1_init', methods=['POST'])
def step1_init():
    data = request.json or {}
    model = data.get('model', 'haarcascade_frontalface_default.xml')
    result = api_instance.init_engine(model)
    return jsonify(result)


@app.route('/api/step2_load', methods=['POST'])
def step2_load():
    data = request.json or {}
    src_type = data.get('type', 'file')  # 'camera' or 'file'
    src_val = data.get('value', 'test.jpg')
    result = api_instance.load_source(src_type, src_val)
    return jsonify(result)


@app.route('/api/step3_preprocess', methods=['POST'])
def step3_preprocess():
    result = api_instance.preprocess_image()
    return jsonify(result)


@app.route('/api/step4_detect', methods=['POST'])
def step4_detect():
    data = request.json or {}
    scale = data.get('scale', 1.1)
    neighbors = data.get('neighbors', 5)
    result = api_instance.run_detection(scale, neighbors)
    return jsonify(result)


@app.route('/api/step5_data', methods=['POST'])
def step5_data():
    result = api_instance.get_face_data()
    return jsonify(result)


@app.route('/api/step6_draw', methods=['POST'])
def step6_draw():
    data = request.json or {}
    r = data.get('r', 255)
    g = data.get('g', 0)
    b = data.get('b', 0)
    thickness = data.get('thickness', 2)
    result = api_instance.draw_results(r, g, b, thickness)
    return jsonify(result)


@app.route('/api/step7_show', methods=['POST'])
def step7_show():
    result = api_instance.get_final_image()
    return jsonify(result)


@app.route('/api/face/detect', methods=['POST'])
def face_detect_pipeline():
    """
    一键人脸检测流水线：
    1. 初始化模型
    2. 载入资源（文件/摄像头）
    3. 预处理
    4. 检测
    5. 返回数据与可选绘制后的图片
    """
    data = request.json or {}
    model = data.get('model', 'haarcascade_frontalface_default.xml')
    src_type = data.get('type', 'file')
    src_val = data.get('value', 'test.jpg')
    scale = data.get('scale', 1.1)
    neighbors = data.get('neighbors', 5)
    draw = data.get('draw', True)
    r = data.get('r', 255)
    g = data.get('g', 0)
    b = data.get('b', 0)
    thickness = data.get('thickness', 2)

    result = api_instance.detect_pipeline(
        model_path=model,
        source_type=src_type,
        source_value=src_val,
        scale_factor=scale,
        min_neighbors=neighbors,
        draw=draw,
        r=r, g=g, b=b,
        thickness=thickness
    )
    return jsonify(result)


if __name__ == '__main__':
    print("人脸检测后端启动中... http://127.0.0.1:5000")
    app.run(debug=True, port=5000)

