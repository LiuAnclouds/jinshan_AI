import { loadFaceRecognitionBlocks } from '@/blocks/NewFace/loader';

let faceRecognitionBlocksLoaded = false;
function ensureFaceRecognitionBlocksLoaded() {
    if (faceRecognitionBlocksLoaded) return;
    faceRecognitionBlocksLoaded = true;
    loadFaceRecognitionBlocks().catch((e) => console.error('加载人脸识别积木失败', e));
}

// 定义人脸识别子栏目的工具栏 XML 结构（作为嵌套 category）
export function getFaceRecognitionToolbox() {
    ensureFaceRecognitionBlocksLoaded();
    const toolbox = `
    <category name="人脸识别" colour="#4C9AFF">
    <block type="face_ai_rec_init_globals"></block>
      <block type="face_ai_rec_input"></block>
      <block type="face_ai_rec_run"></block>
      <block type="face_ai_rec_label"></block>
      <block type="face_ai_rec_score"></block>
    </category>`;
    return toolbox;
}

