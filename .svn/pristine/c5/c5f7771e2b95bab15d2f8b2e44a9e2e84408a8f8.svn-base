//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');
//goog.require('Blockly.Python');
import * as Blockly from 'blockly/core';
import 'blockly/python'
import { CategoryColors } from '@/global/colors'
//import { toUTF8Hex } from './global_var'
import {
  getCitysByProvince,
  getCityInfo,
}
  from './global_var_block'
var inputs = null




/*** 
basics 
blocks 
***/
Blockly.Blocks.loops.HUE = CategoryColors.Loop;
Blockly.Blocks.logic.HUE = CategoryColors.Logic;
Blockly.Blocks.texts.HUE = CategoryColors.Text;
Blockly.Blocks.math.HUE = CategoryColors.Math;
Blockly.Blocks.lists.HUE = CategoryColors.List;

Blockly.Blocks['text_list'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(CategoryColors.List);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TEXT_LIST_START)
      .appendField(new Blockly.FieldTextInput(''), 'TEXT')
      .appendField(Blockly.Msg.TEXT_LIST_END)
    this.setOutput(true, 'Array');
  }
};

Blockly.Blocks['text_tuple'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(CategoryColors.Tuple);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TEXT_TUPLE_START)
      .appendField(new Blockly.FieldTextInput(''), 'TEXT')
      .appendField(Blockly.Msg.TEXT_TUPLE_END)
    this.setOutput(true, 'Array');
  }
};

Blockly.Blocks['text_dict'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(CategoryColors.Dictionary);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TEXT_DICT_START)
      .appendField(new Blockly.FieldTextInput(''), 'TEXT')
      .appendField(Blockly.Msg.TEXT_DICT_END)
    this.setOutput(true, 'Array');
  }
};

Blockly.Blocks['math_division_consult'] = {
  /**
   * Block for consult of a division.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_DIVISION_CONSULT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "DIVIDEND",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DIVISOR",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "tooltip": Blockly.Msg.MATH_DIVISION_CONSULT_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_DIVISION_CONSULT_HELPURL
    });
  }
};

Blockly.Blocks['math_convert'] = {
  /**
   * Block for convert math number.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_CONVERT_MESSAGE0,
      "args0": [
        {
          "type": "field_dropdown",
          // "options": [["int", 'int'], ["long", 'long'], ["float", 'float']],
          "options": [["int", 'int'], ["float", 'float']],
          "name": "TYPE0"
        },
        {
          "type": "input_value",
          "name": "INPUT0",
          "check": ["Number", "String"]
        }
      ],
      "output": "Number",
      "colour": CategoryColors.Math,
      "tooltip": Blockly.Msg.MATH_CONVERT_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_CONVERT_HELPURL
    });
  }
};

Blockly.Blocks['math_number_bits_ops'] = {
  /**
   * Block for bits ops.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_NUMBER_BITS_OPS_MESSAGE0,
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "options": [["|", ' | '], ["&", ' & '], ["^", ' ^ '], ["<<", ' << '], [">>", ' >> ']],
          "name": "OP"
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "tooltip": Blockly.Msg.MATH_NUMBER_BITS_OPS_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_NUMBER_BITS_OPS_HELPURL
    });
  }
};

Blockly.Blocks['text_indexOf'] = {
  /**
   * Block for finding a substring in the text.
   * @this Blockly.Block
   */
  init: function () {
    var OPERATORS =
      [[Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, 'FIRST'],
      [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, 'LAST']];
    this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(true, 'Number');
    this.appendValueInput('VALUE')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);
    this.appendValueInput('FIND')
      .setCheck('String')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'END');
    if (Blockly.Msg.TEXT_INDEXOF_TAIL) {
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL);
    }
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      return Blockly.Msg.TEXT_INDEXOF_TOOLTIP.replace('%1',
        thisBlock.workspace.options.oneBasedIndex ? '0' : '-1');
    });
  }
};

Blockly.Blocks['text_charAt'] = {
  /**
   * Block for getting a character from the string.
   * @this Blockly.Block
   */
  init: function () {
    this.WHERE_OPTIONS =
      [[Blockly.Msg.TEXT_CHARAT_FROM_START, 'FROM_START'],
      [Blockly.Msg.TEXT_CHARAT_FROM_END, 'FROM_END'],
      [Blockly.Msg.TEXT_CHARAT_FIRST, 'FIRST'],
      [Blockly.Msg.TEXT_CHARAT_LAST, 'LAST'],
      [Blockly.Msg.TEXT_CHARAT_RANDOM, 'RANDOM']];
    this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(true, 'String');
    this.appendValueInput('VALUE')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT);
    this.appendDummyInput('AT');
    this.setInputsInline(true);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var where = thisBlock.getFieldValue('WHERE');
      var tooltip = Blockly.Msg.TEXT_CHARAT_TOOLTIP;
      if (where == 'FROM_START' || where == 'FROM_END') {
        var msg = (where == 'FROM_START') ?
          Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP :
          Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP;
        tooltip += '  ' + msg.replace('%1',
          thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
      }
      return tooltip;
    });
  },
  /**
   * Create XML to represent whether there is an 'AT' input.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function () {
    var container = document.createElement('mutation');
    var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'at' defaults to true.
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  },
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function (isAt) {
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL')
          .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT');
    }
    if (Blockly.Msg.TEXT_CHARAT_TAIL) {
      this.removeInput('TAIL', true);
      this.appendDummyInput('TAIL')
        .appendField(Blockly.Msg.TEXT_CHARAT_TAIL);
    }
    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE');
        return null;
      }
      return undefined;
    });
    this.getInput('AT').appendField(menu, 'WHERE');
  }
};

function inTriggerEvent(block) {
  var parentBlock = block.getParent();
  do {
    if (parentBlock) {
      //if ( (parentBlock.type == 'mpython_Interrupt_pin') || (parentBlock.type == 'mpython_Interrupt_AB') ) {
      if (["mpython2_button_event", "mpython2_touchpad_event", "mpython_Interrupt_pin"].indexOf(parentBlock.type) >= 0) {
        return true;
      }
      parentBlock = parentBlock.getParent();
    } else {
      break;
    }
  }
  while (parentBlock);
  return false;
}

function disableBlock(evt, block) {
  if (evt.blockId != block.id) return;
  if (evt.type == 'ui') return;
  if (evt.type == 'move') {
    if (evt.newInputName != 'DO') {
      if (!inTriggerEvent(block)) return;
    }
    var parentBlock = block.getParent();
    var legal = false;
    do {
      if (parentBlock) {
        //if ( (parentBlock.type == 'mpython_Interrupt_pin') || (parentBlock.type == 'mpython_Interrupt_AB') ) {
        if (["mpython3_button_event", "mpython3_touchpad_event", "mpython2_button_event", "mpython2_touchpad_event", "mpython_Interrupt_pin"].indexOf(parentBlock.type) >= 0) {
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

Blockly.Blocks['controls_repeat_forever'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_FOREVER,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_FOREVER_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO')
      .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  },
  onchange: function (e) {
    disableBlock(e, this);
  }
};

Blockly.Blocks['controls_repeat_ext'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO')
      .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  },
  onchange: function (e) {
    disableBlock(e, this);
  }
};

Blockly.Blocks['controls_repeat'] = {
  /**
   * Block for repeat n times (internal number).
   * The 'controls_repeat_ext' block is preferred as it is more flexible.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
      "args0": [
        {
          "type": "field_number",
          "name": "TIMES",
          "value": 10,
          "min": 0,
          "precision": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO')
      .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  },
  onchange: function (e) {
    disableBlock(e, this);
  }
};

Blockly.Blocks['controls_whileUntil'] = {
  /**
   * Block for 'do while/until' loop.
   * @this Blockly.Block
   */
  init: function () {
    var OPERATORS =
      [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
      [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.appendStatementInput('DO')
      .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
      };
      return TOOLTIPS[op];
    });
  },
  onchange: function (e) {
    disableBlock(e, this);
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
      }
      ]
    });
  }
};

Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.LOOP_TYPES.push('controls_repeat_forever');
Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.LOOP_TYPES.push('tello_repeat_forever');

Blockly.Blocks['math_random_int_time'] = {
  init: function () {
    this.jsonInit({
      "inputsInline": true,
      'output': "Number",
      "colour": CategoryColors.Math,
      "helpUrl": Blockly.Msg.MATH_RANDOM_INT_HELPURL,
      "tooltip": Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
      "message0": Blockly.Msg.MATH_RANDOM_INT_TITLE,
      "args0": [{
        "check": "Number",
        "type": "input_value",
        "name": "FROM"
      }, {
        "check": "Number",
        "type": "input_value",
        "name": "TO"
      }]
    });
  }
};

/*** 
basics 
generators 
***/
Blockly.Python['controls_repeat_forever'] = function (block) {
  // Do while/until loop.
  //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  return 'while True:\n' + branch;
};

Blockly.Python['text_list'] = function (block) {
  var code = Blockly.Python.quote_empty(block.getFieldValue('TEXT'));
  code = '[' + code + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_tuple'] = function (block) {
  var code = Blockly.Python.quote_empty(block.getFieldValue('TEXT'));
  code = '(' + code + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_dict'] = function (block) {
  var code = Blockly.Python.quote_empty(block.getFieldValue('TEXT'));
  code = '{' + code + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['math_division_consult'] = function (block) {
  // Remainder computation.
  var argument0 = Blockly.Python.valueToCode(block, 'DIVIDEND',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'DIVISOR',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  var code = argument0 + ' // ' + argument1;
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['math_convert'] = function (block) {
  var convertTo = block.getFieldValue('TYPE0');
  var input = Blockly.Python.valueToCode(block, 'INPUT0', Blockly.Python.ORDER_ATOMIC);
  var code = convertTo + '(' + input + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_dict'] = function (block) {
  var code = Blockly.Python.quote_empty(block.getFieldValue('TEXT'));
  code = '{' + code + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['math_number_bits_ops'] = function (block) {
  var OPERATORS = {
    ' | ': [' | ', Blockly.Python.ORDER_BITWISE_OR],
    ' & ': [' & ', Blockly.Python.ORDER_BITWISE_AND],
    ' ^ ': [' ^ ', Blockly.Python.ORDER_BITWISE_XOR],
    ' >> ': [' >> ', Blockly.Python.ORDER_BITWISE_SHIFT],
    ' << ': [' << ', Blockly.Python.ORDER_BITWISE_SHIFT]
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Python['text_indexOf'] = function (block) {
  // Search the text for a substring.
  // Should we allow for non-case sensitive???
  var operator = block.getFieldValue('END') == 'FIRST' ? 'find' : 'rfind';
  var substring = Blockly.Python.valueToCode(block, 'FIND',
    Blockly.Python.ORDER_NONE) || '\'\'';
  var text = Blockly.Python.valueToCode(block, 'VALUE',
    Blockly.Python.ORDER_MEMBER) || '\'\'';
  var code = text + '.' + operator + '(' + substring + ')';
  if (block.workspace.options.oneBasedIndex) {
    return [code + ' + 1', Blockly.Python.ORDER_ADDITIVE];
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_charAt'] = function (block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var text = Blockly.Python.valueToCode(block, 'VALUE',
    Blockly.Python.ORDER_MEMBER) || '\'\'';
  let code = '';
  let at = '';
  switch (where) {
    case 'FIRST':
      code = text + '[0]';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'LAST':
      code = text + '[-1]';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'FROM_START':
      at = Blockly.Python.getAdjustedInt(block, 'AT');
      code = text + '[' + at + ']';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'FROM_END':
      at = Blockly.Python.getAdjustedInt(block, 'AT', 1, true);
      code = text + '[' + at + ']';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'RANDOM':
      Blockly.Python.definitions_['import_random'] = 'import random';
      var functionName = Blockly.Python.provideFunction_(
        'text_random_letter',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(text):',
          '  x = int(random.random() * len(text))',
          '  return text[x];']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

//text，不带引号
Blockly.Python.quote_empty = function (string) {
  // return  '[' + string + ']';
  return string;
};

Blockly.Python['math_change'] = function (block) {
  // Add to a variable in place.
  //Blockly.Python.definitions_['from_numbers_import_Number'] ='from numbers import Number';
  var argument0 = Blockly.Python.valueToCode(block, 'DELTA',
    Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
  return varName + " = " + varName + " + " + argument0 + "\n"
};

Blockly.Python['math_random_int_time'] = function (block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.functions_['random_seed'] = 'random.seed(time.ticks_cpu())';
  if (localStorage.modeSate==1) Blockly.Python.functions_['random_seed'] = 'random.seed(time.time())';
  // Random integer between [X] and [Y].
  Blockly.Python.definitions_['import_random'] = 'import random';
  var argument0 = Blockly.Python.valueToCode(block, 'FROM',
    Blockly.Python.ORDER_NONE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'TO',
    Blockly.Python.ORDER_NONE) || '0';
  var code = 'random.randint(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['math_random_float'] = function () {
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.functions_['random_seed'] = 'random.seed(time.ticks_cpu())';
  if (localStorage.modeSate == 1) Blockly.Python.functions_['random_seed'] = 'random.seed(time.time())';
  // Random fraction between 0 and 1.
  Blockly.Python.definitions_['import_random'] = 'import random';
  return ['random.random()', Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['controls_for'] = function (block) {
  // For loop.
  var variable0 = Blockly.Python.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Python.valueToCode(block, 'FROM',
    Blockly.Python.ORDER_NONE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'TO',
    Blockly.Python.ORDER_NONE) || '0';
  var increment = Blockly.Python.valueToCode(block, 'BY',
    Blockly.Python.ORDER_NONE) || '1';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = '';
  var range;

  // Helper functions.
  var defineUpRange = function () {
    return Blockly.Python.provideFunction_(
      'upRange',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
        '(start, stop, step):',
        '  while start <= stop:',
        '    yield start',
        '    start += abs(step)']);
  };
  var defineDownRange = function () {
    return Blockly.Python.provideFunction_(
      'downRange',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
        '(start, stop, step):',
        '  while start >= stop:',
        '    yield start',
        '    start -= abs(step)']);
  };
  // Arguments are legal Python code (numbers or strings returned by scrub()).
  var generateUpDownRange = function (start, end, inc) {
    return '(' + start + ' <= ' + end + ') and ' +
      defineUpRange() + '(' + start + ', ' + end + ', ' + inc + ') or ' +
      defineDownRange() + '(' + start + ', ' + end + ', ' + inc + ')';
  };

  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
    Blockly.isNumber(increment)) {
    // All parameters are simple numbers.
    argument0 = parseFloat(argument0);
    argument1 = parseFloat(argument1);
    increment = Math.abs(parseFloat(increment));
    if (argument0 % 1 === 0 && argument1 % 1 === 0 && increment % 1 === 0) {
      // All parameters are integers.
      if (argument0 <= argument1) {
        // Count up.
        argument1++;
        if (argument0 == 0 && increment == 1) {
          // If starting index is 0, omit it.
          range = argument1;
        } else {
          range = argument0 + ', ' + argument1;
        }
        // If increment isn't 1, it must be explicit.
        if (increment != 1) {
          range += ', ' + increment;
        }
      } else {
        // Count down.
        argument1--;
        range = argument0 + ', ' + argument1 + ', -' + increment;
      }
      range = 'range(' + range + ')';
    } else {
      // At least one of the parameters is not an integer.
      if (argument0 < argument1) {
        range = defineUpRange();
      } else {
        range = defineDownRange();
      }
      range += '(' + argument0 + ', ' + argument1 + ', ' + increment + ')';
    }
  } else {
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var scrub = function (arg, suffix) {
      if (Blockly.isNumber(arg)) {
        // Simple number.
        arg = parseFloat(arg);
      } else if (arg.match(/^\w+$/)) {
        // Variable.
        arg = 'int(' + arg + ')';// float
      } else {
        // It's complicated.
        var varName = Blockly.Python.variableDB_.getDistinctName(
          variable0 + suffix, Blockly.Variables.NAME_TYPE);
        code += varName + ' = int(' + arg + ')\n';// float
        arg = varName;
      }
      return arg;
    };
    var startVar = scrub(argument0, '_start');
    var endVar = scrub(argument1, '_end');
    // var incVar = scrub(increment, '_inc');

    if (typeof startVar == 'number' && typeof endVar == 'number') {
      if (startVar < endVar) {
        range = defineUpRange(startVar, endVar, increment);
      } else {
        range = defineDownRange(startVar, endVar, increment);
      }
    } else {
      // We cannot determine direction statically.
      range = generateUpDownRange(startVar, endVar, increment);
    }
  }
  code += 'for ' + variable0 + ' in ' + range + ':\n' + branch;
  return code;
};

// Blockly.FieldLabel.prototype.EDITABLE = true;
// Blockly.FieldImage.prototype.EDITABLE = true;




// 复写 下拉初始化函数 注意此处修改与旧版blockly不同
Blockly.FieldDropdown.prototype.initView = function () {
  Blockly.FieldDropdown.superClass_.initView.call(this);

  this.imageElement_ = Blockly.utils.dom.createSvgElement('image',
    {
      'y': Blockly.FieldDropdown.IMAGE_Y_OFFSET
    }, this.fieldGroup_);

  this.arrow_ = Blockly.utils.dom.createSvgElement('tspan', {}, this.textElement_);
  this.arrow_.appendChild(document.createTextNode(
    this.sourceBlock_.RTL ?
      Blockly.FieldDropdown.ARROW_CHAR + ' ' :
      ' ' + Blockly.FieldDropdown.ARROW_CHAR));
  if (this.sourceBlock_.RTL) {
    this.textElement_.insertBefore(this.arrow_, this.textContent_);
  } else {
    this.textElement_.appendChild(this.arrow_);
  }

  if (this.sourceBlock_.type == "china_city") {//中国主要城市列表
    inputs = this.sourceBlock_.inputList["0"].fieldRow;
    if ("city" == this.name) {
      inputs[1].menuGenerator_ = getCitysByProvince(inputs[0].value_);
      inputs[1].setValue(inputs[1].menuGenerator_[0][0]);
    }
  } else if (this.sourceBlock_.type == "china_city_town") {//中国全部城市列表
    inputs = this.sourceBlock_.inputList["0"].fieldRow;
    if ("city" == this.name) {
      inputs[1].menuGenerator_ = getCitysByProvince(inputs[0].value_);
      inputs[2].menuGenerator_ = getCityInfo(inputs[0].value_, inputs[1].value_);
    } else if ("town" == this.name) {
      inputs[2].menuGenerator_ = getCityInfo(inputs[0].value_, inputs[1].value_);
    }
  }
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

Blockly.Blocks.text_changeCase = {
  init: function () {
    var a = [[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"]];
    this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
    this.setStyle("text_blocks");
    this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "CASE");
    this.setOutput(!0, "String");
    this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP)
  }
};

Blockly.Python.text_changeCase = function (a) {
  var b = {
    UPPERCASE: ".upper()",
    LOWERCASE: ".lower()"
  }[a.getFieldValue("CASE")];
  return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + b, Blockly.Python.ORDER_FUNCTION_CALL]
};

// 变量定义初始化
Blockly.Python['variables_set'] = function (block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
    Blockly.Python.ORDER_NONE);
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
  // Blockly.Python.definitions_['define_' + varName] = varName + ' = None';
  // Blockly.Python.functions_['define_' + varName] = varName + ' = ' + argument0 + '\n';
  // return '';
  if (argument0 == '') return '';
  return varName + ' = ' + argument0 + '\n';
};

Blockly.Blocks['input_function'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output":null,
            "colour": CategoryColors.variable,
            "helpUrl": Blockly.Msg.PYTHON_INPUT_HELPURL,
            "tooltip": Blockly.Msg.PYTHON_INPUT_TOOLTIP,
            "message0": Blockly.Msg.PYTHON_INPUT_MESSAGE0,
        });
    }
};

Blockly.Python['input_function'] = function () {
    var code = "input()";
    return [code, Blockly.Python.ORDER_ATOMIC];
    // return code;
};

//bytearray
Blockly.Blocks['mpython_convert_bytearray'] = {
	init: function () {
		this.jsonInit({
			"colour": CategoryColors.Math,
			"output": "Array",
			"helpUrl": Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_HELPURL,
			"tooltip": Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_TOOLTIP,
			"message0": Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_MESSAGE0,
			"args0": [{
					"name": "arr",
					"type": "input_value",
					"check": null
					// "check": "Array"
				}
			]
		});
	}
};
Blockly.Python['mpython_convert_bytearray'] = function (block) {
  var arr = Blockly.Python.valueToCode(block, 'arr', Blockly.Python.ORDER_ATOMIC);
  var code = 'bytearray(' + arr + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};