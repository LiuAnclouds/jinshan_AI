import * as Blockly from 'blockly/core';
import 'blockly/python';

// 确保 definitions_ 存在
function ensureFaceDefinitions() {
    Blockly.Python.definitions_ = Blockly.Python.definitions_ || Object.create(null);
}

// 占位：保留接口，避免多次初始化
function ensureFaceCommonDefs() {
    ensureFaceDefinitions();
}

// 0. 程序初始化（导入依赖与全局变量）
Blockly.Python['face_ai_init_globals'] = function (block) {
    ensureFaceCommonDefs();
    const code = [
        'import cv2, os, numpy as np',
        '',
        '# 全局变量（与后端算法一致）',
        'face_model = None',
        'face_img = None',
        'face_gray = None',
        'face_faces = []',
        'face_data = {}',
        '',
        '# 初始化全局状态',
        ''
    ].join('\n');
    return code;
};

// 1. 初始化模型
Blockly.Python['face_ai_step1_init'] = function (block) {
    ensureFaceCommonDefs();
    var model = block.getFieldValue('MODEL');
    const code = [
        '# 加载人脸检测模型（OpenCV）',
        `default_model_path = cv2.data.haarcascades + '${model}'`,
        `model_path = default_model_path if os.path.exists(default_model_path) else '${model}'`,
        'face_model = cv2.CascadeClassifier(model_path)',
        'if face_model.empty():',
        `    raise RuntimeError('无法加载人脸检测模型: %s' % model_path)`,
        ''
    ].join('\n');
    return code;
};

// 2. 载入图像资源
Blockly.Python['face_ai_step2_input'] = function (block) {
    ensureFaceCommonDefs();
    var type = block.getFieldValue('TYPE');
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || "'test.jpg'";
    const codeLines = [];
    codeLines.push('# 载入图像资源');
    codeLines.push('face_img = None');
    if (type === 'file') {
        codeLines.push(`if not os.path.exists(${value}):`);
        codeLines.push(`    raise RuntimeError(f'文件不存在: {${value}}')`);
        codeLines.push('# 处理中文路径/非ASCII路径');
        codeLines.push(`face_img = cv2.imdecode(np.fromfile(${value}, dtype=np.uint8), -1)`);
        codeLines.push('if face_img is None:');
        codeLines.push(`    raise RuntimeError(f'无法读取图片: {${value}}')`);
    } else {
        codeLines.push(`cap = cv2.VideoCapture(int(${value}))`);
        codeLines.push('if not cap.isOpened():');
        codeLines.push(`    raise RuntimeError('无法打开摄像头')`);
        codeLines.push('_ret, face_img = cap.read()');
        codeLines.push('cap.release()');
        codeLines.push('if not _ret or face_img is None:');
        codeLines.push(`    raise RuntimeError('摄像头读取失败')`);
    }
    codeLines.push('');
    return codeLines.join('\n');
};

// 3. 预处理（转灰度）
Blockly.Python['face_ai_step3_process'] = function (block) {
    ensureFaceCommonDefs();
    const code = [
        '# 图像预处理：转灰度',
        'if face_img is None:',
        `    raise RuntimeError('请先载入图像资源')`,
        'face_gray = cv2.cvtColor(face_img, cv2.COLOR_BGR2GRAY)',
        ''
    ].join('\n');
    return code;
};

// 4. 检测
Blockly.Python['face_ai_step4_detect'] = function (block) {
    ensureFaceCommonDefs();
    var scale = block.getFieldValue('SCALE');
    var neighbors = block.getFieldValue('NEIGHBORS');
    const code = [
        '# 执行人脸检测',
        'if face_model is None or face_model.empty():',
        `    raise RuntimeError('请先初始化人脸识别模型')`,
        'if face_gray is None:',
        `    raise RuntimeError('请先进行图像预处理')`,
        `face_faces = face_model.detectMultiScale(face_gray, scaleFactor=${scale}, minNeighbors=${neighbors}, minSize=(20, 20))`,
        `print('检测到人脸数量:', len(face_faces))`,
        ''
    ].join('\n');
    return code;
};

// 5. 数据获取
Blockly.Python['face_ai_step5_data'] = function (block) {
    ensureFaceCommonDefs();
    const codeLines = [];
    codeLines.push('# 结构化人脸数据');
    codeLines.push('detected_faces = []');
    codeLines.push('for (x, y, w, h) in face_faces:');
    codeLines.push("    detected_faces.append({'x': int(x), 'y': int(y), 'w': int(w), 'h': int(h)})");
    codeLines.push("face_data = {'faces': detected_faces, 'count': len(detected_faces)}");
    codeLines.push("print('人脸数据:', face_data)");
    codeLines.push('');
    return codeLines.join('\n');
};

// 6. 绘制检测框
Blockly.Python['face_ai_step6_draw'] = function (block) {
    ensureFaceCommonDefs();
    var colorBlock = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC) || '(255, 0, 0)';
    var thickness = block.getFieldValue('THICKNESS');
    const codeLines = [];
    codeLines.push('# 在原图上绘制人脸框并标注');
    codeLines.push('if face_img is None:');
    codeLines.push(`    raise RuntimeError('请先载入图像资源')`);
    codeLines.push('if face_faces is None:');
    codeLines.push(`    raise RuntimeError('请先执行人脸检测')`);
    codeLines.push('draw_img = face_img.copy()');
    codeLines.push(`draw_color = (int(${colorBlock}[2]), int(${colorBlock}[1]), int(${colorBlock}[0]))  # RGB -> BGR`);
    codeLines.push('for (x, y, w, h) in face_faces:');
    codeLines.push(`    cv2.rectangle(draw_img, (x, y), (x + w, y + h), draw_color, ${thickness})`);
    codeLines.push(`    cv2.putText(draw_img, 'Face', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, draw_color, 2)`);
    codeLines.push('face_img = draw_img');
    codeLines.push("save_path = 'face_draw.jpg'");
    codeLines.push('cv2.imwrite(save_path, face_img)');
    codeLines.push("print('绘制结果保存至:', os.path.abspath(save_path))");
    codeLines.push('');
    return codeLines.join('\n');
};

// 7. 显示/保存结果
Blockly.Python['face_ai_step7_show'] = function (block) {
    ensureFaceCommonDefs();
    const codeLines = [];
    codeLines.push('# 输出最终图像');
    codeLines.push('if face_img is None:');
    codeLines.push(`    raise RuntimeError('没有图像可显示')`);
    codeLines.push("save_path = 'face_result.jpg'");
    codeLines.push('cv2.imwrite(save_path, face_img)');
    codeLines.push("print('最终图像保存路径:', os.path.abspath(save_path))");
    codeLines.push('');
    return codeLines.join('\n');
};

// 辅助：RGB生成器
Blockly.Python['face_ai_rgb'] = function (block) {
    var r = block.getFieldValue('R');
    var g = block.getFieldValue('G');
    var b = block.getFieldValue('B');
    return [`(${r}, ${g}, ${b})`, Blockly.Python.ORDER_ATOMIC];
};

// 本地图片上传块（返回路径字符串）
Blockly.Python['face_ai_local_image'] = function (block) {
    var path = block.getFieldValue('FILEPATH') || 'test.jpg';
    // 返回字符串形式的路径
    return [`'${path.replace(/'/g, "\\'")}'`, Blockly.Python.ORDER_ATOMIC];
};


