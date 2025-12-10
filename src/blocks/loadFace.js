// 懒加载人脸识别（OpenCV）积木与生成器，避免对共用模块的耦合
export async function loadFaceBlocks() {
  await Promise.all([
    import('./NewFace/face_ai.js'),
    import('./NewFace/generators.js')
  ]);
}

