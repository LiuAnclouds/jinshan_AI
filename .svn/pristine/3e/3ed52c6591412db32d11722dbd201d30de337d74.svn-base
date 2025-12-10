<script setup>
import Blockly from 'blockly';
import { saveAs } from 'file-saver';
import store from '@/store';

function saveXML() {
	var xmlDom = Blockly.Xml.workspaceToDom(store.workspace);
	let blockxml = Blockly.Xml.domToPrettyText(xmlDom);
	blockxml = '<!--mPythonType:0-->\r\n' + blockxml;
	var blob = new Blob([blockxml], { type: "text/xml" });
	saveAs(blob, "my_code.mxml");

	store.setModal('');
}
function savePY() {
	let code = '';
	if (store.viewMode.editor) {
		for (let i = 0; i < store.editorList.length; i++) {
			if (store.editorList[i].select) {
				code = store.editorList[i].data;
				break;
			}
		}
	} else {
		code = Blockly.Python.workspaceToCode(this.workspace);
	}
	code = '#mPythonType:0\r\n' + code;
	var blob = new Blob([code], { type: "text/py" });
	saveAs(blob, "main.py");

	store.setModal('');
}
</script>

<template>
  <div class="main-modal-box" :style="{ display: store.modal === 'saveModal' ? 'block' : 'none' }">
		<div class="main-modal">
			<div class="main-madal-content">
				<h4>请选择需要保存的格式</h4>
				<div class="save-content">
					<span @click="saveXML()" v-if="store.viewMode.gui" class="xml-icon">图形</span>
					<span v-else class="xml-icon disable gray" style="opacity:1;">图形</span>
					<span @click="savePY()" class="py-icon">代码</span>
				</div>
			</div>
			<span @click="store.setModal('')" class="close-modal-btn"></span>
		</div>
	</div>
</template>

<style scoped>
.save-content {
  padding: 0 36px;
  display: flex;
  justify-content: space-around;
	margin: 20px auto 50px;
}
.save-content span {
  display: block;
  width: 106px;
  height: 94px;
  cursor: pointer;
  padding: 10px;
  border-radius: 16px;
  text-align: center;
  line-height: 14.5;
  color: #666;
}
.xml-icon {
  background: url(./images/save_xml.png) no-repeat center;
}
.py-icon {
  background: url(./images/save_py.png) no-repeat center;
}
.save-content span:not(.disable):hover {
  background-color: #F3F3F3;
}
</style>