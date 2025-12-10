import * as Blockly from 'blockly/core';

// 定义AI模块的颜色（参考示例图蓝色调）
const FACE_COLOR = "#4C9AFF";

// 注册：输入图片路径与标签
Blockly.Blocks['face_ai_reg_input'] = {
    init: function() {
        this.jsonInit({
            "message0": "注册人脸 图片路径 %1 标签 %2",
            "args0": [
                { "type": "input_value", "name": "PATH", "check": "String" },
                { "type": "input_value", "name": "LABEL", "check": "String" }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "提供待注册的人脸图片路径与标签",
            "helpUrl": ""
        });
    }
};

// 注册：提交
Blockly.Blocks['face_ai_reg_commit'] = {
    init: function() {
        this.jsonInit({
            "message0": "提交人脸注册",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "提交注册信息到后端人脸库",
            "helpUrl": ""
        });
    }
};

// 识别：输入源
Blockly.Blocks['face_ai_rec_input'] = {
    init: function() {
        this.jsonInit({
            "message0": "识别 输入源 类型 %1 值 %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "TYPE",
                    "options": [
                        ["本地图片", "file"],
                        ["摄像头", "camera"]
                    ]
                },
                { "type": "input_value", "name": "VALUE", "check": "String" }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "提供识别的输入源（图片路径或摄像头）",
            "helpUrl": ""
        });
    }
};

// 识别：执行
Blockly.Blocks['face_ai_rec_run'] = {
    init: function() {
        this.jsonInit({
            "message0": "执行人脸识别",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "调用后端识别接口",
            "helpUrl": ""
        });
    }
};

// 识别结果：标签
Blockly.Blocks['face_ai_rec_label'] = {
    init: function() {
        this.jsonInit({
            "message0": "识别结果 标签",
            "output": "String",
            "colour": FACE_COLOR,
            "tooltip": "返回匹配到的标签",
            "helpUrl": ""
        });
    }
};

// 识别结果：置信度
Blockly.Blocks['face_ai_rec_score'] = {
    init: function() {
        this.jsonInit({
            "message0": "识别结果 置信度",
            "output": "Number",
            "colour": FACE_COLOR,
            "tooltip": "返回匹配的置信度",
            "helpUrl": ""
        });
    }
};

// 1. 初始化引擎 (Init)
Blockly.Blocks['face_ai_step1_init'] = {
    init: function() {
        this.jsonInit({
            "message0": "1. 初始化人脸识别引擎 模型: %1",
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
            "message0": "2. 载入图像资源 类型: %1 值: %2",
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
            "message0": "3. 图像预处理 (转为灰度图)",
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
            "message0": "4. 执行人脸检测 缩放比: %1 最小邻居数: %2",
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
            "message0": "5. 获取人脸坐标数据",
            "output": "Array",
            "colour": FACE_COLOR,
            "tooltip": "返回检测到的人脸坐标列表 [x, y, w, h]",
            "helpUrl": ""
        });
    }
};

// 6. 视觉绘制 (Draw)
Blockly.Blocks['face_ai_step6_draw'] = {
    init: function() {
        this.jsonInit({
            "message0": "6. 绘制检测结果 颜色(RGB): %1 线宽: %2",
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
            "message0": "7. 显示最终图像",
            "previousStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "弹出窗口显示处理后的图像（使用 cv2.imshow）",
            "helpUrl": ""
        });
    }
};

// OpenCV 摄像头：初始化
Blockly.Blocks['face_ai_cam_init'] = {
    init: function() {
        this.jsonInit({
            "message0": "cv2 初始化摄像头 序号 %1",
            "args0": [
                {
                    "type": "field_number",
                    "name": "INDEX",
                    "value": 0,
                    "min": 0
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "创建 cv2.VideoCapture 实例",
            "helpUrl": ""
        });
    }
};

// OpenCV 摄像头：设置分辨率
Blockly.Blocks['face_ai_cam_size'] = {
    init: function() {
        this.jsonInit({
            "message0": "cv2 设置摄像头获取图像尺寸 宽 %1 高 %2",
            "args0": [
                {
                    "type": "field_number",
                    "name": "WIDTH",
                    "value": 320,
                    "min": 1
                },
                {
                    "type": "field_number",
                    "name": "HEIGHT",
                    "value": 240,
                    "min": 1
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "通过 cap.set 修改宽高",
            "helpUrl": ""
        });
    }
};

// OpenCV 摄像头：读取帧
Blockly.Blocks['face_ai_cam_read'] = {
    init: function() {
        this.jsonInit({
            "message0": "cv2 从摄像头获取 图像",
            "output": null,
            "colour": FACE_COLOR,
            "tooltip": "cap.read()[1] 取得最新帧",
            "helpUrl": ""
        });
    }
};

// OpenCV 显示窗口
Blockly.Blocks['face_ai_imshow'] = {
    init: function() {
        this.jsonInit({
            "message0": "cv2 在窗口 %1 显示图片/视频帧 %2",
            "args0": [
                {
                    "type": "field_input",
                    "name": "NAME",
                    "text": "cv2_video"
                },
                {
                    "type": "input_value",
                    "name": "FRAME"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "cv2.imshow 显示画面",
            "helpUrl": ""
        });
    }
};

// OpenCV 退出检测
Blockly.Blocks['face_ai_waitq_exit'] = {
    init: function() {
        this.jsonInit({
            "message0": "按下Q键退出opencv和循环",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "cv2.waitKey 检测按键并 break",
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