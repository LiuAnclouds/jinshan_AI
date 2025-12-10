import { CategoryColors } from '@/global/colors';
import { loadFaceBlocks } from '@/blocks/loadFace';

let faceBlocksLoaded = false;
function ensureFaceBlocksLoaded() {
    if (faceBlocksLoaded) return;
    faceBlocksLoaded = true;
    // 异步加载人脸积木与生成器，减少对共用模块的耦合
    loadFaceBlocks().catch((e) => console.error('加载人脸识别积木失败', e));
}

// 定义人脸识别的工具栏 XML 结构
function getFaceAiToolbox() {
    ensureFaceBlocksLoaded();
    const toolbox = `
  <category name="人脸识别 (OpenCV)" colour="#4C9AFF">
    <label text="人脸检测"></label>
    <block type="face_ai_step1_init"></block>
    <block type="face_ai_step2_input">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">test.jpg</field>
        </shadow>
      </value>
    </block>
    <block type="face_ai_step3_process"></block>
    <block type="face_ai_step4_detect"></block>
    <block type="face_ai_step5_data"></block>
    <block type="face_ai_step6_draw">
      <value name="COLOR">
        <block type="face_ai_rgb"></block>
      </value>
    </block>
    <block type="face_ai_step7_show"></block>
    <block type="face_ai_rgb"></block>

    <sep></sep>
    <label text="人脸注册"></label>
    <block type="face_ai_reg_input"></block>
    <block type="face_ai_reg_commit"></block>

    <sep></sep>
    <label text="人脸识别"></label>
    <block type="face_ai_rec_input"></block>
    <block type="face_ai_rec_run"></block>
    <block type="face_ai_rec_label"></block>
    <block type="face_ai_rec_score"></block>
  </category>
  <sep></sep>`;
    return toolbox;
}

// 导出函数，根据传入的 data 参数决定是否显示
export default function (data) {
    let toolbox = '';
    // 判断逻辑：如果 data 存在，且 data.type 等于 'newface'，则加载这个工具箱
    // 你可以根据 url 参数自由调整这里的判断逻辑
    if (data && data.type === 'newface') {
        toolbox = getFaceAiToolbox();
    }
    return toolbox;
};