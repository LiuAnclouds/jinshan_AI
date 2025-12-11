import mainToolBox from './main';
import dqnToolbox from './dqn';
import envBcstToolbox from './env_bcst';

// 1. 引入你的新模块
import newFaceToolbox from './new_face';


export default function (data) {
  const toolbox = `
  <xml>

    ${newFaceToolbox(data)}  ${mainToolBox}
    ${dqnToolbox(data)}
    ${envBcstToolbox(data)}
    


  </xml>`
  return toolbox;
};