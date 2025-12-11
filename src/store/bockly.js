import { toRaw } from 'vue';
import * as Blockly from 'blockly/core';
import lang from '@/container/BlocklyGui/lang';
const LanguagePack = lang.LanguagePack

export default {
  master: '',
  term: null,
  termMode: 'code', // 'code' | 'run'
  viewMode: {
    gui: 1,
    editor: 0,
    teach: 0,
    console: 1
  },
  pyCode: '',
  xmlCode: '',
  editorList: [],
  selectedBlockCode: '',          // 首行预览
  selectedBlockSnippet: '',       // 完整片段，用于高亮
  selectedWorkspaceCode: '',
  selectedBlockLine: -1,          // 高亮的开始行号（0-based），用于区分重复积木
  selectedBlockEndLine: -1,       // 高亮的结束行号（0-based），用于范围高亮
  running: false,
  workspace: null,
  cateoryObj: LanguagePack.CateoryObj,
  languageObj: LanguagePack.LanguageObj,
  setPyCode(code) {
    this.pyCode = code;
  },
  setXmlCode(code) {
    this.xmlCode = code;
  },
  setRunState(val) {
    this.running = val;
  },
  setWorkspace(val) {
    this.workspace = val;
  },
  setViewMode(obj) {
    for (const k in obj) {
      if (!Object.hasOwn(this.viewMode, k)) continue;
      this.viewMode[k] = obj[k];
    }
  },
  setEditorList(val) {
    this.editorList = val;
  },
  setSelectedCodes({ blockCode = '', workspaceCode = '', startLine = -1, endLine = -1 } = {}) {
    const norm = (v) => Array.isArray(v) ? (v[0] || '') : (v || '');
    const firstNonEmptyLine = (code) => {
      return (code || '')
        .split('\n')
        .map(l => l.trim())
        .find(l => l.length > 0) || '';
    };
    const snippet = norm(blockCode);
    this.selectedBlockSnippet = snippet;
    this.selectedBlockCode = firstNonEmptyLine(snippet);
    this.selectedWorkspaceCode = norm(workspaceCode);
    this.selectedBlockLine = startLine >= 0 ? startLine : -1;
    this.selectedBlockEndLine = endLine >= 0 ? endLine : -1;
  },
  setICON() {
    const workspace = toRaw(this.workspace);
    // 部分场景（工具箱尚未初始化或切换失败）时直接跳过，避免空引用报错
    const toolbox = workspace?.getToolbox?.();
    const treeChildren = toolbox?.tree_?.children_;
    if (!treeChildren || !Array.isArray(treeChildren)) return;
    this.setBlocklyIcon(treeChildren);
  },
  async setBlocklyIcon(domArr) {
    if (!domArr || !Array.isArray(domArr)) return;
    let num = -1;
    // console.log(res)
    for (let i = 0; i < domArr.length; i++) {
      let dom = domArr[i];
      let delIcon = false;
      if (i > num && dom.parent_ && dom.parent_.content === this.cateoryObj.Extend && i < (dom.parent_.children_.length - 1)) {
        delIcon = true;
      }
      this.addClassName({ dom, delIcon });
      if (dom.children_ && dom.children_.length > 0) {
        this.setBlocklyIcon(dom.children_);
      }
    }
  },
  addClassName(data) {
    let dom = data.dom;
    let delIcon = data.delIcon;
    if (!dom.element_)
      return;
    let LanguageObj = this.languageObj;
    let CateoryObj = this.cateoryObj;
    let newDiv = dom.element_.firstElementChild.children[0];
    let div_txt = dom.content;
    newDiv.parentNode.setAttribute('key', div_txt);

    if (delIcon && dom.parent_ && dom.parent_.content === CateoryObj.Extend && dom.element_.firstElementChild.childElementCount < 3) {
      let title = '';
      let extensionObj = getExtensionBlock({
        cateoryObj: this.cateoryObj,
        categoryColors: this.categoryColors,
        languageObj: this.languageObj,
        master: this.master
      });
      let arr = extensionObj.data;
      for (let i = 0; i < arr.length; i++) {
        let str = arr[i].xml && arr[i].xml.length > 0 ? arr[i].xml.substring(arr[i].xml.indexOf('name='), arr[i].xml.indexOf('>')) : '';
        if (!str) break;
        let obj = {};
        let strArr = str.split(/["]+\s/);
        strArr.forEach((item) => {
          let arr1 = item.split('=');
          for (let j = 0; j < arr1.length; j++) {
            obj[arr1[0]] = arr1[1].substring(1);
          }
        })
        if (div_txt === obj.name) {
          title = arr[i].id;
          break;
        }
      }
      let $del = document.createElement('i');
      $del.className = 'delExtensionBlock';
      $del.setAttribute('key', title);
      $del.setAttribute('onclick', 'delExtensionBlock(event)');
      dom.element_.firstElementChild.appendChild($del);
    }

    if (div_txt === '') {
      dom.element_.firstElementChild.style.border = "none";
    } else if (div_txt === CateoryObj.Extend) {
      dom.element_.children[1].classList.add("canOpen");
      dom.element_.firstElementChild.style.borderLeft = "none";
      dom.element_.firstElementChild.style.paddingLeft = "12px";
      dom.element_.children[0].children[1].className = "blocklyTreeLabel-b";
    } else if (div_txt === CateoryObj.Advanced) {
      dom.element_.children[1].classList.add("canOpen");
      dom.element_.firstElementChild.style.borderLeft = "none";
      dom.element_.firstElementChild.style.paddingLeft = "12px";
      dom.element_.children[0].children[1].className = "blocklyTreeLabel-b";
    } else if (div_txt === CateoryObj.bluetooth) {
      dom.element_.style.borderLeft = "none";
      dom.element_.children[0].children[1].className = "blocklyTreeLabel-b";
    }
    if (div_txt === CateoryObj.AiMutualBox) {
      newDiv.classList.add("blocklyTreeIconBox"); return;
    } else if (div_txt === CateoryObj.Box_lattice) {
      newDiv.classList.add("blocklyTreeIconBox_lattice"); return;
    } else if (div_txt === CateoryObj.Input) {
      newDiv.classList.add("blocklyTreeIconInput"); return;
    } else if (div_txt === CateoryObj.Output) {
      newDiv.classList.add("blocklyTreeIconOutput"); return;
    } else if (div_txt === CateoryObj.onboard_RGB) {
      newDiv.classList.add("blocklyTreeIconRGB"); return;
    } else if (div_txt === CateoryObj.Show || div_txt === CateoryObj.display_screen) {
      newDiv.classList.add("blocklyTreeIconExhibit"); return;
    } else if (div_txt === CateoryObj.Screen) {
      dom.element_.children[1].classList.add("canOpen");
      dom.element_.children[1].classList.add("new-1956-gui");
      dom.element_.firstElementChild.style.paddingLeft = "0";
      dom.element_.children[0].children[1].className = "blocklyTreeLabel-b";
    }/*  else if (div_txt === CateoryObj.OpenCV) {
      newDiv.classList.add("blocklyTreeIconOpenCV"); return;
    } */ else if (div_txt === CateoryObj.Music) {
      newDiv.classList.add("blocklyTreeIconMusic"); return;
    } else if (div_txt === CateoryObj.Audio || div_txt === CateoryObj.xunfei_audio) {
      newDiv.classList.add("blocklyTreeIconAudio"); return;
    } else if (div_txt === CateoryObj.Pin) {
      newDiv.classList.add("blocklyTreeIconPin"); return;
    } else if (div_txt === CateoryObj.Radio) {
      newDiv.classList.add("blocklyTreeIconRadio"); return;
    } else if (div_txt === CateoryObj.Wifi || div_txt === CateoryObj.ConfigNetwork) {
      newDiv.classList.add("blocklyTreeIconWifi"); return;
    } else if (div_txt === CateoryObj.Logic) {
      newDiv.classList.add("blocklyTreeIconLogic"); return;
    } else if (div_txt === CateoryObj.Loop) {
      newDiv.classList.add("blocklyTreeIconCycle"); return;
    } else if (div_txt === CateoryObj.Math) {
      newDiv.classList.add("blocklyTreeIconMathematics"); return;
    } else if (div_txt === CateoryObj.Text) {
      newDiv.classList.add("blocklyTreeIconText"); return;
    } else if (div_txt === CateoryObj.List) {
      newDiv.classList.add("blocklyTreeIconList"); return;
    } else if (div_txt === CateoryObj.Variables) {
      newDiv.classList.add("blocklyTreeIconVariable"); return;
    } else if (div_txt === CateoryObj.IoT_OneNet) {
      newDiv.classList.add("blocklyTreeIconOneNet"); return;
    } else if (div_txt === CateoryObj.IoT_TinyWebIO) {
      newDiv.classList.add("blocklyTreeIconTinyWeblO"); return;
    } else if (div_txt === CateoryObj.IoT_Blynk) {
      newDiv.classList.add("blocklyTreeIconBlynk"); return;
    } else if (div_txt === CateoryObj.IoT_MQTT) {
      newDiv.classList.add("blocklyTreeIconMQTT"); return;
    } else if (div_txt === CateoryObj.mPython_MQTT) {
      newDiv.classList.add("blocklyTreeIconmPython_MQTT"); return;
    } else if (div_txt === CateoryObj.Traffic_Sign_Classifier) {
      newDiv.classList.add("blocklyTreeIconTraffic_Sign_Classifier"); return;
    } else if (div_txt === CateoryObj.Neopixel) {
      newDiv.classList.add("blocklyTreeIconNeopixel"); return;
    } else if (div_txt === CateoryObj.Bluebit) {
      newDiv.classList.add("blocklyTreeIconBluebit"); return;
    } else if (div_txt === CateoryObj.Sensor) {
      newDiv.classList.add("blocklyTreeIconSensor"); return;
    } else if (div_txt === 'Tello') {
      newDiv.classList.add("blocklyTreeIconTello"); return;
    } else if (div_txt === 'Yeelight') {
      newDiv.classList.add("blocklyTreeIconYeelight"); return;
    } else if (div_txt === CateoryObj.Functions) {
      newDiv.classList.add("blocklyTreeIconFunction"); return;
    } else if (div_txt === CateoryObj.Tuple) {
      newDiv.classList.add("blocklyTreeIconTuples"); return;
    } else if (div_txt === CateoryObj.Dictionary) {
      newDiv.classList.add("blocklyTreeIconDictionary"); return;
    } else if (div_txt === CateoryObj.Set) {
      newDiv.classList.add("blocklyTreeIconCollection"); return;
    } else if (div_txt === CateoryObj.File) {
      newDiv.classList.add("blocklyTreeIconFile"); return;
    } else if (div_txt === CateoryObj.Network) {
      newDiv.classList.add("blocklyTreeIconNetwork"); return;
    } else if (div_txt === CateoryObj.UART) {
      newDiv.classList.add("blocklyTreeIconSerialport"); return;
    } else if (div_txt === CateoryObj.Weather) {
      newDiv.classList.add("blocklyTreeIconWeather"); return;
    } else if (div_txt === CateoryObj.AI || div_txt === 'DQN') {
      newDiv.classList.add("blocklyTreeIconAI"); return;
    } else if (div_txt === CateoryObj.IoT_OneNet_WeChat) {
      newDiv.classList.add("blocklyTreeIconWX"); return;
    } else if (div_txt === CateoryObj.Add) {
      newDiv.classList.add("blocklyTreeIconAdd");
      newDiv.setAttribute('ref', 'blocklyTreeIconAdd');
      return;
    } else if (div_txt === CateoryObj.General) {
      newDiv.classList.add("blocklyTreeIconGeneral"); return;
    } else if (div_txt === CateoryObj.AI_face) {
      newDiv.classList.add("blocklyTreeFace-recognition1"); return;
    } else if (div_txt === CateoryObj.AI_20classid) {
      newDiv.classList.add("blocklyTreeAI_20classid"); return;
    } else if (div_txt === CateoryObj.AI_number) {
      newDiv.classList.add("blocklyTreeHandwriting-recognition"); return;
    } else if (div_txt === CateoryObj.AI_color) {
      newDiv.classList.add("blocklyTreecolor1"); return;
    } else if (div_txt === CateoryObj.linear_regression || div_txt === CateoryObj.linear_regression_cfz) {
      newDiv.classList.add("blocklyTreelinear-regression"); return;
    } else if (div_txt === CateoryObj.flower_de_luce || div_txt === CateoryObj.flower_de_luce_cfz) {
      newDiv.classList.add("blocklyTreeflower_de_luce"); return;
    } else if (div_txt === CateoryObj.Lark_pigeon) {
      newDiv.classList.add("blocklyTreeLark_pigeon"); return;
    } else if (div_txt === CateoryObj.N_add) {
      newDiv.classList.add("blocklyTreeN_add"); return;
    } else if (div_txt === CateoryObj.N_add_1) {
      newDiv.classList.add("blocklyTreeN_add_1"); return;
    } else if (div_txt === CateoryObj.N_QLM) {
      newDiv.classList.add("blocklyTreeN_QLM"); return;
    } else if (div_txt === CateoryObj.N_XFZ) {
      newDiv.classList.add("blocklyTreeN_XFZ"); return;
    } else if (div_txt === CateoryObj.N_EBW) {
      newDiv.classList.add("blocklyTreeN_EBW"); return;
    } else if (div_txt === CateoryObj.chatbot || div_txt === CateoryObj.chatbot_cfz) {
      newDiv.classList.add("blocklyTreechatbot"); return;
    } else if (div_txt === CateoryObj.gestures || div_txt === CateoryObj.gestures_cfz) {
      newDiv.classList.add("blocklyTreegestures"); return;
    } else if (div_txt === CateoryObj.microbit) {
      newDiv.classList.add("blocklyTreemicrobit"); return;
    } else if (div_txt === CateoryObj.FaceAI || div_txt === CateoryObj.FaceAI_cfz) {
      newDiv.classList.add("blocklyTreeFaceAI"); return;
    } else if (div_txt === CateoryObj.word_cloud) {
      newDiv.classList.add("blocklyTreeword_cloud"); return;
    } else if (div_txt === CateoryObj.article_kmeans || div_txt === CateoryObj.article_kmeans_cfz) {
      newDiv.classList.add("blocklyTreearticle_kmeans"); return;
    } else if (div_txt === CateoryObj.bluetooth) {
      newDiv.classList.add("blocklyTreebluetooth"); return;
    } else if (div_txt === CateoryObj.PeripheralEquipment) {
      newDiv.classList.add("blocklyTreePeripheralEquipment"); return;
    } else if (div_txt === CateoryObj.CenterEquipment) {
      newDiv.classList.add("blocklyTreeCenterEquipment"); return;
    } else if (div_txt === CateoryObj.SerialPort) {
      newDiv.classList.add("blocklyTreeSerialPort"); return;
    } else if (div_txt === CateoryObj.HumanComputer) {
      newDiv.classList.add("blocklyTreeHumanComputer"); return;
    } else if (div_txt === CateoryObj.MU) {
      newDiv.classList.add("blocklyTreeMU"); return;
    } else if (div_txt === CateoryObj.Carbit) {
      newDiv.classList.add("blocklyTreeCarbit"); return;
    } else if (div_txt === CateoryObj.Gamebit) {
      newDiv.classList.add("blocklyTreeGamebit"); return;
    } else if (div_txt === CateoryObj.ExtendbitII) {
      newDiv.classList.add("blocklyTreeExtendbitII"); return;
    } else if (div_txt === CateoryObj.Botbit) {
      newDiv.classList.add("blocklyTreeBotbit"); return;
    } else if (div_txt === CateoryObj.motor || div_txt === CateoryObj.Motor_Driver) {
      newDiv.classList.add("blocklyTreemotor"); return;
    } else if (div_txt === CateoryObj.khadas_yolo) {
      newDiv.classList.add("blocklyTreekhadas_yolo"); return;
    } else if (div_txt === CateoryObj.khadas_EmotionAI) {
      newDiv.classList.add("blocklyTreekhadas_EmotionAI"); return;
    } else if (div_txt === CateoryObj.khadas_CNN) {
      newDiv.classList.add("blocklyTreekhadas_CNN"); return;
    } else if (div_txt === CateoryObj.AIcamera || div_txt === CateoryObj.AIcameraV831 || div_txt === CateoryObj.AIcameraK210_2024) {
      newDiv.classList.add("blocklyTreeAIcamera"); return;
    } else if (div_txt === CateoryObj.AIcamera_LCD) {
      newDiv.classList.add("blocklyTreeAIcamera_LCD"); return;
    } else if (div_txt === CateoryObj.AIcamera_image && this.master !== '_1956_new') {
      newDiv.classList.add("blocklyTreeAIcamera_image"); return;
    } else if (div_txt === CateoryObj.AIcamera_camera) {
      newDiv.classList.add("blocklyTreeAIcamera_camera"); return;
    } else if (div_txt === CateoryObj.AIcamera_kpu) {
      newDiv.classList.add("blocklyTreeAIcamera_kpu"); return;
    } else if (div_txt === CateoryObj.TableRobot_color) {
      newDiv.classList.add("blocklyTreeTableRobot_color"); return;
    } else if (div_txt === CateoryObj.TableRobot_motion) {
      newDiv.classList.add("blocklyTreeTableRobot_motion"); return;
    } else if (div_txt === CateoryObj.TableRobot_baidu_audio) {
      newDiv.classList.add("blocklyTreeTableRobot_baidu_audio"); return;
    } else if (div_txt === CateoryObj.TableRobot_tracking) {
      newDiv.classList.add("blocklyTreeTableRobot_tracking"); return;
    } else if (div_txt === CateoryObj.TableRobot_Config) {
      newDiv.classList.add("TableRobot_Config"); return;
    } else if (div_txt === CateoryObj.baidu_audio) {
      newDiv.classList.add("blocklyTreebaidu_audio"); return;
    } else if (div_txt === CateoryObj.python3_baidu_audio) {
      newDiv.classList.add("blocklyTreebaidu_audio"); return;
    } else if (div_txt === CateoryObj.I2C) {
      newDiv.classList.add("blocklyTreeI2C"); return;
    } else if (div_txt === CateoryObj.Actuator) {
      newDiv.classList.add("blocklyTreeActuator"); return;
    } else {
      if (div_txt != LanguageObj.Advanced && div_txt != LanguageObj.Extend) {
        for (const key in CateoryObj) {
          if (CateoryObj[key] === div_txt && this.categoryColors[key]) {
            newDiv.style.background = this.categoryColors[key];
            newDiv.classList.add("blocklyTreeIconGeneral2");
            return
          }
        }
        newDiv.classList.add("blocklyTreeIconGeneral");
      }
    }
  },
  loadXMLCode({ title, xmlCode, notClear }) {
    if (!xmlCode) return;
    let _this = this
    let workspace = toRaw(this.workspace);
    if (!workspace) {
      setTimeout(() => {
        _this.loadXMLCode({ title, xmlCode, notClear });
      }, 100)
      return;
    }
    try {
      if (this.viewMode.editor) {
        this.setViewMode({gui: true,  console: true, editor: false, teach: false});
      }
      // xmlCode = unescape(xmlCode.replace(/\\u/g, "%u"));
      if (!notClear)
        workspace.clear();
      let dom = Blockly.Xml.textToDom(xmlCode);
      Blockly.Xml.domToWorkspace(dom, workspace);
      
      workspace.scrollCenter();
      Blockly.svgResize(workspace);
      var code = Blockly.Python.workspaceToCode(workspace);
      localStorage.code = code;
      this.setPyCode(code);

      // localStorage储存代码以便下一次打开软件时记忆
      var xmlDom = Blockly.Xml.workspaceToDom(workspace);
      var blockxml = Blockly.Xml.domToPrettyText(xmlDom);
      localStorage.xml = blockxml;
      this.setXmlCode(blockxml);
    } catch (err) {
      console.log(err)
      alert(err)
    }
  },
  loadPyCode(data) {
    if (!this.viewMode.editor) {
      this.setViewMode({gui: false,  console: true, editor: true, teach: false});
    }
    if (!data.notMain) {
      let have = false;
      let arr = this.editorList;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].path === 'main.py' && !arr[i].isHandPY) {
          arr.unshift(...arr.splice(i, 1));
          arr[0].select = true;
          arr[0].data = data.code;
          arr[0].noPre = true;
          have = true;
        } else {
          arr[i].select = false;
        }
      }
      if (!have) {
        arr.unshift({
          id: new Date().getTime(),
          data: data.code,
          isHandPY: false,
          noPre: true,
          path: 'main.py',
          select: true
        })
      }
      this.setEditorList(arr);
    }
    this.setPyCode(data.code);
  },
}