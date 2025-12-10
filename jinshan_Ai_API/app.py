from flask import Flask, request, jsonify
from flask_cors import CORS
from face_api import FaceRecognitionBlockAPI

app = Flask(__name__)
# 允许所有域名的跨域请求，方便Vue前端调试
CORS(app)

# 实例化全局API对象
api_instance = FaceRecognitionBlockAPI()


@app.route('/')
def index():
    return "Face AI Backend is Running!"


# --- API 路由定义 ---

@app.route('/api/reset', methods=['POST'])
def reset():
    """重置整个流程"""
    global api_instance
    api_instance = FaceRecognitionBlockAPI()
    return jsonify({"status": "success", "msg": "环境已重置"})


@app.route('/api/step1_init', methods=['POST'])
def step1_init():
    """1. 初始化引擎"""
    data = request.json or {}
    model = data.get('model', 'haarcascade_frontalface_default.xml')
    result = api_instance.init_engine(model)
    return jsonify(result)


@app.route('/api/step2_load', methods=['POST'])
def step2_load():
    """2. 载入资源"""
    data = request.json or {}
    src_type = data.get('type', 'file')  # 'camera' or 'file'
    src_val = data.get('value', 'test.jpg')

    result = api_instance.load_source(src_type, src_val)
    return jsonify(result)


@app.route('/api/step3_preprocess', methods=['POST'])
def step3_preprocess():
    """3. 预处理"""
    result = api_instance.preprocess_image()
    return jsonify(result)


@app.route('/api/step4_detect', methods=['POST'])
def step4_detect():
    """4. 检测"""
    data = request.json or {}
    scale = data.get('scale', 1.1)
    neighbors = data.get('neighbors', 5)

    result = api_instance.run_detection(scale, neighbors)
    return jsonify(result)


@app.route('/api/step5_data', methods=['POST'])
def step5_data():
    """5. 获取数据"""
    result = api_instance.get_face_data()
    return jsonify(result)


@app.route('/api/step6_draw', methods=['POST'])
def step6_draw():
    """6. 绘制"""
    data = request.json or {}
    r = data.get('r', 255)
    g = data.get('g', 0)
    b = data.get('b', 0)
    thickness = data.get('thickness', 2)

    result = api_instance.draw_results(r, g, b, thickness)
    return jsonify(result)


@app.route('/api/step7_show', methods=['POST'])
def step7_show():
    """7. 显示最终结果"""
    result = api_instance.get_final_image()
    return jsonify(result)


if __name__ == '__main__':
    # 启动服务，端口5000
    print("AI后端服务启动中... http://127.0.0.1:5000")
    app.run(debug=True, port=5000)