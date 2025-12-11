import { loadFaceDetectionBlocks } from '@/blocks/NewFace/loader';

let faceDetectionBlocksLoaded = false;
function ensureFaceDetectionBlocksLoaded() {
    if (faceDetectionBlocksLoaded) return;
    faceDetectionBlocksLoaded = true;
    loadFaceDetectionBlocks().catch((e) => console.error('加载人脸检测积木失败', e));
}

// 定义人脸检测子栏目的工具栏 XML 结构（作为嵌套 category）
export function getFaceDetectionToolbox() {
    ensureFaceDetectionBlocksLoaded();
    const toolbox = `
    <category name="人脸检测" colour="#4C9AFF">
      <block type="face_ai_init_globals"></block>
      <block type="face_ai_step1_init"></block>
      <block type="face_ai_step2_input">
        <value name="VALUE">
          <shadow type="face_ai_local_image"></shadow>
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
    </category>`;
    return toolbox;
}

