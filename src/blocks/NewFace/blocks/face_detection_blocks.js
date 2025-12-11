import * as Blockly from 'blockly/core';

// 定义AI模块的颜色（参考示例图蓝色调）
const FACE_COLOR = "#4C9AFF";
const UPLOAD_INPUT_ID = 'face-ai-upload-input';

function ensureUploadInput() {
    let input = document.getElementById(UPLOAD_INPUT_ID);
    if (input) return input;
    input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.id = UPLOAD_INPUT_ID;
    document.body.appendChild(input);
    return input;
}

async function uploadImageFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('http://127.0.0.1:5000/api/upload', {
        method: 'POST',
        body: formData
    });
    if (!res.ok) throw new Error(`上传失败: ${res.statusText}`);
    const data = await res.json();
    if (data.status !== 'success') throw new Error(data.msg || '上传失败');
    return data.path;
}

// 0. 程序初始化（导入依赖与全局变量）
Blockly.Blocks['face_ai_init_globals'] = {
    init: function() {
        this.jsonInit({
            "message0": "1. 程序初始化（人脸检测）",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "导入cv2并初始化 face_model / face_img / face_gray / face_faces / face_cap",
            "helpUrl": ""
        });
    }
};

// 2.x 本地图片选择并上传（返回路径字符串）
Blockly.Blocks['face_ai_local_image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("选择本地图片")
            .appendField(new Blockly.FieldLabelSerializable("未选择"), "FILEPATH");
        this.setOutput(true, "String");
        this.setColour(FACE_COLOR);
        this.setTooltip("选择并上传图片，返回后端保存路径");
        this.setHelpUrl("");

        this.setOnChange((event) => {
            if (!event || event.type !== Blockly.Events.UI || event.element !== 'click' || event.blockId !== this.id) return;
            const input = ensureUploadInput();
            input.onchange = async (e) => {
                const file = e.target.files && e.target.files[0];
                input.value = '';
                if (!file) return;
                this.setFieldValue('上传中...', 'FILEPATH');
                try {
                    const path = await uploadImageFile(file);
                    this.setFieldValue(path, 'FILEPATH');
                    this.setTooltip(`已上传: ${path}`);
                } catch (err) {
                    console.error(err);
                    this.setFieldValue('上传失败', 'FILEPATH');
                    this.setTooltip(err.message || '上传失败');
                }
            };
            input.click();
        });
    }
};

// 1. 初始化引擎 (Init)
Blockly.Blocks['face_ai_step1_init'] = {
    init: function() {
        this.jsonInit({
            "message0": "2. 初始化人脸识别引擎 模型: %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "MODEL",
                    "options": [
                        ["默认模型 (Haar Cascade)", "haarcascade_frontalface_default.xml"],
                        ["快速模型 (LBP)", "lbpcascade_frontalface.xml"]
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "加载OpenCV人脸检测模型",
            "helpUrl": ""
        });
    }
};

// 2. 获取输入 (Input)
Blockly.Blocks['face_ai_step2_input'] = {
    init: function() {
        this.jsonInit({
            "message0": "3. 载入图像资源 类型: %1 值: %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "TYPE",
                    "options": [
                        ["本地图片", "file"],
                        ["摄像头", "camera"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "VALUE",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "读取图片文件（例如 'test.jpg'）或打开摄像头获取一帧（输入 0）",
            "helpUrl": ""
        });
    }
};

// 3. 图像预处理 (Pre-process)
Blockly.Blocks['face_ai_step3_process'] = {
    init: function() {
        this.jsonInit({
            "message0": "4. 图像预处理 (转为灰度图)",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "将彩色图像转换为灰度图像，为检测算法做准备",
            "helpUrl": ""
        });
    }
};

// 4. 人脸检测 (Detect)
Blockly.Blocks['face_ai_step4_detect'] = {
    init: function() {
        this.jsonInit({
            "message0": "5. 执行人脸检测 缩放比: %1 最小邻居数: %2",
            "args0": [
                {
                    "type": "field_number",
                    "name": "SCALE",
                    "value": 1.1,
                    "min": 1.01,
                    "precision": 0.01
                },
                {
                    "type": "field_number",
                    "name": "NEIGHBORS",
                    "value": 5,
                    "min": 1,
                    "precision": 1
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "运行Haar级联检测算法，参数用于调整检测精度和速度",
            "helpUrl": ""
        });
    }
};

// 5. 数据处理 (Data - Output Block)
Blockly.Blocks['face_ai_step5_data'] = {
    init: function() {
        this.jsonInit({
            "message0": "6. 获取人脸坐标数据（列表 + 计数）",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "生成 face_data 保存检测到的人脸坐标列表和数量，便于后续积木使用",
            "helpUrl": ""
        });
    }
};

// 6. 视觉绘制 (Draw)
Blockly.Blocks['face_ai_step6_draw'] = {
    init: function() {
        this.jsonInit({
            "message0": "7. 绘制检测结果 颜色(RGB): %1 线宽: %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "COLOR"
                },
                {
                    "type": "field_number",
                    "name": "THICKNESS",
                    "value": 2,
                    "min": 1
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "在原图上画出人脸矩形框",
            "helpUrl": ""
        });
    }
};

// 7. 显示结果 (Show)
Blockly.Blocks['face_ai_step7_show'] = {
    init: function() {
        this.jsonInit({
            "message0": "8. 显示最终图像",
            "previousStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "弹出窗口显示处理后的图像（使用 cv2.imshow）",
            "helpUrl": ""
        });
    }
};

// 辅助积木：RGB颜色选择器
Blockly.Blocks['face_ai_rgb'] = {
    init: function() {
        this.jsonInit({
            "message0": "R %1 G %2 B %3",
            "args0": [
                { "type": "field_number", "name": "R", "value": 255, "min": 0, "max": 255 },
                { "type": "field_number", "name": "G", "value": 0, "min": 0, "max": 255 },
                { "type": "field_number", "name": "B", "value": 0, "min": 0, "max": 255 }
            ],
            "output": "Array",
            "colour": "#333",
            "tooltip": "定义一个 RGB 颜色值 (0-255)",
            "helpUrl": ""
        });
    }
};


