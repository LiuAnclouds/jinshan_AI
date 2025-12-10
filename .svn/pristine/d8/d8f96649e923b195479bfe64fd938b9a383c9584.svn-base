//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');
import * as Blockly from 'blockly/core';
import 'blockly/python'
import {CategoryColors} from '@/global/colors'
//import { toUTF8Hex } from './global_var'
// from './global_var_block'


/*** 
tuple
blocks 
***/
// 连接
// 设置元组第几项
Blockly.Blocks['set_tuple_order_item'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "tuple_name"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '['],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '[-'],
                ],
                "type": "field_dropdown",
                "name": "tuple_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "tuple_order_item"
            }, {
                // "check": "Number",
                "type": "input_value",
                "name": "set_value"
            }
            ],
            // "output": ["Number", "String"],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.SET_TUPLE_ORDER_ITEM_TOOLTIP,
            "message0": Blockly.Msg.SET_TUPLE_ORDER_ITEM_MESSAGE0
        });
    }
};


/**
创建元组-引用原生嵌入形式
*/
Blockly.Blocks['tuple_create_with_items_insert'] = {
	/**
	 * Block for creating a list with any number of elements of any type.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setHelpUrl(Blockly.Msg.MPYTHON_TUPLE_HELPURL);
        this.setColour(CategoryColors.Tuple);
        this.itemCount_ = 3;
        this.updateShape_();
        // this.setOutput(true, 'Array');
        this.setOutput(true);
        this.setMutator(new Blockly.Mutator(['tuple_create_with_item']));
        this.setTooltip(Blockly.Msg.TUPLE_CREATE_WITH_ITEMS_INSERT_TOOLTIP);
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
        // var containerBlock = workspace.newBlock('lists_create_with_container');
        var containerBlock = workspace.newBlock('tuple_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('tuple_create_with_item');
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
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var j = 0; j < this.itemCount_; j++) {
            Blockly.Mutator.reconnect(connections[j], this, 'ADD' + j);
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
                .appendField(Blockly.Msg.TUPLE_CREATE_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.appendField(Blockly.Msg.TUPLE_CREATE_WITH_INPUT_WITH);
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
Blockly.Blocks['tuple_create_with_item'] = { // 元组-项
	/**
	 * Mutator bolck for adding items.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.Tuple);
        this.appendDummyInput()
            .appendField(Blockly.Msg.TUPLE_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TUPLE_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}
Blockly.Blocks['tuple_create_with_container'] = {  // 元组
	/**
	 * Mutator block for list container.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.Tuple);
        this.appendDummyInput()
            // .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
            .appendField(Blockly.Msg.TUPLE_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        // this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.setTooltip(Blockly.Msg.TUPLE_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};


// 创建元组
Blockly.Blocks['tuple_create_with'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                "type": "input_value",
                "name": "tuple_name"
                // "type": "field_input",
                // "name": "tuple_name",
                // "text": "my_tuple"
            },
            {
                // "check": ["String", "Array"],
                "type": "input_value",
                "name": "tuple_items"
            }
            ],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.tuple_create_with_TOOLTIP,
            "message0": Blockly.Msg.tuple_create_with_MESSAGE0
        });
    }
};

// 元组第几项
Blockly.Blocks['tuple_order_item'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "tuple_name"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '['],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '[-'],
                ],
                "type": "field_dropdown",
                "name": "tuple_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "tuple_order_item"
            }
            ],
            "output": ["Number", "String", "Boolean", "Array"],
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.tuple_order_item_TOOLTIP,
            "message0": Blockly.Msg.tuple_order_item_MESSAGE0
        });
    }
};

// 元组 最小/最大/长度
Blockly.Blocks['tuple_min_max_len'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "tuple_name"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON_MIN, 'min'],
                    [Blockly.Msg.MPYTHON_MAX, 'max'],
                    [Blockly.Msg.MPYTHON_LENTH, 'len']
                ],
                "type": "field_dropdown",
                "name": "tuple_min_max_len"
            }
            ],
            "output": ["Number", "String"],
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.TUPLE_MIN_MAX_LEN_TOOLTIP,
            "message0": Blockly.Msg.TUPLE_MIN_MAX_LEN_MESSAGE0
        });
    }
};

// 元组 元素是否存在
Blockly.Blocks['tuple_item_exist'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "tuple_name"
            },
            {
                // "type": "field_input",
                // "name": "tuple_item",
                // "text": "\"mpython\""
                "type": "input_value",
                "name": "tuple_item"
            }
            ],
            "output": "Boolean",
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.TUPLE_ITEM_EXIST_TOOLTIP,
            "message0": Blockly.Msg.TUPLE_ITEM_EXIST_MESSAGE0
        });
    }
};

// 元组  取索引2到末尾  my_tuple[2:]
Blockly.Blocks['parts_of_tuple'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "tuple_name"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "tuple_item"
            }
            ],
            "output": null, //输出type = any
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.PARTS_OF_TUPLE_TOOLTIP,
            "message0": Blockly.Msg.PARTS_OF_TUPLE_MESSAGE0
        });
    }
};

// 元组 取索引2到6,不含索引6,my_tuple[2:6]
Blockly.Blocks['parts_of_tuple2'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                "type": "input_value",
                "name": "tuple_name"
            }, {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '['],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '[-'],
                ],
                "type": "field_dropdown",
                "name": "tuple_start_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "start_item"
            }, {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, ':'],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, ':-'],
                ],
                "type": "field_dropdown",
                "name": "tuple_end_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "end_item"
            }
            ],
            "output": null, //输出type = any
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.PARTS_OF_TUPLE2_TOOLTIP,
            "message0": Blockly.Msg.PARTS_OF_TUPLE2_MESSAGE0
        });
    }
};




/*** 
tuple 
generators 
***/
// 设置元组第几项
Blockly.Python['set_tuple_order_item'] = function (block) {
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    var tuple_order = block.getFieldValue('tuple_order');
    var tuple_order_item = Blockly.Python.valueToCode(block, 'tuple_order_item', Blockly.Python.ORDER_ATOMIC);
    var set_value = Blockly.Python.valueToCode(block, 'set_value', Blockly.Python.ORDER_ATOMIC);
    var code = tuple_name + tuple_order + tuple_order_item + ']' + ' = ' + set_value + '\n';
    return code;
};

/**
创建元组-引用原生嵌入形式
*/
Blockly.Python['tuple_create_with_items_insert'] = function (block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
            Blockly.Python.ORDER_NONE) || 'None';
    }
	var code;
	if ( block.itemCount_ == 1) {
		code = '(' + elements[0] + ',)';
	} else {
		code = '(' + elements.join(', ') + ')';
	}
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// 创建元组
Blockly.Python['tuple_create_with'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    // var tuple_name = block.getFieldValue('tuple_name');
    var tuple_items = Blockly.Python.valueToCode(block, 'tuple_items', Blockly.Python.ORDER_ATOMIC);
    var code = tuple_name + ' = ' + tuple_items + '\n';
    return code;
};

// 元组第几项
Blockly.Python['tuple_order_item'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    var tuple_order = block.getFieldValue('tuple_order');
    var tuple_order_item = Blockly.Python.valueToCode(block, 'tuple_order_item', Blockly.Python.ORDER_ATOMIC);
    // var code = tuple_name  + '[' +  tuple_order + tuple_order_item + ']';
    var code = tuple_name + tuple_order + tuple_order_item + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 元组 最小/最大/长度
Blockly.Python['tuple_min_max_len'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    var tuple_min_max_len = block.getFieldValue('tuple_min_max_len');
    var code = tuple_min_max_len + '(' + tuple_name + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 元组 元素是否存在
Blockly.Python['tuple_item_exist'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    var tuple_item = Blockly.Python.valueToCode(block, 'tuple_item', Blockly.Python.ORDER_ATOMIC);
    // var tuple_item = block.getFieldValue('tuple_item');

    var code = tuple_item + ' in ' + tuple_name;
    return [code, Blockly.Python.ORDER_ATOMIC];
};



// 元组  取索引2到末尾  my_tuple[2:]
Blockly.Python['parts_of_tuple'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    var tuple_item = Blockly.Python.valueToCode(block, 'tuple_item', Blockly.Python.ORDER_ATOMIC);
    var code = tuple_name + '[' + tuple_item + ':]';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 元组  取索引2到6,不含索引6   my_tuple[2:6]
Blockly.Python['parts_of_tuple2'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var tuple_name = Blockly.Python.valueToCode(block, 'tuple_name', Blockly.Python.ORDER_ATOMIC);
    var tuple_start_order = block.getFieldValue('tuple_start_order');
    var tuple_end_order = block.getFieldValue('tuple_end_order');
    var start_item = Blockly.Python.valueToCode(block, 'start_item', Blockly.Python.ORDER_ATOMIC);
    var end_item1 = Blockly.Python.valueToCode(block, 'end_item', Blockly.Python.ORDER_ATOMIC);
    let end_item = '';
    switch (tuple_end_order) {
        case ':':
            end_item = parseInt(end_item1) + parseInt(1);
            break;
        case ':-':
            end_item = end_item1 - 1;
            break;
    }
    // 加法 parseInt ，否则为 str 拼接
    var code = tuple_name + tuple_start_order + start_item + tuple_end_order + end_item + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

