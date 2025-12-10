
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// 默认配置
const defaultConfig = {
  animate: true,
  // allowClose: false,
  overlayOpacity: 0.5,
  overlayColor: '#000',
  disableActiveInteraction: true,
  showProgress: true,
  showButtons: ['next', 'previous', 'close'],
  progressText: '{{current}} / {{total}}',
  doneBtnText: '完成',
  closeBtnText: '跳过',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  onDestroyStarted: (element, step, { config, state, driver }) => {
    // console.log(element, step, config, state, driver);
    console.log(config);
    config?.doneCb()
    driver?.destroy();
  }
}

export default function(steps, config={}) {
  const driverObj = driver({
    ...defaultConfig,
    ...config,
    steps
  });

  driverObj.drive();
}