// 懒加载人脸识别（OpenCV）积木与生成器，避免对共用模块的耦合

// 加载人脸检测模块
export async function loadFaceDetectionBlocks() {
  await Promise.all([
    import('./blocks/face_detection_blocks.js'),
    import('./generators/face_detection_generators.js')
  ]);
}

// 加载人脸注册模块
export async function loadFaceRegistrationBlocks() {
  await Promise.all([
    import('./blocks/face_registration_blocks.js'),
    import('./generators/face_registration_generators.js')
  ]);
}

// 加载人脸识别模块
export async function loadFaceRecognitionBlocks() {
  await Promise.all([
    import('./blocks/face_recognition_blocks.js'),
    import('./generators/face_recognition_generators.js')
  ]);
}

// 兼容旧版本：加载所有模块
export async function loadFaceBlocks() {
  await Promise.all([
    loadFaceDetectionBlocks(),
    loadFaceRegistrationBlocks(),
    loadFaceRecognitionBlocks()
  ]);
}

