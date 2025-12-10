//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');
import * as Blockly from 'blockly/core';
import 'blockly/python'
import {CategoryColors} from '@/global/colors'
//import { toUTF8Hex } from './global_var'
//from './global_var_block'


Blockly.Blocks['list_create_with'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.List,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP,
            "message0": Blockly.Msg.LISTS_CREATE_WITH_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "list_name",
                }, {
                    "type": "input_value",
                    "name": "list_items"
                }
            ]
        });
    }
};


Blockly.Blocks['list_create_with_items_insert'] = {

	/**
	 * Block for creating a list with any number of elements of any type.
	 * @this Blockly.Block
	 */

    init: function () {
        this.setColour(CategoryColors.List);
        this.appendDummyInput("")
            // .appendField(new Blockly.FieldTextInput('mydict'), 'VAR')
            .appendField(new Blockly.FieldLabel(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH), 'TIP')
        this.itemCount_ = 3;
        this.updateShape_();
        // this.setPreviousStatement(true);
        // this.setNextStatement(true);
        this.setOutput(true);
        this.setMutator(new Blockly.Mutator(['list_create_with_item']));
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MPYTHON_LIST_HELPURL);
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
            workspace.newBlock('list_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('list_create_with_item');
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
        for (var i = 0; this.getInput('ADD' + i); i++) {
            this.removeInput('ADD' + i);
        }
        // Rebuild block.
        if (this.itemCount_ == 0) {
            // this.getField('TIP').setText(Blockly.Msg.DICT_CREATE_EMPTY_TITLE);
        } else {
            for (i = 0; i < this.itemCount_; i++) {
                this.appendValueInput('ADD' + i)
                    .setCheck(null)
                    .setAlign(Blockly.ALIGN_RIGHT)
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

Blockly.Blocks['list_create_with_item'] = {
	/**
	 * Mutator bolck for adding items.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.List);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['list_create_with_container'] = {

	/**
	 * Mutator block for list container.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(CategoryColors.List);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Python['list_create_with_items_insert'] = function () {
    // var varName = Blockly.Python.variableDB_.getName(this.getFieldValue('VAR'),
    // Blockly.Variables.NAME_TYPE);
    var code = new Array(this.itemCount_);
    var default_value = '';

    for (var n = 0; n < this.itemCount_; n++) {
        code[n] = (Blockly.Python.valueToCode(this, 'ADD' + n, Blockly.Python.ORDER_NONE) || default_value);
    }
    code = '[' + code.join(', ') + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};



/*** 
list
blocks 
***/
// 项 在列表 第/最后一次 出现的位置
Blockly.Blocks['list_first_index'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": CategoryColors.List,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.LIST_FIRST_INDEX_TOOLTIP,
            "message0": Blockly.Msg.LIST_FIRST_INDEX_MESSAGE0,
            "args0": [
                {
                    // "check": "Array",
                    "type": "input_value",
                    "name": "elem"
                }
                ,
                {
                    "check": "Array",
                    "type": "input_value",
                    "name": "my_list"
                }
                ,
                {
                    "options": [
                        [Blockly.Msg.FIRST, 'first'],
                        [Blockly.Msg.LAST, 'last']
                    ],
                    "type": "field_dropdown",
                    "name": "last_or_first"
                }
            ]
        });
    }
};
// 项 在列表 第/最后一次 出现的位置
Blockly.Python['list_first_index'] = function (block) {
    var elem = Blockly.Python.valueToCode(block, 'elem', Blockly.Python.ORDER_ATOMIC);
    var my_list = Blockly.Python.valueToCode(block, 'my_list', Blockly.Python.ORDER_ATOMIC);
    var last_or_first = block.getFieldValue('last_or_first');

    Blockly.Python.functions_['list_first_index'] =
        'def first_index(my_list, elem):\n' +
        '    try: index = my_list.index(elem)\n' +
        '    except: index = 0\n' +
        '    return index';

    Blockly.Python.functions_['list_last_index'] =
        'def last_index(my_list, elem):\n' +
        '    try: index = len(my_list) - my_list[::-1].index(elem) - 1\n' +
        '    except: index = 0\n' +
        '    return index';

    var code = last_or_first + '_index(' + my_list + ', ' + elem + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};







// 列表 元素是否存在
Blockly.Blocks['list_item_exist'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.List,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "list_name"
            },
            {
                // "type": "field_input",
                // "name": "list_item",
                // "text": "\"mpython\""
                "type": "input_value",
                "name": "list_item"
            }
            ],
            "output": "Boolean",
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.LIST_ITEM_EXIST_TOOLTIP,
            "message0": Blockly.Msg.LIST_ITEM_EXIST_MESSAGE0
        });
    }
};
// 列表 元素是否存在
Blockly.Python['list_item_exist'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var list_item = Blockly.Python.valueToCode(block, 'list_item', Blockly.Python.ORDER_ATOMIC);
    // var list_item = block.getFieldValue('list_item');

    var code = list_item + ' in ' + list_name;
    return [code, Blockly.Python.ORDER_ATOMIC];
};





// 设置列表第几项
Blockly.Blocks['set_list_order_item'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.List,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "list_name"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '['],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '[-'],
                ],
                "type": "field_dropdown",
                "name": "list_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "list_order_item"
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
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.SET_LIST_ORDER_ITEM_TOOLTIP,
            "message0": Blockly.Msg.SET_LIST_ORDER_ITEM_MESSAGE0
        });
    }
};
// 设置列表第几项
Blockly.Python['set_list_order_item'] = function (block) {
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var list_order = block.getFieldValue('list_order');
    var list_order_item = Blockly.Python.valueToCode(block, 'list_order_item', Blockly.Python.ORDER_ATOMIC);
    var set_value = Blockly.Python.valueToCode(block, 'set_value', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + list_order + list_order_item + ']' + ' = ' + set_value + '\n';
    return code;
};







// 插入列表第几项为
Blockly.Blocks['insert_list_order_item'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.List,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "list_name"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '('],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '(-'],
                ],
                "type": "field_dropdown",
                "name": "list_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "list_order_item"
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
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.INSERT_LIST_ORDER_ITEM_TOOLTIP,
            "message0": Blockly.Msg.INSERT_LIST_ORDER_ITEM_MESSAGE0
        });
    }
};
// 插入列表第几项为
Blockly.Python['insert_list_order_item'] = function (block) {
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var list_order = block.getFieldValue('list_order');
    var list_order_item = Blockly.Python.valueToCode(block, 'list_order_item', Blockly.Python.ORDER_ATOMIC);
    var set_value = Blockly.Python.valueToCode(block, 'set_value', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + '.insert' + list_order + list_order_item + ', ' + set_value + ')\n';
    return code;
};







// 列表第/倒数第几项
Blockly.Blocks['list_order_item'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.List,
            "args0": [{
                // "check": "Array",
                "type": "input_value",
                "name": "list_name"
            },
            {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '['],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '[-'],
                ],
                "type": "field_dropdown",
                "name": "list_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "list_order_item"
            }
            ],
            "output": ["Number", "String", "Boolean", "Array"],
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.LIST_ORDER_ITEM_TOOLTIP,
            "message0": Blockly.Msg.LIST_ORDER_ITEM_MESSAGE0
        });
    }
};
// 列表第/倒数第几项
Blockly.Python['list_order_item'] = function (block) {
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var list_order = block.getFieldValue('list_order');
    var list_order_item = Blockly.Python.valueToCode(block, 'list_order_item', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + list_order + list_order_item + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};








// 列表  取索引2到6,不含索引6   my_list[2:6]
Blockly.Blocks['parts_of_list'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.List,
            "args0": [{
                "type": "input_value",
                "name": "list_name"
            }, {
                "options": [
                    [Blockly.Msg.MPYTHON_ORDER, '['],
                    [Blockly.Msg.MPYTHON_REVERSE_ORDER, '[-'],
                ],
                "type": "field_dropdown",
                "name": "list_start_order"
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
                "name": "list_end_order"
            }, {
                "check": "Number",
                "type": "input_value",
                "name": "end_item"
            }
            ],
            "output": null, //输出type = any
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.PARTS_OF_LIST_TOOLTIP,
            "message0": Blockly.Msg.PARTS_OF_LIST_MESSAGE0
        });
    }
};
// 列表  取索引2到6,不含索引6   my_list[2:6]
Blockly.Python['parts_of_list'] = function (block) {
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var list_start_order = block.getFieldValue('list_start_order');
    var list_end_order = block.getFieldValue('list_end_order');
    var start_item = Blockly.Python.valueToCode(block, 'start_item', Blockly.Python.ORDER_ATOMIC);
    var end_item = Blockly.Python.valueToCode(block, 'end_item', Blockly.Python.ORDER_ATOMIC);
    let end_item1 = '';
    switch (list_end_order) {
        case ':':
            end_item1 = "(" + end_item + "+1)";//parseInt(end_item) + parseInt(1);
            break;
        case ':-':
            end_item1 = "(" + end_item + "-1)";//end_item - 1;
            break;
    }
    var code = list_name + list_start_order + start_item + list_end_order + end_item1 + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};








// 列表转元组
Blockly.Blocks['list_to_tuple'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.Tuple,
            "args0": [{
                "check": "Array",
                "type": "input_value",
                "name": "list_name"
            }
            ],
            "output": null, //输出type = any
            "inputsInline": true,
            "helpUrl": Blockly.Msg.MPYTHON_TUPLE_HELPURL,
            "tooltip": Blockly.Msg.LIST_TO_TUPLE_TOOLTIP,
            "message0": Blockly.Msg.LIST_TO_TUPLE_MESSAGE0
        });
    }
};
//列表转元组
Blockly.Python['list_to_tuple'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var code = 'tuple(' + list_name + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};








//列表清空
Blockly.Blocks['lists_clear'] = {
	/**
	 * Block for list length.
	 * @this Blockly.Block
	 */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_lists_clear_MESSAGE0,
            "args0": [
                {
                    "check": "Array",
                    "type": "input_value",
                    "name": "list_name"
                }
            ],
            //"output": 'Number',
            "nextStatement": null,
            "previousStatement": null,
            "inputsInline": true,
            "colour": CategoryColors.List,
            "tooltip": Blockly.Msg.mpython_lists_clear_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL
        });
    }
};
//列表清空
Blockly.Python['lists_clear'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + '.clear()\n';
    return code;
};








//列表移除重复
Blockly.Blocks['lists_remove_repetition'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_REMOVE_REPETITION_MESSAGE0,
            "args0": [
                {
                    "check": "Array",
                    "type": "input_value",
                    "name": "list_name"
                }
            ],
            "output": 'Number',
            //"nextStatement": null,
            //"previousStatement": null,
            //"inputsInline": true,
            "colour": CategoryColors.List,
            "tooltip": Blockly.Msg.MPYTHON_REMOVE_REPETITION_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_REMOVE_REPETITION_HELPURL
        });
    }
};
//列表移除重复
Blockly.Python['lists_remove_repetition'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var code ='list(set(' + list_name + '))\n';
    //return code;
    return [code, Blockly.Python.ORDER_ATOMIC];
};






//在列表末尾添加新的对象
Blockly.Blocks['lists_append'] = {
	/**
	 * Block for list length.
	 * @this Blockly.Block
	 */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_lists_append_MESSAGE0,
            "args0": [
                {
                    "check": "Array",
                    "type": "input_value",
                    "name": "list_name"
                },
                {
                    "type": "input_value",
                    "name": "last_item",
                    "check": ['String', 'Number']
                }
            ],
            //"output": 'Number',
            "nextStatement": null,
            "previousStatement": null,
            "inputsInline": true,
            "colour": CategoryColors.List,
            "tooltip": Blockly.Msg.mpython_lists_append_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL
        });
    }
};
//在列表末尾添加新的对象
Blockly.Python['lists_append'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var last_item = Blockly.Python.valueToCode(block, 'last_item', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + '.append(' + last_item + ')\n';
    return code;
};







//在列表末尾追加列表
Blockly.Blocks['lists_extend'] = {
	/**
	 * Block for list length.
	 * @this Blockly.Block
	 */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.mpython_lists_extend_MESSAGE0,
            "args0": [
                {
                    "check": "Array",
                    "type": "input_value",
                    "name": "list_name"
                },
                {
                    "type": "input_value",
                    "name": "extend_list",
                    "check": "Array",
                }
            ],
            //"output": 'Number',
            "nextStatement": null,
            "previousStatement": null,
            "inputsInline": true,
            "colour": CategoryColors.List,
            "tooltip": Blockly.Msg.mpython_lists_extend_TOOLTIP,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL
        });
    }
};
//在列表末尾追加列表
Blockly.Python['lists_extend'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    var extend_list = Blockly.Python.valueToCode(block, 'extend_list', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + '.extend(' + extend_list + ')\n';
    return code;
};






// 返回列表
Blockly.Blocks['mpython_return_list'] = {
    init: function () {
        this.jsonInit({
            "colour": CategoryColors.List,
            "args0": [{
                "type": "input_value",
                "name": "list_name"
                // "type": "field_input",
                // "name": "list_name",
                // "text": "my_list"
            },
            {
                // "check": ["String", "Array"],
                "type": "input_value",
                "name": "list_items"
            }
            ],
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.MPYTHON_LIST_HELPURL,
            "tooltip": Blockly.Msg.mpython_return_list_TOOLTIP,
            "message0": Blockly.Msg.mpython_return_list_MESSAGE0,
            'inputsInline': true //保持参数在同一行
        });
    }
};
// 单行列表
Blockly.Python['mpython_return_list'] = function (block) {
    //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var list_name = Blockly.Python.valueToCode(block, 'list_name', Blockly.Python.ORDER_ATOMIC);
    // var list_name = block.getFieldValue('list_name');
    var list_items = Blockly.Python.valueToCode(block, 'list_items', Blockly.Python.ORDER_ATOMIC);
    var code = list_name + ' = ' + list_items + '\n';
    //return [code, Blockly.Python.ORDER_ATOMIC];
    return code;
};















