//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');

import * as Blockly from 'blockly/core';
import 'blockly/python'
import { CategoryColors, SOFTWARE_KEY } from '@/global/colors'
import { button_AB, buzz_tone, touchPad, axis } from './global_var_block'
//  整数 %1 对应的 ASCII 字符
Blockly.Blocks['int_to_chr'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'String',
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.INT_TO_CHR_HELPURL,
            "tooltip": Blockly.Msg.INT_TO_CHR_TOOLTIP,
            "message0": Blockly.Msg.INT_TO_CHR_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "_int"
            }]
        });
    }
};

//  hcsr04 超声波
Blockly.Blocks['mpython_hcsr04_obj'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output": 'Number',
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_HCSR04_OBJ_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_HCSR04_OBJ_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_HCSR04_OBJ_MESSAGE0,
            "args0": [{
                "text": "hcsr04",
                "type": "field_input",
                "name": "hcsr04_name"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "trigger"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "echo"
            }]
        });
    }
};
// hcsr04 超声波(mm)
Blockly.Python['mpython_hcsr04_obj'] = function (block) {
    Blockly.Python.definitions_['from_hcsr04_import_HCSR04'] = 'from hcsr04 import HCSR04'
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var hcsr04_name = block.getFieldValue('hcsr04_name');
    // var trigger = block.getFieldValue('trigger');
    var trigger = Blockly.Python.valueToCode(block, 'trigger', Blockly.Python.ORDER_ATOMIC);
    var echo = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_ATOMIC);
    // var echo = block.getFieldValue('echo');
    Blockly.Python.definitions_['mpython_hcsr04_object' + hcsr04_name] = `${hcsr04_name} = HCSR04(trigger_pin=Pin.P${trigger}, echo_pin=Pin.P${echo})`

    var code = '\n';

    return code;
};




//  hcsr04 超声波(mm)
Blockly.Blocks['mpython_hcsr04_distance'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MESSAGE0,
            "args0": [{
                "text": "hcsr04",
                "type": "field_input",
                "name": "hcsr04_name"
            }, {
                "options": [
                    ['mm', 'mm'],
                    ['cm', 'cm']
                ],
                "type": "field_dropdown",
                "name": "unit"
            }]
        });
    }
};

//  hcsr04 超声波(mm)
Blockly.Blocks['mpython_hcsr04_distance_mm'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_MESSAGE0,
            "args0": [{
                "text": "hcsr04",
                "type": "field_input",
                "name": "hcsr04_name"
            }]
        });
    }
};

// pm2.5浓度
Blockly.Blocks['mpython_pm2_5_MIC'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_PM2_5_MIC_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_PM2_5_MIC_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_PM2_5_MIC_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "rx"
            }, {
                "options": [
                    ['PM1.0ug/m3', '_pm_data[0]'],
                    ['PM2.5ug/m3', '_pm_data[1]'],
                    ['PM10ug/m3', '_pm_data[2]']
                ],
                "type": "field_dropdown",
                "name": "unit"
            }]
        });
    }
};

// 0.1升空气中直径在多少间的颗粒物个数
Blockly.Blocks['mpython_pm2_5_LitresAir'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_PM2_5_LitresAir_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_PM2_5_LitresAir_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_PM2_5_LitresAir_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "rx"
            }, {
                "options": [
                    ['0.3um', '_pm_data[3]'],
                    ['0.5um', '_pm_data[4]'],
                    ['1um', '_pm_data[5]'],
                    ['2.5um', '_pm_data[6]'],
                    ['5um', '_pm_data[7]'],
                    ['10um', '_pm_data[8]']
                ],
                "type": "field_dropdown",
                "name": "unit"
            }]
        });
    }
};
//  mac 地址
Blockly.Blocks['mpython_mac_address'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'String',
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.System : CategoryColors.Wifi,
            "helpUrl": Blockly.Msg.MPYTHON_MAC_ADDRESS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MAC_ADDRESS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MAC_ADDRESS_MESSAGE0,
        });
    }
};

// 解析 json 字符串 %1 返回对象';
Blockly.Blocks['mpython_ujson_loads'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_UJSON_LOADS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UJSON_LOADS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UJSON_LOADS_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};
//字符串切割
Blockly.Blocks['mpython_split'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_SPLIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SPLIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SPLIT_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "data"
            }, 
            {
                    "check": "String",
                    "type": "input_value",
                    "name": "split_data"
            }
        ]
        });
    }
};

// 解析 json 字符串 %1 返回对象';
Blockly.Blocks['mpython_ujson_loads_noU'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_UJSON_LOADS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UJSON_LOADS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UJSON_LOADS_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};

// %1 转 json 字符串';
Blockly.Blocks['mpython_ujson_dumps'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'String',
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_UJSON_DUMPS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UJSON_DUMPS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UJSON_DUMPS_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};
// %1 转 json 字符串';
Blockly.Blocks['mpython_ujson_dumps_noU'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'String',
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_UJSON_DUMPS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UJSON_DUMPS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UJSON_DUMPS_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};

// 解码 base64 数据 %1 返回字节对象';
Blockly.Blocks['mpython_base64_to_data'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_BASE64_TO_DATA_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_BASE64_TO_DATA_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_BASE64_TO_DATA_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};
// 解码 base64 数据 %1 返回字节对象';
Blockly.Blocks['mpython_base64_to_data_noU'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_BASE64_TO_DATA_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_BASE64_TO_DATA_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_BASE64_TO_DATA_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};

// %1 以 base64 格式编码 返回字节对象';
Blockly.Blocks['mpython_data_to_base64'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_DATA_TO_BASE64_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_DATA_TO_BASE64_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_DATA_TO_BASE64_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};
// %1 以 base64 格式编码 返回字节对象';
Blockly.Blocks['mpython_data_to_base64_noU'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_DATA_TO_BASE64_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_DATA_TO_BASE64_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_DATA_TO_BASE64_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};

// 十六进制字符串 %1 转 二进制 字节';
Blockly.Blocks['mpython_hex_to_bin_str'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "convert_chr"
            }]
        });
    }
};// 十六进制字符串 %1 转 二进制 字节';
Blockly.Blocks['mpython_hex_to_bin_str_noU'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "convert_chr"
            }]
        });
    }
};

// 字符串 %1 转 十六进制 字节';
Blockly.Blocks['mpython_str_to_hex'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_STR_TO_HEX_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_STR_TO_HEX_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_STR_TO_HEX_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "convert_chr"
            }]
        });
    }
};

Blockly.Blocks['mpython_str_to_hex_noU'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_STR_TO_HEX_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_STR_TO_HEX_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_STR_TO_HEX_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "convert_chr"
            }]
        });
    }
};

// ASCII 单字符 %1 转 整形';
Blockly.Blocks['mpython_chr_to_int'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'String',
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_CHR_TO_INT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_CHR_TO_INT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_CHR_TO_INT_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "convert_chr"
            }]
        });
    }
};

// 整形 %1 转 ASCII 单字符';
Blockly.Blocks['mpython_int_to_chr'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'String',
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_INT_TO_CHR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_INT_TO_CHR_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_INT_TO_CHR_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "convert_num"
            }]
        });
    }
};

// 10进制整数 %1 转化为 %2 字节';
Blockly.Blocks['mpython_ten_converted_to_bytes'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_MESSAGE0,
            "args0": [{
                "options": [
                    ['2', "'<H'"],
                    ['4', "'<L'"]
                ],
                "type": "field_dropdown",
                "name": "convert_choice"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "convert_num"
            }]
        });
    }
};

// %1 字符串 %2 转化为10进制整数
Blockly.Blocks['mpython_convert_to_ten'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_CONVERT_TO_TEN_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_CONVERT_TO_TEN_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_CONVERT_TO_TEN_MESSAGE0,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_BIN, '2'],
                    [Blockly.Msg.MPYTHON_OCT, '8'],
                    [Blockly.Msg.MPYTHON_HEX, '16']
                ],
                "type": "field_dropdown",
                "name": "convert_choice"
            }, {
                "check": "String",
                "type": "input_value",
                "name": "convert_str"
            }]
        });
    }
};

// 10进制整数 %1 转化为 %2
Blockly.Blocks['mpython_ten_convert_to'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'String',
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MPYTHON_TEN_CONVERT_TO_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TEN_CONVERT_TO_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_TEN_CONVERT_TO_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "int_num"
            }, {
                "options": [
                    [Blockly.Msg.MPYTHON_BIN, 'bin'],
                    [Blockly.Msg.MPYTHON_OCT, 'oct'],
                    [Blockly.Msg.MPYTHON_HEX, 'hex']
                ],
                "type": "field_dropdown",
                "name": "ten_convert_to"
            }]
        });
    }
};

// 数字值
Blockly.Blocks['mpython_high_low'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.MPYTHON_HIGH_LOW_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_HIGH_LOW_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_HIGH_LOW_MESSAGE0,
            "args0": [{
                "options": [
                    ['-', '2'],
                    ['HIGH', '1'],
                    ['LOW', '0']

                ],
                "type": "field_dropdown",
                "name": "high_low"
            }]
        });
    }
};

// 子綫程
Blockly.Blocks['mpython_define_thread'] = {
    init: function () {
        this.jsonInit({
            //"inputsInline": true,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.Loop,
            "helpUrl": '',
            "tooltip": '',
            "message0": Blockly.Msg.MPYTHON_DEFINE_THREAD_MESSAGE0,
            "args0": [{
                "options": [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4']
                ],
                "type": "field_dropdown",
                "name": "THREAD"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython_run_thread'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": '',
            "tooltip": '',
            "message0": Blockly.Msg.MPYTHON_RUN_THREAD_MESSAGE0,
            "args0": [{
                "options": [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4']
                ],
                "type": "field_dropdown",
                "name": "THREAD"
            }]
        });
    }
};

Blockly.Blocks['mpython_start_new_thread'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Loop,
            "helpUrl": Blockly.Msg.MPYTHON_START_NEW_THREAD_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_START_NEW_THREAD_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_START_NEW_THREAD_MESSAGE0,
            "args0": [{
                "options": [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4']
                ],
                "type": "field_dropdown",
                "name": "thread_name"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

// 线程锁对象 %1 请求锁
Blockly.Blocks['mpython_lock_object_acquire_lock'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Loop,
            "helpUrl": Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "thread_lock_object",
                "text": "lock"
            }]
        });
    }
};

// text内容是否为number
Blockly.Blocks['text_is_number'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Boolean',
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.TEXT_IS_NUMBER_HELPURL,
            "tooltip": Blockly.Msg.TEXT_IS_NUMBER_TOOLTIP,
            "message0": Blockly.Msg.TEXT_IS_NUMBER_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "TEXT",
                "check": "String"
            }, {
                "options": [
                    [Blockly.Msg.TEXT_IS_DIGIT, '.isdigit()'],
                    [Blockly.Msg.TEXT_IS_ALPHA, '.isalpha()']
                    //[Blockly.Msg.TEXT_IS_ALNUM, '.isalnum()']
                ],
                "type": "field_dropdown",
                "name": "TYPE"
            }]
        });
    }
};

//  字节 %1 转 字符串
Blockly.Blocks['mpython_bytes_decode'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'String',
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_BYTES_DECODE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_BYTES_DECODE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_BYTES_DECODE_MESSAGE0,
            "args0": [{
                // "check": "String",
                "type": "input_value",
                "name": "bytes_decode"
            }]
        });
    }
};

// 字符串格式化 % 方式
Blockly.Blocks['text_format'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "output": "String",
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.TEXT_FORMAT_HELPURL,
            "tooltip": Blockly.Msg.TEXT_FORMAT_TOOLTIP,
            "message0": Blockly.Msg.TEXT_FORMAT_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "FORMAT",
                "check": "String"
            }, {
                "type": "input_value",
                "name": "CONTENT"
            }]
        });
    }
};

// 字符串格式化 format 方式
Blockly.Blocks['text_format2'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "output": "String",
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.TEXT_FORMAT2_HELPURL,
            "tooltip": Blockly.Msg.TEXT_FORMAT2_TOOLTIP,
            "message0": Blockly.Msg.TEXT_FORMAT2_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "FORMAT",
                "check": "String"
            }, {
                "type": "input_value",
                "name": "CONTENT"
            }]
        });
    }
};

// text转字节
Blockly.Blocks['text_to_byte'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null, // 生成bytes对象
            // "output":'Number',
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.TEXT_TO_BYTE_HELPURL,
            "tooltip": Blockly.Msg.TEXT_TO_BYTE_TOOLTIP,
            "message0": Blockly.Msg.TEXT_TO_BYTE_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "TEXT",
                "check": "String"
            }
                // ,
                // {
                // "options": [
                // ['utf-8', 'utf-8'],
                // ['ascii', 'ascii']
                // ],
                // "type": "field_dropdown",
                // "name": "encode"
                // }
            ]
        });
    }
};

// 非文本转字节
Blockly.Blocks['other_to_byte'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null, // 生成bytes对象
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.OTHER_TO_BYTE_HELPURL,
            "tooltip": Blockly.Msg.OTHER_TO_BYTE_TOOLTIP,
            "message0": Blockly.Msg.OTHER_TO_BYTE_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "input_var"
                // "check": "String"
            }]
        });
    }
};

// 按位取反 ，~a
Blockly.Blocks['bit_inversion'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": "Number",
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.BIT_INVERSION_HELPURL,
            "tooltip": Blockly.Msg.BIT_INVERSION_TOOLTIP,
            "message0": Blockly.Msg.BIT_INVERSION_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "data"
            }]
        });
    }
};

/*try_except*/
Blockly.Blocks['mpython_try_except'] = {
    init: function () {
        this.jsonInit({
            "message0": '',
            "previousStatement": null,
            "nextStatement": null,
            "colour": CategoryColors.Logic,
            "tooltip": '',
            "helpUrl": ''
        });
        this.appendStatementInput('TRY')
            .appendField('try');
        this.appendStatementInput('EXCEPT')
            .appendField('except');
    }
};

Blockly.Blocks['mpython_try_except_finally'] = {
    init: function () {
        this.jsonInit({
            "message0": '',
            "previousStatement": null,
            "nextStatement": null,
            "colour": CategoryColors.Logic,
            "tooltip": '',
            "helpUrl": ''
        });
        this.appendStatementInput('TRY')
            .appendField('try');
        this.appendStatementInput('EXCEPT')
            .appendField('except');
        this.appendStatementInput('FINALLY')
            .appendField('finally');
    }
};
/*try_except*/

/*文本- 开始 */
//
Blockly.Blocks['text_append_text'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Text,
            "args0": [{
                // "check": "Number",
                "type": "input_value",
                "name": "text_abc"
            }, {
                "type": "input_value",
                "name": "append_text"
            }],
            "output": 'String',
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "helpUrl": Blockly.Msg.TEXT_APPEND_TEXT_HELPURL,
            "tooltip": Blockly.Msg.TEXT_APPEND_TEXT_TOOLTIP,
            "message0": Blockly.Msg.TEXT_APPEND_TEXT_MESSAGE0
        });
    }
};

Blockly.Blocks['line_break'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Text,
            "output": 'String',
            "inputsInline": true,
            "helpUrl": Blockly.Msg.TEXT_LINE_BREAK_HELPURL,
            "tooltip": Blockly.Msg.TEXT_LINE_BREAK_TOOLTIP,
            "message0": Blockly.Msg.TEXT_LINE_BREAK_MESSAGE0
        });
    }
};

Blockly.Blocks['text_add'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Text,
            "output": 'String',
        });
        this.itemCount_ = 1;
        this.updateShape_();
        this.setMutator(new Blockly.Mutator(['text_join_item']));
    },
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('text_join_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('text_join_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        for (let i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        for (let i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.TEXT_ADD_TITLE_CREATEWITH);
        }
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i).setCheck("String").setAlign(Blockly.ALIGN_RIGHT);
                // var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
                if (i == 0) {
                    input.appendField(Blockly.Msg.TEXT_ADD_TITLE_CREATEWITH);
                } else {
                    input.appendField('');
                }
            }
        }
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};
Blockly.Python['text_add'] = function (block) {
    var code = [];
    for (var i = 0; i < block.itemCount_; i++) {
        let inputCode = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) || "''";
        // if (!inputCode.match(/^['"].*['"]$/)) {
        //     inputCode = 'str(' + inputCode + ')';
        // }
        code.push(inputCode);
    }
    code = code.join(' + ');
    return [code, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Blocks['text_join_item'] = {
    init: function () {
        this.setColour(CategoryColors.IoT_SIoT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.VARIABLES_DEFAULT_NAME);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.contextMenu = false;
    }
}
Blockly.Blocks['text_join_container'] = {
    init: function () {
        this.setColour(CategoryColors.IoT_SIoT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.VARIABLES_DEFAULT_NAME);
        this.appendStatementInput('STACK');
        this.contextMenu = false;
    }
};
// 自定义代码
Blockly.Blocks['mpython_custom_code'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Text,
            "helpUrl": Blockly.Msg.MPYTHON_CUSTOM_CODE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_CUSTOM_CODE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_CUSTOM_CODE_MESSAGE0,
            "args0": [{
                "name": "custom_type",
                "options": [
                    [Blockly.Msg.MPYTHON_CUSTOM_TYPE_NORMAL, 'normal'],
                    [Blockly.Msg.MPYTHON_CUSTOM_TYPE_IMPORT, 'topping']
                ],
                "type": "field_dropdown"
            }, {
                "type": "input_dummy"
            }, {
                "type": "field_textarea",
                "name": "custom_code",
                "text": "custom code"
            }]
        });
    }
};

/*文本 - 结束 */

// 复位
Blockly.Blocks['mpython_machine_reset'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":'Boolean',
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON_MACHINE_RESET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MACHINE_RESET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MACHINE_RESET_MESSAGE0,
            // "args0": [{
            // "check": "Number",
            // "type": "input_value",
            // "name": "seg_num"
            // }
            // ]
        });
    }
};

// 数学 - random.randrange
Blockly.Blocks['math_random_randrange'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            'output': "Number",
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MATH_RANDOM_RANDRANGE_HELPURL,
            "tooltip": Blockly.Msg.MATH_RANDOM_RANDRANGE_TOOLTIP,
            "message0": Blockly.Msg.MATH_RANDOM_RANDRANGE_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "start"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "stop"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "step"
            }]
        });
    }
};

// 数学 - 图形化角度
Blockly.Blocks['math_angle'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            'output': "Number",
            "colour": CategoryColors.Math,
            "helpUrl": '',
            "tooltip": '',
            "message0": '%1',
            "args0": [{
                "name": "angle",
                "type": "field_angle"
            }]
        });
    }
};

// 数学 - 保留小数位数
Blockly.Blocks['math_keep_decimal'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            'output': "Number",
            "colour": CategoryColors.Math,
            "helpUrl": Blockly.Msg.MATH_KEEP_DECIMAL_HELPURL,
            "tooltip": Blockly.Msg.MATH_KEEP_DECIMAL_TOOLTIP,
            "message0": Blockly.Msg.MATH_KEEP_DECIMAL_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "NUM"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "PLACE"
            }]
        });
    }
};

/**
引用labplus-数学-映射
 */
//映射数字范围，放在math目录里
Blockly.Blocks['labplus_mapping'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "colour": CategoryColors.Math, //  blockly\blocks\math.js  //Blockly.Blocks.math.HUE = 230;
            "args0": [{
                "name": "inputNum",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "bMin",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "bMax",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "cMin",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "cMax",
                "type": "input_value",
                "check": "Number"
            }],
            "output": "Number",
            "message0": Blockly.Msg.labplus_mapping_MESSAGE0,
            "tooltip": Blockly.Msg.labplus_mapping_TOOLTIP,
            "helpUrl": Blockly.Msg.labplus_mapping_HELPURL
        });
    }
};

//映射数字范围，放在math目录里
Blockly.Blocks['microbit_labplus_mapping'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "colour": CategoryColors.Math, //  blockly\blocks\math.js  //Blockly.Blocks.math.HUE = 230;
            "args0": [{
                "name": "inputNum",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "bMin",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "bMax",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "cMin",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "cMax",
                "type": "input_value",
                "check": "Number"
            }],
            "output": "Number",
            "message0": Blockly.Msg.labplus_mapping_MESSAGE0,
            "tooltip": Blockly.Msg.labplus_mapping_TOOLTIP,
            "helpUrl": Blockly.Msg.labplus_mapping_HELPURL
        });
    }
};

//定时器
Blockly.Blocks['mpython_Timer'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_Timer_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.Loop,
            "helpUrl": Blockly.Msg.mpython_Timer_HELPURL,
            "tooltip": Blockly.Msg.mpython_Timer_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "Num"
            }, {
                "options": [
                    [Blockly.Msg.mpython_PERIODIC, 'PERIODIC'],
                    [Blockly.Msg.mpython_ONE_SHOT, 'ONE_SHOT']
                ],
                "type": "field_dropdown",
                "name": "Timer_mode"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "period"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

// 定时器选项
Blockly.Blocks['mpython_timer_option'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Event,
            "output": "Number",
            "helpUrl": '',
            "tooltip": '',
            "message0": '%1',
            "args0": [{
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["4", "4"],
                    ["7", "7"],
                    ["8", "8"],
                    ["9", "9"],
                    ["10", "10"]
                ],
                "type": "field_dropdown",
                "name": "Timer_num"
            }]
        });
    }
};

// 自定义事件选项
Blockly.Blocks['mpython_event_option'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Event,
            "output": "Number",
            "helpUrl": '',
            "tooltip": '',
            "message0": '%1',
            "args0": [{
                "options": [
                    ["10", "10"],
                    ["9", "9"],
                    ["8", "8"],
                    ["7", "7"],
                    ["4", "4"],
                    ["2", "2"],
                    ["1", "1"]
                ],
                "type": "field_dropdown",
                "name": "Timer_num"
            }]
        });
    }
};

// 定时器- 当前计数值
Blockly.Blocks['mpython_Timer_value'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Event,
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_Timer_value_TOOLTIP,
            "message0": Blockly.Msg.mpython_Timer_value_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "Timer_num"
            }]
        });
    }
};

//取消定时器的初始化。停止计时器，并禁用计时器外围设备
Blockly.Blocks['mpython_Timer_deinit'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Event,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_Timer_deinit_TOOLTIP,
            "message0": Blockly.Msg.mpython_Timer_deinit_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "Timer_num"
            }]
        });
    }
};

//中断-引脚
Blockly.Blocks['mpython_Interrupt_pin'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_Interrupt_pin_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_Interrupt_pin_HELPURL,
            "tooltip": Blockly.Msg.mpython_Interrupt_pin_TOOLTIP,
            "args0": [{
                /*
                "options": [
                ["P0", "0"],
                ["P1", "1"],
                ["P2", "2"],
                ["P3", "3"],
                ["P8", "8"],
                ["P9", "9"],
                ["P13", "13"],
                ["P14", "14"],
                ["P15", "15"],
                ["P16", "16"],
                [Blockly.Msg.mpython_button_A, "5"],
                [Blockly.Msg.mpython_button_B, "11"]
                ],
                "type": "field_dropdown",
                 */
                "check": "Number",
                "type": "input_value",
                "name": "Interrupt_pin"
            }, {
                "options": [
                    [Blockly.Msg.mpython_Interrupt_pin_IRQ_RISING, "to_high"],
                    [Blockly.Msg.mpython_Interrupt_pin_IRQ_FALLING, "to_low"]
                ],
                "type": "field_dropdown",
                "name": "action"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};











//中断-按键
Blockly.Blocks['mpython_Interrupt_AB'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "message0": Blockly.Msg.mpython_Interrupt_AB_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_Interrupt_AB_HELPURL,
            "tooltip": Blockly.Msg.mpython_Interrupt_AB_TOOLTIP,
            "args0": [{
                "options": button_AB,
                "type": "field_dropdown",
                "name": "button"
            }, {
                "options": [
                    [Blockly.Msg.mpython_IRQ_FALLING, "down"],
                    [Blockly.Msg.mpython_IRQ_RISING, "up"]
                ],
                "type": "field_dropdown",
                "name": "action"
            },]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};
//中断-按键
Blockly.Python['mpython_Interrupt_AB'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var button_AB = block.getFieldValue('button');
    var action = block.getFieldValue('action');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    var irq = ("down" == action) ? "IRQ_FALLING" : "IRQ_RISING";
    Blockly.Python.definitions_['on_' + button_AB] =
        'def on_' + button_AB + '(_):\n' +
        '    if 0 == _.value():\n' +
        '        on_' + button_AB + '_down(_)\n' +
        '    else:\n' +
        '        on_' + button_AB + '_up(_)';
    var debounce = '    time.sleep_ms(10)\n' +
        '    if ' + button_AB + '.value() == ' + (("down" == action) ? '1' : '0') + ': return\n';
    Blockly.Python.definitions_['on_' + button_AB + '_' + action] =
        'def on_' + button_AB + '_' + action + '(_):\n' + globals + debounce + branch;
    Blockly.Python.functions_['Interrupt_' + button_AB] = button_AB + '.irq(trigger=Pin.' + irq + ', handler=on_' + button_AB + '_' + action + ')';
    if ("down" == action) {
        if (Blockly.Python.definitions_['on_' + button_AB + '_up']) {
            Blockly.Python.functions_['Interrupt_' + button_AB] = button_AB + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_' + button_AB + ')';
        } else {
            Blockly.Python.definitions_['on_' + button_AB] = "";
        }
    } else {
        if (Blockly.Python.definitions_['on_' + button_AB + '_down']) {
            Blockly.Python.functions_['Interrupt_' + button_AB] = button_AB + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_' + button_AB + ')';
        } else {
            Blockly.Python.definitions_['on_' + button_AB] = "";
        }
    }
    return '';
};
















// 掌控板摇晃状态
Blockly.Blocks['mpython_is_shaked'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON_IS_SHAKED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_IS_SHAKED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_IS_SHAKED_MESSAGE0,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_IS_SHAKED, "shaked"],
                    [Blockly.Msg.MPYTHON_IS_THROWN, "thrown"]
                ],
                "type": "field_dropdown",
                "name": "action"
            }]
        });
    }
};
// 是否倾斜
Blockly.Python['mpython_is_shaked'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['def_shake_variable'] = '_is_shaked = _is_thrown = False\n' +
        '_last_x = _last_y = _last_z = _count_shaked = _count_thrown = 0\n' +
        'def on_shaked():pass\ndef on_thrown():pass\n';
    Blockly.Python.definitions_['def_Timer11'] = 'tim11 = Timer(11)';
    Blockly.Python.definitions_['timer11_tick'] = 'def timer11_tick(_):\n' +
        '    global _is_shaked, _is_thrown, _last_x, _last_y, _last_z, _count_shaked, _count_thrown\n' +
        '    if _is_shaked:\n' +
        '        _count_shaked += 1\n' +
        '        if _count_shaked == 5: _count_shaked = 0\n' +
        '    if _is_thrown:\n' +
        '        _count_thrown += 1\n' +
        '        if _count_thrown == 10: _count_thrown = 0\n' +
        '        if _count_thrown > 0: return\n' +
        '    x=accelerometer.get_x(); y=accelerometer.get_y(); z=accelerometer.get_z()\n' +
        '    _is_thrown = (x * x + y * y + z * z < 0.25)\n' +
        '    if _is_thrown: on_thrown();return\n' +
        '    if _last_x == 0 and _last_y == 0 and _last_z == 0:\n' +
        '        _last_x = x; _last_y = y; _last_z = z; return\n' +
        '    diff_x = x - _last_x; diff_y = y - _last_y; diff_z = z - _last_z\n' +
        '    _last_x = x; _last_y = y; _last_z = z\n' +
        '    if _count_shaked > 0: return\n' +
        '    _is_shaked = (diff_x * diff_x + diff_y * diff_y + diff_z * diff_z > 1)\n' +
        '    if _is_shaked: on_shaked()\n';
    Blockly.Python.definitions_['timer11_init'] = 'tim11.init(period=100, mode=Timer.PERIODIC, callback=timer11_tick)\n';
    var action = block.getFieldValue('action');
    if ('thrown' == action) {
        return ['_is_thrown', Blockly.Python.ORDER_ATOMIC];
    } else {
        return ['_is_shaked', Blockly.Python.ORDER_ATOMIC];
    }
};









// 检测前后左右
Blockly.Blocks['mpython_shake_detector'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "message0": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_TOOLTIP,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_IS_SHAKED, "shaked"],
                    [Blockly.Msg.MPYTHON_IS_THROWN, "thrown"]
                ],
                "type": "field_dropdown",
                "name": "action"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};
// 摇晃检测器
Blockly.Python['mpython_shake_detector'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.definitions_['def_shake_variable'] = '_is_shaked = _is_thrown = False\n' +
        '_last_x = _last_y = _last_z = _count_shaked = _count_thrown = 0\n' +
        'def on_shaked():pass\ndef on_thrown():pass\n';
    Blockly.Python.definitions_['def_Timer11'] = 'tim11 = Timer(11)';
    Blockly.Python.definitions_['timer11_tick'] = 'def timer11_tick(_):\n' +
        '    global _is_shaked, _is_thrown, _last_x, _last_y, _last_z, _count_shaked, _count_thrown\n' +
        '    if _is_shaked:\n' +
        '        _count_shaked += 1\n' +
        '        if _count_shaked == 5: _count_shaked = 0\n' +
        '    if _is_thrown:\n' +
        '        _count_thrown += 1\n' +
        '        if _count_thrown == 10: _count_thrown = 0\n' +
        '        if _count_thrown > 0: return\n' +
        '    x=accelerometer.get_x(); y=accelerometer.get_y(); z=accelerometer.get_z()\n' +
        '    _is_thrown = (x * x + y * y + z * z < 0.25)\n' +
        '    if _is_thrown: on_thrown();return\n' +
        '    if _last_x == 0 and _last_y == 0 and _last_z == 0:\n' +
        '        _last_x = x; _last_y = y; _last_z = z; return\n' +
        '    diff_x = x - _last_x; diff_y = y - _last_y; diff_z = z - _last_z\n' +
        '    _last_x = x; _last_y = y; _last_z = z\n' +
        '    if _count_shaked > 0: return\n' +
        '    _is_shaked = (diff_x * diff_x + diff_y * diff_y + diff_z * diff_z > 1)\n' +
        '    if _is_shaked: on_shaked()\n';
    Blockly.Python.definitions_['timer11_init'] = 'tim11.init(period=100, mode=Timer.PERIODIC, callback=timer11_tick)\n';
    var action = block.getFieldValue('action');
    if ('thrown' == action) {
        Blockly.Python.definitions_['on_thrown_event'] = 'def on_thrown():\n' + globals + branch;
    } else {
        Blockly.Python.definitions_['on_shaked_event'] = 'def on_shaked():\n' + globals + branch;
    }
    return '';
};









// 掌控板倾斜状态
Blockly.Blocks['mpython_is_tilted'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON_IS_TILTED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_IS_TILTED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_IS_TILTED_MESSAGE0,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_DIRECTION_FORWARD, 'forward'],
                    [Blockly.Msg.MPYTHON_DIRECTION_BACK, 'back'],
                    [Blockly.Msg.MPYTHON_DIRECTION_LEFT, 'left'],
                    [Blockly.Msg.MPYTHON_DIRECTION_RIGHT, 'right']
                ],
                "type": "field_dropdown",
                "name": "direction"
            }]
        });
    }
};
// 是否倾斜
Blockly.Python['mpython_is_tilted'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var direction = block.getFieldValue('direction');
    switch (direction) {
        case "forward":
            return ['accelerometer.get_x() < -0.3', Blockly.Python.ORDER_ATOMIC];
        case "back":
            return ['accelerometer.get_x() > 0.3', Blockly.Python.ORDER_ATOMIC];
        case "right":
            return ['accelerometer.get_y() < -0.3', Blockly.Python.ORDER_ATOMIC];
        case "left":
            return ['accelerometer.get_y() > 0.3', Blockly.Python.ORDER_ATOMIC];
        default:
            return "";
    }
};





// 检测前后左右
Blockly.Blocks['mpython_tilt_detector'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "message0": Blockly.Msg.MPYTHON_TILT_DETECTOR_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON_TILT_DETECTOR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TILT_DETECTOR_TOOLTIP,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_DIRECTION_FORWARD, 'forward'],
                    [Blockly.Msg.MPYTHON_DIRECTION_BACK, 'back'],
                    [Blockly.Msg.MPYTHON_DIRECTION_LEFT, 'left'],
                    [Blockly.Msg.MPYTHON_DIRECTION_RIGHT, 'right'],
                    [Blockly.Msg.MPYTHON_DIRECTION_NONE, 'none']
                ],
                "type": "field_dropdown",
                "name": "direction"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};
// 倾斜检测器
Blockly.Python['mpython_tilt_detector'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var direction = block.getFieldValue('direction');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.definitions_['def_dir'] = '_dir = \'\'\n' +
        'def on_tilt_forward():pass\n' +
        'def on_tilt_back():pass\n' +
        'def on_tilt_right():pass\n' +
        'def on_tilt_left():pass\n' +
        'def on_tilt_none():pass\n';
    Blockly.Python.definitions_['def_Timer14'] = 'tim14 = Timer(14)';
    Blockly.Python.definitions_['timer14_tick'] = 'def timer14_tick(_):\n' +
        "    global _dir\n" +
        "    if accelerometer.get_x() < -0.3:\n" +
        "        if 'F' != _dir:_dir = 'F';on_tilt_forward()\n" +
        "    elif accelerometer.get_x() > 0.3:\n" +
        "        if 'B' != _dir:_dir = 'B';on_tilt_back()\n" +
        "    elif accelerometer.get_y() < -0.3:\n" +
        "        if 'R' != _dir:_dir = 'R';on_tilt_right()\n" +
        "    elif accelerometer.get_y() > 0.3:\n" +
        "        if 'L' != _dir:_dir = 'L';on_tilt_left()\n" +
        "    else:\n" +
        "        if '' != _dir:_dir = '';on_tilt_none()\n";
    Blockly.Python.definitions_['timer14_init'] = 'tim14.init(period=200, mode=Timer.PERIODIC, callback=timer14_tick)\n';
    Blockly.Python.definitions_['on_tilt_' + direction] = 'def on_tilt_' + direction + '():\n' + globals + branch;
    return '';
};










// 检测按键事件
Blockly.Blocks['mpython_touch_event'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "message0": Blockly.Msg.MPYTHON_TOUCH_EVENT_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON_TOUCH_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TOUCH_EVENT_TOOLTIP,
            "args0": [{
                "options": touchPad,
                "type": "field_dropdown",
                "name": "touchPad"
            }, {
                "options": [
                    [Blockly.Msg.MPYTHON_TOUCH_EVENT_PRESSED, 'pressed'],
                    [Blockly.Msg.MPYTHON_TOUCH_EVENT_UNPRESSED, 'unpressed']
                ],
                "type": "field_dropdown",
                "name": "action"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

// 自定义事件
Blockly.Blocks['mpython_custom_event'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_CUSTOM_EVENT_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.Loop,
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_CUSTOM_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_CUSTOM_EVENT_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "index"
            }, {
                "check": "Boolean",
                "type": "input_value",
                "name": "condition"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

//上电、reset后的系统计时
Blockly.Blocks['mpython_time_ticks'] = {
    init: function () {
        this.jsonInit({
            //"inputsInline": true,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_time_ticks_HELPURL,
            "tooltip": Blockly.Msg.mpython_time_ticks_TOOLTIP,
            "message0": Blockly.Msg.mpython_time_ticks_MESSAGE0,
            "output": "Number",
            "args0": [{
                "options": [
                    [Blockly.Msg.mpython_s, 'time'],
                    [Blockly.Msg.mpython_ms, 'ticks_ms'],
                    [Blockly.Msg.mpython_us, 'ticks_us']
                ],
                "type": "field_dropdown",
                "name": "time_ticks"
            }]
        });
    }
};

// 获取年月日等
//若未提供秒或为None，则使用 RTC时间
Blockly.Blocks['mpython_time_localtime'] = {
    init: function () {
        this.jsonInit({
            //"inputsInline": true,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_time_localtime_HELPURL,
            "tooltip": Blockly.Msg.mpython_time_localtime_TOOLTIP,
            "message0": Blockly.Msg.mpython_time_localtime_MESSAGE0,
            "output": "Number",
            "args0": [{
                "options": [
                    [Blockly.Msg.mpython_year, '[0]'],
                    [Blockly.Msg.mpython_month, '[1]'],
                    [Blockly.Msg.mpython_date, '[2]'],
                    [Blockly.Msg.mpython_hour, '[3]'],
                    [Blockly.Msg.mpython_minute, '[4]'],
                    [Blockly.Msg.mpython_s, '[5]'],
                    [Blockly.Msg.mpython_week, '[6]+1'],
                    [Blockly.Msg.mpython_days, '[7]']
                ],
                "type": "field_dropdown",
                "name": "time_localtime"
            }]
        });
    }
};
Blockly.Python['mpython_time_localtime'] = function (block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var time_localtime = block.getFieldValue('time_localtime');
    var code = 'time.localtime()' + time_localtime + '';
    return [code, Blockly.Python.ORDER_ATOMIC];
};



//摇晃
Blockly.Blocks['mpython_sway_xyz'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "direction_group",
                "options": [
                    [Blockly.Msg.mpython_left_right, 'left_right'],
                    [Blockly.Msg.mpython_front_back, 'front_back']
                ],
                "type": "field_dropdown"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_sway_xyz_TOOLTIP,
            "message0": Blockly.Msg.mpython_sway_xyz_MESSAGE0
        });
    }
};

//舵机
Blockly.Blocks['mpython_servo_angle0'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Pin,
            "args0": [{
                "name": "pwm_pin",
                // "options": set_analog,
                // "type": "field_dropdown"
                "check": "Number",
                "type": "input_value"
            }, {
                "name": "servo_angle",
                "type": "input_value",
                "check": "Number"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_SERVO_HELPURL,
            "tooltip": Blockly.Msg.mpython_servo_angle0_TOOLTIP,
            "message0": Blockly.Msg.mpython_servo_angle0_MESSAGE0,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

//舵机
Blockly.Blocks['mpython_servo_angle'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Pin,
            "args0": [{
                "name": "pwm_pin",
                // "options": set_analog,
                // "type": "field_dropdown"
                "check": "Number",
                "type": "input_value"
            }, {
                "name": "servo_angle",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "min_us",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "max_us",
                "type": "input_value",
                "check": "Number"
            }, {
                "name": "actuation_range",
                "type": "input_value",
                "check": "Number"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_SERVO_HELPURL,
            "tooltip": Blockly.Msg.mpython_servo_angle_TOOLTIP,
            "message0": Blockly.Msg.mpython_servo_angle_MESSAGE0,
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

// dh11 温湿度
Blockly.Blocks['mpython_dh11_hum_tem'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.General,
            "args0": [{
                "name": "dh11_hum_tem_pin",
                "check": "Number",
                "type": "input_value"
            }, {
                "name": "hum_tem",
                "options": [
                    [Blockly.Msg.mpython_tem, 'temperature'],
                    [Blockly.Msg.mpython_hum, 'humidity']
                ],
                "type": "field_dropdown"
            }

            ],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_dh11_hum_tem_HELPURL,
            "tooltip": Blockly.Msg.mpython_dh11_hum_tem_TOOLTIP,
            "message0": Blockly.Msg.mpython_dh11_hum_tem_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null
        });
    }
};

// dh22 温湿度
Blockly.Blocks['mpython_dh22_hum_tem'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.General,
            "args0": [{
                "name": "dh22_hum_tem_pin",
                "check": "Number",
                "type": "input_value"
            }, {
                "name": "hum_tem",
                "options": [
                    [Blockly.Msg.mpython_tem, 'temperature'],
                    [Blockly.Msg.mpython_hum, 'humidity']
                ],
                "type": "field_dropdown"
            }

            ],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_DH22_HUM_TEM_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_DH22_HUM_TEM_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_DH22_HUM_TEM_MESSAGE0,
            //"nextStatement": null,
            //"previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_sleep_ms'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Loop,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SLEEP_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SLEEP_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "duration"
            }, {
                "name": "ms_us",
                "options": [
                    [Blockly.Msg.mpython_s, 's'],
                    [Blockly.Msg.MPYTHON_MS, 'ms'],
                    [Blockly.Msg.MPYTHON_US, 'us']
                ],
                "type": "field_dropdown"
            }]
        });
    }
};

Blockly.Blocks['mpython_sleep_ms_1956'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Loop,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SLEEP_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SLEEP_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "duration"
            }, {
                "name": "ms_us",
                "options": [
                    [Blockly.Msg.mpython_s, 's'],
                    [Blockly.Msg.MPYTHON_MS, 'ms'],
                    [Blockly.Msg.MPYTHON_US, 'us']
                ],
                "type": "field_dropdown"
            }]
        });
    }
};

// type
Blockly.Blocks['mpython_type'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_TYPE_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "VAR"
            }],
            "output": null,
            "colour": CategoryColors.Logic,
            "tooltip": Blockly.Msg.MPYTHON_TYPE_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_TYPE_HELPURL
        });
    }
};

// type is
Blockly.Blocks['mpython_type_is'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_TYPE_IS_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "VAR"
            }, {
                "name": "TYPE",
                "options": [
                    ['int', 'int'],
                    ['float', 'float'],
                    ['bool', 'bool'],
                    ['str', 'str'],
                    ['list', 'list'],
                    ['tuple', 'tuple'],
                    ['set', 'set'],
                    ['dict', 'dict'],
                    ['bytes', 'bytes'],
                    ['bytearray', 'bytearray'],
                    ['complex', 'complex']
                ],
                "type": "field_dropdown"
            }],
            "output": "Boolean",
            "colour": CategoryColors.Logic,
            "tooltip": Blockly.Msg.MPYTHON_TYPE_IS_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_TYPE_IS_HELPURL
        });
    }
};

// eval
Blockly.Blocks['mpython_eval'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_EVAL_MESSAGE0,
            "args0": [{
                "check": "String",
                "type": "input_value",
                "name": "VAR"
            }],
            "output": null,
            "colour": CategoryColors.Logic,
            "tooltip": Blockly.Msg.MPYTHON_EVAL_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_EVAL_HELPURL
        });
    }
};

// return
Blockly.Blocks['mpython_return'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Logic,
            "helpUrl": Blockly.Msg.MPYTHON_RETURN_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RETURN_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RETURN_MESSAGE0,
            "args0": [{
                // "check": "Number",
                "type": "input_value",
                "name": "VAR"
            }]
        });
    }
};

//运行时间差
Blockly.Blocks['mpython_time_difference'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "colour": CategoryColors.System,
            "output": 'Number',
            "helpUrl": Blockly.Msg.MPYTHON_TIME_DIFFERENCE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TIME_DIFFERENCE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_TIME_DIFFERENCE_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "time1"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "time2"
            }]
        });
    }
};

// 构建Clock对象
Blockly.Blocks['mpython_def_clock'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Show,
            "helpUrl": Blockly.Msg.mpython_display_OLED_CLOCK_HELPURL,
            "tooltip": Blockly.Msg.mpython_def_clock_TOOLTIP,
            "message0": Blockly.Msg.mpython_def_clock_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "clock_name",
                "text": "my_clock"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "x"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "y"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "radius"

            }]
        });
    }
};

// 获取本地时间并设置模拟钟表时间
Blockly.Blocks['mpython_settime_clock'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Show,
            "helpUrl": Blockly.Msg.mpython_display_OLED_CLOCK_HELPURL,
            "tooltip": Blockly.Msg.mpython_settime_clock_TOOLTIP,
            "message0": Blockly.Msg.mpython_settime_clock_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "clock_name",
                "text": "my_clock"
            }]
        });
    }
};

// 绘制钟表 ,清除钟表
Blockly.Blocks['mpython_draw_clear_clock'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Show,
            "helpUrl": Blockly.Msg.mpython_display_OLED_CLOCK_HELPURL,
            "tooltip": Blockly.Msg.mpython_draw_clear_clock_TOOLTIP,
            "message0": Blockly.Msg.mpython_draw_clear_clock_MESSAGE0,
            "args0": [{
                "name": "draw_clear_clock",
                "options": [
                    [Blockly.Msg.mpython_draw, 'drawClock'],
                    [Blockly.Msg.mpython_clear, 'clear']
                ],
                "type": "field_dropdown"
            }, {
                "type": "field_input",
                "name": "clock_name",
                "text": "my_clock"
            }]
        });
    }
};

/* 按键开始 */
Blockly.Blocks['mpython_button_is_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "button",
                "options": [
                    ["A", "a"],
                    ["B", "b"],
                    ["A+B", "A+B"]
                ],
                "type": "field_dropdown"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.mpython_button_is_pressed_HELPURL,
            "tooltip": Blockly.Msg.mpython_button_is_pressed_TOOLTIP,
            "message0": Blockly.Msg.mpython_button_is_pressed_MESSAGE0
        });
    }
};
Blockly.Blocks['mpython_button_both_pressed'] = { //同时按下AB
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Boolean",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_button_both_pressed_TOOLTIP,
            "message0": Blockly.Msg.mpython_button_both_pressed_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_touchPad_value'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "touchPad",
                "options": touchPad,
                "type": "field_dropdown"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.mpython_touchPad_value_HELPURL,
            "tooltip": Blockly.Msg.mpython_touchPad_value_TOOLTIP,
            "message0": Blockly.Msg.mpython_touchPad_value_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_touchPad_value_num'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "touchPad",
                "options": touchPad,
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_touchPad_value_num_HELPURL,
            "tooltip": Blockly.Msg.mpython_touchPad_value_num_TOOLTIP,
            "message0": Blockly.Msg.mpython_touchPad_value_num_MESSAGE0
        });
    }
};
/* 按键结束 */

/* 引脚开始 */
Blockly.Blocks['mpython_read_digital'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Pin,
            "args0": [{
                "name": "allPin",
                "check": "Number",
                "type": "input_value"
                // "options": read_digital,
                // "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_PIN_HELPURL,
            "tooltip": Blockly.Msg.mpython_read_digital_TOOLTIP,
            "message0": Blockly.Msg.mpython_read_digital_MESSAGE0
        });
    }
};
Blockly.Python['mpython_read_digital'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // var allPin = block.getFieldValue('allPin');
    var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['set_PinMode_in_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.IN)';
    //Blockly.Python.definitions_['set_PinMode_in'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.IN)';
    var code = 'p' + allPin + '.read_digital()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};






/* DS18B20 防水温度传感器 */
Blockly.Blocks['mpython_read_ds18b20'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.General,
            "args0": [{
                "name": "allPin",
                "check": "Number",
                "type": "input_value"
                // "options": read_digital,
                // "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_read_DS18B20_TOOLTIP,
            "message0": Blockly.Msg.mpython_read_DS18B20_MESSAGE0
        });
    }
};









Blockly.Blocks['mpython_set_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.MPYTHON_PIN_HELPURL,
            "tooltip": Blockly.Msg.mpython_set_digital_TOOLTIP,
            "message0": Blockly.Msg.mpython_set_digital_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "num"
            }, {
                "name": "allPin",
                // "options": set_digital,
                // "type": "field_dropdown"
                "check": "Number",
                "type": "input_value"
            }]
        });
    }
};
Blockly.Python['mpython_set_digital'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    // var allPin = block.getFieldValue('allPin');
    var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['set_PinMode_out_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.OUT)';
    //Blockly.Python.definitions_['set_PinMode_out'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.OUT)';
    var code = 'p' + allPin + '.write_digital(' + num + ')\n';
    return code;
};





// 新的
//数字引脚，上下拉，输入/推挽输出/开漏输出
Blockly.Blocks['mpython_set_pin_mode'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.MPYTHON_SETS_PIN_MODE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SETS_PIN_MODE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SETS_PIN_MODE_MESSAGE0,
            "args0": [{
                "name": "allPin",
                "check": "Number",
                "type": "input_value"
                // "options": all_pin,
                // "type": "field_dropdown"
            }, {
                "name": "in_out",
                "options": [
                    [Blockly.Msg.MPYTHON_SET_PIN_IN, 'IN'],
                    [Blockly.Msg.MPYTHON_SET_PIN_PUSH_PULL_OUT, 'OUT'],
                    [Blockly.Msg.MPYTHON_SET_PIN_PWM, 'PWM'],
                    [Blockly.Msg.MPYTHON_SET_PIN_ANALOG, 'ANALOG'],
                    [Blockly.Msg.MPYTHON_SET_PIN_LEAKY_OUT, 'OUT_DRAIN']
                ],
                "type": "field_dropdown"
            }, {
                "name": "pin_up_down_pull",
                "options": [
                    [Blockly.Msg.MPYTHON_SET_PIN_NO_PULL, 'None'],
                    [Blockly.Msg.MPYTHON_SET_PIN_DOWN_PULL, 'Pin.PULL_DOWN'],
                    [Blockly.Msg.MPYTHON_SET_PIN_UP_PULL, 'Pin.PULL_UP']
                ],
                "type": "field_dropdown"
            }, {
                // "options":board_setting,
                "name": "pin_value",
                "check": "Number",
                "type": "input_value"
            }]
        });
    }
};

Blockly.Blocks['mpython_read_analog'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Pin,
            "args0": [
                // {
                // 	"name": "allPin",
                // 	"options": read_analog,
                // 	"type": "field_dropdown"
                // }
                {
                    "check": "Number",
                    "type": "input_value",
                    "name": "allPin"
                }
            ],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_PIN_HELPURL,
            "tooltip": Blockly.Msg.mpython_read_analog_TOOLTIP,
            "message0": Blockly.Msg.mpython_read_analog_MESSAGE0
        });
    }
};
Blockly.Blocks['mpython_set_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.MPYTHON_PIN_HELPURL,
            "tooltip": Blockly.Msg.mpython_set_analog_TOOLTIP,
            "message0": Blockly.Msg.mpython_set_analog_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "num"
            }, {
                "name": "allPin",
                // "options": set_analog,
                // 	"type": "field_dropdown"
                "check": "Number",
                "type": "input_value"
            }]
        });
    }
};


/* RGB 掌控板 */
Blockly.Python['mpython_rgb_list'] = function (block) {
    var code = block.getFieldValue('rgb_list');
    return [code, Blockly.Python.ORDER_ATOMIC];
}
/* RGB 掌控板 */
Blockly.Blocks['mpython_rgb_list'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": '',
            "tooltip": '',
            "message0": '%1',
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_RGB_ALL, '-1'],
                    [Blockly.Msg.MPYTHON_RGB_0, '0'],
                    [Blockly.Msg.MPYTHON_RGB_1, '1'],
                    [Blockly.Msg.MPYTHON_RGB_2, '2']
                ],
                "type": "field_dropdown",
                "name": "rgb_list"
            }]
        });
    }
};

/* RGB */
Blockly.Blocks['mpython_rgb_list_box'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": '',
            "tooltip": '',
            "message0": '%1',
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_RGB_ALL, '-1'],
                    [Blockly.Msg.MPYTHON_RGB_0, '0'],
                    [Blockly.Msg.MPYTHON_RGB_1, '1'],
                    [Blockly.Msg.MPYTHON_RGB_2, '2'],
                    [Blockly.Msg.MPYTHON_RGB_3, '3'],
                    [Blockly.Msg.MPYTHON_RGB_4, '4'],
                    [Blockly.Msg.MPYTHON_RGB_5, '5'],
                    [Blockly.Msg.MPYTHON_RGB_6, '6'],
                    [Blockly.Msg.MPYTHON_RGB_7, '7'],
                    [Blockly.Msg.MPYTHON_RGB_8, '8'],
                    [Blockly.Msg.MPYTHON_RGB_9, '9'],
                    [Blockly.Msg.MPYTHON_RGB_10, '10'],
                    [Blockly.Msg.MPYTHON_RGB_11, '11'],
                    [Blockly.Msg.MPYTHON_RGB_12, '12'],
                    [Blockly.Msg.MPYTHON_RGB_13, '13'],
                    [Blockly.Msg.MPYTHON_RGB_14, '14'],
                    [Blockly.Msg.MPYTHON_RGB_15, '15'],
                    [Blockly.Msg.MPYTHON_RGB_16, '16'],
                    [Blockly.Msg.MPYTHON_RGB_17, '17'],
                    [Blockly.Msg.MPYTHON_RGB_18, '18'],
                    [Blockly.Msg.MPYTHON_RGB_19, '19'],
                    [Blockly.Msg.MPYTHON_RGB_20, '20'],
                    [Blockly.Msg.MPYTHON_RGB_21, '21'],
                    [Blockly.Msg.MPYTHON_RGB_22, '22'],
                    [Blockly.Msg.MPYTHON_RGB_23, '23'],
                    [Blockly.Msg.MPYTHON_RGB_24, '24'],
                ],
                "type": "field_dropdown",
                "name": "rgb_list"
            }]
        });
    }
};

Blockly.Blocks['mpython_set_rgb_list_color'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.onboard_RGB,
            "helpUrl": Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_MESSAGE0,
            "args0": [{
                "name": "num",
                "check": "Number",
                "type": "input_value"
            }, {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ff0000"
            }]
        });
    }
};

Blockly.Blocks['mpython_set_rgb_list_number'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.onboard_RGB,
            "helpUrl": Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_MESSAGE0,
            "args0": [{
                "name": "num",
                "check": "Number",
                "type": "input_value"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "r"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "g"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "b"
            }]
        });
    }
};

Blockly.Blocks['mpython_off_rgb_list'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.onboard_RGB,
            "helpUrl": Blockly.Msg.MPYTHON_OFF_RGB_LIST_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_OFF_RGB_LIST_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_OFF_RGB_LIST_MESSAGE0,
            "args0": [{
                "name": "num",
                "check": "Number",
                "type": "input_value"
            }]
        });
    }
};

Blockly.Blocks['mpython_set_RGB_color'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_set_RGB_color_TOOLTIP,
            "message0": Blockly.Msg.mpython_set_RGB_color_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "num"
            }, {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ff0000"
            }]
        });
    }
};
Blockly.Blocks['mpython_set_RGB'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_set_RGB_TOOLTIP,
            "message0": Blockly.Msg.mpython_set_RGB_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "num"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "r"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "g"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "b"
            }]
        });
    }
};
Blockly.Blocks['mpython_set_RGB_color_all'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_set_RGB_color_all_TOOLTIP,
            "message0": Blockly.Msg.mpython_set_RGB_color_all_MESSAGE0,
            "args0": [{
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ff0000"
            }]
        });
    }
};
Blockly.Blocks['mpython_set_RGB_all'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_set_RGB_all_TOOLTIP,
            "message0": Blockly.Msg.mpython_set_RGB_all_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "r"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "g"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "b"
            }]
        });
    }
};
Blockly.Blocks['mpython_fresh_RGB'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_fresh_RGB_TOOLTIP,
            "message0": Blockly.Msg.mpython_fresh_RGB_MESSAGE0
        });
    }
};
Blockly.Blocks['mpython_off_RGB'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_off_RGB_TOOLTIP,
            "message0": Blockly.Msg.mpython_off_RGB_MESSAGE0
        });
    }
};

/* 蜂鸣器 */
Blockly.Blocks['mpython_buzz_state'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Music,
            "helpUrl": Blockly.Msg.MICROBIT_MUSIC_HELPURL,
            "tooltip": Blockly.Msg.mpython_buzz_state_TOOLTIP,
            "message0": Blockly.Msg.mpython_buzz_state_MESSAGE0
        });
    }
};
Blockly.Blocks['mpython_buzz_freq'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Music,
            "helpUrl": Blockly.Msg.MICROBIT_MUSIC_HELPURL,
            "tooltip": Blockly.Msg.mpython_buzz_freq_TOOLTIP,
            "message0": Blockly.Msg.mpython_buzz_freq_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "freq"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "pin"
            }]
        });
    }
};
Blockly.Blocks['mpython_buzz_tone'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Music,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_buzz_tone_TOOLTIP,
            "message0": Blockly.Msg.mpython_buzz_tone_MESSAGE0,
            "args0": [{
                "name": "buzz_tone",
                "options": buzz_tone,
                "type": "field_dropdown"
            }]
        });
    }
};

/* 声音光线 */
Blockly.Blocks['mpython_read_sound'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_read_sound_HELPURL,
            "tooltip": Blockly.Msg.mpython_read_sound_TOOLTIP,
            "message0": Blockly.Msg.mpython_read_sound_MESSAGE0,
        });
    }
};
Blockly.Blocks['mpython_read_light'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_read_light_HELPURL,
            "tooltip": Blockly.Msg.mpython_read_light_TOOLTIP,
            "message0": Blockly.Msg.mpython_read_light_MESSAGE0,
        });
    }
};

/* 加速度 */
Blockly.Blocks['mpython_accelerometer_get'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "axis",
                "options": axis,
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_accelerometer_get_HELPURL,
            "tooltip": Blockly.Msg.mpython_accelerometer_get_TOOLTIP,
            "message0": Blockly.Msg.mpython_accelerometer_get_MESSAGE0
        });
    }
};
/* 加速度 大小 */
Blockly.Blocks['mpython_accelerometer_sum'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "tooltip": 'math.sqrt(math.pow(accelerometer.get_x()*1000,2) + math.pow(accelerometer.get_y()*1000,2) + math.pow(accelerometer.get_z()*1000,2))',
            "message0": Blockly.Msg.mpython_accelerometer_SUM_MESSAGE0
        });
    }
};


Blockly.Blocks['mpython_accelerometer_get_x'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_accelerometer_get_HELPURL,
            "tooltip": Blockly.Msg.mpython_accelerometer_get_x_TOOLTIP,
            "message0": Blockly.Msg.mpython_accelerometer_get_x_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_accelerometer_get_y'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_accelerometer_get_HELPURL,
            "tooltip": Blockly.Msg.mpython_accelerometer_get_y_TOOLTIP,
            "message0": Blockly.Msg.mpython_accelerometer_get_y_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_accelerometer_get_z'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_accelerometer_get_HELPURL,
            "tooltip": Blockly.Msg.mpython_accelerometer_get_z_TOOLTIP,
            "message0": Blockly.Msg.mpython_accelerometer_get_z_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_accelerometer_set_range'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "range",
                "options": [
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_2G, 'RANGE_2G'],
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_4G, 'RANGE_4G'],
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_8G, 'RANGE_8G'],
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_16G, 'RANGE_16G']
                ],
                "type": "field_dropdown"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_accelerometer_set_resolution'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "resolution",
                "options": [
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RES_10_BIT, 'RES_10_BIT'],
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RES_12_BIT, 'RES_12_BIT'],
                    [Blockly.Msg.MPYTHON_ACCELEROMETER_RES_14_BIT, 'RES_14_BIT']
                ],
                "type": "field_dropdown"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_accelerometer_set_offset'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            //"inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "args0": [{
                "type": "input_dummy"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "x"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "y"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "z"
            },],
            "helpUrl": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_MESSAGE0,
        });
    }
};

// 2021.06.13 v2.3新增六轴陀螺仪
/* 角速度 */
Blockly.Blocks['mpython_gyroscope_get'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "axis",
                "options": axis,
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_gyroscope_get_HELPURL,
            "tooltip": Blockly.Msg.mpython_gyroscope_get_TOOLTIP,
            "message0": Blockly.Msg.mpython_gyroscope_get_MESSAGE0
        });
    }
};

// 陀螺仪
/* 角速度 */
Blockly.Python['mpython_gyroscope_get'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var ax = block.getFieldValue('axis');
    var code;
    switch (ax) {
        case "X":
            code = 'gyroscope.get_x()';
            break;
        case "Y":
            code = 'gyroscope.get_y()';
            break;
        case "Z":
            code = 'gyroscope.get_z()';
            break;
        default:
            return "";
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['mpython_gyroscope_set_range'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "range",
                "options": [
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_16_DPS, 'RANGE_16_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_32_DPS, 'RANGE_32_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_64_DPS, 'RANGE_64_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_128_DPS, 'RANGE_128_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_256_DPS, 'RANGE_256_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_512_DPS, 'RANGE_512_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_1024_DPS, 'RANGE_1024_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_2048_DPS, 'RANGE_2048_DPS']
                ],
                "type": "field_dropdown"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_gyroscope_set_offset'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "nextStatement": null,
            "previousStatement": null,
            "args0": [{
                "type": "input_dummy"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "x"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "y"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "z"
            },],
            "helpUrl": Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_MESSAGE0,
        });
    }
};

// 倾斜角
Blockly.Blocks['mpython_tilt_angle'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "axis",
                "options": axis,
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_TILT_ANGLE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TILT_ANGLE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_TILT_ANGLE_MESSAGE0
        });
    }
};

/* 随机项 */
Blockly.Blocks['mpython_random_choice'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_random_choice_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "list",
                "check": ["Array", "String"]
            }],
            //"output": "Number", "String",
            "output": "String",
            "colour": CategoryColors.Math,
            "tooltip": Blockly.Msg.mpython_random_choice_TOOLTIP,
            "helpUrl": Blockly.Msg.mpython_HELPURL
        });
    }
};

//  外部脉冲电平持续时间 %1
Blockly.Blocks['machine_time_pulse_us'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.MACHINE_TIME_PULSE_US_HELPURL,
            "tooltip": Blockly.Msg.MACHINE_TIME_PULSE_US_TOOLTIP,
            "message0": Blockly.Msg.MACHINE_TIME_PULSE_US_MESSAGE0,
            "args0": [{
                // options: all_pin,
                // "type": "field_dropdown",
                "check": "Number",
                "type": "input_value",
                "name": "pin"
            },
            //{
            //	options: [
            //		['HIGH', '1'],
            //		['LOW', '0'],
            //	],
            //	"type": "field_dropdown",
            //	"name": "pulse"
            //},
            {
                "check": "Number",
                "type": "input_value",
                "name": "pulse"
            }
            ]
        });
    }
};

Blockly.Blocks['mpython_print'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Text,
            "args0": [{
                "name": "CONTENT",
                "type": "input_value",
                "check": ["Number", "String"]
            }

            ],
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_print_TOOLTIP,
            "message0": Blockly.Msg.mpython_print_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_print_to_chart'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function () {
        //this.setHelpUrl(Blockly.Msg.mpython_HELPURL);
        this.setColour(CategoryColors.Math);
        this.itemCount_ = 1;
        this.updateShape_();
        //this.setOutput(true);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setMutator(new Blockly.Mutator(['mpython_print_to_chart_item']));
        this.setTooltip(Blockly.Msg.MPYTHON_PRINT_TO_CHART_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('mpython_print_to_chart_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('mpython_print_to_chart_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (let i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        if (this.itemCount_ > 4)
            this.itemCount_ = 4;
        this.updateShape_();
        // Reconnect any child blocks.
        for (let i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.setCheck("Number").appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_INPUT_WITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};
Blockly.Blocks['mpython_print_to_chart_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(CategoryColors.Math);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}

Blockly.Blocks['mpython_print_to_chart_container'] = {
    /**
     * Mutator block for list container.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(CategoryColors.Math);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// 初始化图表
Blockly.Blocks['mpython_init_chart'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function () {
        //this.setHelpUrl(Blockly.Msg.mpython_HELPURL);
        this.setColour(CategoryColors.Math);
        this.itemCount_ = 1;
        this.updateShape_();
        //this.setOutput(true);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setMutator(new Blockly.Mutator(['mpython_init_chart_item']));
        this.setTooltip(Blockly.Msg.MPYTHON_INIT_CHART_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('mpython_init_chart_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('mpython_init_chart_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (let i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        if (this.itemCount_ > 4)
            this.itemCount_ = 4;
        this.updateShape_();
        // Reconnect any child blocks.
        for (let i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.MPYTHON_INIT_CHART_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.setCheck("String").appendField(Blockly.Msg.MPYTHON_INIT_CHART_INPUT_WITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};
Blockly.Blocks['mpython_init_chart_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(CategoryColors.Math);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}

Blockly.Blocks['mpython_init_chart_container'] = {
    /**
     * Mutator block for list container.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(CategoryColors.Math);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// 通用红外接收
Blockly.Blocks['mpython_ir_remote_recv'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_MESSAGE0,
            "inputsInline": true,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "pin"
            }, {
                "type": "input_value",
                "name": "address"
            }, {
                "type": "input_value",
                "name": "command"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

// 通用红外发送
Blockly.Blocks['mpython_ir_remote_send'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_IR_REMOTE_SEND_MESSAGE0,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_IR_REMOTE_SEND_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_IR_REMOTE_SEND_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "pin"
            }, {
                "check": ["Number", "Array"],
                "type": "input_value",
                "name": "address"
            }, {
                "check": ["Number", "Array"],
                "type": "input_value",
                "name": "command"
            }]
        });
    }
};

//(实验箱)bme280 温湿度、气压
Blockly.Blocks['mpython_bme280'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.General,
            "args0": [{
                "name": "hum_tem_pre",
                "options": [
                    [Blockly.Msg.mpython_tem, 'temperature'],
                    [Blockly.Msg.mpython_hum, 'humidity'],
                    [Blockly.Msg.mpython_pre, 'pressure']
                ],
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP,
            "message0": "BME280" + Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython_bme280_hum_tem_pre'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Common,
            "args0": [{
                "name": "hum_tem_pre",
                "options": [
                    [Blockly.Msg.mpython_tem, 'temperature'],
                    [Blockly.Msg.mpython_hum, 'humidity'],
                    [Blockly.Msg.mpython_pre, 'pressure']
                ],
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP,
            "message0": Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0,
        });
    }
};

/* 掌控2.0 */
//磁力计 compass 改为 magnetic
//magnetic.calibrate() #校准
//magnetic.get_heading() # 获取方位角
//magnetic.get_x()/y/z
//magnetic.peeling() # 去除当前环境磁场强度
//magnetic.get_field_strength() #获取磁场强度

Blockly.Blocks['mpython_magnetic_calibrate'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_magnetic_peeling'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON_MAGNETIC_PEELING_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MAGNETIC_PEELING_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MAGNETIC_PEELING_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_magnetic_get_axis'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "name": "axis",
                "options": axis,
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_MESSAGE0
        });
    }
};
Blockly.Blocks['mpython_compass_get_axis'] = Blockly.Blocks['mpython_magnetic_get_axis'];

Blockly.Blocks['mpython_magnetic_get_heading'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_MESSAGE0
        });
    }
};
Blockly.Blocks['mpython_compass_get_angle'] = Blockly.Blocks['mpython_magnetic_get_heading'];

Blockly.Blocks['mpython_magnetic_get_field_strength'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython2_accelerometer_event'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_MESSAGE0,
            "inputsInline": true,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TOOLTIP,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_UP, "tilt_up"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_DOWN, "tilt_down"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_LEFT, "tilt_left"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_RIGHT, "tilt_right"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_UP, "face_up"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_DOWN, "face_down"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_SINGLE_CLICK, "single_click"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_DOUBLE_CLICK, "double_click"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FREEFALL, "freefall"]
                ],
                "type": "field_dropdown",
                "name": "ACTION"
            }]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython2_accelerometer_angle'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_ROLL_ANGLE, "roll"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_PITCH_ANGLE, "pitch"]
                ],
                "type": "field_dropdown",
                "name": "TYPE"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython_button_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [
                {
                    "options": [
                        ["A", "a"],
                        ["B", "b"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }, {
                    "options": [
                        [Blockly.Msg.isPressed, "is_pressed"],
                        [Blockly.Msg.was_pressed, "was_pressed"],
                        [Blockly.Msg.get_presses, "get_presses"]
                    ],
                    "type": "field_dropdown",
                    "name": "category"
                }
            ],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON_BUTTON_PRESSED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_BUTTON_PRESSED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_BUTTON_PRESSED_MESSAGE0,
        });
    }
};


Blockly.Blocks['mpython2_button_is_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["A", "a"],
                    ["B", "b"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_button_was_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["A", "a"],
                    ["B", "b"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_button_get_presses'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["A", "a"],
                    ["B", "b"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_button_event'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON2_BUTTON_EVENT_MESSAGE0,
            "inputsInline": true,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON2_BUTTON_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_BUTTON_EVENT_TOOLTIP,
            "args0": [{
                "options": [
                    ["A", "a"],
                    ["B", "b"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON2_BUTTON_EVENT_PRESSED, "pressed"],
                    [Blockly.Msg.MPYTHON2_BUTTON_EVENT_RELEASED, "released"]
                ],
                "type": "field_dropdown",
                "name": "ACTION"
            }
            ]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython2_touchpad_event'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_MESSAGE0,
            "inputsInline": true,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_TOOLTIP,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_PRESSED, "pressed"],
                    [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_RELEASED, "released"]
                ],
                "type": "field_dropdown",
                "name": "ACTION"
            }
            ]
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython2_touchpad_threshold'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": ('X' == SOFTWARE_KEY) ? CategoryColors.Event : CategoryColors.System,
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_MESSAGE0,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            },
            {
                "check": "Number",
                "type": "input_value",
                "name": "VALUE"
            }
            ]
        });
    }
};

Blockly.Blocks['mpython_touchpad_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "touchpad"
                }, {
                    "options": [
                        [Blockly.Msg.isPressed, "is_pressed"],
                        [Blockly.Msg.was_pressed, "was_pressed"],
                        [Blockly.Msg.get_presses, "get_presses"]
                    ],
                    "type": "field_dropdown",
                    "name": "category"
                }
            ],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON_TOUCHPAD_PRESSED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TOUCHPAD_PRESSED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_TOUCHPAD_PRESSED_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_touchpad_is_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_touchpad_was_pressed'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Boolean",
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_touchpad_get_presses'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython2_touchpad_value'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.System,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_MESSAGE0,
        });
    }
};



// 整数 %1 对应的 ASCII 字符
Blockly.Python['int_to_chr'] = function (block) {
    var _int = Blockly.Python.valueToCode(block, '_int', Blockly.Python.ORDER_ATOMIC);

    var code = `str(${_int})`
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// hcsr04 超声波(mm)
Blockly.Python['mpython_hcsr04_distance'] = function (block) {
    Blockly.Python.definitions_['from_hcsr04_import_HCSR04'] = 'from hcsr04 import HCSR04'
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var hcsr04_name = block.getFieldValue('hcsr04_name');
    var unit = block.getFieldValue('unit');

    var code = `${hcsr04_name}.distance_${unit}()`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// hcsr04 超声波(mm)
Blockly.Python['mpython_hcsr04_distance_mm'] = function (block) {
    Blockly.Python.definitions_['from_hcsr04_import_HCSR04'] = 'from hcsr04 import HCSR04'
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var hcsr04_name = block.getFieldValue('hcsr04_name');

    var code = `${hcsr04_name}.distance_mm()`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// pm2.5浓度
Blockly.Python['mpython_pm2_5_MIC'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_UART_Timer'] = 'from machine import UART,Timer';
    var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['mpython_pm2_5'] = 'uart=UART(1, baudrate=9600, rx=Pin.P' + rx + ', timeout=200)\n' +
        '_pm_data = [None, None, None, None, None, None, None, None, None]\n' +
        'def timer13_tick(_):\n' +
        '  global _pm_data\n' +
        '  try:\n' +
        '      if uart.any():\n' +
        '          d = uart.read(0x42)\n' +
        '          if d[0] == 0x42 and d[1] == 0x4d:\n' +
        '              _pm_data = [d[5], d[7], d[9], d[17], d[19], d[21], d[23], d[25], d[27]]\n' +
        '  except: pass\n' +
        '\n' +
        'tim13 = Timer(13)\n' +
        'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)';

    var unit = block.getFieldValue('unit');
    var code = unit;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 0.1升空气中直径在多少间的颗粒物个数
Blockly.Python['mpython_pm2_5_LitresAir'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_UART_Timer'] = 'from machine import UART,Timer';
    var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['mpython_pm2_5'] = 'uart=UART(1, baudrate=9600, rx=Pin.P' + rx + ', timeout=200)\n' +
        '_pm_data = [None, None, None, None, None, None, None, None, None]\n' +
        'def timer13_tick(_):\n' +
        '  global _pm_data\n' +
        '  try:\n' +
        '      if uart.any():\n' +
        '          d = uart.read(0x42)\n' +
        '          if d[0] == 0x42 and d[1] == 0x4d:\n' +
        '              _pm_data = [d[5], d[7], d[9], d[17], d[19], d[21], d[23], d[25], d[27]]\n' +
        '  except: pass\n' +
        '\n' +
        'tim13 = Timer(13)\n' +
        'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)';

    var unit = block.getFieldValue('unit');
    var code = unit;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// mac 地址
Blockly.Python['mpython_mac_address'] = function () {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    //Blockly.Python.definitions_['mac_address'] = 'mac_address = ubinascii.hexlify(machine.unique_id()).decode()';
    var code = 'ubinascii.hexlify(machine.unique_id()).decode().upper()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 解析 json 字符串 %1 返回对象';
Blockly.Python['mpython_ujson_loads'] = function (block) {
    Blockly.Python.definitions_['import_ujson'] = 'import ujson';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "ujson.loads(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_split'] = function (block) {
    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var split_data = Blockly.Python.valueToCode(block, 'split_data', Blockly.Python.ORDER_ATOMIC);

    var code = data + ".split(" + split_data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 解析 json 字符串 %1 返回对象';
Blockly.Python['mpython_ujson_loads_noU'] = function (block) {
    Blockly.Python.definitions_['import_json'] = 'import json';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "json.loads(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 换行符
Blockly.Python['line_break'] = function (block) {
    return ['\'\\n\'', Blockly.Python.ORDER_ATOMIC];
};


// 自定义代码
Blockly.Python['mpython_custom_code'] = function (block) {
    var custom_type = block.getFieldValue('custom_type');
    var custom_code = block.getFieldValue('custom_code');
    if ('topping' == custom_type) {
        Blockly.Python.definitions_['import_custom'] = custom_code;
        return '';
    } else {
        return custom_code + '\n';
    }
};

// %1 转 json 字符串';
Blockly.Python['mpython_ujson_dumps'] = function (block) {
    Blockly.Python.definitions_['import_ujson'] = 'import ujson';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "ujson.dumps(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// %1 转 json 字符串';
Blockly.Python['mpython_ujson_dumps_noU'] = function (block) {
    Blockly.Python.definitions_['import_json'] = 'import json';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "json.dumps(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 解码 base64 数据 %1 返回字节对象';
Blockly.Python['mpython_base64_to_data'] = function (block) {
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "ubinascii.a2b_base64(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 解码 base64 数据 %1 返回字节对象';
Blockly.Python['mpython_base64_to_data_noU'] = function (block) {
    Blockly.Python.definitions_['import_binascii'] = 'import binascii';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "binascii.a2b_base64(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// %1 以 base64 格式编码 返回字节对象';
Blockly.Python['mpython_data_to_base64'] = function (block) {
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "ubinascii.b2a_base64(" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// %1 以 base64 格式编码 返回字节对象';
Blockly.Python['mpython_data_to_base64_noU'] = function (block) {
    Blockly.Python.definitions_['import_binascii'] = 'import binascii';

    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = "binascii.b2a_base64(b" + data + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 十六进制字符串 %1 转 二进制 字节';
Blockly.Python['mpython_hex_to_bin_str'] = function (block) {
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

    var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

    var code = "ubinascii.unhexlify(" + convert_chr + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 十六进制字符串 %1 转 二进制 字节';
Blockly.Python['mpython_hex_to_bin_str_noU'] = function (block) {
    Blockly.Python.definitions_['import_binascii'] = 'import binascii';

    var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

    var code = "binascii.unhexlify(" + convert_chr + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 字符串 %1 转 十六进制 字节';
Blockly.Python['mpython_str_to_hex'] = function (block) {
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

    var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

    var code = "ubinascii.hexlify(" + convert_chr + ", ' ')";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 字符串 %1 转 十六进制 字节';
Blockly.Python['mpython_str_to_hex_noU'] = function (block) {
    Blockly.Python.definitions_['import_binascii'] = 'import binascii';

    var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

    var code = "binascii.hexlify(b" + convert_chr + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// ASCII 单字符 %1 转 整形';
Blockly.Python['mpython_chr_to_int'] = function (block) {
    var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

    var code = "ord(" + convert_chr + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 整形 %1 转 ASCII 单字符';
Blockly.Python['mpython_int_to_chr'] = function (block) {
    var convert_num = Blockly.Python.valueToCode(block, 'convert_num', Blockly.Python.ORDER_ATOMIC);

    var code = "chr(" + convert_num + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 10进制整数 %1 转化为 %2 字节';
Blockly.Python['mpython_ten_converted_to_bytes'] = function (block) {
    Blockly.Python.definitions_['import_struct'] = 'import struct';

    var convert_num = Blockly.Python.valueToCode(block, 'convert_num', Blockly.Python.ORDER_ATOMIC);
    var convert_choice = block.getFieldValue('convert_choice');

    var code = "struct.pack(" + convert_choice + ", " + convert_num + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// %1 字符串 %2 转化为10进制整数
Blockly.Python['mpython_convert_to_ten'] = function (block) {
    var convert_str = Blockly.Python.valueToCode(block, 'convert_str', Blockly.Python.ORDER_ATOMIC);
    var convert_choice = block.getFieldValue('convert_choice');

    var code = "int(" + convert_str + ", " + convert_choice + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 10进制整数 %1 转化为 %2
Blockly.Python['mpython_ten_convert_to'] = function (block) {
    var int_num = Blockly.Python.valueToCode(block, 'int_num', Blockly.Python.ORDER_ATOMIC);
    var ten_convert_to = block.getFieldValue('ten_convert_to');

    var code = ten_convert_to + '(' + int_num + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 数字值
Blockly.Python['mpython_high_low'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var high_low = block.getFieldValue('high_low');
    if (high_low < 2) {
        var code = high_low;
    }
    else {
        code = ''
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 波特率
Blockly.Python['mpython_baudrate'] = function (block) {
    var baudrate = block.getFieldValue('baudrate');
    var code = baudrate;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 速率(原名波特率)
Blockly.Python['mpython_new_baudrate'] = function (block) {
    var baudrate = block.getFieldValue('baudrate');
    var code = baudrate;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 子綫程
Blockly.Python['mpython_define_thread'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread = block.getFieldValue('THREAD');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.functions_['thread_' + thread] = 'def thread_' + thread + '():\n' + globals + branch;
    return '';
};

Blockly.Python['mpython_run_thread'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread = block.getFieldValue('THREAD');
    var code = '_thread.start_new_thread(thread_' + thread + ', ())\n';
    return code;
};

Blockly.Python['mpython_start_new_thread'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    // var thread_name = Blockly.Python.valueToCode(block, 'thread_name', Blockly.Python.ORDER_ATOMIC);
    var thread_name = block.getFieldValue('thread_name');

    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.functions_['thread_' + thread_name] = 'def thread_' + thread_name + '():\n' + globals + branch;

    var code = '_thread.start_new_thread(thread_' + thread_name + ', ())\n';
    return code;
};

// text内容是否为number
Blockly.Python['text_is_number'] = function (block) {
    var input_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
    var type = block.getFieldValue('TYPE');
    var code = input_text + type;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 线程锁对象 %1 请求锁
Blockly.Python['mpython_lock_object_acquire_lock'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread_lock_object = block.getFieldValue('thread_lock_object');
    Blockly.Python.definitions_['def_thread_lock_object'] = thread_lock_object + ' = _thread.allocate_lock()';

    var code = thread_lock_object + '.acquire()\n';
    return code;
};

// 格式化字符串 % 方式
Blockly.Python['text_format'] = function (block) {
    var format = Blockly.Python.valueToCode(block, 'FORMAT', Blockly.Python.ORDER_ATOMIC);
    var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
    var code = format + " % " + content;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 格式化字符串 format 方式
Blockly.Python['text_format2'] = function (block) {
    var format = Blockly.Python.valueToCode(block, 'FORMAT', Blockly.Python.ORDER_ATOMIC);
    var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
    var code = format + ".format" + content;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 字节 %1 转 字符串
Blockly.Python['mpython_bytes_decode'] = function (block) {
    var bytes_decode = Blockly.Python.valueToCode(block, 'bytes_decode', Blockly.Python.ORDER_ATOMIC);

    var code = `${bytes_decode}.decode('UTF-8','ignore')`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// text转字节
Blockly.Python['text_to_byte'] = function (block) {
    var input_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
    // if(typeof input_text == "string"){
    // var code = "bytes(" + input_text + ", 'utf-8')";
    // }else{
    // code = "bytes(" + input_text + ")";
    // }
    // alert(typeof input_text);

    // Blockly.Python.functions_['to_byte'] =
    // def to_byte(_input):\n' +
    //     if type(_input) == str:\n'+
    //         return bytes(_input, \'utf-8\')\n'+
    //     else:\n'+
    //         return bytes(_input)\n';

    var code = "bytes(" + input_text + ", 'utf-8')";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 非文本转字节
Blockly.Python['other_to_byte'] = function (block) {
    var input_var = Blockly.Python.valueToCode(block, 'input_var', Blockly.Python.ORDER_ATOMIC);
    var code = "bytes(" + input_var + ")";

    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 按位取反 ，~a
Blockly.Python['bit_inversion'] = function (block) {
    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = '~' + data;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/*try_except*/
Blockly.Python['mpython_try_except'] = function (block) {
    var tryCode = Blockly.Python.statementToCode(block, 'TRY') ||
        Blockly.Python.PASS;
    var exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT') ||
        Blockly.Python.PASS;
    return 'try:\n' + tryCode + 'except:\n' + exceptCode;
};

Blockly.Python['mpython_try_except_finally'] = function (block) {
    var tryCode = Blockly.Python.statementToCode(block, 'TRY') ||
        Blockly.Python.PASS;
    var exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT') ||
        Blockly.Python.PASS;
    var finallyCode = Blockly.Python.statementToCode(block, 'FINALLY') ||
        Blockly.Python.PASS;
    return 'try:\n' + tryCode + 'except:\n' + exceptCode + 'finally:\n' + finallyCode;
};
/*try_except*/

/*文本- 开始 */
// 附加文本
Blockly.Python['text_append_text'] = function (block) {
    var text_abc = Blockly.Python.valueToCode(block, 'text_abc', Blockly.Python.ORDER_ATOMIC);
    var append_text = Blockly.Python.valueToCode(block, 'append_text', Blockly.Python.ORDER_ATOMIC);
    var code = "str(" + text_abc + ")" + " + str(" + append_text + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 自定义代码
Blockly.Python['mpython_custom_code'] = function (block) {
    var custom_type = block.getFieldValue('custom_type');
    var custom_code = block.getFieldValue('custom_code');
    if ('topping' == custom_type) {
        Blockly.Python.definitions_['import_custom'] = custom_code;
        return '';
    } else {
        return custom_code + '\n';
    }
};

/*文本 - 结束 */

// 复位
Blockly.Python['mpython_machine_reset'] = function () {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    var code = 'machine.reset()\n';
    return code;
};

// 数学 - random.randrange
Blockly.Python['math_random_randrange'] = function (block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.functions_['random_seed'] = 'random.seed(time.ticks_cpu())';
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_random'] = 'import random';
    var start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
    // var stop1 = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);
    // var stop = parseInt(stop1) + parseInt(1);
    var stop = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);
    var step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
    var code = 'random.randrange(' + start + ', ' + stop + ', ' + step + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 数学 - 图形化角度
Blockly.Python['math_angle'] = function (block) {
    var code = block.getFieldValue('angle');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 数学 - 保留几位小数
Blockly.Python['math_keep_decimal'] = function (block) {
    var num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var place = Blockly.Python.valueToCode(block, 'PLACE', Blockly.Python.ORDER_ATOMIC);
    var code = 'round(' + num + ', ' + place + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
引用labplus-数学-映射
 */
//映射，放在数学目录
Blockly.Python['labplus_mapping'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var inputNum = Blockly.Python.valueToCode(block, 'inputNum', Blockly.Python.ORDER_ATOMIC);
    // var outputNum = Blockly.Python.valueToCode(block, 'outputNum', Blockly.Python.ORDER_ATOMIC);
    var bMin = Blockly.Python.valueToCode(block, 'bMin', Blockly.Python.ORDER_ATOMIC);
    var bMax = Blockly.Python.valueToCode(block, 'bMax', Blockly.Python.ORDER_ATOMIC);
    var cMin = Blockly.Python.valueToCode(block, 'cMin', Blockly.Python.ORDER_ATOMIC);
    var cMax = Blockly.Python.valueToCode(block, 'cMax', Blockly.Python.ORDER_ATOMIC);
    /*
    Blockly.Python.definitions_['labplus_mapping'] = 'def numberMap(inputNum,bMin,bMax,cMin,cMax):\n'+
    '    outputNum = 0\n'+
    '    outputNum =((cMax - cMin) / (bMax - bMin))*(inputNum - bMin)+cMin\n'+
    '    return outputNum\n';*/
    var code = '((' + cMax + ' - ' + cMin + ') / (' + bMax + ' - ' + bMin + ')) * (' + inputNum + ' - ' + bMin + ') + ' + cMin + ''
    // console.log(code)
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//定时器
Blockly.Python['mpython_Timer'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
    var period = Blockly.Python.valueToCode(block, 'period', Blockly.Python.ORDER_ATOMIC);
    var Timer_mode = block.getFieldValue('Timer_mode');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.definitions_['timer' + Num + '_tick'] = 'def timer' + Num + '_tick(_):\n' + globals + branch;
    Blockly.Python.definitions_['def_Timer' + Num] = 'tim' + Num + ' = Timer(' + Num + ')';
    var code = 'tim' + Num + '.init(period=' + period + ', mode=Timer.' + Timer_mode + ', callback=timer' + Num + '_tick)\n';
    return code;
};

// 定时器选项
Blockly.Python['mpython_timer_option'] = function (block) {
    var code = block.getFieldValue('Timer_num');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 自定义事件选项
Blockly.Python['mpython_event_option'] = Blockly.Python['mpython_timer_option'];

// 定时器- 当前计数值
Blockly.Python['mpython_Timer_value'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    //Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var Timer_num = Blockly.Python.valueToCode(block, 'Timer_num', Blockly.Python.ORDER_ATOMIC);

    var code = 'tim' + Timer_num + '.value()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//取消定时器的初始化。停止计时器，并禁用计时器外围设备
Blockly.Python['mpython_Timer_deinit'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    //Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var Timer_num = Blockly.Python.valueToCode(block, 'Timer_num', Blockly.Python.ORDER_ATOMIC);

    var code = 'tim' + Timer_num + '.deinit()\n';
    return code;
};

//中断-引脚
Blockly.Python['mpython_Interrupt_pin'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var Interrupt_pin = Blockly.Python.valueToCode(block, 'Interrupt_pin', Blockly.Python.ORDER_ATOMIC);
    // var Interrupt_pin = block.getFieldValue('Interrupt_pin');
    var action = block.getFieldValue('action');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    var irq = ("to_high" == action) ? "IRQ_RISING" : "IRQ_FALLING";
    Blockly.Python.definitions_['PinMode_IN' + Interrupt_pin] = 'p' + Interrupt_pin + ' = MPythonPin(' + Interrupt_pin + ', PinMode.IN)';
    Blockly.Python.definitions_['on_pin' + Interrupt_pin] =
        'def on_pin' + Interrupt_pin + '(_):\n' +
        '    if 0 == _.value():\n' +
        '        on_pin' + Interrupt_pin + '_to_low(_)\n' +
        '    else:\n' +
        '        on_pin' + Interrupt_pin + '_to_high(_)';
    Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_' + action] =
        'def on_pin' + Interrupt_pin + '_' + action + '(_):\n' + globals + branch;
    Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=Pin.' + irq + ', handler=on_pin' + Interrupt_pin + '_' + action + ')';
    if ("to_high" == action) {
        if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_low']) {
            Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
        } else {
            Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
        }
    } else {
        if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_high']) {
            Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
        } else {
            Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
        }
    }
    return '';
};










// 触摸检测器
Blockly.Python['mpython_touch_event'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var touchPad = block.getFieldValue('touchPad');
    var action = block.getFieldValue('action');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.definitions_['def_touch_status'] =
        '_status_p = _status_y = _status_t = _status_h = _status_o = _status_n = 0\n' +
        'def on_touchpad_P_pressed():pass\n' +
        'def on_touchpad_P_unpressed():pass\n' +
        'def on_touchpad_Y_pressed():pass\n' +
        'def on_touchpad_Y_unpressed():pass\n' +
        'def on_touchpad_T_pressed():pass\n' +
        'def on_touchpad_T_unpressed():pass\n' +
        'def on_touchpad_H_pressed():pass\n' +
        'def on_touchpad_H_unpressed():pass\n' +
        'def on_touchpad_O_pressed():pass\n' +
        'def on_touchpad_O_unpressed():pass\n' +
        'def on_touchpad_N_pressed():pass\n' +
        'def on_touchpad_N_unpressed():pass';
    Blockly.Python.definitions_['def_Timer12'] = 'tim12 = Timer(12)';
    Blockly.Python.definitions_['timer12_tick'] = 'def timer12_tick(_):\n' +
        '    global _status_p, _status_y, _status_t, _status_h, _status_o, _status_n\n' +
        '    try:\n' +
        '        touchPad_P.read();pass\n' +
        '    except:\n' +
        '        return\n' +
        '    if touchPad_P.read() < 400:\n' +
        '        if 1 != _status_p:_status_p = 1;on_touchpad_P_pressed()\n' +
        '    elif 0 != _status_p:_status_p = 0;on_touchpad_P_unpressed()\n' +
        '    if touchPad_Y.read() < 400:\n' +
        '        if 1 != _status_y:_status_y = 1;on_touchpad_Y_pressed()\n' +
        '    elif 0 != _status_y:_status_y = 0;on_touchpad_Y_unpressed()\n' +
        '    if touchPad_T.read() < 400:\n' +
        '        if 1 != _status_t:_status_t = 1;on_touchpad_T_pressed()\n' +
        '    elif 0 != _status_t:_status_t = 0;on_touchpad_T_unpressed()\n' +
        '    if touchPad_H.read() < 400:\n' +
        '        if 1 != _status_h:_status_h = 1;on_touchpad_H_pressed()\n' +
        '    elif 0 != _status_h:_status_h = 0;on_touchpad_H_unpressed()\n' +
        '    if touchPad_O.read() < 400:\n' +
        '        if 1 != _status_o:_status_o = 1;on_touchpad_O_pressed()\n' +
        '    elif 0 != _status_o:_status_o = 0;on_touchpad_O_unpressed()\n' +
        '    if touchPad_N.read() < 400:\n' +
        '        if 1 != _status_n:_status_n = 1;on_touchpad_N_pressed()\n' +
        '    elif 0 != _status_n:_status_n = 0;on_touchpad_N_unpressed()';
    Blockly.Python.definitions_['timer12_init'] = 'tim12.init(period=100, mode=Timer.PERIODIC, callback=timer12_tick)\n';
    Blockly.Python.definitions_['on_touchpad_' + touchPad + '_' + action] =
        'def on_touchpad_' + touchPad + '_' + action + '():\n' + globals + branch;
    return '';
};

// 自定义事件
Blockly.Python['mpython_custom_event'] = function (block) {
    /*
    var globals = block.workspace.variableList;
    for (let i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    let i = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def_event_' + i] = '_event_changed_' + i + ' = False';
    var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def_Timer' + i] = 'tim' + i + ' = Timer(' + i + ')';
    Blockly.Python.definitions_['timer' + i + '_tick'] = 'def timer' + i + '_tick(_):\n' +
        '    global _event_changed_' + i + '\n' +
        '    if ' + condition + ':\n' +
        '        if not _event_changed_' + i + ': _event_changed_' + i + ' = True; on_custom_event_' + i + '()\n' +
        '    else: _event_changed_' + i + ' = False';
    Blockly.Python.definitions_['on_custom_event_' + i] = 'def on_custom_event_' + i + '():\n' + globals + branch;
    return 'tim' + i + '.init(period=100, mode=Timer.PERIODIC, callback=timer' + i + '_tick)\n';
    */
    const variables = block.workspace.variableList;
    let globals = [];
    let i = 0;
    for (i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    i = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def_event_' + i] = '_event_changed_' + i + ' = False';
    let condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def_Timer' + i] = 'tim' + i + ' = Timer(' + i + ')';
    Blockly.Python.definitions_['timer' + i + '_tick'] = 'def timer' + i + '_tick(_):\n' +
        '    global _event_changed_' + i + '\n' +
        '    if ' + condition + ':\n' +
        '        if not _event_changed_' + i + ': _event_changed_' + i + ' = True; on_custom_event_' + i + '()\n' +
        '    else: _event_changed_' + i + ' = False';
    Blockly.Python.definitions_['on_custom_event_' + i] = 'def on_custom_event_' + i + '():\n' + globals + branch;
    return 'tim' + i + '.init(period=100, mode=Timer.PERIODIC, callback=timer' + i + '_tick)\n';
};

//播放范围频率
Blockly.Python['mpython_music_range_pitch'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_music'] = 'import music';
    var start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
    var end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);
    var step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
    var time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    if (pin == '6') {
        code = 'for freq in range(' + start + ', ' + end + ', ' + step + '):\n' +
            '    music.pitch(freq, ' + time + ')\n';
    } else {
        code = 'for freq in range(' + start + ', ' + end + ', ' + step + '):\n' +
            '    music.pitch(freq, ' + time + ', pin=Pin.P' + pin + ')\n';
    }

    return code;
};

//播放频率
Blockly.Python['mpython_music_pitch'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_music'] = 'import music';
    var tone_frequency = Blockly.Python.valueToCode(block, 'tone_frequency', Blockly.Python.ORDER_ATOMIC);
    var time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    if (pin == '6') {
        code = 'music.pitch(' + tone_frequency + ', ' + time + ')\n';
    } else {
        code = 'music.pitch(' + tone_frequency + ', ' + time + ', pin=Pin.P' + pin + ')\n';
    }

    return code;
};


//上电、reset后的系统计时
Blockly.Python['mpython_time_ticks'] = function (block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var time_ticks = block.getFieldValue('time_ticks');
    var code = 'time.' + time_ticks + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 摇晃 */
Blockly.Python['mpython_sway_xyz'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var direction_group = block.getFieldValue('direction_group');
    var code = 'button_' + direction_group + '.value() == 0';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_sleep_ms'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
    var ms_us = block.getFieldValue('ms_us');
    // var code = 'sleep_ms(' + value_duration + ')\n';
    switch (ms_us) {
        case 'ms':
        case 'us':
            return 'time.sleep_' + ms_us + '(' + value_duration + ')\n';
        case 's':
            return 'time.sleep(' + value_duration + ')\n';
        default:
            return '';
    }
};

Blockly.Python['mpython_sleep_ms_1956'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
    var ms_us = block.getFieldValue('ms_us');
    // var code = 'sleep_ms(' + value_duration + ')\n';
    switch (ms_us) {
        case 'ms':
            return 'time.sleep(' + (value_duration / 1000) + ')\n';
        case 'us':
            return 'time.sleep(' + (value_duration / 1000000) + ')\n';
        case 's':
            return 'time.sleep(' + value_duration + ')\n';
        default:
            return '';
    }
};

//运行时间差
Blockly.Python['mpython_time_difference'] = function (block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var time1 = Blockly.Python.valueToCode(block, 'time1', Blockly.Python.ORDER_ATOMIC);
    var time2 = Blockly.Python.valueToCode(block, 'time2', Blockly.Python.ORDER_ATOMIC);
    var code = 'time.ticks_diff(' + time1 + ', ' + time2 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//舵机
Blockly.Python['mpython_servo_angle0'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
    // var pwm_pin = block.getFieldValue('pwm_pin');
    var pwm_pin = Blockly.Python.valueToCode(block, 'pwm_pin', Blockly.Python.ORDER_ATOMIC);
    var servo_angle = Blockly.Python.valueToCode(block, 'servo_angle', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['Servo_define' + pwm_pin] = 'servo_' + pwm_pin + ' = Servo(' + pwm_pin + ', min_us=500, max_us=2500, actuation_range=180)'; //实例化
    var code = 'servo_' + pwm_pin + '.write_angle(' + servo_angle + ')\n';
    return code;
};

//舵机
Blockly.Python['mpython_servo_angle'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
    // var pwm_pin = block.getFieldValue('pwm_pin');
    var pwm_pin = Blockly.Python.valueToCode(block, 'pwm_pin', Blockly.Python.ORDER_ATOMIC);
    var min_us = Blockly.Python.valueToCode(block, 'min_us', Blockly.Python.ORDER_ATOMIC);
    var max_us = Blockly.Python.valueToCode(block, 'max_us', Blockly.Python.ORDER_ATOMIC);
    var actuation_range = Blockly.Python.valueToCode(block, 'actuation_range', Blockly.Python.ORDER_ATOMIC);
    var servo_angle = Blockly.Python.valueToCode(block, 'servo_angle', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['Servo_define' + pwm_pin] = 'servo_' + pwm_pin + ' = Servo(' + pwm_pin + ', min_us=' + min_us + ', max_us=' + max_us + ', actuation_range=' + actuation_range + ')'; //实例化
    var code = 'servo_' + pwm_pin + '.write_angle(' + servo_angle + ')\n';
    return code;
};

//dht11 温湿度
Blockly.Python['mpython_dh11_hum_tem'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_dht'] = 'import dht';
    // var dh11_hum_tem_pin = block.getFieldValue('dh11_hum_tem_pin');
    var dh11_hum_tem_pin = Blockly.Python.valueToCode(block, 'dh11_hum_tem_pin', Blockly.Python.ORDER_ATOMIC);
    var hum_tem = block.getFieldValue('hum_tem');
    Blockly.Python.definitions_['dh11_define'] = 'dht11 = dht.DHT11(Pin(Pin.P' + dh11_hum_tem_pin + '))';
    Blockly.Python.definitions_['def_Timer15'] = 'tim15 = Timer(15)';
    Blockly.Python.definitions_['timer15_tick'] = 'def timer15_tick(_):\n' +
        '    try: dht11.measure()\n' +
        '    except: pass\n';
    Blockly.Python.definitions_['timer15_init'] = 'tim15.init(period=1000, mode=Timer.PERIODIC, callback=timer15_tick)\n';
    var code = 'dht11.' + hum_tem + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//dht22 温湿度
Blockly.Python['mpython_dh22_hum_tem'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_dht'] = 'import dht';
    // var dh22_hum_tem_pin = block.getFieldValue('dh22_hum_tem_pin');
    var dh22_hum_tem_pin = Blockly.Python.valueToCode(block, 'dh22_hum_tem_pin', Blockly.Python.ORDER_ATOMIC);
    var hum_tem = block.getFieldValue('hum_tem');
    Blockly.Python.definitions_['dh22_define'] = 'dht22 = dht.DHT22(Pin(Pin.P' + dh22_hum_tem_pin + '))';
    Blockly.Python.definitions_['def_Timer15'] = 'tim15 = Timer(15)';
    Blockly.Python.definitions_['timer15_tick'] = 'def timer15_tick(_):\n' +
        '    try: dht22.measure()\n' +
        '    except: pass\n';
    Blockly.Python.definitions_['timer15_init'] = 'tim15.init(period=1000, mode=Timer.PERIODIC, callback=timer15_tick)\n';
    var code = 'dht22.' + hum_tem + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/*音符*/
Blockly.Python['mpython_music_note'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var gamut = block.getFieldValue('gamut');
    var num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
    var num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
    var code = "'" + gamut + num1 + ':' + num2 + "'";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 构建Clock对象
Blockly.Python['mpython_def_clock'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var clock_name = block.getFieldValue('clock_name');
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
    // Blockly.Python.functions_['def_clock'] = 'clock = UI.Clock(' + x + ', ' + y + ', ' +  radius + ')';
    Blockly.Python.functions_['def_clock' + clock_name] = clock_name + ' = Clock(oled, ' + x + ', ' + y + ', ' + radius + ')';
    var code = '';
    return code;
};
// 获取本地时间并设置模拟钟表时间
Blockly.Python['mpython_settime_clock'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var clock_name = block.getFieldValue('clock_name');
    var code = clock_name + '.settime()\n';
    return code;
};
// 绘制钟表 ,清除钟表
Blockly.Python['mpython_draw_clear_clock'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var draw_clear_clock = block.getFieldValue('draw_clear_clock');
    var clock_name = block.getFieldValue('clock_name');
    var code = clock_name + '.' + draw_clear_clock + '()\n';
    return code;
};

/* 按键开始 */
Blockly.Python['mpython_button_is_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dropdown_button = block.getFieldValue('button');
    let code = ''
    if (dropdown_button === 'A+B') {
        code = 'button_a.value() == 0 and button_b.value() == 0';
    } else {
        code = 'button_' + dropdown_button + '.value() == 0';
    }

    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_button_both_pressed'] = function () { //弃用
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    //var dropdown_button = block.getFieldValue('button');
    var code = 'button_a.value() == 0 and button_b.value() == 0';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_touchPad_value'] = function (block) { // 被触摸
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dropdown_touchPad = block.getFieldValue('touchPad');
    var code = 'touchPad_' + dropdown_touchPad + '.read() < 400';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_touchPad_value_num'] = function (block) { // 触摸值
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dropdown_touchPad = block.getFieldValue('touchPad');
    var code = 'touchPad_' + dropdown_touchPad + '.read()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
/* 按键结束 */



/* DS18B20 防水温度传感器 */
Blockly.Python['mpython_read_ds18b20'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_onewire'] = 'import onewire';
    Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
    var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
    /*
    Blockly.Python.definitions_['ds18x20_define'] = 'ow = onewire.OneWire(Pin(Pin.P'+ allPin + '))\n' +
    'ds = ds18x20.DS18X20(ow)\n' +
    'roms = ds.scan()\n' +
    '_ds18x20_value = 0\n';*/
    Blockly.Python.definitions_['ds18x20_list_define'] = '_ds18x20_list = []';
    Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
    /*
    Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
    '    global _ds18x20_value\n' +
    '    try:\n' +
    '        ds.convert_temp()\n' +
    '        for rom in roms: _ds18x20_value = ds.read_temp(rom);break\n' +
    '    except: pass\n';*/
    Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
        //	'    global _ds18x20_value_0, _ds18x20_value_1, _ds18x20_value_2, _ds18x20_value_3, _ds18x20_value_4, _ds18x20_value_6, _ds18x20_value_7, _ds18x20_value_8, _ds18x20_value_9, _ds18x20_value_10, _ds18x20_value_13, _ds18x20_value_14, _ds18x20_value_15, _ds18x20_value_16, _ds18x20_value_19, _ds18x20_value_20\n' +
        '    for p in _ds18x20_list:\n' +
        '        try:\n' +
        '            eval("ds_" + p + ".convert_temp()")\n' +
        '            for rom in eval("roms_" + p):\n' +
        '                t = eval("ds_" + p).read_temp(rom)\n' +
        //	'                eval("_ds18x20_value_" + p) = t\n' +
        '                eval("set_ds_value_" + p + "(" + str(t) + ")")\n' +
        '                break\n' +
        '        except: pass\n';
    Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)\n';
    Blockly.Python.functions_['set_ds_value_' + allPin] = 'def set_ds_value_' + allPin + '(_t):\n' +
        '    global _ds18x20_value_' + allPin + '\n' +
        '    _ds18x20_value_' + allPin + ' = _t\n';
    Blockly.Python.functions_['ds18x20_value' + allPin] = 'ow_' + allPin + ' = onewire.OneWire(Pin(Pin.P' + allPin + '))\n' +
        'ds_' + allPin + ' = ds18x20.DS18X20(ow_' + allPin + ')\n' +
        'roms_' + allPin + ' = ds_' + allPin + '.scan()\n' +
        '_ds18x20_value_' + allPin + ' = 0\n' +
        '_ds18x20_list.append(str(' + allPin + '))\n';
    /*
    Blockly.Python.functions_['get_ds18x20_value'] = 'def get_ds18x20_value():\n' +
    '    global _ds18x20_value\n' +
    '    return _ds18x20_value\n';*/

    var code = '_ds18x20_value_' + allPin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// 新的
// 数字引脚，上下拉，输入/推挽输出/开漏输出
Blockly.Python['mpython_set_pin_mode'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // var allPin = block.getFieldValue('allPin');
    var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
    var in_out = block.getFieldValue('in_out');
    var pin_up_down_pull = block.getFieldValue('pin_up_down_pull');
    var pin_value = Blockly.Python.valueToCode(block, 'pin_value', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['set_PinMode' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.' + in_out + ', ' + pin_up_down_pull + ')';
    if (in_out == 'IN' || in_out == 'OUT' || in_out == 'OUT_DRAIN') {
        if (pin_value != '') {
            var code = 'p' + allPin + '.write_digital(' + pin_value + ')\n';
        }
        else code = "\n"
    }
    else code = "\n"
    return code;
};

// type
Blockly.Python['mpython_type'] = function (block) {
    var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
    var code = 'type(' + VAR + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// type is
Blockly.Python['mpython_type_is'] = function (block) {
    var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
    var TYPE = block.getFieldValue('TYPE');
    var code = 'type(' + VAR + ') == ' + TYPE;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// eval
Blockly.Python['mpython_eval'] = function (block) {
    var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
    var code = 'eval(' + VAR + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// return
Blockly.Python['mpython_return'] = function (block) {
    var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
    var code = 'return ' + VAR + '\n';
    return code;
};

Blockly.Python['mpython_read_analog'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // var allPin = block.getFieldValue('allPin');
    var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC)
    Blockly.Python.definitions_['set_PinMode_in_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.ANALOG)';
    //Blockly.Python.definitions_['set_PinMode_in'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.ANALOG)';
    var code = 'p' + allPin + '.read_analog()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_set_analog'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    // var allPin = block.getFieldValue('allPin');
    var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['set_PinMode_out_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.PWM)';
    //Blockly.Python.definitions_['set_PinMode_out'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.PWM)';
    var code = 'p' + allPin + '.write_analog(' + num + ')\n';
    return code;
};

/* RGB */
Blockly.Python['mpython_rgb_list_box'] = function (block) {
    var code = block.getFieldValue('rgb_list');
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['mpython_set_rgb_list_color'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var color = block.getFieldValue('COLOUR');
    var r = 0;
    var g = 0;
    var b = 0;
    try {
        if (color.length == 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
        }
        // eslint-disable-next-line no-empty
    } catch (e) { }

    var code = '';
    switch (num) {
        case '0':
        case '1':
        case '2':
            // 原生亮度的 1/30，能较好显示色差，经测试
            // 再测试，发现 1/30有些颜色无法亮起来，所有取消了
            code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
                'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
        case '-1':
            code = 'rgb.fill((int(' + r + '), ' + 'int(' + g + '), ' + 'int(' + b + ')))\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
        default:
            code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
                'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
    }
};

Blockly.Python['mpython_set_rgb_list_number'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    let code = '';
    switch (num) {
        case '0':
        case '1':
        case '2':
            code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
                'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
        case '-1':
            code = 'rgb.fill( (int(' + r + '), ' + 'int(' + g + '), ' + 'int(' + b + ')) )\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
        default:
            code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
                'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
    }
};

Blockly.Python['mpython_off_rgb_list'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    switch (num) {
        case '0':
        case '1':
        case '2':
            code = 'rgb[' + num + '] = (0, 0, 0)\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
        case '-1':
            code = 'rgb.fill( (0, 0, 0) )\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
        default:
            code = 'rgb[' + num + '] = (0, 0, 0)\nrgb.write()\ntime.sleep_ms(1)\n';
            return code;
    }
};

Blockly.Python['mpython_set_RGB_color'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var color = block.getFieldValue('COLOUR');
    var r = 0;
    var g = 0;
    var b = 0;
    try {
        if (color.length == 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
        }
        // eslint-disable-next-line no-empty
    } catch (e) { }

    // 原生亮度的 1/30，能较好显示色差，经测试
    var code = 'rgb[' + num + '] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' +
        'int(' + b + '/30))\nrgb.write()\ntime.sleep_ms(1)\n';
    //var code = 'rgb[' + (num - 1) + '] = ('+ half_r + ', '  + half_g  + ', '  + half_g + ')\n';
    return code;
};

Blockly.Python['mpython_set_RGB_color_all'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    //var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var color = block.getFieldValue('COLOUR');
    var r = 0;
    var g = 0;
    var b = 0;
    try {
        if (color.length == 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
        }
        // eslint-disable-next-line no-empty
    } catch (e) { }

    var code = 'rgb[0] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
        'rgb[1] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
        'rgb[2] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
        'rgb.write()\ntime.sleep_ms(1)\n';
    return code;
};

Blockly.Python['mpython_set_RGB'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    var code = 'rgb[' + num + '] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\nrgb.write()\ntime.sleep_ms(1)\n';
    return code;
};

Blockly.Python['mpython_set_RGB_all'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    //var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    var code = 'rgb[0] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
        'rgb[1] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
        'rgb[2] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
        'rgb.write()\ntime.sleep_ms(1)\n';
    return code;
};

Blockly.Python['mpython_fresh_RGB'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    // eslint-disable-next-line no-unused-vars
    var code = 'rgb.write()\ntime.sleep_ms(1)\n';
    return ''; //code;
};
Blockly.Python['mpython_off_RGB'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_time'] = 'import time';
    // var code =
    // rgb[0] = (0,0,0)\n' +
    // rgb[1] = (0,0,0)\n' +
    // rgb[2] = (0,0,0)\n'  +
    // rgb.write()\n';
    var code = 'rgb.fill( (0, 0, 0) )\nrgb.write()\ntime.sleep_ms(1)\n';
    return code;
};

/* 蜂鸣器 */
Blockly.Python['mpython_buzz_state'] = function () {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_music'] = 'import music';
    //var open_close = block.getFieldValue('open_close');
    // var code = 'buzz.off()\n';
    var code = 'music.stop()\n';
    return code;
};

// 连续播放
Blockly.Python['mpython_buzz_freq'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_music'] = 'import music';
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    if (pin == '6') {
        code = `music.pitch(${freq})` + '\n';
    } else {
        code = `music.pitch(${freq}, -1, pin=Pin.P${pin})` + '\n';
    }

    // var code = `music.pitch(${freq}, -1, pin=Pin.P${pin})` + '\n';
    return code;
};

Blockly.Python['mpython_buzz_tone'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_music'] = 'import music';
    var buzz_tone = block.getFieldValue('buzz_tone');
    var code = 'music.pitch(' + buzz_tone + ')\n';
    return code;
};

// 播放音符  几几拍
Blockly.Python['mpython_music_tone_tempo'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_music'] = 'import music';
    var musical_note = Blockly.Python.valueToCode(block, 'musical_note', Blockly.Python.ORDER_ATOMIC);
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    // var music_tick = block.getFieldValue('music_tick');
    var code = '';
    if (pin == '6') {
        code = "music.play(" + musical_note + ")\n";
    } else {
        code = "music.play(" + musical_note + ', pin=Pin.P' + pin + ")\n";
    }
    // var code =
    //   "music.play(" + musical_note + ', pin=Pin.P' + pin + ")\n";
    return code;
};

/* 下拉音符对应频率 */
Blockly.Python['mpython_music_tone'] = function (block) {
    Blockly.Python.definitions_['import_music'] = 'import music';
    var code = block.getFieldValue('music_tone');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 下拉音符本身 */
Blockly.Python['mpython_music_musical_note'] = function (block) {
    Blockly.Python.definitions_['import_music'] = 'import music';
    var musical_note = block.getFieldValue('musical_note');
    var music_tick = block.getFieldValue('music_tick');
    var code = "'" + musical_note + ":" + music_tick + "'";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 4行 */
Blockly.Python['mpython_4_lines'] = function (block) {
    var code = block.getFieldValue('mpython_4_lines');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 下拉节拍 */
Blockly.Python['mpython_music_tick'] = function (block) {
    Blockly.Python.definitions_['import_music'] = 'import music';
    var code = block.getFieldValue('music_tick');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 声音光线 */
// eslint-disable-next-line no-unused-vars
Blockly.Python['mpython_read_sound'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'sound.read()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// eslint-disable-next-line no-unused-vars
Blockly.Python['mpython_read_light'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'light.read()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 加速度 */
Blockly.Python['mpython_accelerometer_get'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var ax = block.getFieldValue('axis');
    var code;
    switch (ax) {
        case "X":
            code = 'accelerometer.get_x()';
            break;
        case "Y":
            code = 'accelerometer.get_y()';
            break;
        case "Z":
            code = 'accelerometer.get_z()';
            break;
        default:
            return "";
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 加速度大小 */
Blockly.Python['mpython_accelerometer_sum'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'math.sqrt(math.pow(accelerometer.get_x()*1000,2) + math.pow(accelerometer.get_y()*1000,2) + math.pow(accelerometer.get_z()*1000,2))';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_get_x'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'accelerometer.get_x()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_get_y'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'accelerometer.get_y()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_get_z'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'accelerometer.get_z()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_set_range'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var range = block.getFieldValue('range');
    var code = 'accelerometer.set_range(accelerometer.' + range + ')\n';
    return code;
};

Blockly.Python['mpython_accelerometer_set_resolution'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var resolution = block.getFieldValue('resolution');
    var code = 'accelerometer.set_resolution(accelerometer.' + resolution + ')\n';
    return code;
};

Blockly.Python['mpython_accelerometer_set_offset'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
    var code = 'accelerometer.set_offset(' + x + ', ' + y + ', ' + z + ')\n';
    return code;
};

Blockly.Python['mpython_tilt_angle'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_math'] = 'import math';
    var ax = block.getFieldValue('axis');
    Blockly.Python.functions_['get_tilt_angle'] = 'def get_tilt_angle(_axis):\n' +
        '    _Ax = accelerometer.get_x()\n' +
        '    _Ay = accelerometer.get_y()\n' +
        '    _Az = accelerometer.get_z()\n' +
        '    if \'X\' == _axis:\n' +
        '        _T = math.sqrt(_Ay ** 2 + _Az ** 2)\n' +
        '        if _Az < 0: return math.degrees(math.atan2(_Ax , _T))\n' +
        '        else: return 180 - math.degrees(math.atan2(_Ax , _T))\n' +
        '    elif \'Y\' == _axis:\n' +
        '        _T = math.sqrt(_Ax ** 2 + _Az ** 2)\n' +
        '        if _Az < 0: return math.degrees(math.atan2(_Ay , _T))\n' +
        '        else: return 180 - math.degrees(math.atan2(_Ay , _T))\n' +
        '    elif \'Z\' == _axis:\n' +
        '        _T = math.sqrt(_Ax ** 2 + _Ay ** 2)\n' +
        '        if (_Ax + _Ay) < 0: return 180 - math.degrees(math.atan2(_T , _Az))\n' +
        '        else: return math.degrees(math.atan2(_T , _Az)) - 180\n' +
        '    return 0';
    var code;
    switch (ax) {
        case "X":
            code = 'get_tilt_angle(\'X\')';
            break;
        case "Y":
            code = 'get_tilt_angle(\'Y\')';
            break;
        case "Z":
            code = 'get_tilt_angle(\'Z\')';
            break;
        default:
            code = "0";
            break;
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 陀螺仪 */
Blockly.Python['mpython_gyroscope_set_range'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var range = block.getFieldValue('range');
    var code = 'gyroscope.set_range(gyroscope.' + range + ')\n';
    return code;
};

Blockly.Python['mpython_gyroscope_set_offset'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
    var code = 'gyroscope.set_offset(' + x + ', ' + y + ', ' + z + ')\n';
    return code;
};

/* 随机项 */
Blockly.Python['mpython_random_choice'] = function (block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.functions_['random_seed'] = 'random.seed(time.ticks_cpu())';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_random'] = 'import random';
    var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
    var code = 'str(random.choice(' + list + '))';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 外部脉冲电平持续时间 %1
Blockly.Python['machine_time_pulse_us'] = function (block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    // var pin = block.getFieldValue('pin');
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var pulse = Blockly.Python.valueToCode(block, 'pulse', Blockly.Python.ORDER_ATOMIC);
    //var pulse = block.getFieldValue('pulse');
    // var overtime = Blockly.Python.valueToCode(block, 'overtime', Blockly.Python.ORDER_ATOMIC);

    var code = `machine.time_pulse_us(Pin(Pin.P${pin}), ${pulse}, 1000000)`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_print'] = function (block) {
    var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
    var code = 'print(' + content + ')\n';
    return code;
};

Blockly.Python['mpython_print_to_chart'] = function (block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
            Blockly.Python.ORDER_NONE) || 'None';
    }
    var code;
    if (block.itemCount_ == 1) {
        code = 'print((' + elements[0] + ',))\n';
    } else {
        code = 'print((' + elements.join(', ') + '))\n';
    }
    return code;
};

Blockly.Python['mpython_init_chart'] = function (block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var elements = new Array(block.itemCount_ + 1);
    elements[0] = "'__TITLE'";
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i + 1] = Blockly.Python.valueToCode(block, 'ADD' + i,
            Blockly.Python.ORDER_NONE) || 'None';
    }
    var code = 'time.sleep_ms(50);print((' + elements.join(', ') + '));time.sleep_ms(50)\n';
    return code;
};

// 通用红外接收
Blockly.Python['mpython_ir_remote_recv'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_ir_remote_recv'] = 'from ir_remote import IRDecode';
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['define_ir_remote_recv'] = 'remote = IRDecode(Pin.P' + pin + ')';
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    try {
        globals.remove('_address');
        // eslint-disable-next-line no-empty
    } catch (e) { }
    try {
        globals.remove('_command');
        // eslint-disable-next-line no-empty
    } catch (e) { }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';

    var doCode = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
    Blockly.Python.functions_['def_ir_remote_recv'] = 'def remote_callback(_address, _command):\n' + globals + doCode;

    var code = 'remote.set_callback(remote_callback)\n';
    return code;
}

// 通用红外发送
Blockly.Python['mpython_ir_remote_send'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_ir_remote_send'] = 'from ir_remote import IRTransmit';
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['define_ir_remote_send'] = 'ir = IRTransmit(Pin.P' + pin + ')';
    var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
    var command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
    var code = 'ir.send(' + address + ', ' + command + ')\n';
    return code;
}

// (实验箱)bme280 温湿度、气压
Blockly.Python['mpython_bme280_hum_tem_pre'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var hum_tem_pre = block.getFieldValue('hum_tem_pre');
    var code = 'bme280.' + hum_tem_pre + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_bme280'] = Blockly.Python['mpython_bme280_hum_tem_pre'];

/* 掌控2.0 */
//磁力计 compass 改为 magnetic

//magnetic.calibrate() #校准
Blockly.Python['mpython_magnetic_calibrate'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    return 'magnetic.calibrate()\n';
};

//magnetic.get_x()/y/z
Blockly.Python['mpython_magnetic_get_axis'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var ax = block.getFieldValue('axis');
    var code;
    switch (ax) {
        case "X":
            code = 'magnetic.get_x()';
            break;
        case "Y":
            code = 'magnetic.get_y()';
            break;
        case "Z":
            code = 'magnetic.get_z()';
            break;
        default:
            return "";
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_compass_get_axis'] = Blockly.Python['mpython_magnetic_get_axis'];

//magnetic.get_heading() # 获取方位角
Blockly.Python['mpython_magnetic_get_heading'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'magnetic.get_heading()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_compass_get_angle'] = Blockly.Python['mpython_magnetic_get_heading'];

//magnetic.peeling() # 去除当前环境磁场强度
Blockly.Python['mpython_magnetic_peeling'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    return 'magnetic.peeling()\n';
};

//magnetic.get_field_strength() #获取磁场强度
Blockly.Python['mpython_magnetic_get_field_strength'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var code = 'magnetic.get_field_strength()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};





// MLX90615 设置
Blockly.Blocks['mpython_MLX90615_set'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":'Boolean',
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_MLX90615_SET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MLX90615_SET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MLX90615_SET_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "set"
            }]
        });
    }
};
// MLX90615 设置
Blockly.Python['mpython_MLX90615_set'] = function (block) {
    Blockly.Python.definitions_['import_MLX90615'] = 'from MLX90615 import *';
    var set = Blockly.Python.valueToCode(block, 'set', Blockly.Python.ORDER_ATOMIC);
    var code = 'irTemp.set_emissivity(' + set + ')\n';
    return code;
};






// MLX90615 获取红外测温修正系数
Blockly.Blocks['mpython_MLX90615_get'] = {
    init: function () {
        this.jsonInit({
            // "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_MLX90615_GET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MLX90615_GET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MLX90615_GET_MESSAGE0,
        });
    }
};
// MLX90615 获取红外测温修正系数
Blockly.Python['mpython_MLX90615_get'] = function () {
    Blockly.Python.definitions_['import_MLX90615'] = 'from MLX90615 import *';
    var code = 'irTemp.get_emissivity()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};






// MLX90615 获取红外测温
Blockly.Blocks['mpython_MLX90615_thermometry'] = {
    init: function () {
        this.jsonInit({
            // "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_MESSAGE0,
        });
    }
};
// MLX90615 获取红外测温
Blockly.Python['mpython_MLX90615_thermometry'] = function () {
    Blockly.Python.definitions_['import_MLX90615'] = 'from MLX90615 import *';
    var code = 'irTemp.get_obj_temp()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};










// 获取索引
Blockly.Blocks['mpython_list_index'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Math,
            "message0": Blockly.Msg.MPYTHON_LIST_INDEX_MESSAGE0,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "variables1"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "variables2"
            }]
        });
    }
};
Blockly.Python['mpython_list_index'] = function (block) {
    var variables1 = Blockly.Python.valueToCode(block, 'variables1', Blockly.Python.ORDER_ATOMIC);
    var variables2 = Blockly.Python.valueToCode(block, 'variables2', Blockly.Python.ORDER_ATOMIC);
    var code = '' + variables1 + '.index(' + variables2 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};









// 数字转bytes（struct.pack）
Blockly.Blocks['number_to_bytes'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": '',
            "tooltip": '',
            "message0": Blockly.Msg.NUMBER_TO_BYTES_MESSAGE0,
            "args0": [{
                "type": "input_dummy"
            },
            {
                "options": [
                    [Blockly.Msg.LITTLE_ENDIAN, "<"], // Little-Endian (Default)
                    [Blockly.Msg.BIG_ENDIAN, ">"] // Big-Endian
                ],
                "type": "field_dropdown",
                "name": "ORDER"
            },
            {
                "options": [
                    ['signed char (1 byte)', "b"],
                    ['unsigned char (1 byte)', "B"],
                    ['short (2 bytes)', "h"],
                    ['unsigned short (2 bytes)', "H"],
                    ['int (4 bytes)', "i"],
                    ['unsigned int (4 bytes)', "I"],
                    ['long long (8 bytes)', "q"],
                    ['unsigned long long (8 bytes)', "Q"],
                    ['float (4 bytes)', "f"],
                    ['double (8 bytes)', "d"]
                ],
                "type": "field_dropdown",
                "name": "TYPE"
            },
            {
                "type": "input_dummy"
            },
            {
                "align": "RIGHT",
                "check": "Number",
                "type": "input_value",
                "name": "NUMBER"
            }
            ]
        });
    }
};
Blockly.Python['number_to_bytes'] = function (block) {
    Blockly.Python.definitions_['import_struct'] = 'import struct';
    var order = block.getFieldValue('ORDER');
    var type = block.getFieldValue('TYPE');
    var number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_NONE);
    switch (type) {
        case 'f':
        case 'd':
            number = 'float(' + number + ')';
            break;
        default:
            number = 'int(' + number + ')';
            break;
    }
    var code = 'struct.pack("' + order + type + '", ' + number + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};










// bytes转数字（struct.unpack）
Blockly.Blocks['bytes_to_number'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "output": null,
            "colour": CategoryColors.Math,
            "helpUrl": '',
            "tooltip": '',
            "message0": Blockly.Msg.BYTES_TO_NUMBER_MESSAGE0,
            "args0": [{
                "type": "input_dummy"
            },
            {
                "options": [
                    [Blockly.Msg.LITTLE_ENDIAN, "<"], // Little-Endian (Default)
                    [Blockly.Msg.BIG_ENDIAN, ">"] // Big-Endian
                ],
                "type": "field_dropdown",
                "name": "ORDER"
            },
            {
                "options": [
                    ['signed char (1 byte)', "b"],
                    ['unsigned char (1 byte)', "B"],
                    ['short (2 bytes)', "h"],
                    ['unsigned short (2 bytes)', "H"],
                    ['int (4 bytes)', "i"],
                    ['unsigned int (4 bytes)', "I"],
                    ['long long (8 bytes)', "q"],
                    ['unsigned long long (8 bytes)', "Q"],
                    ['float (4 bytes)', "f"],
                    ['double (8 bytes)', "d"]
                ],
                "type": "field_dropdown",
                "name": "TYPE"
            },
            {
                "type": "input_dummy"
            },
            {
                "align": "RIGHT",
                "check": "Array",
                "type": "input_value",
                "name": "DATA"
            }
            ]
        });
    }
};
Blockly.Python['bytes_to_number'] = function (block) {
    Blockly.Python.definitions_['import_struct'] = 'import struct';
    var order = block.getFieldValue('ORDER');
    var type = block.getFieldValue('TYPE');
    var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE);
    var code = 'struct.unpack("' + order + type + '", ' + data + ')[0]';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['mpython2_accelerometer_event'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var action = block.getFieldValue('ACTION');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_' + action] =
        'def on_' + action + '(_):\n' + globals + branch;

    Blockly.Python.definitions_['define_event_' + action] = 'accelerometer.event_' + action + ' = on_' + action;

    return '';
};

Blockly.Python['mpython2_accelerometer_angle'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var type = block.getFieldValue('TYPE');
    var code = '';
    if (type == 'roll') {
        code = 'accelerometer.roll_pitch_angle()[0]';
    } else {
        code = 'accelerometer.roll_pitch_angle()[1]';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_button_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var category = block.getFieldValue('category');
    var code = 'button_' + button + '.' + category + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_is_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'button_' + button + '.is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_was_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'button_' + button + '.was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_get_presses'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'button_' + button + '.get_presses()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_event'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_button_' + button + '_' + action] =
        'def on_button_' + button + '_' + action + '(_):\n' + globals + branch;

    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'button_' + button + '.event_' + action + ' = on_button_' + button + '_' + action;

    return '';
};

Blockly.Python['mpython_touchpad_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var touchpad = block.getFieldValue('touchpad');
    var category = block.getFieldValue('category');
    var code = 'touchpad_' + touchpad + '.' + category + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_is_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_was_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_get_presses'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.get_presses()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_value'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.read()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_event'] = function (block) {
    var globals = block.workspace.variableList;
    for (var i = globals.length - 1; i >= 0; i--) {
        var varName = globals[i];
        globals[i] = Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE);
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_touchpad_' + button + '_' + action] =
        'def on_touchpad_' + button + '_' + action + '(_):\n' + globals + branch;

    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'touchpad_' + button + '.event_' + action + ' = on_touchpad_' + button + '_' + action;

    return '';
};

Blockly.Python['mpython2_touchpad_threshold'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = 'touchpad_' + button + '.config(' + value + ')\n';
    return code;
};


// 2021.06.23 事件类block改写
Blockly.Blocks['mpython3_define_thread'] = {
    init: function () {
        this.jsonInit({
            //"inputsInline": true,
            "nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": '',
            "tooltip": '',
            "message0": Blockly.Msg.MPYTHON_DEFINE_THREAD_MESSAGE0,
            "args0": [{
                "options": [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4']
                ],
                "type": "field_dropdown",
                "name": "THREAD"
            }]
        });
    }
};

Blockly.Python['mpython3_define_thread'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread = block.getFieldValue('THREAD');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.functions_['thread_' + thread] = 'def thread_' + thread + '():\n' + globals + branch;
    return null;
};


Blockly.Blocks['mpython_timer_def'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_TIMER_DEF_MESSAGE0,
            "nextStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.mpython_Timer_HELPURL,
            "tooltip": Blockly.Msg.mpython_Timer_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "Num"
            }]
        });
    }
};

Blockly.Python['mpython_timer_def'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['timer' + Num + '_tick'] = 'def timer' + Num + '_tick(_):\n' + globals + branch;
    Blockly.Python.definitions_['def_Timer' + Num] = 'tim' + Num + ' = Timer(' + Num + ')';
    return null;
};


Blockly.Blocks['mpython_timer_init'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_TIMER_INIT_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.mpython_Timer_HELPURL,
            "tooltip": Blockly.Msg.mpython_Timer_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "Num"
            }, {
                "options": [
                    [Blockly.Msg.mpython_PERIODIC, 'PERIODIC'],
                    [Blockly.Msg.mpython_ONE_SHOT, 'ONE_SHOT']
                ],
                "type": "field_dropdown",
                "name": "Timer_mode"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "period"
            }]
        });
    }
};

Blockly.Python['mpython_timer_init'] = function (block) {
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
    var period = Blockly.Python.valueToCode(block, 'period', Blockly.Python.ORDER_ATOMIC);
    var Timer_mode = block.getFieldValue('Timer_mode');
    var code = 'tim' + Num + '.init(period=' + period + ', mode=Timer.' + Timer_mode + ', callback=timer' + Num + '_tick)\n';
    return code;
};


Blockly.Blocks['mpython3_interrupt_pin'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_Interrupt_pin_MESSAGE0,
            "nextStatement": null,
            // "previousStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.mpython_Interrupt_pin_HELPURL,
            "tooltip": Blockly.Msg.mpython_Interrupt_pin_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "Interrupt_pin"
            }, {
                "options": [
                    [Blockly.Msg.mpython_Interrupt_pin_IRQ_RISING, "to_high"],
                    [Blockly.Msg.mpython_Interrupt_pin_IRQ_FALLING, "to_low"]
                ],
                "type": "field_dropdown",
                "name": "action"
            }]
        });
    }
};

Blockly.Python['mpython3_interrupt_pin'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var Interrupt_pin = Blockly.Python.valueToCode(block, 'Interrupt_pin', Blockly.Python.ORDER_ATOMIC);
    var action = block.getFieldValue('action');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    var irq = ("to_high" == action) ? "IRQ_RISING" : "IRQ_FALLING";
    Blockly.Python.definitions_['PinMode_IN' + Interrupt_pin] = 'p' + Interrupt_pin + ' = MPythonPin(' + Interrupt_pin + ', PinMode.IN)';
    Blockly.Python.definitions_['on_pin' + Interrupt_pin] =
        'def on_pin' + Interrupt_pin + '(_):\n' +
        '    if 0 == _.value():\n' +
        '        on_pin' + Interrupt_pin + '_to_low(_)\n' +
        '    else:\n' +
        '        on_pin' + Interrupt_pin + '_to_high(_)';
    Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_' + action] =
        'def on_pin' + Interrupt_pin + '_' + action + '(_):\n' + globals + branch;
    Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=Pin.' + irq + ', handler=on_pin' + Interrupt_pin + '_' + action + ')';
    if ("to_high" == action) {
        if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_low']) {
            Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
        } else {
            Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
        }
    } else {
        if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_high']) {
            Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
        } else {
            Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
        }
    }
    return null;
};


Blockly.Blocks['mpython3_shake_detector'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "message0": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_MESSAGE0,
            "nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_TOOLTIP,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_IS_SHAKED, "shaked"],
                    [Blockly.Msg.MPYTHON_IS_THROWN, "thrown"]
                ],
                "type": "field_dropdown",
                "name": "action"
            }]
        });
    }
};

Blockly.Python['mpython3_shake_detector'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['def_shake_variable'] = '_is_shaked = _is_thrown = False\n' +
        '_last_x = _last_y = _last_z = _count_shaked = _count_thrown = 0\n' +
        'def on_shaked():pass\ndef on_thrown():pass\n';
    Blockly.Python.definitions_['def_Timer11'] = 'tim11 = Timer(11)';
    Blockly.Python.definitions_['timer11_tick'] = 'def timer11_tick(_):\n' +
        '    global _is_shaked, _is_thrown, _last_x, _last_y, _last_z, _count_shaked, _count_thrown\n' +
        '    if _is_shaked:\n' +
        '        _count_shaked += 1\n' +
        '        if _count_shaked == 5: _count_shaked = 0\n' +
        '    if _is_thrown:\n' +
        '        _count_thrown += 1\n' +
        '        if _count_thrown == 10: _count_thrown = 0\n' +
        '        if _count_thrown > 0: return\n' +
        '    x=accelerometer.get_x(); y=accelerometer.get_y(); z=accelerometer.get_z()\n' +
        '    _is_thrown = (x * x + y * y + z * z < 0.25)\n' +
        '    if _is_thrown: on_thrown();return\n' +
        '    if _last_x == 0 and _last_y == 0 and _last_z == 0:\n' +
        '        _last_x = x; _last_y = y; _last_z = z; return\n' +
        '    diff_x = x - _last_x; diff_y = y - _last_y; diff_z = z - _last_z\n' +
        '    _last_x = x; _last_y = y; _last_z = z\n' +
        '    if _count_shaked > 0: return\n' +
        '    _is_shaked = (diff_x * diff_x + diff_y * diff_y + diff_z * diff_z > 1)\n' +
        '    if _is_shaked: on_shaked()\n';
    Blockly.Python.definitions_['timer11_init'] = 'tim11.init(period=100, mode=Timer.PERIODIC, callback=timer11_tick)\n';
    var action = block.getFieldValue('action');
    if ('thrown' == action) {
        Blockly.Python.definitions_['on_thrown_event'] = 'def on_thrown():\n' + globals + branch;
    } else {
        Blockly.Python.definitions_['on_shaked_event'] = 'def on_shaked():\n' + globals + branch;
    }
    return null;
};


Blockly.Blocks['mpython3_tilt_detector'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "message0": Blockly.Msg.MPYTHON_TILT_DETECTOR_MESSAGE0,
            "nextStatement": null,
            //"previousStatement": null,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.MPYTHON_TILT_DETECTOR_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_TILT_DETECTOR_TOOLTIP,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON_DIRECTION_FORWARD, 'forward'],
                    [Blockly.Msg.MPYTHON_DIRECTION_BACK, 'back'],
                    [Blockly.Msg.MPYTHON_DIRECTION_LEFT, 'left'],
                    [Blockly.Msg.MPYTHON_DIRECTION_RIGHT, 'right'],
                    [Blockly.Msg.MPYTHON_DIRECTION_NONE, 'none']
                ],
                "type": "field_dropdown",
                "name": "direction"
            }]
        });
    }
};

Blockly.Python['mpython3_tilt_detector'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var direction = block.getFieldValue('direction');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['def_dir'] = '_dir = \'\'\n' +
        'def on_tilt_forward():pass\n' +
        'def on_tilt_back():pass\n' +
        'def on_tilt_right():pass\n' +
        'def on_tilt_left():pass\n' +
        'def on_tilt_none():pass\n';
    Blockly.Python.definitions_['def_Timer14'] = 'tim14 = Timer(14)';
    Blockly.Python.definitions_['timer14_tick'] = 'def timer14_tick(_):\n' +
        "    global _dir\n" +
        "    if accelerometer.get_x() < -0.3:\n" +
        "        if 'F' != _dir:_dir = 'F';on_tilt_forward()\n" +
        "    elif accelerometer.get_x() > 0.3:\n" +
        "        if 'B' != _dir:_dir = 'B';on_tilt_back()\n" +
        "    elif accelerometer.get_y() < -0.3:\n" +
        "        if 'R' != _dir:_dir = 'R';on_tilt_right()\n" +
        "    elif accelerometer.get_y() > 0.3:\n" +
        "        if 'L' != _dir:_dir = 'L';on_tilt_left()\n" +
        "    else:\n" +
        "        if '' != _dir:_dir = '';on_tilt_none()\n";
    Blockly.Python.definitions_['timer14_init'] = 'tim14.init(period=200, mode=Timer.PERIODIC, callback=timer14_tick)\n';
    Blockly.Python.definitions_['on_tilt_' + direction] = 'def on_tilt_' + direction + '():\n' + globals + branch;
    return null;
};


Blockly.Blocks['mpython3_custom_event'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_CUSTOM_EVENT_MESSAGE0,
            "nextStatement": null,
            // "previousStatement": null,
            "colour": CategoryColors.Event,
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_CUSTOM_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_CUSTOM_EVENT_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "index"
            }, {
                "check": "Boolean",
                "type": "input_value",
                "name": "condition"
            }]
        });
    }
};

Blockly.Python['mpython3_custom_event'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    i = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def_event_' + i] = '_event_changed_' + i + ' = False';
    var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def_Timer' + i] = 'tim' + i + ' = Timer(' + i + ')';
    Blockly.Python.definitions_['timer' + i + '_tick'] = 'def timer' + i + '_tick(_):\n' +
        '    global _event_changed_' + i + '\n' +
        '    if ' + condition + ':\n' +
        '        if not _event_changed_' + i + ': _event_changed_' + i + ' = True; on_custom_event_' + i + '()\n' +
        '    else: _event_changed_' + i + ' = False';
    Blockly.Python.definitions_['on_custom_event_' + i] = 'def on_custom_event_' + i + '():\n' + globals + branch;
    Blockly.Python.definitions_['def_custom_event_' + i] = 'tim' + i + '.init(period=100, mode=Timer.PERIODIC, callback=timer' + i + '_tick)\n';
    return null;
};


Blockly.Blocks['mpython3_ir_remote_recv'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON3_IR_REMOTE_RECV_MESSAGE0,
            "inputsInline": true,
            "nextStatement": null,
            // "previousStatement": null,
            "colour": CategoryColors.General,
            "helpUrl": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_TOOLTIP,
            "args0": [{
                "check": "Number",
                "type": "input_value",
                "name": "pin"
            }]
        });
    }
};

Blockly.Python['mpython3_ir_remote_recv'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_IRReceiver'] = 'from ir_remote import IRReceiver';
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['define_receiver'] = 'receiver = IRReceiver(Pin.P' + pin + ')\nreceiver.daemon()';
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.functions_['def_remote_callback'] = 'def remote_callback(_address, _command):\n' + globals + branch + '\nreceiver.set_callback(remote_callback)';
    return null;
};


function disableIrRemoteBlock(evt, block) {
    if (evt.type == 'ui') return;
    if (evt.type == 'move') {
        var parentBlock = block.getParent();
        var legal = false;
        do {
            if (parentBlock) {
                if ('mpython3_ir_remote_recv' == parentBlock.type|| '_1956v2_ir_remote_recv' == parentBlock.type) {
                    legal = true;
                    break;
                }
                parentBlock = parentBlock.getParent();
            } else {
                break;
            }
        }
        while (parentBlock);
        if (legal) {
            block.setEnabled(true);
        } else {
            block.setEnabled(false);
        }
    }
}

Blockly.Blocks['mpython_ir_remote_address'] = {
    init: function () {
        this.jsonInit({
            "output": null,
            "message0": Blockly.Msg.MPYTHON_IR_REMOTE_ADDRESS_MESSAGE0,
            "colour": CategoryColors.General,
            "helpUrl": '',
            "tooltip": ''
        });
    },
    onchange: function (e) {
        disableIrRemoteBlock(e, this);
    }
};

Blockly.Python['mpython_ir_remote_address'] = function (block) {
    return ['_address', Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['mpython_ir_remote_message'] = {
    init: function () {
        this.jsonInit({
            "output": null,
            "message0": Blockly.Msg.MPYTHON_IR_REMOTE_MESSAGE_MESSAGE0,
            "colour": CategoryColors.General,
            "helpUrl": '',
            "tooltip": ''
        });
    },
    onchange: function (e) {
        disableIrRemoteBlock(e, this);
    }
};

Blockly.Python['mpython_ir_remote_message'] = function (block) {
    return ['_command', Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['mpython3_accelerometer_event'] = {
    init: function () {
        this.jsonInit({
            "nextStatement": null,
            "message0": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_MESSAGE0,
            "inputsInline": true,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TOOLTIP,
            "args0": [{
                "options": [
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_UP, "tilt_up"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_DOWN, "tilt_down"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_LEFT, "tilt_left"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_RIGHT, "tilt_right"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_UP, "face_up"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_DOWN, "face_down"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_SINGLE_CLICK, "single_click"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_DOUBLE_CLICK, "double_click"],
                    [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FREEFALL, "freefall"]
                ],
                "type": "field_dropdown",
                "name": "ACTION"
            }]
        });
    }
};

Blockly.Python['mpython3_accelerometer_event'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var action = block.getFieldValue('ACTION');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['define_on_' + action] =
        'def on_' + action + '(_):\n' + globals + branch;

    Blockly.Python.definitions_['define_event_' + action] = 'accelerometer.event_' + action + ' = on_' + action;
    return null;
};


Blockly.Blocks['mpython3_button_event'] = {
    init: function () {
        this.jsonInit({
            "nextStatement": null,
            "message0": Blockly.Msg.MPYTHON2_BUTTON_EVENT_MESSAGE0,
            "inputsInline": true,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.MPYTHON2_BUTTON_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_BUTTON_EVENT_TOOLTIP,
            "args0": [{
                "options": [
                    ["A", "a"],
                    ["B", "b"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON2_BUTTON_EVENT_PRESSED, "pressed"],
                    [Blockly.Msg.MPYTHON2_BUTTON_EVENT_RELEASED, "released"]
                ],
                "type": "field_dropdown",
                "name": "ACTION"
            }
            ]
        });
    }
};

Blockly.Python['mpython3_button_event'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['define_on_button_' + button + '_' + action] =
        'def on_button_' + button + '_' + action + '(_):\n' + globals + branch;
    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'button_' + button + '.event_' + action + ' = on_button_' + button + '_' + action;
    return null;
};


Blockly.Blocks['mpython3_touchpad_event'] = {
    init: function () {
        this.jsonInit({
            "nextStatement": null,
            "message0": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_MESSAGE0,
            "inputsInline": true,
            "colour": CategoryColors.Event,
            "helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_TOOLTIP,
            "args0": [{
                "options": [
                    ["P", "p"],
                    ["Y", "y"],
                    ["T", "t"],
                    ["H", "h"],
                    ["O", "o"],
                    ["N", "n"]
                ],
                "type": "field_dropdown",
                "name": "BUTTON"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_PRESSED, "pressed"],
                    [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_RELEASED, "released"]
                ],
                "type": "field_dropdown",
                "name": "ACTION"
            }
            ]
        });
    }
};

Blockly.Python['mpython3_touchpad_event'] = function (block) {
    const variables = block.workspace.variableList;
    let globals = [];
    for (var i = variables.length - 1; i >= 0; i--) {
        globals.push(Blockly.Python.variableDB_.getName(variables[i], Blockly.Variables.NAME_TYPE));
    }
    globals = globals.length ? '    global ' + globals.join(', ') + '\n' : '';
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['define_on_touchpad_' + button + '_' + action] =
        'def on_touchpad_' + button + '_' + action + '(_):\n' + globals + branch;
    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'touchpad_' + button + '.event_' + action + ' = on_touchpad_' + button + '_' + action;
    return null;
};


//mq135 2021.06.22添加
//mq135初始化
Blockly.Python['mpython_mq135_init'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_mq135'] = 'from mq135 import MQ135';
    var mq135_pin = Blockly.Python.valueToCode(block, 'mq135_pin', Blockly.Python.ORDER_ATOMIC);
    var temperature = Blockly.Python.valueToCode(block, 'temperature', Blockly.Python.ORDER_ATOMIC);
    var humidity = Blockly.Python.valueToCode(block, 'humidity', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['mq135_init'] = 'mq = MQ135(' + mq135_pin + ', ' + temperature + ', ' + humidity + ')';
    // Blockly.Python.definitions_['mq135_init_get_corrected_rzero'] = 'mq.get_corrected_rzero()';
    var code = '\n'
    return code;
};

//mq135
Blockly.Blocks['mpython_mq135_init'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.General,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "args0": [{
                "check": "Number",
                "name": "mq135_pin",
                "type": "input_value"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "temperature"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "humidity"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_MQ135_INIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MQ135_INIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MQ135_INIT_MESSAGE0,
        });
    }
};


//mq135返回ppm浓度
Blockly.Python['mpython_mq135_options'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['mq135_init_get_corrected_rzero'] = 'mq.get_corrected_rzero()';
    var mq135_options = block.getFieldValue('mq135_options');
    var code = 'mq.' + mq135_options + '';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['mpython_mq135_options'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.General,
            "output": 'Number',
            "args0": [{
                "options": [
                    // [Blockly.Msg.MPYTHON_MQ135_GET_RZERO, "get_rzero()"],
                    [Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_PPM, "get_corrected_ppm()"],
                    [Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_RZERO, "get_corrected_rzero()"],
                    // [Blockly.Msg.MPYTHON_MQ135_GET_PPM, "get_ppm()"]
                ],
                "type": "field_dropdown",
                "name": "mq135_options"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_MQ135_OPTIONS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MQ135_OPTIONS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MQ135_OPTIONS_MESSAGE0,
        });
    }
};



// 2021.06.13 事件类block改写 End