import * as Blockly from 'blockly/core';
import 'blockly/python';

// 1. 初始化生成器
// 确保 definitions_ 存在（某些初始化流程会清空）
function ensureDefinitions() {
    Blockly.Python.definitions_ = Blockly.Python.definitions_ || Object.create(null);
}

Blockly.Python['face_ai_step1_init'] = function(block) {
    var model = block.getFieldValue('MODEL');
    ensureDefinitions();
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    Blockly.Python.definitions_['import_api'] = 'from face_api import FaceRecognitionBlockAPI';
    Blockly.Python.definitions_['init_api'] = 'api = FaceRecognitionBlockAPI()';

    // 生成代码：api.init_engine('...')
    var code = `api.init_engine(model_path='${model}')\n`;
    return code;
};

// 2. 获取输入生成器
Blockly.Python['face_ai_step2_input'] = function(block) {
    var type = block.getFieldValue('TYPE');
    // 如果没有连接输入块，给一个默认值
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || "'test.jpg'";

    // 如果是摄像头，且输入是数字字符串（如'0'），Python生成器需要处理一下类型
    if(type === 'camera' && value.replace(/'/g, "") === "0"){
        value = 0; // 摄像头ID通常是数字
    }

    var code = `api.load_source(source_type='${type}', source_value=${value})\n`;
    return code;
};

// 3. 预处理生成器
Blockly.Python['face_ai_step3_process'] = function(block) {
    var code = `api.preprocess_image()\n`;
    return code;
};

// 4. 检测生成器
Blockly.Python['face_ai_step4_detect'] = function(block) {
    var scale = block.getFieldValue('SCALE');
    var neighbors = block.getFieldValue('NEIGHBORS');
    var code = `api.run_detection(scale_factor=${scale}, min_neighbors=${neighbors})\n`;
    return code;
};

// 5. 数据获取生成器
Blockly.Python['face_ai_step5_data'] = function(block) {
    var code = `api.get_face_data()['data']`;
    return [code, Blockly.Python.ORDER_MEMBER];
};

// 6. 绘制生成器
Blockly.Python['face_ai_step6_draw'] = function(block) {
    // 默认红色
    var colorBlock = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC) || '(255, 0, 0)';
    var thickness = block.getFieldValue('THICKNESS');

    // Python中元组解包 (r,g,b)
    var code = `api.draw_results(r=${colorBlock}[0], g=${colorBlock}[1], b=${colorBlock}[2], thickness=${thickness})\n`;
    return code;
};

// 7. 显示生成器
Blockly.Python['face_ai_step7_show'] = function(block) {
    var code = `api.show_window(window_name='Face Recognition Result')\n`;
    return code;
};

// 人脸注册：输入
Blockly.Python['face_ai_reg_input'] = function(block) {
    ensureDefinitions();
    var path = Blockly.Python.valueToCode(block, 'PATH', Blockly.Python.ORDER_ATOMIC) || "''";
    var label = Blockly.Python.valueToCode(block, 'LABEL', Blockly.Python.ORDER_ATOMIC) || "''";
    Blockly.Python.definitions_['face_reg_buffer'] = 'face_reg_buffer = []';
    var code = `face_reg_buffer.append((${path}, ${label}))\n`;
    return code;
};

// 人脸注册：提交
Blockly.Python['face_ai_reg_commit'] = function(block) {
    ensureDefinitions();
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    Blockly.Python.definitions_['import_api'] = 'from face_api import FaceRecognitionBlockAPI';
    Blockly.Python.definitions_['init_api'] = 'api = FaceRecognitionBlockAPI()';
    Blockly.Python.definitions_['face_reg_buffer'] = Blockly.Python.definitions_['face_reg_buffer'] || 'face_reg_buffer = []';
    var code = `for _path, _label in face_reg_buffer:\n    api.register_face(image_path=_path, label=_label)\nface_reg_buffer.clear()\n`;
    return code;
};

// 人脸识别：输入源
Blockly.Python['face_ai_rec_input'] = function(block) {
    ensureDefinitions();
    var type = block.getFieldValue('TYPE');
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || "''";
    Blockly.Python.definitions_['face_rec_source'] = '# 识别输入源\nautofill_source_type = "file"\nautofill_source_value = ""';
    var code = `autofill_source_type = '${type}'\nautofill_source_value = ${value}\n`;
    return code;
};

// 人脸识别：执行
Blockly.Python['face_ai_rec_run'] = function(block) {
    ensureDefinitions();
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    Blockly.Python.definitions_['import_api'] = 'from face_api import FaceRecognitionBlockAPI';
    Blockly.Python.definitions_['init_api'] = 'api = FaceRecognitionBlockAPI()';
    Blockly.Python.definitions_['face_rec_result'] = 'face_rec_result = {"label": "", "score": 0.0}';
    var code = `face_rec_result = api.recognize_face(source_type=autofill_source_type, source_value=autofill_source_value)\n`;
    return code;
};

// 识别结果：标签
Blockly.Python['face_ai_rec_label'] = function(block) {
    ensureDefinitions();
    var code = `face_rec_result.get("label", "")`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 识别结果：置信度
Blockly.Python['face_ai_rec_score'] = function(block) {
    ensureDefinitions();
    var code = `face_rec_result.get("score", 0.0)`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// OpenCV 摄像头：初始化
Blockly.Python['face_ai_cam_init'] = function(block) {
    var index = block.getFieldValue('INDEX') || 0;
    ensureDefinitions();
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var code = `cap = cv2.VideoCapture(${index})\n`;
    return code;
};

// OpenCV 摄像头：设置分辨率
Blockly.Python['face_ai_cam_size'] = function(block) {
    var w = block.getFieldValue('WIDTH') || 320;
    var h = block.getFieldValue('HEIGHT') || 240;
    var code = `cap.set(cv2.CAP_PROP_FRAME_WIDTH, ${w})\ncap.set(cv2.CAP_PROP_FRAME_HEIGHT, ${h})\n`;
    return code;
};

// OpenCV 摄像头：读取帧
Blockly.Python['face_ai_cam_read'] = function(block) {
    var code = `cap.read()[1]`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// OpenCV 显示窗口
Blockly.Python['face_ai_imshow'] = function(block) {
    var name = block.getFieldValue('NAME') || 'cv2_video';
    var frame = Blockly.Python.valueToCode(block, 'FRAME', Blockly.Python.ORDER_ATOMIC) || 'None';
    var code = `cv2.imshow('${name}', ${frame})\n`;
    return code;
};

// OpenCV 退出
Blockly.Python['face_ai_waitq_exit'] = function(block) {
    var code = `if cv2.waitKey(1) & 0xff == ord('q'):\n    break\n`;
    return code;
};

// 辅助：RGB生成器
Blockly.Python['face_ai_rgb'] = function(block) {
    var r = block.getFieldValue('R');
    var g = block.getFieldValue('G');
    var b = block.getFieldValue('B');
    return [`(${r}, ${g}, ${b})`, Blockly.Python.ORDER_ATOMIC];
};