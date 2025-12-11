import * as Blockly from 'blockly/core';
import 'blockly/python';

function ensureDefinitions() {
    Blockly.Python.definitions_ = Blockly.Python.definitions_ || Object.create(null);
}

Blockly.Python['face_ai_rec_run_simple'] = function(block) {
    ensureDefinitions();
    var type = block.getFieldValue('TYPE');
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || "'0'"; // 默认摄像头0或空字串

    // 生成调用代码，将结果存入全局变量 current_recognition_result
    const code = [
        `# 执行识别`,
        `current_recognition_result = face_engine.recognize('${type}', ${value})`,
        `print(f"识别完成: {current_recognition_result}")`,
        ``
    ].join('\n');
    return code;
};

Blockly.Python['face_ai_rec_result_get'] = function(block) {
    var attr = block.getFieldValue('ATTR');
    // 防御性编程：如果没有结果，返回默认值
    const code = `current_recognition_result.get('${attr}', '无结果') if 'current_recognition_result' in globals() else '未运行'`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};