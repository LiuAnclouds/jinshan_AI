//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');
import * as Blockly from 'blockly/core';
import 'blockly/python'
import {CategoryColors} from '@/global/colors'
//import { toUTF8Hex } from './global_var'


/*** 
dict
blocks 
***/
// 创建字典
Blockly.Blocks['dict_create_with'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Dictionary,
            "helpUrl": Blockly.Msg.MPYTHON_DICT_HELPURL,
            "tooltip": Blockly.Msg.DICT_CREATE_WITH_TOOLTIP,
            "message0": Blockly.Msg.DICT_CREATE_WITH_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "dict_name",
                    // "text": "my_dict"
                }, {
                    "type": "input_value",
                    "name": "dict_items"
                }
            ]
        });
    }
};


Blockly.Blocks['dict_create_with_items_insert'] = {

	/**
	 * Block for creating a list with any number of elements of any type.
	 * @this Blockly.Block
	 */

    init: function () {
        this.setColour(CategoryColors.Dictionary);
        this.appendDummyInput("")
            // .appendField(new Blockly.FieldTextInput('mydict'), 'VAR')
            .appendField(new Blockly.FieldLabel(Blockly.Msg.DICT_CREATE_WITH_INPUT_WITH), 'TIP')
        this.itemCount_ = 3;
        this.updateShape_();
        // this.setPreviousStatement(true);
        // this.setNextStatement(true);
        this.setOutput(true);
        this.setMutator(new Blockly.Mutator(['dict_create_with_item']));
        this.setTooltip(Blockly.Msg.DICT_CREATE_WITH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MPYTHON_DICT_HELPURL);
    },

	/**
	 * Create XML to represent list inputs.
	 * @return {Element} XML storage element.
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
        var containerBlock =
            workspace.newBlock('dict_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('dict_create_with_item');
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
        var i = 0;
        while (itemBlock) {
            connections[i] = itemBlock.valueConnection_;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
            i++;
        }

        this.itemCount_ = i;
        this.updateShape_();
        // Reconnect any child blocks.
        //for (var i = 0; i < this.itemCount_; i++) {测试点
        for (i = 0; i < this.itemCount_; i++) {
            if (connections[i]) {
                this.getInput('ADD' + i).connection.connect(connections[i]);
            }
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
        // Delete everything.
        if (this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        }

        var keyNames = [];
        for (var i = 0; this.getInput('ADD' + i); i++) {
            //this.getInput('VALUE' + i).removeField("KEY"+i);
            keyNames.push(this.getFieldValue("KEY" + i))
            this.removeInput('ADD' + i);
        }
        // Rebuild block.
        if (this.itemCount_ == 0) {
            // this.getField('TIP').setText(Blockly.Msg.DICT_CREATE_EMPTY_TITLE);
        } else {
            // this.getField('TIP').setText(Blockly.Msg.DICT_CREATE_WITH_INPUT_WITH);
            //for (var i = 0; i < this.itemCount_; i++) {测试点
            for (i = 0; i < this.itemCount_; i++) {
                this.appendValueInput('ADD' + i)
                    .setCheck(null)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(
                        new Blockly.FieldTextInput(
                            keyNames.length > i
                                ? keyNames[i]
                                // : (i == 0 ? '"key"' :'"key'+(i+1)+'"')),
                                : (i == 0 ? 'key_0' : 'key_' + i)),
                        'KEY' + i)
                    .appendField(":")
            }
        }
    }, getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Blocks['dict_create_with_item'] = {
	/**
	 * Mutator bolck for adding items.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.Dictionary);
        this.appendDummyInput()
            .appendField(Blockly.Msg.DICT_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.DICT_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['dict_create_with_container'] = {

	/**
	 * Mutator block for list container.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.Dictionary);
        this.appendDummyInput()
            .appendField(Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};



// 字典 key值
Blockly.Blocks['dict_key_value'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Dictionary,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "dict_name"
            },
            {
                "type": "input_value",
                "name": "dict_items"
            }
            ],
            "output": ["String", "Number", "Boolean", "Array"],
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_DICT_HELPURL,
            "tooltip": Blockly.Msg.DICT_KEY_VALUE_TOOLTIP,
            "message0": Blockly.Msg.DICT_KEY_VALUE_MESSAGE0
        });
    }
};

// 字典 key值
Blockly.Blocks['add_dict_key_value'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Dictionary,
            "args0": [{
                "type": "input_value",
                "name": "dict_name"
            },
            {
                "type": "input_value",
                "name": "dict_items"
            },
            {
                "type": "input_value",
                "name": "add_value"
            }
            ],
            // "output": ["Number", "String"],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.MPYTHON_DICT_HELPURL,
            "tooltip": Blockly.Msg.ADD_DICT_KEY_VALUE_TOOLTIP,
            "message0": Blockly.Msg.ADD_DICT_KEY_VALUE_MESSAGE0
        });
    }
};

// 字典 长度
Blockly.Blocks['dict_length'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Dictionary,
            "args0": [{
                "type": "input_value",
                "name": "dict_name"
            }
            ],
            "output": "Number",
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_DICT_HELPURL,
            "tooltip": Blockly.Msg.DICT_LENGTH_TOOLTIP,
            "message0": Blockly.Msg.DICT_LENGTH_MESSAGE0
        });
    }
};

// 字典 是否包含某 key
Blockly.Blocks['dict_key_exist'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Dictionary,
            "args0": [{
                "type": "input_value",
                "name": "dict_name"
            }, {
                "type": "input_value",
                "name": "dict_items"
            }
            ],
            "output": "Boolean",
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_DICT_HELPURL,
            "tooltip": Blockly.Msg.DICT_KEY_EXIST_TOOLTIP,
            "message0": Blockly.Msg.DICT_KEY_EXIST_MESSAGE0
        });
    }
};

// 返回字典  键 / 值的列表
Blockly.Blocks['dict_key_or_val_list'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Dictionary,
            "args0": [{
                "type": "input_value",
                "name": "dict_name"
            }, {
                "options": [
                    [Blockly.Msg.DICT_KEYS, 'keys'],
                    [Blockly.Msg.DICT_VALUES, 'values'],
                ],
                "type": "field_dropdown",
                "name": "key_or_val"
            }
            ],
            "output": "Array",
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_DICT_HELPURL,
            "tooltip": Blockly.Msg.DICT_KEY_OR_VAL_LIST_TOOLTIP,
            "message0": Blockly.Msg.DICT_KEY_OR_VAL_LIST_MESSAGE0
        });
    }
};






/*** 
dict
generators 
***/
/**
创建字典-引用原生嵌入形式
*/
Blockly.Python['dict_create_with_items_insert'] = function () {
    // var varName = Blockly.Python.variableDB_.getName(this.getFieldValue('VAR'),
    // Blockly.Variables.NAME_TYPE);
    var code = new Array(this.itemCount_);
    var default_value = '0';

    for (var n = 0; n < this.itemCount_; n++) {
        var keyName = this.getFieldValue('KEY' + n);
        code[n] = '"' + keyName + '"' + ":" + (Blockly.Python.valueToCode(this, 'ADD' + n, Blockly.Python.ORDER_NONE) || default_value);
    }
    code = '{' + code.join(', ') + '}';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// 创建字典
Blockly.Python['dict_create_with'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // var dict_name = block.getFieldValue('dict_name');
    var dict_name = Blockly.Python.valueToCode(block, 'dict_name', Blockly.Python.ORDER_ATOMIC);
    var dict_items = Blockly.Python.valueToCode(block, 'dict_items', Blockly.Python.ORDER_ATOMIC);
    var code = dict_name + ' = ' + dict_items + '\n';
    return code;
};

// 字典 key值
Blockly.Python['dict_key_value'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dict_name = Blockly.Python.valueToCode(block, 'dict_name', Blockly.Python.ORDER_ATOMIC);
    var dict_items = Blockly.Python.valueToCode(block, 'dict_items', Blockly.Python.ORDER_ATOMIC);
    // var code = dict_name + '.get(' + dict_items + ')';
    var code = dict_name + '[' + dict_items + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 字典   添加/更新   key值
Blockly.Python['add_dict_key_value'] = function (block) {
    var dict_name = Blockly.Python.valueToCode(block, 'dict_name', Blockly.Python.ORDER_ATOMIC);
    var dict_items = Blockly.Python.valueToCode(block, 'dict_items', Blockly.Python.ORDER_ATOMIC);
    var add_value = Blockly.Python.valueToCode(block, 'add_value', Blockly.Python.ORDER_ATOMIC);
    var code = dict_name + '[' + dict_items + '] = ' + add_value + '\n';
    return code;
};

// 字典 长度
Blockly.Python['dict_length'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dict_name = Blockly.Python.valueToCode(block, 'dict_name', Blockly.Python.ORDER_ATOMIC);
    var code = 'len(' + dict_name + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 字典 是否包含某 key
Blockly.Python['dict_key_exist'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dict_name = Blockly.Python.valueToCode(block, 'dict_name', Blockly.Python.ORDER_ATOMIC);
    var dict_items = Blockly.Python.valueToCode(block, 'dict_items', Blockly.Python.ORDER_ATOMIC);
    var code = dict_items + ' in ' + dict_name;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 返回字典  键 / 值的列表
Blockly.Python['dict_key_or_val_list'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var dict_name = Blockly.Python.valueToCode(block, 'dict_name', Blockly.Python.ORDER_ATOMIC);
    var key_or_val = block.getFieldValue('key_or_val');
    var code = 'list(' + dict_name + '.' + key_or_val + '())';
    return [code, Blockly.Python.ORDER_ATOMIC];
};