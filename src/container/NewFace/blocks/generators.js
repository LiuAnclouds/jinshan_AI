import Blockly from 'blockly';

export const initPythonGenerator = () => {

    Blockly.Python['cv_start_camera'] = function(block) {
        return `
import cv2
import numpy as np

# 1. 初始化摄像头
cap = cv2.VideoCapture(0)
print("摄像头已启动...")
`;
    };

    Blockly.Python['cv_cvt_color'] = function(block) {
        return `
    # 2. 图像预处理
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
`;
    };

    Blockly.Python['cv_load_cascade'] = function(block) {
        return `
# 3. 加载 AI 模型
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
print("模型加载完毕")
`;
    };

    Blockly.Python['cv_detect_and_draw'] = function(block) {
        var statements_do = Blockly.Python.statementToCode(block, 'DO_IF_FOUND');
        return `
    # 4. 核心识别逻辑
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        ${statements_do}
`;
    };

    Blockly.Python['cv_log_info'] = function(block) {
        var msg = Blockly.Python.valueToCode(block, 'MSG', Blockly.Python.ORDER_ATOMIC) || "''";
        return `        print(f"Log: {${msg}}")\n`;
    };

    Blockly.Python['cv_show_image'] = function(block) {
        return `
    # 5. 显示结果
    cv2.imshow('Kids AI Lab', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
`;
    };
};