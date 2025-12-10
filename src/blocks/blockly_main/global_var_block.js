'use strict';

// goog.provide('Blockly.Blocks.mpython');
// goog.require('Blockly.Blocks');
import * as Blockly from 'blockly/core';
import {CategoryColors} from '@/global/colors'

//音符本身
var musical_note = [
    ['C3', 'C3'],
    ['C#3', 'C#3'],
    ['D3', 'D3'],
    ['D#3', 'D#3'],
    ['E3', 'E3'],
    ['F3', 'F3'],
    ['F#3', 'F#3'],
    ['G3', 'G3'],
    ['G#3', 'G#3'],
    ['A3', 'A3'],
    ['A#3', 'A#3'],
    ['B3', 'B3'],
    ['C4', 'C4'],
    ['C#4', 'C#4'],
    ['D4', 'D4'],
    ['D#4', 'D#4'],
    ['E4', 'E4'],
    ['F4', 'F4'],
    ['F#4', 'F#4'],
    ['G4', 'G4'],
    ['G#4', 'G#4'],
    ['A4', 'A4'],
    ['A#4', 'A#4'],
    ['B4', 'B4'],
    ['C5', 'C5'],
    ['C#5', 'C#5'],
    ['D5', 'D5'],
    ['D#5', 'D#5'],
    ['E5', 'E5'],
    ['F5', 'F5'],
    ['F#5', 'F#5'],
    ['G5', 'G5'],
    ['G#5', 'G#5'],
    ['A5', 'A5'],
    ['A#5', 'A#5'],
    ['B5', 'B5']
];

//音符对应的音调、频率
var music_tone_freq = [
    ['C3', '131'],
    ['C#3', '139'],
    ['D3', '147'],
    ['D#3', '156'],
    ['E3', '165'],
    ['F3', '175'],
    ['F#3', '185'],
    ['G3', '196'],
    ['G#3', '208'],
    ['A3', '220'],
    ['A#3', '233'],
    ['B3', '247'],
    ['C4', '262'],
    ['C#4', '277'],
    ['D4', '294'],
    ['D#4', '311'],
    ['E4', '330'],
    ['F4', '349'],
    ['F#4', '370'],
    ['G4', '392'],
    ['G#4', '415'],
    ['A4', '440'],
    ['A#4', '466'],
    ['B4', '494'],
    ['C5', '523'],
    ['C#5', '554'],
    ['D5', '587'],
    ['D#5', '622'],
    ['E5', '659'],
    ['F5', '698'],
    ['F#5', '740'],
    ['G5', '784'],
    ['G#5', '831'],
    ['A5', '880'],
    ['A#5', '932'],
    ['B5', '988']
];

var music_tick = [
    ['1/4', '1']
    , ['1/2', '2']
    , ['1', '4']
    , ['2', '8']
];


var usocket_color = 32;
var logic_color = 210;
var mpython_bluebit_color = "#336699";
var list_color = {HUE:'#035703'};
var math_color = 230;
var event_color = 32;
var oled_color = 96;
var buttonColor = 300;
var pinColor = 260;
var rgbColor = 0; //系统资源-颜色
var buzzColor = 192;
var tuple_color = 192;
var dict_color = 32;
var accelerometerColor = 55;
var wifi_color = 160;
var iot_color = 64;
var iot_blynk_color = '#24c48e';
var iot_onenet_color = 64;
var iot_tinyweb_color = 160;
var set_color = 160; //集合
var extend_color = 288;
/*
颜色
*/
var purple_red = 328; // 紫红色
var wine_red = rgbColor; // 酒红色
var brown = event_color; // 褐色
var green = oled_color; // 绿色
var light_blue = tuple_color; // 浅蓝色
var purple = pinColor; // 紫色
var light_green = wifi_color; // 浅绿色
var yellow_green = iot_onenet_color; // 黄绿色
var bright_green = iot_blynk_color; // 亮绿色
var bright_purple = extend_color; // 亮紫色
var deep_blue = mpython_bluebit_color; // 深蓝色


var read_digital = [["P0", "0"], ["P1", "1"], ["P2", "2"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var read_analog = [
    ["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3(EXT)", "3"]
];
var read_analog_1 = [
    ["P1", "1"], ["P0", "0"], ["P2", "2"], ["P3(EXT)", "3"], ["P4(light)", "4"], ["P10(sound)", "10"]
];
var set_digital_state = [['LOW', '0'], ['HIGH', '1']];
var set_digital = [["P0", "0"], ["P1", "1"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P11(button_B)", "11"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var set_digital_1 = [["P1", "1"], ["P0", "0"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var set_analog = [["P0", "0"], ["P1", "1"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P11(button_B)", "11"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var set_analog_1 = [["P1", "1"], ["P0", "0"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var all_pin =
    [
        ["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3(EXT)", "3"], ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], 
        ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
    ];
var all_pin_p1 =
    [
        ["P1", "1"], ["P0", "0"], ["P2", "2"], ["P3(EXT)", "3"], ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], 
        ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
    ];
var buzz_tone = [['do', '262'], ['re', '294'], ['mi', '330'], ['fa', '349'], ['sol', '392'], ['la', '440'], ['si', '494']];
//mpython_conn专用
var mpython_conn_pin_set_all =[["P0", "0"], ["P1", "1"], ["P8", "8"], ["P9", "9"],["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]];
var mpython_conn_pin_get_digital =[["P0", "0"], ["P1", "1"], ["P2", "2"], ["P8", "8"], ["P9", "9"],["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]];
var mpython_conn_pin_get_analog =[["P0", "0"], ["P1", "1"], ["P2", "2"]];

//乐动
var ledong_pin = [
    ["P1", "1"], ["P0", "0"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];
var ledong_pin_1 = [
    ["P0", "0"], ["P1", "1"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];

//人教
var educore_RGB_pin = [["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]];
var educore_button_pin = [["P0", "0"], ["P1", "1"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]];
var educore_light_pin = [["P0", "0"], ["P1", "1"]];

//1956 amigo IO
var _1956_IO =
    [
        ["IO7", "7"], ["IO9", "9"], ["IO17", "17"], ["IO19", "19"], ["IO20", "20"], ["IO23", "23"], ["IO12", "12"], ["IO31", "31"], 
        ["IO8", "8"], ["IO22", "22"], ["IO25", "25"], ["IO28", "28"], ["IO29", "29"], ["IO30", "30"]
    ];

/*
var pwm_pin = [
    ["P7", "7"],
    ["P8", "8"],
    ["P9", "9"],
    ["P13", "13"],
    ["P14", "14"],
    ["P15", "15"],
    ["P16", "16"]
]*/
var mq135_pin = [ ["P0", "0"], ["P1", "1"] ];
var dh11_hum_tem_pin = [ ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var text_color = 160;
var touchPad = [["P", "P"], ["Y", "Y"], ["T", "T"], ["H", "H"], ["O", "O"], ["N", "N"]];
var axis = [["X", "X"], ["Y", "Y"], ["Z", "Z"]];
var WiFi_config = [["IP", "0"], ["netmask", "1"], ["gateway", "2"], ["DNS", "3"]];
var WiFi_channel = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]];
var button_AB = [["A", "button_a"], ["B", "button_b"]];
var uart_tx_pin = [
    ["P16", "16"], ["P0", "0"], ["P1", "1"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];
var uart_rx_pin = [
    ["P15", "15"], ["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3(EXT)", "3"], ["P4(light)", "4"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"],  ["P13", "13"], ["P14", "14"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];
var i2c_pin = [
     ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],
     ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"],
    ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];
var i2c_new_pin = [
	["P0", "0"], ["P1", "1"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"],
];
var output_pin =
    [
        ["P0", "0"], ["P1", "1"],  ["P6(buzzer)", "6"],
        ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], 
        ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
    ];

var box_all_pin = [["P0", "0"], ["P1", "1"], ["P13", "13"], ["P15", "15"], ["P16", "16"]];
var box_analog_pin = [["P0", "0"], ["P1", "1"]];

var ledong_all_pin = [["P0", "0"], ["P1", "1"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]];
var ledong_analog_pin = [["P0", "0"], ["P1", "1"]];
var ledong_analog_pin1 = [["P1", "1"], ["P0", "0"]];

var weather_station_tx_pin = [["P14", "14"], ["P0", "0"], ["P1", "1"], ["P13", "13"], ["P15", "15"], ["P16", "16"]];
var weather_station_rx_pin = [["P13", "13"], ["P0", "0"], ["P1", "1"], ["P14", "14"], ["P15", "15"], ["P16", "16"]];

var new1956_all_pin = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"]];
var new1956_digital_pin = [["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"]];
var new1956_analog_pin = [["P0", "0"], ["P1", "1"]];
var new1956_uart_pwm_pin = [["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"]];
var new1956_uart_servo_pin = [["P2", "2"], ["P4", "4"]];

var process_control_pin = [["P0", "0"], ["P1", "1"], ["P15", "15"], ["P16", "16"]]
var process_control_tx_pin = [["P1", "1"], ["P0", "0"], ["P15", "15"], ["P16", "16"]]
var process_control_rx_pin = [["P0", "0"], ["P1", "1"], ["P15", "15"], ["P16", "16"]]

var joint_analog = [["1", "1"], ["2", "2"], ["3", "3"]]
var joint_digital = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]
var joint_i2c = [["7", "7"], ["8", "8"]]
var joint_all = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]

var mpython_v3_analog = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P6", "6"], ["P8", "8"], ["P9", "9"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]]
var mpython_v3_digital = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P6", "6"], ["P8", "8"], ["P9", "9"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]]
var mpython_v3_all = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P6", "6"], ["P8", "8"], ["P9", "9"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"]]

var ledong_v2_analog = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P6", "6"], ["P8", "8"], ["P9", "9"]]
var ledong_v2_digital = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P6", "6"], ["P8", "8"], ["P9", "9"]]
var ledong_v2_all = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P6", "6"], ["P8", "8"], ["P9", "9"]]

var _1956_v2_all_pin = [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"]];
var _1956_v2_digital_pin = [["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"]];
var _1956_v2_analog_pin = [["P0", "0"], ["P1", "1"]];
var _1956_v2_uart_pin = [["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"], ["P6", "6"], ["P7", "7"]];
var _1956_v2_pwm_pin = [["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"]];
var _1956_v2_uart_id = [["P2/P3", "1"], ["P4/P5", "2"], ["P6/P7", "3"]];
var _1956_v2_i2c_id = [["P2/P3", "1"], ["P4/P5", "2"], ["P6/P7", "3"]];

Blockly.Blocks['i2c_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.I2C_PIN_HELPURL,
            "tooltip": Blockly.Msg.I2C_PIN_TOOLTIP,
            "message0": Blockly.Msg.I2C_PIN_MESSAGE0,
            "args0": [
                {
                    "options": i2c_pin,
                    "type": "field_dropdown",
                    "name": "i2c_pin"
                }
            ]
        });
    }
};




Blockly.Blocks['i2c_new_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.I2C_PIN_HELPURL,
            "tooltip": Blockly.Msg.I2C_PIN_TOOLTIP,
            "message0": Blockly.Msg.I2C_PIN_MESSAGE0,
            "args0": [
                {
                    "options": i2c_new_pin,
                    "type": "field_dropdown",
                    "name": "i2c_new_pin"
                }
            ]
        });
    }
};



Blockly.Blocks['uart_rx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.UART_RX_PIN_HELPURL,
            "tooltip": Blockly.Msg.UART_RX_PIN_TOOLTIP,
            "message0": Blockly.Msg.UART_RX_PIN_MESSAGE0,
            "args0": [
                {
                    "options": uart_rx_pin,
                    "type": "field_dropdown",
                    "name": "uart_rx_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['uart_tx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.UART_TX_PIN_HELPURL,
            "tooltip": Blockly.Msg.UART_TX_PIN_TOOLTIP,
            "message0": Blockly.Msg.UART_TX_PIN_MESSAGE0,
            "args0": [
                {
                    "options": uart_tx_pin,
                    "type": "field_dropdown",
                    "name": "uart_tx_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['dh11_hum_tem_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.DH11_HUM_TEM_PIN_HELPURL,
            "tooltip": Blockly.Msg.DH11_HUM_TEM_PIN_TOOLTIP,
            "message0": Blockly.Msg.DH11_HUM_TEM_PIN_MESSAGE0,
            "args0": [
                {
                    "options": dh11_hum_tem_pin,
                    "type": "field_dropdown",
                    "name": "dh11_hum_tem_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['mq135_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
			"message0": Blockly.Msg.MQ135_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mq135_pin,
                    "type": "field_dropdown",
                    "name": "mq135_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['pwm_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.PWM_PIN_HELPURL,
            "tooltip": Blockly.Msg.PWM_PIN_TOOLTIP,
            "message0": Blockly.Msg.PWM_PIN_MESSAGE0,
            "args0": [
                {
                    "options": [
						[Blockly.Msg.MPYTHON_PWM_PIN_P7, "7"],
						["P8", "8"],
						[Blockly.Msg.MPYTHON_PWM_PIN_P9, "9"],
						["P13", "13"],
						["P14", "14"],
						["P15", "15"],
						["P16", "16"]
					],
                    "type": "field_dropdown",
                    "name": "pwm_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['all_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": all_pin,
                    "type": "field_dropdown",
                    "name": "all_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['all_pin_p1'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": all_pin_p1,
                    "type": "field_dropdown",
                    "name": "all_pin_p1"
                }
            ]
        });
    }
};
Blockly.Blocks['ledong_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_pin,
                    "type": "field_dropdown",
                    "name": "ledong_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['ledong_pin_1'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_pin_1,
                    "type": "field_dropdown",
                    "name": "ledong_pin_1"
                }
            ]
        });
    }
};

Blockly.Blocks['educore_RGB_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": educore_RGB_pin,
                    "type": "field_dropdown",
                    "name": "educore_RGB_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['educore_button_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": educore_button_pin,
                    "type": "field_dropdown",
                    "name": "educore_button_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['educore_light_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": educore_light_pin,
                    "type": "field_dropdown",
                    "name": "educore_light_pin"
                }
            ]
        });
    }
};

//掌控板直连的所有输出设备可用引脚
Blockly.Blocks['mpython_conn_pin_set_all'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mpython_conn_pin_set_all,
                    "type": "field_dropdown",
                    "name": "mpython_conn_pin_set_all"
                }
            ]
        });
    }
};

//掌控板直连的数字输入设备可用引脚
Blockly.Blocks['mpython_conn_pin_get_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mpython_conn_pin_get_digital,
                    "type": "field_dropdown",
                    "name": "mpython_conn_pin_get_digital"
                }
            ]
        });
    }
};

//掌控板直连的模拟输入设备可用引脚
Blockly.Blocks['mpython_conn_pin_get_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mpython_conn_pin_get_analog,
                    "type": "field_dropdown",
                    "name": "mpython_conn_pin_get_analog"
                }
            ]
        });
    }
};

Blockly.Blocks['set_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.SET_DIGITAL_HELPURL,
            "tooltip": Blockly.Msg.SET_DIGITAL_TOOLTIP,
            "message0": Blockly.Msg.SET_DIGITAL_MESSAGE0,
            "args0": [
                {
                    "options": set_digital,
                    "type": "field_dropdown",
                    "name": "set_digital"
                }
            ]
        });
    }
};

Blockly.Blocks['set_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.SET_ANALOG_HELPURL,
            "tooltip": Blockly.Msg.SET_ANALOG_TOOLTIP,
            "message0": Blockly.Msg.SET_ANALOG_MESSAGE0,
            "args0": [
                {
                    "options": set_analog,
                    "type": "field_dropdown",
                    "name": "set_analog"
                }
            ]
        });
    }
};

Blockly.Blocks['read_analog_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.READ_ANALOG_PIN_HELPURL,
            "tooltip": Blockly.Msg.READ_ANALOG_PIN_TOOLTIP,
            "message0": Blockly.Msg.READ_ANALOG_PIN_MESSAGE0,
            "args0": [
                {
                    "options": read_analog,
                    "type": "field_dropdown",
                    "name": "read_analog_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['read_digital_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.READ_ANALOG_PIN_HELPURL,
            "tooltip": Blockly.Msg.READ_ANALOG_PIN_TOOLTIP,
            "message0": Blockly.Msg.READ_ANALOG_PIN_MESSAGE0,
            "args0": [
                {
                    "options": read_digital,
                    "type": "field_dropdown",
                    "name": "read_digital_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['input_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.INPUT_PIN_HELPURL,
            "tooltip": Blockly.Msg.INPUT_PIN_TOOLTIP,
            "message0": Blockly.Msg.INPUT_PIN_MESSAGE0,
            "args0": [
                {
                    "options": all_pin,
                    "type": "field_dropdown",
                    "name": "input_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['1956_input_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.INPUT_PIN_HELPURL,
            "tooltip": Blockly.Msg.INPUT_PIN_TOOLTIP,
            "message0": Blockly.Msg.INPUT_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_IO,
                    "type": "field_dropdown",
                    "name": "1956_input_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['output_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.OUTPUT_PIN_HELPURL,
            "tooltip": Blockly.Msg.OUTPUT_PIN_TOOLTIP,
            "message0": Blockly.Msg.OUTPUT_PIN_MESSAGE0,
            "args0": [
                {
                    "options": output_pin,
                    "type": "field_dropdown",
                    "name": "output_pin"
                }
            ]
        });
    }
};

const CITYS_DATA={"本地":{"-":{"pinyin":"ip"}},"北京":{"-":{"pinyin":"beijing"}},"天津":{"-":{"pinyin":"tianjin"}},"河北":{"石家庄":{"pinyin":"shijiazhuang"},"邯郸":{"pinyin":"handan"},"邢台":{"pinyin":"xingtai"},"衡水":{"pinyin":"hengshui"},"保定":{"pinyin":"baoding"},"沧州":{"pinyin":"cangzhou"},"张家口":{"pinyin":"zhangjiakou"},"廊坊":{"pinyin":"langfang"},"承德":{"pinyin":"chengde"},"唐山":{"pinyin":"tangshan"},"秦皇岛":{"pinyin":"qinhuangdao"}},"山西":{"太原":{"pinyin":"taiyuan"},"运城":{"pinyin":"yuncheng"},"临汾":{"pinyin":"linfen"},"吕梁":{"pinyin":"lvliang"},"朔州":{"pinyin":"shuozhou"},"晋城":{"pinyin":"jincheng"},"长治":{"pinyin":"changzhi"},"晋中":{"pinyin":"jinzhong"},"阳泉":{"pinyin":"yangquan"},"忻州":{"pinyin":"xinzhou"},"大同":{"pinyin":"datong"}},"内蒙古":{"呼和浩特":{"pinyin":"huhehaote"},"阿左旗":{"pinyin":"azuoqi"},"乌海":{"pinyin":"wuhai"},"临河":{"pinyin":"linhe"},"鄂尔多斯":{"pinyin":"eerduosi"},"包头":{"pinyin":"baotou"},"集宁":{"pinyin":"jining"},"锡林浩特":{"pinyin":"xilinhaote"},"赤峰":{"pinyin":"chifeng"},"通辽":{"pinyin":"tongliao"},"乌兰浩特":{"pinyin":"wulanhaote"},"海拉尔":{"pinyin":"hailaer"}},"辽宁":{"沈阳":{"pinyin":"shenyang"},"大连":{"pinyin":"dalian"},"葫芦岛":{"pinyin":"huludao"},"朝阳":{"pinyin":"chaoyang"},"营口":{"pinyin":"yingkou"},"锦州":{"pinyin":"jinzhou"},"盘锦":{"pinyin":"panjin"},"阜新":{"pinyin":"fuxin"},"鞍山":{"pinyin":"anshan"},"辽阳":{"pinyin":"liaoyang"},"丹东":{"pinyin":"dandong"},"本溪":{"pinyin":"benxi"},"抚顺":{"pinyin":"fushun"},"铁岭":{"pinyin":"tieling"}},"吉林":{"长春":{"pinyin":"changchun"},"通化":{"pinyin":"tonghua"},"白山":{"pinyin":"baishan"},"辽源":{"pinyin":"liaoyuan"},"四平":{"pinyin":"siping"},"吉林":{"pinyin":"jilin"},"延吉":{"pinyin":"yanji"},"白城":{"pinyin":"baicheng"},"松原":{"pinyin":"songyuan"}},"黑龙江":{"哈尔滨":{"pinyin":"haerbin"},"牡丹江":{"pinyin":"mudanjiang"},"大庆":{"pinyin":"daqing"},"齐齐哈尔":{"pinyin":"qiqihaer"},"绥化":{"pinyin":"suihua"},"伊春":{"pinyin":"yichun"},"大兴安岭":{"pinyin":"daxinganling"},"黑河":{"pinyin":"heihe"},"鸡西":{"pinyin":"jixi"},"七台河":{"pinyin":"qitaihe"},"佳木斯":{"pinyin":"jiamusi"},"鹤岗":{"pinyin":"hegang"},"双鸭山":{"pinyin":"shuangyashan"}},"上海":{"-":{"pinyin":"shanghai"}},"江苏":{"南京":{"pinyin":"nanjing"},"镇江":{"pinyin":"zhenjiang"},"苏州":{"pinyin":"suzhou"},"无锡":{"pinyin":"wuxi"},"常州":{"pinyin":"changzhou"},"南通":{"pinyin":"nantong"},"扬州":{"pinyin":"yangzhou"},"淮安":{"pinyin":"huaian"},"泰州":{"pinyin":"taizhou"},"盐城":{"pinyin":"yancheng"},"徐州":{"pinyin":"xuzhou"},"宿迁":{"pinyin":"suqian"},"连云港":{"pinyin":"lianyungang"}},"浙江":{"杭州":{"pinyin":"hangzhou"},"温州":{"pinyin":"wenzhou"},"衢州":{"pinyin":"quzhou"},"丽水":{"pinyin":"lishui"},"金华":{"pinyin":"jinhua"},"绍兴":{"pinyin":"shaoxing"},"湖州":{"pinyin":"huzhou"},"嘉兴":{"pinyin":"jiaxing"},"台州":{"pinyin":"taizhou"},"宁波":{"pinyin":"ningbo"},"舟山":{"pinyin":"zhoushan"}},"安徽":{"合肥":{"pinyin":"hefei"},"安庆":{"pinyin":"anqing"},"池州":{"pinyin":"chizhou"},"铜陵":{"pinyin":"tongling"},"六安":{"pinyin":"luan"},"阜阳":{"pinyin":"fuyang"},"淮南":{"pinyin":"huainan"},"蚌埠":{"pinyin":"bengbu"},"宿州":{"pinyin":"suzhou"},"黄山":{"pinyin":"huangshan"},"宣城":{"pinyin":"xuancheng"},"芜湖":{"pinyin":"wuhu"},"马鞍山":{"pinyin":"maanshan"},"滁州":{"pinyin":"chuzhou"},"亳州":{"pinyin":"bozhou"},"淮北":{"pinyin":"huaibei"}},"福建":{"福州":{"pinyin":"fuzhou"},"漳州":{"pinyin":"zhangzhou"},"厦门":{"pinyin":"xiamen"},"龙岩":{"pinyin":"longyan"},"三明":{"pinyin":"sanming"},"泉州":{"pinyin":"quanzhou"},"莆田":{"pinyin":"putian"},"南平":{"pinyin":"nanping"},"宁德":{"pinyin":"ningde"}},"江西":{"南昌":{"pinyin":"nanchang"},"赣州":{"pinyin":"ganzhou"},"萍乡":{"pinyin":"pingxiang"},"吉安":{"pinyin":"jian"},"宜春":{"pinyin":"yichun"},"新余":{"pinyin":"xinyu"},"抚州":{"pinyin":"fuzhou"},"鹰潭":{"pinyin":"yingtan"},"上饶":{"pinyin":"shangrao"},"景德镇":{"pinyin":"jingdezhen"},"九江":{"pinyin":"jiujiang"}},"山东":{"济南":{"pinyin":"jinan"},"枣庄":{"pinyin":"zaozhuang"},"菏泽":{"pinyin":"heze"},"济宁":{"pinyin":"jining"},"聊城":{"pinyin":"liaocheng"},"泰安":{"pinyin":"taian"},"莱芜":{"pinyin":"laiwu"},"德州":{"pinyin":"dezhou"},"淄博":{"pinyin":"zibo"},"滨州":{"pinyin":"binzhou"},"临沂":{"pinyin":"linyi"},"日照":{"pinyin":"rizhao"},"青岛":{"pinyin":"qingdao"},"潍坊":{"pinyin":"weifang"},"东营":{"pinyin":"dongying"},"烟台":{"pinyin":"yantai"},"威海":{"pinyin":"weihai"}},"河南":{"郑州":{"pinyin":"zhengzhou"},"三门峡":{"pinyin":"sanmenxia"},"洛阳":{"pinyin":"luoyang"},"信阳":{"pinyin":"xinyang"},"南阳":{"pinyin":"nanyang"},"驻马店":{"pinyin":"zhumadian"},"漯河":{"pinyin":"luohe"},"周口":{"pinyin":"zhoukou"},"平顶山":{"pinyin":"pingdingshan"},"许昌":{"pinyin":"xuchang"},"济源":{"pinyin":"jiyuan"},"开封":{"pinyin":"kaifeng"},"焦作":{"pinyin":"jiaozuo"},"新乡":{"pinyin":"xinxiang"},"鹤壁":{"pinyin":"hebi"},"濮阳":{"pinyin":"puyang"},"安阳":{"pinyin":"anyang"},"商丘":{"pinyin":"shangqiu"}},"湖北":{"武汉":{"pinyin":"wuhan"},"恩施":{"pinyin":"enshi"},"宜昌":{"pinyin":"yichang"},"荆州":{"pinyin":"jingzhou"},"神农架":{"pinyin":"shennongjia"},"荆门":{"pinyin":"jingmen"},"襄阳":{"pinyin":"xiangyang"},"十堰":{"pinyin":"shiyan"},"潜江":{"pinyin":"qianjiang"},"天门":{"pinyin":"tianmen"},"仙桃":{"pinyin":"xiantao"},"咸宁":{"pinyin":"xianning"},"黄石":{"pinyin":"huangshi"},"孝感":{"pinyin":"xiaogan"},"鄂州":{"pinyin":"ezhou"},"黄冈":{"pinyin":"huanggang"},"随州":{"pinyin":"suizhou"}},"湖南":{"长沙":{"pinyin":"changsha"},"永州":{"pinyin":"yongzhou"},"怀化":{"pinyin":"huaihua"},"邵阳":{"pinyin":"shaoyang"},"娄底":{"pinyin":"loudi"},"吉首":{"pinyin":"jishou"},"张家界":{"pinyin":"zhangjiajie"},"益阳":{"pinyin":"yiyang"},"常德":{"pinyin":"changde"},"郴州":{"pinyin":"chenzhou"},"衡阳":{"pinyin":"hengyang"},"湘潭":{"pinyin":"xiangtan"},"株洲":{"pinyin":"zhuzhou"},"岳阳":{"pinyin":"yueyang"}},"广东":{"广州":{"pinyin":"guangzhou"},"湛江":{"pinyin":"zhanjiang"},"茂名":{"pinyin":"maoming"},"阳江":{"pinyin":"yangjiang"},"珠海":{"pinyin":"zhuhai"},"云浮":{"pinyin":"yunfu"},"肇庆":{"pinyin":"zhaoqing"},"江门":{"pinyin":"jiangmen"},"佛山":{"pinyin":"foshan"},"中山":{"pinyin":"zhongshan"},"东莞":{"pinyin":"dongguan"},"清远":{"pinyin":"qingyuan"},"深圳":{"pinyin":"shenzhen"},"惠州":{"pinyin":"huizhou"},"河源":{"pinyin":"heyuan"},"韶关":{"pinyin":"shaoguan"},"汕尾":{"pinyin":"shanwei"},"汕头":{"pinyin":"shantou"},"揭阳":{"pinyin":"jieyang"},"潮州":{"pinyin":"chaozhou"},"梅州":{"pinyin":"meizhou"}},"广西":{"南宁":{"pinyin":"nanning"},"崇左":{"pinyin":"chongzuo"},"防城港":{"pinyin":"fangchenggang"},"北海":{"pinyin":"beihai"},"钦州":{"pinyin":"qinzhou"},"百色":{"pinyin":"baise"},"贵港":{"pinyin":"guigang"},"来宾":{"pinyin":"laibin"},"河池":{"pinyin":"hechi"},"柳州":{"pinyin":"liuzhou"},"玉林":{"pinyin":"yulin"},"梧州":{"pinyin":"wuzhou"},"桂林":{"pinyin":"guilin"},"贺州":{"pinyin":"hezhou"}},"海南":{"海口":{"pinyin":"haikou"},"西沙":{"pinyin":"xisha"},"三亚":{"pinyin":"sanya"},"乐东":{"pinyin":"ledong"},"五指山":{"pinyin":"wuzhishan"},"东方":{"pinyin":"dongfang"},"昌江":{"pinyin":"changjiang"},"白沙":{"pinyin":"baisha"},"儋州":{"pinyin":"danzhou"},"保亭":{"pinyin":"baoting"},"陵水":{"pinyin":"lingshui"},"万宁":{"pinyin":"wanning"},"琼中":{"pinyin":"qiongzhong"},"屯昌":{"pinyin":"tunchang"},"琼海":{"pinyin":"qionghai"},"文昌":{"pinyin":"wenchang"},"临高":{"pinyin":"lingao"},"澄迈":{"pinyin":"chengmai"},"定安":{"pinyin":"dingan"},"南沙":{"pinyin":"nansha"},"中沙":{"pinyin":"wuzhishan"}},"重庆":{"-":{"pinyin":"chongqing"}},"四川":{"成都":{"pinyin":"chengdu"},"甘孜":{"pinyin":"ganzi"},"攀枝花":{"pinyin":"panzhihua"},"凉山":{"pinyin":"liangshan"},"雅安":{"pinyin":"yaan"},"乐山":{"pinyin":"leshan"},"眉山":{"pinyin":"meishan"},"宜宾":{"pinyin":"yibin"},"泸州":{"pinyin":"luzhou"},"自贡":{"pinyin":"zigong"},"资阳":{"pinyin":"ziyang"},"内江":{"pinyin":"neijiang"},"遂宁":{"pinyin":"suining"},"南充":{"pinyin":"nanchong"},"广安":{"pinyin":"guangan"},"阿坝":{"pinyin":"aba"},"德阳":{"pinyin":"deyang"},"绵阳":{"pinyin":"mianyang"},"巴中":{"pinyin":"bazhong"},"广元":{"pinyin":"guangyuan"},"达州":{"pinyin":"dazhou"}},"贵州":{"贵阳":{"pinyin":"guiyang"},"兴义":{"pinyin":"xingyi"},"水城":{"pinyin":"shuicheng"},"安顺":{"pinyin":"anshun"},"毕节":{"pinyin":"bijie"},"都匀":{"pinyin":"duyun"},"凯里":{"pinyin":"kaili"},"遵义":{"pinyin":"zunyi"},"铜仁":{"pinyin":"tongren"}},"云南":{"昆明":{"pinyin":"kunming"},"景洪":{"pinyin":"jinghong"},"普洱":{"pinyin":"puer"},"临沧":{"pinyin":"lincang"},"德宏":{"pinyin":"dehong"},"保山":{"pinyin":"baoshan"},"怒江":{"pinyin":"nujiang"},"大理":{"pinyin":"dali"},"香格里拉":{"pinyin":"xianggelila"},"丽江":{"pinyin":"lijiang"},"红河":{"pinyin":"honghe"},"玉溪":{"pinyin":"yuxi"},"楚雄":{"pinyin":"chuxiong"},"文山":{"pinyin":"wenshan"},"曲靖":{"pinyin":"qujing"},"昭通":{"pinyin":"zhaotong"}},"西藏":{"拉萨":{"pinyin":"lasa"},"阿里":{"pinyin":"ali"},"日喀则":{"pinyin":"rikaze"},"山南":{"pinyin":"shannan"},"林芝":{"pinyin":"linzhi"},"那曲":{"pinyin":"naqu"},"昌都":{"pinyin":"changdu"}},"陕西":{"西安":{"pinyin":"xian"},"汉中":{"pinyin":"hanzhong"},"安康":{"pinyin":"ankang"},"宝鸡":{"pinyin":"baoji"},"杨凌":{"pinyin":"yangling"},"咸阳":{"pinyin":"xianyang"},"铜川":{"pinyin":"tongchuan"},"渭南":{"pinyin":"weinan"},"商洛":{"pinyin":"shangluo"},"延安":{"pinyin":"yanan"},"榆林":{"pinyin":"yulin"}},"甘肃":{"兰州":{"pinyin":"lanzhou"},"武都":{"pinyin":"wudu"},"张掖":{"pinyin":"zhangye"},"嘉峪关":{"pinyin":"jiayuguan"},"酒泉":{"pinyin":"jiuquan"},"合作":{"pinyin":"hezuo"},"临夏":{"pinyin":"linxia"},"天水":{"pinyin":"tianshui"},"定西":{"pinyin":"dingxi"},"白银":{"pinyin":"baiyin"},"平凉":{"pinyin":"pingliang"},"武威":{"pinyin":"wuwei"},"金昌":{"pinyin":"jinchang"},"庆阳":{"pinyin":"qingyang"}},"青海":{"西宁":{"pinyin":"xining"},"玉树":{"pinyin":"yushu"},"格尔木":{"pinyin":"geermu"},"果洛":{"pinyin":"guoluo"},"海南":{"pinyin":"hainan"},"海西":{"pinyin":"haixi"},"海北":{"pinyin":"haibei"},"黄南":{"pinyin":"huangnan"},"海东":{"pinyin":"haidong"}},"宁夏":{"银川":{"pinyin":"yinchuan"},"固原":{"pinyin":"guyuan"},"中卫":{"pinyin":"zhongwei"},"吴忠":{"pinyin":"wuzhong"},"石嘴山":{"pinyin":"shizuishan"}},"新疆":{"乌鲁木齐":{"pinyin":"wulumuqi"},"喀什":{"pinyin":"kashi"},"阿图什":{"pinyin":"atushi"},"和田":{"pinyin":"hetian"},"阿拉尔":{"pinyin":"alaer"},"阿克苏":{"pinyin":"akesu"},"伊宁":{"pinyin":"yining"},"博乐":{"pinyin":"bole"},"库尔勒":{"pinyin":"kuerle"},"石河子":{"pinyin":"shihezi"},"吐鲁番":{"pinyin":"tulufan"},"昌吉":{"pinyin":"changji"},"五家渠":{"pinyin":"wujiaqu"},"塔城":{"pinyin":"tacheng"},"克拉玛依":{"pinyin":"kelamayi"},"阿勒泰":{"pinyin":"aletai"},"哈密":{"pinyin":"hami"}},"香港":{"-":{"pinyin":"hong kong"}},"澳门":{"-":{"pinyin":"macao"}},"台湾":{"台北":{"pinyin":"taipei"},"高雄":{"pinyin":"gaoxiong"},"台中":{"pinyin":"taizhong"}}};

function getCityInfo(_province, _city, _town, _type) {
	var result = CITYS_DATA[_province][_city][_town][_type];
    // console.log(result);
	result = result.replace(/\//g, ' ');
	var arr = result.split(' ');
	var sp = ("pinyin" == _type) ? ' ' : '';
	if (arr.length == 3) {
		if (arr[2] == arr[1]) {
			return arr[0] + sp + arr[1];
		} else {
			return arr.join(sp);
		}		
	} else if (arr.length == 2) {
		if (arr[1] == arr[0]) {
			return arr[0];
		} else {
			return arr.join(sp);
		}
	} else {
		return '';
	}
}

function getFirstProvince() {
	for (var key in CITYS_DATA) {
		return key;
	}
	return "";
}

function getCitysByProvince(_province) {
	var arr = [];
	for (var key in CITYS_DATA[_province]) {
		arr.push([key, key]);
	}
	return arr;
}

var PROVINCES = [];
for (var key in CITYS_DATA) {
	PROVINCES.push([key, key]);
}

var CITYS = getCitysByProvince(getFirstProvince());

Blockly.Blocks['china_city'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": CategoryColors.Weather,
            "helpUrl": "",
            "tooltip": "",
            "message0": Blockly.Msg.CHINA_CITY_MESSAGE0,
            "args0": [
                {
					"options": PROVINCES,
                    "type": "field_dropdown",
                    "name": "province"
                },
                {
					"options": CITYS,
                    "type": "field_dropdown",
                    "name": "city"
                }
            ]
        });
    }
};

Blockly.Blocks['china_city_town'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": CategoryColors.Wifi,
            "helpUrl": "",
            "tooltip": "",
            "message0": Blockly.Msg.CHINA_CITY_TOWN_MESSAGE0,
            "args0": [
                {
					"options": PROVINCES,
                    "type": "field_dropdown",
                    "name": "province"
                },
                {
					"options": CITYS,
                    "type": "field_dropdown",
                    "name": "city"
                },
                {
					"options": [["-", "-"]],
                    "type": "field_dropdown",
                    "name": "town"
                },
                {
                    "options": [
						[Blockly.Msg.CHINA_CITY_PINYIN, "pinyin"],
						[Blockly.Msg.CHINA_CITY_CNNAME, "cnname"]
					],
                    "type": "field_dropdown",
                    "name": "type"
                }
            ]
        });
    }
};

// 掌控魔盒引脚
Blockly.Blocks['box_all_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": box_all_pin,
                    "type": "field_dropdown",
                    "name": "box_all_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['box_analog_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.READ_ANALOG_PIN_HELPURL,
            "tooltip": Blockly.Msg.READ_ANALOG_PIN_TOOLTIP,
            "message0": Blockly.Msg.READ_ANALOG_PIN_MESSAGE0,
            "args0": [
                {
                    "options": box_analog_pin,
                    "type": "field_dropdown",
                    "name": "box_analog_pin"
                }
            ]
        });
    }
};

// 乐动掌控引脚
Blockly.Blocks['ledong_all_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_all_pin,
                    "type": "field_dropdown",
                    "name": "ledong_all_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['ledong_analog_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.READ_ANALOG_PIN_HELPURL,
            "tooltip": Blockly.Msg.READ_ANALOG_PIN_TOOLTIP,
            "message0": Blockly.Msg.READ_ANALOG_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_analog_pin,
                    "type": "field_dropdown",
                    "name": "ledong_analog_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['ledong_analog_pin1'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.READ_ANALOG_PIN_HELPURL,
            "tooltip": Blockly.Msg.READ_ANALOG_PIN_TOOLTIP,
            "message0": Blockly.Msg.READ_ANALOG_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_analog_pin1,
                    "type": "field_dropdown",
                    "name": "ledong_analog_pin1"
                }
            ]
        });
    }
};
Blockly.Blocks['weather_station_tx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": weather_station_tx_pin,
                    "type": "field_dropdown",
                    "name": "weather_station_tx_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['weather_station_rx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": weather_station_rx_pin,
                    "type": "field_dropdown",
                    "name": "weather_station_rx_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['new1956_all_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": new1956_all_pin,
                    "type": "field_dropdown",
                    "name": "new1956_all_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['new1956_digital_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": new1956_digital_pin,
                    "type": "field_dropdown",
                    "name": "new1956_digital_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['new1956_analog_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": new1956_analog_pin,
                    "type": "field_dropdown",
                    "name": "new1956_analog_pin"
                }
            ]
        });
    }
};
Blockly.Blocks['new1956_uart_pwm_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": new1956_uart_pwm_pin,
                    "type": "field_dropdown",
                    "name": "new1956_uart_pwm_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['new1956_uart_servo_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": new1956_uart_servo_pin,
                    "type": "field_dropdown",
                    "name": "new1956_uart_servo_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['process_control_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": process_control_pin,
                    "type": "field_dropdown",
                    "name": "process_control_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['process_control_tx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": process_control_tx_pin,
                    "type": "field_dropdown",
                    "name": "process_control_tx_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['process_control_rx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": process_control_rx_pin,
                    "type": "field_dropdown",
                    "name": "process_control_rx_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['process_control_buzzer_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": [[Blockly.Msg.MPYTHON_MUSIC_PIN_P6, "6"]],
                    "type": "field_dropdown",
                    "name": "process_control_buzzer_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['joint_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": joint_analog,
                    "type": "field_dropdown",
                    "name": "joint_analog"
                }
            ]
        });
    }
};

Blockly.Blocks['joint_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": joint_digital,
                    "type": "field_dropdown",
                    "name": "joint_digital"
                }
            ]
        });
    }
};

Blockly.Blocks['joint_i2c'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": joint_i2c,
                    "type": "field_dropdown",
                    "name": "joint_i2c"
                }
            ]
        });
    }
};

Blockly.Blocks['joint_all'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": joint_all,
                    "type": "field_dropdown",
                    "name": "joint_all"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_v3_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mpython_v3_analog,
                    "type": "field_dropdown",
                    "name": "mpython_v3_analog"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_v3_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mpython_v3_digital,
                    "type": "field_dropdown",
                    "name": "mpython_v3_digital"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_v3_all'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": mpython_v3_all,
                    "type": "field_dropdown",
                    "name": "mpython_v3_all"
                }
            ]
        });
    }
};

Blockly.Blocks['ledong_v2_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_v2_analog,
                    "type": "field_dropdown",
                    "name": "ledong_v2_analog"
                }
            ]
        });
    }
};

Blockly.Blocks['ledong_v2_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_v2_digital,
                    "type": "field_dropdown",
                    "name": "ledong_v2_digital"
                }
            ]
        });
    }
};

Blockly.Blocks['ledong_v2_all'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": ledong_v2_all,
                    "type": "field_dropdown",
                    "name": "ledong_v2_all"
                }
            ]
        });
    }
};

Blockly.Blocks['logic_operation_2'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Boolean',
            "colour": CategoryColors.Logic,
            "helpUrl": 'https://github.com/google/blockly/wiki/Logic#logical-operations',
            "tooltip": '',
            "message0": '%1 %2 %3',
            "args0": [{
                type: "input_value",
                name: "A",
                check: "Boolean"
            }, {
                type: "field_dropdown",
                name: "OP",
                options: [["%{BKY_LOGIC_OPERATION_AND}", "AND"], ["%{BKY_LOGIC_OPERATION_OR}", "OR"]]
            }, {
                type: "input_value",
                name: "B",
                check: "Boolean"
            }],
            extensions: ["logic_op_tooltip"]
        });
    }
};

Blockly.Blocks['_1956_v2_all_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_all_pin,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['_1956_v2_digital_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_digital_pin,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['_1956_v2_analog_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_analog_pin,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['_1956_v2_uart_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_uart_pin,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['_1956_v2_pwm_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_pwm_pin,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['_1956_v2_uart_id'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_uart_id,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['_1956_v2_i2c_id'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.Pin,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": _1956_v2_i2c_id,
                    "type": "field_dropdown",
                    "name": "pin"
                }
            ]
        });
    }
};


const pbmList = {
	"face/1.pbm": {
		size: "64 * 64",
		url: "static/face/1.png"
	},
	"face/2.pbm": {
		size: "64 * 64",
		url: "static/face/2.png"
	},
	"face/3.pbm": {
		size: "64 * 64",
		url: "static/face/3.png"
	},
	"face/4.pbm": {
		size: "64 * 64",
		url: "static/face/4.png"
	},
	"face/5.pbm": {
		size: "64 * 64",
		url: "static/face/5.png"
	},
	"face/6.pbm": {
		size: "64 * 64",
		url: "static/face/6.png"
	},
	"face/7.pbm": {
		size: "64 * 64",
		url: "static/face/7.png"
	},
	"face/8.pbm": {
		size: "64 * 64",
		url: "static/face/8.png"
	},
	"face/9.pbm": {
		size: "64 * 64",
		url: "static/face/9.png"
	},
	"face/10.pbm": {
		size: "64 * 64",
		url: "static/face/10.png"
	},
	"face/11.pbm": {
		size: "64 * 64",
		url: "static/face/11.png"
	},
	"face/12.pbm": {
		size: "64 * 64",
		url: "static/face/12.png"
	},
	"face/rock.pbm": {
		size: "64 * 64",
		url: "static/face/rock.png"
	},
	"face/paper.pbm": {
		size: "64 * 64",
		url: "static/face/paper.png"
	},
	"face/scissors.pbm": {
		size: "64 * 64",
		url: "static/face/scissors.png"
	},
	"face/rock_s.pbm": {
		size: "32 * 32",
		url: "static/face/rock_s.png"
	},
	"face/paper_s.pbm": {
		size: "32 * 32",
		url: "static/face/paper_s.png"
	},
	"face/scissors_s.pbm": {
		size: "32 * 32",
		url: "static/face/scissors_s.png"
	},
	"face/Expressions/Big smile.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Big smile.png"
	},
	"face/Expressions/Heart large.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Heart large.png"
	},
	"face/Expressions/Heart small.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Heart small.png"
	},
	"face/Expressions/Mouth 1 open.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Mouth 1 open.png"
	},
	"face/Expressions/Mouth 1 shut.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Mouth 1 shut.png"
	},
	"face/Expressions/Mouth 2 open.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Mouth 2 open.png"
	},
	"face/Expressions/Mouth 2 shut.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Mouth 2 shut.png"
	},
	"face/Expressions/Sad.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Sad.png"
	},
	"face/Expressions/Sick.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Sick.png"
	},
	"face/Expressions/Smile.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Smile.png"
	},
	"face/Expressions/Swearing.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Swearing.png"
	},
	"face/Expressions/Talking.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Talking.png"
	},
	"face/Expressions/Wink.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/Wink.png"
	},
	"face/Expressions/ZZZ.pbm": {
		size: "89 * 64",
		url: "static/face/Expressions/ZZZ.png"
	},
	"face/Eyes/Angry.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Angry.png"
	},
	"face/Eyes/Awake.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Awake.png"
	},
	"face/Eyes/Black eye.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Black eye.png"
	},
	"face/Eyes/Bottom left.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Bottom left.png"
	},
	"face/Eyes/Bottom right.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Bottom right.png"
	},
	"face/Eyes/Crazy 1.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Crazy 1.png"
	},
	"face/Eyes/Crazy 2.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Crazy 2.png"
	},
	"face/Eyes/Disappointed.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Disappointed.png"
	},
	"face/Eyes/Dizzy.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Dizzy.png"
	},
	"face/Eyes/Down.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Down.png"
	},
	"face/Eyes/Evil.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Evil.png"
	},
	"face/Eyes/Hurt.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Hurt.png"
	},
	"face/Eyes/Knocked out.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Knocked out.png"
	},
	"face/Eyes/Love.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Love.png"
	},
	"face/Eyes/Middle left.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Middle left.png"
	},
	"face/Eyes/Middle right.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Middle right.png"
	},
	"face/Eyes/Neutral.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Neutral.png"
	},
	"face/Eyes/Nuclear.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Nuclear.png"
	},
	"face/Eyes/Pinch left.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Pinch left.png"
	},
	"face/Eyes/Pinch middle.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Pinch middle.png"
	},
	"face/Eyes/Pinch right.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Pinch right.png"
	},
	"face/Eyes/Tear.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Tear.png"
	},
	"face/Eyes/Tired left.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Tired left.png"
	},
	"face/Eyes/Tired middle.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Tired middle.png"
	},
	"face/Eyes/Tired right.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Tired right.png"
	},
	"face/Eyes/Toxic.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Toxic.png"
	},
	"face/Eyes/Up.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Up.png"
	},
	"face/Eyes/Winking.pbm": {
		size: "89 * 64",
		url: "static/face/Eyes/Winking.png"
	},
	"face/Information/Accept.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Accept.png"
	},
	"face/Information/Backward.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Backward.png"
	},
	"face/Information/Decline.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Decline.png"
	},
	"face/Information/Forward.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Forward.png"
	},
	"face/Information/Left.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Left.png"
	},
	"face/Information/No go.pbm": {
		size: "89 * 64",
		url: "static/face/Information/No go.png"
	},
	"face/Information/Question mark.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Question mark.png"
	},
	"face/Information/Right.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Right.png"
	},
	"face/Information/Stop 1.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Stop 1.png"
	},
	"face/Information/Stop 2.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Stop 2.png"
	},
	"face/Information/Thumbs down.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Thumbs down.png"
	},
	"face/Information/Thumbs up.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Thumbs up.png"
	},
	"face/Information/Warning.pbm": {
		size: "89 * 64",
		url: "static/face/Information/Warning.png"
	},
	"face/Objects/Bomb.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Bomb.png"
	},
	"face/Objects/Boom.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Boom.png"
	},
	"face/Objects/Fire.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Fire.png"
	},
	"face/Objects/Flowers.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Flowers.png"
	},
	"face/Objects/Forest.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Forest.png"
	},
	"face/Objects/Light off.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Light off.png"
	},
	"face/Objects/Light on.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Light on.png"
	},
	"face/Objects/Lightning.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Lightning.png"
	},
	"face/Objects/Night.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Night.png"
	},
	"face/Objects/Pirate.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Pirate.png"
	},
	"face/Objects/Snow.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Snow.png"
	},
	"face/Objects/Target.pbm": {
		size: "89 * 64",
		url: "static/face/Objects/Target.png"
	},
	"face/Progress/Bar 0.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Bar 0.png"
	},
	"face/Progress/Bar 1.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Bar 1.png"
	},
	"face/Progress/Bar 2.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Bar 2.png"
	},
	"face/Progress/Bar 3.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Bar 3.png"
	},
	"face/Progress/Bar 4.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Bar 4.png"
	},
	"face/Progress/Dial 0.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dial 0.png"
	},
	"face/Progress/Dial 1.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dial 1.png"
	},
	"face/Progress/Dial 2.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dial 2.png"
	},
	"face/Progress/Dial 3.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dial 3.png"
	},
	"face/Progress/Dial 4.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dial 4.png"
	},
	"face/Progress/Dots 0.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dots 0.png"
	},
	"face/Progress/Dots 1.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dots 1.png"
	},
	"face/Progress/Dots 2.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dots 2.png"
	},
	"face/Progress/Dots 3.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Dots 3.png"
	},
	"face/Progress/Hourglass 0.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Hourglass 0.png"
	},
	"face/Progress/Hourglass 1.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Hourglass 1.png"
	},
	"face/Progress/Hourglass 2.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Hourglass 2.png"
	},
	"face/Progress/Timer 0.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Timer 0.png"
	},
	"face/Progress/Timer 1.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Timer 1.png"
	},
	"face/Progress/Timer 2.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Timer 2.png"
	},
	"face/Progress/Timer 3.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Timer 3.png"
	},
	"face/Progress/Timer 4.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Timer 4.png"
	},
	"face/Progress/Water level 0.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Water level 0.png"
	},
	"face/Progress/Water level 1.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Water level 1.png"
	},
	"face/Progress/Water level 2.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Water level 2.png"
	},
	"face/Progress/Water level 3.pbm": {
		size: "89 * 64",
		url: "static/face/Progress/Water level 3.png"
	},
	"face/System/Accept_1.pbm": {
		size: "24 * 16",
		url: "static/face/System/Accept_1.png"
	},
	"face/System/Accept_2.pbm": {
		size: "24 * 16",
		url: "static/face/System/Accept_2.png"
	},
	"face/System/Alert.pbm": {
		size: "24 * 21",
		url: "static/face/System/Alert.png"
	},
	"face/System/Box.pbm": {
		size: "24 * 16",
		url: "static/face/System/Box.png"
	},
	"face/System/Busy_0.pbm": {
		size: "19 * 15",
		url: "static/face/System/Busy_0.png"
	},
	"face/System/Busy_1.pbm": {
		size: "15 * 19",
		url: "static/face/System/Busy_1.png"
	},
	"face/System/Decline_1.pbm": {
		size: "24 * 16",
		url: "static/face/System/Decline_1.png"
	},
	"face/System/Decline_2.pbm": {
		size: "24 * 16",
		url: "static/face/System/Decline_2.png"
	},
	"face/System/Dot_empty.pbm": {
		size: "31 * 31",
		url: "static/face/System/Dot_empty.png"
	},
	"face/System/Dot_full.pbm": {
		size: "31 * 31",
		url: "static/face/System/Dot_full.png"
	},
	"face/System/Play.pbm": {
		size: "16 * 16",
		url: "static/face/System/Play.png"
	},
	"face/System/Slider_0.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_0.png"
	},
	"face/System/Slider_1.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_1.png"
	},
	"face/System/Slider_2.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_2.png"
	},
	"face/System/Slider_3.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_3.png"
	},
	"face/System/Slider_4.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_4.png"
	},
	"face/System/Slider_5.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_5.png"
	},
	"face/System/Slider_6.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_6.png"
	},
	"face/System/Slider_7.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_7.png"
	},
	"face/System/Slider_8.pbm": {
		size: "12 * 27",
		url: "static/face/System/Slider_8.pbm"
	},
	"face/new_year/1.bmp": {
		size: "89 * 64",
		url: "static/face/new_year/1.png"
	},
	"face/new_year/2.bmp": {
		size: "89 * 64",
		url: "static/face/new_year/2.png"
	},
	"face/new_year/3.bmp": {
		size: "89 * 64",
		url: "static/face/new_year/3.png"
	},
	"face/new_year/4.bmp": {
		size: "89 * 64",
		url: "static/face/new_year/4.png"
	},
	"face/new_year/5.bmp": {
		size: "89 * 64",
		url: "static/face/new_year/5.png"
	}
};

export {
    button_AB,
    musical_note,
    music_tone_freq,
    music_tick,
    usocket_color,
    logic_color,
    mpython_bluebit_color,
    list_color,
    math_color,
    event_color,
    oled_color,
    buttonColor,
    pinColor,
    rgbColor,
    buzzColor,
    tuple_color,
    dict_color,
    accelerometerColor,
    wifi_color,
    iot_color,
    iot_blynk_color,
    iot_onenet_color,
    iot_tinyweb_color,
    set_color,
    extend_color,
    purple_red,
    wine_red,
    brown,
    green,
    light_blue,
    purple,
    light_green,
    yellow_green,
    bright_green,
    bright_purple,
    deep_blue ,
    read_digital,
    read_analog,
    read_analog_1,
    set_digital_state,
    set_digital,
    set_digital_1,
    set_analog,
    set_analog_1,
    all_pin ,
    all_pin_p1,
	_1956_IO,
    buzz_tone,
    dh11_hum_tem_pin,
    text_color,
    touchPad,
    axis,
    WiFi_config,
    WiFi_channel,
    uart_tx_pin,
    uart_rx_pin,
	i2c_pin,
	i2c_new_pin,
    output_pin,
    CITYS_DATA,
    getCityInfo,
    getCitysByProvince,
	pbmList,
	mpython_conn_pin_set_all,
	mpython_conn_pin_get_digital,
	mpython_conn_pin_get_analog,
	mq135_pin,
	box_all_pin,
	box_analog_pin,
	ledong_all_pin,
	ledong_analog_pin,
	ledong_analog_pin1,
	weather_station_tx_pin,
	weather_station_rx_pin,
    new1956_all_pin,
    new1956_digital_pin,
    new1956_analog_pin,
    new1956_uart_pwm_pin,
    process_control_pin,
    process_control_tx_pin,
    process_control_rx_pin,
    ledong_pin,
    ledong_pin_1,
    educore_RGB_pin,
    educore_button_pin,
    educore_light_pin,
    joint_analog,
    joint_digital,
    joint_i2c,
    joint_all,
    mpython_v3_analog,
    mpython_v3_digital,
    mpython_v3_all,
    ledong_v2_analog,
    ledong_v2_digital,
    ledong_v2_all
}