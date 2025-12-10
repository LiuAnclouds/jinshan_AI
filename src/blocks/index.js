import * as Blockly from 'blockly/core';
import 'blockly/python'
Blockly.Python.functions_ = Object.create(null);
Blockly.Python.tops_ = Object.create(null);
Blockly.Generator.prototype.INDENT = "    ";
Blockly.Python.finish = function(code) {
    var imports = [];
    var tops = [];
    var definitions = [];
    var functions = [];
    if ( Blockly.Python.tops_["import_machine"] ) {
        delete Blockly.Python.definitions_["import_machine"];
    }
    for (var name in Blockly.Python.tops_) {
        var def = Blockly.Python.tops_[name];
        if (def.match(/^(#\from\s+\S+\s+)?#\\import\s+\S+/)) {
            imports.push(def);
        } else {
            tops.push(def);
        }
    }
    for (let name in Blockly.Python.definitions_) {
        let def = Blockly.Python.definitions_[name];
        if (def.match(/^(#\from\s+\S+\s+)?#\\import\s+\S+/)) {
            imports.push(def);
        } else {
            definitions.push(def);
        }
    }
    for (let name in Blockly.Python.functions_) {
        let def = Blockly.Python.functions_[name];
        functions.push(def);
    }
    // Clean up temporary data.
    delete Blockly.Python.definitions_;
    delete Blockly.Python.functions_;
    delete Blockly.Python.functionNames_;
    Blockly.Python.variableDB_.reset();
    Blockly.Python.functions_ = Object.create(null);
    Blockly.Python.tops_ = Object.create(null);
    var allDefs = imports.join('\n') + '\n\n' + tops.join('\n\n') + definitions.join('\n\n')+ '\n\n' + functions.join('\n\n');
    return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n') + code;
};

import './blockly_main/basics';
import './blockly_main/handbit';
import './blockly_main/list';
import './blockly_main/tuple';
import './blockly_main/set';
import './blockly_main/dict';

import './play_game/dqn_model_architecture';
import './play_game/dqn_model_training';
import './play_game/dqn_model_inference';

import './env_bcst'

<<<<<<< HEAD
=======
// 按需加载人脸识别积木入口，供需要的功能模块调用
export { loadFaceBlocks } from './loadFace';
>>>>>>> b24584f (HighLight)

