import mainToolBox from './main';
import dqnToolbox from './dqn';
import envBcstToolbox from './env_bcst';
<<<<<<< HEAD


=======
// 1. 引入你的新模块
import newFaceToolbox from './new_face';
>>>>>>> b24584f (HighLight)

export default function (data) {
  const toolbox = `
  <xml>
<<<<<<< HEAD
    ${dqnToolbox(data)}
    ${envBcstToolbox(data)}
    ${mainToolBox}
=======
    ${newFaceToolbox(data)}  ${mainToolBox}
    ${dqnToolbox(data)}
    ${envBcstToolbox(data)}
    

>>>>>>> b24584f (HighLight)
  </xml>`
  return toolbox;
};