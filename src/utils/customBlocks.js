import * as Blockly from 'blockly/core';
import { pythonGenerator } from 'blockly/python';

// 定义积木的解释数据（用于UI显示）
export const BLOCK_HELP_DATA = {
    'kid_import': { title: '准备工具箱', desc: '导入 OpenCV 和 face_recognition 库', icon: 'Pp' },
    'kid_load_img': { title: '打开照片', desc: '读取一张图片文件', icon: '🖼️' },
    'kid_show_img': { title: '展示结果', desc: '在窗口中显示处理后的图片', icon: '📺' },
    'kid_load_detector': { title: '召唤 AI 侦探', desc: '加载 Haar 级联分类器', icon: '🕵️‍♂️' },
    'kid_find_faces': { title: '开始搜寻', desc: '检测图片中的人脸位置', icon: '🔍' },
    'kid_mark_faces': { title: '画框框', desc: '在检测到的人脸周围画矩形框', icon: '🖍️' },
    'kid_get_features': { title: '提取特征', desc: '将人脸转换为 128维 编码', icon: '🔢' },
    'kid_save_memory': { title: '存入记忆', desc: '保存人脸编码到文件', icon: '💾' },
    'kid_compare': { title: '比对身份', desc: '对比未知人脸与已知人脸', icon: '⚖️' }
};

export const defineCustomBlocks = () => {
    // 1. 导入库
    Blockly.Blocks['kid_import'] = {
        init: function() {
            this.appendDummyInput().appendField("🧰 准备 AI 工具箱");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#60A5FA");
            this.setTooltip("import cv2, face_recognition");
        }
    };
    pythonGenerator.forBlock['kid_import'] = function(block) {
        return 'import cv2\nimport numpy as np\nimport face_recognition\n# AI 工具箱准备完毕！\n';
    };

    // 2. 读取图片
    Blockly.Blocks['kid_load_img'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("🖼️ 打开图片")
                .appendField(new Blockly.FieldTextInput("photo.jpg"), "FILENAME");
            this.setOutput(true, "Image");
            this.setColour("#FBBF24");
        }
    };
    pythonGenerator.forBlock['kid_load_img'] = function(block) {
        var filename = block.getFieldValue('FILENAME');
        return [`cv2.imread('${filename}')`, pythonGenerator.ORDER_FUNCTION_CALL];
    };

    // 3. 显示图片
    Blockly.Blocks['kid_show_img'] = {
        init: function() {
            this.appendValueInput("IMG").setCheck("Image").appendField("📺 在屏幕上展示");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#F472B6");
        }
    };
    pythonGenerator.forBlock['kid_show_img'] = function(block) {
        var img = pythonGenerator.valueToCode(block, 'IMG', pythonGenerator.ORDER_ATOMIC);
        return `cv2.imshow('AI Result', ${img})\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n`;
    };

    // 4. 加载检测器
    Blockly.Blocks['kid_load_detector'] = {
        init: function() {
            this.appendDummyInput().appendField("🕵️‍♂️ 召唤人脸侦探");
            this.setOutput(true, "Detector");
            this.setColour("#34D399");
        }
    };
    pythonGenerator.forBlock['kid_load_detector'] = function(block) {
        return [`cv2.CascadeClassifier('haarcascade_frontalface_default.xml')`, pythonGenerator.ORDER_FUNCTION_CALL];
    };

    // 5. 检测人脸
    Blockly.Blocks['kid_find_faces'] = {
        init: function() {
            this.appendValueInput("DETECTOR").setCheck("Detector").appendField("让");
            this.appendValueInput("IMG").setCheck("Image").appendField("在");
            this.appendDummyInput().appendField("中寻找人脸");
            this.setOutput(true, "FaceList");
            this.setColour("#34D399");
        }
    };
    pythonGenerator.forBlock['kid_find_faces'] = function(block) {
        var detector = pythonGenerator.valueToCode(block, 'DETECTOR', pythonGenerator.ORDER_ATOMIC);
        var img = pythonGenerator.valueToCode(block, 'IMG', pythonGenerator.ORDER_ATOMIC);
        return [`${detector}.detectMultiScale(cv2.cvtColor(${img}, cv2.COLOR_BGR2GRAY), 1.1, 4)`, pythonGenerator.ORDER_FUNCTION_CALL];
    };

    // 6. 画框
    Blockly.Blocks['kid_mark_faces'] = {
        init: function() {
            this.appendValueInput("FACES").setCheck("FaceList").appendField("🖍️ 用红笔圈出");
            this.appendValueInput("IMG").setCheck("Image").appendField("在图片");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#F87171");
        }
    };
    pythonGenerator.forBlock['kid_mark_faces'] = function(block) {
        var faces = pythonGenerator.valueToCode(block, 'FACES', pythonGenerator.ORDER_ATOMIC);
        var img = pythonGenerator.valueToCode(block, 'IMG', pythonGenerator.ORDER_ATOMIC);
        return `for (x, y, w, h) in ${faces}:\n    cv2.rectangle(${img}, (x, y), (x+w, y+h), (0, 0, 255), 3)\n`;
    };

    // 7. 提取特征
    Blockly.Blocks['kid_get_features'] = {
        init: function() {
            this.appendValueInput("IMG").setCheck("Image").appendField("🔢 提取人脸密码");
            this.setOutput(true, "Features");
            this.setColour("#818CF8");
        }
    };
    pythonGenerator.forBlock['kid_get_features'] = function(block) {
        var img = pythonGenerator.valueToCode(block, 'IMG', pythonGenerator.ORDER_ATOMIC);
        return [`face_recognition.face_encodings(${img})[0]`, pythonGenerator.ORDER_FUNCTION_CALL];
    };

    // 8. 注册保存
    Blockly.Blocks['kid_save_memory'] = {
        init: function() {
            this.appendValueInput("FEATURES").setCheck("Features").appendField("💾 记住");
            this.appendDummyInput().appendField("的名字叫").appendField(new Blockly.FieldTextInput("小明"), "NAME");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#818CF8");
        }
    };
    pythonGenerator.forBlock['kid_save_memory'] = function(block) {
        var features = pythonGenerator.valueToCode(block, 'FEATURES', pythonGenerator.ORDER_ATOMIC);
        var name = block.getFieldValue('NAME');
        return `np.save('faces/${name}.npy', ${features})\nprint('记住了 ${name} 的样子！')\n`;
    };

    // 9. 比对
    Blockly.Blocks['kid_compare'] = {
        init: function() {
            this.appendValueInput("UNKNOWN").setCheck("Features").appendField("⚖️ 比较");
            this.appendDummyInput().appendField("是不是大家认识的人");
            this.setOutput(true, "Boolean");
            this.setColour("#818CF8");
        }
    };
    pythonGenerator.forBlock['kid_compare'] = function(block) {
        var unknown = pythonGenerator.valueToCode(block, 'UNKNOWN', pythonGenerator.ORDER_ATOMIC);
        return [`True in face_recognition.compare_faces(known_faces, ${unknown})`, pythonGenerator.ORDER_FUNCTION_CALL];
    };
};