import * as Blockly from 'blockly/core';

const FACE_COLOR = "#4C9AFF";

// 4. 执行识别
Blockly.Blocks['face_ai_rec_run_simple'] = {
    init: function() {
        this.jsonInit({
            "message0": "4. 执行识别 输入源 %1 参数 %2",
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
            "tooltip": "对比输入源与注册库",
            "helpUrl": ""
        });
    }
};

// 5. 获取结果
Blockly.Blocks['face_ai_rec_result_get'] = {
    init: function() {
        this.jsonInit({
            "message0": "获取识别结果属性: %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "ATTR",
                    "options": [
                        ["姓名 (Label)", "label"],
                        ["置信度 (Score)", "score"]
                    ]
                }
            ],
            "output": null,
            "colour": FACE_COLOR,
            "tooltip": "获取最近一次识别的结果",
            "helpUrl": ""
        });
    }
};