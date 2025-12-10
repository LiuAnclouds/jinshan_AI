import Blockly from 'blockly';

const hueColor = {
    setup: 230,
    process: 160,
    ai: 290,
    ui: 20
};

// --- 1. 基础设置模块 (OpenCV Modules) ---
Blockly.Blocks['cv_start_camera'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📷")
            .appendField("启动 AI 摄像头 (OpenCV)");
        this.setNextStatement(true, null);
        this.setColour(hueColor.setup);
        this.setTooltip("初始化 VideoCapture，打开电脑摄像头");
    }
};

// --- 2. 图像处理模块 (Image Processing) ---
Blockly.Blocks['cv_cvt_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("👁️")
            .appendField("将画面转为灰度 (GrayScale)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(hueColor.process);
        this.setTooltip("机器更容易识别黑白图像，简化计算");
    }
};

// --- 3. 人脸 AI 模块 (Face AI) ---
Blockly.Blocks['cv_load_cascade'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🧠")
            .appendField("加载人脸识别模型 (Haar)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(hueColor.ai);
        this.setTooltip("加载预训练的分类器文件");
    }
};

Blockly.Blocks['cv_detect_and_draw'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🤖")
            .appendField("检测人脸并画框");
        this.appendStatementInput("DO_IF_FOUND")
            .setCheck(null)
            .appendField("如果发现人脸，执行:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(hueColor.ai);
        this.setTooltip("核心逻辑：检测坐标 -> 循环遍历 -> 绘图");
    }
};

// --- 4. 逻辑与反馈 (Logic & Feedback) ---
Blockly.Blocks['cv_log_info'] = {
    init: function() {
        this.appendValueInput("MSG")
            .setCheck("String")
            .appendField("📝")
            .appendField("在控制台记录信息");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(hueColor.ui);
    }
};

Blockly.Blocks['cv_show_image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🖥️")
            .appendField("更新画面窗口");
        this.setPreviousStatement(true, null);
        this.setColour(hueColor.setup);
    }
};