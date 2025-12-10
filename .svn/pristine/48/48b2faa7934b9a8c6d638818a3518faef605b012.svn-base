// goog.provide('Blockly.Python.mpython');
// goog.require('Blockly.Python');

import * as Blockly from 'blockly/core';
import 'blockly/python'
import {CITYS_DATA,getCityInfo} from './global_var_block'
import {CategoryColors} from '@/global/colors'

Blockly.BlockSvg.SEP_SPACE_X = 8;

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

var writeUTF = function (str, isGetBytes) {
    var back = [];
    var byteSize = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (0x00 <= code && code <= 0x7f) {
            byteSize += 1;
            back.push(code);
        } else if (0x80 <= code && code <= 0x7ff) {
            byteSize += 2;
            back.push((192 | (31 & (code >> 6))));
            back.push((128 | (63 & code)))
        } else if ((0x800 <= code && code <= 0xd7ff) || (0xe000 <= code && code <= 0xffff)) {
            byteSize += 3;
            back.push((224 | (15 & (code >> 12))));
            back.push((128 | (63 & (code >> 6))));
            back.push((128 | (63 & code)))
        }
    }
    for (i = 0; i < back.length; i++) {
        back[i] &= 0xff;
    }
    if (isGetBytes) {
        return back;
    }
    if (byteSize <= 0xff) {
        return [0, byteSize].concat(back);
    } else {
        return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
}

var toUTF8Hex = function (str) {
    var charBuf = writeUTF(str, true);
    var re = '';
    for (var i = 0; i < charBuf.length; i++) {
        var x = (charBuf[i] & 0xFF).toString(16);
        if (x.length === 1) {
            x = '0' + x;
        }
        re += x;
    }
    return re;
}




Blockly.Python['i2c_pin'] = function (block) {
    var i2c_pin = block.getFieldValue('i2c_pin');
    var code = `${i2c_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['i2c_new_pin'] = function (block) {
    var i2c_new_pin = block.getFieldValue('i2c_new_pin');
    var code = `${i2c_new_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['uart_rx_pin'] = function (block) {
    var uart_rx_pin = block.getFieldValue('uart_rx_pin');
    var code = `${uart_rx_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['uart_tx_pin'] = function (block) {
    var uart_tx_pin = block.getFieldValue('uart_tx_pin');
    var code = `${uart_tx_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['dh11_hum_tem_pin'] = function (block) {
    var dh11_hum_tem_pin = block.getFieldValue('dh11_hum_tem_pin');
    var code = `${dh11_hum_tem_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['mq135_pin'] = function (block) {
    var mq135_pin = block.getFieldValue('mq135_pin');
    var code = `${mq135_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//掌控板直连的所有输出设备可用引脚
Blockly.Python['mpython_conn_pin_set_all'] = function (block) {
    var mpython_conn_pin_set_all = block.getFieldValue('mpython_conn_pin_set_all');
    var code = `${mpython_conn_pin_set_all}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//掌控板直连的数字输入设备可用引脚
Blockly.Python['mpython_conn_pin_get_digital'] = function (block) {
    var mpython_conn_pin_get_digital = block.getFieldValue('mpython_conn_pin_get_digital');
    var code = `${mpython_conn_pin_get_digital}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//掌控板直连的模拟输入设备可用引脚
Blockly.Python['mpython_conn_pin_get_analog'] = function (block) {
    var mpython_conn_pin_get_analog = block.getFieldValue('mpython_conn_pin_get_analog');
    var code = `${mpython_conn_pin_get_analog}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pwm_pin'] = function (block) {
    var pwm_pin = block.getFieldValue('pwm_pin');
    var code = `${pwm_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['1956_input_pin'] = function (block) {
    var all_pin = block.getFieldValue('1956_input_pin');
    var code = `${all_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['all_pin'] = function (block) {
  var all_pin = block.getFieldValue('all_pin');
  var code = `${all_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['all_pin_p1'] = function (block) {
  var all_pin = block.getFieldValue('all_pin_p1');
  var code = `${all_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_pin'] = function (block) {
  var ledong_pin = block.getFieldValue('ledong_pin');
  var code = `${ledong_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_pin_1'] = function (block) {
  var ledong_pin_1 = block.getFieldValue('ledong_pin_1');
  var code = `${ledong_pin_1}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['educore_RGB_pin'] = function (block) {
  var educore_RGB_pin = block.getFieldValue('educore_RGB_pin');
  var code = `${educore_RGB_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['educore_button_pin'] = function (block) {
  var educore_button_pin = block.getFieldValue('educore_button_pin');
  var code = `${educore_button_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['educore_light_pin'] = function (block) {
  var educore_light_pin = block.getFieldValue('educore_light_pin');
  var code = `${educore_light_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['set_analog'] = function (block) {
    var set_analog = block.getFieldValue('set_analog');
    var code = `${set_analog}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['set_digital'] = function (block) {
    var set_digital = block.getFieldValue('set_digital');
    var code = `${set_digital}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['read_analog_pin'] = function (block) {
    var read_analog_pin = block.getFieldValue('read_analog_pin');

    var code = `${read_analog_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['read_digital_pin'] = function (block) {
    var read_digital_pin = block.getFieldValue('read_digital_pin');

    var code = `${read_digital_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['input_pin'] = function (block) {
    var input_pin = block.getFieldValue('input_pin');
    var code = `${input_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['output_pin'] = function (block) {
    var output_pin = block.getFieldValue('output_pin');
    var code = `${output_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['china_city'] = function (block) {
    var _province = block.getFieldValue('province');
    var _city = block.getFieldValue('city');
    //var _type = block.getFieldValue('type');
    var code = '"' + CITYS_DATA[_province][_city]['pinyin'] + '"';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['china_city_town'] = function (block) {
    var _province = block.getFieldValue('province');
    var _city = block.getFieldValue('city');
    var _town = block.getFieldValue('town');
    var _type = block.getFieldValue('type');
    var code = '"' + getCityInfo(_province, _city, _town, _type) + '"';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['box_all_pin'] = function (block) {
  var box_all_pin = block.getFieldValue('box_all_pin');
  var code = `${box_all_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['box_analog_pin'] = function (block) {
  var box_analog_pin = block.getFieldValue('box_analog_pin');
  var code = `${box_analog_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['ledong_all_pin'] = function (block) {
  var ledong_all_pin = block.getFieldValue('ledong_all_pin');
  var code = `${ledong_all_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_analog_pin'] = function (block) {
  var ledong_analog_pin = block.getFieldValue('ledong_analog_pin');
  var code = `${ledong_analog_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_analog_pin1'] = function (block) {
  var ledong_analog_pin1 = block.getFieldValue('ledong_analog_pin1');
  var code = `${ledong_analog_pin1}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['weather_station_tx_pin'] = function (block) {
  var weather_station_tx_pin = block.getFieldValue('weather_station_tx_pin');
  var code = `${weather_station_tx_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['weather_station_rx_pin'] = function (block) {
  var weather_station_rx_pin = block.getFieldValue('weather_station_rx_pin');
  var code = `${weather_station_rx_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['new1956_all_pin'] = function (block) {
  var new1956_all_pin = block.getFieldValue('new1956_all_pin');
  var code = `${new1956_all_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['new1956_digital_pin'] = function (block) {
  var new1956_digital_pin = block.getFieldValue('new1956_digital_pin');
  var code = `${new1956_digital_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['new1956_analog_pin'] = function (block) {
  var new1956_analog_pin = block.getFieldValue('new1956_analog_pin');
  var code = `${new1956_analog_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['new1956_uart_pwm_pin'] = function (block) {
  var new1956_uart_pwm_pin = block.getFieldValue('new1956_uart_pwm_pin');
  var code = `${new1956_uart_pwm_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['new1956_uart_servo_pin'] = function (block) {
  var new1956_uart_servo_pin = block.getFieldValue('new1956_uart_servo_pin');
  var code = `${new1956_uart_servo_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['process_control_pin'] = function (block) {
  var process_control_pin = block.getFieldValue('process_control_pin');
  var code = `${process_control_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['process_control_tx_pin'] = function (block) {
  var process_control_tx_pin = block.getFieldValue('process_control_tx_pin');
  var code = `${process_control_tx_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['process_control_rx_pin'] = function (block) {
  var process_control_rx_pin = block.getFieldValue('process_control_rx_pin');
  var code = `${process_control_rx_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['process_control_buzzer_pin'] = function (block) {
  var process_control_buzzer_pin = block.getFieldValue('process_control_buzzer_pin');
  var code = `${process_control_buzzer_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['joint_analog'] = function (block) {
  var joint_analog = block.getFieldValue('joint_analog');
  var code = `${joint_analog}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['joint_digital'] = function (block) {
  var joint_digital = block.getFieldValue('joint_digital');
  var code = `${joint_digital}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['joint_i2c'] = function (block) {
  var joint_i2c = block.getFieldValue('joint_i2c');
  var code = `${joint_i2c}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['joint_all'] = function (block) {
  var joint_all = block.getFieldValue('joint_all');
  var code = `${joint_all}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_v3_analog'] = function (block) {
  var pin = block.getFieldValue('mpython_v3_analog');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_v3_digital'] = function (block) {
  var pin = block.getFieldValue('mpython_v3_digital');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_v3_all'] = function (block) {
  var pin = block.getFieldValue('mpython_v3_all');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_v2_analog'] = function (block) {
  var pin = block.getFieldValue('ledong_v2_analog');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_v2_digital'] = function (block) {
  var pin = block.getFieldValue('ledong_v2_digital');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ledong_v2_all'] = function (block) {
  var pin = block.getFieldValue('ledong_v2_all');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_all_pin'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_digital_pin'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_analog_pin'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_uart_pin'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_pwm_pin'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_uart_id'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['_1956_v2_i2c_id'] = function (block) {
  var pin = block.getFieldValue('pin');
  var code = `${pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['logic_operation_2'] = function (block) {
  var b = "AND" == block.getFieldValue("OP") ? "and" : "or";
  var c = "and" == b ? Blockly.Python.ORDER_LOGICAL_AND : Blockly.Python.ORDER_LOGICAL_OR;
  var d = Blockly.Python.valueToCode(block, "A", c);
  var a = Blockly.Python.valueToCode(block, "B", c);
  if (d || a) {
      var e = "and" == b ? "True" : "False";
      d || (d = e);
      a || (a = e)
  } else
  a = d = "False";
  return ["(" + d + " " + b + " " + a + ")", c]
};













Blockly.Blocks['math_on_list'] = {
    /**
     * Block for evaluating a list of numbers to return sum, average, min, max,
     * etc.  Some functions also work on text (min, max, mode, median).
     * @this Blockly.Block
     */
    init: function() {
      var OPERATORS =
          [[Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, 'SUM'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, 'MIN'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, 'MAX'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, 'AVERAGE'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, 'MEDIAN'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, 'MODE'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, 'STD_DEV'],
           [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, 'RANDOM']];
      // Assign 'this' to a variable for use in the closures below.
      var thisBlock = this;
      this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL);
      this.setColour(Blockly.Blocks.math.HUE);
      this.setOutput(true, 'Number');
      var dropdown = new Blockly.FieldDropdown(OPERATORS, function(newOp) {
        thisBlock.updateType_(newOp);
      });
      this.appendValueInput('LIST')
          .setCheck('Array')
          .appendField(dropdown, 'OP');
      this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('OP');
        var TOOLTIPS = {
          'SUM': Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
          'MIN': Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
          'MAX': Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
          'AVERAGE': Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
          'MEDIAN': Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
          'MODE': Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
          'STD_DEV': Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
          'RANDOM': Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM
        };
        return TOOLTIPS[mode];
      });
    },
    /**
     * Modify this block to have the correct output type.
     * @param {string} newOp Either 'MODE' or some op than returns a number.
     * @private
     * @this Blockly.Block
     */
    updateType_: function(newOp) {
      if (newOp == 'MODE') {
        this.outputConnection.setCheck('Array');
      } else {
        this.outputConnection.setCheck('Number');
      }
    },
    /**
     * Create XML to represent the output type.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
      var container = document.createElement('mutation');
      container.setAttribute('op', this.getFieldValue('OP'));
      return container;
    },
    /**
     * Parse XML to restore the output type.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
      this.updateType_(xmlElement.getAttribute('op'));
    }
  };
Blockly.Python['math_on_list'] = function(block) {
  // Math functions for lists.
  var func = block.getFieldValue('OP');
  var list = Blockly.Python.valueToCode(block, 'LIST',
      Blockly.Python.ORDER_NONE) || '[]';
  var code;
  var functionName;
  switch (func) {
    case 'SUM':
      code = 'sum(' + list + ')';
      break;
    case 'MIN':
      code = 'min(' + list + ')';
      break;
    case 'MAX':
      code = 'max(' + list + ')';
      break;
    case 'AVERAGE':
        functionName = Blockly.Python.provideFunction_(
          'math_mean',
          // This operation excludes null and values that aren't int or float:',
          // math_mean([null, null, "aString", 1, 9]) == 5.0.',
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(myList):',
           '  return float(sum(myList)) / len(myList)']);
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
        functionName = Blockly.Python.provideFunction_(
          'math_median',
          // This operation excludes null values:
          // math_median([null, null, 1, 3]) == 2.0.
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(myList):',
           '  localList = sorted(myList)',
           '  if not localList: return',
           '  if len(localList) % 2 == 0:',
           '    return (localList[len(localList) // 2 - 1] + ' +
               'localList[len(localList) // 2]) / 2.0',
           '  else:',
           '    return localList[(len(localList) - 1) // 2]']);
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
        functionName = Blockly.Python.provideFunction_(
          'math_modes',
          // As a list of numbers can contain more than one mode,
          // the returned result is provided as an array.
          // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(some_list):',
           '  modes = []',
           '  # Using a lists of [item, count] to keep count rather than dict',
           '  # to avoid "unhashable" errors when the counted item is ' +
               'itself a list or dict.',
           '  counts = []',
           '  maxCount = 1',
           '  for item in some_list:',
           '    found = False',
           '    for count in counts:',
           '      if count[0] == item:',
           '        count[1] += 1',
           '        maxCount = max(maxCount, count[1])',
           '        found = True',
           '    if not found:',
           '      counts.append([item, 1])',
           '  for counted_item, item_count in counts:',
           '    if item_count == maxCount:',
           '      modes.append(counted_item)',
           '  return modes']);
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      Blockly.Python.definitions_['import_math'] = 'import math';
        functionName = Blockly.Python.provideFunction_(
          'math_standard_deviation',
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(numbers):',
           '  n = len(numbers)',
           '  if n == 0: return',
           '  mean = float(sum(numbers)) / n',
           '  variance = sum((x - mean) ** 2 for x in numbers) / n',
           '  return math.sqrt(variance)']);
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      Blockly.Python.definitions_['import_random'] = 'import random';
      code = 'random.choice(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = Blockly.Python.valueToCode(block, 'NUMBER_TO_CHECK',
      Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    Blockly.Python.definitions_['import_math'] = 'import math';
    Blockly.Python.functions_['def_is_number'] =
'def is_number(thing):\n' +
'    try:\n' +
'        thing + 1\n' +
'        return True\n' +
'    except TypeError:\n' +
'        return False\n';
    var functionName = Blockly.Python.provideFunction_(
        'math_isPrime',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(n):',
         '  # If n is not a number but a string, try parsing it.',
         '  if not is_number(n):',
         '    try:',
         '      n = float(n)',
         '    except:',
         '      return False',
         '  if n == 2 or n == 3:',
         '    return True',
         '  # False if n is negative, is 1, or not whole,' +
             ' or if n is divisible by 2 or 3.',
         '  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:',
         '    return False',
         '  # Check all the numbers of form 6k +/- 1, up to sqrt(n).',
         '  for x in range(6, int(math.sqrt(n)) + 2, 6):',
         '    if n % (x - 1) == 0 or n % (x + 1) == 0:',
         '      return False',
         '  return True']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.Python.valueToCode(block, 'DIVISOR',
          Blockly.Python.ORDER_MULTIPLICATIVE);
      // If 'divisor' is some code that evals to 0, Python will raise an error.
      if (!divisor || divisor == '0') {
        return ['False', Blockly.Python.ORDER_ATOMIC];
      }
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.Python.ORDER_RELATIONAL];
};


const MPYTHON_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsSAAALEgHS3X78AAAFU0lEQVRYhe1YbWxTVRh+bm/be3t7Wdf1Yxsr3VwnZBLmQpFEEdhgZgOFZCFGE3USfxj2gzD+SUICMUSCLsEf/lhEjb8MiRpFDGBkaIBAIqywEGfYYGyjY+3GvmD92tp7zTldL7trS4crCyZ7mpOe85zzvue573vuOfdeRpZlPMvQPNPq/g8CtanIM6dPlXg8ns8DgWDu+vWv7qzbsrXnaQk4c/pUFYCq6ea3s+dSrcHN1VXFGpZtjU5FXblmM+WCExOQpvstuTpavL4IguGYYvfymjLcujOIoeEHKu7y1VsqMansNQwgGEVaDweDmIpFfzvbeq4uYaOkOCFOw2pdgIyR+/cxOjKCqckINCwL90oRFc+Fsfp5Ce+8bobRqKM86TOKRlitOUqbFLPZqGq/4BKo/QpHBA3bTIo9IwMGnkdsagqyLIHV6mprNm/6IUmgLKM+Lg7Q8wbsP3AAh48cgc4g0H5BG4D7xeKIzOZc9PlHUblCVCJzo6MvYyotYghFSy2Tgmi52D8wjsrlhvi8LIvvjh/HocOHIWvYeFrBlCUJnA2Xy4X8/HxaCEQjB59/TF9o5VbR1IfjiSf9hUuLaN1kMqHY6QTP89BzglIn0Op0gBTVJezBsKoZA4FASh1pBTY2NtLi9/tp++8eDcKTEtPRedckLLGh/eYE5etqa9HQ8AG6uv1Y5SzAnqY9sNtsGBrToGlvE60T3L6npfYXr3SZBNGMy+2P1mttbS0OHjyYUodyk2yqqmrScdzRdILTgUSQ5zj09vXBlcMjmmuHf3AQHMch12Si9XA4/EQ+pWi0/ffW1kqk22ZmYo3bjbVr16pJWUbK8ycdn4b1DQzg519OPnb+jAIdDgccy5bhq2PHnjgSj4Pdbkd1dXXGcRkFEnja2tB9507WxBF4vd45CVw8i+eLJIFk/yPlmRVI9qN0e9LThCiK2LVrFyoqKlSzJN0kPp9vwcURlJaWor6+nmbvusej8EkCm5ubF1obRXd3N1paWnDp0iUVr0oxORVEo0BL4gxeKKx02jHefgEby52qGee0Dy4E7BYz8kISzIUF6QXSB4PpyCUeEghWu93weDxZP0lm4uSFtnjrqvrhPSmCM4UlYLVa8dG+fVkTl8A/HR0ZxyyeJPNFxpskGAjMKRX/BX29vRmtMgo8e+4c2q5dy+go3ReKx325iEajGf1mFChJEoaHhzM6InAWcNi+MQ/fnPAr7yzzRVbX4JuvWcc7ewLNb9fZsuYzqwIv33hoKneJu4+fGcqaT1WKi5dyMPJqzT0DEZQUcrQ+EZQgChrKGXkWNrN6hVy/OYGu3hBny9NRPzEZYJm4D5tZl9J3Kr7XG1TeSVU90aAXroIJ7P/QQYuv/yYVR/4b3jCh8a18hB70YMs6M97daqb1mWMJr5fvoaIkSLmd223468oV6sNmHINVHE7yTeYkNjP5smKDIaFJ9dr58W7X0fJSg+pqDn3ppYb0ygYiKC7k8OPZEQgGDZY7ebiW8egfnEQ0JuPX82PY9FIOiA8yVq9jUGjVUx87aiyUJ/XyUgE7avIUnkSx5XsfNrhzaDny9d3bn35xoiwpxU8CcvVEHI18TKbCCyy6R8tlelnMRkd3aJrJU3qGRqcoT4TPhiKQYfCTlsUnAAy374ah1TLKuuvsCYHjNNCyzJwv4XzbQ2hZ4JXKJSq+YZsNs7M0G3o905+glDXY+sefvTki+1koIkkkMiQCpAg8sLzEQOtFdj0dS75CqV7Rp6sz+Q3uJSjKj48ne2mCr1uXq0Q3wZOfFItRe9/9yYd733O8rwRu8Rv1PLEocF4A8C/hIf563CPoigAAAABJRU5ErkJggg==";

Blockly.Blocks['mpython_main'] = {
    init: function() {
        this.setColour(CategoryColors.Event);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(MPYTHON_ICON, 18, 18))
            .appendField(Blockly.Msg.MPYTHON_MAIN_MESSAGE0);
        this.setNextStatement(true, null);
    }/*
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
			"colour": CategoryColors.Event,
			"helpUrl": Blockly.Msg.MPYTHON_MAIN_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAIN_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAIN_MESSAGE0,
		});
	}*/
};

Blockly.Blocks['mpython3_main'] = {
    init: function() {
        this.setColour(CategoryColors.Event);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(MPYTHON_ICON, 18, 18))
            .appendField(Blockly.Msg.MPYTHON_MAIN_MESSAGE0);
        this.appendStatementInput('DO');
        //this.setNextStatement(true, null);
    }/*
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
			"colour": CategoryColors.Event,
			"helpUrl": Blockly.Msg.MPYTHON_MAIN_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAIN_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAIN_MESSAGE0,
		});
	}*/
};

Blockly.Python['mpython3_main'] = function (block) {
    let code = Blockly.Python.statementToCode(block, 'DO') || '';
    return code.replace(/^ {4}/gm, '');
};

Blockly.Python['mpython_main'] = function (block) {
    return '';
};

export {
    writeUTF,
    toUTF8Hex
}