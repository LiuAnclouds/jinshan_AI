import { getFaceDetectionToolbox } from './face_detection';
import { getFaceRegistrationToolbox } from './face_registration';
import { getFaceRecognitionToolbox } from './face_recognition';

// 合并后的“人脸识别”栏目（含注册+识别积木）
function getMergedRecognitionCategory() {
    return `
    <category name="人脸识别" colour="#4C9AFF">
      <block type="face_ai_reg_init_globals"></block>
      <block type="face_ai_reg_input"></block>
      <block type="face_ai_reg_commit"></block>
      <sep></sep>
      <block type="face_ai_rec_init_globals"></block>
      <block type="face_ai_rec_input"></block>
      <block type="face_ai_rec_run"></block>
      <block type="face_ai_rec_label"></block>
      <block type="face_ai_rec_score"></block>
    </category>`;
}

// 根据入口类型加载对应栏目（直接平铺为顶级，不再包一层 "人脸识别 (OpenCV)"）
export default function (data) {
    const type = data?.type;
    const faceTypes = ['newface', 'face-detection', 'face-registration', 'face-recognition'];
    if (!faceTypes.includes(type)) return '';

    let result = '';
    if (type === 'face-detection') {
        result += getFaceDetectionToolbox();
    } else if (type === 'face-registration') {
        result += getFaceRegistrationToolbox();
    } else if (type === 'face-recognition') {
        // 识别场景：合并注册+识别为一个栏目
        result += getMergedRecognitionCategory();
    } else {
        // 默认入口保留三个栏目，其中识别栏目为合并版
        result += getFaceDetectionToolbox();
        result += getFaceRegistrationToolbox();
        result += getMergedRecognitionCategory();
    }

    return `${result}<sep></sep>`;
};