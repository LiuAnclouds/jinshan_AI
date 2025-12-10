//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');
import * as Blockly from 'blockly/core';
import 'blockly/python'
import {CategoryColors} from '@/global/colors'
//import { toUTF8Hex } from './global_var'


/*** 
set
blocks 
***/
/*集合- 开始 */
// 子集 、 超集
Blockly.Blocks['set_subset_superset'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": "Boolean",
            // "nextStatement": null,
            // "previousStatement": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.SUBSET_SUPERSET_TOOLTIP,
            "message0": Blockly.Msg.SUBSET_SUPERSET_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "set_name",
                }, {
                    "type": "input_value",
                    "name": "set_1_name"
                }, {
                    "options": [
                        [Blockly.Msg.MPYTHON_SUBSET, '.issubset'],
                        [Blockly.Msg.MPYTHON_SUPERSET, '.issuperset']
                    ],
                    "type": "field_dropdown",
                    "name": "subset_superset"
                }
            ]
        });
    }
};

// set1 更新为 与set2的交集 、并集、差集
Blockly.Blocks['sets_update_ways'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "output":"Array",
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.SETS_UPDATE_WAYS_TOOLTIP,
            "message0": Blockly.Msg.SETS_UPDATE_WAYS_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "set_name",
                }, {
                    "type": "input_value",
                    "name": "set_1_name"
                }, {
                    "options": [
                        [Blockly.Msg.MPYTHON_INTERSECTION, '.intersection_update'],
                        [Blockly.Msg.MPYTHON_UNION, '.update'],
                        [Blockly.Msg.MPYTHON_DIFFERENCE, '.difference_update']
                    ],
                    "type": "field_dropdown",
                    "name": "sets_update_ways"
                }
            ]
        });
    }
};
// 随机移除一个元素,并返回之
Blockly.Blocks['get_sets_pop'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.GET_SETS_POP_TOOLTIP,
            "message0": Blockly.Msg.GET_SETS_POP_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "set_name"
            }
            ]
        });
    }
};
// 集合长度
Blockly.Blocks['len_of_sets'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": "Number",
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.LEN_OF_SETS_TOOLTIP,
            "message0": Blockly.Msg.LEN_OF_SETS_MESSAGE0,
            "args0": [{
                "type": "input_value",
                "name": "set_name"
            }
            ]
        });
    }
};
// 集合的交集并集
Blockly.Blocks['intersection_of_sets'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": "Array",
            // "nextStatement": null,
            // "previousStatement": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.INTERSECTION_OF_SETS_TOOLTIP,
            "message0": Blockly.Msg.INTERSECTION_OF_SETS_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_INTERSECTION, ' & '],
                        [Blockly.Msg.MPYTHON_UNION, ' | '],
                        [Blockly.Msg.MPYTHON_DIFFERENCE, ' - ']
                    ],
                    "type": "field_dropdown",
                    "name": "set_operation_type"
                }, {
                    "type": "input_value",
                    "name": "set_name",
                }, {
                    "type": "input_value",
                    "name": "set_1_name"
                }
            ]
        });
    }
};
// 集合添加元素
Blockly.Blocks['set_update_with'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.SET_UPDATE_WITH_TOOLTIP,
            "message0": Blockly.Msg.SET_UPDATE_WITH_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "set_name",
                    // "text": "my_set"
                }, {
                    "type": "input_value",
                    "name": "set_items"
                }
            ]
        });
    }
};
// 创建集合
Blockly.Blocks['set_create_with'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.SET_CREATE_WITH_TOOLTIP,
            "message0": Blockly.Msg.SET_CREATE_WITH_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "set_name",
                    // "text": "my_set"
                }, {
                    "type": "input_value",
                    "name": "set_items"
                }
            ]
        });
    }
};
//text  {文本}  ，用于集合
Blockly.Blocks['text_set'] = {
	/**
	 * Block for text value.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setHelpUrl(Blockly.Msg.MPYTHON_SET_HELPURL);
        this.setColour(CategoryColors.Set);
        this.appendDummyInput()
            .appendField(Blockly.Msg.TEXT_SET_START)
            .appendField(new Blockly.FieldTextInput(''), 'TEXT')
            .appendField(Blockly.Msg.TEXT_SET_END)
        this.setOutput(true, 'Array');
        // this.setOutput(true);
    }
};
// 创建空集合
Blockly.Blocks['create_empty_set'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.Set,
            "helpUrl": Blockly.Msg.MPYTHON_SET_HELPURL,
            "tooltip": Blockly.Msg.CREATE_EMPTY_SET_TOOLTIP,
            "message0": Blockly.Msg.CREATE_EMPTY_SET_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "set_name",
                    // "text": "my_set"
                }
            ]
        });
    }
};
/*
创建集合-引用原生嵌入形式
*/
Blockly.Blocks['set_create_with_items_insert'] = {
	/**
	 * Block for creating a list with any number of elements of any type.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setHelpUrl(Blockly.Msg.MPYTHON_SET_HELPURL);
        this.setColour(CategoryColors.Set);
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(true, 'Array');
        // this.setOutput(true);
        this.setMutator(new Blockly.Mutator(['set_create_with_item']));
        this.setTooltip(Blockly.Msg.SET_CREATE_WITH_ITEMS_INSERT_TOOLTIP);
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
        var containerBlock = workspace.newBlock('set_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('set_create_with_item');
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
                .appendField(Blockly.Msg.SET_CREATE_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.appendField(Blockly.Msg.SET_CREATE_WITH_INPUT_WITH);
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
Blockly.Blocks['set_create_with_item'] = { //
	/**
	 * Mutator bolck for adding items.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.Set);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.SET_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}
Blockly.Blocks['set_create_with_container'] = {  //
	/**
	 * Mutator block for list container.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.Set);
        this.appendDummyInput()
            // .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
            .appendField(Blockly.Msg.SET_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        // this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.setTooltip(Blockly.Msg.SET_CREATE_WITH_CONTAINER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MPYTHON_SET_HELPURL);
        this.contextMenu = false;
    }
};
/*集合- 结束 */



/*** 
set
generators 
***/
/**
创建集合-引用原生嵌入形式
*/
Blockly.Python['set_create_with_items_insert'] = function (block) {
    var elements = new Array(block.itemCount_);
    if (block.itemCount_ == 0) {  // 空集合为 set()
        var code = 'set()';
    } else {
        for (var i = 0; i < block.itemCount_; i++) {
            elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
                Blockly.Python.ORDER_NONE) || 'None';
        }
        code = '{' + elements.join(', ') + '}';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// set1 更新为 与set2的交集 、并集、差集
Blockly.Python['set_subset_superset'] = function (block) {
    var subset_superset = block.getFieldValue('subset_superset');
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var set_1_name = Blockly.Python.valueToCode(block, 'set_1_name', Blockly.Python.ORDER_ATOMIC);
    var code = set_name + subset_superset + '(' + set_1_name + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// set1 更新为 与set2的交集 、并集、差集
Blockly.Python['sets_update_ways'] = function (block) {
    var sets_update_ways = block.getFieldValue('sets_update_ways');
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var set_1_name = Blockly.Python.valueToCode(block, 'set_1_name', Blockly.Python.ORDER_ATOMIC);
    var code = set_name + sets_update_ways + '(' + set_1_name + ')\n';
    return code;
};
// 随机移除一个元素,并返回之
Blockly.Python['get_sets_pop'] = function (block) {
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var code = set_name + '.pop()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
//集合长度
Blockly.Python['len_of_sets'] = function (block) {
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var code = 'len(' + set_name + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
//交集并集
Blockly.Python['intersection_of_sets'] = function (block) {
    var set_operation_type = block.getFieldValue('set_operation_type');
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var set_1_name = Blockly.Python.valueToCode(block, 'set_1_name', Blockly.Python.ORDER_ATOMIC);
    // var code = set_name + ' & ' + set_1_name;
    var code = set_name + set_operation_type + set_1_name;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 集合添加元素
Blockly.Python['set_update_with'] = function (block) {
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var set_items = Blockly.Python.valueToCode(block, 'set_items', Blockly.Python.ORDER_ATOMIC);
    var code = set_name + '.update(' + set_items + ')\n';
    return code;
};
// 创建集合
Blockly.Python['set_create_with'] = function (block) {
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var set_items = Blockly.Python.valueToCode(block, 'set_items', Blockly.Python.ORDER_ATOMIC);
    var code = set_name + ' = ' + set_items + '\n';
    return code;
};
//text  {文本}  ，用于集合
Blockly.Python['text_set'] = function (block) {
    var code = Blockly.Python.quote_empty(block.getFieldValue('TEXT'));
    code = '{' + code + '}';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 创建空集合
Blockly.Python['create_empty_set'] = function (block) {
    var set_name = Blockly.Python.valueToCode(block, 'set_name', Blockly.Python.ORDER_ATOMIC);
    var code = set_name + ' = ' + 'set()\n';
    return code;
};
