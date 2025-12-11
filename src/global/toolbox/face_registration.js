import { loadFaceRegistrationBlocks } from '@/blocks/NewFace/loader';

let faceRegistrationBlocksLoaded = false;
function ensureFaceRegistrationBlocksLoaded() {
    if (faceRegistrationBlocksLoaded) return;
    faceRegistrationBlocksLoaded = true;
    loadFaceRegistrationBlocks().catch((e) => console.error('加载人脸注册积木失败', e));
}

// 定义人脸注册子栏目的工具栏 XML 结构（作为嵌套 category）
export function getFaceRegistrationToolbox() {
    ensureFaceRegistrationBlocksLoaded();
    const toolbox = `
    <category name="人脸注册" colour="#4C9AFF">
    <block type="face_ai_reg_init_globals"></block>
      <block type="face_ai_reg_input"></block>
      <block type="face_ai_reg_commit"></block>
    </category>`;
    return toolbox;
}

