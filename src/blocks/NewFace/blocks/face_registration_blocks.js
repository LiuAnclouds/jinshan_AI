import * as Blockly from 'blockly/core';

const FACE_COLOR = "#4C9AFF";
const UPLOAD_INPUT_ID = 'face-reg-upload-input';

// === 辅助函数：处理文件上传 (与人脸检测模块复用逻辑) ===
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
    // 假设后端运行在本地 5000 端口
    const res = await fetch('http://127.0.0.1:5000/api/upload', {
        method: 'POST',
        body: formData
    });
    if (!res.ok) throw new Error(`上传失败: ${res.statusText}`);
    const data = await res.json();
    if (data.status !== 'success') throw new Error(data.msg || '上传失败');
    return data.path;
}

// 1. 初始化 (注册与识别共用)
Blockly.Blocks['face_ai_init_system'] = {
    init: function() {
        this.jsonInit({
            "message0": "1. 初始化人脸识别系统",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "加载依赖库 (cv2, numpy) 并初始化 FaceEngine 引擎",
            "helpUrl": ""
        });
    }
};

// 2. 注册人脸（带上传功能）
Blockly.Blocks['face_ai_reg_add'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("2. 注册人脸：上传图片")
            .appendField(new Blockly.FieldLabelSerializable("点击选择..."), "FILEPATH");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("设置标签(姓名)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(FACE_COLOR);
        this.setTooltip("上传一张人脸照片，并指定属于谁");

        // 绑定点击事件用于上传
        this.setOnChange((event) => {
            if (!event || event.type !== Blockly.Events.UI || event.element !== 'click' || event.blockId !== this.id) return;
            // 避免误触标签输入框
            // 注意：Blockly的点击事件比较泛，实际项目中通常建议使用 FieldImage 点击或专门的按钮 Field
            const input = ensureUploadInput();
            input.onchange = async (e) => {
                const file = e.target.files && e.target.files[0];
                input.value = '';
                if (!file) return;
                this.setFieldValue('上传中...', 'FILEPATH');
                try {
                    const path = await uploadImageFile(file);
                    this.setFieldValue(path, 'FILEPATH');
                } catch (err) {
                    console.error(err);
                    this.setFieldValue('上传失败', 'FILEPATH');
                }
            };
            input.click();
        });
    }
};

// 3. 提交/完成注册（可选，用于分隔阶段）
Blockly.Blocks['face_ai_reg_finish'] = {
    init: function() {
        this.jsonInit({
            "message0": "3. 完成注册并构建数据库",
            "previousStatement": null,
            "nextStatement": null,
            "colour": FACE_COLOR,
            "tooltip": "处理所有注册的图片，提取特征",
            "helpUrl": ""
        });
    }
};