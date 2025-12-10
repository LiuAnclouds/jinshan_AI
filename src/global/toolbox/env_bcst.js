import {CategoryColors} from '@/global/colors';

function getEnvBcstToolbox() {
  let toolbox = `
  <category name="智能环境语音播报系统" colour="${CategoryColors.System}">
    <block type="env_bcst_init"></block>
    <block type="env_bcst_img_analyze"></block>
    <block type="env_bcst_txt_to_speech"></block>
    <block type="env_bcst_web_to_speech"></block>
  </category>
  <sep></sep>`
  return toolbox;
}

export default function (data) {
  let toolbox = '';
  if (!data) return toolbox;
  else if (Object.hasOwnProperty.call(data, 'env_bcst')) toolbox = getEnvBcstToolbox();
  
  return toolbox;
};