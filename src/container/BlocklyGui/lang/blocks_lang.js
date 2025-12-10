import * as Blockly from 'blockly/core';

const DEVICE = '掌控板';


// Blockly.Msg = Blockly.Msg || {}; // 确保 Msg 存在

/* MICROBIT */
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_MESSAGE0 = '加速度计 X 轴';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_TOOLTIP = '获取加速度传感器 X 轴参数。';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_MESSAGE0 = '加速度计 Y 轴';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_TOOLTIP = '获取加速度传感器 Y 轴参数。';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_MESSAGE0 = '加速度计 Z 轴';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_TOOLTIP = '获取加速度传感器 Z 轴参数。';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z';
Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_MESSAGE0 = '发生过手势 %1';
Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_TOOLTIP = '通过返回 “真” 或者 “假” 提示自从上次检查后是否发生过指定的手势。';
Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture';
Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_MESSAGE0 = '发生手势 %1';
Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_TOOLTIP = '通过返回 “真” 或者 “假” 表示自从现在发生指定的手势。';
Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_MESSAGE0 = '获取手势';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_TOOLTIP = '返回发生过的手势，同时清除以前的手势。';
Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures';
Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_MESSAGE0 = '当前手势';
Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_TOOLTIP = '返回当前手势名称。';
Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture';
Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_MESSAGE0 = '按键 %1 已经按下';
Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_TOOLTIP = '如果指定按键按下返回 “真”，否则返回 “假”。';
Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed';
Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_MESSAGE0 = '按键 %1 曾经按下';
Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_TOOLTIP = '如果按键曾经按下过返回 “真”，否则返回 “假”。';
Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed';
Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_MESSAGE0 = '按键 %1 按下过的次数';
Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_TOOLTIP = '返回按键按下的总次数，然后清除计数。';
Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses';
Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.calibrate';
Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_MESSAGE0 = '校正指南针';
Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_TOOLTIP = '开始校正指南针，提高精度。';
Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_MESSAGE0 = '指南针已经校正';
Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_TOOLTIP = '如果指南针已经校正返回 “真”，否则返回 “假”。';
Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.is_calibrated';
Blockly.Msg.MICROBIT_COMPASS_HEADING_MESSAGE0 = '指南针方向';
Blockly.Msg.MICROBIT_COMPASS_HEADING_TOOLTIP = '返回指南针的数值，0 - 360 度，顺时针方向，正北方是 0。';
Blockly.Msg.MICROBIT_COMPASS_HEADING_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.heading';
Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_MESSAGE0 = '指南针磁场强度';
Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_TOOLTIP = '返回设备周围磁场的强度。';
Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_field_strength';
Blockly.Msg.MICROBIT_COMPASS_X_MESSAGE0 = '磁力 X轴';
Blockly.Msg.MICROBIT_COMPASS_X_TOOLTIP = '返回X轴方向的磁力数值。';
Blockly.Msg.MICROBIT_COMPASS_X_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_x';
Blockly.Msg.MICROBIT_COMPASS_Y_MESSAGE0 = '磁力 Y轴';
Blockly.Msg.MICROBIT_COMPASS_Y_TOOLTIP = '返回Y轴方向的磁力数值。';
Blockly.Msg.MICROBIT_COMPASS_Y_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_y';
Blockly.Msg.MICROBIT_COMPASS_Z_MESSAGE0 = '磁力 Z轴';
Blockly.Msg.MICROBIT_COMPASS_Z_TOOLTIP = '返回Z轴方向的磁力数值。';
Blockly.Msg.MICROBIT_COMPASS_Z_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_z';
Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_MESSAGE0 = '获取第 %1 列 %2 行 位置的亮度';
Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_TOOLTIP = '获取第 X 列和 Y 行位置 LED 的亮度。 0 (不亮)，  9 (最亮)。';
Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel';
Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_MESSAGE0 = '设第 %1 列 %2 行 LED 的亮度到 %3';
Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_TOOLTIP = '设置第 X 列 Y 行处 LED 的亮度。0 (不亮)，9 (最亮)。';
Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel';
Blockly.Msg.MICROBIT_DISPLAY_CLEAR_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear';
Blockly.Msg.MICROBIT_DISPLAY_CLEAR_MESSAGE0 = '清除显示内容';
Blockly.Msg.MICROBIT_DISPLAY_CLEAR_TOOLTIP = '清除全部显示的内容 - 设置所有 LED 亮度为 0 (不亮)。';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_MESSAGE0 = '显示图像/文本 %1';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_TOOLTIP = '显示图像或文本消息。';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_WITH_BRI_MESSAGE0 = '以亮度 ( %1 / %2 ) 显示图像 %3';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_WITH_BRI_TOOLTIP = '以指定亮度显示图像。';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_MESSAGE0 = '动画显示图像 %1 延时 %2 毫秒。%3 等待 %4 %5 循环 %6 %7 清除 %8';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_TOOLTIP = '动画方式显示图像列表，每两个图像之间延时一段时间。还可以设置等待模式、循环模式以及完成后清除屏幕。';
Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_MESSAGE0 = '滚动消息 %1';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_TOOLTIP = '滚动方式显示文字。';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_ANIMATION_MESSAGE0 = '滚动消息 %1 延时 %2 毫秒。%3 等待 %4 %5 循环 %6 %7 等宽字体 %8';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_ANIMATION_TOOLTIP = '滚动方式显示文字。还可以设置等待模式、循环模式以及字体等宽。';
Blockly.Msg.MICROBIT_DISPLAY_SCROLL_ANIMATION_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll';
Blockly.Msg.MICROBIT_DISPLAY_ON_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on';
Blockly.Msg.MICROBIT_DISPLAY_ON_MESSAGE0 = '打开屏幕';
Blockly.Msg.MICROBIT_DISPLAY_ON_TOOLTIP = '打开屏幕显示。';
Blockly.Msg.MICROBIT_DISPLAY_OFF_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off';
Blockly.Msg.MICROBIT_DISPLAY_OFF_MESSAGE0 = '关闭屏幕';
Blockly.Msg.MICROBIT_DISPLAY_OFF_TOOLTIP = '关闭屏幕显示。';
Blockly.Msg.MICROBIT_DISPLAY_IS_ON_MESSAGE0 = '显示已经打开';
Blockly.Msg.MICROBIT_DISPLAY_IS_ON_TOOLTIP = '屏幕已经打开就返回 “真”，否则返回 “假”';
Blockly.Msg.MICROBIT_DISPLAY_IS_ON_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on';
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_MESSAGE0 = '内置图像 %1';
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_TOOLTIP = '选择一个内置的图像。';
Blockly.Msg.MICROBIT_IMAGE_BUILTINS_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes';
Blockly.Msg.MICROBIT_IMAGE_COPY_MESSAGE0 = '复制图像 %1';
Blockly.Msg.MICROBIT_IMAGE_COPY_TOOLTIP = '创建参考图像副本。';
Blockly.Msg.MICROBIT_IMAGE_COPY_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy';
Blockly.Msg.MICROBIT_IMAGE_INVERT_MESSAGE0 = '反显图像 %1';
Blockly.Msg.MICROBIT_IMAGE_INVERT_TOOLTIP = '反显图像（负片效果）。';
Blockly.Msg.MICROBIT_IMAGE_INVERT_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert';
Blockly.Msg.MICROBIT_IMAGE_CREATE_MESSAGE0 = '创建图像 %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30';
Blockly.Msg.MICROBIT_IMAGE_CREATE_TOOLTIP = '创建新图像。';
Blockly.Msg.MICROBIT_IMAGE_CREATE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image';
Blockly.Msg.MICROBIT_IMAGE_CREATE1_MESSAGE0 = '创建图像 %1 第一行%2第二行%3第三行%4第四行%5第五行%6';
Blockly.Msg.MICROBIT_IMAGE_CREATE1_TOOLTIP = '创建新图像。';
Blockly.Msg.MICROBIT_IMAGE_CREATE1_HELPURL = '';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_MESSAGE0 = '平移图像 %1 %2 %3 位';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_TOOLTIP = '向特定方向移动图像，并返回移动后的结果。';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.shift_left';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_LEFT = '左移';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_RIGHT = '右移';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_UP = '上移';
Blockly.Msg.MICROBIT_IMAGE_SHIFT_DOWN = '下移';
Blockly.Msg.MICROBIT_MICROBIT_PANIC_MESSAGE0 = '错误状态码 %1';
Blockly.Msg.MICROBIT_MICROBIT_PANIC_TOOLTIP = '进入错误模式，提示程序存在错误。需要重新启动。用一个数字表示状态码。';
Blockly.Msg.MICROBIT_MICROBIT_PANIC_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic';
Blockly.Msg.MICROBIT_MICROBIT_RESET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset';
Blockly.Msg.MICROBIT_MICROBIT_RESET_MESSAGE0 = '复位 micro:bit';
Blockly.Msg.MICROBIT_MICROBIT_RESET_TOOLTIP = '复位 micro:bit，重新运行';
Blockly.Msg.MICROBIT_MICROBIT_SLEEP_MESSAGE0 = '等待 %1 %2';
Blockly.Msg.MICROBIT_MICROBITS_SLEEP_MESSAGE0 = '等待 %1 毫秒';


//音乐
Blockly.Msg.MICROBITS_SET_MUSIC_PIN_HELPURL = '';
Blockly.Msg.MICROBITS_SET_MUSIC_PIN_TOOLTIP = '';
Blockly.Msg.MICROBITS_SET_MUSIC_PIN_MESSAGE0 = '设置默认蜂鸣器引脚为 %1';

Blockly.Msg.MICROBITS_TRUE_MUSIC_PLAY_BUILT_IN_MESSAGE0 = '内置音乐 %1 %2 等待 %3 %4 循环 %5';
Blockly.Msg.MICROBITS_TRUE_MUSIC_PLAY_BUILT_IN_TOOLTIP = '播放内置的音乐，可以设置等待模式和循环播放。';
Blockly.Msg.MICROBITS_TRUE_MUSIC_PLAY_BUILT_IN_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies';

Blockly.Msg.MICROBITS_TRUE_MUSIC_PITCH_MESSAGE0 = '播放音调 %1 %2 延时  %3 毫秒';
Blockly.Msg.MICROBITS_TRUE_MUSIC_PITCH_TOOLTIP = '在设定的时间长度里播放音调。';
Blockly.Msg.MICROBITS_TRUE_MUSIC_PITCH_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch';

Blockly.Msg.MICROBITS_MUSIC_PLAY_BUZZER_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.MICROBITS_MUSIC_PLAY_BUZZER_NOTE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MUSIC_PLAY_BUZZER_NOTE_MESSAGE0 ='播放音调 %1';

Blockly.Msg.MICROBITS_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0 = '播放音符列表 %1 等待 %2 %3 循环 %4';
Blockly.Msg.MICROBITS_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP = '播放音符列表，如C4:4、G4:8等，音符为字符串形式。默认是' + DEVICE + '的P6引脚\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12';
Blockly.Msg.MICROBITS_MUSIC_PLAY_LIST_OF_NOTES_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/basics/buzz.html';

Blockly.Msg.MICROBITS_MUSIC_RESET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset';
Blockly.Msg.MICROBITS_MUSIC_RESET_MESSAGE0 = '恢复音乐设置';
Blockly.Msg.MICROBITS_MUSIC_RESET_TOOLTIP = '将所有音乐设置 (当前节拍, 音阶和周期) 恢复成默认值。';

Blockly.Msg.MICROBITS_MUSIC_STOP_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop';
Blockly.Msg.MICROBITS_MUSIC_STOP_MESSAGE0 = '停止播放音乐';
Blockly.Msg.MICROBITS_MUSIC_STOP_TOOLTIP = '默认是' + DEVICE + '的P6引脚\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12';

Blockly.Msg.MICROBITS_MUSIC_SET_TEMPO_MESSAGE0 = '设置每一拍等同 %1 分音符，每分钟节拍数 %2';
Blockly.Msg.MICROBITS_MUSIC_SET_TEMPO_TOOLTIP = '设置回放速度 (节拍)。一定数量的滴答代表一拍，每拍每分钟播放次数 (BPM 每分钟节拍)。';
Blockly.Msg.MICROBITS_MUSIC_SET_TEMPO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo';

Blockly.Msg.MICROBITS_MUSIC_GET_TEMPO_MESSAGE0 = '获取当前节拍';
Blockly.Msg.MICROBITS_MUSIC_GET_TEMPO_TOOLTIP = '获取当前节拍: 每节拍滴答数, 每分钟节拍 (BPM)。';
Blockly.Msg.MICROBITS_MUSIC_GET_TEMPO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo';


//MU
Blockly.Msg.MICROBITS_MU_INIT_HELPURL = '';
Blockly.Msg.MICROBITS_MU_INIT_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_INIT_MESSAGE0 = '初始化 MU 视觉传感器 地址 %1';

Blockly.Msg.MICROBITS_MU_BEGIN_HELPURL = '';
Blockly.Msg.MICROBITS_MU_BEGIN_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_BEGIN_MESSAGE0 = '开启算法 %1';

Blockly.Msg.MICROBITS_MU_VISION_TYPE_MESSAGE0 = '%1 颜色检测 %2 颜色识别 %3 %4 球体检测 %5 人体检测 %6 %7 形状卡片检测 %8 交通卡片检测 %9 %10 数字卡片检测 %11 开启所有算法';

Blockly.Msg.MICROBITS_MU_VISION_COLOR_DETECT = '颜色检测';
Blockly.Msg.MICROBITS_MU_VISION_COLOR_RECOGNITION = '颜色识别';
Blockly.Msg.MICROBITS_MU_VISION_BALL_DETECT = '球体检测';
Blockly.Msg.MICROBITS_MU_VISION_BODY_DETECT = '人体检测';
Blockly.Msg.MICROBITS_MU_VISION_SHAPE_CARD_DETECT = '形状卡片检测';
Blockly.Msg.MICROBITS_MU_VISION_TRAFFIC_CARD_DETECT = '交通卡片检测';
Blockly.Msg.MICROBITS_MU_VISION_NUM_CARD_DETECT = '数字卡片检测';
Blockly.Msg.MICROBITS_MU_VISION_ALL = '开启所有算法';

Blockly.Msg.MICROBITS_MU_LEVEL_DEFAULT = '默认';
Blockly.Msg.MICROBITS_MU_LEVEL_SPEED = '速度优先';
Blockly.Msg.MICROBITS_MU_LEVEL_BALANCE = '平衡';
Blockly.Msg.MICROBITS_MU_LEVEL_ACCURACY = '准确性优先';

Blockly.Msg.MICROBITS_MU_SET_LEVEL_HELPURL = '';
Blockly.Msg.MICROBITS_MU_SET_LEVEL_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_SET_LEVEL_MESSAGE0 = '设置算法性能 %1 为 %2';

Blockly.Msg.MICROBITS_MU_GET_LEVEL_HELPURL = '';
Blockly.Msg.MICROBITS_MU_GET_LEVEL_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_GET_LEVEL_MESSAGE0 = '获取算法性能 %1';

Blockly.Msg.MICROBITS_MU_FPS_NORMAL = '正常模式';
Blockly.Msg.MICROBITS_MU_FPS_HIGH = '高帧率模式';

Blockly.Msg.MICROBITS_MU_SET_FPS_MODE_MESSAGE0 = '设置摄像头帧率模式为 %1';
Blockly.Msg.MICROBITS_MU_SET_FPS_MODE_TOOLTIP = '高帧率模式下，识别速度增加，同时功耗增加';
Blockly.Msg.MICROBITS_MU_SET_FPS_MODE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_GET_FPS_MODE_MESSAGE0 = '获取摄像头帧率模式';
Blockly.Msg.MICROBITS_MU_GET_FPS_MODE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_GET_FPS_MODE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_AUTO_WHITE_BALANCE = '自动白平衡';
Blockly.Msg.MICROBITS_MU_LOCK_WHITE_BALANCE = '锁定白平衡';
Blockly.Msg.MICROBITS_MU_WHITE_LIGHT = '白光模式';
Blockly.Msg.MICROBITS_MU_YELLOW_LIGHT = '黄光模式';

Blockly.Msg.MICROBITS_MU_SET_AWB_MODE_MESSAGE0 = '设置摄像头白平衡模式为 %1';
Blockly.Msg.MICROBITS_MU_SET_AWB_MODE_TOOLTIP = '调节因为外界光源变化而引起的图像偏色';
Blockly.Msg.MICROBITS_MU_SET_AWB_MODE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_GET_AWB_MODE_MESSAGE0 = '获取摄像头白平衡模式';
Blockly.Msg.MICROBITS_MU_GET_AWB_MODE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_GET_AWB_MODE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_ZOOM_DEFAULT = '默认';
Blockly.Msg.MICROBITS_MU_ZOOM_1 = '变焦模式1';
Blockly.Msg.MICROBITS_MU_ZOOM_2 = '变焦模式2';
Blockly.Msg.MICROBITS_MU_ZOOM_3 = '变焦模式3';
Blockly.Msg.MICROBITS_MU_ZOOM_4 = '变焦模式4';
Blockly.Msg.MICROBITS_MU_ZOOM_5 = '变焦模式5';

Blockly.Msg.MICROBITS_MU_SET_ZOOM_MODE_MESSAGE0 = '设置摄像头变焦模式为 %1';
Blockly.Msg.MICROBITS_MU_SET_ZOOM_MODE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_SET_ZOOM_MODE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_GET_ZOOM_MODE_MESSAGE0 = '获取摄像头变焦模式';
Blockly.Msg.MICROBITS_MU_GET_ZOOM_MODE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_GET_ZOOM_MODE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_SET_DEFAULT_MESSAGE0 = '恢复传感器默认设置';
Blockly.Msg.MICROBITS_MU_SET_DEFAULT_TOOLTIP = '关闭所有算法，重置所有硬件设置';
Blockly.Msg.MICROBITS_MU_SET_DEFAULT_HELPURL = '';

Blockly.Msg.MICROBITS_MU_RESTART_MESSAGE0 = '重启传感器';
Blockly.Msg.MICROBITS_MU_RESTART_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_RESTART_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LED_CLOSE = 'LED关';
Blockly.Msg.MICROBITS_MU_LED_RED = '红色';
Blockly.Msg.MICROBITS_MU_LED_GREEN = '绿色';
Blockly.Msg.MICROBITS_MU_LED_YELLOW = '黄色';
Blockly.Msg.MICROBITS_MU_LED_BLUE = '蓝色';
Blockly.Msg.MICROBITS_MU_LED_PURPLE = '紫色';
Blockly.Msg.MICROBITS_MU_LED_CYAN = '青色';
Blockly.Msg.MICROBITS_MU_LED_WHITE = '白色';

Blockly.Msg.MICROBITS_MU_LED_SET_COLOR_MESSAGE0 = '设置 %1 亮度 %2 检测到结果时的颜色为 %3 %4 未检测到结果时的颜色为 %5';
Blockly.Msg.MICROBITS_MU_LED_SET_COLOR_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LED_SET_COLOR_HELPURL = '';

Blockly.Msg.MICROBITS_MU_VALUE_STATUS = '检测状态';
Blockly.Msg.MICROBITS_MU_VALUE_XVALUE = '目标的横向坐标';
Blockly.Msg.MICROBITS_MU_VALUE_YVALUE = '目标的纵向坐标';
Blockly.Msg.MICROBITS_MU_VALUE_WIDTHVALUE = '目标的宽度';
Blockly.Msg.MICROBITS_MU_VALUE_HEIGHTVALUE = '目标的高度';
Blockly.Msg.MICROBITS_MU_VALUE_LABEL = '目标的标签';
Blockly.Msg.MICROBITS_MU_VALUE_RVALUE = '红色通道值（颜色识别模式）';
Blockly.Msg.MICROBITS_MU_VALUE_GVALUE = '绿色通道值（颜色识别模式）';
Blockly.Msg.MICROBITS_MU_VALUE_BVALUE = '蓝色通道值（颜色识别模式）';

Blockly.Msg.MICROBITS_MU_GET_VALUE_MESSAGE0 = '获取 %1 识别结果 %2';
Blockly.Msg.MICROBITS_MU_GET_VALUE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_GET_VALUE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_PROXIMITY_ENABLE = '接近检测';
Blockly.Msg.MICROBITS_MU_LS_AMBIENT_LIGHT_ENABLE = '环境光检测';
Blockly.Msg.MICROBITS_MU_LS_COLOR_ENABLE = '颜色检测';
Blockly.Msg.MICROBITS_MU_LS_GESTURE_ENABLE = '手势检测';

Blockly.Msg.MICROBITS_MU_LS_BEGIN_MESSAGE0 = '开启光线传感器 %1 功能';
Blockly.Msg.MICROBITS_MU_LS_BEGIN_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_BEGIN_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_END_MESSAGE0 = '关闭光线传感器 %1 功能';
Blockly.Msg.MICROBITS_MU_LS_END_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_END_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_SENSITIVITY_DEFAULT = '默认灵敏度';
Blockly.Msg.MICROBITS_MU_LS_SENSITIVITY_1 = '灵敏度1';
Blockly.Msg.MICROBITS_MU_LS_SENSITIVITY_2 = '灵敏度2';
Blockly.Msg.MICROBITS_MU_LS_SENSITIVITY_3 = '灵敏度3';

Blockly.Msg.MICROBITS_MU_LS_SET_SENSITIVITY_MESSAGE0 = '设置光线传感器灵敏度为 %1';
Blockly.Msg.MICROBITS_MU_LS_SET_SENSITIVITY_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_SET_SENSITIVITY_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_WB_ENABLE_MESSAGE0 = '光线传感器校准白平衡';
Blockly.Msg.MICROBITS_MU_LS_WB_ENABLE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_WB_ENABLE_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_READ_PROXIMITY_MESSAGE0 = '读取接近检测数值';
Blockly.Msg.MICROBITS_MU_LS_READ_PROXIMITY_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_READ_PROXIMITY_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_READ_AMBIENT_LIGHT_MESSAGE0 = '读取环境光检测数值';
Blockly.Msg.MICROBITS_MU_LS_READ_AMBIENT_LIGHT_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_READ_AMBIENT_LIGHT_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_COLOR_LABEL = '标签值';//'LsColorLabel';
Blockly.Msg.MICROBITS_MU_LS_COLOR_RED = '红色通道校正值';//'LsColorRed';
Blockly.Msg.MICROBITS_MU_LS_COLOR_GREEN = '绿色通道校正值';//'LsColorGreen';
Blockly.Msg.MICROBITS_MU_LS_COLOR_BLUE = '蓝色通道校正值';//'LsColorBlue';
Blockly.Msg.MICROBITS_MU_LS_COLOR_HUE = '色调值（0～360）';//'LsColorHue';
Blockly.Msg.MICROBITS_MU_LS_COLOR_SATURATION = '饱和度';//'LsColorSaturation';
Blockly.Msg.MICROBITS_MU_LS_COLOR_VALUE = '亮度';//'LsColorValue';

Blockly.Msg.MICROBITS_MU_LS_RAW_COLOR_RED = '红色通道原始值';//'LsRawColorRed';
Blockly.Msg.MICROBITS_MU_LS_RAW_COLOR_GREEN = '绿色通道原始值';//'LsRawColorGreen';
Blockly.Msg.MICROBITS_MU_LS_RAW_COLOR_BLUE = '蓝色通道原始值';//'LsRawColorBlue';

Blockly.Msg.MICROBITS_MU_LS_READ_COLOR_MESSAGE0 = '读取颜色检测结果的 %1';
Blockly.Msg.MICROBITS_MU_LS_READ_COLOR_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_READ_COLOR_HELPURL = '';

Blockly.Msg.MICROBITS_MU_LS_READ_GESTURE_MESSAGE0 = '读取手势检测结果';
Blockly.Msg.MICROBITS_MU_LS_READ_GESTURE_TOOLTIP = '';
Blockly.Msg.MICROBITS_MU_LS_READ_GESTURE_HELPURL = '';

//Carbit
Blockly.Msg.Carbit_init_MESSAGE0 = 'CarBit初始化';
Blockly.Msg.Carbit_init_TOOLTIP = '';
Blockly.Msg.Carbit_init_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';

Blockly.Msg.Carbit_setLeftMotor_MESSAGE0 = 'B2电机速度 %1';
Blockly.Msg.Carbit_setLeftMotor_TOOLTIP = '范围：-100~100';
Blockly.Msg.Carbit_setLeftMotor_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';

Blockly.Msg.Carbit_setRightMotor_MESSAGE0 = 'B1电机速度 %1';
Blockly.Msg.Carbit_setRightMotor_TOOLTIP = '范围：-100~100';
Blockly.Msg.Carbit_setRightMotor_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';

Blockly.Msg.Carbit_analog_light_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_analog_light_TOOLTIP = 'Q3对应Pin1，Q4对应Pin2';
Blockly.Msg.Carbit_analog_light_MESSAGE0 = '%1 模拟光线的值';

Blockly.Msg.Carbit_Speed_U10_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_Speed_U10_TOOLTIP = '对应U10';
Blockly.Msg.Carbit_Speed_U10_MESSAGE0 = '左轮速度';

Blockly.Msg.Carbit_Speed_U11_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_Speed_U11_TOOLTIP = '对应U11';
Blockly.Msg.Carbit_Speed_U11_MESSAGE0 = '右轮速度';

Blockly.Msg.Carbit_Distance_HELPURL= 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_Distance_TOOLTIP= '';
Blockly.Msg.Carbit_Distance_MESSAGE0= '超声波的值';

Blockly.Msg.Carbit_tracking_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_tracking_TOOLTIP = '';
Blockly.Msg.Carbit_tracking_MESSAGE0 = '循迹参数 %1 直行速度 %2 最大限速 %3 转弯延时 %5 转弯速度系数 %4 ';

//gamebit
Blockly.Msg.GAMEBIT_BUTTON_HELPURL = '';
Blockly.Msg.GAMEBIT_BUTTON_MESSAGE0 = '按下 %1';
Blockly.Msg.GAMEBIT_BUTTON_TOOLTIP = "";

Blockly.Msg.GAMEBIT_SHAKE_HELPURL = '';
Blockly.Msg.GAMEBIT_SHAKE_MESSAGE0 = '震动 %1';
Blockly.Msg.GAMEBIT_SHAKE_TOOLTIP = "";

Blockly.Msg.GAMEBIT_XY_HELPURL = '';
Blockly.Msg.GAMEBIT_XY_MESSAGE0 = '%1 轴  偏移值';
Blockly.Msg.GAMEBIT_XY_TOOLTIP = "";
Blockly.Msg.MICROBIT_LABPLUS_USB_SWITCH_ON = '打开';
Blockly.Msg.MICROBIT_LABPLUS_USB_SWITCH_OFF = '关闭';

//ExtendbitII
Blockly.Msg.MICROBIT_EXT2_SET_SERVO_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_SET_SERVO_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_SET_SERVO_MESSAGE0 = '设置舵机 %1 的角度为 %2';
Blockly.Msg.MICROBIT_EXT2_SET_MOTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_SET_MOTOR_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_SET_MOTOR_MESSAGE0 = '设置马达 %1 方向 %2 速度 %3';
Blockly.Msg.MICROBIT_EXT2_STOP_MOTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_STOP_MOTOR_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_STOP_MOTOR_MESSAGE0 = '停止马达 %1';
Blockly.Msg.MICROBIT_EXT2_SOUND_VALUE_MESSAGE0 = '声音传感器的值';
Blockly.Msg.MICROBIT_EXT2_SOUND_VALUE_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_SOUND_VALUE_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_LIGHT_VALUE_MESSAGE0 = '光线传感器的值';
Blockly.Msg.MICROBIT_EXT2_LIGHT_VALUE_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_LIGHT_VALUE_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_SET_PWM_MESSAGE0 = '设置 PWM 接口 %1 输出值为 %2';
Blockly.Msg.MICROBIT_EXT2_SET_PWM_TOOLTIP = 'PWM 值范围 0～4095';
Blockly.Msg.MICROBIT_EXT2_SET_PWM_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';

Blockly.Msg.MICROBIT_EXT2_STEP_MOTOR_MESSAGE0 = '驱动步进电机 接口 %1 方向 %2 速度 %3';
Blockly.Msg.MICROBIT_EXT2_STEP_MOTOR_TOOLTIP = '注意：该功能不能与驱动舵机和DC马达及PWM输出同时使用。因为线序的问题，只支持28BYJ-48步进电机。\nspeed 值范围 25～150';
Blockly.Msg.MICROBIT_EXT2_STEP_MOTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.LABPLUS_SET_MOTOR_CLOCKWISE = '正转';
Blockly.Msg.LABPLUS_SET_MOTOR_ANTI_CLOCKWISE = '反转';


//botbit
Blockly.Msg.BOTBIT_MOTOR_ON_HELPURL = '';
Blockly.Msg.BOTBIT_MOTOR_ON_TOOLTIP = '范围：-2000~2000';
Blockly.Msg.BOTBIT_MOTOR_ON_MESSAGE0 = '设置机器人 %1 右轮速度为 %2 左轮速度为 %3';
Blockly.Msg.BOTBIT_MOTOR_LEFT = '左';
Blockly.Msg.BOTBIT_MOTOR_RIGHT = '右';
Blockly.Msg.BOTBIT_SERVO_UP = '上方';
Blockly.Msg.BOTBIT_SERVO_DOWN = '下方';
Blockly.Msg.BOTBIT_MOTOR_FORWARD = '前进';
Blockly.Msg.BOTBIT_MOTOR_BACKWARD = '后退';

Blockly.Msg.BOTBIT_TURN_HELPURL = '';
Blockly.Msg.BOTBIT_TURN_MESSAGE0 = '舞步(turn)  步数 %1 单步时间 %2 毫秒  方向 %3';
Blockly.Msg.BOTBIT_TURN_TOOLTIP = "";

Blockly.Msg.BOTBIT_setRGB_HELPURL = '';
Blockly.Msg.BOTBIT_setRGB_MESSAGE0 = '设 %1 灯 R %2 G %3 B %4';
Blockly.Msg.BOTBIT_setRGB_TOOLTIP = 'r,g,b：0~255';

Blockly.Msg.BOTBIT_setHSV_HELPURL = '';
Blockly.Msg.BOTBIT_setHSV_MESSAGE0 = '设 %1 灯 h %2 s %3 v %4';
Blockly.Msg.BOTBIT_setHSV_TOOLTIP = "h: 0~360，s: 0~1，v: 0~1";

Blockly.Msg.BOTBIT_HOLDBALL_HELPURL = '';
Blockly.Msg.BOTBIT_HOLDBALL_TOOLTIP = '';
Blockly.Msg.BOTBIT_HOLDBALL_MESSAGE0 = '双臂抱起';

Blockly.Msg.BOTBIT_STEERING_ENGINEL_HELPURL = '';
Blockly.Msg.BOTBIT_STEERING_ENGINEL_TOOLTIP = '角度范围为-45°~45°';
Blockly.Msg.BOTBIT_STEERING_ENGINEL_MESSAGE0 = '设置 %1臂 %2的角度为 %3';
Blockly.Msg.BOTBIT_SERVO_Y = 'Y轴舵机';
Blockly.Msg.BOTBIT_SERVO_X = 'X轴舵机';

Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_HELPURL = '';
Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_TOOLTIP = '角度范围为-45°~45°';
Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_MESSAGE0 = '设置 %1腿 %2舵机的角度为 %3';

Blockly.Msg.BOTBIT_UPDATEPOSITION_HELPURL = '';
Blockly.Msg.BOTBIT_UPDATEPOSITION_TOOLTIP = '';
Blockly.Msg.BOTBIT_UPDATEPOSITION_MESSAGE0 = '刷新舵机角度';

Blockly.Msg.BOTBIT_ULTRASONIC_HELPURL = '';
Blockly.Msg.BOTBIT_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.BOTBIT_ULTRASONIC_MESSAGE0 = '超声波传感器的值';

Blockly.Msg.BOTBIT_WALKING_HELPURL = '';
Blockly.Msg.BOTBIT_WALKING_TOOLTIP = '周期越短, 速度越快, 推荐1000~2000';
Blockly.Msg.BOTBIT_WALKING_MESSAGE0 = '舞步(walking) 步数%2 周期%3 方向%1 ';
Blockly.Msg.BOTBIT_WALKING_FORWARD = '前';
Blockly.Msg.BOTBIT_WALKING_BACK = '后';

Blockly.Msg.BOTBIT_MOONWALKER_HELPURL = '';
Blockly.Msg.BOTBIT_MOONWALKER_TOOLTIP = '推荐周期1000~2000, 幅度10~50';
Blockly.Msg.BOTBIT_MOONWALKER_MESSAGE0 = '舞步(moonwalker) 步数%2 周期%3 幅度%4 方向%1 ';
Blockly.Msg.BOTBIT_MOONWALKER_L = '左';
Blockly.Msg.BOTBIT_MOONWALKER_R = '右';

Blockly.Msg.BOTBIT_CRUSAITO_HELPURL = '';
Blockly.Msg.BOTBIT_CRUSAITO_TOOLTIP = '推荐步数2~10, 幅度10~50';
Blockly.Msg.BOTBIT_CRUSAITO_MESSAGE0 = '舞步(crusaito) 步数%2 周期%3 幅度%4 方向%1';
Blockly.Msg.BOTBIT_CRUSAITO_CW = '逆时针';
Blockly.Msg.BOTBIT_CRUSAITO_ANTICW = '顺时针';

Blockly.Msg.BOTBIT_FLAPPING_HELPURL = '';
Blockly.Msg.BOTBIT_FLAPPING_TOOLTIP = '推荐步数5~15, 幅度10~30, 周期1000~2000';
Blockly.Msg.BOTBIT_FLAPPING_MESSAGE0 = '舞步(flapping) 步数%2 周期%3 幅度%4 方向%1';
Blockly.Msg.BOTBIT_FLAPPING_FORWARD = '前';
Blockly.Msg.BOTBIT_FLAPPING_BACK = '后';

Blockly.Msg.BOTBIT_HOME_HELPURL = '';
Blockly.Msg.BOTBIT_HOME_TOOLTIP = '';
Blockly.Msg.BOTBIT_HOME_MESSAGE0 = '机器人舞步初始化';

Blockly.Msg.BOTBIT_PIDtracking_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bot:bit';
Blockly.Msg.BOTBIT_PIDtracking_TOOLTIP = '速度: 0~2000';
Blockly.Msg.BOTBIT_PIDtracking_MESSAGE0 = '校准并循迹 %1 kp %2 kd %3 速度 %4';

Blockly.Msg.BOTBIT_REC_FROM_MICROBIT_HELPURL = '';
Blockly.Msg.BOTBIT_REC_FROM_MICROBIT_MESSAGE0 = 'botbit 接收并执行';
Blockly.Msg.BOTBIT_REC_FROM_MICROBIT_TOOLTIP = "";

Blockly.Msg.BOTBIT_JUMP_HELPURL = '';
Blockly.Msg.BOTBIT_JUMP_MESSAGE0 = '舞步(jump)  单步时间 %1 毫秒';
Blockly.Msg.BOTBIT_JUMP_TOOLTIP = "单位毫秒";

Blockly.Msg.MICROBIT_UPDATE_MSG_ARGS_HELPURL = '';
Blockly.Msg.MICROBIT_UPDATE_MSG_ARGS_MESSAGE0 = '刷新  遥控botbit的消息 %1 消息参数 %2 x %3 y %4 z %5 控制左臂 %6 控制右臂 %7';
Blockly.Msg.MICROBIT_UPDATE_MSG_ARGS_TOOLTIP = "";

//bluebit
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_STATE_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_STATE_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_STATE_MESSAGE0 = '设置LCD %1';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_HIDE_CURSOR = '消隐光标';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SHOW_CURSOR = '显示光标';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_BLINK_CURSOR = '光标闪烁';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_LEFT = '左滚动显示';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_RIGHT = '右滚动显示';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_LEFT_TO_RIGHT = '字符串流从左到右';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_RIGHT_TO_LEFT = '字符串流从右到左';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_TO_ORIGIN = '光标回到原点';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR = '清屏';

Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_DRAW_PIXEL_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%82%B9%E9%98%B5';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_DRAW_PIXEL_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_DRAW_PIXEL_MESSAGE0 = '点阵描点 %1 X %2 Y %3';

Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_SHOW_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%82%B9%E9%98%B5';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_SHOW_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_SHOW_MESSAGE0 = '点阵显示生效';

Blockly.Msg.NULL = '%1';
Blockly.Msg.TEXT_NULL = '%1';
Blockly.Msg.TEXT_IS_NUMBER_HELPURL = '';
Blockly.Msg.TEXT_IS_NUMBER_TOOLTIP = '';
Blockly.Msg.TEXT_IS_NUMBER_MESSAGE0 = '%1 %2';

Blockly.Msg.TEXT_IS_DIGIT = '是数字';
Blockly.Msg.TEXT_IS_ALPHA = '是字母';
Blockly.Msg.TEXT_IS_ALNUM = '是数字和字母的组合';

Blockly.Msg.TEXT_LIST_START = "初始化列表 [";
Blockly.Msg.TEXT_LIST_END = "]";
Blockly.Msg.TEXT_TUPLE_START = "初始化元组 (";
Blockly.Msg.TEXT_TUPLE_END = ")";
Blockly.Msg.TEXT_DICT_START = "初始化字典 {";
Blockly.Msg.TEXT_DICT_END = "}";
Blockly.Msg.TEXT_SET_START = "初始化集合 {";
Blockly.Msg.TEXT_SET_END = "}";
Blockly.Msg.TEXT_SET_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/set.html#id1";
Blockly.Msg.ADD_COMMENT = "添加注释";
Blockly.Msg.CHANGE_VALUE_TITLE = "更改值：";
Blockly.Msg.CLEAN_UP = "整理块";
Blockly.Msg.COLLAPSE_ALL = "折叠块";
Blockly.Msg.COLLAPSE_BLOCK = "折叠块";
Blockly.Msg.COLOUR_BLEND_COLOUR1 = "颜色1";
Blockly.Msg.COLOUR_BLEND_COLOUR2 = "颜色2";
Blockly.Msg.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/"; // untranslated
Blockly.Msg.COLOUR_BLEND_RATIO = "比例";
Blockly.Msg.COLOUR_BLEND_TITLE = "混合";
Blockly.Msg.COLOUR_BLEND_TOOLTIP = "用一个给定的比率(0.0-1.0)混合两种颜色。";
Blockly.Msg.COLOUR_PICKER_HELPURL = "https://zh.wikipedia.org/wiki/颜色";
Blockly.Msg.COLOUR_PICKER_TOOLTIP = "从调色板中选择一种颜色。";
Blockly.Msg.COLOUR_RANDOM_HELPURL = "http://randomcolour.com"; // untranslated
Blockly.Msg.COLOUR_RANDOM_TITLE = "随机颜色";
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = "随机选择一种颜色。";
Blockly.Msg.COLOUR_RGB_BLUE = "蓝色";
Blockly.Msg.COLOUR_RGB_GREEN = "绿色";
Blockly.Msg.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html"; // untranslated
Blockly.Msg.COLOUR_RGB_RED = "红色";
Blockly.Msg.COLOUR_RGB_TITLE = "颜色";
Blockly.Msg.COLOUR_RGB_TOOLTIP = "通过指定红色、绿色和蓝色的量创建一种颜色。所有的值必须介于0和100之间。";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks"; // untranslated
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "中断循环";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "继续下一次循环";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "中断包含它的循环。";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "跳过这个循环的剩余部分，并继续下一次迭代。";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "警告：此块仅可用于在一个循环内。";
Blockly.Msg.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each"; // untranslated
Blockly.Msg.CONTROLS_FOREACH_TITLE = "为每个项目 %1 在列表中 %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "遍历每个列表中的项目，将变量“%1”设定到该项中，然后执行某些语句。";
Blockly.Msg.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with"; // untranslated
Blockly.Msg.CONTROLS_FOR_TITLE = "使用 %1 从范围 %2 到 %3 每隔 %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "从起始数到结尾数中取出变量“%1”的值，按指定的时间间隔，执行指定的块。";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "在if语句块中增加一个条件。";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "添加一个最终的，包括所有情况的节到if块中。";
Blockly.Msg.CONTROLS_IF_HELPURL = "https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html"; // untranslated
Blockly.Msg.TRY_EXCEPT_HELPURL = "https://mpythonx.readthedocs.io/zh_CN/latest/index.html";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "增加、删除或重新排列各节来重新配置“if”块。";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "否则";

Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "否则如果";

Blockly.Msg.TRY_EXCEPT_FINALLY = "finally";
Blockly.Msg.TRY_EXCEPT_FINALLY_TOOLTIP = "";
Blockly.Msg.TRY_EXCEPT_EXCEPT = "except";
Blockly.Msg.TRY_EXCEPT_EXCEPT_TOOLTIP = "";
Blockly.Msg.TRY_EXCEPT_TRY = "try";
Blockly.Msg.TRY_EXCEPT_TRY_TOOLTIP = "";

Blockly.Msg.CONTROLS_IF_MSG_IF = "如果";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "如果值为真，执行一些语句。";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "如果值为真，则执行第一块语句。否则，则执行第二块语句。";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "如果第一个值为真，则执行第一块的语句。否则，如果第二个值为真，则执行第二块的语句。";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "如果第一个值为真，则执行第一块对语句。否则，如果第二个值为真，则执行语句的第二块。如果没有值为真，则执行最后一块的语句。";
Blockly.Msg.CONTROLS_REPEAT_FOREVER = "一直重复";
Blockly.Msg.CONTROLS_REPEAT_FOREVER_TOOLTIP = "一直执行一些语句。";
Blockly.Msg.CONTROLS_REPEAT_HELPURL = "https://zh.wikipedia.org/wiki/For循环";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = ""; // "执行";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "重复 %1 次";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "多次执行一些语句。";
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat"; // untranslated
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "重复直到";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "重复当";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "只要值为假，执行一些语句。";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "只要值为真，执行一些语句。";
Blockly.Msg.DELETE_ALL_BLOCKS = "删除所有%1块吗？";
Blockly.Msg.DELETE_BLOCK = "删除块";
Blockly.Msg.DELETE_VARIABLE = "删除“%1”变量";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "删除“%2”变量的%1种用途么？";
Blockly.Msg.DELETE_X_BLOCKS = "删除块"; //"删除 %1 块";
Blockly.Msg.DISABLE_BLOCK = "禁用块";
Blockly.Msg.DUPLICATE_BLOCK = "复制";
Blockly.Msg.ENABLE_BLOCK = "启用块";
Blockly.Msg.EXPAND_ALL = "展开块";
Blockly.Msg.EXPAND_BLOCK = "展开块";
Blockly.Msg.EXTERNAL_INPUTS = "多行输入";
Blockly.Msg.HELP = "帮助";
Blockly.Msg.INLINE_INPUTS = "单行输入";
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = "创建空列表";
Blockly.Msg.TUPLE_CREATE_EMPTY_TITLE = "创建空元组";
Blockly.Msg.DICT_CREATE_EMPTY_TITLE = "创建空字典";
Blockly.Msg.SET_CREATE_EMPTY_TITLE = "创建空集合";
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "返回一个列表，长度为 0，不包含任何数据记录";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "列表";
Blockly.Msg.TUPLE_CREATE_WITH_CONTAINER_TITLE_ADD = "元组";
Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TITLE_ADD = "字典";
Blockly.Msg.SET_CREATE_WITH_CONTAINER_TITLE_ADD = "集合";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "增加、删除或重新排列各部分以此重新配置这个列表块。";
Blockly.Msg.TUPLE_CREATE_WITH_CONTAINER_TOOLTIP = "增加、删除或重新排列各部分以此重新配置这个元组块。";
Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TOOLTIP = "增加、删除或重新排列各部分以此重新配置这个字典块。";
Blockly.Msg.SET_CREATE_WITH_CONTAINER_TOOLTIP = "增加、删除或重新排列各部分以此重新配置这个集合块。";
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html";
/* Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "建立数组 使用"; */
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "初始化列表";
Blockly.Msg.TUPLE_CREATE_WITH_INPUT_WITH = "初始化元组";
Blockly.Msg.DICT_CREATE_WITH_INPUT_WITH = "初始化字典";
Blockly.Msg.SET_CREATE_WITH_INPUT_WITH = "初始化集合";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "将一个项添加到列表中。";
Blockly.Msg.TUPLE_CREATE_WITH_ITEM_TOOLTIP = "将一个项添加到元组中。";
Blockly.Msg.DICT_CREATE_WITH_ITEM_TOOLTIP = "将一个项添加到字典中。";
Blockly.Msg.SET_CREATE_WITH_ITEM_TOOLTIP = "将一个项添加到集合中。";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "建立一个具有任意数量项目的列表。";
Blockly.Msg.LISTS_GET_INDEX_FIRST = "第一";
// Blockly.Msg.LISTS_GET_INDEX_FROM_END = "倒数第#";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "倒数第";
// Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "第";
Blockly.Msg.LISTS_GET_INDEX_GET = "获得";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "取出并移除";
Blockly.Msg.LISTS_GET_INDEX_LAST = "最后";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "随机";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "移除";

Blockly.Msg.LISTS_POP_HELPURL = "";
Blockly.Msg.LISTS_POP_TOOLTIP = "";
Blockly.Msg.LISTS_POP_MESSAGE0 = "在列表 %1 中移除 %2 项";
Blockly.Msg.MPYTHON_LIST_INDEX_MESSAGE0 = "在列表 %1 获取%2索引";
Blockly.Msg.LISTS_GET_INDEX_TAIL = "";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "返回列表中的第一个项目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "返回在列表中的指定位置的项。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "返回列表中的最后一项。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "随机返回列表中的一个项目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "移除并返回列表中的第一个项目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "移除并返回列表中的指定位置的项。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "移除并返回列表中的最后一个项目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "移除并返回列表中的一个随机项目中。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "移除列表中的第一项";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "移除在列表中的指定位置的项。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "移除列表中的最后一项";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "删除列表中的一个随机的项。";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "到倒数第#";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "到#";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "到最后";
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html"; // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "从头获得子列表";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "从倒数#取得子列表";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "从#取得子列表";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = "";
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "复制列表中指定的部分。";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1是最后一项。";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1是第一个项目。";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "找出第一个项出现";
Blockly.Msg.LISTS_INDEX_OF_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html"; // untranslated
Blockly.Msg.LISTS_INDEX_OF_LAST = "找出最后一个项出现";
/* Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "返回在列表中的第一/最后一个匹配项的索引值。如果找不到项目则返回%1。"; */
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "返回在列表中的第一/最后一个匹配项的索引值。如果找不到项目则返回0";
Blockly.Msg.LISTS_INLIST = "在列表中";
Blockly.Msg.LISTS_ISEMPTY_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html"; // untranslated
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1是空的";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "如果改列表为空，则返回真。";
Blockly.Msg.LISTS_LENGTH_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html"; // untranslated
Blockly.Msg.LISTS_LENGTH_TITLE = "%1的长度";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "返回列表的长度。";
Blockly.Msg.LISTS_REPEAT_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html"; // untranslated
/* Blockly.Msg.LISTS_REPEAT_TITLE = "建立列表使用项 %1 重复 %2 次"; */
Blockly.Msg.LISTS_REPEAT_TITLE = "建立列表 项 %1 重复 %2 次";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "建立包含指定重复次数的值的列表。";
Blockly.Msg.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set"; // untranslated
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "为";
Blockly.Msg.LISTS_SET_INDEX_INSERT = "插入在";
Blockly.Msg.LISTS_SET_INDEX_SET = "设置";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "在列表的起始处添加该项。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "插入在列表中指定位置的项。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "将该项追加到列表的末尾。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "在列表中随机插入项。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "设置列表中的第一个项目。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "设置在列表中指定位置的项。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "设置列表中的最后一项。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "设置列表中一个随机的项目。";
Blockly.Msg.LISTS_SORT_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html";
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = "升序";
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = "降序";
Blockly.Msg.LISTS_SORT_TITLE = "排序%1 %2 %3";
Blockly.Msg.LISTS_SORT_TOOLTIP = "排序一个列表的拷贝。";
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = "按字母排序，忽略大小写";
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = "按数字排序";
Blockly.Msg.LISTS_SORT_TYPE_TEXT = "按字母排序";
Blockly.Msg.LISTS_SPLIT_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html";
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = "从文本制作列表";
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = "从列表组合文本";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = "加入文本列表至一个文本，由分隔符分隔。";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = "拆分文本到文本列表，按每个分隔符拆分。";
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = "用分隔符";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "假";
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values"; // untranslated
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "返回真或假。";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "真";
Blockly.Msg.LOGIC_COMPARE_HELPURL = "https://zh.wikipedia.org/wiki/不等";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "如果两个输入结果相等，则返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "如果第一个输入结果比第二个大，则返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "如果第一个输入结果大于或等于第二个输入结果，则返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "如果第一个输入结果比第二个小，则返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "如果第一个输入结果小于或等于第二个输入结果，则返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "如果两个输入结果不相等，则返回真。";
Blockly.Msg.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
Blockly.Msg.LOGIC_NEGATE_TITLE = "非%1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "如果输入结果为假，则返回真；如果输入结果为真，则返回假。";
Blockly.Msg.LOGIC_NULL = "空";
Blockly.Msg.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type"; // untranslated
Blockly.Msg.LOGIC_NULL_TOOLTIP = "返回空值。";
Blockly.Msg.LOGIC_OPERATION_AND = "和";
Blockly.Msg.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations"; // untranslated
Blockly.Msg.LOGIC_OPERATION_OR = "或";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "如果两个输入结果都为真，则返回真。";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "如果至少有一个输入结果为真，则返回真。";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "测试";
Blockly.Msg.LOGIC_TERNARY_HELPURL = "https://zh.wikipedia.org/wiki/条件运算符";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "如果为假";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "如果为真";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "检查“test”中的条件。如果条件为真，则返回“if true”的值，否则，则返回“if false”的值。";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+"; // untranslated
Blockly.Msg.MATH_ARITHMETIC_HELPURL = "https://zh.wikipedia.org/wiki/算术";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "返回两个数字的和。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "返回两个数字的商。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "返回两个数字的区别。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "返回两个数字的乘积。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "返回第一个数的第二个数次幂。";
Blockly.Msg.MATH_CHANGE_HELPURL = "https://zh.wikipedia.org/wiki/%E5%8A%A0%E6%B3%95";
Blockly.Msg.MATH_CHANGE_TITLE = "将变量 %1 的值增加 %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "将一个数添加到变量“%1”。";
Blockly.Msg.MATH_CONSTANT_HELPURL = "https://zh.wikipedia.org/wiki/数学常数";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "返回一个常见常量：π (3.141......)，e (2.718...)、φ (1.618...)、 sqrt(2) (1.414......)、sqrt(½) (0.707......)或 ∞（无穷大）。";
Blockly.Msg.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29"; // untranslated
Blockly.Msg.MATH_CONSTRAIN_TITLE = "限制数字 %1 介于 (低) %2 到 (高) %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "限制数字介于两个指定的数字之间";
Blockly.Msg.MATH_CONVERT_HELPURL = "";
Blockly.Msg.MATH_CONVERT_MESSAGE0 = "%1 %2";
Blockly.Msg.MATH_CONVERT_TOOLTIP = "强制转换数据类型";
Blockly.Msg.MATH_DIVISION_CONSULT_HELPURL = "";
Blockly.Msg.MATH_DIVISION_CONSULT_TITLE = "%1 ÷ %2 商的整数部分";
Blockly.Msg.MATH_DIVISION_CONSULT_TOOLTIP = "";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷"; // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "可被整除";
Blockly.Msg.MATH_IS_EVEN = "是偶数";
Blockly.Msg.MATH_IS_NEGATIVE = "为负";
Blockly.Msg.MATH_IS_ODD = "是奇数";
Blockly.Msg.MATH_IS_POSITIVE = "为正";
Blockly.Msg.MATH_IS_PRIME = "是质数";
Blockly.Msg.MATH_IS_TOOLTIP = "如果数字是偶数、奇数、非负整数、正数、负数或如果它可被某数字整除，则返回真或假。";
Blockly.Msg.MATH_IS_WHOLE = "为整数";
Blockly.Msg.MATH_MODULO_HELPURL = "https://zh.wikipedia.org/wiki/模除";
Blockly.Msg.MATH_MODULO_TITLE = "%1 ÷ %2 的余数";
Blockly.Msg.MATH_MODULO_TOOLTIP = "返回这两个数字相除后的余数。";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×"; // untranslated
Blockly.Msg.MATH_NUMBER_BITS_OPS_HELPURL = "";
Blockly.Msg.MATH_NUMBER_BITS_OPS_MESSAGE0 = "%1 %2 %3";
Blockly.Msg.MATH_NUMBER_BITS_OPS_TOOLTIP = "对数字进行位运算";
Blockly.Msg.MATH_NUMBER_HELPURL = "https://zh.wikipedia.org/wiki/数";
Blockly.Msg.MATH_NUMBER_TOOLTIP = "一个数字。";
Blockly.Msg.MATH_ONLIST_HELPURL = ""; // untranslated
Blockly.Msg.MATH_ONLIST_EMPTY = "%1 %2"; // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "列表中的平均数";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "列表中的最大值";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "列表中位数";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "列表中的最小值";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "列表模式";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "列表的随机项";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "列表中的标准差";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "列表中的数的总和";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "返回列表中的数值的平均值。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "返回列表中最大数。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "返回列表中的中位数。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "返回列表中最小数。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "返回列表中的最常见的项的列表。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "从列表中返回一个随机的元素。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "返回列表的标准偏差。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "返回列表中的所有数字的和。";
Blockly.Msg.MATH_POWER_SYMBOL = "**"; // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = "https://zh.wikipedia.org/wiki/随机数生成器";
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "随机小数";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "返回介于（包含）0.0到1.0之间的随机数。";
Blockly.Msg.MATH_RANDOM_INT_HELPURL = "https://zh.wikipedia.org/wiki/随机数生成器";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "从 %1 到 %2 之间的随机整数";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "返回两个指定的范围（含）之间的随机整数。";
Blockly.Msg.MATH_ROUND_HELPURL = "https://zh.wikipedia.org/wiki/数值修约";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "四舍五入";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "向下舍入";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "向上舍入";
Blockly.Msg.MATH_ROUND_TOOLTIP = "数字向上或向下舍入。";
Blockly.Msg.MATH_SINGLE_HELPURL = "https://zh.wikipedia.org/wiki/平方根";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "绝对";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "平方根";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "返回一个数的绝对值。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "返回数的e次幂。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "返回一个数的自然对数。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "返回数字的对数。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "返回数的逻辑非。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "返回数的10次幂。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "返回数的平方根。";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-"; // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos"; // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin"; // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan"; // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos"; // untranslated
Blockly.Msg.MATH_TRIG_HELPURL = "https://zh.wikipedia.org/wiki/三角函数";
Blockly.Msg.MATH_TRIG_SIN = "sin"; // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan"; // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "返回一个数的反余弦值。";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "返回一个数的反正弦值。";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "返回指定角度的反正切值。";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "返回指定角度的余弦值(非弧度）。";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "返回指定角度的正弦值(非弧度）。";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "返回指定角度的正切值(非弧度）。";
Blockly.Msg.NEW_VARIABLE = "创建变量...";
Blockly.Msg.NEW_VARIABLE_TITLE = "新变量的名称：";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = "";
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = "允许声明";
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "参数：";
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "运行用户定义的函数“%1”。";
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "运行用户定义的函数“%1”，并使用它的输出值。";
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = "与：";
Blockly.Msg.PROCEDURES_CREATE_DO = "创建“%1”";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = ""; //"描述该功能...";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "my_func";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "定义函数";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "创建一个不带输出值的函数。";
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "返回";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "创建一个有输出值的函数。";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "警告: 此函数具有重复参数。";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "突出显示函数定义";
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "如果值为真，则返回第二个值。";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "警告: 仅在定义函数内可使用此块。";
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = "输入名称：";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "添加函数输入。";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "输入";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "添加、删除或重新排此函数的输入。";
Blockly.Msg.REDO = "重做";
Blockly.Msg.REMOVE_COMMENT = "删除注释";
Blockly.Msg.RENAME_VARIABLE = "重命名变量...";
Blockly.Msg.RENAME_VARIABLE_TITLE = "将所有“%1”变量重命名为:";
Blockly.Msg.TEXT_APPEND_APPENDTEXT = "追加文本";
Blockly.Msg.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
/* Blockly.Msg.TEXT_APPEND_TO = "在"; */
Blockly.Msg.TEXT_APPEND_TO = "";
Blockly.Msg.TEXT_APPEND_TOOLTIP = "将一些文本追加到变量“%1”。";
Blockly.Msg.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case"; // untranslated
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "转为小写";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "转为首字母大写";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "转为大写";
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = "使用不同的大小写复制这段文字。";
Blockly.Msg.TEXT_CHARAT_FIRST = "获得第一个字符";
Blockly.Msg.TEXT_CHARAT_FROM_END = "获得倒数第#个字符";
Blockly.Msg.TEXT_CHARAT_FROM_START = "获得字符#";
Blockly.Msg.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text"; // untranslated
/* Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "于文本中"; */
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "从文本";
Blockly.Msg.TEXT_CHARAT_LAST = "获得最后一个字符";
Blockly.Msg.TEXT_CHARAT_RANDOM = "获取随机的字母";
Blockly.Msg.TEXT_CHARAT_TAIL = "";
Blockly.Msg.TEXT_CHARAT_TOOLTIP = "返回位于指定位置的字母。";
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "将一个项添加到文本中。";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "加入";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "添加、移除或重新排列各节来重新配置这个文本块。";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "到倒数第#个字符";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "到字符#";
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = "到最后一个字符";
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text"; // untranslated
/* Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "自文本"; */
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "从文本";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = "取得一段字串自第一个字符";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "取得一段字串自倒数第#个字符";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "取得一段字串自#";
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = "";
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "返回指定的部分文本。";
Blockly.Msg.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text"; // untranslated
/* Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "自文本"; */
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "在文本";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "中查找 最先 出现";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = "中查找 最后 出现";
Blockly.Msg.TEXT_INDEXOF_TAIL = "的位置";
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = "返回在第二个字串中的第一/最后一个匹配项的索引值。如果未找到则返回%1。";
Blockly.Msg.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text"; // untranslated
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1是空的";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "如果提供的文本为空，则返回真。";
Blockly.Msg.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation"; // untranslated
/* Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "建立字符串 使用"; */
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "转为文本";
Blockly.Msg.TEXT_ADD_TITLE_CREATEWITH = "拼接文本";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "通过串起任意数量的项以建立一段文字。";
Blockly.Msg.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
Blockly.Msg.TEXT_LENGTH_TITLE = "%1的长度";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "返回提供文本的字母数（包括空格）。";
Blockly.Msg.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text"; // untranslated
Blockly.Msg.TEXT_PRINT_TITLE = "打印%1";
Blockly.Msg.MPYTHON_INPUT_MESSAGE0 = '输入%1';
Blockly.Msg.TEXT_PRINT_TOOLTIP = "打印指定的文字、数字或其他值。";
Blockly.Msg.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user"; // untranslated
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "提示用户输入数字。";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "提示用户输入一些文本。";
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = "输入数字并显示提示消息";
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = "输入数字并显示提示消息";
Blockly.Msg.TEXT_TEXT_HELPURL = "https://mpythonsoftware.readthedocs.io/zh/latest/blocks/index.html";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "一个字母、单词或一行文本。";
Blockly.Msg.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces"; // untranslated
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = "消除两侧空格";
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = "消除左侧空格";
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = "消除右侧空格";
Blockly.Msg.TEXT_TRIM_TOOLTIP = "复制这段文字的同时删除两端多余的空格。";
Blockly.Msg.TODAY = "今天";
Blockly.Msg.UNDO = "撤销";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "item";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "创建“设定%1”";
Blockly.Msg.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get"; // untranslated
Blockly.Msg.VARIABLES_GET_TOOLTIP = "返回此变量的值。";
Blockly.Msg.VARIABLES_SET = "将变量 %1 设定为 %2";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "创建“获得%1”";
Blockly.Msg.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set"; // untranslated
Blockly.Msg.VARIABLES_SET_TOOLTIP = "设置此变量，以使它和输入值相等。";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "已存在名为“%1”的变量。";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

Blockly.Msg.TRY_EXCEPT_TRY = 'try';

Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;

Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TUPLE_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.DICT_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.SET_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;

Blockly.Msg.MPYTHON_OPEN = '开启';
Blockly.Msg.MPYTHON_CLOSE = '关闭';

Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_LEFT = '左移';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_RIGHT = '右移';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_UP = '上移';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_DOWN = '下移';

Blockly.Msg.MPYTHONBOX_RGB_SET_IMAGE_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_SET_IMAGE_TOOLTIP = '创建新图像。'
Blockly.Msg.MPYTHONBOX_RGB_SET_IMAGE_MESSAGE0 = '创建图像 %1 第一行 %2 第二行 %3 第三行 %4 第四行 %5 第五行 %6';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_RAINBOW = '彩虹';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_NEGATE = '数字反转';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_INVERT = '黑白翻转';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_LINPOLAR = '线性极';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_LOGPOLAR = '对数极';

Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_COLOR = '彩色';

Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_START = '开始抓取图像';
Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_STOP = '停止抓取图像';

Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_H = '水平镜像';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_V = '垂直翻转';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_H_V = '水平和垂直翻转';

Blockly.Msg.MPYTHON_AI_SENSOR_SETS_CONTRAST = '对比度';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_BRIGHTNESS = '亮度';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_SATURATION = '饱和度';

Blockly.Msg.MPYTHON_AI2_FACE_YOLO = '人脸识别';
Blockly.Msg.MPYTHON_AI2_CLASS_20_YOLO = '20类识别';
Blockly.Msg.MPYTHON_AI2_MNIST_NET = '数字识别';

Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_FACE_YOLO = '人脸';
Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_CLASS_20_YOLO = '20类';

Blockly.Msg.MPYTHON_AI_TRACE_COLOR_RECTANGLE = '矩形';
Blockly.Msg.MPYTHON_AI_TRACE_COLOR_CROSS = '十字';


/*文本- 开始 */
Blockly.Msg.TEXT_APPEND_TEXT_HELPURL = '';
Blockly.Msg.TEXT_APPEND_TEXT_TOOLTIP = '';
Blockly.Msg.TEXT_APPEND_TEXT_MESSAGE0 = '%1 追加文本 %2';

Blockly.Msg.TEXT_LINE_BREAK_HELPURL = '';
Blockly.Msg.TEXT_LINE_BREAK_TOOLTIP = '';
Blockly.Msg.TEXT_LINE_BREAK_MESSAGE0 = '换行符';

/*文本 - 结束 */


Blockly.Msg.CHINA_CITY_MESSAGE0 = '%1 %2';
Blockly.Msg.CHINA_CITY_TOWN_MESSAGE0 = '%1 %2 %3 返回 %4';
Blockly.Msg.CHINA_CITY_CNNAME = '中文简称';
Blockly.Msg.CHINA_CITY_PINYIN = '拼音';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_LANGUAGE_1 = '简体中文';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_LANGUAGE_2 = '正體中文';

Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_TOOLTIP = '';
Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_MESSAGE0 = '[心知天气] %1 信息 %2 地理位置 %3 API私钥 %4 %5 语言 %6 %7 温度单位 %8';

Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_NEW_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_NEW_TOOLTIP = '请注意这里的API私钥免费体验是有次数限制的，\n访问频率限制(次/分钟)20';
Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_NEW_MESSAGE0 = '[心知天气] %1 信息 %2 地理位置 %3 API私钥 免费体验 %4 %5 语言 %6 %7 温度单位 %8';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_1 = '天气实况';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_2 = '3天天气预报';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_3 = '6项生活指数';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_UNIT_1 = '摄氏度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_UNIT_2 = '华氏度';

Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_TOOLTIP = '';
Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_MESSAGE0 = '设定 %1 为 %2';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_TOOLTIP = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_MESSAGE0 = '%1 [心知天气] 通用字段 %2';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_TOOLTIP = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_MESSAGE0 = '%1 [心知天气] 天气实况 %2';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_TOOLTIP = '风向角度，范围0~360\n风速，单位km/h（当unit=c时）、mph（当unit=f时）';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_MESSAGE0 = '%1 [心知天气] 3天天气预报 %2 的 %3';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_HELPURL = 'https://www.labplus.cn/posts/5dd0c14be0886822b91ddee9';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_TOOLTIP = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_MESSAGE0 = '%1 [心知天气] 6项生活指数 %2';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_city_name = '城市名称';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_city_id = '城市ID';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_country = '国家代码';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_path = '行政归属';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_timezone = '时区';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_timezone_offset = 'UTC偏移量';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_last_update_date = '数据更新日期';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_last_update = '数据更新时间';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_object = '原始字典对象';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text = '天气现象';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code = '天气现象代码';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_temperature = '温度';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_today = '今天';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_tomorrow = '明天';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_the_day_after_tomorrow = '后天';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_date = '日期';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text_day = '白天天气现象';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code_day = '白天天气现象代码';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text_night = '晚间天气现象';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code_night = '晚间天气现象代码';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_high = '当天最高温度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_low = '当天最低温度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_direction = '风向';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_direction_degree = '风向角度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_speed = '风速';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_scale = '风力等级';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_car_washing = '洗车指数';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_dressing = '穿衣指数';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_flu = '感冒指数';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_sport = '运动指数';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_travel = '旅游指数';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_uv = '紫外线指数';

/*掌控板 - 扩展 - Bluebit - 开始 */
Blockly.Msg.MPYTHON_RED = '红';
Blockly.Msg.MPYTHON_GREEN = '绿';
Blockly.Msg.MPYTHON_BLUE = '蓝';

Blockly.Msg.MPYTHON_BLUEBIT_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_READ_MESSAGE0 = 'I2C射频卡 读取电子钱包 数据';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_READ_TOOLTIP = '读取块数据,长度16字节';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_READ_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_WRITE_MESSAGE0 = 'I2C射频卡 写入电子钱包 数据%1';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_WRITE_TOOLTIP = '写入块数据,长度16字节';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_WRITE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_MONEY_MESSAGE0 = 'I2C射频卡 给电子钱包%1 金额%2';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_MONEY_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_MONEY_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_INC_MESSAGE0 = '充值';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_DEC_MESSAGE0 = '扣费';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GET_MESSAGE0 = 'I2C射频卡 获取电子钱包余额';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GET_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GET_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GETSERIAL_MESSAGE0 = 'I2C射频卡 获取序列号';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GETSERIAL_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GETSERIAL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SET_MESSAGE0 = 'I2C射频卡 初始化电子钱包';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SET_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SET_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_MESSAGE0 = 'I2C射频卡 扫描';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_DATA_MESSAGE0 = 'I2C射频卡 扫描数据';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_DATA_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_DATA_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_ULTRASONIC_MESSAGE0 = 'I2C超声波';
Blockly.Msg.MPYTHON_BLUEBIT_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_ULTRASONIC_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id5';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_MESSAGE0 = '%1 被触发 引脚%2';
Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';

//20211015 
//bluebit数字传感器
Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_BUTTON_MESSAGE0 = '按键 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_IR_RECEIVE_MESSAGE0 = '红外探测 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_PIR_MESSAGE0 = '人体感应 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_RFID_MESSAGE0 = '射频卡 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_MAGNETIC_MESSAGE0 = '门磁开关 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_SOUND_MESSAGE0 = '麦克风 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_VIBRATION_MESSAGE0 = '震动 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_FINGERPRINT_SCANNER_MESSAGE0 = '指纹 被触发 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_LIMIT_SWITCH_MESSAGE0 = '限位开关 被触发 引脚%1';

//bluebit模拟传感器
Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_ANALOG_LIGHT_MESSAGE0 = '模拟光线 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_NTC_MESSAGE0 = '热敏电阻 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_WATER_MESSAGE0 = '水位传感器 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_SoilMoisture_MESSAGE0 = '土壤湿度 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_RotateDimmer_MESSAGE0 = '旋钮电位器 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_SlideDimmer_MESSAGE0 = '直滑电位器 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_LM35_MESSAGE0 = 'LM35温度 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_GAS_MESSAGE0 = '烟雾 模拟值 引脚%1';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_SOUND_MESSAGE0 = '麦克风 模拟值 引脚%1';

//
Blockly.Msg.MPYTHON_BLUEBIT_RELAY_SET_TRUE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_RELAY_SET_TRUE_MESSAGE0 = '打开 继电器 引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_RELAY_SET_TRUE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_LASER_SET_TRUE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_LASER_SET_TRUE_MESSAGE0 = '打开 激光 引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_LASER_SET_TRUE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_RELAY_SET_FALSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_RELAY_SET_FALSE_MESSAGE0 = '关闭 继电器 引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_RELAY_SET_FALSE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_LASER_SET_FALSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_LASER_SET_FALSE_MESSAGE0 = '关闭 激光 引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_LASER_SET_FALSE_TOOLTIP = '';

//20211015 END

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_MESSAGE0 = '%1 模拟值 引脚%2';
Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';

Blockly.Msg.MPYTHON_BLUEBIT_SET_ANALOG_MESSAGE0 = '设置LED灯 输出%1 引脚%2';
Blockly.Msg.MPYTHON_BLUEBIT_SET_ANALOG_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_ANALOG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';

Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER_MESSAGE0 = '循迹传感器 检测为黑 引脚%1';
Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';

Blockly.Msg.MPYTHON_BLUEBIT_SET_TRUE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_SET_TRUE_MESSAGE0 = '打开 %1 引脚 %2';
Blockly.Msg.MPYTHON_BLUEBIT_SET_TRUE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_SET_FALSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FALSE_MESSAGE0 = '关闭 %1 引脚 %2';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FALSE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_ON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_ON_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_ON_MESSAGE0 = '打开录放器  %1 %2 REC %3  PLAY %4';

Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_OFF_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_OFF_MESSAGE0 = '关闭录放器 %1  REC %2  PLAY %3';

Blockly.Msg.LEDONG_VOICE_RECORD_ON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.LEDONG_VOICE_RECORD_ON_TOOLTIP = '';
Blockly.Msg.LEDONG_VOICE_RECORD_ON_MESSAGE0 = '打开录放器 %1 PLAY %2';

Blockly.Msg.LEDONG_VOICE_RECORD_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.LEDONG_VOICE_RECORD_OFF_TOOLTIP = '';
Blockly.Msg.LEDONG_VOICE_RECORD_OFF_MESSAGE0 = '关闭录放器 %1 PLAY %2';

Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_PLAY = '播放';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_REC = '录音';

Blockly.Msg.MPYTHON_BLUEBIT_IR_RECEIVE = '红外探测';
Blockly.Msg.MPYTHON_BLUEBIT_SOUND = '麦克风';
Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER = '循迹';
Blockly.Msg.MPYTHON_BLUEBIT_VIBRATION = '震动';
Blockly.Msg.MPYTHON_BLUEBIT_RFID = '射频卡';
Blockly.Msg.MPYTHON_BLUEBIT_FINGERPRINT_SCANNER = '指纹';
Blockly.Msg.MPYTHON_BLUEBIT_PIR = '人体感应';
Blockly.Msg.MPYTHON_BLUEBIT_MAGNETIC = '门磁开关';
Blockly.Msg.MPYTHON_BLUEBIT_BUTTON = '按键';
Blockly.Msg.MPYTHON_BLUEBIT_RELAY = '继电器';
Blockly.Msg.MPYTHON_BLUEBIT_LIMIT_SWITCH = '限位开关';

Blockly.Msg.MPYTHON_BLUEBIT_FAN = '风扇';
Blockly.Msg.MPYTHON_BLUEBIT_LASER = '激光';

Blockly.Msg.MPYTHON_BLUEBIT_NTC_TEMP = '热敏电阻';
Blockly.Msg.MPYTHON_BLUEBIT_WATER = '水位';
Blockly.Msg.MPYTHON_BLUEBIT_SOIL_MOISTURE = '土壤湿度';
Blockly.Msg.MPYTHON_BLUEBIT_ROTATE_DIMMER = '旋钮电位器';
Blockly.Msg.MPYTHON_BLUEBIT_LINEAR_SLIDING_POTENTIOMETER = '直滑电位器';
Blockly.Msg.MPYTHON_BLUEBIT_ANALOG_LIGHT = '模拟光线';
Blockly.Msg.MPYTHON_BLUEBIT_LM35_TEMP = 'LM35温度';
Blockly.Msg.MPYTHON_BLUEBIT_GAS_TEMP = '烟雾';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_CLOCKWISE = '正转';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_ANTICLOCKWISE = '反转';

Blockly.Msg.MPYTHON_BLUEBIT_READ_SOIL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_READ_SOIL_TOOLTIP = '土壤湿度V2.1版本';
Blockly.Msg.MPYTHON_BLUEBIT_READ_SOIL_MESSAGE0 = '土壤湿度(V2.1)%1';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_TOOLTIP = '速度：-100~100 映射至 -1023~1023';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_MESSAGE0 = '打开直流电机%1 %2 速度 %3 引脚AIN1 %4 引脚AIN2 %5';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_MESSAGE0 = '停止直流电机 %1 引脚AIN1 %2 引脚AIN2 %3';

Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_MESSAGE0 = '扩展板 打开风扇 %1';

Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_OFF_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_OFF_MESSAGE0 = '扩展板 关闭风扇 %1';

Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_MESSAGE0 = '扩展板 打开水泵 %1';
Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_MESSAGE02 = '打开水泵 %1';

Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_OFF_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_OFF_MESSAGE0 = '扩展板 关闭水泵 %1';
Blockly.Msg.MPYTHON_BLUEBIT_SET_WATER_PUMP_OFF_MESSAGE02 = '关闭水泵 %1';

Blockly.Msg.MPYTHON_BLUEBIT_4BUTTON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_4BUTTON_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_4BUTTON_MESSAGE0 = '四向按键模块 引脚 %1 按键 %2 被按下';
Blockly.Msg.BLUE = 'A';
Blockly.Msg.GREEN = 'B';
Blockly.Msg.RED = 'C';
Blockly.Msg.YELLOW = 'D';

Blockly.Msg.MPYTHON_BLUEBIT_JOYSTICK_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_BLUEBIT_JOYSTICK_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_JOYSTICK_MESSAGE0 = '摇杆 引脚A0 %1 引脚A1 %2   %3 轴的值';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_I2C_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_I2C_TOOLTIP = '速度：0~100';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_I2C_MESSAGE0 = '扩展板 打开直流电机 %1  %2 速度 %3';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_I2C_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_I2C_TOOLTIP = '速度：0~100';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_I2C_MESSAGE0 = '扩展板 关闭直流电机';

Blockly.Msg.MPYTHON_CRUISE = '巡航';
Blockly.Msg.MPYTHON_POSITION = '定位';

Blockly.Msg.MPYTHON_BLUEBIT_CODED_THREE_MOTOR_ON_I2C_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id10';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_THREE_MOTOR_ON_I2C_TOOLTIP = '速度：-1023~1023';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_THREE_MOTOR_ON_I2C_MESSAGE0 = '编码电机%1 拨码%2 %3  模式%4 %5  M1速度 %6  M2速度 %7';

Blockly.Msg.MPYTHON_BLUEBIT_CODED_STOP_MOTOR_ON_I2C_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id10';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_STOP_MOTOR_ON_I2C_TOOLTIP = '停止编码电机转动';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_STOP_MOTOR_ON_I2C_MESSAGE0 = '停止编码电机转动 %1';

Blockly.Msg.MPYTHON_BLUEBIT_HUM_TEM_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/dht.html#dht22';
Blockly.Msg.MPYTHON_BLUEBIT_HUM_TEM_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_HUM_TEM_MESSAGE0 = 'I2C %1';

Blockly.Msg.MPYTHON_BLUEBIT_TEMPERATURE = '温度';
Blockly.Msg.MPYTHON_BLUEBIT_HUMIDITY = '湿度';

Blockly.Msg.MPYTHON_BLUEBIT_INIT_MIDI_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#midi';
Blockly.Msg.MPYTHON_BLUEBIT_INIT_MIDI_MESSAGE0 = '初始化MIDI TX引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_INIT_MIDI_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MIDI_VOLUME_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#midi';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_VOLUME_MESSAGE0 = '设MIDI音量 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_VOLUME_TOOLTIP = '音量 0~127';

Blockly.Msg.MIDI_PIANO = "平台钢琴"; //ACOUSTIC GRAND PIANO
Blockly.Msg.MIDI_BRIGHTACOUSTICPIANO = "亮音钢琴";
Blockly.Msg.MIDI_ELECTRICGRANDPIANO = "电钢琴";
Blockly.Msg.MIDI_HARPSICHORD = "大键琴";
Blockly.Msg.MIDI_CELESTA = "钢片琴";
Blockly.Msg.MIDI_GLOCKENSPIEL = "钟琴";
Blockly.Msg.MIDI_MUSICALBOX = "音乐盒";
Blockly.Msg.MIDI_MARIMBA = "马林巴琴";
Blockly.Msg.MIDI_XYLOPHONE = "木琴";
Blockly.Msg.MIDI_TUBULARBELL = "管钟";
Blockly.Msg.MIDI_DULCIMER = "洋琴";
Blockly.Msg.MIDI_VIBRAPHONE = "颤音琴"; //VIBRAPHONE
Blockly.Msg.MIDI_ORGAN = "音栓风琴"; //DRAWBAR ORGAN
Blockly.Msg.MIDI_ACOUSTIC_GUITAR = "木吉他"; //ACOUSTIC GUITAR
Blockly.Msg.MIDI_ELECTRIC_GUITAR = "电吉他"; //ELECTRIC GUITAR
Blockly.Msg.MIDI_ACOUSTIC_BASS = "民谣贝斯"; //ACOUSTIC BASS
Blockly.Msg.MIDI_STRING_ENSEMBLE = "弦乐合奏"; //STRING ENSEMBLE
Blockly.Msg.MIDI_VIOLIN = "小提琴"; //VIOLIN
Blockly.Msg.MIDI_TRUMPET = "小号"; //TRUMPET
Blockly.Msg.MIDI_SAX = "萨克斯"; //SAX
Blockly.Msg.MIDI_STEEL_DRUMS = "钢鼓"; //STEEL DRUMS
Blockly.Msg.MIDI_LEAD = "合成音主旋律"; //LEAD
Blockly.Msg.MIDI_PAD = "合成音衬底"; //PAD

Blockly.Msg.MPYTHON_BLUEBIT_MIDI_INSTRUMENT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#midi';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_INSTRUMENT_MESSAGE0 = '设MIDI乐器 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_INSTRUMENT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MIDI_PLAY_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#midi';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_PLAY_MESSAGE0 = 'MIDI %1 音调 %2';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_PLAY_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BRIGHTNESS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#x8';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BRIGHTNESS_MESSAGE0 = '设点阵亮度等級 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BRIGHTNESS_TOOLTIP = '亮度等級 0~15';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_FILL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#x8';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_FILL_MESSAGE0 = '点阵 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_FILL_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BITMAP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#x8';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BITMAP_MESSAGE0 = '设置点阵  %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BITMAP_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_SHOW_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#x8';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_SHOW_MESSAGE0 = '点阵设置生效';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_SHOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_MESSAGE0 = '设MP3音量 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_VOLUME_MESSAGE0 = '设MP3音量 %1 串口号%2';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_TOOLTIP = '音量：0~100';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_MESSAGE0 = '初始化MP3 TXI引脚 %1 RXI引脚 %2 串口号%3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_TOOLTIP = DEVICE + '的 tx 引脚连接音乐模块的 RXI 引脚,rx 引脚连接音乐模块的 TXI 引脚；串口号默认为1,非串口冲突则无需改变';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_NEW1956_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_NEW1956_MESSAGE0 = '初始化MP3 串口：%1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_NEW1956_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_PLUS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_PLUS_MESSAGE0 = 'MP3 音量 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_PLUS_TOOLTIP = '';
Blockly.Msg.MPYTHON_PLUS_1 = '加1';
Blockly.Msg.MPYTHON_MINUS_1 = '減1';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_MESSAGE0 = 'MP3 设置%1播放模式';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_NEW_PLAY_MODE_MESSAGE0 = 'MP3 设置%1播放模式 串口号%2';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_1 = '单曲不循环播放模式(默认)';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_2 = '单曲循环播放模式';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_3 = '所有曲目循环播放模式';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_MODE_4 = '随机模式';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_PLAY_SONG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_PLAY_SONG_MESSAGE0 = 'MP3 播放第 %1 首歌';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_PLAY_SONG_MESSAGE0 = 'MP3 播放第 %1 首歌 串口号%2';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_PLAY_SONG_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_CMD_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_CMD_MESSAGE0 = 'MP3 播放 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_1_CMD_MESSAGE0 = 'MP3 播放 %1 串口号%2';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_CMD_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_SINGLELOOP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#mp3';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_SINGLELOOP_MESSAGE0 = 'MP3 单曲循环 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_SINGLELOOP_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_LOOP_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_LOOP_MESSAGE0 = 'MP3 指定序号%1 歌曲循环播放';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_LOOP_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_IOMODE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_IOMODE_MESSAGE0 = '设扩展端口 IO %2 为 %1';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_IOMODE_TOOLTIP = 'IO: 0~7';

Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_READIO_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_READIO_MESSAGE0 = '扩展端口值 IO %1';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_READIO_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_WRITEIO_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_WRITEIO_MESSAGE0 = '设扩展端口 IO %2 为 %1';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_WRITEIO_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_OBJECT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_OBJECT_MESSAGE0 = 'LCD1602 初始化';
Blockly.Msg.MPYTHON_LCD_OBJECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_PRINT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_PRINT_MESSAGE0 = 'LCD1602 显示 %1';
Blockly.Msg.MPYTHON_LCD_PRINT_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_HOME_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_HOME_MESSAGE0 = 'LCD1602 光标 回到原点';
Blockly.Msg.MPYTHON_LCD_HOME_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_CURSOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_CURSOR_MESSAGE0 = 'LCD1602 光标 %1';
Blockly.Msg.MPYTHON_LCD_CURSOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_SET_CURSOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_SET_CURSOR_MESSAGE0 = 'LCD1602 起始点 行 %2 列 %1';
Blockly.Msg.MPYTHON_LCD_SET_CURSOR_TOOLTIP = '行列从0开始计数';

Blockly.Msg.MPYTHON_LCD_CLEAR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_CLEAR_MESSAGE0 = 'LCD1602 清屏';
Blockly.Msg.MPYTHON_LCD_CLEAR_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_CURSOR_BLINK = '闪烁';
Blockly.Msg.MPYTHON_LCD_CURSOR_NO_BLINK = '不闪烁';

Blockly.Msg.MPYTHON_LEFT_TO_RIGHT = '从左向右';
Blockly.Msg.MPYTHON_RIGHT_TO_LEFT = '从右向左';

Blockly.Msg.MPYTHON_LCD_TEXT_DIRECTION_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_TEXT_DIRECTION_MESSAGE0 = 'LCD1602 文字方向 %1';
Blockly.Msg.MPYTHON_LCD_TEXT_DIRECTION_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_MOVE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#lcd1602';
Blockly.Msg.MPYTHON_LCD_MOVE_MESSAGE0 = 'LCD1602 向 %1 滚动一格';
Blockly.Msg.MPYTHON_LCD_MOVE_TOOLTIP = '';

Blockly.Msg.MPYTHON_IR_TRANS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id8';
Blockly.Msg.MPYTHON_IR_TRANS_MESSAGE0 = '红外发送 单字节字符串 %1 tx 引脚 %2';
Blockly.Msg.MPYTHON_IR_TRANS_TOOLTIP = `单字节字符串：\n'A', 'b', '1'等`

Blockly.Msg.OUTPUT_PIN_HELPURL = '';
Blockly.Msg.OUTPUT_PIN_MESSAGE0 = '%1';
Blockly.Msg.OUTPUT_PIN_TOOLTIP = "";

Blockly.Msg.INPUT_PIN_HELPURL = '';
Blockly.Msg.INPUT_PIN_MESSAGE0 = '%1';
Blockly.Msg.INPUT_PIN_TOOLTIP = "";

Blockly.Msg.READ_ANALOG_PIN_HELPURL = ''
Blockly.Msg.READ_ANALOG_PIN_MESSAGE0 = '%1'
Blockly.Msg.READ_ANALOG_PIN_TOOLTIP = ""

Blockly.Msg.SET_DIGITAL_HELPURL = ''
Blockly.Msg.SET_DIGITAL_MESSAGE0 = '%1'
Blockly.Msg.SET_DIGITAL_TOOLTIP = ""

Blockly.Msg.SET_ANALOG_HELPURL = ''
Blockly.Msg.SET_ANALOG_MESSAGE0 = '%1'
Blockly.Msg.SET_ANALOG_TOOLTIP = ""

Blockly.Msg.ALL_PIN_HELPURL = ''
Blockly.Msg.ALL_PIN_MESSAGE0 = '%1'
Blockly.Msg.ALL_PIN_TOOLTIP = ""

Blockly.Msg.PWM_PIN_HELPURL = ''
Blockly.Msg.PWM_PIN_MESSAGE0 = '%1'
Blockly.Msg.PWM_PIN_TOOLTIP = ""

Blockly.Msg.DH11_HUM_TEM_PIN_HELPURL = ''
Blockly.Msg.DH11_HUM_TEM_PIN_MESSAGE0 = '%1'
Blockly.Msg.DH11_HUM_TEM_PIN_TOOLTIP = ""

Blockly.Msg.UART_TX_PIN_HELPURL = ''
Blockly.Msg.UART_TX_PIN_MESSAGE0 = '%1'
Blockly.Msg.UART_TX_PIN_TOOLTIP = ""

Blockly.Msg.UART_RX_PIN_HELPURL = ''
Blockly.Msg.UART_RX_PIN_MESSAGE0 = '%1'
Blockly.Msg.UART_RX_PIN_TOOLTIP = ""

Blockly.Msg.I2C_PIN_HELPURL = ''
Blockly.Msg.I2C_PIN_MESSAGE0 = '%1'
Blockly.Msg.I2C_PIN_TOOLTIP = ""

// 2021-06-23 MQ135拓展
Blockly.Msg.MPYTHON_MQ135_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_MQ135_INIT_MESSAGE0 = 'MQ135初始化 输出引脚%1 温度%2 ℃ 湿度%3 %';
Blockly.Msg.MPYTHON_MQ135_INIT_TOOLTIP = 'MQ135上的VCC 连接扩展板的电源口 V ，GND连接扩展板的地线口 G ，AO输出连接扩展板的引脚 P0/P1(即选引脚)\nMQ135主要用于检测空气中的二氧化碳、酒精、苯、氮氧化物、氨等气体的浓度';


Blockly.Msg.MPYTHON_MQ135_OPTIONS_MESSAGE0 = 'MQ135 返回 %1'
Blockly.Msg.MPYTHON_MQ135_OPTIONS_HELPURL = ''
Blockly.Msg.MPYTHON_MQ135_OPTIONS_TOOLTIP = '返回探测到的二氧化碳的百万分之一(假设只有空气中的二氧化碳) ppm浓度'

Blockly.Msg.MQ135_PIN_HELPURL = ''
Blockly.Msg.MQ135_PIN_MESSAGE0 = '%1'
Blockly.Msg.MQ135_PIN_TOOLTIP = ""

Blockly.Msg.MPYTHON_MQ135_GET_RZERO = '校正传感器电阻';
Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_RZERO = '校正传感器电阻(校准温度、湿度)';
Blockly.Msg.MPYTHON_MQ135_GET_PPM = '二氧化碳、酒精、苯、氮氧化物、氨等气体ppm浓度';
Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_PPM = '二氧化碳、酒精、苯、氮氧化物、氨等气体ppm浓度(校准温度、湿度)';

// 2021-02-05 拓展板新增功能
Blockly.Msg.MPYTHON_PARROT_GET_BATTERY_LEVEL_HELPURL = '';
Blockly.Msg.MPYTHON_PARROT_GET_BATTERY_LEVEL_TOOLTIP = '返回电量，单位mV';
Blockly.Msg.MPYTHON_PARROT_GET_BATTERY_LEVEL_MESSAGE0 = '拓展板的电压值(mV)';

Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_RAW_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_RAW_TOOLTIP = '返回编码后的红外脉冲数据buff';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_RAW_MESSAGE0 = '拓展板 红外脉冲任意编码 %1 载波频率(Hz) %2 code总数 %3 循环码位置 %4 code列表 %5 编码波形数据 %6';

Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_NEC_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_NEC_TOOLTIP = '返回编码后的红外脉冲数据buff\n用户码：0~255\n命令码：0~255';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_NEC_MESSAGE0 = '拓展板 红外脉冲NEC编码 %1 用户码 %2 命令码 %3';

Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_MESSAGE0 = '拓展板 发送红外脉冲数据 %1 %2';

Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_REPEAT_0 = '只发一次';
Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_REPEAT_1 = '持续发送';

Blockly.Msg.MPYTHON_BLUEBIT_IR_STOP_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_STOP_SEND_TOOLTIP = '当发送重复码后，使用此函数来停止发送。';
Blockly.Msg.MPYTHON_BLUEBIT_IR_STOP_SEND_MESSAGE0 = '拓展板 停止发送红外脉冲数据';

Blockly.Msg.MPYTHON_BLUEBIT_IR_LEARN_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_LEARN_TOOLTIP = '学习开始后，需等待4秒，之后返回学习结果。';
Blockly.Msg.MPYTHON_BLUEBIT_IR_LEARN_MESSAGE0 = '拓展板 开始红外学习';

Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_STATUS_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_STATUS_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_STATUS_MESSAGE0 = '拓展板 红外学习有结果 ?';

Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_DATA_TOOLTIP = '返回学习后的“红外编码数据”，须在 learn 函数后使用。';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_DATA_MESSAGE0 = '拓展板 学习到的红外编码数据';



Blockly.Msg.MQTT_COMMON_SETUP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient'
Blockly.Msg.MQTT_COMMON_SETUP_MESSAGE0 = 'MQTT %1 client_id %2 server %3 port %4 user %5 password %6 keepalive %7';
Blockly.Msg.MQTT_COMMON_SETUP_TOOLTIP = "物联网平台通用类接口，可以连接部分普遍兼容的平台";

Blockly.Msg.MQTT_LABPLUSIOT_SETUP_HELPURL = 'http://iot.labplus.cn/'
Blockly.Msg.MQTT_LABPLUSIOT_SETUP_MESSAGE0 = 'MQTT 掌控IOT平台 %1 client_id %2 user %3 password %4';
Blockly.Msg.MQTT_LABPLUSIOT_SETUP_TOOLTIP = "盛思物联网平台通用类接口，可以连接部分普遍兼容的平台";

Blockly.Msg.MQTT_TENCENT_SETUP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient'
Blockly.Msg.MQTT_TENCENT_SETUP_MESSAGE0 = 'MQTT 腾讯物联网 %1 服务器 %2 Port %3 AppId %4 Device %5 -- 传出参数 -- %6 ReportTopic %7 ControlTopic %8';
Blockly.Msg.MQTT_TENCENT_SETUP_TOOLTIP = "用来连接腾讯的物联网平台";

Blockly.Msg.MQTT_TENCENT_SETUPS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient'
Blockly.Msg.MQTT_TENCENT_SETUPS_MESSAGE0 = 'MQTT 腾讯物联网 %1 服务器 %2 Port %3 AppId %4 Device %5 -- 传出参数 -- %6 ReportTopic %7 ControlTopic %8';
Blockly.Msg.MQTT_TENCENT_SETUPS_TOOLTIP = "用来连接腾讯的物联网平台";

Blockly.Msg.MQTT_SETUP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_SETUP_MESSAGE0 = 'MQTT-Easy IoT %1 服务器 %2  Client ID %5 Iot_id %3 Iot_pwd %4';
Blockly.Msg.MQTT_SETUP_TOOLTIP = "用来连接Easy IoT平台";

Blockly.Msg.MPYTHON_MQTT_COMMON_SETUP_HELPURL = ''
Blockly.Msg.MPYTHON_MQTT_COMMON_SETUP_MESSAGE0 = 'mPython MQTT %1 接入设备id %2 服务器ip地址 %3 端口号 %4';
Blockly.Msg.MPYTHON_MQTT_COMMON_SETUP_TOOLTIP = "用来连接mpython软件python模式下的MQTT物联网平台\n设备id不可重复\n服务器地址默认本地ip地址\n端口号默认1883";

Blockly.Msg.MQTT_CONNECT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_CONNECT_MESSAGE0 = '连接 MQTT';
Blockly.Msg.MQTT_CONNECT_TOOLTIP = "";


Blockly.Msg.MQTT_PUBLISH_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_PUBLISH_MESSAGE0 = '发布 %1  至  主题 %2';
Blockly.Msg.MQTT_PUBLISH_TOOLTIP = "";

Blockly.Msg.MQTT_REC_FROM_TOPIC_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_REC_FROM_TOPIC_MESSAGE0 = '当从主题 %1 接收到 %2 时';
Blockly.Msg.MQTT_REC_FROM_TOPIC_TOOLTIP = "";

Blockly.Msg.MQTT_RECEIVE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_RECEIVE_MESSAGE0 = '当从主题 %1 接收到 %2 时';
Blockly.Msg.MQTT_RECEIVE_TOOLTIP = "参数\"主题\"只接受变量";

Blockly.Msg.MQTT_WAIT_MSG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_WAIT_MSG_MESSAGE0 = '等待主题消息 以 %1 模式';
Blockly.Msg.MQTT_WAIT_MSG_TOOLTIP = "建议放在'一直重复'中运行";

Blockly.Msg.MQTT_DISCONNECT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_DISCONNECT_MESSAGE0 = 'MQTT 断开连接';
Blockly.Msg.MQTT_DISCONNECT_TOOLTIP = "";

Blockly.Msg.MQTT_LAST_WILL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient.set_last_will'
Blockly.Msg.MQTT_LAST_WILL_MESSAGE0 = '设置 MQTT 主题 %2 离线消息 %1';
Blockly.Msg.MQTT_LAST_WILL_TOOLTIP = "设置 MQTT last will 消息。应该在 connect() 之前调用。";


// SIoT
Blockly.Msg.MPYTHON_SIOT_CONNECT_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_CONNECT_TOOLTIP = '客户端ID重复的话会出现被挤掉线的情况，用户名和密码默认siot';
Blockly.Msg.MPYTHON_SIOT_CONNECT_MESSAGE0 = '创建 SIoT 连接 %1 客户端ID(不可重复) %2 服务器IP %3 用户 %4 密码 %5';

Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_MESSAGE0 = 'SIoT 连接成功 ?';

Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_TOOLTIP = '主题名称由字母、数字和下划线组成，并且应以字母或下划线开头';
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_MESSAGE0 = 'SIoT 订阅主题';

Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_EMPTY_TITLE = "点击左边星号 订阅 SIoT 主题";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_INPUT_WITH = "SIoT 订阅 主题1";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TITLE = "主题";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_CONTAINER_TITLE_ADD = "最多订阅 5 个主题";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_CONTAINER_TOOLTIP = "";

Blockly.Msg.MPYTHON_SIOT_DISCONNECT_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_DISCONNECT_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_DISCONNECT_MESSAGE0 = "SIoT 断开连接";

Blockly.Msg.MPYTHON_SIOT_MESSAGE_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_MESSAGE_TOOLTIP = "主题名称由字母、数字和下划线组成，并且应以字母或下划线开头";
Blockly.Msg.MPYTHON_SIOT_MESSAGE_MESSAGE0 = "从 SIoT 收到的消息";

Blockly.Msg.MPYTHON_SIOT_TOPIC1 = "主题1";
Blockly.Msg.MPYTHON_SIOT_TOPIC2 = "主题2";
Blockly.Msg.MPYTHON_SIOT_TOPIC3 = "主题3";
Blockly.Msg.MPYTHON_SIOT_TOPIC4 = "主题4";
Blockly.Msg.MPYTHON_SIOT_TOPIC5 = "主题5";

Blockly.Msg.MPYTHON_SIOT_PUBLISH_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_PUBLISH_TOOLTIP = "主题名称由字母、数字和下划线组成，并且应以字母或下划线开头";
Blockly.Msg.MPYTHON_SIOT_PUBLISH_MESSAGE0 = "SIoT 发送消息 %1 到 %2";
Blockly.Msg.MPYTHON_SIOT_PUBLISH_TO_MESSAGE0 = "SIoT 发送消息 %1 到 主题 %2";

Blockly.Msg.MPYTHON_SIOT_RECEIVE_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_TOOLTIP = "主题名称由字母、数字和下划线组成，并且应以字母或下划线开头";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_MESSAGE0 = "当从 SIoT %1 收到消息时";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_FROM_MESSAGE0 = "当从 SIoT 主题 %1 收到消息时";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_FROM_MESSAGE0_1956 = "SIoT 订阅主题 %1 且当收到消息时";

// SIoT2.0
Blockly.Msg.MPYTHON_SIOT2_CONNECT_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT2_CONNECT_TOOLTIP = '客户端ID重复的话会出现被挤掉线的情况，用户名和密码默认siot';
Blockly.Msg.MPYTHON_SIOT2_CONNECT_MESSAGE0 = '创建 SIoT V2.0 连接 %1 客户端ID(不可重复) %2 服务器IP %3 用户 %4 密码 %5';

Blockly.Msg.MPYTHON_SIOT2_ISCONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT2_ISCONNECTED_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT2_ISCONNECTED_MESSAGE0 = 'SIoT V2.0 连接成功 ?';

Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_TOOLTIP = '主题名称由字母、数字和下划线组成，并且应以字母或下划线开头';
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_MESSAGE0 = 'SIoT V2.0 订阅主题';

Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_EMPTY_TITLE = "点击左边星号 订阅 SIoT 主题";
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_INPUT_WITH = "SIoT V2.0 订阅 主题1";
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_ITEM_TITLE = "主题";
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_CONTAINER_TITLE_ADD = "最多订阅 5 个主题";
Blockly.Msg.MPYTHON_SIOT2_SUBSCRIBE_CONTAINER_TOOLTIP = "";

Blockly.Msg.MPYTHON_SIOT2_DISCONNECT_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT2_DISCONNECT_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT2_DISCONNECT_MESSAGE0 = "SIoT V2.0 断开连接";

Blockly.Msg.MPYTHON_SIOT2_MESSAGE_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT2_MESSAGE_TOOLTIP = "主题名称由字母、数字和下划线组成，并且应以字母或下划线开头";
Blockly.Msg.MPYTHON_SIOT2_MESSAGE_MESSAGE0 = "从 SIoT V2.0 收到的消息";

Blockly.Msg.MPYTHON_SIOT2_TOPIC1 = "主题1";
Blockly.Msg.MPYTHON_SIOT2_TOPIC2 = "主题2";
Blockly.Msg.MPYTHON_SIOT2_TOPIC3 = "主题3";
Blockly.Msg.MPYTHON_SIOT2_TOPIC4 = "主题4";
Blockly.Msg.MPYTHON_SIOT2_TOPIC5 = "主题5";

Blockly.Msg.MPYTHON_SIOT2_PUBLISH_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT2_PUBLISH_TOOLTIP = "主题名称由字母、数字和下划线组成，并且应以字母或下划线开头";
Blockly.Msg.MPYTHON_SIOT2_PUBLISH_MESSAGE0 = "SIoT V2.0 发送消息 %1 到 %2";
Blockly.Msg.MPYTHON_SIOT2_PUBLISH_TO_MESSAGE0 = "SIoT V2.0 发送消息 %1 到 主题 %2";

Blockly.Msg.MPYTHON_SIOT2_RECEIVE_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT2_RECEIVE_TOOLTIP = "主题名称由字母、数字和下划线组成，并且应以字母或下划线开头";
Blockly.Msg.MPYTHON_SIOT2_RECEIVE_MESSAGE0 = "当从 SIoT V2.0 %1 收到消息时";
Blockly.Msg.MPYTHON_SIOT2_RECEIVE_FROM_MESSAGE0 = "当从 SIoT V2.0 主题 %1 收到消息时";
Blockly.Msg.MPYTHON_SIOT2_RECEIVE_FROM_MESSAGE0_1956 = "SIoT V2.0 订阅主题 %1 且当收到消息时";



Blockly.Msg.MPYTHON_IR_RECV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id8';
Blockly.Msg.MPYTHON_IR_RECV_MESSAGE0 = '红外接收 整型  rx 引脚 %1';
Blockly.Msg.MPYTHON_IR_RECV_TOOLTIP = '第一次接收总为空';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_PRINT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#oled';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_PRINT_MESSAGE0 = 'bluebit OLED%1 显示 %2 x %3 y %4';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_PRINT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#oled';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_INIT_MESSAGE0 = 'bluebit OLED 初始化 tx %1 rx %2';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_CLEAR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#oled';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_CLEAR_MESSAGE0 = 'bluebit OLED 清空';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_CLEAR_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_BMP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#oled';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_BMP_MESSAGE0 = 'bluebit OLED%1 显示图像%2 x %3 y %4 宽 %5 高 %6 16进制图像数据 %7';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_BMP_TOOLTIP = '';


/*yeelight*/
Blockly.Msg.YEELIGHT_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_INIT_MESSAGE0 = '设置实例  第 %1 个 Yeelight 命名为 %2';
Blockly.Msg.YEELIGHT_INIT_TOOLTIP = '若设备列表为空将导致报错';

Blockly.Msg.YEELIGHT_INIT_IP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_INIT_IP_MESSAGE0 = '设置实例 %1 的 ip 为 %2';
Blockly.Msg.YEELIGHT_INIT_IP_TOOLTIP = '根据设备列表中的网内 ip 初始化 Yeelight，若设备列表为空将导致报错';

Blockly.Msg.YEELIGHT_SEARCH_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_SEARCH_MESSAGE0 = '局域网内 Yeelight 设备列表';
Blockly.Msg.YEELIGHT_SEARCH_TOOLTIP = '';

Blockly.Msg.YEELIGHT_CONFIG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_CONFIG_MESSAGE0 = '第 %1 个 Yeelight 的 %2';
Blockly.Msg.YEELIGHT_CONFIG_TOOLTIP = '若设备列表为空将导致报错';

Blockly.Msg.BRIGHT = '亮度';

Blockly.Msg.YEELIGHT_SWITCH_STATE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_SWITCH_STATE_MESSAGE0 = '%2   %1';
Blockly.Msg.YEELIGHT_SWITCH_STATE_TOOLTIP = '';

Blockly.Msg.YEELIGHT_SET_RGB_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_SET_RGB_MESSAGE0 = '%1 设颜色 R %2 G %3 B %4';
Blockly.Msg.YEELIGHT_SET_RGB_TOOLTIP = '';

Blockly.Msg.YEELIGHT_SET_BRIGHTNESS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_SET_BRIGHTNESS_MESSAGE0 = '%1 设亮度 %2';
Blockly.Msg.YEELIGHT_SET_BRIGHTNESS_TOOLTIP = '';

Blockly.Msg.YEELIGHT_SET_HSV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.YEELIGHT_SET_HSV_MESSAGE0 = '%1 设 HSV 色调 %2 饱和度 %3';
Blockly.Msg.YEELIGHT_SET_HSV_TOOLTIP = '色调: 0-359, 飽和度: 0-100';

Blockly.Msg.zero_to_100_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/yeelight.html?highlight=yeelight#yeelight';
Blockly.Msg.zero_to_100_MESSAGE0 = '%1';
Blockly.Msg.zero_to_100_TOOLTIP = '';

Blockly.Msg.YEELIGHT_SET_RGB_COLOR_HELPURL = '';
Blockly.Msg.YEELIGHT_SET_RGB_COLOR_MESSAGE0 = '%1 设颜色 %2';
Blockly.Msg.YEELIGHT_SET_RGB_COLOR_TOOLTIP = '';

Blockly.Msg.YEELIGHT_SET_COLOR_TEMP_HELPURL = '';
Blockly.Msg.YEELIGHT_SET_COLOR_TEMP_MESSAGE0 = '%1 设色温 %2';
Blockly.Msg.YEELIGHT_SET_COLOR_TEMP_TOOLTIP = '1700-6500';


/*tello*/
Blockly.Msg.TELLO_ON = '打开';
Blockly.Msg.TELLO_OFF = '关闭';
Blockly.Msg.TELLO_UP = '上';
Blockly.Msg.TELLO_DOWN = '下';
Blockly.Msg.TELLO_LEFT = '左';
Blockly.Msg.TELLO_RIGHT = '右';
Blockly.Msg.TELLO_FORWARD = '前';
Blockly.Msg.TELLO_BACK = '后';
Blockly.Msg.TELLO_CLOCKWISE = '顺时针';
Blockly.Msg.TELLO_ANTICLOCKWISE = '逆时针';
Blockly.Msg.TELLO_MDIRECTION0 = '仅打开下视探测';
Blockly.Msg.TELLO_MDIRECTION1 = '仅打开前视探测';
Blockly.Msg.TELLO_MDIRECTION2 = '同时打开前视和下视探测';

Blockly.Msg.TELLO_POINT_HELPURL = '';
Blockly.Msg.TELLO_POINT_TOOLTIP = '';
Blockly.Msg.TELLO_POINT_MESSAGE0 = '点 x %1 y %2 z %3';

Blockly.Msg.TELLO_COMMAND_HELPURL = '';
Blockly.Msg.TELLO_COMMAND_TOOLTIP = '';
Blockly.Msg.TELLO_COMMAND_MESSAGE0 = '进入SDK命令模式';

Blockly.Msg.TELLO_TAKEOFF_HELPURL = '';
Blockly.Msg.TELLO_TAKEOFF_TOOLTIP = '';
Blockly.Msg.TELLO_TAKEOFF_MESSAGE0 = '起飞';

Blockly.Msg.TELLO_LAND_HELPURL = '';
Blockly.Msg.TELLO_LAND_TOOLTIP = '';
Blockly.Msg.TELLO_LAND_MESSAGE0 = '降落';

Blockly.Msg.TELLO_MOTORON_HELPURL = '';
Blockly.Msg.TELLO_MOTORON_TOOLTIP = '适用于RoboMaster TT';
Blockly.Msg.TELLO_MOTORON_MESSAGE0 = '进入起桨模式 [TT]';

Blockly.Msg.TELLO_MOTOROFF_HELPURL = '';
Blockly.Msg.TELLO_MOTOROFF_TOOLTIP = '适用于RoboMaster TT';
Blockly.Msg.TELLO_MOTOROFF_MESSAGE0 = '退出起桨模式 [TT]';

Blockly.Msg.TELLO_STREAM_HELPURL = '';
Blockly.Msg.TELLO_STREAM_TOOLTIP = '';
Blockly.Msg.TELLO_STREAM_MESSAGE0 = '%1 视频流';

Blockly.Msg.TELLO_EMERGENCY_HELPURL = '';
Blockly.Msg.TELLO_EMERGENCY_TOOLTIP = '';
Blockly.Msg.TELLO_EMERGENCY_MESSAGE0 = '停止电机转动';

Blockly.Msg.TELLO_FLY_HELPURL = '';
Blockly.Msg.TELLO_FLY_TOOLTIP = '飞行距离取值 20～500';
Blockly.Msg.TELLO_FLY_MESSAGE0 = '向 %1 飞 %2 厘米';

Blockly.Msg.TELLO_ROTATE_HELPURL = '';
Blockly.Msg.TELLO_ROTATE_TOOLTIP = '旋转角度取值 1～360';
Blockly.Msg.TELLO_ROTATE_MESSAGE0 = '%1 旋转 %2';

Blockly.Msg.TELLO_ROLL_HELPURL = '';
Blockly.Msg.TELLO_ROLL_TOOLTIP = '';
Blockly.Msg.TELLO_ROLL_MESSAGE0 = '朝 %1 方向翻滚';

Blockly.Msg.TELLO_GO_SPEED_HELPURL = '';
Blockly.Msg.TELLO_GO_SPEED_TOOLTIP = '速度: 10 - 100(cm/s)\nx/y/z: -500 - 500\nx、y、z不能同时在 -20 ～ 20 之间';
Blockly.Msg.TELLO_GO_SPEED_MESSAGE0 = '以速度 %1 飞往 %2';

Blockly.Msg.TELLO_STOP_HELPURL = '';
Blockly.Msg.TELLO_STOP_TOOLTIP = '停止运动并悬停，任何时候都可以';
Blockly.Msg.TELLO_STOP_MESSAGE0 = '停止运动并悬停';

Blockly.Msg.TELLO_CURVE_SPEED_HELPURL = '';
Blockly.Msg.TELLO_CURVE_SPEED_TOOLTIP = '如果弧线半径不在0.5～10米范围内，则返回相应提醒。\n速度: 10 - 60(cm/s)\nx/y/z: -500 - 500\nx、y、z不能同时在 -20 ～ 20 之间';
Blockly.Msg.TELLO_CURVE_SPEED_MESSAGE0 = '以速度 %1 飞弧线，从 %2 到 %3';

Blockly.Msg.TELLO_GO_SPEED_MID_HELPURL = '';
Blockly.Msg.TELLO_GO_SPEED_MID_TOOLTIP = 'm-1: Tello内部算法最快识别到的挑战卡\nm-2: 距离Tello最近的挑战卡\n速度: 10 - 100(cm/s)\nx/y: -500 - 500\nz: 0 - 500\nx、y、z不能同时在 -20 ～ 20 之间';
Blockly.Msg.TELLO_GO_SPEED_MID_MESSAGE0 = '以速度 %1 飞往 %2 挑战卡坐标系的 %3';

Blockly.Msg.TELLO_CURVE_SPEED_MID_HELPURL = '';
Blockly.Msg.TELLO_CURVE_SPEED_MID_TOOLTIP = '如果弧线半径不在0.5～10米范围内，则返回相应提醒。\nm-1: Tello内部算法最快识别到的挑战卡\nm-2: 距离Tello最近的挑战卡\n速度: 10 - 60(cm/s)\nx/y: -500 - 500\nz: 0 - 500\nx、y、z不能同时在 -20 ～ 20 之间';
Blockly.Msg.TELLO_CURVE_SPEED_MID_MESSAGE0 = '以速度 %1 飞弧线，在 %2 挑战卡坐标系中，从 %3 到 %4';

Blockly.Msg.TELLO_JUMP_SPEED_MID_HELPURL = '';
Blockly.Msg.TELLO_JUMP_SPEED_MID_TOOLTIP = 'm-1: Tello内部算法最快识别到的挑战卡\nm-2: 距离Tello最近的挑战卡';
Blockly.Msg.TELLO_JUMP_SPEED_MID_MESSAGE0 = '以速度 %1 飞往 %2 挑战卡坐标系的 %3 后悬停，识别并平行飞向 %4 挑战卡，然后旋转到 %5';

Blockly.Msg.TELLO_SET_SPEED_HELPURL = '';
Blockly.Msg.TELLO_SET_SPEED_TOOLTIP = '速度取值范围 10～100 cm/s\n只对未明确申明速度的指令有效';
Blockly.Msg.TELLO_SET_SPEED_MESSAGE0 = '将当前速度设为 %1 cm/s';

Blockly.Msg.TELLO_SET_RC_HELPURL = '';
Blockly.Msg.TELLO_SET_RC_TOOLTIP = '横滚/俯仰/高度/偏航 取值范围均为 -100 ～ 100';
Blockly.Msg.TELLO_SET_RC_MESSAGE0 = '设置遥控器的4个通道杆量 %1 横滚 %2 俯仰 %3 高度 %4 偏航 %5';

Blockly.Msg.TELLO_SET_WIFI_HELPURL = '';
Blockly.Msg.TELLO_SET_WIFI_TOOLTIP = '';
Blockly.Msg.TELLO_SET_WIFI_MESSAGE0 = '更改 Tello Wi-Fi 设置 %1 SSID %2 PASS %3';

Blockly.Msg.TELLO_SET_M_HELPURL = '';
Blockly.Msg.TELLO_SET_M_TOOLTIP = '打开挑战卡探测时，默认同时打开前视和下视探测';
Blockly.Msg.TELLO_SET_M_MESSAGE0 = '%1 挑战卡探测';

Blockly.Msg.TELLO_SET_MDIRECTION_HELPURL = '';
Blockly.Msg.TELLO_SET_MDIRECTION_TOOLTIP = '使用前必须打开挑战卡探测功能；\n单独打开前视或者下视探测时，探测频率为 20Hz，同时打开前视和下视时，将交替探测，单个反向的探测频率为 10Hz。';
Blockly.Msg.TELLO_SET_MDIRECTION_MESSAGE0 = '设置探测模式 %1';

Blockly.Msg.TELLO_SET_AP_HELPURL = '';
Blockly.Msg.TELLO_SET_AP_TOOLTIP = '';
Blockly.Msg.TELLO_SET_AP_MESSAGE0 = '将 Tello 转为 station 模式，并连入到 AP %1 SSID %2 PASS %3';

Blockly.Msg.TELLO_CUSTOM_HELPURL = '';
Blockly.Msg.TELLO_CUSTOM_TOOLTIP = '';
Blockly.Msg.TELLO_CUSTOM_MESSAGE0 = '向 Tello 发送指令 %1';

Blockly.Msg.TELLO_INIT_HELPURL = '';
Blockly.Msg.TELLO_INIT_TOOLTIP = '';
Blockly.Msg.TELLO_INIT_MESSAGE0 = 'Tello 运行环境初始化';

Blockly.Msg.TELLO_REPEAT_FOREVER_HELPURL = '';
Blockly.Msg.TELLO_REPEAT_FOREVER_TOOLTIP = '';
Blockly.Msg.TELLO_REPEAT_FOREVER_MESSAGE0 = 'Tello 一直重复';

Blockly.Msg.TELLO_ASK_PARAM_HELPURL = '';
Blockly.Msg.TELLO_ASK_PARAM_TOOLTIP = '';
Blockly.Msg.TELLO_ASK_PARAM_MESSAGE0 = '问询 %1';

Blockly.Msg.TELLO_GET_PARAM_HELPURL = '';
Blockly.Msg.TELLO_GET_PARAM_TOOLTIP = '';
Blockly.Msg.TELLO_GET_PARAM_MESSAGE0 = '获取 %1';

Blockly.Msg.TELLO_PARAM_SPEED = '速度（厘米/秒）';
Blockly.Msg.TELLO_PARAM_BATTERY = '电池剩余电量的百分比值';
Blockly.Msg.TELLO_PARAM_TIME = '电机运转时间（秒）';
Blockly.Msg.TELLO_PARAM_WIFI = 'Wi-Fi 性噪比';
Blockly.Msg.TELLO_PARAM_SDK = 'Tello SDK 版本号';
Blockly.Msg.TELLO_PARAM_SN = 'Tello SN 码';

Blockly.Msg.TELLO_PARAM_MID = '检测到的挑战卡 ID';
Blockly.Msg.TELLO_PARAM_X = '飞行器相对于检测到的挑战卡的 X 轴坐标';
Blockly.Msg.TELLO_PARAM_Y = '飞行器相对于检测到的挑战卡的 Y 轴坐标';
Blockly.Msg.TELLO_PARAM_Z = '飞行器相对于检测到的挑战卡的 Z 轴坐标';
Blockly.Msg.TELLO_PARAM_MPRY = '飞行器在检测到的挑战卡坐标系中的俯仰、横滚及偏航角度';
Blockly.Msg.TELLO_PARAM_PITCH = '俯仰角度';
Blockly.Msg.TELLO_PARAM_ROLL = '横滚角度';
Blockly.Msg.TELLO_PARAM_YAW = '偏航角度';
Blockly.Msg.TELLO_PARAM_VGX = 'X 轴速度（厘米/秒）';
Blockly.Msg.TELLO_PARAM_VGY = 'Y 轴速度（厘米/秒）';
Blockly.Msg.TELLO_PARAM_VGZ = 'Z 轴速度（厘米/秒）';
Blockly.Msg.TELLO_PARAM_TEMPL = '主板最低温度';
Blockly.Msg.TELLO_PARAM_TEMPH = '主板最高温度';
Blockly.Msg.TELLO_PARAM_TOF = 'ToF 距离（厘米）';
Blockly.Msg.TELLO_PARAM_H = '相对起飞点高度（厘米）';
Blockly.Msg.TELLO_PARAM_BAT = Blockly.Msg.TELLO_PARAM_BATTERY;
Blockly.Msg.TELLO_PARAM_BARO = '气压计测量高度（米）';
Blockly.Msg.TELLO_PARAM_AGX = 'X 轴加速度';
Blockly.Msg.TELLO_PARAM_AGY = 'Y 轴加速度';
Blockly.Msg.TELLO_PARAM_AGZ = 'Z 轴加速度';

Blockly.Msg.TELLO_STATE_HELPURL = '';
Blockly.Msg.TELLO_STATE_TOOLTIP = '返回数据字典';
Blockly.Msg.TELLO_STATE_MESSAGE0 = 'Tello 状态 (字典)'

/*掌控板 - 扩展 - Bluebit - 结束 */

/*掌控实验箱*/
Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0 = 'BME280%1';
Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP = '气压单位Pa, 温度单位摄氏度, 环境湿度单位%';

Blockly.Msg.MPYTHONBOX_WEATHER_HELPURL = '';
Blockly.Msg.MPYTHONBOX_WEATHER_MESSAGE0 = '气象传感器%1';
Blockly.Msg.MPYTHONBOX_WEATHER_TOOLTIP = '气压单位Pa, 温度单位摄氏度, 环境湿度单位%';

Blockly.Msg.mpythonbox_sound_MESSAGE0 = '声音值';
Blockly.Msg.mpythonbox_sound_TOOLTIP = '采样数据，为0~4095。';
Blockly.Msg.mpythonbox_sound_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython.html';

Blockly.Msg.MPYTHONBOX_SLIDER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_SLIDER_MESSAGE0 = '滑杆';
Blockly.Msg.MPYTHONBOX_SLIDER_TOOLTIP = '返回滑杆电阻采样值。范围0~4095。';

Blockly.Msg.MPYTHONBOX_5BUTTON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_5BUTTON_MESSAGE0 = '五向按键%1 %2';
Blockly.Msg.MPYTHONBOX_5BUTTON_TOOLTIP = '';

Blockly.Msg.MPYTHONBOX_MOTOR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_MOTOR_MESSAGE0 = '马达 速度%1';
Blockly.Msg.MPYTHONBOX_MOTOR_TOOLTIP = '马达速度,范围±100。';

Blockly.Msg.MPYTHONBOX_MOTOR_FOREWARD_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_MOTOR_FOREWARD_MESSAGE0 = '马达正转 速度%1';
Blockly.Msg.MPYTHONBOX_MOTOR_FOREWARD_TOOLTIP = '马达正转速度,范围0~100。';

Blockly.Msg.MPYTHONBOX_MOTOR_REVERSAL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_MOTOR_REVERSAL_MESSAGE0 = '马达反转 速度%1';
Blockly.Msg.MPYTHONBOX_MOTOR_REVERSAL_TOOLTIP = '马达反转速度,范围0~100。';

Blockly.Msg.MPYTHONBOX_MOTOR_STOP_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_MOTOR_STOP_MESSAGE0 = '马达停止';
Blockly.Msg.MPYTHONBOX_MOTOR_STOP_TOOLTIP = '';

Blockly.Msg.MPYTHONBOX_ULTRASONIC_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython_box.get_key';
Blockly.Msg.MPYTHONBOX_ULTRASONIC_MESSAGE0 = '超声波';
Blockly.Msg.MPYTHONBOX_ULTRASONIC_TOOLTIP = '超声波测距，获取超声波传感器测距值,单位cm。范围3~340CM';

Blockly.Msg.MPYTHONBOX_THEHUMANBODYINFRARE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython_box.get_key';
Blockly.Msg.MPYTHONBOX_THEHUMANBODYINFRARE_MESSAGE0 = '人体红外';
Blockly.Msg.MPYTHONBOX_THEHUMANBODYINFRARE_TOOLTIP = '返回人体红外触发值。当为1时,表示已触发；当为0时,表示未触发。';

Blockly.Msg.MPYTHONBOX_RGB_pixel_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_pixel_MESSAGE0 = '设定第 %1列 %2行  R%3 G%4 B%5';
Blockly.Msg.MPYTHONBOX_RGB_pixel_TOOLTIP = '设定第多少列，行的RGB顏色';

Blockly.Msg.MPYTHONBOX_RGB_get_pixel_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_get_pixel_MESSAGE0 = '返回 第%1列 %2行 RGB颜色';
Blockly.Msg.MPYTHONBOX_RGB_get_pixel_TOOLTIP = '返回第多少列，行位置的RGB颜色';

Blockly.Msg.MPYTHONBOX_RGB_ImageText_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_ImageText_MESSAGE0 = '滚动显示文本%1  速度%2';
Blockly.Msg.MPYTHONBOX_RGB_ImageText_TOOLTIP = '滚动显示文本，亮度为0不亮，9最亮';

Blockly.Msg.MPYTHONBOX_RGB_Image_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_Image_MESSAGE0 = '显示图像%1';
Blockly.Msg.MPYTHONBOX_RGB_Image_TOOLTIP = '显示图像';

Blockly.Msg.MPYTHONBOX_RGB_SetImage_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_SetImage_MESSAGE0 = '创建图像 %1 第一行%2第二行%3第三行%4第四行%5第五行%6';
Blockly.Msg.MPYTHONBOX_RGB_SetImage_TOOLTIP = '创建新图像，每行每位数代表第几位灯，默认红色；亮度为0不亮，9最亮。';

Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_MESSAGE0 = '显示图像/文本 %1';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_TOOLTIP = '显示图像或文本消息。';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGEImport_MESSAGE0 = '显示图像 %1';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGEImport_TOOLTIP = '显示图像。';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGEImport_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_Copy_MESSAGE0 = '复制图像 %1';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_Copy_TOOLTIP = '复制图像。';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_Copy_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_ImageCot_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_ImageCot_MESSAGE0 = '切剪图像%1  列%2  行%3 宽%4 高%5';
Blockly.Msg.MPYTHONBOX_RGB_ImageCot_TOOLTIP = '切剪图像';

Blockly.Msg.MPYTHONBOX_RGB_IMAGE_BUILTINS_MESSAGE0 = '内置图像 %1';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_BUILTINS_TOOLTIP = '选择一个内置的图像。';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_BUILTINS_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_MESSAGE0 = '平移图像 %1 %2 %3 位';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_TOOLTIP = '向特定方向移动图像，并返回移动后的结果。';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_clear_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_clear_MESSAGE0 = '关闭所有 RGB 灯';
Blockly.Msg.MPYTHONBOX_RGB_clear_TOOLTIP = '';

Blockly.Msg.MPYTHONBOX_RGB_pixel_return_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_pixel_return_MESSAGE0 = '返回第 %1列 %2行 颜色';
Blockly.Msg.MPYTHONBOX_RGB_pixel_return_TOOLTIP = '返回第多少列，行的RGB顏色';

Blockly.Msg.MPYTHONBOX_TRIAXIAL_ACCELERATION_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_ACCELERATION_MESSAGE0 = '%1轴加速度';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_ACCELERATION_TOOLTIP = '单位g,范围-2~+2g。';

Blockly.Msg.MPYTHONBOX_TRIAXIAL_AUGULAR_VELOCITY_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_AUGULAR_VELOCITY_MESSAGE0 = '%1轴角速度';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_AUGULAR_VELOCITY_TOOLTIP = '范围±500°/秒';

Blockly.Msg.MPYTHONBOX_EULER_ANGLE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_EULER_ANGLE_MESSAGE0 = '%1欧拉角';
Blockly.Msg.MPYTHONBOX_EULER_ANGLE_TOOLTIP = '返回当前欧拉角(Pitch,Roll,Yaw),单位角度';

Blockly.Msg.MPYTHONBOX_QUATERNION_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_QUATERNION_MESSAGE0 = '%1四元数';
Blockly.Msg.MPYTHONBOX_QUATERNION_TOOLTIP = '返回当前四元数(w,x,y,z)';

Blockly.Msg.MPYTHONBOX_CAMERA_LED_HELPURL = '';
Blockly.Msg.MPYTHONBOX_CAMERA_LED_MESSAGE0 = '摄像灯%1';
Blockly.Msg.MPYTHONBOX_CAMERA_LED_TOOLTIP = 'led灯，分为打开和关闭两种状态';

Blockly.Msg.MPYTHONBOXS_SET_RGB_LIST_COLOR_MESSAGE0 = '设置 %1 RGB 灯颜色为 %2';
Blockly.Msg.MPYTHONBOXS_SET_RGB_LIST_COLOR_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.MPYTHONBOXS_SET_RGB_LIST_NUMBER_MESSAGE0 = '设置 %1 RGB 灯颜色为 R %2 G %3 B %4';
Blockly.Msg.MPYTHONBOXS_SET_RGB_LIST_NUMBER_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.MPYTHONBOXS_OFF_RGB_LIST_MESSAGE0 = '关闭 %1 RGB 灯';
Blockly.Msg.MPYTHONBOXS_OFF_RGB_LIST_TOOLTIP = '';


Blockly.Msg.LIST_FIRST_INDEX_HELPURL = '';
Blockly.Msg.LIST_FIRST_INDEX_MESSAGE0 = '项 %1 在列表 %2 %3 出现的位置';
Blockly.Msg.LIST_FIRST_INDEX_TOOLTIP = '';

/*AI类*/
Blockly.Msg.MPYTHON_AI_LCD_INIT_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.init';
Blockly.Msg.MPYTHON_AI_LCD_INIT_MESSAGE0 = '屏幕 初始化 ';
Blockly.Msg.MPYTHON_AI_LCD_INIT_TOOLTIP = '初始化 屏幕显示';

Blockly.Msg.MPYTHON_AI_SENSOR_RESET_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%8D%95%E7%9B%AE%E6%91%84%E5%83%8F%E5%A4%B4%E9%87%8D%E7%BD%AE%E5%87%BD%E6%95%B0';
Blockly.Msg.MPYTHON_AI_SENSOR_RESET_MESSAGE0 = '摄像头 初始化';
Blockly.Msg.MPYTHON_AI_SENSOR_RESET_TOOLTIP = '初始化单目摄像头';

Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_TOOLTIP = '获取图像';

Blockly.Msg.MPYTHON_AI_LCD_TEXT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%98%BE%E7%A4%BA%E8%8B%B1%E6%96%87';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_MESSAGE0 = '显示文本 x %1 y %2 内容 %3';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_TOOLTIP = '仅支持字母和数字';

Blockly.Msg.MPYTHON_AI_SENSOR_SKIP_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%B7%B3%E5%B8%A7';
Blockly.Msg.MPYTHON_AI_SENSOR_SKIP_MESSAGE0 = '摄像头 跳过帧数%1 毫秒%2内的图像 ';
Blockly.Msg.MPYTHON_AI_SENSOR_SKIP_TOOLTIP = '摄像头跳过指定帧数或者跳过指定时间内的图像';

Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_WIDTH = '分辨率宽度';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_HRIGHT = '分辨率高度';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_FORMAT = '图像帧格式';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_SIZE = '图像帧大小';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%88%86%E8%BE%A8%E7%8E%87%E5%AE%BD%E5%BA%A6';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_MESSAGE0 = '测 摄像头 获取%1';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_TOOLTIP = '(AI)摄像头返回参数(宽高，图像帧的格式，图像帧的大小)';

Blockly.Msg.MPYTHON_AI_SENSOR_SETS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E5%AF%B9%E6%AF%94%E5%BA%A6';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_MESSAGE0 = '摄像头 设置%1 为%2';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_TOOLTIP = '设置摄像头对比度，亮度，饱和度范围为[-2,+2]';

Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_GAIN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%A2%9E%E7%9B%8A';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_GAIN_MESSAGE0 = '摄像头 自动增益%1';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_GAIN_TOOLTIP = '1开启摄像头自动增益 0关闭摄像头自动增益';

Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_WHITEBAL_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%A2%9E%E7%9B%8A';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_WHITEBAL_MESSAGE0 = '摄像头 白平衡%1';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_WHITEBAL_TOOLTIP = '设置摄像自动白平衡模式,默认打开。True为打开, False为关闭自动白平衡。若您想追踪颜色，则需关闭白平衡。';

Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E6%B0%B4%E5%B9%B3%E9%95%9C%E5%83%8F';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_MESSAGE0 = '摄像头 %1 %2';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_TOOLTIP = '1 表示开启水平镜像 0 表示关闭水平镜像';

Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.display';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_MESSAGE0 = '屏幕 显示生效';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_TOOLTIP = '可以在液晶屏上显示';

Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_SIZE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.display';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_SIZE_MESSAGE0 = '图像 显示生效 x%1 y%2 宽%3 高%4';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_SIZE_TOOLTIP = '可以在液晶屏上显示一张图片';

Blockly.Msg.MPYTHON_AI_SENSOR_IMAGES_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_AI_SENSOR_IMAGES_MESSAGE0 = '摄像头 获取图像';
Blockly.Msg.MPYTHON_AI_SENSOR_IMAGES_TOOLTIP = '控制摄像头捕捉图像';

Blockly.Msg.MPYTHON_AI_IMAGE_FACEDETECT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_AI_IMAGE_FACEDETECT_MESSAGE0 = '人脸识别';
Blockly.Msg.MPYTHON_AI_IMAGE_FACEDETECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_REC_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_REC_MESSAGE0 = '矩形%1 x%2 y%3 宽%4 高%5 颜色为 R%6 G%7 B%8';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_REC_TOOLTIP = '在图像上绘制矩形';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_STRING_MESSAGE0 = '线条  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_STRING_TOOLTIP = '在图像上绘制线条';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_STRING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_CLEAR_ALL_MESSAGE0 = '屏幕 显示清空';
Blockly.Msg.MPYTHON_AI_LCD_CLEAR_ALL_TOOLTIP = '将液晶屏清空为黑色或者指定的颜色';
Blockly.Msg.MPYTHON_AI_LCD_CLEAR_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_return_colour_MESSAGE0 = 'LCD 返回 x%1 y%2 颜色';
Blockly.Msg.MPYTHON_AI_LCD_return_colour_TOOLTIP = '返回某个坐标点的颜色';
Blockly.Msg.MPYTHON_AI_LCD_return_colour_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_CIRCLE_MESSAGE0 = '圆形%1 x%2 y%3 半径%4 颜色为 R%5 G%6 B%7';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_CIRCLE_TOOLTIP = '在图像上绘制圆形';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_CIRCLE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_TEXT_MOST_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_MOST_MESSAGE0 = '显示文本 x %1 y %2 内容 %3 颜色为R%4 G%5 B%6 字号%7';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_MOST_TOOLTIP = '仅支持字母和数字';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_TEN_STRING_MESSAGE0 = '十字线  x%1 y%2 颜色为R%3 G%4 B%5 尺寸%6';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_TEN_STRING_TOOLTIP = '在图像上绘制十字线';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_TEN_STRING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_ARROWS_MESSAGE0 = '箭头  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ARROWS_TOOLTIP = '在图像上绘制一个箭头';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ARROWS_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_PIRCTURE_HELPURL = '.https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.display';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_PIRCTURE_MESSAGE0 = '显示图像 路径%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_PIRCTURE_TOOLTIP = '显示图像';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.invert';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_MESSAGE0 = '图像转换为%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_TOOLTIP = '黑白翻转是将二进制图像0（黑色）变为1（白色），1（白色）变为0（黑色），非常快速地翻转二进制图像中的所有像素值。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.linpolar';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_MESSAGE0 = '图像 从笛卡尔坐标到%1 坐标重新投影  反向%2';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_TOOLTIP = '';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_EROSION_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.dilate';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_EROSION_MESSAGE0 = '图像 膨胀 级别%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_EROSION_TOOLTIP = '膨胀就是对图像高亮部分进行“领域扩张”，效果图拥有比原图更大的高亮区域。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MIDDLE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.midpoint';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MIDDLE_MESSAGE0 = '图像 中点滤波 级别%1 滤波%2';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MIDDLE_TOOLTIP = '控制图像混合的最小/最大程度。0只适用于最小滤波，1仅用于最大滤波。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MODE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.modehttps://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.mode';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MODE_MESSAGE0 = '图像 众数滤波 级别%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MODE_TOOLTIP = '在图像上运行众数滤波，用相邻像素的模式替换每个像素。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_INDISTINCT_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.mean';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_INDISTINCT_MESSAGE0 = '图像 模糊滤波 级别%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_INDISTINCT_TOOLTIP = '使用盒式滤波器的标准均值模糊滤波。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_CARTOON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.cartoon';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_CARTOON_MESSAGE0 = '图像 卡通化 级别%1 起始像素差异%2 相邻像素差异%3';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_CARTOON_TOOLTIP = '使图像卡通化';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_3D_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.rotation_corr';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_3D_MESSAGE0 = '图像 3D旋转%1 上下旋转%2 左右旋转%3 度数%4 左右移动%5 上下移动%6 缩放%7';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_3D_TOOLTIP = '通过执行帧缓冲区的3D旋转来纠正图像中的透视问题。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.copy';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_MESSAGE0 = '图像副本保存入SD卡%1 图像名%2 图像显示区域%3  x%4 y%5 宽%6 高%7';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_TOOLTIP = '图像副本保存入SD卡';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_SHOW_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.save';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_SHOW_MESSAGE0 = '创建一个图像对象的副本  复制图像区域  x%1 y%2 宽%3 高%4';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_SHOW_TOOLTIP = '创建一个图像对象的副本';

Blockly.Msg.MPYTHON_AI_LCD_PIXEL_COLOUR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html?highlight=get_pixel#mpython_classroom_kit.image.set_pixel';
Blockly.Msg.MPYTHON_AI_LCD_PIXEL_COLOUR_MESSAGE0 = '屏幕 x%1 y%2  显示颜色 R%3 G%4 B%5';
Blockly.Msg.MPYTHON_AI_LCD_PIXEL_COLOUR_TOOLTIP = '屏幕显示颜色';

Blockly.Msg.MPYTHON_AI_LCD_COLOUR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.clear';
Blockly.Msg.MPYTHON_AI_LCD_COLOUR_MESSAGE0 = '屏幕 初始化 显示颜色 R%1 G%2 B%3';
Blockly.Msg.MPYTHON_AI_LCD_COLOUR_TOOLTIP = '屏幕显示颜色';

Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.camera.set_pixformat';
Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_MESSAGE0 = '摄像头 初始化 像素模式 %1';
Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_TOOLTIP = '用于设置摄像头像素模式,有黑白和rgb彩色';


//Pythons 训练身高体重比例
Blockly.Msg.MPYTHON_DRILL_WEIGHT_MESSAGE0 = '初始化 训练 %1';
Blockly.Msg.MPYTHON_DRILL_WEIGHT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DRILL_WEIGHT_HELPURL = '';

Blockly.Msg.MPYTHON_DRILL_LINEAR_REGRESSION_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_LINEAR_REGRESSION_MESSAGE0 = '实例化 线性回归直线';
Blockly.Msg.MPYTHON_DRILL_LINEAR_REGRESSION_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_TITLE_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_TITLE_MESSAGE0 = '标题%1 字号%2';
Blockly.Msg.MPYTHON_DRILL_TITLE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_LABEL_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_LABEL_MESSAGE0 = '标签%1 标题%2 字号%3';
Blockly.Msg.MPYTHON_DRILL_LABEL_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_DRILL_REALITY_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_DRILL_REALITY_MESSAGE0 = '真实数据 符号标记%1 颜色为r%2 g%3 b%4 标题%5';
Blockly.Msg.MPYTHON_DRILL_DRILL_REALITY_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_PREDICTED_REALITY_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_PREDICTED_REALITY_MESSAGE0 = '预测线性回归直线 符号标记%1 颜色为r%2 g%3 b%4 标题%5';
Blockly.Msg.MPYTHON_DRILL_PREDICTED_REALITY_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_LEGEND_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_LEGEND_MESSAGE0 = '展示图例';
Blockly.Msg.MPYTHON_DRILL_LEGEND_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_SHOW_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_SHOW_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHON_DRILL_SHOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_DRILL_PRINT_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_DRILL_PRINT_MESSAGE0 = '输入测试数值%1';
Blockly.Msg.MPYTHON_DRILL_DRILL_PRINT_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_DRILL_full_line = '实线';
Blockly.Msg.MPYTHON_DRILL_DRILL_dash_line = '破折线';
Blockly.Msg.MPYTHON_DRILL_DRILL_chain_line = '点划线';
Blockly.Msg.MPYTHON_DRILL_DRILL_imaginary_line = '虚线';

Blockly.Msg.MPYTHON_DRILL_DRILL_dot = '点';
Blockly.Msg.MPYTHON_DRILL_DRILL_pixel = '像素';
Blockly.Msg.MPYTHON_DRILL_DRILL_solid_rim = '实心圈';
Blockly.Msg.MPYTHON_DRILL_DRILL_down_triangle = '下三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_up_triangle = '上三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_right_triangle = '右三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_left_triangle = '左三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_down_flower_triangle = '下花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_up_flower_triangle = '上花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_right_flower_triangle = '右花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_left_flower_triangle = '左花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_solid_square = '实心方形';
Blockly.Msg.MPYTHON_DRILL_DRILL_solid_pentagon = '实心五角';
Blockly.Msg.MPYTHON_DRILL_DRILL_star = '星形';
Blockly.Msg.MPYTHON_DRILL_DRILL_vertical_hexagon = '竖六边形';
Blockly.Msg.MPYTHON_DRILL_DRILL_across_hexagon = '横六边形';
Blockly.Msg.MPYTHON_DRILL_DRILL_cross = '十字';
Blockly.Msg.MPYTHON_DRILL_DRILL_X = 'X';
Blockly.Msg.MPYTHON_DRILL_DRILL_rhombus = '菱形';
Blockly.Msg.MPYTHON_DRILL_DRILL_thin_rhombus = '瘦菱形';
Blockly.Msg.MPYTHON_DRILL_DRILL_vertical_line = '垂直线';




//pythons 鸢尾花
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_INITIALIZE_MESSAGE0 = '初始化 鸢尾花数据集';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_INITIALIZE_TOOLTIP = '采用Python的Sklearn机器学习库中自带的数据集——鸢尾花数据集。简单分析数据集之间特征的关系图，根据花瓣长度、花瓣宽度、花萼长度、花萼宽度四个特征进行绘图Iris plants 数据集可以从KEEL dataset数据集网站获取，也可以直接从Sklearn.datasets机器学习包得到。数据集共包含4个特征变量、1个类别变量，共有150个样本。类别变量分别对应鸢尾花的三个亚属，分别是山鸢尾 (Iris-setosa)、变色鸢尾(Iris-versicolor)和维吉尼亚鸢尾(Iris-virginica) 分别用[0,1,2]来做映射';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_MESSAGE0 = '鸢尾花 主成分分析';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA3D_MESSAGE0 = '鸢尾花 因子分析 3D';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA_MESSAGE0 = '鸢尾花 因子分析';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_DISPLAY_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_DISPLAY_MESSAGE0 = '预测图示 鸢尾花类型%1  呈现种类%2 颜色为 r%3 g%4 b%5 标题%6 呈现内容%7';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_DISPLAY_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA_MESSAGE0 = '预测图示 呈现内容  x%1 y%2 呈现种类%3 颜色为 r%4 g%5 b%6 标题%7';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA3D_MESSAGE0 = '3D 预测图示 呈现内容  x朝向%1 y朝向%2 z朝向%3 颜色为 r%4 g%5 b%6 标题%7';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE_MESSAGE0 = '标题%1 字号%2';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL_MESSAGE0 = '标签%1 标题%2 字号%3';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE3D_MESSAGE0 = '3D 标题%1 字号%2';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL3D_MESSAGE0 = '3D 标签%1 标题%2 字号%3';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LEGEND_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LEGEND_MESSAGE0 = '展示图例';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LEGEND_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_SHOW_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_SHOW_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_SHOW_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LOAD_IRIS_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LOAD_IRIS_MESSAGE0 = '花萼和花瓣的x,y坐标';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LOAD_IRIS_TOOLTIP = '共150条记录，分别代表50条山鸢尾 (Iris-setosa)、变色鸢尾(Iris-versicolor)、维吉尼亚鸢尾(Iris-virginica)';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_Iris_setosa = '山鸢尾';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_Iris_versicolor = '变色鸢尾';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_Iris_virginica = '维吉尼亚鸢尾';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_scatter_diagram = '散点图';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_kde_diagram = 'kde图';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_box_diagram = '箱图';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_merge = '合并';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_not_merge = '不合并';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_calyx_length = '花萼长度';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_calyx_width = '花萼宽度';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_petal_length = '花瓣长度';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_petal_width = '花瓣宽度';


//Pythons 数字识别
Blockly.Msg.MPYTHONS_CONVERT_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_CONVERT_PICTURE_MESSAGE0 = '将图片转换为28²二值图%1  待处理的图片存储路径%2 处理后的图片存储路径%3 格式%4';
Blockly.Msg.MPYTHONS_CONVERT_PICTURE_TOOLTIP = DEVICE + '通过串口把WIF传给语音助手';

Blockly.Msg.MPYTHONS_NUMBER_REPERTOIRE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_REPERTOIRE_MESSAGE0 = '查找解析 手写数字数据 存储路径%1';
Blockly.Msg.MPYTHONS_NUMBER_REPERTOIRE_TOOLTIP = '使用手写数字字符库';

Blockly.Msg.MPYTHONS_SHOW_NUMBER_PATH_HELPURL = '';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_PATH_MESSAGE0 = '手写数字图像 存储路径%1';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_PATH_TOOLTIP = '手写数字图像的路径';

Blockly.Msg.MPYTHONS_SHOW_NUMBER_HELPURL = '';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_MESSAGE0 = '显示手写数字图像';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_TOOLTIP = '显示手写数字图像';

Blockly.Msg.MPYTHONS_NUMBER_RECOGNITION_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_RECOGNITION_MESSAGE0 = '识别手写数字图像 存储路径%1';
Blockly.Msg.MPYTHONS_NUMBER_RECOGNITION_TOOLTIP = '识别手写数字图像的路径';

Blockly.Msg.MPYTHONS_NUMBER_PLACEHOLDER_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_PLACEHOLDER_MESSAGE0 = '创建变量%1 初始化 神经网络张量 变量名%2';
Blockly.Msg.MPYTHONS_NUMBER_PLACEHOLDER_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_RESHAPE_MESSAGE0 = '创建变量%1 将输入照片变量 %2 转换为 神经网络输出张量%3';
Blockly.Msg.MPYTHON_DRILL_RESHAPE_TOOLTIP = '';
Blockly.Msg.MPYTHON_DRILL_RESHAPE_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV_WEIGHT_MESSAGE0 = '创建变量%1 共享变量名%2 初始化模式%3';
Blockly.Msg.MPYTHON_NUMBER_CONV_WEIGHT_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV_WEIGHT_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_INITIALIZER_MESSAGE0 = '产生截断正态分布随机数 输出张量%1 标准差%2';
Blockly.Msg.MPYTHON_NUMBER_INITIALIZER_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_INITIALIZER_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONSTANT_MESSAGE0 = '创建常量 数值%1 输出张量%2';
Blockly.Msg.MPYTHON_NUMBER_CONSTANT_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONSTANT_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV2D_MESSAGE0 = '神经网络输出张量%1 共享变量%2 步长%3 填充%4';
Blockly.Msg.MPYTHON_NUMBER_CONV2D_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV2D_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV_BIASES_MESSAGE0 = '张量%1';
Blockly.Msg.MPYTHON_NUMBER_CONV_BIASES_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV_BIASES_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV_CONV2D_MESSAGE0 = '卷积二维层 变量%1 %2';
Blockly.Msg.MPYTHON_NUMBER_CONV_CONV2D_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV_CONV2D_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_RELU_MESSAGE0 = '创建变量%1 Relu正向激励函数 卷积二维层%2';
Blockly.Msg.MPYTHON_NUMBER_RELU_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_RELU_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_MAX_POOL_MESSAGE0 = '池化二维层 变量%1 卷积层%2 池化窗口%3 步长%4 填充%5';
Blockly.Msg.MPYTHON_NUMBER_MAX_POOL_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_MAX_POOL_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_MATMUL_MESSAGE0 = '两个参数的对应元素各自相乘 x%1 y%2';
Blockly.Msg.MPYTHON_NUMBER_MATMUL_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_MATMUL_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_ADD_MESSAGE0 = '全连接层 变量%1 两个参数的元素相加 x%2 y%3';
Blockly.Msg.MPYTHON_NUMBER_ADD_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_ADD_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SOFTMAX_MESSAGE0 = '创建变量%1 预测模型准确度 变量名%2';
Blockly.Msg.MPYTHON_NUMBER_SOFTMAX_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SOFTMAX_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_REDUCE_MEAN_MESSAGE0 = '创建变量%1 损失函数%2';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_MEAN_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_MEAN_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_LOG_MESSAGE0 = '自然对数 %1';
Blockly.Msg.MPYTHON_NUMBER_LOG_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_LOG_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_REDUCE_SUM_MESSAGE0 = '压缩求和%1 维度%2';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_SUM_TOOLTIP = '因为log函数是单调递增的，所以logP(Y|X)也会达到最大值，因此在前面加上负号之后，最大化P(Y|X)就等价于最小化L了。';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_SUM_HELPURL = 'https://www.cnblogs.com/guoyaohua/p/9217206.html';

Blockly.Msg.MPYTHON_NUMBER_TRAIN_MESSAGE0 = '优化学习速率 %1';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_MINIMIZE_MESSAGE0 = '创建变量%1 优化张量%2';
Blockly.Msg.MPYTHON_NUMBER_MINIMIZE_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_MINIMIZE_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_INIT_MESSAGE0 = '初始化模型 完成';
Blockly.Msg.MPYTHON_NUMBER_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_TRAIN_TEST_MESSAGE0 = '选择 手写数字集%1 数量%2';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_TEST_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_TEST_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN_MESSAGE0 = '启动数据流图会话进行计算 会话%1 图片%2 标签%3';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN2_MESSAGE0 = '启动数据流图会话进行计算 会话%1 图片%2 标签%3';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN2_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN2_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN3_MESSAGE0 = '预测模型%1 拟合度%2 会话%3';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN3_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN3_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_EQUAL_MESSAGE0 = '两个张量的每一维是否相等 x%1 y%2';
Blockly.Msg.MPYTHON_NUMBER_EQUAL_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_EQUAL_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_ARGMAX_MESSAGE0 = '张量 %1 按%2比较返回最大值的索引';
Blockly.Msg.MPYTHON_NUMBER_ARGMAX_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_ARGMAX_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CAST_MESSAGE0 = '转为浮点型 %1';
Blockly.Msg.MPYTHON_NUMBER_CAST_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CAST_HELPURL = '';

Blockly.Msg.MPYTHONS_NUMBER_SAVER_SAVE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_SAVE_MESSAGE0 = '手写数字识别模型 变量名%1 存储路径%2';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_SAVE_TOOLTIP = 'MNIST手写数字识别模型保存路径';

Blockly.Msg.MPYTHONS_NUMBER_SAVER_RESTORE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_RESTORE_MESSAGE0 = '加载模型 %1 存储路径%2';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_RESTORE_TOOLTIP = '加载模型';

Blockly.Msg.MPYTHONS_NUMBER_SAME = '包含边界';
Blockly.Msg.MPYTHONS_NUMBER_VALID = '不包含边界';

Blockly.Msg.MPYTHONS_NUMBER_train = '训练';
Blockly.Msg.MPYTHONS_NUMBER_test = '测试';

Blockly.Msg.MPYTHONS_NUMBER_row = '行';
Blockly.Msg.MPYTHONS_NUMBER_rank = '列';

//Pythons新 数字识别
Blockly.Msg.MPYTHONS_NUMBERNEW_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_INITIALIZE_MESSAGE0 = '初始化 张量 载入mnist数据集';
Blockly.Msg.MPYTHONS_NUMBERNEW_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_CONVOLUTIONAL_ONE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONVOLUTIONAL_ONE_MESSAGE0 = '卷积 一 层';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONVOLUTIONAL_ONE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_POOLING_ONE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_POOLING_ONE_MESSAGE0 = '池化 一 层';
Blockly.Msg.MPYTHONS_NUMBERNEW_POOLING_ONE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_CONVOLUTIONAL_TWO_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONVOLUTIONAL_TWO_MESSAGE0 = '卷积 二 层';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONVOLUTIONAL_TWO_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_POOLING_TWO_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_POOLING_TWO_MESSAGE0 = '池化 二 层';
Blockly.Msg.MPYTHONS_NUMBERNEW_POOLING_TWO_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_CONNECT_ONE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONNECT_ONE_MESSAGE0 = '全连接 一 层';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONNECT_ONE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_CONNECT_TWO_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONNECT_TWO_MESSAGE0 = '全连接 二 层';
Blockly.Msg.MPYTHONS_NUMBERNEW_CONNECT_TWO_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_LOSS_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_LOSS_MESSAGE0 = '设置学习速率 %1';
Blockly.Msg.MPYTHONS_NUMBERNEW_LOSS_TOOLTIP = '学习速率为0.001~0.000001之间';

Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_MESSAGE0 = '初始化 tensorflow模型%1 训练模型%2 训练次数%3';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_TOOLTIP = '步数不能小于10';

Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_STATE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_STATE_MESSAGE0 = '判断 模型训练正确率';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_STATE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_TRAIN_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_TRAIN_MESSAGE0 = '模型 训练正确率';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_TRAIN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_NUMBER_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_NUMBER_MESSAGE0 = '手写数字%1 结果';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_NUMBER_TOOLTIP = '仅支持28*28像素的黑白图片';

Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_IMAGE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_IMAGE_MESSAGE0 = '显示图片%1';
Blockly.Msg.MPYTHONS_NUMBERNEW_TENSORFLOW_IMAGE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_CONVERT_PICTURE2_HELPURL = '';
Blockly.Msg.MPYTHONS_CONVERT_PICTURE2_MESSAGE0 = '图片处理%1  选择图片%2 命名%3';
Blockly.Msg.MPYTHONS_CONVERT_PICTURE2_TOOLTIP = '';


//Pythons 人脸识别
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_MESSAGE0 = '调用摄像头 %1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_TOOLTIP = '调用笔记本内置摄像头，所以参数为0，如果有其他的摄像头可以调整参数为1,2';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_OFF_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_OFF_MESSAGE0 = '关闭摄像头';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_OFF_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_WINDOWS_DELETE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_WINDOWS_DELETE_MESSAGE0 = '删除所有窗口';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_WINDOWS_DELETE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_IMPORT_MODEL_SITE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_IMPORT_MODEL_SITE_MESSAGE0 = '加载模型 存储路径%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_IMPORT_MODEL_SITE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_READ_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_READ_IMAGES_MESSAGE0 = '从摄像头读取图片';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_READ_IMAGES_TOOLTIP = 'ret如果有读取图片就True，否则false;第二个参数是frame，是当前截取一帧的图片。';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_GRAY_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_GRAY_IMAGES_MESSAGE0 = '转为灰度图片';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_GRAY_IMAGES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DETECTION_FACES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DETECTION_FACES_MESSAGE0 = '检测人脸 每次图像尺寸减小比例%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DETECTION_FACES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_DISPLAY_RECOGNITION_ORTHOGON_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_DISPLAY_RECOGNITION_ORTHOGON_MESSAGE0 = '人脸区域显示矩形框  颜色为 红%1 绿%2 蓝%3';
Blockly.Msg.MPYTHONS_FACE_DISPLAY_RECOGNITION_ORTHOGON_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PSTORAGE_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PSTORAGE_PICTURE_MESSAGE0 = '保存图像 位置%1 ID%2 编号%3';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PSTORAGE_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PRESERVE_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PRESERVE_PICTURE_MESSAGE0 = '窗口中显示图像 文件名%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PRESERVE_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_ESC_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_ESC_MESSAGE0 = '通过esc键 退出';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_ESC_TOOLTIP = '在窗口置顶时使用才有效果';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_MESSAGE0 = '获得人脸在图像中的坐标值  人脸%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_FACES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_FACES_MESSAGE0 = '是否有读取图片';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_FACES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_CAMERA_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_CAMERA_MESSAGE0 = '是否打开摄像头';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_CAMERA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_ACQUIRE_ID_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_ACQUIRE_ID_PICTURE_MESSAGE0 = '获取照片及id 照片存储路径%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_ACQUIRE_ID_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_INITIALIZE_TRANI_MODEL_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_INITIALIZE_TRANI_MODEL_MESSAGE0 = '初始化训练模型';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_INITIALIZE_TRANI_MODEL_TOOLTIP = '初始化训练模型';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_START_DRILL_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_START_DRILL_MESSAGE0 = '开始训练模型';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_START_DRILL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_STORAGE_DRILL_MODEL_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_STORAGE_DRILL_MODEL_MESSAGE0 = '%1训练模型 存储路径%2';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_STORAGE_DRILL_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DRILL_NUMBERS_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DRILL_NUMBERS_MESSAGE0 = '人脸模型训练 数目';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DRILL_NUMBERS_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FONT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FONT_MESSAGE0 = '窗口显示 识别的名字%1 设置字体为%2 颜色为 红%3 绿%4 蓝%5';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FONT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_PERCENT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_PERCENT_MESSAGE0 = '窗口显示 识别的置信度%1 设置字体为%2 颜色为 红%3 绿%4 蓝%5';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_PERCENT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_FACE_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_FACE_INITIALIZE_MESSAGE0 = '预测人脸 名字%1 置信度%2';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_FACE_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_Write = '写入';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_Read = '读取';

//Pythons 聊天机器人
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_INITIALIZE_MESSAGE0 = '初始化 聊天机器人';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_CHOOSE_HELPURL = '';
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_CHOOSE_MESSAGE0 = '选择 聊天功能';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CHOOSE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_START_HELPURL = '';
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_START_MESSAGE0 = '选择与%1 聊天';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_START_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS_TOOLTIP = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS_MESSAGE0 = '自定义 语料库 %1[%2]';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_MY_FAQs_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_MY_FAQs_MESSAGE0 = '输入对话 %1';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_MY_FAQs_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FAQs_RETURN_MESSAGE0 = '回答';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FAQs_RETURN_TOOLTIP = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FAQs_RETURN_HELPURL = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS2_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS2_MESSAGE0 = '选择跟 %1 聊天';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS2_TOOLTIP = '';
Blockly.Msg.Jenny = '珍妮';
Blockly.Msg.Jack = '杰克';
Blockly.Msg.Tom = '汤姆';

Blockly.Msg.SUCCESSFUL_SHOOTING = '拍摄成功';
Blockly.Msg.SEGMENTATION = '正在分词';
Blockly.Msg.SEGMENTING_AND_REMOVING_STOP_WORDS = '正在分词和去停用词';
Blockly.Msg.STOP_WORDS_AND_WORD_SEGMENTATION_WERE_REMOVED_SUCCESSFULLY = '删除停用词和分词成功！！！';
Blockly.Msg.SCIENCE_AND_TECHNOLOGY = '科技';
Blockly.Msg.PHYSICAL_EDUCATION = '体育';
Blockly.Msg.ECONOMY = '经济';
Blockly.Msg.NUMBER_OF_ARTICLES = '文章篇数：';
Blockly.Msg.START_ARTICLE_CLUSTERING = '开始文章聚类';
Blockly.Msg.NEWS_ARTICLE_CLUSTER_ANALYSIS = '新闻文章聚类分析';
Blockly.Msg.JENNY_S_WORDS = `"你叫什么名字？","我叫珍妮。","今天天气真好","是啊，这种天气出去玩再好不过了。","那你有没有想去玩的地方？","我想去有山有水的地方。你呢？","还有好多作业没做呢","哈哈，这就比较尴尬了","你喜欢什么运动","我喜欢游泳"`;
Blockly.Msg.JACK_S_WORDS = `"你叫什么名字？","我叫杰克。","早上好，你好吗?","我挺好的，你呢","我也还不错","那很好","我喜欢电影","你喜欢哪类电影?","爱丽丝漫游仙境","你是个机器人吗?","是的","你最喜欢什么","你喜欢什么运动","我喜欢踢足球"`;
Blockly.Msg.TOM_S_WORDS = `"你叫什么名字？","我叫汤姆。","今天天气真好","是的，适合户外活动。","那你有没有想去玩的地方？","我想去买衣服","你好","嗨","最近如何","我很好","你在干嘛","看书","你喜欢什么运动","我喜欢打篮球"`;
Blockly.Msg.WHAT_DO_YOU_LIKE_TO_EAT_I_LIKE_SWEETS = '你喜欢吃什么 我喜欢吃甜食';
Blockly.Msg.PROCESSING_IMAGES = '处理图片';
Blockly.Msg.TRAINING_KNN = '训练knn中';
Blockly.Msg.SAVE_MODEL_SUCCESSFULLY = '保存模型成功';
Blockly.Msg.STONE = '石头';
Blockly.Msg.SCISSORS = '剪刀';
Blockly.Msg.CLOTH = '布';

Blockly.Msg.SONGTI = '宋体';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FEED_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FEED_MESSAGE0 = '选择 %1 %2 模式%3 %4 喂养%5';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FEED_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_READ_TRAINING_LIBRARY_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_READ_TRAINING_LIBRARY_MESSAGE0 = '查阅语料库 选择%1';
Blockly.Msg.MPYTHONS_ADIALOGUE_READ_TRAINING_LIBRARY_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_ADD = '添加';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_REWRITE = '重写';

//Pythons 手势识别
Blockly.Msg.MPYTHON_GESTURE_RANDOM_NUMBER_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_NUMBER_MESSAGE0 = '生成随机数 %1';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_NUMBER_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_SHOW_WINDOW_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_SHOW_WINDOW_MESSAGE0 = '显示窗口';
Blockly.Msg.MPYTHON_AGESTURE_SHOW_WINDOW_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_IMSHOW_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_IMSHOW_MESSAGE0 = '处理图像 %1';
Blockly.Msg.MPYTHON_AGESTURE_IMSHOW_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_TRAIN_MODEL_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_TRAIN_MODEL_MESSAGE0 = '选择训练库 knn模型';
Blockly.Msg.MPYTHON_AGESTURE_TRAIN_MODEL_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_LOAD_MODEL_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_LOAD_MODEL_MESSAGE0 = '载入knn模型 存储路径%1';
Blockly.Msg.MPYTHON_AGESTURE_LOAD_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHON_AGESTURE_OPEN_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_OPEN_IMAGES_MESSAGE0 = '%1打开图片 存储路径%2 图片名%3';
Blockly.Msg.MPYTHON_AGESTURE_OPEN_IMAGES_TOOLTIP = '';

Blockly.Msg.MPYTHON_AGESTURE_ARRAY_MESSAGE0 = '选择%1 构建特征数据%2';
Blockly.Msg.MPYTHON_AGESTURE_ARRAY_TOOLTIP = '';
Blockly.Msg.MPYTHON_AGESTURE_ARRAY_HELPURL = '';

Blockly.Msg.MPYTHON_GESTURE_RANDOM_RANK_MESSAGE0 = '打乱排序%1 ';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_RANK_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_RANK_HELPURL = '';

Blockly.Msg.MPYTHON_GESTURE_READ_LEND_MESSAGE0 = ' %1 图片特征';
Blockly.Msg.MPYTHON_GESTURE_READ_LEND_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_READ_LEND_HELPURL = '';

Blockly.Msg.MPYTHON_GESTURE_START_SRAIN_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_START_SRAIN_MESSAGE0 = '开始训练 手势识别 期望%1 目标%2';
Blockly.Msg.MPYTHON_GESTURE_START_SRAIN_TOOLTIP = "";

Blockly.Msg.MPYTHON_GESTURE_SCORE_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_SCORE_MESSAGE0 = '进行评分 期望%1 目标%2';
Blockly.Msg.MPYTHON_GESTURE_SCORE_TOOLTIP = "";

Blockly.Msg.MPYTHON_GESTURE_DIMENSIONALITY_REDUCTION_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_DIMENSIONALITY_REDUCTION_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_DIMENSIONALITY_REDUCTION_MESSAGE0 = '%1 数组降维 图片总数%2';

Blockly.Msg.MPYTHON_GESTURE_FORECAST_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_FORECAST_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_FORECAST_MESSAGE0 = '预测结果%1';

Blockly.Msg.MPYTHON_AGESTURE_SAVE_MODEL_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_SAVE_MODEL_MESSAGE0 = '保存模型 存储路径%1';
Blockly.Msg.MPYTHON_AGESTURE_SAVE_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHON_AGESTURE_FORECAST_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_FORECAST_PICTURE_MESSAGE0 = '%1图片 预测图片 ';
Blockly.Msg.MPYTHON_AGESTURE_FORECAST_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHON_GESTURE_PICTURE_DIMENSIONALITY_REDUCTION_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_PICTURE_DIMENSIONALITY_REDUCTION_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_PICTURE_DIMENSIONALITY_REDUCTION_MESSAGE0 = '%1 彩色图像降维';

//Pythons新 手势识别
Blockly.Msg.MPYTHON_AGESTURENEW_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_INITIALIZE_MESSAGE0 = '载入KNN模型';
Blockly.Msg.MPYTHON_AGESTURENEW_INITIALIZE_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_SHOOT_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_SHOOT_MESSAGE0 = '拍摄 进行手势检测';
Blockly.Msg.MPYTHON_AGESTURENEW_SHOOT_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_SHOOT_GRAY_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_SHOOT_GRAY_MESSAGE0 = '拍摄 手势训练集';
Blockly.Msg.MPYTHON_AGESTURENEW_SHOOT_GRAY_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_GRAY_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_GRAY_MESSAGE0 = '图像处理';
Blockly.Msg.MPYTHON_AGESTURENEW_GRAY_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_TRAIN_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_TRAIN_MESSAGE0 = '开始分类训练';
Blockly.Msg.MPYTHON_AGESTURENEW_TRAIN_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_START_FORECAST_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_START_FORECAST_MESSAGE0 = '开始识别';
Blockly.Msg.MPYTHON_AGESTURENEW_START_FORECAST_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_FORECAST_RESULT_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_FORECAST_RESULT_MESSAGE0 = '识别结果';
Blockly.Msg.MPYTHON_AGESTURENEW_FORECAST_RESULT_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURENEW_SHOW_WINDOW_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURENEW_SHOW_WINDOW_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHON_AGESTURENEW_SHOW_WINDOW_TOOLTIP = "";


//Pythons 情绪识别
Blockly.Msg.MPYTHONS_FACEAI_READ_PICTURE_PATH_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_READ_PICTURE_PATH_MESSAGE0 = '选择人脸库 图片存储路径%1';
Blockly.Msg.MPYTHONS_FACEAI_READ_PICTURE_PATH_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_RECOGNITION_IMPORT_MODEL_SITE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_RECOGNITION_IMPORT_MODEL_SITE_MESSAGE0 = '加载模型 存储路径%1';
Blockly.Msg.MPYTHONS_FACEAI_RECOGNITION_IMPORT_MODEL_SITE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_DETECTION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_DETECTION_RETURN_MESSAGE0 = '第%1位人脸性别结果 置信度';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_DETECTION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_DETECTION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_DETECTION_RETURN_MESSAGE0 = '第%1位人脸情绪结果 置信度';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_DETECTION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RESULT_MESSAGE0 = '第%1位人脸性别 结果';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RESULT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RESULT_MESSAGE0 = '第%1位人脸情绪 结果';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RESULT_TOOLTIP = '';

Blockly.Msg.MPYTHON_FACEAI_CHOOSE_FACE_POOL_HELPURL = '';
Blockly.Msg.MPYTHON_FACEAI_CHOOSE_FACE_POOL_MESSAGE0 = '选择人脸库 %1';
Blockly.Msg.MPYTHON_FACEAI_CHOOSE_FACE_POOL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RETURN_MESSAGE0 = '第%1位情绪为 %2';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RETURN_MESSAGE0 = '第%1位性别为 %2';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_NUMBER_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_NUMBER_RETURN_MESSAGE0 = '人脸数量';
Blockly.Msg.MPYTHONS_FACEAI_FACE_NUMBER_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EXPRESSION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EXPRESSION_RETURN_MESSAGE0 = '表情数量';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EXPRESSION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RETURN_MESSAGE0 = '人脸识别初始化，摄像头%1';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RUN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RUN_MESSAGE0 = '识别实时运行';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RUN_TOOLTIP = 'Esc退出拍摄';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_break_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_break_MESSAGE0 = 'Esc键 退出运行';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_break_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_database_clear_MESSAGE0 = '清除人脸数据';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_database_clear_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_database_clear_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_NAME_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_NAME_MESSAGE0 = '第%1位 名字';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_NAME_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_NAME_0_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_NAME_0_MESSAGE0 = '识别到人脸名字';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_NAME_0_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_release_MESSAGE0 = '摄像头释放资源'
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_release_HELPURL = ''
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_release_TOOLTIP = ''

Blockly.Msg.MPYTHONS_FACEAI_FACE_IMG_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_IMG_RESULT_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHONS_FACEAI_FACE_IMG_RESULT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_CHOOSE_FACE_DATABASE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_CHOOSE_FACE_DATABASE_MESSAGE0 = '选择人脸库%1';
Blockly.Msg.MPYTHONS_FACEAI_CHOOSE_FACE_DATABASE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_SHOOT_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_SHOOT_RESULT_MESSAGE0 = '拍摄并记录人脸%1的信息，摄像头%2';
Blockly.Msg.MPYTHONS_FACEAI_FACE_SHOOT_RESULT_TOOLTIP = '按s建拍摄，Esc退出拍摄';

Blockly.Msg.MPYTHONS_FACEAI_ON = '打开';
Blockly.Msg.MPYTHONS_FACEAI_OFF = '关闭';

Blockly.Msg.MPYTHONS_FACEAI_MAN = '男';
Blockly.Msg.MPYTHONS_FACEAI_WOMAN = '女';

Blockly.Msg.MPYTHONS_FACEAI_ANGRY = '生气'
Blockly.Msg.MPYTHONS_FACEAI_AVERSION = '厌恶'
Blockly.Msg.MPYTHONS_FACEAI_FEAR = '恐惧'
Blockly.Msg.MPYTHONS_FACEAI_HAPPY = '开心'
Blockly.Msg.MPYTHONS_FACEAI_SAD = '难过'
Blockly.Msg.MPYTHONS_FACEAI_SURPRISE = '惊喜'
Blockly.Msg.MPYTHONS_FACEAI_CALMNESS = '平静';

//20211112
Blockly.Msg.MPYTHONS_FACEAI_FACE_emotion_init_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_emotion_init_MESSAGE0 = '情绪识别初始化，摄像头%1';
Blockly.Msg.MPYTHONS_FACEAI_FACE_emotion_init_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_emotion_run_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_emotion_run_MESSAGE0 = '实时情绪识别开始';
Blockly.Msg.MPYTHONS_FACEAI_FACE_emotion_run_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_emotion_return_0_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_emotion_return_0_MESSAGE0 = '情绪识别 置信度';
Blockly.Msg.MPYTHONS_FACEAI_emotion_return_0_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_emotion_return_1_HELPURL = "";
Blockly.Msg.MPYTHONS_FACEAI_emotion_return_1_MESSAGE0 = '情绪识别 情绪';
Blockly.Msg.MPYTHONS_FACEAI_emotion_return_1_TOOLTIP = "{0: '生气', 1: '厌恶', 2: '恐惧', 3: '开心', 4: '难过', 5: '惊喜', 6: '平静'}";


Blockly.Msg.MPYTHONS_FACEAI_FACE_gender_init_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_gender_init_MESSAGE0 = '性别识别初始化，摄像头%1';
Blockly.Msg.MPYTHONS_FACEAI_FACE_gender_init_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_gender_run_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_gender_run_MESSAGE0 = '实时性别识别开始';
Blockly.Msg.MPYTHONS_FACEAI_FACE_gender_run_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_gender_return_0_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_gender_return_0_MESSAGE0 = '性别识别 置信度';
Blockly.Msg.MPYTHONS_FACEAI_gender_return_0_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_gender_return_1_HELPURL = "";
Blockly.Msg.MPYTHONS_FACEAI_gender_return_1_MESSAGE0 = '性别识别 性别';
Blockly.Msg.MPYTHONS_FACEAI_gender_return_1_TOOLTIP = "{0: '女', 1: '男'}";

//20211112 end

//文章聚类
Blockly.Msg.MPYTHONS_WORD_CLOUD_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_INITIALIZE_MESSAGE0 = '初始化 文章聚类';
Blockly.Msg.MPYTHONS_WORD_CLOUD_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_TITLE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_TITLE_MESSAGE0 = '标题 第%1文章';
Blockly.Msg.MPYTHONS_WORD_CLOUD_TITLE_TOOLTIP = '文章数量不超过100';

Blockly.Msg.MPYTHONS_WORD_CLOUD_CONTENT_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_CONTENT_MESSAGE0 = '内容 第%1文章';
Blockly.Msg.MPYTHONS_WORD_CLOUD_CONTENT_TOOLTIP = '文章数量不超过100';

Blockly.Msg.MPYTHONS_WORD_CLOUD_JIEBA_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_JIEBA_MESSAGE0 = '文章内容转为列表 第%1文章';
Blockly.Msg.MPYTHONS_WORD_CLOUD_JIEBA_TOOLTIP = '文章数量不超过100';

Blockly.Msg.MPYTHONS_WORD_CLOUD_STOPWORD_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_STOPWORD_MESSAGE0 = '读取停词表 排序前%1';
Blockly.Msg.MPYTHONS_WORD_CLOUD_STOPWORD_TOOLTIP = '返回的是100篇文章里的符号';

Blockly.Msg.MPYTHONS_WORD_CLOUD_DELETE_AFTER_NEWS_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DELETE_AFTER_NEWS_MESSAGE0 = '删除后的新闻';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DELETE_AFTER_NEWS_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_THESAURUS_CONSTRUCTION_DATA_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_THESAURUS_CONSTRUCTION_DATA_MESSAGE0 = '构造词云所用的数据';
Blockly.Msg.MPYTHONS_WORD_CLOUD_THESAURUS_CONSTRUCTION_DATA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_COUNT_RANK_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_COUNT_RANK_MESSAGE0 = '读取词汇表 排序前%1';
Blockly.Msg.MPYTHONS_WORD_CLOUD_COUNT_RANK_TOOLTIP = '返回的是100篇文章里的文本';

Blockly.Msg.MPYTHONS_WORD_CLOUD_SAVE_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_SAVE_PICTURE_MESSAGE0 = '文章聚类训练结果 保存为图片';
Blockly.Msg.MPYTHONS_WORD_CLOUD_SAVE_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_DISPLAY_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DISPLAY_PICTURE_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DISPLAY_PICTURE_TOOLTIP = '';

//文章分类
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_TEXT_HELPURL = '';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_TEXT_MESSAGE0 = '文章放置 %1';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_TEXT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_LOAD_HELPURL = '';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_LOAD_MESSAGE0 = '进行分词处理';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_LOAD_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_EXTRACT_HELPURL = '';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_EXTRACT_MESSAGE0 = '提取文章特征';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_EXTRACT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_REDUCTION_HELPURL = '';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_REDUCTION_MESSAGE0 = '设置聚类 中心点数 k值%1';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_REDUCTION_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_DISPLAY_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_DISPLAY_IMAGES_MESSAGE0 = '显示聚类 图片';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_DISPLAY_IMAGES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_DISPLAY_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_DISPLAY_RESULT_MESSAGE0 = '显示文章 分类结果';
Blockly.Msg.MPYTHONS_ARTICLE_KMEANS_DISPLAY_RESULT_TOOLTIP = '';

//掌控板直连
Blockly.Msg.PYTHON_CONN_CONTROLLER_MESSAGE0 = '建立连接';
Blockly.Msg.PYTHON_CONN_CONTROLLER_TOOLTIP = '只有先建立连接，才可以使用其它积木';
Blockly.Msg.PYTHON_CONN_CONTROLLER_HELPURL = '';

Blockly.Msg.PYTHON_CONN_DISCONNECT_MESSAGE0 = '断开连接';
Blockly.Msg.PYTHON_CONN_DISCONNECT_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_DISCONNECT_HELPURL = '';

Blockly.Msg.PYTHON_CONN_SET_RGB_LIST_COLOR_MESSAGE0 = '设置 %1 RGB 灯颜色为 %2';
Blockly.Msg.PYTHON_CONN_SET_RGB_LIST_COLOR_TOOLTIP = '';

Blockly.Msg.PYTHON_CONN_SET_RGB_LIST_NUMBER_MESSAGE0 = '设置 %1 RGB 灯颜色为 R %2 G %3 B %4';
Blockly.Msg.PYTHON_CONN_SET_RGB_LIST_NUMBER_TOOLTIP = '参数r、g、b分别为红色、绿色、蓝色分量，取值范围为0~255';

Blockly.Msg.PYTHON_CONN_OFF_RGB_LIST_MESSAGE0 = '关闭 %1 RGB 灯';
Blockly.Msg.PYTHON_CONN_OFF_RGB_LIST_TOOLTIP = '';

Blockly.Msg.PYTHON_CONN_LIGHT_MESSAGE0 = '光线值';
Blockly.Msg.PYTHON_CONN_LIGHT_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_LIGHT_HELPURL = '';

Blockly.Msg.PYTHON_CONN_SOUND_MESSAGE0 = '声音值';
Blockly.Msg.PYTHON_CONN_SOUND_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_SOUND_HELPURL = '';

Blockly.Msg.PYTHON_CONN_ACCELEROMETER_GET_MESSAGE0 = '%1轴加速度';
Blockly.Msg.PYTHON_CONN_ACCELEROMETER_GET_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_ACCELEROMETER_GET_HELPURL = '';

Blockly.Msg.PYTHON_CONN_PLAY_TONE_MESSAGE0 = '播放音乐 频率%1';
Blockly.Msg.PYTHON_CONN_PLAY_TONE_TOOLTIP = '一般频率取值范围为20~20000赫兹';
Blockly.Msg.PYTHON_CONN_PLAY_TONE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_TONE_TEMPO_MESSAGE0 = '播放音符 %1';
Blockly.Msg.PYTHON_CONN_TONE_TEMPO_HELPURL = '';
Blockly.Msg.PYTHON_CONN_TONE_TEMPO_TOOLTIP = '';

Blockly.Msg.PYTHON_CONN_STOP_MUSIC_MESSAGE0 = '停止播放音乐';
Blockly.Msg.PYTHON_CONN_STOP_MUSIC_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_STOP_MUSIC_HELPURL = '';

Blockly.Msg.PYTHON_CONN_GET_BUTTON_AB_MESSAGE0 = '按键%1 被按下';
Blockly.Msg.PYTHON_CONN_GET_BUTTON_AB_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_GET_BUTTON_AB_HELPURL = '';

Blockly.Msg.PYTHON_CONN_GET_BUTTON_PYTHON_MESSAGE0 = '按键%1 被触摸';
Blockly.Msg.PYTHON_CONN_GET_BUTTON_PYTHON_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_GET_BUTTON_PYTHON_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_CLEAR_MESSAGE0 = 'OLED 显示清空';
Blockly.Msg.PYTHON_CONN_OLED_CLEAR_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_CLEAR_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DISPLAY_LINE_MESSAGE0 = 'OLED 第%1行 显示%2';
Blockly.Msg.PYTHON_CONN_OLED_DISPLAY_LINE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DISPLAY_LINE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_CLEAR_LINE_MESSAGE0 = 'OLED 清除第%1行';
Blockly.Msg.PYTHON_CONN_OLED_CLEAR_LINE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_CLEAR_LINE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DISPLAY_DISPCHAR_MESSAGE0 = 'OLED  x %1 y %2 显示 %3';
Blockly.Msg.PYTHON_CONN_OLED_DISPLAY_DISPCHAR_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.PYTHON_CONN_OLED_DISPLAY_DISPCHAR_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DRAW_POINT_MESSAGE0 = '%3点 x%1 y%2';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_POINT_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_POINT_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DRAW_LINE_MESSAGE0 = '%5线 x1%1 y1%2 x2%3 y2%4';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_LINE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_LINE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DRAW_VHLINE_MESSAGE0 = '%5 %4线 x%1 y%2 长度%3';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_VHLINE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_VHLINE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DRAW_RECTANGLE_MESSAGE0 = '%6 %5矩形 x%1 y%2 宽%3 高%4';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_RECTANGLE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_RECTANGLE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DRAW_CIRCLE_MESSAGE0 = '%5 %4圆 x%1 y%2 半径%3';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_CIRCLE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_CIRCLE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_OLED_DRAW_TRIANGLE_MESSAGE0 = '%8 %7三角%9 x1%1 y1%2 x2%3 y2%4 x3%5 y3%6';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_TRIANGLE_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_OLED_DRAW_TRIANGLE_HELPURL = '';

Blockly.Msg.PYTHON_CONN_MOTOR_POWER_HELPURL = '';
Blockly.Msg.PYTHON_CONN_MOTOR_POWER_TOOLTIP = 'power参数为马达功率，取值范围为-100~100，大于0正转，小于0反转，0停止';
Blockly.Msg.PYTHON_CONN_MOTOR_POWER_MESSAGE0 = '打开直流电机%1 %2 速度%3';

Blockly.Msg.PYTHON_CONN_MOTOR_STOP_HELPURL = '';
Blockly.Msg.PYTHON_CONN_MOTOR_STOP_TOOLTIP = '';
Blockly.Msg.PYTHON_CONN_MOTOR_STOP_MESSAGE0 = '停止直流电机%1';

//Traffic_Sign_Classifier
Blockly.Msg.PYTHON_TRAFFICE_MOBILENET_MESSAGE0 = '分类训练%6 分类数 %1 训练轮数 %2 每轮训练图片数%3 模型保存路径 %4 模型保存名称 %5';
Blockly.Msg.PYTHON_TRAFFICE_MOBILENET_TOOLTIP = 
'分类数：模型的分类数\n'+
'训练步长：训练的轮数\n'+
'每轮训练的图片数：不能大于自己数据集中所有图片的数量总和\n'+
'模型保存路径：例如保存到桌面：C:\\Users\\你的用户名\\Desktop\n';
Blockly.Msg.PYTHON_TRAFFICE_MOBILENET_HELPURL = '';


Blockly.Msg.PYTHON_TRAFFICE_KERAS_LOAD_MESSAGE0 = '预加载 keras模型';
Blockly.Msg.PYTHON_TRAFFICE_KERAS_LOAD_TOOLTIP = '';
Blockly.Msg.PYTHON_TRAFFICE_KERAS_LOAD_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_MOBILENET_MODEL_MESSAGE0 = '初始化 MobileNet网络模型';
Blockly.Msg.PYTHON_TRAFFICE_MOBILENET_MODEL_TOOLTIP = '卷积神经网络，用于移动端设备';
Blockly.Msg.PYTHON_TRAFFICE_MOBILENET_MODEL_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_CONVOLUTION_ONE_MESSAGE0 = '卷积一层';
Blockly.Msg.PYTHON_TRAFFICE_CONVOLUTION_ONE_TOOLTIP = '我们增加了密集的层，使模型可以学习更复杂的功能，并分类为更好的结果';
Blockly.Msg.PYTHON_TRAFFICE_CONVOLUTION_ONE_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_POOLING_ONE_MESSAGE0 = '池化一层';
Blockly.Msg.PYTHON_TRAFFICE_POOLING_ONE_TOOLTIP = '';
Blockly.Msg.PYTHON_TRAFFICE_POOLING_ONE_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_PREDS_MESSAGE0 = '激活分类器 分类数%1';
Blockly.Msg.PYTHON_TRAFFICE_PREDS_TOOLTIP = '可分类出3个，5个，高中7个';
Blockly.Msg.PYTHON_TRAFFICE_PREDS_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_MODEL_MESSAGE0 = '指定模型的输入和输出';
Blockly.Msg.PYTHON_TRAFFICE_MODEL_TOOLTIP = '';
Blockly.Msg.PYTHON_TRAFFICE_MODEL_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_VALUE_PREDS_MESSAGE0 = '训练参数设定 分类数%1';
Blockly.Msg.PYTHON_TRAFFICE_VALUE_PREDS_TOOLTIP = 'data 放置图片文件夹 ，每个目录下对应一个类别';
Blockly.Msg.PYTHON_TRAFFICE_VALUE_PREDS_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_MODEL_OPTIMIZER_MESSAGE0 = '模型优化器';
Blockly.Msg.PYTHON_TRAFFICE_MODEL_OPTIMIZER_TOOLTIP = '损失函数将分类交叉熵，评价度量将准确性';
Blockly.Msg.PYTHON_TRAFFICE_MODEL_OPTIMIZER_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_STEP_SIZE_TRAIN_MESSAGE0 = '开始训练 epochs训练步数%1';
Blockly.Msg.PYTHON_TRAFFICE_STEP_SIZE_TRAIN_TOOLTIP = '训练步数可在1~10000区间，训练步数越大，训练时间越长。';
Blockly.Msg.PYTHON_TRAFFICE_STEP_SIZE_TRAIN_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_MODEL_H5_MESSAGE0 = '保存 h5模型 traffic';
Blockly.Msg.PYTHON_TRAFFICE_MODEL_H5_TOOLTIP = '';
Blockly.Msg.PYTHON_TRAFFICE_MODEL_H5_HELPURL = '';

Blockly.Msg.PYTHON_TRAFFICE_H5_CONVERSION_KMODE_MESSAGE0 = 'h5模型 转换为kmode模型 traffic';
Blockly.Msg.PYTHON_TRAFFICE_H5_CONVERSION_KMODE_TOOLTIP = '';
Blockly.Msg.PYTHON_TRAFFICE_H5_CONVERSION_KMODE_HELPURL = '';

//python_mqtt
Blockly.Msg.PYTHON_MQTT_GET_HOST_IP_MESSAGE0 = '返回本机IP';
Blockly.Msg.PYTHON_MQTT_GET_HOST_IP_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_GET_HOST_IP_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_TOPIC_MESSAGE0 = 'MQTT主题列表 %1';
Blockly.Msg.PYTHON_MQTT_TOPIC_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_TOPIC_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_TOPIC_RETURN_MESSAGE0 = '返回MQTT主题';
Blockly.Msg.PYTHON_MQTT_TOPIC_RETURN_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_TOPIC_RETURN_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_SERVER_MESSAGE0 = '启动 MQTT服务器%3 本机IP%1 MQTT主题白名单%2';
Blockly.Msg.PYTHON_MQTT_SERVER_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_SERVER_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_SENDING_SIDE = '发送端';
Blockly.Msg.PYTHON_MQTT_RECEIVER = '接收端';
Blockly.Msg.PYTHON_MQTT_RECEIVER = '接收端';

Blockly.Msg.PYTHON_MQTT_CLIENT_MESSAGE0 = '%3连接MQTT代理 服务器地址%1 端口%2';
Blockly.Msg.PYTHON_MQTT_CLIENT_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_CLIENT_HELPURL = '';
Blockly.Msg.PYTHON_MQTT_TOPIC1 = '主题1';
Blockly.Msg.PYTHON_MQTT_TOPIC2 = '主题2';
Blockly.Msg.PYTHON_MQTT_TOPIC3 = '主题3';
Blockly.Msg.PYTHON_MQTT_TOPIC4 = '主题4';
Blockly.Msg.PYTHON_MQTT_TOPIC5 = '主题5';
Blockly.Msg.PYTHON_MQTT_TOPIC6 = '主题6';
Blockly.Msg.PYTHON_MQTT_TOPIC7 = '主题7';
Blockly.Msg.PYTHON_MQTT_TOPIC8 = '主题8';
Blockly.Msg.PYTHON_MQTT_TOPIC9 = '主题9';
Blockly.Msg.PYTHON_MQTT_TOPIC10 = '主题10';
Blockly.Msg.PYTHON_MQTT_TOPIC11 = '主题11';
Blockly.Msg.PYTHON_MQTT_TOPIC12 = '主题12';

Blockly.Msg.PYTHON_MQTT_PUBLISH_MESSAGE0 = '向MQTT代理发布消息%5 MQTT代理地址%1 端口号%2 MQTT主题%3 消息%4';
Blockly.Msg.PYTHON_MQTT_PUBLISH_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_PUBLISH_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_SUB_MESSAGE0 = '订阅MQTT主题消息%1  主题 %2 %3 MQTT代理地址 %4 端口号 %5 订阅主题%6';
Blockly.Msg.PYTHON_MQTT_SUB_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_SUB_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_SUB_TOPIC_MESSAGE0 = '返回MQTT订阅主题消息 %1 %2';
Blockly.Msg.PYTHON_MQTT_SUB_TOPIC_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_SUB_TOPIC_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_LOOP_START_MESSAGE0 = 'mqtt客户端 保持连接';
Blockly.Msg.PYTHON_MQTT_LOOP_START_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_LOOP_START_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_SUBSCRIBE_MESSAGE0 = '订阅消息 mqtt主题%1';
Blockly.Msg.PYTHON_MQTT_SUBSCRIBE_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_SUBSCRIBE_HELPURL = '';

Blockly.Msg.PYTHON_MQTT_LOOP_FOREVER_MESSAGE0 = '保持客户端 接收消息';
Blockly.Msg.PYTHON_MQTT_LOOP_FOREVER_TOOLTIP = '';
Blockly.Msg.PYTHON_MQTT_LOOP_FOREVER_HELPURL = '';

Blockly.Msg.PYTHON_HTTP_SERVER_MESSAGE0 = '启动HTTP服务器%3 端口号%1 HTTP服务器共享目录%2';
Blockly.Msg.PYTHON_HTTP_SERVER_TOOLTIP = '';
Blockly.Msg.PYTHON_HTTP_SERVER_HELPURL = '';

//
Blockly.Msg.FIRST = '第一次';
Blockly.Msg.LAST = '最后一次';

Blockly.Msg.MPYTHON_USOCKET_BLOCK = '阻塞';
Blockly.Msg.MPYTHON_USOCKET_UNBLOCK = '非阻塞';

Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_MESSAGE0 = '设置socket %1 地址 %2 类型 %3';
Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_TOOLTIP = '设置给定套接字选项的值。所需的符号常量在套接字模块中定义（SO_ *等）。该值可以是整数或表示缓冲区的类字节对象。';

Blockly.Msg.MPYTHON_USOCKET_READLINE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.accept';
Blockly.Msg.MPYTHON_USOCKET_READLINE_MESSAGE0 = 'socket %1 接收一行数据，遇换行符结束并返回接收数据的对象';
Blockly.Msg.MPYTHON_USOCKET_READLINE_TOOLTIP = ' 接收一行数据，遇换行符结束，并返回接收数据的对象';

Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.setblocking';
Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_MESSAGE0 = '设 socket %1 为 %2 模式';
Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_READ_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.read';
Blockly.Msg.MPYTHON_USOCKET_READ_MESSAGE0 = '从socket %1 读取 %2 字节并返回字节对象';
Blockly.Msg.MPYTHON_USOCKET_READ_TOOLTIP = '若未给定读取数量 ，则按照类似 socket.readall() 的模式运行';

Blockly.Msg.MPYTHON_ESC_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.setblocking';
Blockly.Msg.MPYTHON_ESC_MESSAGE0 = '设 socket %1 为 %2 模式';
Blockly.Msg.MPYTHON_ESC_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.settimeout';
Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_MESSAGE0 = 'socket %1 设超时时间 %2 秒';
Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_SENDALL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.send';
Blockly.Msg.MPYTHON_USOCKET_SENDALL_MESSAGE0 = 'socket %1 连续发送 %2 并返回发送的字节数';
Blockly.Msg.MPYTHON_USOCKET_SENDALL_TOOLTIP = '将所有数据发送到套接字。套接字必须连接到远程套接字。与 send() 此不同，此方法将尝试通过连续发送数据块来发送所有数据。';

Blockly.Msg.MPYTHON_USOCKET_SENDS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.send';
Blockly.Msg.MPYTHON_USOCKET_SENDS_MESSAGE0 = 'socket %1 发送 %2 并返回发送的字节数';
Blockly.Msg.MPYTHON_USOCKET_SENDS_TOOLTIP = '将数据发送到套接字。套接字必须连接到远程套接字。返回发送的字节数，可能小于数据长度 ("short write")。';

Blockly.Msg.MPYTHON_USOCKET_SEND_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.send';
Blockly.Msg.MPYTHON_USOCKET_SEND_MESSAGE0 = 'socket %1 发送 %2 并返回发送的字节数';
Blockly.Msg.MPYTHON_USOCKET_SEND_TOOLTIP = 'Send data to the socket. The socket must be connected to a remote socket. Returns number of bytes sent, which may be smaller than the length of data (“short write”).';

Blockly.Msg.MPYTHON_USOCKET_SENDTO_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.sendto';
Blockly.Msg.MPYTHON_USOCKET_SENDTO_MESSAGE0 = 'socket %1 发送 %2 到地址 %3';
Blockly.Msg.MPYTHON_USOCKET_SENDTO_TOOLTIP = 'Send data to the socket. The socket should not be connected to a remote socket, since the destination socket is specified by address.';

Blockly.Msg.MPYTHON_USOCKET_RECV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.recv';
Blockly.Msg.MPYTHON_USOCKET_RECV_MESSAGE0 = 'socket %1 接收并返回接收到的数据对象 最大数据量为 %2';
Blockly.Msg.MPYTHON_USOCKET_RECV_TOOLTIP = '';

Blockly.Msg.MPYTHON_TEXT_ESC_HELPURL = '';
Blockly.Msg.MPYTHON_TEXT_ESC_MESSAGE0 = '文本转义字符 %1';
Blockly.Msg.MPYTHON_TEXT_ESC_TOOLTIP = '文本转义字符';

Blockly.Msg.MPYTHON_USOCKET_RECVFROM_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.recvfrom';
Blockly.Msg.MPYTHON_USOCKET_RECVFROM_MESSAGE0 = 'socket %1 接收并返回接收到的数据元组 最大数据量为 %2';
Blockly.Msg.MPYTHON_USOCKET_RECVFROM_TOOLTIP = '元组格式 (bytes, address)';

Blockly.Msg.MPYTHON_USOCKET_CONNECT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.connect';
Blockly.Msg.MPYTHON_USOCKET_CONNECT_MESSAGE0 = 'socket %1 连接 host %2 端口 %3';
Blockly.Msg.MPYTHON_USOCKET_CONNECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.getaddrinfo';
Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_MESSAGE0 = '解析 host %1 端口 %2 并返回 ip';
Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_TOOLTIP = '需联网';

Blockly.Msg.MPYTHON_USOCKET_ACCEPT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.accept';
Blockly.Msg.MPYTHON_USOCKET_ACCEPT_MESSAGE0 = 'socket %1 接收连接请求并返回socket元组';
Blockly.Msg.MPYTHON_USOCKET_ACCEPT_TOOLTIP = '接收连接请求。socket需要指定地址并监听连接。返回值是 (conn, address)。\nconn：新的socket对象，可以用来收发消息\naddress：连接到服务器的客户端地址';

Blockly.Msg.MPYTHON_USOCKET_LISTEN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.listen';
Blockly.Msg.MPYTHON_USOCKET_LISTEN_MESSAGE0 = '监听socket %1 backlog个数 %2';
Blockly.Msg.MPYTHON_USOCKET_LISTEN_TOOLTIP = 'backlog ：接受套接字的最大个数，至少为0，如果没有指定，则默认一个合理值。';

Blockly.Msg.MPYTHON_USOCKET_BIND_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.bind';
Blockly.Msg.MPYTHON_USOCKET_BIND_MESSAGE0 = 'socket %1 绑定地址 %2 端口 %3';
Blockly.Msg.MPYTHON_USOCKET_BIND_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_CLOSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket.close';
Blockly.Msg.MPYTHON_USOCKET_CLOSE_MESSAGE0 = 'socket %1 关闭';
Blockly.Msg.MPYTHON_USOCKET_CLOSE_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_USOCKET_INIT_MESSAGE0 = '创建 socket %1 地址 %2 类型 %3';
Blockly.Msg.MPYTHON_USOCKET_INIT_TOOLTIP = 'AF_INET:=2 — TCP/IP – IPv4\nAF_INET6 :=10 — TCP/IP – IPv6\nSOCK_STREAM:=1 — TCP流\nSOCK_DGRAM:=2 — UDP数据报\nSOCK_RAW :=3 — 原始套接字\nSO_REUSEADDR : =4 — socket可重用\n';


Blockly.Msg.MPYTHON_GET_POST_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_GET_POST_MESSAGE0 = '%1 请求网址 %2 提交字段 %3 header%4';
//Blockly.Msg.MPYTHON_GET_POST_TOOLTIP = '*data*（可选）在请求正文中发送的字典或元组列表[（键，值）]（将是表单编码的），字节或类文件对象。\n*json*（可选）在请求正文中发送的json数据。\n*headers*（可选）要与请求一起发送的HTTP标头字典。';
Blockly.Msg.MPYTHON_GET_POST_TOOLTIP = '';

Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_TOOLTIP = '';
Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_MESSAGE0 = '%1 请求网址 %2 请求头 %3 提交字段 %4';

Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_TOOLTIP = '';
Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_MESSAGE0 = 'Post 提交文件 %1 请求网址 %2 文件路径 %3 Mime类型 %4 附加字段 %5';

Blockly.Msg.MPYTHON_RESPONSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_RESPONSE_MESSAGE0 = '响应内容 形式 %1';
Blockly.Msg.MPYTHON_RESPONSE_TOOLTIP = '';

Blockly.Msg.STRING = '字符串';
Blockly.Msg._BYTE = '二进制';
Blockly.Msg.BYTES = '字节';
Blockly.Msg.TEXT = '文本';

Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_MESSAGE0 = '响应属性 %1';
Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_TOOLTIP = '';


Blockly.Msg.MPYTHON_SETS_PIN_MODE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.Pin.html#id1';
Blockly.Msg.MPYTHON_SETS_PIN_MODE_TOOLTIP = '右键帮助，查看引脚声明';
Blockly.Msg.MPYTHON_SETS_PIN_MODE_MESSAGE0 = '设置引脚 %1 为 %2 模式 %3 并设置值为 %4';

Blockly.Msg.MPYTHON_SET_PIN_IN = '数字输入';
Blockly.Msg.MPYTHON_SET_PIN_PUSH_PULL_OUT = '数字输出';
Blockly.Msg.MPYTHON_SET_PIN_PWM = '模拟输出';
Blockly.Msg.MPYTHON_SET_PIN_ANALOG  = '模拟输入';
Blockly.Msg.MPYTHON_SET_PIN_LEAKY_OUT = '开漏输出';

Blockly.Msg.MPYTHON_SET_PIN_NO_PULL = '无上下拉';
Blockly.Msg.MPYTHON_SET_PIN_DOWN_PULL = '下拉';
Blockly.Msg.MPYTHON_SET_PIN_UP_PULL = '上拉';

Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_HELPURL = '';
Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_MESSAGE0 = '线程锁对象 %1 请求锁';
Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_TOOLTIP = '';

Blockly.Msg.MPYTHON_START_NEW_THREAD_HELPURL = '';
Blockly.Msg.MPYTHON_START_NEW_THREAD_MESSAGE0 = '子线程 %1';
Blockly.Msg.MPYTHON_START_NEW_THREAD_TOOLTIP = '';

Blockly.Msg.MPYTHON_DEFINE_THREAD_MESSAGE0 = '定义线程 %1';
Blockly.Msg.MPYTHON_RUN_THREAD_MESSAGE0 = '运行线程 %1';


Blockly.Msg.MPYTHON_UART_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_INIT_MESSAGE0 = '串口 %4 初始化 波特率 %1 tx %2 rx %3';
Blockly.Msg.MPYTHON_UART_INIT_TOOLTIP = DEVICE + '支持3组串口。0用于REPL，剩下1、2两组串口可用。所有引脚均可以作为串口的输入RX，除 P2、P3 、P4 、P10 只能作为输入，其余所有的引脚理论上都可以作为输出TX。';

Blockly.Msg.MPYTHON_UART_DEINIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_DEINIT_MESSAGE0 = '关闭串口 %1';
Blockly.Msg.MPYTHON_UART_DEINIT_TOOLTIP = '关闭 UART 总线';

Blockly.Msg.MPYTHON_UART_WRITE_STR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_WRITE_STR_MESSAGE0 = '串口 %1 写入文本 %2 %3';
Blockly.Msg.MPYTHON_UART_WRITE_STR_TOOLTIP = '将文本写入总线。\n返回值：写入或 None 超时的字节数。';

Blockly.Msg.MPYTHON_UART_WRITE_HEX_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_WRITE_HEX_MESSAGE0 = '串口 %1 发送16进制字符串 %2 %3';
Blockly.Msg.MPYTHON_UART_WRITE_HEX_TOOLTIP = '';

Blockly.Msg.MPYTHON_UART_HAS_DATA_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_HAS_DATA_MESSAGE0 = '串口 %1 有可读数据';
Blockly.Msg.MPYTHON_UART_HAS_DATA_TOOLTIP = '返回一个整数，计算可以无阻塞地读取的字符数。\n如果没有可用字符，它将返回0，如果有字符，则返回正数。\n即使有多个可读的字符，该方法也可以返回1。';

Blockly.Msg.MPYTHON_UART_READLINE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_READLINE_MESSAGE0 = '串口 %1 读取一行数据';
Blockly.Msg.MPYTHON_UART_READLINE_TOOLTIP = '读一行，以换行符结尾。\n返回值：读取行或 None 超时。';

Blockly.Msg.MPYTHON_UART_READ_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_READ_MESSAGE0 = '串口 %1 读取数据';
Blockly.Msg.MPYTHON_UART_READ_TOOLTIP = '读取尽可能多的串口数据\n返回值：包含读入字节的字节列表。若读取超时则返回 None。';

Blockly.Msg.MPYTHON_UART_READ_LENGTH_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_READ_LENGTH_MESSAGE0 = '串口 %1 读取数据 长度 %2';
Blockly.Msg.MPYTHON_UART_READ_LENGTH_TOOLTIP = '读取指定长度字节数据\n返回值：包含读入字节的字节列表。若读取超时则返回 None。';

Blockly.Msg.MPYTHON_UART_WRITE_BYTE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_WRITE_BYTE_MESSAGE0 = '串口 %1 写入单字节 %2';
Blockly.Msg.MPYTHON_UART_WRITE_BYTE_TOOLTIP = '参数取值为 0~255 整数\n将字节写入总线。\n返回值：写入或 None 超时的字节数。';

Blockly.Msg.MPYTHON_UART_WRITE_BYTES_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_WRITE_BYTES_MESSAGE0 = '串口 %1 写入字节数组 %2';
Blockly.Msg.MPYTHON_UART_WRITE_BYTES_TOOLTIP = '将字节数组写入总线。\n返回值：写入或 None 超时的字节数。';


Blockly.Msg.MPYTHON_BAUDRATE_HELPURL = '';
Blockly.Msg.MPYTHON_BAUDRATE_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_BAUDRATE_TOOLTIP = '';


Blockly.Msg.MPYTHON_HIGH_LOW_HELPURL = '';
Blockly.Msg.MPYTHON_HIGH_LOW_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_HIGH_LOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_TEN_CONVERT_TO_HELPURL = '';
Blockly.Msg.MPYTHON_TEN_CONVERT_TO_MESSAGE0 = '10进制整数 %1 转化为 %2 字符串';
Blockly.Msg.MPYTHON_TEN_CONVERT_TO_TOOLTIP = '';

Blockly.Msg.MPYTHON_BIN = '二进制';
Blockly.Msg.MPYTHON_OCT = '八进制';
Blockly.Msg.MPYTHON_HEX = '十六进制';

Blockly.Msg.MPYTHON_CONVERT_TO_TEN_HELPURL = '';
Blockly.Msg.MPYTHON_CONVERT_TO_TEN_MESSAGE0 = '%1 字符串 %2 转 10进制整数';
Blockly.Msg.MPYTHON_CONVERT_TO_TEN_TOOLTIP = '';

Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_HELPURL = '';
Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_MESSAGE0 = '10进制整数 %2 转 %1 字节';
Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_TOOLTIP = '';

Blockly.Msg.MPYTHON_INT_TO_CHR_HELPURL = '';
Blockly.Msg.MPYTHON_INT_TO_CHR_MESSAGE0 = '整型 %1 转  ASCII 单字符';
Blockly.Msg.MPYTHON_INT_TO_CHR_TOOLTIP = 'ASCII：基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。';

Blockly.Msg.MPYTHON_CHR_TO_INT_HELPURL = '';
Blockly.Msg.MPYTHON_CHR_TO_INT_MESSAGE0 = 'ASCII 单字符 %1 转 整型';
Blockly.Msg.MPYTHON_CHR_TO_INT_TOOLTIP = 'ASCII是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。';


Blockly.Msg.MPYTHON_STR_TO_HEX_HELPURL = '';
Blockly.Msg.MPYTHON_STR_TO_HEX_MESSAGE0 = '字符串 %1 转 十六进制 字节';
Blockly.Msg.MPYTHON_STR_TO_HEX_TOOLTIP = '返回结果中用空格分隔两个十六进制数';

Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_HELPURL = '';
Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_MESSAGE0 = '十六进制字符串 %1 转 二进制 字节';
Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_TOOLTIP = '';

Blockly.Msg.MPYTHON_DATA_TO_BASE64_HELPURL = '';
Blockly.Msg.MPYTHON_DATA_TO_BASE64_MESSAGE0 = '%1 以 base64 格式编码 返回字节对象';
Blockly.Msg.MPYTHON_DATA_TO_BASE64_TOOLTIP = 'Base64编码是从二进制到字符的过程';

Blockly.Msg.MPYTHON_BASE64_TO_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_BASE64_TO_DATA_MESSAGE0 = '解码 base64 数据 %1 返回字节对象';
Blockly.Msg.MPYTHON_BASE64_TO_DATA_TOOLTIP = 'Base64编码是从二进制到字符的过程';

Blockly.Msg.MPYTHON_UJSON_DUMPS_HELPURL = '';
Blockly.Msg.MPYTHON_UJSON_DUMPS_MESSAGE0 = '%1 转 json 字符串';
Blockly.Msg.MPYTHON_UJSON_DUMPS_TOOLTIP = 'JSON 格式的 key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 none）';

Blockly.Msg.MPYTHON_UJSON_LOADS_HELPURL = '';
Blockly.Msg.MPYTHON_UJSON_LOADS_MESSAGE0 = '解析 json 字符串 %1 返回对象';
Blockly.Msg.MPYTHON_UJSON_LOADS_TOOLTIP = 'JSON 格式的 key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 none）';

Blockly.Msg.MPYTHON_SPLIT_HELPURL = '';
Blockly.Msg.MPYTHON_SPLIT_MESSAGE0 = '对 %1 字符串 按 %2 进行分割并返回列表';
Blockly.Msg.MPYTHON_SPLIT_TOOLTIP = '返回值类型为列表';

Blockly.Msg.MPYTHON_CUSTOM_CODE_HELPURL = '';
Blockly.Msg.MPYTHON_CUSTOM_CODE_TOOLTIP = '';
Blockly.Msg.MPYTHON_CUSTOM_CODE_MESSAGE0 = '%1 自定义代码 %2 %3';
Blockly.Msg.MPYTHON_CUSTOM_TYPE_IMPORT = '置顶';
Blockly.Msg.MPYTHON_CUSTOM_TYPE_NORMAL = '普通';

Blockly.Msg.NUMBER_TO_BYTES_MESSAGE0 = '(struct.pack) 转换数字为bytes %1 %2 %3 %4 待转换数字 %5'
Blockly.Msg.BYTES_TO_NUMBER_MESSAGE0 = '(struct.unpack) 解包bytes为数字 %1 %2 %3 %4 待转换bytes %5'
Blockly.Msg.LITTLE_ENDIAN = '低位优先(默认)';
Blockly.Msg.BIG_ENDIAN = '高位优先';

/* 掌控板_物联网 */
Blockly.Msg.MPYTHON_BLYNK_TERMINAL_WIDGET_VPIN_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_TERMINAL_WIDGET_VPIN_MESSAGE0 = '自定义终端部件 Terminal 虚拟管脚 V %1';
Blockly.Msg.MPYTHON_BLYNK_TERMINAL_WIDGET_VPIN_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNK_SYNC_VIRTUAL_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SYNC_VIRTUAL_MESSAGE0 = '同步虚拟管脚的状态 V %1';
Blockly.Msg.MPYTHON_BLYNK_SYNC_VIRTUAL_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNK_ON_DISCONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_ON_DISCONNECTED_MESSAGE0 = '当 Blynk 断开连接时';
Blockly.Msg.MPYTHON_BLYNK_ON_DISCONNECTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNK_ON_CONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_ON_CONNECTED_MESSAGE0 = '当 Blynk 连接时';
Blockly.Msg.MPYTHON_BLYNK_ON_CONNECTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNKTIMER_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNKTIMER_RUN_MESSAGE0 = '运行 Blynk 定时器进程';
Blockly.Msg.MPYTHON_BLYNKTIMER_RUN_TOOLTIP = '建议放在 \'一直重复\' 中循环执行';

Blockly.Msg.MPYTHON_BLYNK_GET_TIMERS_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_GET_TIMERS_MESSAGE0 = '可用的 Blynk 定时器';
Blockly.Msg.MPYTHON_BLYNK_GET_TIMERS_TOOLTIP = "";

Blockly.Msg.MPYTHON_BLYNK_STOP_TIMERS_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_STOP_TIMERS_MESSAGE0 = '停止 Blynk 定时器 %1';
Blockly.Msg.MPYTHON_BLYNK_STOP_TIMERS_TOOLTIP =
    '注意:\n定时器序号为自动获取，自上而下，从0开始且连续，不可"定时器0，定时器2"，此处暴露序号参数为方便查看！\n参数:\nno_timers_err=False-如果所有计时器都停止，禁用异常触发';

Blockly.Msg.MPYTHON_UART_INPUT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.UART.html#uart';
Blockly.Msg.MPYTHON_UART_INPUT_MESSAGE0 = '从串口获取文本 提示语句 %1';
Blockly.Msg.MPYTHON_UART_INPUT_TOOLTIP = ''

Blockly.Msg.MPYTHON_BLYNK_SET_PROPERTY_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SET_PROPERTY_MESSAGE0 = '给虚拟管脚添加   属性 %1 值 %2';
Blockly.Msg.MPYTHON_BLYNK_SET_PROPERTY_TOOLTIP = "放于 read 或 write 事件中，虚拟管脚由事件决定，与该管脚绑定的组件会拥有添加的属性";


Blockly.Msg.MPYTHON_BLYNK_EMAIL_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_EMAIL_MESSAGE0 = '向预设邮箱发邮件 %1 主题 %2 正文 %3';
Blockly.Msg.MPYTHON_BLYNK_EMAIL_TOOLTIP = "";


Blockly.Msg.MPYTHON_BLYNK_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_RUN_MESSAGE0 = '运行 Blynk 进程';
Blockly.Msg.MPYTHON_BLYNK_RUN_TOOLTIP = '建议放在 \'一直重复\' 中循环执行';

Blockly.Msg.MPYTHON_BLYNK_APP_NOTIFY_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_APP_NOTIFY_MESSAGE0 = 'Blynk APP 显示通知 %1';
Blockly.Msg.MPYTHON_BLYNK_APP_NOTIFY_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNKTIMER_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNKTIMER_MESSAGE0 = 'Blynk 定时器 %1 %2 周期 %3 秒';
Blockly.Msg.MPYTHON_BLYNKTIMER_TOOLTIP = '注意:\n定时器序号为自动获取，自上而下，从0开始且连续，不可"定时器0，定时器2"，此处暴露序号参数为方便查看！\n参数:\nno_timers_err=False-如果所有计时器都停止，禁用异常触发';

Blockly.Msg.MPYTHON_BLYNK_SENSOR_DATA_TO_APP_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SENSOR_DATA_TO_APP_MESSAGE0 = '发送数据 %1 到 Blynk APP 的 虚拟管脚 V %2';
Blockly.Msg.MPYTHON_BLYNK_SENSOR_DATA_TO_APP_TOOLTIP = '虚拟管脚：V0 ~ V255';

Blockly.Msg.MPYTHON_BLYNK_SETUP_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SETUP_MESSAGE0 = 'Blynk 设置 %1 服务器 %2 端口 %3 授权码 %4';
Blockly.Msg.MPYTHON_BLYNK_SETUP_TOOLTIP = '服务器可填 blynk-cloud.com（官网） 或者 blynk.mpython.cn（国内）\n默认端口为 8080\n注意：手机APP访问端口为 9443';

Blockly.Msg.MPYTHON_BLYNK_APP_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_APP_DATA_MESSAGE0 = '当 从 Blynk APP 收到 虚拟管脚 V %1 的值 %2';
Blockly.Msg.MPYTHON_BLYNK_APP_DATA_TOOLTIP = '虚拟管脚：V0 ~ V255';

Blockly.Msg.MPYTHON_ONENET_DISCONNECT_MESSAGE0 = 'OneNET 断开连接';
Blockly.Msg.MPYTHON_ONENET_DISCONNECT_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_DISCONNECT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html';

Blockly.Msg.MPYTHON_ONENET_RECV_MESSAGE0 = '当 从 OneNET 收到消息 %1 时';
Blockly.Msg.MPYTHON_ONENET_RECV_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_RECV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html';
Blockly.Msg.MPYTHON_ONENET_RECV_MSG_MESSAGE0 = '当 从 OneNET 收到特定消息 %1 时';
Blockly.Msg.MPYTHON_ONENET_RECV_MSG_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_RECV_MSG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html';

Blockly.Msg.MPYTHON_ONENET_PUB_VALUE_MESSAGE0 = '向 OneNET 发送数据流 名称 %1 值 %2';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html';
Blockly.Msg.MPYTHON_ONENET_PUB_DICT_MESSAGE0 = '向 OneNET 发送数据流 %1';
Blockly.Msg.MPYTHON_ONENET_PUB_DICT_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_PUB_DICT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/umqtt.simple.html';

Blockly.Msg.MPYTHON_ONENET_PUB_VALUE2_MESSAGE0 = '向 小程序 发送数据流 名称 %1 值 %2';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE2_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE2_HELPURL = '';

Blockly.Msg.INT_TO_CHR_HELPURL = ''
Blockly.Msg.INT_TO_CHR_MESSAGE0 = '整数 %1 转 ASCII 单字符';
Blockly.Msg.INT_TO_CHR_TOOLTIP = "";

Blockly.Msg.MPYTHON_ONENET_ACCEPT_MESSAGE = '收到消息';
Blockly.Msg.MPYTHON_ONENET = 'OneNET 设置';
Blockly.Msg.MPYTHON_ONENET_WECHAT_APP = '小程序 设置';
Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS = '可选' + DEVICE;
Blockly.Msg.MPYTHON_ONENET_TITLE = 'OneNET';
Blockly.Msg.MPYTHON_SERVER = '服务器';
Blockly.Msg.MPYTHON_DEVICE_ID = '设备ID';
Blockly.Msg.MPYTHON_PRODUCT_ID = '产品ID';
Blockly.Msg.MPYTHON_API_KEY = '产品APIKey';
Blockly.Msg.MPYTHON_ONENET_CALLBACK = '回调函数';
Blockly.Msg.MPYTHON_TOPIC = '主题';
Blockly.Msg.MPYTHON_ONENET_CALLBACK_TITLE = "OneNET回调函数";

Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS_HELPURL = '';
Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS_MESSAGE0 = '小程序  选择' + DEVICE + '应用 %1';
Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS_TOOLTIP = '';

Blockly.Msg.MPYTHON_HCSR04_DISTANCE_HELPURL = 'https://mpython-lib.readthedocs.io/zh/master/hcsr04/index.html#hcsr04'
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MESSAGE0 = '%1 hcsr04 超声波距离 测量单位 %2';
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_TOOLTIP = "";

Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_HELPURL = 'https://mpython-lib.readthedocs.io/zh/master/hcsr04/index.html#hcsr04'
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_MESSAGE0 = '%1 hcsr04 超声波(mm)';
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_TOOLTIP = "";

Blockly.Msg.MPYTHON_HCSR04_OBJ_HELPURL = 'https://mpython-lib.readthedocs.io/zh/master/hcsr04/index.html#hcsr04'
Blockly.Msg.MPYTHON_HCSR04_OBJ_MESSAGE0 = 'hcsr04 超声波初始化  名称 %1  trigger %2 echo %3';
Blockly.Msg.MPYTHON_HCSR04_OBJ_TOOLTIP = "";

Blockly.Msg.MPYTHON_PM2_5_MIC_HELPURL = ''
Blockly.Msg.MPYTHON_PM2_5_MIC_MESSAGE0 = 'rx引脚%1 PM值浓度%2';
Blockly.Msg.MPYTHON_PM2_5_MIC_TOOLTIP = "";

Blockly.Msg.MPYTHON_PM2_5_LitresAir_HELPURL = ''
Blockly.Msg.MPYTHON_PM2_5_LitresAir_MESSAGE0 = 'rx引脚%1 0.1升空气中直径在%2 颗粒物个数';
Blockly.Msg.MPYTHON_PM2_5_LitresAir_TOOLTIP = "";

Blockly.Msg.MPYTHON_IR_REMOTE_RECV_MESSAGE0 = '红外接收 %1 回调地址 %2 回调命令 %3';
Blockly.Msg.MPYTHON_IR_REMOTE_RECV_HELPURL = '';
Blockly.Msg.MPYTHON_IR_REMOTE_RECV_TOOLTIP = '';

Blockly.Msg.MPYTHON_IR_REMOTE_SEND_MESSAGE0 = '红外发送 %1 地址 %2 命令 %3';
Blockly.Msg.MPYTHON_IR_REMOTE_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_IR_REMOTE_SEND_TOOLTIP = '';


// 格式化字符串 % 方式
Blockly.Msg.TEXT_FORMAT_MESSAGE0 = '格式化字符串 %1 % %2';
Blockly.Msg.TEXT_FORMAT_TOOLTIP = '';
Blockly.Msg.TEXT_FORMAT_HELPURL = '';

// 格式化字符串 format 方式
Blockly.Msg.TEXT_FORMAT2_MESSAGE0 = '格式化字符串 %1 format %2';
Blockly.Msg.TEXT_FORMAT2_TOOLTIP = '';
Blockly.Msg.TEXT_FORMAT2_HELPURL = '';

// text转字节
Blockly.Msg.TEXT_TO_BYTE_MESSAGE0 = '转字节 %1';
Blockly.Msg.TEXT_TO_BYTE_TOOLTIP = '支持数据类型：string';
Blockly.Msg.TEXT_TO_BYTE_HELPURL = '';


Blockly.Msg.MPYTHON_BYTES_DECODE_HELPURL = '';
Blockly.Msg.MPYTHON_BYTES_DECODE_MESSAGE0 = '字节 %1 转 字符串';
Blockly.Msg.MPYTHON_BYTES_DECODE_TOOLTIP = "";


// 非文本转字节
Blockly.Msg.OTHER_TO_BYTE_MESSAGE0 = '非文本转字节 %1';
Blockly.Msg.OTHER_TO_BYTE_TOOLTIP = '';
Blockly.Msg.OTHER_TO_BYTE_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_TOOLTIP = '创建OneNET连接';
Blockly.Msg.MPYTHON_ONENET_INIT_WIFI_MESSAGE0 = '物联网 确保连接到 Wi-Fi 名称 %1 密码 %2';
Blockly.Msg.MPYTHON_ONENET_INIT_WIFI_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_INIT_WIFI_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_RECV_FROM_WECHAT_APP_HELPURL = '';
Blockly.Msg.MPYTHON_ONENET_RECV_FROM_WECHAT_APP_MESSAGE0 = '当从小程序收到 %1 和 %2 时';
Blockly.Msg.MPYTHON_ONENET_RECV_FROM_WECHAT_APP_TOOLTIP = '';

/* 掌控板_物联网 */


/* 掌控板start */
Blockly.Msg.MPYTHON_MAC_ADDRESS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/network.html#module-network';
Blockly.Msg.MPYTHON_MAC_ADDRESS_MESSAGE0 = 'MAC 地址';
Blockly.Msg.MPYTHON_MAC_ADDRESS_TOOLTIP = "";

Blockly.Msg.MPYTHON_RADIO_REC_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/radio.html#radio-radio';
Blockly.Msg.MPYTHON_RADIO_REC_MESSAGE0 = '无线广播  接收消息';
Blockly.Msg.MPYTHON_RADIO_REC_TOOLTIP = "所接收为字节型";

Blockly.Msg.MPYTHON_RADIO_SEND_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/radio.html#radio-radio';
Blockly.Msg.MPYTHON_RADIO_SEND_MESSAGE0 = '无线广播  发送 %1';
Blockly.Msg.MPYTHON_RADIO_SEND_TOOLTIP = "频道: 0~14";

Blockly.Msg.MPYTHON_RADIO_CHANNEL_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/radio.html#radio-radio';
Blockly.Msg.MPYTHON_RADIO_CHANNEL_MESSAGE0 = '设无线广播  频道为 %1';
Blockly.Msg.MPYTHON_RADIO_CHANNEL_TOOLTIP = "频道: 0~14";

Blockly.Msg.MPYTHON_RADIO_ON_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/radio.html#radio-radio';
Blockly.Msg.MPYTHON_RADIO_ON_OFF_MESSAGE0 = '%1 无线广播';
Blockly.Msg.MPYTHON_RADIO_ON_OFF_TOOLTIP = "频道: 0~14";

Blockly.Msg.MPYTHON_RADIO_RECV_MESSAGE0 = '当 收到无线广播消息 %1 时';
Blockly.Msg.MPYTHON_RADIO_RECV_TOOLTIP = "频道: 0~14";
Blockly.Msg.MPYTHON_RADIO_RECV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/radio.html#radio-radio';

Blockly.Msg.MPYTHON_RADIO_RECV_MSG_MESSAGE0 = '当 收到特定无线广播消息 %1 时';
Blockly.Msg.MPYTHON_RADIO_RECV_MSG_TOOLTIP = "频道: 0~14";
Blockly.Msg.MPYTHON_RADIO_RECV_MSG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/radio.html#radio-radio';

// 2020-11-21 UDP 收发
Blockly.Msg.MPYTHON_UDP_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_INIT_MESSAGE0 = '建立 UDP 连接';
Blockly.Msg.MPYTHON_UDP_INIT_TOOLTIP = "UDP连接基于Wi-Fi";

Blockly.Msg.MPYTHON_UDP_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_SEND_MESSAGE0 = 'UDP 群发消息 %1';
Blockly.Msg.MPYTHON_UDP_SEND_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_SENDTO_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_SENDTO_MESSAGE0 = 'UDP 发送消息 %1 到 %2 端口 %3';
Blockly.Msg.MPYTHON_UDP_SENDTO_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_RECV_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_RECV_MESSAGE0 = 'UDP 接收消息';
Blockly.Msg.MPYTHON_UDP_RECV_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_RECV_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_RECV_EVENT_MESSAGE0 = '当从 UDP 收到消息时';
Blockly.Msg.MPYTHON_UDP_RECV_EVENT_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_RECV_MSG_MESSAGE0 = '从 UDP 收到的消息';
Blockly.Msg.MPYTHON_UDP_RECV_MSG_TOOLTIP = "";
Blockly.Msg.MPYTHON_UDP_RECV_MSG_HELPURL = '';

Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_MESSAGE0 = '设音频音量 %1';
Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_TOOLTIP = "[需要使用掌控扩展板的喇叭]\n音量设置,范围0~100";

Blockly.Msg.MPYTHON_DISPCHAR_MODE_1 = '普通';
Blockly.Msg.MPYTHON_DISPCHAR_MODE_2 = '反转';
Blockly.Msg.MPYTHON_DISPCHAR_MODE_3 = '透明';

Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_MESSAGE0 = 'TTS 语音播放 %1';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_TOOLTIP = "需要在 讯飞开放平台 www.xfyun.cn 上开通“在线语音合成”服务";

Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/extboard/tutorials/tutorials_parrot.html#id3';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_MESSAGE0 = 'TTS 语音配置 APPID %1 APIKey %2';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_TOOLTIP = "输入在 讯飞开放平台 www.xfyun.cn 获取的 APPID 与 APIKey\n注意：要设置IP白名单";

Blockly.Msg.MPYTHON_AUDIO_PLAY_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_MESSAGE0 = '音频 播放本地  %1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_TOOLTIP = "[需要使用掌控扩展板的喇叭]\n需要有源音箱\nP8 左声道\nP9 右声道\nGND 接地\n播放参数: \n已上传至" + DEVICE + "的 MP3, 如'music_1.mp3' ";

Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_MESSAGE0 = '音频 网络播放  %1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_TOOLTIP = "[需要使用掌控扩展板的喇叭]\n需要有源音箱\nP8 左声道\nP9 右声道\nGND 接地\n播放参数: \n网络 MP3 的 url 或已上传至" + DEVICE + "的 MP3, 如'music_1.mp3' ";

Blockly.Msg.MPYTHON_AUDIO_PLAY_STATUS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_STATUS_MESSAGE0 = '音频 是否处于播放状态';
Blockly.Msg.MPYTHON_AUDIO_PLAY_STATUS_TOOLTIP = "False:空闲\nTrue:正在播放、暂停状态";

Blockly.Msg.MPYTHON_AUDIO_DEINIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_DEINIT_MESSAGE0 = '音频 释放缓存';
Blockly.Msg.MPYTHON_AUDIO_DEINIT_TOOLTIP = '[需要使用掌控扩展板的喇叭]\n';

Blockly.Msg.MPYTHON_AUDIO_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_INIT_MESSAGE0 = '音频 初始化';
Blockly.Msg.MPYTHON_AUDIO_INIT_TOOLTIP = '[需要使用掌控扩展板的喇叭]\n为音频解码开辟缓存';

Blockly.Msg.MPYTHON_AUDIO_CMD_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_CMD_MESSAGE0 = '\n音频  %1';
Blockly.Msg.MPYTHON_AUDIO_CMD_TOOLTIP = '[需要使用掌控扩展板的喇叭]';

Blockly.Msg.MPYTHON_AUDIO_PLAY_chirp_MESSAGE0 = '鸟叫';
Blockly.Msg.MPYTHON_AUDIO_PLAY_Pianodarkmelodies_MESSAGE0 = "钢琴黑暗旋律配乐";
Blockly.Msg.MPYTHON_AUDIO_PLAY_miaow_MESSAGE0 = "猫叫";
Blockly.Msg.MPYTHON_AUDIO_PLAY_bark_MESSAGE0 = "小狗吠叫";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Arichpercussivesound_MESSAGE0 = "浑厚的打击音";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Soundeffectsfortension_MESSAGE0 = "紧张效果的音效";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Camerashuttersound_MESSAGE0 = "拍照快门声";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Hundredsofflies_MESSAGE0 = "数百只苍蝇";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Cricketscry_MESSAGE0 = "蟋蟀叫声";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Shakethebassline_MESSAGE0 = "摇晃低音声线";
Blockly.Msg.MPYTHON_AUDIO_PLAY_audiencecheeredandclapped_MESSAGE0 = "听众欢呼掌声";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Cruiseshipwhistle_MESSAGE0 = "邮轮汽笛";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Moderntelephoneringtone_MESSAGE0 = "现代电话铃声";
Blockly.Msg.MPYTHON_AUDIO_PLAY_pullingtradish_MESSAGE0 = "拔萝卜";
Blockly.Msg.MPYTHON_AUDIO_PLAY_twotigers_MESSAGE0 = "两只老虎";


//测试 -- 
Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_MESSAGE0 = '开始录音 录音时长%1秒';
Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_TOOLTIP = "录音时长不能大于5秒，距离5-13cm录音最佳\n需要" + DEVICE + "v1.1以上硬件版本。";

Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_MESSAGE0 = '录音结果';
Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_TOOLTIP = "需要" + DEVICE + "v1.1以上硬件版本。";

Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_MESSAGE0 = '将 %1 进行识别';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_TOOLTIP = "需要" + DEVICE + "v1.1以上硬件版本。";

Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_MESSAGE0 = '识别录音结果';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_TOOLTIP = "需要" + DEVICE + "v1.1以上硬件版本。";

Blockly.Msg.MPYTHON_RECORD_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_RECORD_INIT_MESSAGE0 = '录音 初始化';
Blockly.Msg.MPYTHON_RECORD_INIT_TOOLTIP = '录音初始化。\n此功能测试中，需要' + DEVICE + 'v1.1以上硬件版本。';

Blockly.Msg.MPYTHON_RECORD_DEINIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_RECORD_DEINIT_MESSAGE0 = '录音 释放资源';
Blockly.Msg.MPYTHON_RECORD_DEINIT_TOOLTIP = '录音结束后释放资源。\n此功能测试中，需要' + DEVICE + 'v1.1以上硬件版本。';

Blockly.Msg.MPYTHON_RECORD_WAV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_RECORD_WAV_MESSAGE0 = '录制音频 存储路径 %1 时长 %2 秒';
Blockly.Msg.MPYTHON_RECORD_WAV_TOOLTIP = '录音获取音频文件，时长不能大于5秒。\n录制音频，并以 WAV 格式存储。\n此功能测试中，需要' + DEVICE + 'v1.1以上硬件版本。';

Blockly.Msg.MPYTHON_ASR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_ASR_MESSAGE0 = '识别 %1 秒语音指令';
Blockly.Msg.MPYTHON_ASR_TOOLTIP = '可以识别3秒内的语音指令。\n此功能测试中，需要' + DEVICE + 'v1.1以上硬件版本。';
//测试 -- 

Blockly.Msg.mpython_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_button_A = 'P5（按键A）';
Blockly.Msg.mpython_button_B = 'P11（按键B）';
Blockly.Msg.mpython_PIN7_RGB = 'P7（板载RGB）';

Blockly.Msg.MPYTHON_PWM_PIN_P7 = 'P7 (' + DEVICE + ')';
Blockly.Msg.MPYTHON_PWM_PIN_P9 = 'P9 (掌控实验箱)';

Blockly.Msg.mpython_tem = '温度';
Blockly.Msg.mpython_hum = '湿度';
Blockly.Msg.mpython_pre = '气压';
Blockly.Msg.mpython_left_right = '左右';
Blockly.Msg.MPYTHON_LEFT = '左';
Blockly.Msg.MPYTHON_RIGHT = '右';
Blockly.Msg.mpython_front_back = '前后';
Blockly.Msg.mpython_vertical = '垂直';
Blockly.Msg.mpython_horizontal = '水平';
Blockly.Msg.mpython_run_in_back = '后台运行';
Blockly.Msg.mpython_run_in_front = '前台运行';
Blockly.Msg.mpython_draw = '绘制';
Blockly.Msg.mpython_clear = '清除';
Blockly.Msg.mpython_s = '秒';
Blockly.Msg.mpython_ms = '毫秒';
Blockly.Msg.mpython_us = '微秒';
Blockly.Msg.mpython_year = '年';
Blockly.Msg.mpython_month = '月';
Blockly.Msg.mpython_date = '日';
Blockly.Msg.mpython_hour = '时';
Blockly.Msg.mpython_minute = '分';
Blockly.Msg.mpython_week = '星期数';
Blockly.Msg.mpython_days = '天数';

Blockly.Msg.MPYTHON_ORDER = '第';
Blockly.Msg.MPYTHON_REVERSE_ORDER = '倒数第';

Blockly.Msg.MATH_RANDOM_RANDRANGE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.MATH_RANDOM_RANDRANGE_TOOLTIP = '返回指定递增基数集合中的一个随机数，基数缺省值为1';
Blockly.Msg.MATH_RANDOM_RANDRANGE_MESSAGE0 = '随机数 从递增区间 [%1 ,%2) 递增步长%3';

Blockly.Msg.MATH_KEEP_DECIMAL_HELPURL = '';
Blockly.Msg.MATH_KEEP_DECIMAL_TOOLTIP = '';
Blockly.Msg.MATH_KEEP_DECIMAL_MESSAGE0 = '%1 保留 %2 位小数';

Blockly.Msg.MPYTHON_MIN = '最小值';
Blockly.Msg.MPYTHON_MAX = '最大值';
Blockly.Msg.MPYTHON_LENTH = '长度';
Blockly.Msg.TUPLE_MIN_MAX_LEN_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.TUPLE_MIN_MAX_LEN_TOOLTIP = '';
Blockly.Msg.TUPLE_MIN_MAX_LEN_MESSAGE0 = '元组 %1 %2';

Blockly.Msg.TUPLE_ITEM_EXIST_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.TUPLE_ITEM_EXIST_TOOLTIP = '';
Blockly.Msg.TUPLE_ITEM_EXIST_MESSAGE0 = '元组%1 包含%2';

Blockly.Msg.LIST_ITEM_EXIST_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.LIST_ITEM_EXIST_TOOLTIP = '';
Blockly.Msg.LIST_ITEM_EXIST_MESSAGE0 = '列表%1 包含%2';

Blockly.Msg.PARTS_OF_TUPLE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.PARTS_OF_TUPLE_TOOLTIP = '正序计数从0开始，倒序计数从1开始';
Blockly.Msg.PARTS_OF_TUPLE_MESSAGE0 = '返回元组%1 取第%2 项到尾项';

Blockly.Msg.PARTS_OF_TUPLE2_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.PARTS_OF_TUPLE2_TOOLTIP = '递增顺序取项\n举例：\n 倒数第5到倒数第2；\n 第0到第5';
Blockly.Msg.PARTS_OF_TUPLE2_MESSAGE0 = '返回元组%1 取%2 %3 项到 %4 %5 项';

Blockly.Msg.PARTS_OF_LIST_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.PARTS_OF_LIST_TOOLTIP = '递增顺序取项\n举例：\n 倒数第5到倒数第2；\n 第0到第5';
Blockly.Msg.PARTS_OF_LIST_MESSAGE0 = '返回列表%1 取%2 %3 项到 %4 %5 项';

Blockly.Msg.LIST_TO_TUPLE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.LIST_TO_TUPLE_TOOLTIP = '';
Blockly.Msg.LIST_TO_TUPLE_MESSAGE0 = '列表%1 转元组';


Blockly.Msg.tuple_create_with_MESSAGE0 = '定义元组 %1 = %2 ';
Blockly.Msg.tuple_create_with_TOOLTIP = '只包含一个元素时，需要在元素后面添加逗号';
Blockly.Msg.tuple_create_with_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.tuple_order_item_MESSAGE0 = '元组%1 %2 %3 项';
Blockly.Msg.tuple_order_item_TOOLTIP = '正序计数从0开始，倒序计数从1开始';
Blockly.Msg.tuple_order_item_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.LIST_ORDER_ITEM_MESSAGE0 = '列表%1 %2 %3 项';
Blockly.Msg.LIST_ORDER_ITEM_TOOLTIP = '正序计数从0开始，倒序计数从1开始';
Blockly.Msg.LIST_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.SET_LIST_ORDER_ITEM_MESSAGE0 = '设列表%1 %2 %3 项为%4';
Blockly.Msg.SET_LIST_ORDER_ITEM_TOOLTIP = '正序计数从0开始，倒序计数从1开始';
Blockly.Msg.SET_LIST_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.INSERT_LIST_ORDER_ITEM_MESSAGE0 = '插入列表%1 %2 %3 项为%4';
Blockly.Msg.INSERT_LIST_ORDER_ITEM_TOOLTIP = '正序计数从0开始，倒序计数从1开始';
Blockly.Msg.INSERT_LIST_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.SET_TUPLE_ORDER_ITEM_MESSAGE0 = '设元组%1 %2 %3 项为%4';
Blockly.Msg.SET_TUPLE_ORDER_ITEM_TOOLTIP = '正序计数从0开始，倒序计数从1开始';
Blockly.Msg.SET_TUPLE_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';


Blockly.Msg.DICT_CREATE_WITH_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_CREATE_WITH_TOOLTIP = '';
Blockly.Msg.DICT_CREATE_WITH_MESSAGE0 = '定义字典 %1 = %2';

Blockly.Msg.SET_CREATE_WITH_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SET_CREATE_WITH_TOOLTIP = '';
Blockly.Msg.SET_CREATE_WITH_MESSAGE0 = '定义集合 %1 = %2';

Blockly.Msg.SET_UPDATE_WITH_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SET_UPDATE_WITH_TOOLTIP = '添加参数可为字符串、列表、元组、集合、字典（只添加key），已有元素则不进行操作';
Blockly.Msg.SET_UPDATE_WITH_MESSAGE0 = '集合 %1 添加 %2';

Blockly.Msg.INTERSECTION_OF_SETS_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.INTERSECTION_OF_SETS_TOOLTIP = '';
Blockly.Msg.INTERSECTION_OF_SETS_MESSAGE0 = '取 %1 集合 %2 集合 %3';
Blockly.Msg.MPYTHON_INTERSECTION = '交集';
Blockly.Msg.MPYTHON_UNION = '并集';
Blockly.Msg.MPYTHON_DIFFERENCE = '差集';
Blockly.Msg.SETS_UPDATE_WAYS_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SETS_UPDATE_WAYS_TOOLTIP = '';
Blockly.Msg.SETS_UPDATE_WAYS_MESSAGE0 = '集合 %1 更新为 与集合 %2 的 %3';
Blockly.Msg.SUBSET_SUPERSET_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SUBSET_SUPERSET_TOOLTIP = '';
Blockly.Msg.SUBSET_SUPERSET_MESSAGE0 = '集合 %1 为集合 %2 的 %3';
Blockly.Msg.MPYTHON_SUBSET = '子集';
Blockly.Msg.MPYTHON_SUPERSET = '超集';

Blockly.Msg.LEN_OF_SETS_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.LEN_OF_SETS_TOOLTIP = '';
Blockly.Msg.LEN_OF_SETS_MESSAGE0 = '集合 %1 长度';

Blockly.Msg.GET_SETS_POP_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.GET_SETS_POP_TOOLTIP = '';
Blockly.Msg.GET_SETS_POP_MESSAGE0 = '返回随机项并移除之  从集合 %1';

Blockly.Msg.CREATE_EMPTY_SET_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.CREATE_EMPTY_SET_TOOLTIP = '';
Blockly.Msg.CREATE_EMPTY_SET_MESSAGE0 = '创建空集合 %1';

Blockly.Msg.BIT_INVERSION_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.BIT_INVERSION_TOOLTIP = '对数据的每个二进制位取反';
Blockly.Msg.BIT_INVERSION_MESSAGE0 = '二进制取反 %1';


Blockly.Msg.TUPLE_CREATE_WITH_ITEMS_INSERT_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.TUPLE_CREATE_WITH_ITEMS_INSERT_TOOLTIP = '正序计数从0开始，倒序计数从1开始';

Blockly.Msg.SET_CREATE_WITH_ITEMS_INSERT_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SET_CREATE_WITH_ITEMS_INSERT_TOOLTIP = '项可为字符串、已创建变量变量、元组';

Blockly.Msg.DICT_CREATE_WITH_ITEMS_INSERT_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_CREATE_WITH_ITEMS_INSERT_TOOLTIP = '正序计数从0开始，倒序计数从1开始';


Blockly.Msg.DICT_KEY_VALUE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_KEY_VALUE_TOOLTIP = '';
Blockly.Msg.DICT_KEY_VALUE_MESSAGE0 = '字典%1 键%2 的值';

Blockly.Msg.ADD_DICT_KEY_VALUE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.ADD_DICT_KEY_VALUE_TOOLTIP = '已有该键则更新该键';
Blockly.Msg.ADD_DICT_KEY_VALUE_MESSAGE0 = '字典%1 添加键%2 值%3';

Blockly.Msg.DICT_LENGTH_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_LENGTH_TOOLTIP = '';
Blockly.Msg.DICT_LENGTH_MESSAGE0 = '字典%1 长度';

Blockly.Msg.DICT_KEY_EXIST_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_KEY_EXIST_TOOLTIP = '';
Blockly.Msg.DICT_KEY_EXIST_MESSAGE0 = '字典%1 包含键%2';

Blockly.Msg.DICT_KEY_OR_VAL_LIST_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_KEY_OR_VAL_LIST_TOOLTIP = '';
Blockly.Msg.DICT_KEY_OR_VAL_LIST_MESSAGE0 = '字典%1 %2的列表';
Blockly.Msg.DICT_KEYS = '键';
Blockly.Msg.DICT_VALUES = '值';


Blockly.Msg.mpython_lists_append_MESSAGE0 = '列表%1 末尾添加项%2';
Blockly.Msg.mpython_lists_append_TOOLTIP = '';
Blockly.Msg.mpython_lists_append_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_lists_extend_MESSAGE0 = '列表%1 追加列表%2';
Blockly.Msg.mpython_lists_extend_TOOLTIP = '';
Blockly.Msg.mpython_lists_extend_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

// Blockly.Msg.mpython_lists_remove_MESSAGE0 = '列表%1 移除第%2 项';
// Blockly.Msg.mpython_lists_remove_TOOLTIP = '从第0项开始';
// Blockly.Msg.mpython_lists_remove_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_lists_clear_MESSAGE0 = '列表%1 清空';
Blockly.Msg.mpython_lists_clear_TOOLTIP = '';
Blockly.Msg.mpython_lists_clear_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.MPYTHON_REMOVE_REPETITION_MESSAGE0 = '列表%1 移除重复';
Blockly.Msg.MPYTHON_REMOVE_REPETITION_TOOLTIP = '';
Blockly.Msg.MPYTHON_REMOVE_REPETITION_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_Timer_value_MESSAGE0 = '定时器 %1 的计数值';
Blockly.Msg.mpython_Timer_value_TOOLTIP = '获取并返回计时器当前计数值';

Blockly.Msg.mpython_Timer_deinit_MESSAGE0 = '清除 定时器/事件 %1';
Blockly.Msg.mpython_Timer_deinit_TOOLTIP = '取消定时器的初始化。停止计时器，并禁用计时器外围设备';

Blockly.Msg.mpython_Interrupt_AB_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#button-a-b';
Blockly.Msg.mpython_Interrupt_AB_TOOLTIP = '';
Blockly.Msg.mpython_Interrupt_AB_MESSAGE0 = '当按键 %1 被 %2 时';

Blockly.Msg.mpython_Interrupt_pin_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.Pin.html#Pin.Pin';
Blockly.Msg.mpython_Interrupt_pin_TOOLTIP = '上升沿触发：由低电平到高电平；下降沿触发：由高电平到低电平';
Blockly.Msg.mpython_Interrupt_pin_MESSAGE0 = '当引脚 %1 电平 %2 时';
Blockly.Msg.mpython_Interrupt_pin_IRQ_FALLING = '↘ 从高到低';
Blockly.Msg.mpython_Interrupt_pin_IRQ_RISING = '↗ 从低到高';

Blockly.Msg.mpython_IRQ_FALLING = '按下';
Blockly.Msg.mpython_IRQ_RISING = '松开';
Blockly.Msg.mpython_PERIODIC = '重复执行';
Blockly.Msg.mpython_ONE_SHOT = '延时执行';

Blockly.Msg.MPYTHON_IS_SHAKED_MESSAGE0 = DEVICE + ' %1';
Blockly.Msg.MPYTHON_IS_SHAKED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_IS_SHAKED_TOOLTIP = '';

Blockly.Msg.MPYTHON_IS_SHAKED = '被摇晃';
Blockly.Msg.MPYTHON_IS_THROWN = '被抛起';

Blockly.Msg.MPYTHON_SHAKE_DETECTOR_MESSAGE0 = '当' + DEVICE + ' %1 时';
Blockly.Msg.MPYTHON_SHAKE_DETECTOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_SHAKE_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_IS_TILTED_MESSAGE0 = DEVICE + ' %1';
Blockly.Msg.MPYTHON_IS_TILTED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_IS_TILTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_TILT_DETECTOR_MESSAGE0 = '当' + DEVICE + ' %1 时';
Blockly.Msg.MPYTHON_TILT_DETECTOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_TILT_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_DIRECTION_FORWARD = '向前倾斜';
Blockly.Msg.MPYTHON_DIRECTION_BACK = '向后倾斜';
Blockly.Msg.MPYTHON_DIRECTION_RIGHT = '向右倾斜';
Blockly.Msg.MPYTHON_DIRECTION_LEFT = '向左倾斜';
Blockly.Msg.MPYTHON_DIRECTION_NONE = '平放';

Blockly.Msg.MPYTHON_TOUCH_EVENT_MESSAGE0 = '当触摸键 %1 被 %2 时';
Blockly.Msg.MPYTHON_TOUCH_EVENT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.TouchPad.html#touchpad';
Blockly.Msg.MPYTHON_TOUCH_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON_TOUCH_EVENT_PRESSED = '触摸';
Blockly.Msg.MPYTHON_TOUCH_EVENT_UNPRESSED = '释放';

Blockly.Msg.MPYTHON_CUSTOM_EVENT_MESSAGE0 = '事件 %1 : 当 %2 时';
Blockly.Msg.MPYTHON_CUSTOM_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_CUSTOM_EVENT_TOOLTIP = '自定义事件与定时器共用 1/2/4/7/8/9/10，不可同时占用一个端口。\n最大同时创建4个事件/定时器，如果存在冲突，请尝试换一个编号。';

Blockly.Msg.mpython_music_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.mpython_music_range_pitch_TOOLTIP = DEVICE + '的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n时长为单个频率的时长';
Blockly.Msg.mpython_music_range_pitch_MESSAGE0 = '播放音调%1 从%2 到%3 步长%4 时长 毫秒%5  引脚 %6';

Blockly.Msg.mpython_music_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.mpython_music_pitch_TOOLTIP = DEVICE + '的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n时长为单个频率的时长';
Blockly.Msg.mpython_music_pitch_MESSAGE0 = '播放音调%1 频率%2 时长 毫秒%3  引脚 %4';

Blockly.Msg.mpython_neopixel_init_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.mpython_neopixel_init_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_init_MESSAGE0 = '灯带初始化 名称%1 引脚%2 数量%3';

Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_TOOLTIP = '';
Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_MESSAGE0 = '彩虹灯效 灯带%1 数量 %2 亮度 %3 偏移 %4';

Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/neopixel.html#NeoPixel.brightness';
Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_TOOLTIP = '亮度调节, 范围 0 ~ 100';
Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_MESSAGE0 = '灯带 %1 设置亮度为 %2';

Blockly.Msg.mpython_neopixel_single_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_single_MESSAGE0 = '灯带%1 %2号 红%3 绿%4 蓝%5';

Blockly.Msg.mpython_neopixel_single_gui_MESSAGE0 = '灯带 %1 %2号 颜色为 %3';
Blockly.Msg.mpython_neopixel_single_gui_TOOLTIP = '';

Blockly.Msg.mpython_neopixel_show_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_show_MESSAGE0 = '灯带%1 设置生效';

Blockly.Msg.mpython_neopixel_off_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_off_MESSAGE0 = '灯带%1 关闭';

Blockly.Msg.mpython_neopixel_all_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_all_MESSAGE0 = '灯带%1 全亮 红%2 绿%3 蓝%4';

Blockly.Msg.mpython_neopixel_all_gui_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_all_gui_MESSAGE0 = '灯带%1 全亮 颜色%2';

Blockly.Msg.mpython_image_to_oled_MESSAGE0 = '打开图片 %1 宽 %2 高 %3';
Blockly.Msg.mpython_image_to_oled_TOOLTIP = '';

Blockly.Msg.mpython_time_localtime_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/utime.html#module-time';
Blockly.Msg.mpython_time_localtime_MESSAGE0 = '本地时间 %1';
Blockly.Msg.mpython_time_localtime_TOOLTIP = '星期数：返回1～7，周一为1，周日为7\n天数：获取当前日期是一年中的第几天\n建议先连接wifi并获取网络时间';

Blockly.Msg.mpython_WiFi_config_MESSAGE0 = 'Wi-Fi 配置信息 %1';
Blockly.Msg.mpython_WiFi_config_TOOLTIP = 'netmask-子网掩码；gateway-网关';

Blockly.Msg.mpython_time_ticks_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/pythonStd/utime.html#time.time';
Blockly.Msg.mpython_time_ticks_MESSAGE0 = '运行时间 %1';
Blockly.Msg.mpython_time_ticks_TOOLTIP = '';

// Blockly.Msg.mpython_Timer_MESSAGE0 ='定时器 %1 周期 %2 毫秒 模式 %3 回调函数 %4';
Blockly.Msg.mpython_Timer_MESSAGE0 = '设置定时器 %1 %2 周期 %3 毫秒';
Blockly.Msg.mpython_Timer_TOOLTIP = '创建定时器n，n=1-14。\n最大同时创建4个定时器，如果存在冲突，请尝试换一个编号。\n3用于内部程序，\n5/6用于伺服系统和ADC，\n11用于摇晃检测，\n12用于触摸键检测，\n13用于Radio，\n14用于OneNET和倾斜检测（共用），\n其余端口与自定义事件共用。';
// Blockly.Msg.mpython_Timer_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/advance/timer.html?highlight=%E5%AE%9A%E6%97%B6%E5%99%A8#id1';
Blockly.Msg.mpython_Timer_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/blocks/index.html';

Blockly.Msg.mpython_sway_xyz_MESSAGE0 = '%1 摇晃' + DEVICE;
Blockly.Msg.mpython_sway_xyz_TOOLTIP = DEVICE + "正面朝上，触摸键 'python' 靠近使用者，开始左右或前后摇晃" + DEVICE;

Blockly.Msg.mpython_init_wifi_MESSAGE0 = '连接 Wi-Fi 名称 %1 密码 %2';
Blockly.Msg.mpython_init_wifi_TOOLTIP = '让' + DEVICE + '接入Wi-Fi环境';

Blockly.Msg.MPYTHON_TRY_CONNECT_WIFI_MESSAGE0 ='连接 Wi-Fi 名称 %1 密码 %2 , 重试 %3 次';
Blockly.Msg.MPYTHON_TRY_CONNECT_WIFI_TOOLTIP = '';
Blockly.Msg.MPYTHON_TRY_CONNECT_WIFI_HELPURL = '';

Blockly.Msg.MPYTHON_WIFI_IFCONFIG_MESSAGE0 = 'Wi-Fi 设置静态IP %1 IP 地址 %2 子网掩码 %3 默认网关 %4 DNS %5';
Blockly.Msg.MPYTHON_WIFI_IFCONFIG_TOOLTIP = '';
Blockly.Msg.MPYTHON_WIFI_IFCONFIG_HELPURL = '';

Blockly.Msg.mpython_dis_WiFi_MESSAGE0 = '断开 Wi-Fi 连接';
Blockly.Msg.mpython_dis_WiFi_TOOLTIP = '';

Blockly.Msg.MPYTHON_ENABLE_APWIFI_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.MPYTHON_ENABLE_APWIFI_TOOLTIP = '密码可以为空，或者8位以上的字母或数字。\nAP模式仅用于' + DEVICE + '之间的相互通信，不可以作为热点，令其它设备上网。';
Blockly.Msg.MPYTHON_ENABLE_APWIFI_MESSAGE0 = '开启 AP模式%1 名称 %2 密码 %3 信道 %4';

Blockly.Msg.mpython_disable_APWiFi_MESSAGE0 = '关闭 AP模式';
Blockly.Msg.mpython_disable_APWiFi_TOOLTIP = '';

Blockly.Msg.mpython_ntptime_settime_MESSAGE0 = '同步网络时间 时区 %1 授时服务器 %2';
Blockly.Msg.mpython_ntptime_settime_TOOLTIP = 'NTP时间同步是一种时间同步网络技术';

Blockly.Msg.mpython_wifi_get_date_MESSAGE0 = '获取当前日期';
Blockly.Msg.mpython_wifi_get_date_TOOLTIP = '获取当前日期字符串 示例：2020年12月12日';

Blockly.Msg.mpython_wifi_get_time_MESSAGE0 = '获取当前时间';
Blockly.Msg.mpython_wifi_get_time_TOOLTIP = '获取当前时间字符串';

Blockly.Msg.mpython_ntptime_timezone_E1 = "东1区";
Blockly.Msg.mpython_ntptime_timezone_E2 = "东2区";
Blockly.Msg.mpython_ntptime_timezone_E3 = "东3区";
Blockly.Msg.mpython_ntptime_timezone_E4 = "东4区";
Blockly.Msg.mpython_ntptime_timezone_E5 = "东5区";
Blockly.Msg.mpython_ntptime_timezone_E6 = "东6区";
Blockly.Msg.mpython_ntptime_timezone_E7 = "东7区";
Blockly.Msg.mpython_ntptime_timezone_E8 = "东8区";
Blockly.Msg.mpython_ntptime_timezone_E9 = "东9区";
Blockly.Msg.mpython_ntptime_timezone_E10 = "东10区";
Blockly.Msg.mpython_ntptime_timezone_E11 = "东11区";
Blockly.Msg.mpython_ntptime_timezone_E12 = "东12区";
Blockly.Msg.mpython_ntptime_timezone_0 = "中时区";
Blockly.Msg.mpython_ntptime_timezone_W1 = "西1区";
Blockly.Msg.mpython_ntptime_timezone_W2 = "西2区";
Blockly.Msg.mpython_ntptime_timezone_W3 = "西3区";
Blockly.Msg.mpython_ntptime_timezone_W4 = "西4区";
Blockly.Msg.mpython_ntptime_timezone_W5 = "西5区";
Blockly.Msg.mpython_ntptime_timezone_W6 = "西6区";
Blockly.Msg.mpython_ntptime_timezone_W7 = "西7区";
Blockly.Msg.mpython_ntptime_timezone_W8 = "西8区";
Blockly.Msg.mpython_ntptime_timezone_W9 = "西9区";
Blockly.Msg.mpython_ntptime_timezone_W10 = "西10区";
Blockly.Msg.mpython_ntptime_timezone_W11 = "西11区";
Blockly.Msg.mpython_ntptime_timezone_W12 = "西12区";

Blockly.Msg.FILE_TO_LIST_HELPURL = '';
Blockly.Msg.FILE_TO_LIST_TOOLTIP = '读出指定路径的文本文件内容（仅限utf-8格式），并转为列表形式，以分隔符分隔。';
Blockly.Msg.FILE_TO_LIST_MESSAGE0 = '读取文本文件 %1 为列表 ，以 %2 分隔';

Blockly.Msg.FILE_TO_BIN_HELPURL = '';
Blockly.Msg.FILE_TO_BIN_TOOLTIP = '以二进制格式读出指定路径的文件内容。';
Blockly.Msg.FILE_TO_BIN_MESSAGE0 = '读取文件 %1 的二进制内容';

Blockly.Msg.MPYTHON_INIT_FILE_HELPURL = '';
Blockly.Msg.MPYTHON_INIT_FILE_TOOLTIP = '初始化一个文本文件，如果文件不存在则创建文件，如果文件存在则清空内容。';
Blockly.Msg.MPYTHON_INIT_FILE_MESSAGE0 = '初始化文本文件 %1';

Blockly.Msg.MPYTHON_WRITE_FILE_HELPURL = '';
Blockly.Msg.MPYTHON_WRITE_FILE_TOOLTIP = '向指定路径的文本文件写入内容，如果文件不存在则创建文件。';
Blockly.Msg.MPYTHON_WRITE_FILE_MESSAGE0 = '向文本文件 %1 写入内容 %2 ，以 %3 分隔';

Blockly.Msg.MPYTHON_SDCARD_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/sdcard.html#sdcard.SDCard';
Blockly.Msg.MPYTHON_SDCARD_INIT_TOOLTIP = 'sck: P13\nmosi: P15\nmiso: P14\nsdcard: P16\n须确保 SPI 总线的引脚与 micro SD 卡物理连接正确，并预先使用 FAT 或 FAT32 文件系统格式化 micro SD 卡。';
Blockly.Msg.MPYTHON_SDCARD_INIT_MESSAGE0 = '初始化 SD 卡';

Blockly.Msg.MPYTHON_SDCARD_MOUNT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/sdcard.html#sdcard.SDCard';
Blockly.Msg.MPYTHON_SDCARD_MOUNT_TOOLTIP = '挂载 SD 卡到指定路径。';
Blockly.Msg.MPYTHON_SDCARD_MOUNT_MESSAGE0 = '挂载 SD 卡到路径 %1';

Blockly.Msg.MPYTHON_ENTER = '回车';
Blockly.Msg.MPYTHON_COMMA = '逗号';
Blockly.Msg.MPYTHON_SEMICOLON = '分号';
Blockly.Msg.MPYTHON_SPACE = '空格';

Blockly.Msg.mpython_wifi_clock_MESSAGE0 = 'Wi-Fi 模拟时钟 x %1 y %2 半径 %3';
Blockly.Msg.mpython_wifi_clock_TOOLTIP = '需连接 Wi-Fi 使用';

Blockly.Msg.mpython_def_clock_MESSAGE0 = '初始化时钟%1 x %2 y %3 半径 %4';
Blockly.Msg.mpython_def_clock_TOOLTIP = '';

Blockly.Msg.mpython_settime_clock_MESSAGE0 = '时钟%1 读取时间';
Blockly.Msg.mpython_settime_clock_TOOLTIP = '';

Blockly.Msg.mpython_draw_clear_clock_MESSAGE0 = '%1 时钟 %2';
Blockly.Msg.mpython_draw_clear_clock_TOOLTIP = '';

Blockly.Msg.mpython_tinywebio_start_MESSAGE0 = '启动 TinyWebIO 服务 %1';
Blockly.Msg.mpython_tinywebio_start_TOOLTIP = '启动该服务需连接Wi-Fi，TinyWebIO服务为App Inventor应用提供远程控制接口的' + DEVICE + '工具包';

Blockly.Msg.mpython_tinywebio_client_setup_HELPURL = '';
Blockly.Msg.mpython_tinywebio_client_setup_TOOLTIP = '向服务器发布的数据项(逗号分隔)\nbuttona/b 按键状态\ntouchpadp/y/t/h/o/n 触摸按键值\nlight 光线值\nsound 声音值\naccelerometer 三轴加速度值\nid ' + DEVICE + '标识\ntime 时间戳\npind<n> 数字IO引脚\npina<n> 模拟IO引脚\n----------\n从服务器读取的数据项(逗号分隔)\nrgb0/1/2 RGB灯珠\noled OLED显示屏\nmusic 音乐\nservo<n> 舵机\npind<n> 数字IO引脚\npina<n> 模拟IO引脚';
Blockly.Msg.mpython_tinywebio_client_setup_MESSAGE0 = '设置 TinyWebIO 客户端参数 %1 TinyWebDB服务器地址 %2 向服务器发布的数据项 %3 从服务器读取的数据项 %4 存取服务器的时间间隔(ms) %5';

Blockly.Msg.mpython_tinywebio_client_action_HELPURL = '';
Blockly.Msg.mpython_tinywebio_client_action_TOOLTIP = '';
Blockly.Msg.mpython_tinywebio_client_action_MESSAGE0 = '%1 TinyWebIO 客户端';

Blockly.Msg.mpython_tinywebio_client_action_start = '启动';
Blockly.Msg.mpython_tinywebio_client_action_stop = '停止';

Blockly.Msg.MPYTHON_CUSTOM_CODE_HELPURL = '';
Blockly.Msg.MPYTHON_CUSTOM_CODE_TOOLTIP = '';
Blockly.Msg.MPYTHON_CUSTOM_CODE_MESSAGE0 = '%1 自定义代码 %2 %3';

Blockly.Msg.MPYTHON_CUSTOM_TYPE_IMPORT = '置顶';
Blockly.Msg.MPYTHON_CUSTOM_TYPE_NORMAL = '普通';

Blockly.Msg.mpython_servo_angle0_MESSAGE0 = '设置舵机 %1 角度为 %2';
Blockly.Msg.mpython_servo_angle_MESSAGE0 = '设置舵机 %1 角度为 %2 脉宽从 %3 脉宽到 %4 最大角度 %5';
Blockly.Msg.mpython_servo_angle_TOOLTIP = '电源线Vcc（红色）连接扩展板电源口V，地线GND(棕色)连接扩展板地线口G，控制信号线(橙色)连接所选的扩展板引脚';

Blockly.Msg.mpython_dh11_hum_tem_HELPURL = 'https://mpython.readthedocs.io/zh/latest/classic/dht11.html?highlight=DHT';
Blockly.Msg.mpython_dh11_hum_tem_MESSAGE0 = 'DHT11 %1 %2';
Blockly.Msg.mpython_dh11_hum_tem_TOOLTIP = 'DHT11上的 + 连接扩展板的电源口 V ，- 连接扩展板的地线口 G ，out 连接扩展板的引脚 0(即选引脚)';

Blockly.Msg.MPYTHON_DH22_HUM_TEM_MESSAGE0 = 'DHT22 %1 %2';
Blockly.Msg.MPYTHON_DH22_HUM_TEM_TOOLTIP = '';
Blockly.Msg.MPYTHON_DH22_HUM_TEM_HELPURL = 'https://mpython.readthedocs.io/zh/latest/classic/dht11.html?highlight=DHT';


Blockly.Msg.mpython_music_note_MESSAGE0 = '音符 %1 %2 :  %3';
Blockly.Msg.mpython_music_note_TOOLTIP = '音符，如C4:4';

// Blockly.Msg.mpython_return_list_MESSAGE0 ='列表 %1 = [ %2 ]';
Blockly.Msg.mpython_return_list_MESSAGE0 = '定义列表 %1 = %2';
Blockly.Msg.mpython_return_list_TOOLTIP = '';

Blockly.Msg.mpython_display_Show_MESSAGE0 = 'OLED 显示生效';
Blockly.Msg.mpython_display_Show_TOOLTIP = '';


Blockly.Msg.mpython_display_DispChar_MESSAGE0 = '显示文本  x %1 y %2 内容 %3 模式 %4 %5';
Blockly.Msg.mpython_display_DispChar_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.mpython_display_DispChar_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html?highlight=oled#oled.DispChar';

Blockly.Msg.mpython_display_DispChar_5lines_MESSAGE0 = 'OLED 第%1 行显示 %2 模式 %3 %4';
Blockly.Msg.mpython_display_DispChar_5lines_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.mpython_line1 = '1';
Blockly.Msg.mpython_line2 = '2';
Blockly.Msg.mpython_line3 = '3';
Blockly.Msg.mpython_line4 = '4';
Blockly.Msg.mpython_line5 = '5';
Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_MESSAGE0 = 'OLED 清除第 %1 行';
Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_HELPURL = '';

Blockly.Msg.mpython_display_fill_0 = '清空';
Blockly.Msg.mpython_display_fill_1 = '全亮';
Blockly.Msg.mpython_display_invert_0 = '黑底';
Blockly.Msg.mpython_display_invert_1 = '白底';
Blockly.Msg.mpython_display_show = '生效';
Blockly.Msg.mpython_display_fill_MESSAGE0 = 'OLED 显示 %1';
Blockly.Msg.mpython_display_fill_TOOLTIP = '';

Blockly.Msg.mpython_display_pixel_0 = '暗';
Blockly.Msg.mpython_display_pixel_1 = '亮';
Blockly.Msg.mpython_display_pixel_MESSAGE0 = '描点%1 x %2 y %3 状态 %4';
Blockly.Msg.mpython_display_pixel_TOOLTIP = '';

Blockly.Msg.mpython_display_hline_0 = '擦除';
Blockly.Msg.mpython_display_hline_1 = '绘制';
Blockly.Msg.mpython_display_hline_MESSAGE0 = '%1 水平线%2 x%3  y%4 长度%5';
Blockly.Msg.mpython_display_hline_TOOLTIP = '';

Blockly.Msg.mpython_ProgressBar_MESSAGE0 = '进度条%1 x%2  y%3 宽%4 高%5 进度%6';
Blockly.Msg.mpython_ProgressBar_TOOLTIP = '';

Blockly.Msg.mpython_stripBar_MESSAGE0 = '柱状条%1 %2 %3 x%4 y%5 宽%6 高%7 进度%8';
Blockly.Msg.mpython_stripBar_TOOLTIP = '';

Blockly.Msg.MPYTHON_QR_CODE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/gui.html#gui.UI.qr_code';
Blockly.Msg.MPYTHON_QR_CODE_TOOLTIP = '';
Blockly.Msg.MPYTHON_QR_CODE_MESSAGE0 = '坐标%1 x %2 y %3 绘制二维码 %4 %5';

Blockly.Msg.MPYTHON_DISPLAY_MODE_0 = '擦除';
Blockly.Msg.MPYTHON_DISPLAY_MODE_1 = '绘制';

Blockly.Msg.MPYTHON_DISPLAY_HOLLOW = '空心';
Blockly.Msg.MPYTHON_DISPLAY_SOLID = '实心';

Blockly.Msg.MPYTHON_DISPLAY_HVLINE_MESSAGE0 = '%1 %2 %3线 %4 x %5 y %6 长度 %7';
Blockly.Msg.MPYTHON_DISPLAY_HVLINE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DISPLAY_SHAPE_RECT_MESSAGE0 = ' %1 %2 %3矩形 %4x %5 y %6 宽 %7 高 %8';
Blockly.Msg.MPYTHON_DISPLAY_SHAPE_RECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_DISPLAY_SHAPE_CIRCLE_MESSAGE0 = '%1 %2 %3圆 %4 x %5 y %6 半径 %7';
Blockly.Msg.MPYTHON_DISPLAY_SHAPE_CIRCLE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DISPLAY_SHAPE_TRIANGLE_MESSAGE0 = ' %1 %2三角 %3 x1 %4 y1 %5 x2 %6 y2 %7 x3 %8 y3 %9';
Blockly.Msg.MPYTHON_DISPLAY_SHAPE_TRIANGLE_TOOLTIP = '';

Blockly.Msg.MPYTHON_RGB_0 = '0 #';
Blockly.Msg.MPYTHON_RGB_1 = '1 #';
Blockly.Msg.MPYTHON_RGB_2 = '2 #';
Blockly.Msg.MPYTHON_RGB_3 = '3 #';
Blockly.Msg.MPYTHON_RGB_4 = '4 #';
Blockly.Msg.MPYTHON_RGB_5 = '5 #';
Blockly.Msg.MPYTHON_RGB_6 = '6 #';
Blockly.Msg.MPYTHON_RGB_7 = '7 #';
Blockly.Msg.MPYTHON_RGB_8 = '8 #';
Blockly.Msg.MPYTHON_RGB_9 = '9 #';
Blockly.Msg.MPYTHON_RGB_10 = '10 #';
Blockly.Msg.MPYTHON_RGB_11 = '11 #';
Blockly.Msg.MPYTHON_RGB_12 = '12 #';
Blockly.Msg.MPYTHON_RGB_13 = '13 #';
Blockly.Msg.MPYTHON_RGB_14 = '14 #';
Blockly.Msg.MPYTHON_RGB_15 = '15 #';
Blockly.Msg.MPYTHON_RGB_16 = '16 #';
Blockly.Msg.MPYTHON_RGB_17 = '17 #';
Blockly.Msg.MPYTHON_RGB_18 = '18 #';
Blockly.Msg.MPYTHON_RGB_19 = '19 #';
Blockly.Msg.MPYTHON_RGB_20 = '20 #';
Blockly.Msg.MPYTHON_RGB_21 = '21 #';
Blockly.Msg.MPYTHON_RGB_22 = '22 #';
Blockly.Msg.MPYTHON_RGB_23 = '23 #';
Blockly.Msg.MPYTHON_RGB_24 = '24 #';
Blockly.Msg.MPYTHON_RGB_ALL = '所有';

Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_MESSAGE0 = '设置 %1 RGB 灯颜色为 %2';
Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_MESSAGE0 = '设置 %1 RGB 灯颜色为 R %2 G %3 B %4';
Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.MPYTHON_OFF_RGB_LIST_MESSAGE0 = '关闭 %1 RGB 灯';
Blockly.Msg.MPYTHON_OFF_RGB_LIST_TOOLTIP = '';

Blockly.Msg.MPYTHON_MUSIC_PLAY_MESSAGE0 = '播放音乐 %1 引脚 %2';
Blockly.Msg.MPYTHON_MUSIC_PLAY_TOOLTIP = DEVICE + '的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n播放内置的音乐';

Blockly.Msg.MPYTHON_MUSIC_PLAY_UNTIL_END_MESSAGE0 = '播放音乐 %1 直到完成 , 引脚 %2';
Blockly.Msg.MPYTHON_MUSIC_PLAY_UNTIL_END_TOOLTIP = DEVICE + '的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n播放内置的音乐';

Blockly.Msg.MPYTHON_MUSIC_GE_CHANG_ZU_GUO = '歌唱祖国';
Blockly.Msg.MPYTHON_MUSIC_DONG_FANG_HONG = '东方红';
Blockly.Msg.MPYTHON_MUSIC_CAI_YUN_ZHUI_YUE = '彩云追月';
Blockly.Msg.MPYTHON_MUSIC_ZOU_JIN_XIN_SHI_DAI = '走进新时代';
Blockly.Msg.MPYTHON_MUSIC_MO_LI_HUA = '茉莉花';
Blockly.Msg.MPYTHON_MUSIC_YI_MENG_SHAN_XIAO_DIAO = '沂蒙山小调';

Blockly.Msg.mpython_display_vline_MESSAGE0 = '%1 垂直线%2 x%3  y%4 长度%5';
Blockly.Msg.mpython_display_vline_TOOLTIP = '';

Blockly.Msg.mpython_display_line_MESSAGE0 = '%1 %2线 %3 x1 %4  y1 %5 x2 %6 y2 %7';
Blockly.Msg.mpython_display_line_TOOLTIP = '';

Blockly.Msg.mpython_display_rect_MESSAGE0 = '%1 边框%2 x %3 y %4 宽 %5 高 %6';
Blockly.Msg.mpython_display_rect_TOOLTIP = '';

Blockly.Msg.mpython_display_RoundRect_MESSAGE0 = '%1 %2弧角边框 %3 x %4 y %5 宽 %6 高 %7 半径%8';
Blockly.Msg.mpython_display_RoundRect_TOOLTIP = '';

Blockly.Msg.mpython_display_fill_rect_MESSAGE0 = '矩形%1 %2 x %3  y %4 宽 %5 高 %6 ';
Blockly.Msg.mpython_display_fill_rect_TOOLTIP = '';

Blockly.Msg.mpython_display_fill_circle_MESSAGE0 = '%1 实心圆%2 x %3  y %4 半径 %5';
Blockly.Msg.mpython_display_fill_circle_TOOLTIP = '';

Blockly.Msg.mpython_display_circle_MESSAGE0 = '%1 空心圆%2 x %3  y %4 半径 %5';
Blockly.Msg.mpython_display_circle_TOOLTIP = '';

Blockly.Msg.mpython_display_triangle_MESSAGE0 = '%1 空心三角%2 x%3  y%4 x2%5  y2%6 x3%7  y3%8';
Blockly.Msg.mpython_display_triangle_TOOLTIP = '';

Blockly.Msg.mpython_display_fill_triangle_MESSAGE0 = '%1 实心三角%2 x%3  y%4 x2%5  y2%6 x3%7  y3%8';
Blockly.Msg.mpython_display_fill_triangle_TOOLTIP = '';

Blockly.Msg.mpython_display_Bitmap_MESSAGE0 = '%1图像 %2 x%3 y%4 宽%5 高%6 16进制图像数据 %7';
Blockly.Msg.mpython_display_Bitmap_TOOLTIP = '将16进制图像数据显示在OLED屏的指定位置';

Blockly.Msg.MPYTHON_GET_PBM_DATA_MESSAGE0 = '内置图像 %1 模式%2';
Blockly.Msg.MPYTHON_GET_PBM_DATA_TOOLTIP = '支持*.pbm 或 *.bmp 格式的单色图像文件，获取指定路径的图像文件数据，返回一个元组对象。';
Blockly.Msg.MPYTHON_GET_PBM_DATA_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/gui.html#image';

Blockly.Msg.MPYTHON_GET_PBM_DATA_CUSTOM_MESSAGE0 = '自定义图像 %1 模式%2';

Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_MESSAGE0 = '在坐标%1 x %2  y %3 显示图像 %4';
Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_TOOLTIP = '支持*.pbm 或 *.bmp格式的单色图像文件';
Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/gui.html#image';

Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_MESSAGE0 = '在坐标 x %1  y %2 显示图像 %5 宽 %3 高 %4';
Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_TOOLTIP = '';
Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_HELPURL = '';

Blockly.Msg.mpython_horizontal = '水平';
Blockly.Msg.mpython_vertical = '垂直';
Blockly.Msg.mpython_display_FrameBuffer_MESSAGE0 = '构建帧 列表 %1  长 %2 宽 %3 扫描模式 %4';
Blockly.Msg.mpython_display_FrameBuffer_TOOLTIP = '用图像取模后数据的列表 ，创建128x64的帧缓存区，以储存图片帧';
/*
Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_MESSAGE0 = '在坐标 x %1  y %2 显示数码管字体 %3 大小 %4';
Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_HELPURL = '';
*/
Blockly.Msg.MPYTHON_FONT_DIGIFACE_11 = '仿数码管 11像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_16 = '仿数码管 16像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_21 = '仿数码管 21像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_30 = '仿数码管 30像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_44 = '仿数码管 44像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_30 = '仿数码管 斜体 30像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_42 = '仿数码管 斜体 42像素';
Blockly.Msg.MPYTHON_FONT_DVSM_12 = 'DejaVu Sans Mono 12像素';
Blockly.Msg.MPYTHON_FONT_DVSM_16 = 'DejaVu Sans Mono 16像素';
Blockly.Msg.MPYTHON_FONT_DVSM_21 = 'DejaVu Sans Mono 21像素';
Blockly.Msg.MPYTHON_FONT_DVSMB_12 = 'DejaVu Sans Mono 黑体 12像素';
Blockly.Msg.MPYTHON_FONT_DVSMB_16 = 'DejaVu Sans Mono 黑体 16像素';
Blockly.Msg.MPYTHON_FONT_DVSMB_21 = 'DejaVu Sans Mono 黑体 21像素';

Blockly.Msg.MPYTHON_FONT_WRAP = '自动换行';
Blockly.Msg.MPYTHON_FONT_NO_WRAP = '不换行';

Blockly.Msg.MPYTHON_FACE_1 = '心形';
Blockly.Msg.MPYTHON_FACE_2 = '心形（小）';
Blockly.Msg.MPYTHON_FACE_3 = '高兴';
Blockly.Msg.MPYTHON_FACE_4 = '笑脸';
Blockly.Msg.MPYTHON_FACE_5 = '伤心';
Blockly.Msg.MPYTHON_FACE_6 = '困惑';
Blockly.Msg.MPYTHON_FACE_7 = '生气';
Blockly.Msg.MPYTHON_FACE_8 = '睡着';
Blockly.Msg.MPYTHON_FACE_9 = '惊讶';
Blockly.Msg.MPYTHON_FACE_10 = '愚蠢';
Blockly.Msg.MPYTHON_FACE_11 = '极妙';
Blockly.Msg.MPYTHON_FACE_12 = '无聊';
Blockly.Msg.MPYTHON_FACE_ROCK = '石头';
Blockly.Msg.MPYTHON_FACE_PAPER = '布';
Blockly.Msg.MPYTHON_FACE_SCISSORS = '剪刀';
Blockly.Msg.MPYTHON_FACE_ROCK_S = '石头（小）';
Blockly.Msg.MPYTHON_FACE_PAPER_S = '布（小）';
Blockly.Msg.MPYTHON_FACE_SCISSORS_S = '剪刀（小）';

Blockly.Msg.MPYTHON_DISPLAY_FONT_MESSAGE0 = '坐标%1 x %2 y %3 显示 %4 %5 %6 %7';
Blockly.Msg.MPYTHON_DISPLAY_FONT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DISPLAY_FONT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpython.oled.DispChar_font';

Blockly.Msg.MPYTHON_DISPLAY2_FONT_MESSAGE0 = '坐标%1 x %2 y %3 显示 %4 %5 %6 %7';
Blockly.Msg.MPYTHON_DISPLAY2_FONT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DISPLAY2_FONT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpython.oled.DispChar_font';

Blockly.Msg.mpython_front = '正向';
Blockly.Msg.mpython_reverse = '反转';
Blockly.Msg.mpython_display_blit_MESSAGE0 = '显示帧 坐标x  %1  y %2';
Blockly.Msg.mpython_display_blit_TOOLTIP = '';

Blockly.Msg.mpython_front_reverse_MESSAGE0 = '像素点bit %1';
Blockly.Msg.mpython_front_reverse_TOOLTIP = '用于显示之前';

Blockly.Msg.mpython_images_append_MESSAGE0 = '动图显示 帧数%1  周期%2 长%3 宽%4';
Blockly.Msg.mpython_images_append_TOOLTIP = '上传至' + DEVICE + '的pbm图片需命名为IMAGE.数字，后缀为pbm。如：IMAGE.1.pbm。帧数为7则数字为1至7';

Blockly.Msg.mpython_button_is_pressed_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#button-a-b';
Blockly.Msg.mpython_button_is_pressed_MESSAGE0 = '按键%1 被按下';
Blockly.Msg.mpython_button_is_pressed_TOOLTIP = '';

Blockly.Msg.mpython_button_both_pressed_MESSAGE0 = 'AB按键都按下';
Blockly.Msg.mpython_button_both_pressed_TOOLTIP = '';

Blockly.Msg.mpython_touchPad_value_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.TouchPad.html#touchpad';
Blockly.Msg.mpython_touchPad_value_MESSAGE0 = '按键%1 被触摸';
Blockly.Msg.mpython_touchPad_value_TOOLTIP = '';

Blockly.Msg.mpython_touchPad_value_num_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.TouchPad.html#touchpad';
Blockly.Msg.mpython_touchPad_value_num_MESSAGE0 = '按键%1 触摸值';
Blockly.Msg.mpython_touchPad_value_num_TOOLTIP = '';

Blockly.Msg.mpython_read_digital_MESSAGE0 = '读取引脚%1 数字值';
Blockly.Msg.mpython_read_digital_TOOLTIP = '';

Blockly.Msg.mpython_read_DS18B20_MESSAGE0 = 'DS18B20 防水温度传感器 引脚 %1';
Blockly.Msg.mpython_read_DS18B20_TOOLTIP = '';
Blockly.Msg.mpython_read_DS18B20_HELPURL = 'http://docs.micropython.org/en/latest/esp32/quickref.html?highlight=onewire#onewire-driver';

Blockly.Msg.MPYTHON_MLX90615_SET_HELPURL = '';
Blockly.Msg.MPYTHON_MLX90615_SET_MESSAGE0 = 'MLX90615 非接触测温传感器 设置发射系数%1';
Blockly.Msg.MPYTHON_MLX90615_SET_TOOLTIP = '';

Blockly.Msg.MPYTHON_MLX90615_GET_HELPURL = '';
Blockly.Msg.MPYTHON_MLX90615_GET_MESSAGE0 = 'MLX90615 非接触测温传感器 获取系数';
Blockly.Msg.MPYTHON_MLX90615_GET_TOOLTIP = '';

Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_HELPURL = '';
Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_MESSAGE0 = 'MLX90615 非接触测温传感器 获取测温';
Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_TOOLTIP = '';

Blockly.Msg.MPYTHON_EXTEND_ADD_BOX_BME280_HELPURL = '';
Blockly.Msg.MPYTHON_EXTEND_ADD_BOX_BME280_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_EXTEND_ADD_BOX_BME280_TOOLTIP = '';

Blockly.Msg.mpython_set_digital_MESSAGE0 = '设置引脚 %2 数字值为 %1';
Blockly.Msg.mpython_set_digital_TOOLTIP = '';

Blockly.Msg.mpython_read_analog_MESSAGE0 = '读取引脚 %1 模拟值';
Blockly.Msg.mpython_read_analog_TOOLTIP = '';

Blockly.Msg.mpython_set_analog_MESSAGE0 = '设置引脚 %2 模拟值（PWM）为 %1';
Blockly.Msg.mpython_set_analog_TOOLTIP = '模拟输出是通过IO引脚输出脉宽调制信号，输出指定的电压值，简称PWM。';

Blockly.Msg.mpython_set_RGB_MESSAGE0 = '设置 %1 号 RGB 灯颜色为 R %2 G %3 B %4';
Blockly.Msg.mpython_set_RGB_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.mpython_set_RGB_color_MESSAGE0 = '设置 %1 号 RGB 灯颜色为 %2';
Blockly.Msg.mpython_set_RGB_color_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.mpython_set_RGB_all_MESSAGE0 = '设置所有 RGB 灯颜色为 R %1 G %2 B %3';
Blockly.Msg.mpython_set_RGB_all_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.mpython_set_RGB_color_all_MESSAGE0 = '设置所有 RGB 灯颜色为 %1';
Blockly.Msg.mpython_set_RGB_color_all_TOOLTIP = '原生亮度的 1/30 能较好显示色差';

Blockly.Msg.mpython_fresh_RGB_MESSAGE0 = 'RGB 灯设置生效';
Blockly.Msg.mpython_fresh_RGB_TOOLTIP = '';

Blockly.Msg.mpython_off_RGB_MESSAGE0 = '关闭 RGB 灯';
Blockly.Msg.mpython_off_RGB_TOOLTIP = '';

Blockly.Msg.mpython_buzz_state_MESSAGE0 = '停止播放音乐';
Blockly.Msg.mpython_buzz_state_TOOLTIP = '';

Blockly.Msg.mpython_buzz_freq_MESSAGE0 = '播放连续音调 %1 引脚 %2';
Blockly.Msg.mpython_buzz_freq_TOOLTIP = DEVICE + '的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n桌面机器人的蜂鸣器引脚是P28';

Blockly.Msg.mpython_buzz_tone_MESSAGE0 = '播放音调 %1';
Blockly.Msg.mpython_buzz_tone_TOOLTIP = '';

Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_TOOLTIP = DEVICE + '的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n桌面机器人的蜂鸣器引脚是P28';
Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_MESSAGE0 = '播放音符 %1 引脚 %2';

Blockly.Msg.MPYTHON_MUSIC_TONE_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_TONE_TOOLTIP = '';
Blockly.Msg.MPYTHON_MUSIC_TONE_MESSAGE0 = '音调 %1';

Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_TOOLTIP = '';
Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_MESSAGE0 = '音符 %1 节拍 %2';

Blockly.Msg.MPYTHON_MUSIC_TICK_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_TICK_TOOLTIP = '';
Blockly.Msg.MPYTHON_MUSIC_TICK_MESSAGE0 = '节拍 %1';

Blockly.Msg.MPYTHON_4_LINES_HELPURL = '';
Blockly.Msg.MPYTHON_4_LINES_TOOLTIP = '';
Blockly.Msg.MPYTHON_4_LINES_MESSAGE0 = '%1';

Blockly.Msg.NUMBER_1 = '1';
Blockly.Msg.NUMBER_1_2 = '1/2';
Blockly.Msg.NUMBER_1_4 = '1/4';
Blockly.Msg.NUMBER_2 = '2';
Blockly.Msg.NUMBER_4 = '4';

Blockly.Msg.mpython_read_sound_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id3';
Blockly.Msg.mpython_read_sound_MESSAGE0 = '声音值';
Blockly.Msg.mpython_read_sound_TOOLTIP = '';

Blockly.Msg.mpython_read_light_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id3';
Blockly.Msg.mpython_read_light_MESSAGE0 = '光线值';
Blockly.Msg.mpython_read_light_TOOLTIP = '';

Blockly.Msg.mpython_accelerometer_get_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.mpython_accelerometer_get_MESSAGE0 = '%1 轴加速度';
Blockly.Msg.mpython_accelerometer_get_TOOLTIP = '';
Blockly.Msg.mpython_accelerometer_get_z_MESSAGE0 = 'z轴加速度';
Blockly.Msg.mpython_accelerometer_get_z_TOOLTIP = '';
Blockly.Msg.mpython_accelerometer_get_y_MESSAGE0 = 'y轴加速度';
Blockly.Msg.mpython_accelerometer_get_y_TOOLTIP = '';
Blockly.Msg.mpython_accelerometer_get_x_MESSAGE0 = 'x轴加速度';
Blockly.Msg.mpython_accelerometer_get_x_TOOLTIP = '';


Blockly.Msg.mpython_accelerometer_SUM_MESSAGE0 = '三轴加速度大小';

Blockly.Msg.mpython_gyroscope_get_HELPURL = '';
Blockly.Msg.mpython_gyroscope_get_MESSAGE0 = '%1 轴角速度';
Blockly.Msg.mpython_gyroscope_get_TOOLTIP = 'v2.3版本以上掌控版适用';

Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_16_DPS = '±16dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_32_DPS = '±32dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_64_DPS = '±64dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_128_DPS = '±128dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_256_DPS = '±256dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_512_DPS = '±512dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_1024_DPS = '±1024dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_2048_DPS = '±2048dps';

Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_2G = '±2g';
Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_4G = '±4g';
Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_8G = '±8g';
Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_16G = '±16g';

Blockly.Msg.MPYTHON_ACCELEROMETER_RES_10_BIT = '10bits';
Blockly.Msg.MPYTHON_ACCELEROMETER_RES_12_BIT = '12bits';
Blockly.Msg.MPYTHON_ACCELEROMETER_RES_14_BIT = '14bits';

Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id5';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_TOOLTIP = '设置加速度范围，默认为 ±2g。';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_MESSAGE0 = '设置加速度范围为 %1';

Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_HELPURL = '';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_TOOLTIP = '设置角速度范围，默认为 ±256dps。仅适用于' + DEVICE + '2.3及以上版本';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_MESSAGE0 = '设置角速度范围为 %1';

Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id5';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_TOOLTIP = '设置加速度分辨率，默认为 10bits。';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_MESSAGE0 = '设置加速度分辨率为 %1';

Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id5';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_TOOLTIP = '校准加速度计的3个轴(x,y,z)的加速值偏差。\n一般情况下无需校准，只有遇到加速度偏差较大时才要校准。\n x , y , z 为调整偏差值，可修正范围为 ±1g。\n注意：v2.3版本以前校准数据断电后不会保存。';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_MESSAGE0 = '校准加速度值 %1 X轴偏差 %2 Y轴偏差 %3 Z轴偏差 %4';

Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_HELPURL = '';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_TOOLTIP = '校准陀螺仪角速度计的3个轴(x,y,z)的角速度值偏差。\n一般情况下无需校准，只有遇到角速度偏差较大时才要校准。\n x , y , z 为调整偏差值，可修正范围为 ±1024dps。\n注意：v2.3版本以后适用';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_MESSAGE0 = '校准角速度值 %1 X轴偏差 %2 Y轴偏差 %3 Z轴偏差 %4';

Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#magnetic';
Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_TOOLTIP = '仅适用于' + DEVICE + '2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_MESSAGE0 = '%1 轴 磁力';

Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpython.magnetic.get_heading';
Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_TOOLTIP = '仅适用于' + DEVICE + '2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_MESSAGE0 = '指南针方向';

Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpython.magnetic.calibrate';
Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_TOOLTIP = '仅适用于' + DEVICE + '2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_MESSAGE0 = '校准指南针';

Blockly.Msg.MPYTHON_MAGNETIC_PEELING_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#magnetic';
Blockly.Msg.MPYTHON_MAGNETIC_PEELING_TOOLTIP = '仅适用于' + DEVICE + '2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_PEELING_MESSAGE0 = '去除当前环境磁场';

Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#magnetic';
Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_TOOLTIP = '仅适用于' + DEVICE + '2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_MESSAGE0 = '磁场强度';

Blockly.Msg.MPYTHON_TILT_ANGLE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1  ';
Blockly.Msg.MPYTHON_TILT_ANGLE_TOOLTIP = '';
Blockly.Msg.MPYTHON_TILT_ANGLE_MESSAGE0 = '%1 轴倾斜角';

Blockly.Msg.mpython_random_choice_MESSAGE0 = '返回随机项%1';
Blockly.Msg.mpython_random_choice_TOOLTIP = '以String格式，返回列表或字符串中的随机项';

Blockly.Msg.MACHINE_TIME_PULSE_US_HELPURL =
    'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.html?highlight=machine.time_pulse_us#machine.time_pulse_us';
Blockly.Msg.MACHINE_TIME_PULSE_US_MESSAGE0 = '%1 外部 %2 电平持续时间(微秒)';
Blockly.Msg.MACHINE_TIME_PULSE_US_TOOLTIP = "";

Blockly.Msg.BYTES = '字节';

//重新制作I2C模块
Blockly.Msg.MPYTHON_I2C_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html#machine.I2C';
Blockly.Msg.MPYTHON_I2C_INIT_MESSAGE0 = '初始化i2c 速率%1';
Blockly.Msg.MPYTHON_I2C_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_DEV_INIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html#machine.I2C';
Blockly.Msg.MPYTHON_I2C_DEV_INIT_MESSAGE0 = '初始化%1 SCL %2 SDA %3 速率 %4';
Blockly.Msg.MPYTHON_I2C_DEV_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_SCAN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#machine.I2C.scan';
Blockly.Msg.MPYTHON_I2C_SCAN_MESSAGE0 = '%1 扫描地址';
Blockly.Msg.MPYTHON_I2C_SCAN_TOOLTIP = '返回一个数组对象';

Blockly.Msg.MPYTHON_I2C_DEINIT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#machine.I2C.deinit';
Blockly.Msg.MPYTHON_I2C_DEINIT_MESSAGE0 = '关闭%1总线';
Blockly.Msg.MPYTHON_I2C_DEINIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_WRITETO_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id4';
Blockly.Msg.MPYTHON_I2C_WRITETO_MESSAGE0 = '从%1 %5 地址%2 写入%3 停止位%4';
Blockly.Msg.MPYTHON_I2C_WRITETO_TOOLTIP = '地址：Number\n写入：Number、String';

Blockly.Msg.MPYTHON_I2C_READFROM_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id4';
Blockly.Msg.MPYTHON_I2C_READFROM_MESSAGE0 = '从%1 %5 地址%2 读取 字节数%3 停止位%4';
Blockly.Msg.MPYTHON_I2C_READFROM_TOOLTIP = '地址：Number\n返回：读取数据的 bytes 对象的字符串';

Blockly.Msg.MPYTHON_I2C_READFROM_INTO_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id4';
Blockly.Msg.MPYTHON_I2C_READFROM_INTO_MESSAGE0 = '从%1 %6 地址%2 读入缓存区%3 字节数%4 停止位%5';
Blockly.Msg.MPYTHON_I2C_READFROM_INTO_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_WRITETO_MEN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id5';
Blockly.Msg.MPYTHON_I2C_WRITETO_MEN_MESSAGE0 = '从%1 %5 地址%2 寄存器%4 写入%3';
Blockly.Msg.MPYTHON_I2C_WRITETO_MEN_TOOLTIP = '地址：Number\n写入：Number、String';

Blockly.Msg.MPYTHON_I2C_READFROM_MEN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id5';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_MESSAGE0 = '从%1 %5 地址%2 寄存器%4 读取 字节数%3';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_TOOLTIP = '地址：Number\n返回：读取数据的 bytes 对象的字符串';

Blockly.Msg.MPYTHON_I2C_READFROM_MEN_INTO_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id5';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_INTO_MESSAGE0 = '从%1 %6 地址%2 寄存器%5 读入缓存区%3 字节数%4';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_INTO_TOOLTIP = '地址：Number\n返回：读取数据的 bytes 对象的字符串';




Blockly.Msg.mpython_print_MESSAGE0 = '调试输出 %1';
Blockly.Msg.mpython_print_TOOLTIP = '通过串口调试，输出字符串';

Blockly.Msg.MPYTHON_PRINT_TO_CHART_TOOLTIP = "";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_EMPTY_TITLE = "打印数据到图表";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_INPUT_WITH = "打印数据到图表";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TITLE = "数据";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TITLE_ADD = "数据内容";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TOOLTIP = "";

Blockly.Msg.MPYTHON_INIT_CHART_TOOLTIP = "";
Blockly.Msg.MPYTHON_INIT_CHART_EMPTY_TITLE = "初始化图表列标题";
Blockly.Msg.MPYTHON_INIT_CHART_INPUT_WITH = "初始化图表列标题";
Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TITLE = "标题";
Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TITLE_ADD = "数据列标题";
Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TOOLTIP = "";



Blockly.Msg.MPYTHON_MS = '毫秒';
Blockly.Msg.MPYTHON_US = '微秒';

Blockly.Msg.MPYTHON_TIME_DIFFERENCE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id5';
Blockly.Msg.MPYTHON_TIME_DIFFERENCE_MESSAGE0 = '返回运行时间差 开始时间 %1 结束时间 %2';
Blockly.Msg.MPYTHON_TIME_DIFFERENCE_TOOLTIP = '测量连续调用ticks_ms()、ticks_us()间的周期';

Blockly.Msg.MPYTHON_TYPE_HELPURL = '';
Blockly.Msg.MPYTHON_TYPE_MESSAGE0 = '值 %1 的类型';
Blockly.Msg.MPYTHON_TYPE_TOOLTIP = '';

Blockly.Msg.MPYTHON_TYPE_IS_HELPURL = '';
Blockly.Msg.MPYTHON_TYPE_IS_MESSAGE0 = '值 %1 的类型为 %2';
Blockly.Msg.MPYTHON_TYPE_IS_TOOLTIP = '';

Blockly.Msg.MPYTHON_EVAL_HELPURL = '';
Blockly.Msg.MPYTHON_EVAL_MESSAGE0 = '计算表达式 %1 的结果';
Blockly.Msg.MPYTHON_EVAL_TOOLTIP = '计算字符串表达式，并返回结果';

Blockly.Msg.MPYTHON_RETURN_HELPURL = '';
Blockly.Msg.MPYTHON_RETURN_MESSAGE0 = '返回 %1';
Blockly.Msg.MPYTHON_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_AMBIENTLIGHT_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id4';
Blockly.Msg.MPYTHON_BLUEBIT_AMBIENTLIGHT_MESSAGE0 = 'I2C数字光线';
Blockly.Msg.MPYTHON_BLUEBIT_AMBIENTLIGHT_TOOLTIP = '';

Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_MESSAGE0 = 'Wi-Fi配置信息';
Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_TOOLTIP = '以元组形式返回所有wifi配置信息';

Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_MESSAGE0 = '已连接到 Wi-Fi';
Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_INIT_ASSISTANT_WIFI_HELPURL = '';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_WIFI_MESSAGE0 = '语音助手 Wi-Fi连接%1 名称 %2 密码 %3';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_WIFI_TOOLTIP = DEVICE + '通过串口把WIF传给语音助手';

Blockly.Msg.MPYTHON_INIT_ASSISTANT_PROFILE_HELPURL = '';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_PROFILE_TOOLTIP = '需要先在文件系统将文件上传到板。';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_PROFILE_MESSAGE0 = '语音助手 读取 文本文件 %1';

Blockly.Msg.MPYTHON_BLUEBIT_SEG_DISPLAY_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id6';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_DISPLAY_MESSAGE0 = '数码管显示 %1';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_DISPLAY_TOOLTIP = '-999~9999';

Blockly.Msg.MPYTHON_BLUEBIT_SEG_CLEAR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id6';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_CLEAR_MESSAGE0 = '清空数码管';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_CLEAR_TOOLTIP = '';

Blockly.Msg.MPYTHON_MACHINE_RESET_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.html#module-machine';
Blockly.Msg.MPYTHON_MACHINE_RESET_MESSAGE0 = '复位';
Blockly.Msg.MPYTHON_MACHINE_RESET_TOOLTIP = '与按下外部 RESET按键效果一样';

Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id3';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_MESSAGE0 = 'I2C RGB 颜色 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id3';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_MESSAGE0 = 'I2C RGB 颜色';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_TOOLTIP = '以列表形式返回';

Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HSV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id3';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HSV_MESSAGE0 = 'I2C HSV 颜色 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HSV_TOOLTIP = '色调（H），饱和度（S），明度（V）';

Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HSV_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id3';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HSV_MESSAGE0 = 'I2C HSV 颜色';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HSV_TOOLTIP = '色调（H），饱和度（S），明度（V）';

Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_MESSAGE0 = 'I2C力传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_ELECTRICITY_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ELECTRICITY_MEASURE_MESSAGE0 = 'I2C电流传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ELECTRICITY_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_VOLTAGE_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_VOLTAGE_MEASURE_MESSAGE0 = 'I2C电压传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_VOLTAGE_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_MAGNETIC_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MAGNETIC_MEASURE_MESSAGE0 = 'I2C磁场传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MAGNETIC_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_PH_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PH_MEASURE_MESSAGE0 = 'I2C PH传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PH_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_TDS_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_TDS_MEASURE_MESSAGE0 = 'I2C 电导率传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_TDS_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_PRESSURE_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PRESSURE_MEASURE_MESSAGE0 = 'I2C气压传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PRESSURE_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_PHOTOGATE_TIMER_MEASURE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/bluebit.html#id9';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PHOTOGATE_TIMER_MEASURE_MESSAGE0 = 'I2C光电门传感器  拨码 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PHOTOGATE_TIMER_MEASURE_TOOLTIP = 'I2C地址与编码开关的需要对应';

Blockly.Msg.MPYTHON_BLUEBIT_GET_MOTORPEED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MOTORPEED_MESSAGE0 = '扩展板 电机速度 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MOTORPEED_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_LED_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_M1M2_LED_OFF_MESSAGE0 = '扩展板 关闭满天星灯带 %1';
Blockly.Msg.MPYTHON_M1M2_LED_OFF_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_LED_ON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_M1M2_LED_ON_MESSAGE0 = '扩展板 设满天星灯带 %1 亮度 %2';
Blockly.Msg.MPYTHON_M1M2_LED_ON_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_ON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_M1M2_ON_MESSAGE0 = '扩展板 打开%1电源 输出功率%2';
Blockly.Msg.MPYTHON_M1M2_ON_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_M1M2_OFF_MESSAGE0 = '扩展板 关闭%1电源';
Blockly.Msg.MPYTHON_M1M2_OFF_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_ON_TIME_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_M1M2_ON_TIME_MESSAGE0 = '扩展板 打开%1电源 输出功率%2 持续%3秒';
Blockly.Msg.MPYTHON_M1M2_ON_TIME_TOOLTIP = "";

Blockly.Msg.MPYTHON_MUSIC_PIN_P6 = '默认';
Blockly.Msg.MPYTHON_MUSIC_PIN_P6_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_PIN_P6_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_MUSIC_PIN_P6_TOOLTIP = DEVICE + "的蜂鸣器引脚是[默认]P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28";

Blockly.Msg.MPYTHON_MUSIC_PIN_P28 = '默认';
Blockly.Msg.MPYTHON_MUSIC_PIN_P28_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_PIN_P28_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_MUSIC_PIN_P28_TOOLTIP = DEVICE + "的蜂鸣器引脚是P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是[默认]P28";

Blockly.Msg.MPYTHON_SLEEP_MESSAGE0 = '等待 %1 %2';
Blockly.Msg.MPYTHON_SLEEP_TOOLTIP = '在进行下一个命令前，等待设定的时间。\n1秒(s) = 1,000毫秒(ms)\n1秒(s) = 1,000,000微秒(μs)\n毫秒，符号ms（millisecond）\n微秒，符号μs（microsecond）';

//Blockly.Msg.MICROBIT_MICROBIT_SLEEP_MESSAGE0 = '等待 %1 %2';
//Blockly.Msg.MICROBIT_MICROBIT_SLEEP_TOOLTIP = '在进行下一个命令前，等待设定的时间。\n1秒(s) = 1,000毫秒(ms)\n1秒(s) = 1,000,000微秒(μs)\n毫秒，符号ms（millisecond）\n微秒，符号μs（microsecond）';
//Blockly.Msg.MICROBIT_MICROBIT_SLEEP_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_MESSAGE0 = '运行时间';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_TOOLTIP = '获取开机或复位后的运行时间（毫秒）。';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_MESSAGE0 = '温度';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_TOOLTIP = '获取 micro:bit 的温度（℃）。';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0 = '播放音乐 %1 等待 %2 循环 %3 引脚 %4';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP = DEVICE + '的蜂鸣器引脚是P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n桌面机器人的蜂鸣器引脚是P28。\n播放内置的音乐，可以设置等待模式和循环播放。';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies';
Blockly.Msg.MICROBIT_MUSIC_PITCH_MESSAGE0 = '播放音调 %1 %2 延时  %3 毫秒 引脚 %4';
Blockly.Msg.MICROBIT_MUSIC_PITCH_TOOLTIP = DEVICE + '的蜂鸣器引脚是P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n桌面机器人的蜂鸣器引脚是P28\n在设定的时间长度里播放音调。';
Blockly.Msg.MICROBIT_MUSIC_PITCH_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0 = '引脚 %5 播放音符列表 %1 等待 %2 %3 循环 %4';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP = '播放音符列表，如C4:4、G4:8等，音符为字符串形式。\n' + DEVICE + '的蜂鸣器引脚是P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n桌面机器人的蜂鸣器引脚是P28';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/basics/buzz.html';
Blockly.Msg.MICROBIT_MUSIC_RESET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset';
Blockly.Msg.MICROBIT_MUSIC_RESET_MESSAGE0 = '恢复音乐设置';
Blockly.Msg.MICROBIT_MUSIC_RESET_TOOLTIP = '将所有音乐设置 (当前节拍, 音阶和周期) 恢复成默认值。';
Blockly.Msg.MICROBIT_MUSIC_STOP_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop';
Blockly.Msg.MICROBIT_MUSIC_STOP_MESSAGE0 = '停止播放音乐 引脚 %1';
Blockly.Msg.MICROBIT_MUSIC_STOP_TOOLTIP = DEVICE + '的蜂鸣器引脚是P6\n掌控板3.0的蜂鸣器引脚是[默认]P12\n乐动掌控2.0的蜂鸣器引脚是[默认]P12\n人工智能交互实验箱的蜂鸣器引脚是P28\n桌面机器人的蜂鸣器引脚是P28';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_MESSAGE0 = '设置每一拍等同 %1 分音符，每分钟节拍数 %2';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_TOOLTIP = '设置回放速度 (节拍)。一定数量的滴答代表一拍，每拍每分钟播放次数 (BPM 每分钟节拍)。';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_MESSAGE0 = '设置播放速度为 %1 倍';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_TOOLTIP = '4分音符为1拍，每分钟节拍数默认120，为1倍的播放速度';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_MESSAGE0 = '获取当前节拍';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_TOOLTIP = '获取当前节拍: 每节拍滴答数, 每分钟节拍 (BPM)。';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_MESSAGE0 = '使用 引脚 %1 控制， neopixel 彩灯数  %2 ';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_TOOLTIP = '控制 neopixels 彩灯。需要设定 neopixels 彩灯数量和控制脚。';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_MESSAGE0 = '清除 neopixels 彩灯 %1';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_TOOLTIP = '清除所有 neopixels 彩灯';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_MESSAGE0 = '显示 neopixels 彩灯 %1';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_TOOLTIP = '显示 / 更新全部 neopixels 彩灯。';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_MESSAGE0 = 'neopixels 彩灯控制 %1 设置位置 %2 红色 %3 绿色 %4 蓝色 %5';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_TOOLTIP = '更新指定的 neopixel 彩灯的红、绿、蓝 (RGB) 颜色';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels';
Blockly.Msg.MICROBIT_PIN_TOUCHED_MESSAGE0 = '引脚 %1 被触摸';
Blockly.Msg.MICROBIT_PIN_TOUCHED_TOOLTIP = '如果引脚被触摸将返回 “真”。';
Blockly.Msg.MICROBIT_PIN_TOUCHED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched';
Blockly.Msg.MICROBIT_PIN_WAS_PRESSED_MESSAGE0 = '引脚 %1 曾经被触摸';
Blockly.Msg.MICROBIT_PIN_WAS_PRESSED_TOOLTIP = '如果引脚曾经被触摸将返回 “真”。';
Blockly.Msg.MICROBIT_PIN_WAS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.was_pressed';
Blockly.Msg.MICROBIT_PIN_GET_PRESSES_MESSAGE0 = '引脚 %1 被触摸的次数';
Blockly.Msg.MICROBIT_PIN_GET_PRESSES_TOOLTIP = '返回被触摸的次数，然后清零。';
Blockly.Msg.MICROBIT_PIN_GET_PRESSES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.get_presses';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_MESSAGE0 = '读取引脚 %1 模拟电压';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_TOOLTIP = '读取引脚的模拟输入电压。';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_MESSAGE0 = '设置模拟量 %1 到引脚 %2';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_TOOLTIP = '写入模拟参数到指定引脚上。';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_MESSAGE0 = '读取引脚 %1 的数字输入';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_TOOLTIP = '读取引脚的数字输入 (真 或 假)。';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_MESSAGE0 = '设置数字输出 %1 到引脚 %2';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_TOOLTIP = '写入数字量 (真 或 假) 到指定引脚。';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital';
Blockly.Msg.MICROBIT_RADIO_ON_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on';
Blockly.Msg.MICROBIT_RADIO_ON_MESSAGE0 = '打开无线广播';
Blockly.Msg.MICROBIT_RADIO_ON_TOOLTIP = '打开无线广播。需要明确声明调用，因为它会消耗更多功率和占用更多内存。';
Blockly.Msg.MICROBIT_RADIO_OFF_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off';
Blockly.Msg.MICROBIT_RADIO_OFF_MESSAGE0 = '关闭无线广播';
Blockly.Msg.MICROBIT_RADIO_OFF_TOOLTIP = '关闭无线广播，节省功耗和内存。';
Blockly.Msg.MICROBIT_RADIO_CONFIG_MESSAGE0 = '配置无线广播消息长度 %1 %2 最大队列数量 %3 %4 信道 %5 %6 广播功率 %7 %8 地址 %9 %10 组 %11 %12 数据速率 %13';
Blockly.Msg.MICROBIT_RADIO_CONFIG_TOOLTIP = '配置无线广播。\n 长度指单个消息的最大长度； \n 队列指可以存放在消息队列中消息的数量； \n 信道指无线广播使用的无线频率； \n 功率指发射广播信号的强度； \n 地址：32位值； \n 组：8位值(0-255)； \n 数据速率指数据传输的速度。';
Blockly.Msg.MICROBIT_RADIO_CONFIG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config';
Blockly.Msg.MICROBIT_RADIO_RESET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset';
Blockly.Msg.MICROBIT_RADIO_RESET_MESSAGE0 = '复位无线广播';
Blockly.Msg.MICROBIT_RADIO_RESET_TOOLTIP = '恢复无线广播到默认设置。';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_MESSAGE0 = '发送消息 %1';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_TOOLTIP = '广播文字消息。';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send';
Blockly.Msg.MICROBIT_RADIO_SEND_BYTES_MESSAGE0 = '发送字节 %1';
Blockly.Msg.MICROBIT_RADIO_SEND_BYTES_TOOLTIP = '广播字节。';
Blockly.Msg.MICROBIT_RADIO_SEND_BYTES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_MESSAGE0 = '接收消息';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_TOOLTIP = '接收消息。';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_BYTES_MESSAGE0 = '接收字节';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_BYTES_TOOLTIP = '接收字节。';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_BYTES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive';
Blockly.Msg.MICROBIT_SPEECH_SAY_MESSAGE0 = '说 %1';
Blockly.Msg.MICROBIT_SPEECH_SAY_TOOLTIP = '尝试说英语';
Blockly.Msg.MICROBIT_SPEECH_SAY_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_MESSAGE0 = '读 %1';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_TOOLTIP = '精确发音。';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes';
Blockly.Msg.MICROBIT_SPEECH_SING_MESSAGE0 = '唱 %1';
Blockly.Msg.MICROBIT_SPEECH_SING_TOOLTIP = '象机器人一样唱歌。';
Blockly.Msg.MICROBIT_SPEECH_SING_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing';

//MENUS
Blockly.Msg.MICROBIT_GESTURE_SHAKE = '摇晃';
Blockly.Msg.MICROBIT_GESTURE_UP = '上';
Blockly.Msg.MICROBIT_GESTURE_DOWN = '下';
Blockly.Msg.MICROBIT_GESTURE_LEFT = '左';
Blockly.Msg.MICROBIT_GESTURE_RIGHT = '右';
Blockly.Msg.MICROBIT_GESTURE_FACE_UP = '朝上';
Blockly.Msg.MICROBIT_GESTURE_FACE_DOWN = '朝下';
Blockly.Msg.MICROBIT_GESTURE_FREEFAIL = '自由下落';
Blockly.Msg.MICROBIT_IMAGE_HEART = '心形';
Blockly.Msg.MICROBIT_IMAGE_HEART_SMALL = '心(小)';
Blockly.Msg.MICROBIT_IMAGE_HAPPY = '高兴';
Blockly.Msg.MICROBIT_IMAGE_SMILE = '笑脸';
Blockly.Msg.MICROBIT_IMAGE_SAD = '伤心';
Blockly.Msg.MICROBIT_IMAGE_CONFUSED = '困惑';
Blockly.Msg.MICROBIT_IMAGE_ANGRY = '生气';
Blockly.Msg.MICROBIT_IMAGE_ASLEEP = '睡着';
Blockly.Msg.MICROBIT_IMAGE_SUPRISED = '惊讶';
Blockly.Msg.MICROBIT_IMAGE_SILLY = '愚蠢';
Blockly.Msg.MICROBIT_IMAGE_FABULOUS = '极妙';
Blockly.Msg.MICROBIT_IMAGE_MEH = '无聊';
Blockly.Msg.MICROBIT_IMAGE_YES = '是';
Blockly.Msg.MICROBIT_IMAGE_NO = '否';
Blockly.Msg.MICROBIT_IMAGE_CLOCK12 = '12点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK11 = '11点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK10 = '10点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK9 = '9点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK8 = '8点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK7 = '7点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK6 = '6点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK5 = '5点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK4 = '4点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK3 = '3点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK2 = '2点';
Blockly.Msg.MICROBIT_IMAGE_CLOCK1 = '1点';
Blockly.Msg.MICROBIT_IMAGE_ARROW_N = '箭头－北';
Blockly.Msg.MICROBIT_IMAGE_ARROW_NE = '箭头－东北';
Blockly.Msg.MICROBIT_IMAGE_ARROW_E = '箭头－东';
Blockly.Msg.MICROBIT_IMAGE_ARROW_SE = '箭头－东南';
Blockly.Msg.MICROBIT_IMAGE_ARROW_S = '箭头－南';
Blockly.Msg.MICROBIT_IMAGE_ARROW_SW = '箭头－西南';
Blockly.Msg.MICROBIT_IMAGE_ARROW_W = '箭头－西';
Blockly.Msg.MICROBIT_IMAGE_ARROW_NW = '箭头－西北';
Blockly.Msg.MICROBIT_IMAGE_TRIANGLE = '三角形';
Blockly.Msg.MICROBIT_IMAGE_TRIANGLE_LEFT = '左三角形';
Blockly.Msg.MICROBIT_IMAGE_CHESSBOARD = '棋盘';
Blockly.Msg.MICROBIT_IMAGE_DIAMOND = '菱形';
Blockly.Msg.MICROBIT_IMAGE_DIAMOND_SMALL = '菱形(小)';
Blockly.Msg.MICROBIT_IMAGE_SQUARE = '方形';
Blockly.Msg.MICROBIT_IMAGE_SQUARE_SMALL = '方形(小)';
Blockly.Msg.MICROBIT_IMAGE_RABBIT = '兔子';
Blockly.Msg.MICROBIT_IMAGE_COW = '牛';
Blockly.Msg.MICROBIT_IMAGE_MUSIC_CROTCHET = '四分音符';
Blockly.Msg.MICROBIT_IMAGE_MUSIC_QUAVER = '八分音符';
Blockly.Msg.MICROBIT_IMAGE_MUSIC_QUAVERS = '颤音';
Blockly.Msg.MICROBIT_IMAGE_PITCHFORK = '叉子';
Blockly.Msg.MICROBIT_IMAGE_XMAS = '圣诞树';
Blockly.Msg.MICROBIT_IMAGE_PACMAN = '吃豆人';
Blockly.Msg.MICROBIT_IMAGE_TARGET = '目标';
Blockly.Msg.MICROBIT_IMAGE_TSHIRT = 'T恤衫';
Blockly.Msg.MICROBIT_IMAGE_ROLLERSKATE = '轮滑';
Blockly.Msg.MICROBIT_IMAGE_DUCK = '鸭子';
Blockly.Msg.MICROBIT_IMAGE_HOUSE = '房子';
Blockly.Msg.MICROBIT_IMAGE_TORTOISE = '乌龟';
Blockly.Msg.MICROBIT_IMAGE_BUTTERFLY = '蝴蝶';
Blockly.Msg.MICROBIT_IMAGE_STICKFIGURE = '线条画';
Blockly.Msg.MICROBIT_IMAGE_GHOST = '幽灵';
Blockly.Msg.MICROBIT_IMAGE_SWORD = '宝剑';
Blockly.Msg.MICROBIT_IMAGE_GIRAFFE = '长颈鹿';
Blockly.Msg.MICROBIT_IMAGE_SKULL = '头';
Blockly.Msg.MICROBIT_IMAGE_UMBRELLA = '伞';
Blockly.Msg.MICROBIT_IMAGE_SNAKE = '蛇';
Blockly.Msg.MICROBIT_IMAGE_ALL_CLOCKS = '所有时钟';
Blockly.Msg.MICROBIT_IMAGE_ALL_ARROWS = '所有箭头';
Blockly.Msg.MICROBIT_PIN_SET_SERVO_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%88%B5%E6%9C%BA';
Blockly.Msg.MICROBIT_PIN_SET_SERVO_TOOLTIP = '设置舵机角度，范围为 0 ～ 180度';
Blockly.Msg.MICROBIT_PIN_SET_SERVO_MESSAGE0 = '设置舵机 引脚 %1 角度为 %2';
Blockly.Msg.MICROBIT_PIN_SET_MODE_HELPURL = '';
Blockly.Msg.MICROBIT_PIN_SET_MODE_TOOLTIP = '引脚模式有三种：悬空、上拉、下拉';
Blockly.Msg.MICROBIT_PIN_SET_MODE_MESSAGE0 = '设置引脚 %1 模式为 %2';
Blockly.Msg.MICROBIT_PIN_MODE_NO = '悬空';
Blockly.Msg.MICROBIT_PIN_MODE_UP = '上拉';
Blockly.Msg.MICROBIT_PIN_MODE_DOWN = '下拉';


//uart
Blockly.Msg.MICROBIT_UART_INIT_MESSAGE0 = '初始化串口波特率为 %3 TX为 %1 RX为 %2';
Blockly.Msg.MICROBIT_UART_INIT_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_INIT_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_ANY_MSG_RECEIVED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_ANY_MSG_RECEIVED_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_ANY_MSG_RECEIVED_MESSAGE0 = '串口接收到数据';
Blockly.Msg.MICROBIT_UART_READ_MSG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_READ_MSG_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_READ_MSG_MESSAGE0 = '读取串口 %1 字节';
Blockly.Msg.MICROBIT_UART_READ_MSG_TO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_READ_MSG_TO_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_READ_MSG_TO_MESSAGE0 = '读取串口 %1 字节存至 %2';
Blockly.Msg.MICROBIT_UART_WRITE_MSG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_WRITE_MSG_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_WRITE_MSG_MESSAGE0 = '串口发送数据 %1';
Blockly.Msg.MICROBIT_ALL_BYTES = "全部";
Blockly.Msg.MICROBIT_ALINE_BYTES = "一行";
//labplus
Blockly.Msg.LABPLUS_BUTTON_IS_PRESSED_MESSAGE0 = '引脚 %1 被触发';
Blockly.Msg.LABPLUS_BUTTON_IS_PRESSED_TOOLTIP = '如果指定按键按下返回 “真”，否则返回 “假”。';
Blockly.Msg.LABPLUS_BUTTON_IS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed';

Blockly.Msg.LABPLUS_BUTTON_WAS_PRESSED_MESSAGE0 = '引脚 %1 曾经被触发';
Blockly.Msg.LABPLUS_BUTTON_WAS_PRESSED_TOOLTIP = '如果按键曾经按下过返回 “真”，否则返回 “假”。';
Blockly.Msg.LABPLUS_BUTTON_WAS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed';

Blockly.Msg.LABPLUS_BUTTON_GET_PRESSES_MESSAGE0 = '引脚 %1 被触发过的次数';
Blockly.Msg.LABPLUS_BUTTON_GET_PRESSES_TOOLTIP = '返回按键按下的总次数，然后清除计数。';
Blockly.Msg.LABPLUS_BUTTON_GET_PRESSES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses';

Blockly.Msg.LABPLUS_LED_MESSAGE0 = '设置LED灯 引脚 %2 输出 %1';
Blockly.Msg.LABPLUS_LED_TOOLTIP = '';
Blockly.Msg.LABPLUS_LED_HELPURL = 'http://wiki.labplus.cn/index.php?title=LED';

Blockly.Msg.LABPLUS_INFRARED_IS_TRIGGERED_MESSAGE0 = '红外探测 引脚 %1 被触发';
Blockly.Msg.LABPLUS_INFRARED_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_INFRARED_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%BA%A2%E5%A4%96%E6%8E%A2%E6%B5%8B';

Blockly.Msg.LABPLUS_HEAT_SENSITIVE_DETECTOR_MESSAGE0 = '热敏传感器 引脚 %1 的值';
Blockly.Msg.LABPLUS_HEAT_SENSITIVE_DETECTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_HEAT_SENSITIVE_DETECTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%83%AD%E6%95%8F%E7%94%B5%E9%98%BB';

Blockly.Msg.LABPLUS_I2C_LIGHT_SENSOR_MESSAGE0 = 'I2C数字光线传感器的值(lux)';
Blockly.Msg.LABPLUS_I2C_LIGHT_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_I2C_LIGHT_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%95%B0%E5%AD%97%E5%85%89%E7%BA%BF';

Blockly.Msg.LABPLUS_WATER_LEVEL_DETECTOR_MESSAGE0 = '水位传感器 引脚 %1 的值';
Blockly.Msg.LABPLUS_WATER_LEVEL_DETECTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_WATER_LEVEL_DETECTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%B0%B4%E4%BD%8D';

Blockly.Msg.LABPLUS_SMOKE_DETECTOR_IS_TRIGGERED_MESSAGE0 = '烟雾探测器 引脚 %1 被触发';
Blockly.Msg.LABPLUS_SMOKE_DETECTOR_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_SMOKE_DETECTOR_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%83%9F%E9%9B%BE';

Blockly.Msg.LABPLUS_BUZZER_FOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_BUZZER_FOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUZZER_FOR_MESSAGE0 = '以频率 %1 激活蜂鸣器 引脚0 %2 毫秒';

Blockly.Msg.LABPLUS_BUZZER_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_BUZZER_ON_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUZZER_ON_MESSAGE0 = '以频率 %1 激活蜂鸣器 引脚0';

Blockly.Msg.LABPLUS_BUZZER_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_BUZZER_OFF_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUZZER_OFF_MESSAGE0 = '关闭蜂鸣器 引脚0';

Blockly.Msg.LABPLUS_TM_HM_SENSOR_MESSAGE0 = 'I2C温湿度传感器的 %1 值';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%B8%A9%E6%B9%BF%E5%BA%A6';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_TM = '温度';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_HM = '湿度';

Blockly.Msg.LABPLUS_SET_SERVO_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%88%B5%E6%9C%BA';
Blockly.Msg.LABPLUS_SET_SERVO_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_SERVO_MESSAGE0 = '设置舵机 引脚 %1 角度为 %2';

Blockly.Msg.LABPLUS_FINGERPRINT_SENSOR_MESSAGE0 = '指纹传感器 引脚 %1 验证通过';
Blockly.Msg.LABPLUS_FINGERPRINT_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_FINGERPRINT_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%8C%87%E7%BA%B9';

Blockly.Msg.LABPLUS_SET_MOTOR_HELPURL = '';
Blockly.Msg.LABPLUS_SET_MOTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_MOTOR_MESSAGE0 = '设置电机 %1 方向 %2 速度 %3';

Blockly.Msg.LABPLUS_STOP_MOTOR_HELPURL = '';
Blockly.Msg.LABPLUS_STOP_MOTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_STOP_MOTOR_MESSAGE0 = '停止电机';

Blockly.Msg.LABPLUS_GET_RFID_ID_MESSAGE0 = '射频卡 引脚 %1 验证通过';
Blockly.Msg.LABPLUS_GET_RFID_ID_TOOLTIP = '';
Blockly.Msg.LABPLUS_GET_RFID_ID_HELPURL = 'http://wiki.labplus.cn/index.php?title=RFID';

Blockly.Msg.LABPLUS_GET_RFID_VALUE_MESSAGE0 = '电子钱包 引脚 %1 余额';
Blockly.Msg.LABPLUS_GET_RFID_VALUE_TOOLTIP = '';
Blockly.Msg.LABPLUS_GET_RFID_VALUE_HELPURL = '';

Blockly.Msg.LABPLUS_SET_RFID_VALUE_MESSAGE0 = '设置电子钱包 引脚 %1 余额 %2 %3';
Blockly.Msg.LABPLUS_SET_RFID_VALUE_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_RFID_VALUE_HELPURL = '';
Blockly.Msg.LABPLUS_SET_RFID_ADD = '增加';
Blockly.Msg.LABPLUS_SET_RFID_MINUS = '减少';

Blockly.Msg.LABPLUS_SOUND_IS_TRIGGERED_MESSAGE0 = '声音传感器 引脚 %1 被触发';
Blockly.Msg.LABPLUS_SOUND_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_SOUND_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%BA%A6%E5%85%8B%E9%A3%8E';

Blockly.Msg.LABPLUS_USB_SWITCH_HELPURL = '';
Blockly.Msg.LABPLUS_USB_SWITCH_TOOLTIP = '';
Blockly.Msg.LABPLUS_USB_SWITCH_MESSAGE0 = '%1 USB开关 引脚 %2';
Blockly.Msg.LABPLUS_USB_SWITCH_ON = '打开';
Blockly.Msg.LABPLUS_USB_SWITCH_OFF = '关闭';

Blockly.Msg.LABPLUS_VOICE_RECORD_HELPURL = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_MESSAGE0 = '%1 语音录放器 引脚 %2';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON = '打开';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF = '关闭';

Blockly.Msg.LABPLUS_RGB_INITIALISE_MESSAGE0 = '使用 引脚 %1 控制，RGB 彩灯数  %2 ';
Blockly.Msg.LABPLUS_RGB_INITIALISE_TOOLTIP = '控制 RGB 彩灯。需要设定 neopixels 彩灯数量和控制脚。';
Blockly.Msg.LABPLUS_RGB_INITIALISE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel';
Blockly.Msg.LABPLUS_RGB_CLEAR_MESSAGE0 = '清除 RGB 彩灯 %1';
Blockly.Msg.LABPLUS_RGB_CLEAR_TOOLTIP = '清除所有 RGB 彩灯';
Blockly.Msg.LABPLUS_RGB_CLEAR_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear';
Blockly.Msg.LABPLUS_RGB_SHOW_MESSAGE0 = '显示 RGB 彩灯 %1';
Blockly.Msg.LABPLUS_RGB_SHOW_TOOLTIP = '显示 / 更新全部 RGB 彩灯。';
Blockly.Msg.LABPLUS_RGB_SHOW_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show';
Blockly.Msg.LABPLUS_RGB_SET_MESSAGE0 = 'RGB 彩灯控制 %1 设置位置 %2 红色 %3 绿色 %4 蓝色 %5';
Blockly.Msg.LABPLUS_RGB_SET_TOOLTIP = '更新指定的 RGB 彩灯的红、绿、蓝 (RGB) 颜色';
Blockly.Msg.LABPLUS_RGB_SET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels';

Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_MESSAGE0 = '设置扩展端口 IO %1 为 %2';
Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_TOOLTIP = '0表示输出引脚,1表示输入引脚';
Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%AB%AF%E5%8F%A3%E6%89%A9%E5%B1%95';

Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_INPUT = '输入';
Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_OUTPUT = '输出';

Blockly.Msg.LABPLUS_READ_EXTENDED_PIN_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%AB%AF%E5%8F%A3%E6%89%A9%E5%B1%95';
Blockly.Msg.LABPLUS_READ_EXTENDED_PIN_TOOLTIP = '';
Blockly.Msg.LABPLUS_READ_EXTENDED_PIN_MESSAGE0 = '读取扩展端口值 IO %1'

Blockly.Msg.LABPLUS_WRITE_EXTENDED_PIN_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%AB%AF%E5%8F%A3%E6%89%A9%E5%B1%95';
Blockly.Msg.LABPLUS_WRITE_EXTENDED_PIN_TOOLTIP = '';
Blockly.Msg.LABPLUS_WRITE_EXTENDED_PIN_MESSAGE0 = '设置扩展端口 IO %1 值为 %2';

Blockly.Msg.LABPLUS_I2C_ULTRASONIC_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%B6%85%E5%A3%B0%E6%B3%A2';
Blockly.Msg.LABPLUS_I2C_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.LABPLUS_I2C_ULTRASONIC_MESSAGE0 = 'I2C超声波传感器的值';

Blockly.Msg.MICROBIT_SET_MUSIC_PIN_HELPURL = '';
Blockly.Msg.MICROBIT_SET_MUSIC_PIN_TOOLTIP = '';
Blockly.Msg.MICROBIT_SET_MUSIC_PIN_MESSAGE0 = '设置默认蜂鸣器引脚为 %1';

Blockly.Msg.LABPLUS_HUMAN_DETECTOR_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E4%BA%BA%E4%BD%93%E6%84%9F%E5%BA%94';
Blockly.Msg.LABPLUS_HUMAN_DETECTOR_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_HUMAN_DETECTOR_IS_TRIGGERED_MESSAGE0 = '人体感应 引脚 %1 被触发';

Blockly.Msg.LABPLUS_MAGNETIC_SWITCH_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%97%A8%E7%A3%81%E5%BC%80%E5%85%B3';
Blockly.Msg.LABPLUS_MAGNETIC_SWITCH_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_MAGNETIC_SWITCH_IS_TRIGGERED_MESSAGE0 = '门磁开关 引脚 %1 被触发';

Blockly.Msg.LABPLUS_SOUND_LEVEL_SENSOR_HELPURL = '';
Blockly.Msg.LABPLUS_SOUND_LEVEL_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SOUND_LEVEL_SENSOR_MESSAGE0 = '声音传感器 引脚 %1 的值';

Blockly.Msg.LABPLUS_SMOKE_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%83%9F%E9%9B%BE';
Blockly.Msg.LABPLUS_SMOKE_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SMOKE_SENSOR_MESSAGE0 = '烟雾传感器 引脚 %1 的值';

Blockly.Msg.LABPLUS_SOIL_MOISTURE_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E5%9C%9F%E5%A3%A4%E6%B9%BF%E5%BA%A6';
Blockly.Msg.LABPLUS_SOIL_MOISTURE_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SOIL_MOISTURE_SENSOR_MESSAGE0 = '土壤湿度传感器 引脚 %1 的值';

Blockly.Msg.LABPLUS_FAN_SWITCH_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%8E%92%E9%A3%8E%E6%89%87';
Blockly.Msg.LABPLUS_FAN_SWITCH_TOOLTIP = '';
Blockly.Msg.LABPLUS_FAN_SWITCH_MESSAGE0 = '%1 风扇 引脚 %2';

Blockly.Msg.LABPLUS_VOICE_RECORD_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON_MESSAGE0 = '打开录放器 %1 引脚 %2';
Blockly.Msg.LABPLUS_VOICE_RECORD_PLAY = '播放';
Blockly.Msg.LABPLUS_VOICE_RECORD_REC = '录音';

Blockly.Msg.LABPLUS_VOICE_RECORD_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF_MESSAGE0 = '关闭录放器 引脚 %1';


Blockly.Msg.LABPLUS_MOTOR_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_ON_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_ON_MESSAGE0 = '打开直流电机 %1 速度 %2 引脚 %3';
Blockly.Msg.LABPLUS_MOTOR_ON_CLOCKWISE = '正转';
Blockly.Msg.LABPLUS_MOTOR_ON_ANTICLOCKWISE = '反转';

Blockly.Msg.LABPLUS_MOTOR_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_OFF_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_OFF_MESSAGE0 = '停止直流电机 引脚 %1';

Blockly.Msg.LABPLUS_READ_COLOR_FROM_I2C_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%A2%9C%E8%89%B2';
Blockly.Msg.LABPLUS_READ_COLOR_FROM_I2C_TOOLTIP = '';
Blockly.Msg.LABPLUS_READ_COLOR_FROM_I2C_MESSAGE0 = 'I2C颜色传感器读取并储存颜色';

Blockly.Msg.LABPLUS_RGB_COLOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=RGB_LED';
Blockly.Msg.LABPLUS_RGB_COLOR_TOOLTIP = '读取已储存的颜色';
Blockly.Msg.LABPLUS_RGB_COLOR_MESSAGE0 = 'RGB颜色 %1';

Blockly.Msg.LABPLUS_SET_I2C_DIGITS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%95%B0%E7%A0%81%E7%AE%A1';
Blockly.Msg.LABPLUS_SET_I2C_DIGITS_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_DIGITS_MESSAGE0 = '设置I2C数码管的值为 %1';

Blockly.Msg.LABPLUS_TURN_OFF_I2C_DIGITS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%95%B0%E7%A0%81%E7%AE%A1';
Blockly.Msg.LABPLUS_TURN_OFF_I2C_DIGITS_TOOLTIP = '';
Blockly.Msg.LABPLUS_TURN_OFF_I2C_DIGITS_MESSAGE0 = '关闭I2C数码管';

Blockly.Msg.LABPLUS_UART_SET_MIDI_MELODIC_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_SET_MIDI_MELODIC_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_MIDI_MELODIC_MESSAGE0 = '设置MIDI模块音调为 %1';

Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_MESSAGE0 = 'MIDI模块 %2 音符 %1';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Do = 'Do';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Re = 'Re';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Mi = 'Mi';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Fa = 'Fa';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Sol = 'Sol';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_La = 'La';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Si = 'Si';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE = '播放';
Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE = '停止';



Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE_MESSAGE0 = 'MIDI模块停止播放音符 %1';

Blockly.Msg.LABPLUS_UART_INIT_MIDI_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_INIT_MIDI_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_INIT_MIDI_MESSAGE0 = '初始化MIDI模块 %1';

Blockly.Msg.LABPLUS_LINE_FOLLOWER_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E5%BE%AA%E8%BF%B9';
Blockly.Msg.LABPLUS_LINE_FOLLOWER_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_LINE_FOLLOWER_IS_TRIGGERED_MESSAGE0 = '循迹传感器 引脚 %1 检测为黑';

Blockly.Msg.LABPLUS_TEMPERATURE_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=LM35%E6%B8%A9%E5%BA%A6';
Blockly.Msg.LABPLUS_TEMPERATURE_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_TEMPERATURE_SENSOR_MESSAGE0 = 'LM35温度传感器 引脚 %1 的值';

Blockly.Msg.LABPLUS_ROTATE_DIMMER_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%97%8B%E9%92%AE%E7%94%B5%E4%BD%8D%E5%99%A8';
Blockly.Msg.LABPLUS_ROTATE_DIMMER_TOOLTIP = '';
Blockly.Msg.LABPLUS_ROTATE_DIMMER_MESSAGE0 = '旋转电位器 引脚 %1 的值';

Blockly.Msg.LABPLUS_SHAKE_DETECTOR_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9C%87%E5%8A%A8';
Blockly.Msg.LABPLUS_SHAKE_DETECTOR_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_SHAKE_DETECTOR_IS_TRIGGERED_MESSAGE0 = '震动传感器 引脚 %1 被触发';

Blockly.Msg.LABPLUS_LASER_SWITCH_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%BF%80%E5%85%89%E5%8F%91%E5%B0%84';
Blockly.Msg.LABPLUS_LASER_SWITCH_TOOLTIP = '';
Blockly.Msg.LABPLUS_LASER_SWITCH_MESSAGE0 = '%1 激光开关 引脚 %2';

Blockly.Msg.LABPLUS_4BUTTON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E5%9B%9B%E6%8C%89%E9%94%AE';
Blockly.Msg.LABPLUS_4BUTTON_TOOLTIP = '';
Blockly.Msg.LABPLUS_4BUTTON_MESSAGE0 = '四向按键模块 引脚 %1 按键 %2 被按下';
Blockly.Msg.BLUE = 'A';
Blockly.Msg.GREEN = 'B';
Blockly.Msg.RED = 'C';
Blockly.Msg.YELLOW = 'D';

Blockly.Msg.LABPLUS_JOYSTICK_HELPURL = '';
Blockly.Msg.LABPLUS_JOYSTICK_TOOLTIP = '';
Blockly.Msg.LABPLUS_JOYSTICK_MESSAGE0 = '摇杆 引脚A0 %1 引脚A1 %2   %3 轴的值';

Blockly.Msg.LABPLUS_UART_MP3_PLAY_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE';
Blockly.Msg.LABPLUS_UART_MP3_PLAY_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_MP3_PLAY_MESSAGE0 = 'MP3模块(UART)播放第 %1 首音乐';

Blockly.Msg.LABPLUS_UART_MP3_SET_VOLUME_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE';
Blockly.Msg.LABPLUS_UART_MP3_SET_VOLUME_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_MP3_SET_VOLUME_MESSAGE0 = '设置MP3模块(UART)音量为 %1';

Blockly.Msg.LABPLUS_UART_MP3_SET_STATUS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE';
Blockly.Msg.LABPLUS_UART_MP3_SET_STATUS_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_MP3_SET_STATUS_MESSAGE0 = '设置MP3模块(UART)状态为 %1';
Blockly.Msg.PAUSE = '暂停';
Blockly.Msg.STOP = '停止';
Blockly.Msg.PLAY = '继续播放';
Blockly.Msg.PLAYNEXT = '下一首';
Blockly.Msg.PLAYPREV = '上一首';

Blockly.Msg.LABPLUS_UART_INIT_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_INIT_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_INIT_MESSAGE0 = '初始化串口波特率为 %3 TX为 %1 RX为 %2';

Blockly.Msg.LABPLUS_VOICE_RECORD_ON1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON1_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON1_MESSAGE0 = '打开录放器 %1 %2 引脚REC %3 引脚PLAY %4';

Blockly.Msg.LABPLUS_VOICE_RECORD_OFF1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF1_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF1_MESSAGE0 = '关闭录放器 %1 引脚REC %2 引脚PLAY %3';

Blockly.Msg.LABPLUS_MOTOR_ON1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_ON1_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_ON1_MESSAGE0 = '打开直流电机 %1 速度 %2 引脚AIN1 %3 引脚AIN2 %4';

Blockly.Msg.LABPLUS_MOTOR_OFF1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_OFF1_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_OFF1_MESSAGE0 = '停止直流电机 %1 引脚AIN1 %2 引脚AIN2 %3';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_MESSAGE0 = '设置LCD游标位置%1 X %2 Y %3';


Blockly.Msg.LABPLUS_SET_I2C_LCD1602_PRINT_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_PRINT_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_PRINT_MESSAGE0 = '设置LCD显示 %1';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_TOOLTIP = '配合循环次数使用';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_MESSAGE0 = '%1滚动LCD显示内容';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_ALEFT = '向左';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_RIGHTWARD = '向右';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR_MESSAGE0 = '清除LCD显示内容';

Blockly.Msg.LABPLUS_UART_ANY_MSG_RECEIVED_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_ANY_MSG_RECEIVED_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_ANY_MSG_RECEIVED_MESSAGE0 = '%1 接收到数据';
Blockly.Msg.BLUEBIT_UART = '串口';
Blockly.Msg.BLUEBIT_INFRARED_SIGNAL = '红外信号';
Blockly.Msg.BLUEBIT_BLUEBOOTH = '蓝牙';
Blockly.Msg.LABPLUS_UART_READ_MSG_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_READ_MSG_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_READ_MSG_MESSAGE0 = '读取 %1 数据';
Blockly.Msg.LABPLUS_UART_WRITE_MSG_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_WRITE_MSG_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_WRITE_MSG_MESSAGE0 = '%1 发送数据 %2';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%82%B9%E9%98%B5';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_MESSAGE0 = '设置点阵 %1 第一行显示%2 第二行显示%3 第三行显示%4 第四行显示%5 第五行显示%6 第六行显示%7 第七行显示%8 第八行显示%9 ';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_MESSAGE2 = '设置点阵 %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_CLEAR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%82%B9%E9%98%B5';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_CLEAR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_CLEAR_MESSAGE0 = '清空点阵';
Blockly.Msg.LABPLUS_UART_SET_OLED_HELPURL = 'http://wiki.labplus.cn/index.php?title=OLED';
Blockly.Msg.LABPLUS_UART_SET_OLED_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_OLED_MESSAGE0 = '设置OLED屏 %1 X %2 Y %3 显示文本 %4 字体为 %5';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_HELPURL = 'http://wiki.labplus.cn/index.php?title=OLED';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_MESSAGE0 = '在OLED屏上擦除矩阵 %1 X1 %2 Y1 %3 X2 %4 Y2 %5';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_ALL_MESSAGE0 = '清空OLED屏';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_ALL_HELPURL = 'http://wiki.labplus.cn/index.php?title=OLED';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_ALL_TOOLTIP = '';
Blockly.Msg.LABPLUS_LIGHT_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%A8%A1%E6%8B%9F%E5%85%89%E7%BA%BF';
Blockly.Msg.LABPLUS_LIGHT_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_LIGHT_SENSOR_MESSAGE0 = '模拟光线传感器 引脚 %1 的值';
Blockly.Msg.LABPLUS_BUTTON_MODULE_IS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.LABPLUS_BUTTON_MODULE_IS_PRESSED_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUTTON_MODULE_IS_PRESSED_MESSAGE0 = '按键模块 引脚 %1 被按下';

Blockly.Msg.MICROBIT_INIT_I2C_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_INIT_I2C_TOOLTIP = '';
Blockly.Msg.MICROBIT_INIT_I2C_MESSAGE0 = '初始化I2C 频率 %1 引脚SDA %2 引脚SCL %3';
Blockly.Msg.MICROBIT_I2C_READ_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_I2C_READ_TOOLTIP = '';
Blockly.Msg.MICROBIT_I2C_READ_MESSAGE0 = 'I2C读取从地址 %1 读取 %2 字节';
Blockly.Msg.MICROBIT_I2C_WRITE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_I2C_WRITE_TOOLTIP = '';
Blockly.Msg.MICROBIT_I2C_WRITE_MESSAGE0 = 'I2C写入 %2 到地址 %1';
Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_TOOLTIP = '';
Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_MESSAGE0 = '转bytearray %1';

Blockly.Msg.BOTBIT_MOTOR_ON_HELPURL = '';
Blockly.Msg.BOTBIT_MOTOR_ON_TOOLTIP = '范围：-2000~2000';
Blockly.Msg.BOTBIT_MOTOR_ON_MESSAGE0 = '设置机器人 %1 右轮速度为 %2 左轮速度为 %3';
Blockly.Msg.BOTBIT_MOTOR_LEFT = '左';
Blockly.Msg.BOTBIT_MOTOR_RIGHT = '右';
Blockly.Msg.BOTBIT_SERVO_UP = '上方';
Blockly.Msg.BOTBIT_SERVO_DOWN = '下方';
Blockly.Msg.BOTBIT_MOTOR_FORWARD = '前进';
Blockly.Msg.BOTBIT_MOTOR_BACKWARD = '后退';

Blockly.Msg.BOTBIT_HOLDBALL_HELPURL = '';
Blockly.Msg.BOTBIT_HOLDBALL_TOOLTIP = '';
Blockly.Msg.BOTBIT_HOLDBALL_MESSAGE0 = '双臂抱起';

Blockly.Msg.BOTBIT_STEERING_ENGINEL_HELPURL = '';
Blockly.Msg.BOTBIT_STEERING_ENGINEL_TOOLTIP = '角度范围为-45°~45°';
Blockly.Msg.BOTBIT_STEERING_ENGINEL_MESSAGE0 = '设置 %1臂 %2的角度为 %3';
Blockly.Msg.BOTBIT_SERVO_Y = 'Y轴舵机';
Blockly.Msg.BOTBIT_SERVO_X = 'X轴舵机';

Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_HELPURL = '';
Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_TOOLTIP = '角度范围为-45°~45°';
Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_MESSAGE0 = '设置 %1腿 %2舵机的角度为 %3';

Blockly.Msg.BOTBIT_UPDATEPOSITION_HELPURL = '';
Blockly.Msg.BOTBIT_UPDATEPOSITION_TOOLTIP = '';
Blockly.Msg.BOTBIT_UPDATEPOSITION_MESSAGE0 = '刷新舵机角度';

Blockly.Msg.BOTBIT_ULTRASONIC_HELPURL = '';
Blockly.Msg.BOTBIT_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.BOTBIT_ULTRASONIC_MESSAGE0 = '超声波传感器的值';

Blockly.Msg.BOTBIT_WALKING_HELPURL = '';
Blockly.Msg.BOTBIT_WALKING_TOOLTIP = '周期越短, 速度越快, 推荐1000~2000';
Blockly.Msg.BOTBIT_WALKING_MESSAGE0 = '舞步(walking) 步数%2 周期%3 方向%1 ';
Blockly.Msg.BOTBIT_WALKING_FORWARD = '前';
Blockly.Msg.BOTBIT_WALKING_BACK = '后';

Blockly.Msg.BOTBIT_MOONWALKER_HELPURL = '';
Blockly.Msg.BOTBIT_MOONWALKER_TOOLTIP = '推荐周期1000~2000, 幅度10~50';
Blockly.Msg.BOTBIT_MOONWALKER_MESSAGE0 = '舞步(moonwalker) 步数%2 周期%3 幅度%4 方向%1 ';
Blockly.Msg.BOTBIT_MOONWALKER_L = '左';
Blockly.Msg.BOTBIT_MOONWALKER_R = '右';

Blockly.Msg.BOTBIT_CRUSAITO_HELPURL = '';
Blockly.Msg.BOTBIT_CRUSAITO_TOOLTIP = '推荐步数2~10, 幅度10~50';
Blockly.Msg.BOTBIT_CRUSAITO_MESSAGE0 = '舞步(crusaito) 步数%2 周期%3 幅度%4 方向%1';
Blockly.Msg.BOTBIT_CRUSAITO_CW = '逆时针';
Blockly.Msg.BOTBIT_CRUSAITO_ANTICW = '顺时针';

Blockly.Msg.BOTBIT_FLAPPING_HELPURL = '';
Blockly.Msg.BOTBIT_FLAPPING_TOOLTIP = '推荐步数5~15, 幅度10~30, 周期1000~2000';
Blockly.Msg.BOTBIT_FLAPPING_MESSAGE0 = '舞步(flapping) 步数%2 周期%3 幅度%4 方向%1';
Blockly.Msg.BOTBIT_FLAPPING_FORWARD = '前';
Blockly.Msg.BOTBIT_FLAPPING_BACK = '后';

Blockly.Msg.BOTBIT_HOME_HELPURL = '';
Blockly.Msg.BOTBIT_HOME_TOOLTIP = '';
Blockly.Msg.BOTBIT_HOME_MESSAGE0 = '机器人舞步初始化';

Blockly.Msg.LABPLUS_UART_SET_MIDI_VOL_HELPURL = 'http://wiki.labplus.cn/index.php?title=MIDI(%E7%94%B5%E5%AD%90%E7%90%B4)';
Blockly.Msg.LABPLUS_UART_SET_MIDI_VOL_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_MIDI_VOL_MESSAGE0 = '设置MIDI模块音量为 %1';

//映射数字范围，放在math目录里
Blockly.Msg.labplus_mapping_MESSAGE0 = '映射%1 从%2 , %3到%4 , %5'
Blockly.Msg.labplus_mapping_TOOLTIP = '将0~100中的10映射到0~200中并返回映射值'
Blockly.Msg.labplus_mapping_HELPURL = ''


Blockly.Msg.JOINT_MIDI_PIANO = "平台钢琴"; //Acoustic Grand Piano
Blockly.Msg.JOINT_MIDI_BRIGHTACOUSTICPIANO = "亮音钢琴";
Blockly.Msg.JOINT_MIDI_ELECTRICGRANDPIANO = "电钢琴";
Blockly.Msg.JOINT_MIDI_HARPSICHORD = "大键琴";
Blockly.Msg.JOINT_MIDI_Celesta = "钢片琴";
Blockly.Msg.JOINT_MIDI_Glockenspiel = "钟琴";
Blockly.Msg.JOINT_MIDI_Musicalbox = "音乐盒";
Blockly.Msg.JOINT_MIDI_Marimba = "马林巴琴";
Blockly.Msg.JOINT_MIDI_Xylophone = "木琴";
Blockly.Msg.JOINT_MIDI_TubularBell = "管钟";
Blockly.Msg.JOINT_MIDI_Dulcimer = "洋琴";
Blockly.Msg.JOINT_Vibraphone = "颤音琴"; //Vibraphone
Blockly.Msg.JOINT_MIDI_ORGAN = "音栓风琴"; //Drawbar Organ
Blockly.Msg.JOINT_Acoustic_Guitar = "木吉他"; //Acoustic Guitar
Blockly.Msg.JOINT_Electric_Guitar = "电吉他"; //Electric Guitar
Blockly.Msg.JOINT_Acoustic_Bass = "民谣贝斯"; //Acoustic Bass
Blockly.Msg.JOINT_String_Ensemble = "弦乐合奏"; //String Ensemble
Blockly.Msg.JOINT_Violin = "小提琴"; //Violin
Blockly.Msg.JOINT_Trumpet = "小号"; //Trumpet
Blockly.Msg.JOINT_Sax = "萨克斯"; //Sax
Blockly.Msg.JOINT_Steel_Drums = "钢鼓"; //Steel Drums
Blockly.Msg.JOINT_Lead = "合成音主旋律"; //Lead
Blockly.Msg.JOINT_Pad = "合成音衬底"; //Pad

Blockly.Msg.LABPLUS_PLAY_BUZZER_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_PLAY_BUZZER_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_PLAY_BUZZER_NOTE_MESSAGE0 = '播放音调 %1';

/* 掌控板end */
/* Blockly.Msg.LABPLUS_OFF_BUZZER_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_OFF_BUZZER_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_OFF_BUZZER_NOTE_MESSAGE0 = '蜂鸣器%1关闭音调 %2' */


/* Blockly.Msg.JOINT_Bass_Drum = "大鼓";  //Bass Drum
Blockly.Msg.JOINT_Snare_Drum = "小鼓";  //Snare Drum
Blockly.Msg.JOINT_Closed_Hi_hat = "闭合开合钹";  //Closed Hi-hat
Blockly.Msg.JOINT_Open_Hi_hat = "开放开合钹";  //Open Hi-hat
Blockly.Msg.JOINT_Low_Tom = "低音筒鼓";  //Low Tom
Blockly.Msg.JOINT_High_Tom = "高音筒鼓";  //High Tom
Blockly.Msg.JOINT_Tambourine = "铃鼓";  //Tambourine
Blockly.Msg.JOINT_Crash_Cymbal = "强音钹";  //Crash Cymbal
Blockly.Msg.JOINT_Ride_Cymbal = "打点钹";  //Ride Cymbal
Blockly.Msg.JOINT_Mute_High_Conga = "高音康加鼓";  //Mute High Conga
Blockly.Msg.JOINT_Low_Conga = "低音康加鼓";  //Low Conga
Blockly.Msg.JOINT_Maracas = "沙锤";  //Maracas
Blockly.Msg.JOINT_Claves = "击木";  //Claves */


//新tts
Blockly.Msg.XUNFEI_SPEECH_TTS_HELPURL = 'https://www.labplus.cn/posts/5e0ef65e61dfe9591ae8be9b';
Blockly.Msg.XUNFEI_SPEECH_TTS_TOOLTIP = '[单板需要使用掌控扩展板的喇叭]\n合成音频文件格式可以是mp3和pcm';
Blockly.Msg.XUNFEI_SPEECH_TTS_MESSAGE0 = '[讯飞语音] 合成音频 %1 APPID %2 APISecret %3 APIKey %4 文字内容 %5 转存为音频文件 %6';

Blockly.Msg.XUNFEI_NEW_SPEECH_TTS_HELPURL = 'https://www.labplus.cn/posts/5e0ef65e61dfe9591ae8be9b';
Blockly.Msg.XUNFEI_NEW_SPEECH_TTS_TOOLTIP = '[单板需要使用掌控扩展板的喇叭]\n合成音频文件格式可以是mp3和pcm';
Blockly.Msg.XUNFEI_NEW_SPEECH_TTS_MESSAGE0 = '[讯飞语音] 合成音频 %1 APPID %2 APISecret %3 APIKey %4 文字内容 %5 转存为音频文件 %6';

Blockly.Msg.XUNFEI_NEW_SPEECH_TTS_TOOLTIP2 = '合成音频文件格式为mp3';

Blockly.Msg.XUNFEI_SPEECH_IAT_HELPURL = 'https://www.labplus.cn/posts/5e0ef65e61dfe9591ae8be9b';
Blockly.Msg.XUNFEI_SPEECH_IAT_TOOLTIP = '如果是通过录音获取音频文件，时长不能大于5秒。\n距离5-13cm录音最佳。可识别的音频格式有 *.pcm 与 *.wav';
Blockly.Msg.XUNFEI_SPEECH_IAT_MESSAGE0 = '[讯飞语音] 识别音频 %1 APPID %2 APISecret %3 APIKey %4 待识别音频文件 %5';

Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_HELPURL = 'https://www.labplus.cn/posts/5e0ef65e61dfe9591ae8be9b';
Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_TOOLTIP = '';
Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_MESSAGE0 = '[讯飞语音] 识别结果';

//百度语音
Blockly.Msg.BAIDU_SPEECH_TTS_HELPURL = '';
Blockly.Msg.BAIDU_SPEECH_TTS_TOOLTIP = '[需要使用掌控扩展板的喇叭]\n合成音频文件格式只能是 *.mp3';
Blockly.Msg.BAIDU_SPEECH_TTS_MESSAGE0 = '[百度语音] 合成音频 %1 API Key %2 Secret Key %3 文字内容 %4 转存为音频文件 %5';

Blockly.Msg.BAIDU_SPEECH_IAT_HELPURL = '';
Blockly.Msg.BAIDU_SPEECH_IAT_TOOLTIP = '可识别的音频格式有 *.wav';
Blockly.Msg.BAIDU_SPEECH_IAT_MESSAGE0 = '[百度语音] 识别音频  %1 语种%5 %7 采样率%6 %8 API Key %2 Secret Key %3 待识别音频文件 %4';
Blockly.Msg.BAIDU_SPEECH_IAT_1956_MESSAGE0 = '[百度语音] 识别音频  %1  API Key %2 Secret Key %3 待识别音频文件 %4';

Blockly.Msg.BAIDU_SPEECH_IAT_RESULT_HELPURL = '';
Blockly.Msg.BAIDU_SPEECH_IAT_RESULT_TOOLTIP = '';
Blockly.Msg.BAIDU_SPEECH_IAT_RESULT_MESSAGE0 = '[百度语音] 识别结果';

Blockly.Msg.BAIDU_SPEECH_IAT_RESULT_CONTAINS_HELPURL = '';
Blockly.Msg.BAIDU_SPEECH_IAT_RESULT_CONTAINS_TOOLTIP = '';
Blockly.Msg.BAIDU_SPEECH_IAT_RESULT_CONTAINS_MESSAGE0 = '[百度语音] 识别结果 中 包含 %1';

//百度闲聊机器人
Blockly.Msg.BAIDU_CHATBOT_CHAT_HELPURL = '';
Blockly.Msg.BAIDU_CHATBOT_CHAT_TOOLTIP = '百度UNIT闲聊机器人';
Blockly.Msg.BAIDU_CHATBOT_CHAT_MESSAGE0 = '[百度聊天机器人] 聊天 %1 API Key %2 Secret Key %3 机器人ID %4 问题 %5';

//百度闲聊机器人 回答
Blockly.Msg.BAIDU_CHATBOT_CHAT_RESULT_HELPURL = '';
Blockly.Msg.BAIDU_CHATBOT_CHAT_RESULT_TOOLTIP = '';
Blockly.Msg.BAIDU_CHATBOT_CHAT_RESULT_MESSAGE0 = '[百度聊天机器人] 聊天回答';


//掌控板AI
Blockly.Msg.MPYTHON_ZKAI_LCD_INIT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcdinittype1-freq15000000-colorlcdblack';
Blockly.Msg.MPYTHON_ZKAI_LCD_INIT_MESSAGE0 = 'LCD 屏幕初始化';
Blockly.Msg.MPYTHON_ZKAI_LCD_INIT_TOOLTIP = '初始化 LCD 屏幕显示';

Blockly.Msg.MPYTHON_ZKAI_LCD_ROTATION_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcddirectiondir';
Blockly.Msg.MPYTHON_ZKAI_LCD_ROTATION_MESSAGE0 = 'LCD 屏幕方向%1';
Blockly.Msg.MPYTHON_ZKAI_LCD_ROTATION_TOOLTIP = '设置 LCD 屏幕方向,取值范围 [0,3]， 从0到3依次顺时针旋转';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_RESET_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%8D%95%E7%9B%AE%E6%91%84%E5%83%8F%E5%A4%B4%E9%87%8D%E7%BD%AE%E5%87%BD%E6%95%B0';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RESET_MESSAGE0 = '摄像头 初始化';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RESET_TOOLTIP = '初始化单目摄像头';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_TOOLTIP = '获取图像';

Blockly.Msg.MPYTHON_ZKAI_LCD_WIDTHANDHEIGHT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcdwidth';
Blockly.Msg.MPYTHON_ZKAI_LCD_WIDTHANDHEIGHT_MESSAGE0 = 'LCD 获取%1';
Blockly.Msg.MPYTHON_ZKAI_LCD_WIDTHANDHEIGHT_TOOLTIP = '返回 LCD 的宽度（水平分辨率）;高度（垂直分辨率）';

Blockly.Msg.MPYTHON_ZKAI_LCD_MI_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcddirectiondir';
Blockly.Msg.MPYTHON_ZKAI_LCD_MI_MESSAGE0 = 'LCD 设置镜像';
Blockly.Msg.MPYTHON_ZKAI_LCD_MI_TOOLTIP = '设置是否镜像';

Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%98%BE%E7%A4%BA%E8%8B%B1%E6%96%87';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MESSAGE0 = '显示文本 x %1 y %2 内容 %3';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_TOOLTIP = '仅支持字母和数字';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_OffOn_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%85%B3%E9%97%AD%E6%91%84%E5%83%8F%E5%A4%B4';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_OffOn_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_OffOn_TOOLTIP = '1 表示开启摄像头 0 表示关闭摄像头';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_SKIP_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%B7%B3%E5%B8%A7';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SKIP_MESSAGE0 = '摄像头 跳过帧数%1 毫秒%2内的图像 ';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SKIP_TOOLTIP = '摄像头跳过指定帧数或者跳过指定时间内的图像';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%88%86%E8%BE%A8%E7%8E%87%E5%AE%BD%E5%BA%A6';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RETURN_MESSAGE0 = '摄像头 获取%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RETURN_TOOLTIP = '(ZKAI)摄像头返回参数(宽高，获取帧缓冲，获取ID)';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E5%AF%B9%E6%AF%94%E5%BA%A6';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_MESSAGE0 = '摄像头 设置%1 为%2';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_TOOLTIP = '设置摄像头对比度，亮度，饱和度范围为[-2,+2]';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_AUTO_GAIN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%A2%9E%E7%9B%8A';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_AUTO_GAIN_MESSAGE0 = '摄像头 自动增益%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_AUTO_GAIN_TOOLTIP = '1开启摄像头自动增益 0关闭摄像头自动增益';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_ACQUIRE_AUTO_GAIN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%A2%9E%E7%9B%8A%E5%80%BC';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ACQUIRE_AUTO_GAIN_MESSAGE0 = '摄像头 获取增益值';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ACQUIRE_AUTO_GAIN_TOOLTIP = '获取摄像头增益值';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E6%B0%B4%E5%B9%B3%E9%95%9C%E5%83%8F';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_MESSAGE0 = '摄像头 水平镜像%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_TOOLTIP = '1 表示开启水平镜像 0 表示关闭水平镜像';

//掌控板追踪颜色
Blockly.Msg.MPYTHON_ZKAI_IMAGE_LAB_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%89%BE%E7%BB%BF%E8%89%B2';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_LAB_MESSAGE0 = '(掌控AI)寻找颜色 LAB值%1';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_LAB_TOOLTIP = 'image寻找颜色';

Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.find_blobs';
Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_MESSAGE0 = '(掌控AI)追踪色块 LAB颜色%1 边界框小于%2 像素小于%3 过滤';
Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_TOOLTIP = '追踪色块';

Blockly.Msg.MPYTHON_ZKAI_TRACE_CILOR_DISPLAYTEN_HELPURL = '';
Blockly.Msg.MPYTHON_ZKAI_TRACE_CILOR_DISPLAYTEN_MESSAGE0 = '(掌控AI)追踪颜色%1 显示%2';
Blockly.Msg.MPYTHON_ZKAI_TRACE_CILOR_DISPLAYTEN_TOOLTIP = '';

Blockly.Msg.MPYTHON_ZKAI_BLOB_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ALL_MESSAGE0 = '(掌控AI)%1获取识别后色块的 所有参数';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ALL_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_X_MESSAGE0 = '(掌控AI)%1获取识别后色块的 x坐标';
Blockly.Msg.MPYTHON_ZKAI_BLOB_X_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_Y_MESSAGE0 = '(掌控AI)%1获取识别后色块的 y坐标';
Blockly.Msg.MPYTHON_ZKAI_BLOB_Y_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_W_MESSAGE0 = '(掌控AI)%1获取识别后色块的 宽度';
Blockly.Msg.MPYTHON_ZKAI_BLOB_W_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_H_MESSAGE0 = '(掌控AI)%1获取识别后色块的 高度';
Blockly.Msg.MPYTHON_ZKAI_BLOB_H_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_NUMBER_MESSAGE0 = '(掌控AI)%1获取识别后色块的 数量';
Blockly.Msg.MPYTHON_ZKAI_BLOB_NUMBER_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_X_MESSAGE0 = '(掌控AI)%1获取识别后色块的 中心x坐标';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_X_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_Y_MESSAGE0 = '(掌控AI)%1获取识别后色块的 中心y坐标';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_Y_TOOLTIP = '返回blob 类 -- 色块对象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_ORTHOGON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ORTHOGON_MESSAGE0 = '(掌控AI)%1获取识别后色块的 矩形';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ORTHOGON_TOOLTIP = '返回blob 类 -- 色块对象';

//掌控板人脸识别
Blockly.Msg.MPYTHON_ZKAI2_FACE_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_FACE_TRACKING_MESSAGE0 = '(掌控AI)选择训练模型 人脸';
Blockly.Msg.MPYTHON_ZKAI2_FACE_TRACKING_TOOLTIP = '可以识别并且追踪人脸，显示人脸大小等';

Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_TRACKING_MESSAGE0 = '(掌控AI)调用摄像头进行 人脸识别';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_TRACKING_TOOLTIP = '可以识别并且追踪人脸，显示人脸大小等';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_MESSAGE0 = '(掌控AI)获取识别后人脸的 所有参数';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_TOOLTIP = '获取识别后人脸的 所有参数';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_X_MESSAGE0 = '(掌控AI)获取识别后人脸的 x坐标';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_X_TOOLTIP = '获取识别后人脸的 x坐标';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_Y_MESSAGE0 = '(掌控AI)获取识别后人脸的 y坐标';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_Y_TOOLTIP = '获取识别后人脸的 y坐标';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_W_MESSAGE0 = '(掌控AI)获取识别后人脸的 宽度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_W_TOOLTIP = '获取识别后人脸的 宽度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_H_MESSAGE0 = '(掌控AI)获取识别后人脸的 高度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_H_TOOLTIP = '获取识别后人脸的 高度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_VALUE_MESSAGE0 = '(掌控AI)获取识别后人脸的 置信度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_VALUE_TOOLTIP = '获取识别后人脸的 置信度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_OBJNUM_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_OBJNUM_MESSAGE0 = '(掌控AI)获取识别后人脸的 数量';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_OBJNUM_TOOLTIP = '获取识别后人脸的 数量';

Blockly.Msg.MPYTHON_ZKAI_LCD_DISPLAY_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcddisplayimage-roiauto';
Blockly.Msg.MPYTHON_ZKAI_LCD_DISPLAY_MESSAGE0 = 'LCD 显示生效';
Blockly.Msg.MPYTHON_ZKAI_LCD_DISPLAY_TOOLTIP = '可以在液晶屏上显示一张 image';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_IMAGES_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_IMAGES_MESSAGE0 = '摄像头 获取图像';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_IMAGES_TOOLTIP = '控制摄像头捕捉图像';

//掌控板20分类
Blockly.Msg.MPYTHON_ZKAI2_20class_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_20class_TRACKING_MESSAGE0 = '(掌控AI)选择训练模型 20类';
Blockly.Msg.MPYTHON_ZKAI2_20class_TRACKING_TOOLTIP = '可以识别20个类型，分别是0-19为飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛,餐桌,狗,屋子,摩托车,人,盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_20TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_20TRACKING_MESSAGE0 = '(掌控AI)调用摄像头进行 20类识别';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_20TRACKING_TOOLTIP = '调用摄像头进行 20类识别';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_MESSAGE0 = '(掌控AI)获取识别后20类的 所有参数';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_TOOLTIP = '获取识别后20类的 所有参数';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_X_MESSAGE0 = '(掌控AI)获取识别后20类的 x坐标';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_X_TOOLTIP = '获取识别后20类的 x坐标';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_Y_MESSAGE0 = '(掌控AI)获取识别后20类的 y坐标';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_Y_TOOLTIP = '获取识别后20类的 y坐标';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_W_MESSAGE0 = '(掌控AI)获取识别后20类的 宽度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_W_TOOLTIP = '获取识别后20类的 宽度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_H_MESSAGE0 = '(掌控AI)获取识别后20类的 高度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_H_TOOLTIP = '获取识别后20类的 高度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_VALUE_MESSAGE0 = '(掌控AI)获取识别后20类的 置信度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_VALUE_TOOLTIP = '获取识别后20类的 置信度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_OBJNUM_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_OBJNUM_MESSAGE0 = '(掌控AI)获取识别后20类的 数量';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_OBJNUM_TOOLTIP = '获取识别后20类的 数量';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_CLASSID_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_CLASSID_MESSAGE0 = '(掌控AI)获取识别后20类的 类型';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_CLASSID_TOOLTIP = '获取识别后20类的 类型可以放入获取识别的参数，可以识别20个类型，分别是0-19为飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛,餐桌,狗,屋子,摩托车,人,盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_INDEX_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_INDEX_MESSAGE0 = '(掌控AI)获取识别后20类的 类型数量';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_INDEX_TOOLTIP = '获取识别后20类的 类型数量';

//掌控手写数字
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DISCERN_MESSAGE0 = '(掌控AI)选择训练模型  手写数字';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DISCERN_TOOLTIP = '选择训练模型  手写数字识别';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_NUMBER_DISCERN_MESSAGE0 = '(掌控AI)调用摄像头进行 手写数字识别';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_NUMBER_DISCERN_TOOLTIP = '调用摄像头进行 手写数字识别';

Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ALL_MESSAGE0 = '(掌控AI)获取识别后手写数字的 所有参数';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ALL_TOOLTIP = '手写数字识别参数';

Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_NUMBER_MESSAGE0 = '(掌控AI)获取识别后手写数字的 数字';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_NUMBER_TOOLTIP = '手写数字识别 数字';

Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ADIENCE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ADIENCE_MESSAGE0 = '(掌控AI)获取识别后手写数字的 置信度';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ADIENCE_TOOLTIP = '手写数字 识别数字 置信度';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_MESSAGE0 = '人脸识别';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_RETURN_MESSAGE0 = '(掌控AI)获取 识别%1';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_RETURN_TOOLTIP = '人脸识别的x和y是LCD屏幕的坐标位置；width和height是人脸识别出的宽度和高度；classid是识别出的类别；objnum是人脸识别出的个数';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_ALL_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_ALL_RETURN_MESSAGE0 = '(掌控AI)获取 识别 所有参数';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_ALL_RETURN_TOOLTIP = '人脸识别的x和y是LCD屏幕的坐标位置；width和height是人脸识别出的宽度和高度；classid是识别出的类别；objnum是人脸识别出的个数';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT2_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT2_MESSAGE0 = '(掌控AI)人脸识别';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT2_TOOLTIP = '可以放入获取识别的参数';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_20CLASS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C'
Blockly.Msg.MPYTHON_ZKAI_IMAGE_20CLASS_TOOLTIP = '(掌控AI)可以放入获取识别的参数，可以识别20个类型，分别是飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛, 餐桌,狗,屋子,摩托车,人,盆栽,羊,沙发,火车,电视'

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_REC_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawrectanglex-y-w-h-color-thickness1-fillfalse';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_REC_MESSAGE0 = '矩形%1 x%3 y%4 宽%5 高%6 颜色为 R%7 G%8 B%9  加粗%2';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_REC_TOOLTIP = '在图像上绘制矩形';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_STRING_MESSAGE0 = '线条  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7 加粗%8';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_STRING_TOOLTIP = '在图像上绘制线条';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_STRING_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawlinex0-y0-x1-y1-color-thickness1';

Blockly.Msg.MPYTHON_ZKAI_LCD_CLEAR_ALL_MESSAGE0 = 'LCD 显示清空';
Blockly.Msg.MPYTHON_ZKAI_LCD_CLEAR_ALL_TOOLTIP = '将液晶屏清空为黑色或者指定的颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_CLEAR_ALL_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcdclear';

Blockly.Msg.MPYTHON_ZKAI_LCD_return_colour_MESSAGE0 = 'LCD 返回 x%1 y%2 颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_return_colour_TOOLTIP = '返回某个坐标点的颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_return_colour_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagegetpixelx-y-rgbtuple';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_CIRCLE_MESSAGE0 = '圆形%1 x%2 y%3 半径%4 颜色为 R%5 G%6 B%7 加粗%8';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_CIRCLE_TOOLTIP = '在图像上绘制圆形';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_CIRCLE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawcirclex-y-radius-color-thickness1-fillfalse';

Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MOST_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%98%BE%E7%A4%BA%E8%8B%B1%E6%96%87';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MOST_MESSAGE0 = '显示文本 x %1 y %2 内容 %3 颜色为R%4 G%5 B%6 字号%7';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MOST_TOOLTIP = '仅支持字母和数字';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_TEN_STRING_MESSAGE0 = '十字线  x%1 y%2 颜色为R%3 G%4 B%5 尺寸%6 加粗%7';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_TEN_STRING_TOOLTIP = '在图像上绘制十字线';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_TEN_STRING_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawcrossx-y-color-size5-thickness1';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ARROWS_MESSAGE0 = '箭头  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7  加粗%8';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ARROWS_TOOLTIP = '在图像上绘制一个箭头';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ARROWS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawarrowx0-y0-x1-y1-color-thickness1';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_PIRCTURE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-2%EF%BC%9A-%E6%98%BE%E7%A4%BA%E5%9B%BE%E7%89%87';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_PIRCTURE_MESSAGE0 = '显示图像 路径%1';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_PIRCTURE_TOOLTIP = '显示图像';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagetorainbowcopyfalse';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_MESSAGE0 = 'LCD 显示热图颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_TOOLTIP = '可以在液晶屏上显示一张 image的热图颜色';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagesavepath-roi-quality50';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_MESSAGE0 = '将图像的副本保存到SD卡%1 图像名%2 图像显示区域  x%3 y%4 宽%5 高%6';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_TOOLTIP = '将图像的副本保存到SD卡';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_SHOW_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagecopyroi-copytofbfalse';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_SHOW_MESSAGE0 = '创建一个图像对象的副本  复制图像区域  x%1 y%2 宽%3 高%4';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_SHOW_TOOLTIP = '创建一个图像对象的副本';


Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_RAINBOW = '彩虹';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_NEGATE = '数字反转';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_INVERT = '黑白翻转';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_DESCARTES_LINPOLAR = '线性极';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_DESCARTES_LOGPOLAR = '对数极';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_PATTERN_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_PATTERN_COLOR = '彩色';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_START = '开始抓取图像';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_STOP = '停止抓取图像';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_H = '水平镜像';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_V = '垂直翻转';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_CONTRAST = '对比度';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_BRIGHTNESS = '亮度';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_SATURATION = '饱和度';

Blockly.Msg.MPYTHON_ZKAI2_FACE_YOLO = '人脸识别';
Blockly.Msg.MPYTHON_ZKAI2_CLASS_20_YOLO = '20类识别';
Blockly.Msg.MPYTHON_ZKAI2_MNIST_NET = '数字识别';

Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_FACE_YOLO = '人脸';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_CLASS_20_YOLO = '20类';

Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_RECTANGLE = '矩形';
Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_CROSS = '十字';

//声明python 运行环境
Blockly.Msg.MPYTHON_NAME_PYTHON_ENVIRONMENT_HELPURL = '';
Blockly.Msg.MPYTHON_NAME_PYTHON_ENVIRONMENT_MESSAGE0 = '声明python 运行环境';
Blockly.Msg.MPYTHON_NAME_PYTHON_ENVIRONMENT_TOOLTIP = '';


//N+ 
//lark
Blockly.Msg.MPYTHON_LARK_GET_ALL_COLOR_MESSAGE0 = 'I2C获取颜色';
Blockly.Msg.MPYTHON_LARK_GET_ALL_COLOR_TOOLTIP = '返回列表';

Blockly.Msg.MPYTHON_LARK_GET_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_GET_COLOR_MESSAGE0 = 'I2C获取 %1';
Blockly.Msg.MPYTHON_lARK_RED = '红色';
Blockly.Msg.MPYTHON__LARK_GREEN = '绿色';
Blockly.Msg.MPYTHON__LARK_BLUE = '蓝色';

Blockly.Msg.MPYTHON_LARK_GET_ALL_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARKT_GET_ALL_COLOR_HSV_MESSAGE0 = 'I2C获取HSV';

Blockly.Msg.MPYTHON_LARK_GET_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARK_GET_COLOR_HSV_MESSAGE0 = 'i2C获取HSV %1';

Blockly.Msg.MPYTHON_LARK_GET_COLOR_STRING_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_GET_COLOR_STRING_MESSAGE0 = 'I2C获取颜色';
Blockly.Msg.MPYTHON_NPLUS_I2C_MOTOR_LEFT = '左电机'
Blockly.Msg.MPYTHON_NPLUS_I2C_MOTOR_RIGHT = '右电机'
Blockly.Msg.MPYTHON_NPLUS_CAR_MOTOR_SET_I2C_CIRCLE_MESSAGE0 = '千里马%1速度%2 %3 %4圈/阈值设置为%5'

Blockly.Msg.MPYTHON_LARK_DISCERN_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_DISCERN_COLOR_MESSAGE0 = '识别 %1';
Blockly.Msg.MPYTHON_LARK_RED = '红色';
Blockly.Msg.MPYTHON_LARK_GREEN = '绿色';
Blockly.Msg.MPYTHON_LARK_BLUE = '蓝色';
Blockly.Msg.MPYTHON_LARK_ORANGE = '橙色';
Blockly.Msg.MPYTHON_LARK_YELLOW = '黄色';
Blockly.Msg.MPYTHON_LARK_PURPLE = '紫色';
Blockly.Msg.MPYTHON_LARK_CYAN = '青色';
Blockly.Msg.MPYTHON_LARK_NONE = '无色';
Blockly.Msg.MPYTHON_LARK_NULL = '无法获取';
Blockly.Msg.MPYTHON_LARK_MLX90614_MESSAGE0 = "红外测温"
Blockly.Msg.MPYTHON_LARK_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_ULTRASONIC_MESSAGE0 = 'I2C超声波';
Blockly.Msg.mpython_NPLUS_ULTRASONIC = '超声波';
Blockly.Msg.mpython_NPLUS_MOTOR = '电机驱动';
Blockly.Msg.MPYTHON_NPLUS_SET_I2C_ADDR_MESSAGE0 = '进阶  I2C设备地址 %1 修改为 %2';
Blockly.Msg.MPYTHON_NPLUS_MOTOR_ADVANCE_I2C_MESSAGE0 = '进阶  电机驱动地址 %1 %2 %3 速度%4';
Blockly.Msg.MPYTHON_NPLUS_ADVANCE_ULTRASONIC_MESSAGE0 = '进阶  获取超声波 %1 距离（mm）'

Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_MESSAGE0 = 'I2C电机 %1 %2 速度 %3';
Blockly.Msg.MPYTHON_NPLUS_I2C_MOTOR_FORD = '正转'
Blockly.Msg.MPYTHON_NPLUS_I2C_MOTOR_REVERSAL = '反转'
Blockly.Msg.MPYTHON_NPLUS_SET_BW_RGB_MESSAGE0 = '循迹传感器设置白平衡 R %1 G %2 B %3'
Blockly.Msg.MPYTHON_NPLUS_SET_THRESHOLD_MESSAGE0 = '循迹传感器设置阈值%1'
Blockly.Msg.MPYTHON_LARK_GET_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_GET_LINE_ON_I2C_MESSAGE0 = 'I2C获取 %1 巡线值';
Blockly.Msg.mpython_LARK_GET_LINE_RIGHT_ON_I2C = '右边';
Blockly.Msg.mpython_LARK_GET_LINE_LEFT_ON_I2C = '左边';

Blockly.Msg.MPYTHON_LARK_SEARCH_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_SEARCH_LINE_ON_I2C_MESSAGE0 = 'I2C循迹传感 %1 遇到黑线';
Blockly.Msg.MPYTHON_LARK_SEARCH_LEFT = '左边';
Blockly.Msg.MPYTHON_LARK_SEARCH_RIGHT = '右边';
Blockly.Msg.MPYTHON_LARK_SEARCH_LEFT2 = '两边都';
Blockly.Msg.MPYTHON_LARK_SEARCH_RIGHT2 = '两边都没有';
Blockly.Msg.MPYTHON_LARK_SEARCH_BOTH = '两边都';
Blockly.Msg.MPYTHON_LARK_SEARCH_NONE = '两边都没有';


///千里马
Blockly.Msg.MPYTHON_LARK__CAR_GET_ALL_COLOR_TOOLTIP = 'Returns as list';
Blockly.Msg.MPYTHON_LARK__CAR_GET_ALL_COLOR_MESSAGE0 = '千里马获取颜色';

Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_MESSAGE0 = '千里马获取 %1';
Blockly.Msg.MPYTHON_lARK_CAR_RED = '红色';
Blockly.Msg.MPYTHON__LARK_CAR_GREEN = '绿色';
Blockly.Msg.MPYTHON__LARK_CAR_BLUE = '蓝色';

Blockly.Msg.MPYTHON_LARK_CAR_GET_ALL_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARKT_CAR_GET_ALL_COLOR_HSV_MESSAGE0 = '千里马获取HSV';

Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_HSV_MESSAGE0 = '千里马获取HSV %1';

Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_STRING_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_STRING_MESSAGE0 = '千里马识别颜色';

Blockly.Msg.MPYTHON_LARK_CAR_DISCERN_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_DISCERN_COLOR_MESSAGE0 = '千里马识别颜色 %1';
Blockly.Msg.MPYTHON_LARK_CAR_RED = '红色';
Blockly.Msg.MPYTHON_LARK_CAR_GREEN = '绿色';
Blockly.Msg.MPYTHON_LARK_CAR_BLUE = '蓝色';
Blockly.Msg.MPYTHON_LARK_CAR_ORANGE = '橙色';
Blockly.Msg.MPYTHON_LARK_CAR_YELLOW = '黄色';
Blockly.Msg.MPYTHON_LARK_CAR_PURPLE = '紫色';
Blockly.Msg.MPYTHON_LARK_CAR_CYAN = '青色';
Blockly.Msg.MPYTHON_LARK_CAR_NONE = '无识别';
Blockly.Msg.MPYTHON_LARK_CAR_NULL = '识别错误';

Blockly.Msg.MPYTHON_LARK_CAR_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_ULTRASONIC_MESSAGE0 = '千里马获取超声波';

Blockly.Msg.MPYTHON_LARK_CAR_GET_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_CAR_GET_LINE_ON_I2C_MESSAGE0 = '千里马获取 %1 号循迹数值';
Blockly.Msg.mpython_LARK_CAR_GET_LINE_RIGHT_ON_I2C = '右边';
Blockly.Msg.mpython_LARK_CAR_GET_LINE_LEFT_ON_I2C = '左边';

Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_CAR_SEARCH_LINE_ON_I2C_MESSAGE0 = '千里马%1 号传感器碰到黑线';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_LEFT = '左边';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_RIGHT = '右边';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_LEFT2 = '两边';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_NONE = '两边都没有';

Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_LEFT = '左转';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_RIGHT = '右转';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_FORWARD = '前进';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_BACKWARD = '后退';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_STOP = '停止';

Blockly.Msg.MPYTHON_NPLUS_CAR_SET_WS2812_RGB_MESSAGE0 = '千里马LED 红 %1 绿 %2 蓝 %3'
Blockly.Msg.MPYTHON_NPLUS_CAR_SET_BW_RGB_MESSAGE0 = '千里马传感器设置白平衡 R %1 G %2 B %3'
Blockly.Msg.MPYTHON_HORSE_SET_THRESHOLD_MESSAGE0 = '千里马设置循迹阈值 %1'
Blockly.Msg.MPYTHON_NPLUS_CAR_MOTOR_SET_I2C_MESSAGE0 = '千里马左电机 %1 速度 %2 右电机 %3 速度 %4 '


Blockly.Msg.MPYTHON_NPLUS_AI_K210_SET_MESSAGE0 = "小方舟初始化串口 %1";
Blockly.Msg.MPYTHON_NPLUS_AI_SET_MODE_MESSAGE0 = "切换到 %1 模式";
Blockly.Msg.MPYTHON_NPLUS_AI_COLOR = "颜色";
Blockly.Msg.MPYTHON_NPLUS_AI_QR = "二维码";
Blockly.Msg.MPYTHON_NPLUS_AI_FACE = "人脸";
Blockly.Msg.MPYTHON_NPLUS_20 = "20类"
Blockly.Msg.MPYTHON_NPLUS_AI_LEARN_MESSAGE0 = "从中心方框中学习";
Blockly.Msg.MPYTHON_NPLUS_AI_CLEAR_LEARN_MESSAGE0 = "清除学习数据";
Blockly.Msg.MPYTHON_NPLUS_AI_GET_LEARN_DATA_MESSAGE0 = "获取 ID %1 数据"
Blockly.Msg.MPYTHON_NPLUS_AI_PHOTOGRAPH_MESSAGE0 = "拍照存储到TF卡 %1";
Blockly.Msg.MPYTHON_NPLUS_AI_VIDEO_MESSAGE0 = "录像 %1 秒存储到TF卡";
Blockly.Msg.MPYTHON_NPLUS_AI_GET_CENTER_LEARN_DATA_MESSAGE0 = "获取中心坐标";
Blockly.Msg.MPYTHON_NPLUS_AI_GET_RECT_LEARN_DATA_MESSAGE0 = "获取方框坐标";
Blockly.Msg.MPYTHON_NPLUS_AI_GET_COORD_RESULT_MESSAGE0 = "从识别结果中获取 %1 参数";

Blockly.Msg.MPYTHON_NPLUS_ARK_COORD_X = "X坐标";
Blockly.Msg.MPYTHON_NPLUS_ARK_COORD_Y = "Y坐标";
Blockly.Msg.MPYTHON_NPLUS_ARK_COORD_W = "宽度";
Blockly.Msg.MPYTHON_NPLUS_ARK_COORD_H = "高度";

Blockly.Msg.MPYTHON_NPLUS_AI_MANUAL = '手动';
Blockly.Msg.MPYTHON_NPLUS_AI_AUTO =  '自动';
Blockly.Msg.MPYTHON_NPLUS_CAMERA_CHANGE_DEFAULT = '默认';
Blockly.Msg.MPYTHON_NPLUS_CAMERA_CHANGE_EXTEN = '外置';
Blockly.Msg.MPYTHON_NPLUS_ARK_CAMERA_CHANGE_MESSAGE0 = '摄像头切换为%1';
Blockly.Msg.MPYTHON_NPLUS_CHOLLIMA_CAMERA_GAIN_MESSAGE0 = '千里马设置摄像头增益 %1';
Blockly.Msg.MPYTHON_NPLUS_CHOLLIMA_GET_MOTOR_L_ENCODER_MESSAGE0 = '千里马获取左电机编码值';
Blockly.Msg.MPYTHON_NPLUS_CHOLLIMA_GET_MOTOR_R_ENCODER_MESSAGE0 = '千里马获取右电机编码值';
Blockly.Msg.MPYTHON_NPLUS_CHOLLIMA_SET_WS2812_RGB_MESSAGE0 = '千里马 %1 灯  红 %2 绿 %3 蓝 %4';
Blockly.Msg.MPYTHON_NPLUS_CHOLLIMA_READ_BATTERY_VOLTAGE_MESSAGE0 = '千里马  获取电量';
Blockly.Msg.MPYTHON_NPLUS_AI_GET_QR_CODE_MESSAGE0 = '获取二维码信息'

Blockly.Msg.MPYTHON_NPLUS_AI_RT1 = 'RX=P0   TX=P1';
Blockly.Msg.MPYTHON_NPLUS_AI_RT2 = 'RX=P14  TX=P13';
Blockly.Msg.MPYTHON_NPLUS_AI_SET_MODE_TOOLTIP = "返回方框左上及右下坐标（x1,y1,x2,y2）"
Blockly.Msg.MPYTHON_NPLUS_ARK_SET_WS2812_RGB_MESSAGE0 = "小方舟 %1 灯  红 %2 绿 %3 蓝 %4";
Blockly.Msg.MPYTHON_NPLUS_ARK_LED_ZERO = "0"
Blockly.Msg.MPYTHON_NPLUS_ARK_LED_ONE = "1"
Blockly.Msg.MPYTHON_MUSIC_NPLUS_TONE_MESSAGE0 = "小方舟播放音符 %1  节拍 %2"
Blockly.Msg.MPYTHON_NPLUS_ARK_PICTURE_NORMAL = "普通"
Blockly.Msg.MPYTHON_NPLUS_ARK_PICTURE_MODEL = "模型"
Blockly.Msg.MPYTHON_NPLUS_AI_LCD_ROTATE_HORSE_MESSAGE0 = "千里马LCD屏幕旋转 %1"
Blockly.Msg.MPYTHON_NPLUS_AI_LCD_ROTATE_ARK_MESSAGE0 = "小方舟LCD屏幕旋转 %1"
Blockly.Msg.MPYTHON_NPLUS_AI_LCD_RGB_MESSAGE0 = "LCD 字符颜色 %1"
Blockly.Msg.MPYTHON_NPLUS_AI_LCD_CLEAN_MESSAGE0 = "LCD清屏"
Blockly.Msg.MPYTHON_NPLUS_AI_LCD_DISPCHAR_MESSAGE0 = "LCD 显示文本 X %1 Y %2 内容 %3"
Blockly.Msg.MPYTHON_NPLUS_ARK_SD_MODEL_MESSAGE0 = "从SD卡加载 %1 模型 %2 分类为 %3"
Blockly.Msg.MPYTHON_NPLUS_ARK_SD_CHECK = "检测"
Blockly.Msg.MPYTHON_NPLUS_ARK_SD_SORT = "分类"
Blockly.Msg.MPYTHON_NPLUS_AI_GET_MODEL_DATA_MESSAGE0 = "读取SD卡模型分类数据"
Blockly.Msg.MPYTHON_NPLUS_AI_COLOR_RECOGNIZE_ROI_MESSAGE0 = "设置特定区域颜色识别 X %1 Y %2 W %3 H %4"
Blockly.Msg.MPYTHON_NPLUS_AI_COLOR_PARAMETER_SET_MESSAGE0 = "相同颜色识别 %1 亮度设置阈值 %2"
Blockly.Msg.MPYTHON_NPLUS_AI_SINGLE = "单个"
Blockly.Msg.MPYTHON_NPLUS_AI_MULTIPLE = "多个"
Blockly.Msg.MPYTHON_NPLUS_AI_CAMERA_GAIN_MESSAGE0 = "摄像头 %1 设置亮度增益 %2"
Blockly.Msg.MPYTHON_NPLUS_AI_FORMAT_MESSAGE0 = "数据格式化"
Blockly.Msg.MPYTHON_NPLUS_AI_RGB_OFF_MESSAGE0 = "关闭RGB灯"

Blockly.Msg.MPYTHON_NPLUS_AI_ADD_SAMPLE_IMG_MESSAGE0 = '添加到分类 %1 '
Blockly.Msg.MPYTHON_NPLUS_AI_KNN_MODEL_TRAIN_MESSAGE0 = '运行分类器'
Blockly.Msg.MPYTHON_NPLUS_AI_LOAD_KNN_MODEL_MESSAGE0 = '初始化分类器分类为 %1 '
Blockly.Msg.MPYTHON_NPLUS_AI_SAVE_KNN_FILE_MESSAGE0 = '储存分类器为 %1'
Blockly.Msg.MPYTHON_NPLUS_AI_LOAD_KNN_FILE_MESSAGE0 = '加载分类器 %1 分类为 %2'
Blockly.Msg.MPYTHON_NPLUS_AI_GET_DATA_MESSAGE0 = '方框是否存在数据'
Blockly.Msg.MPYTHON_NPLUS_AI_GET_CLASS_DATA_MESSAGE0 = '获取当前ID'
Blockly.Msg.MPYTHON_NPLUS_AI_GET_CLASS_VALUE_MESSAGE0 = '获取当前准确度'

Blockly.Msg.MPYTHON_LARK_MPU_ACCEL_MESSAGE0 = "获取 %1 轴加速度"
Blockly.Msg.MPYTHON_LARK_MPU_GYRO_MESSAGE0 = "获取 %1 轴角速度"
Blockly.Msg.mpython_LARK_GET_MPU_X = "X轴"
Blockly.Msg.mpython_LARK_GET_MPU_Y = "Y轴"
Blockly.Msg.mpython_LARK_GET_MPU_Z = "Z轴"
Blockly.Msg.MPYTHON_LARK_SHT_MESSAGE0 = "获取 %1"
Blockly.Msg.mpython_LARK_TEMPERATURE = "温度"
Blockly.Msg.mpython_LARK_HUMIDITY = "湿度"
Blockly.Msg.MPYTHON_LARK_MOVE_SET_I2C_MESSAGE0 = "千里马 %1 速度 %2"
Blockly.Msg.MPYTHON_LARK_MOVE_STOP_I2C_MESSAGE0 = "千里马停止"
Blockly.Msg.MPYTHON_NPLUS_CHOLLIMA_INIT_MESSAGE0 = "千里马初始化"


////MP3模块
Blockly.Msg.MPYTHON_NPLUS_MP3_INTI_MESSAGE0 = '鳄霸王初始化'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_ONLINE = '在线模式'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_MP3 = 'MP3模式'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_MODE_MESSAGE0 = '鳄霸王音乐 %1'
Blockly.Msg.MPYTHON_NPLUS_MP3_DEVICE_SET_MESSAGE0 = 'MP3播放设备选择'
Blockly.Msg.MPYTHON_NPLUS_MP3_FILE_SELECT_MESSAGE0 = 'MP3 选择文件夹 %1 文件 %2 '
Blockly.Msg.MPYTHON_NPLUS_MP3_GOLBAL_SELECT_MESSAGE0 = 'MP3 全盘选择 %1'
Blockly.Msg.MPYTHON_NPLUS_MP3_NEXT_MESSAGE0 = 'MP3播放 %1'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_NEXT = '下一曲'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_PREV = '上一曲'
Blockly.Msg.MPYTHON_NPLUS_MP3_SOUND_VOL_MESSAGE0 = 'MP3音量 %1'
Blockly.Msg.MPYTHON_NPLUS_MP3_EQ_SET_MESSAGE0 = 'MP3 EQ模式 %1'
Blockly.Msg.MPYTHON_NPLUS_MP3_PLAY_MODE_MESSAGE0 = 'MP3 %1'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_PLAY_ALL = '全部循环'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_FILE_ALL = '文件夹循环'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_SINGEL_1 = '单曲循环'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_SINGEL_2 = '单曲循环2'
Blockly.Msg.MPYTHON_NPLUS_MUSIC_SINGEL_PLAY = '单曲播放'
Blockly.Msg.MPYTHON_NPLUS_MP3_PLAY_MESSAGE0 = 'MP3播放'
Blockly.Msg.MPYTHON_NPLUS_MP3_PAUSE_MESSAGE0 = 'MP3暂停'

//语音识别
Blockly.Msg.MPYTHON_NPLUS_AI_ASR_ADD_WORD_MESSAGE0 = "语音识别 添加关键词 %1 编号为 %2"
Blockly.Msg.MPYTHON_NPLUS_AI_ASR_START_MESSAGE0 = "设置识别阈值 %1 开始识别"
Blockly.Msg.MPYTHON_NPLUS_AI_GET_OBJECT_NAME_MESSAGE0 = "获取物体分类名称"

Blockly.Msg.MPYTHON_CHOLLIMA_GET_VOICE_MESSAGE0 = "千里马 获取声音值"
Blockly.Msg.MPYTHON_CHOLLIMA_GET_LIGHT_MESSAGE0 = "千里马 获取光线值"
Blockly.Msg.MPYTHON_CHOLLIMA_STOP_MUSIC_MESSAGE0 = "千里马 停止播放音乐"
//Blockly.Msg.MPYTHON_CHOLLIMA_STOP_MUSIC_MESSAGE0 = "恢复音乐设置"
Blockly.Msg.MPYTHON_CHOLLIMA_REST_MUSIC_MESSAGE0 = "千里马 恢复音乐设置"
Blockly.Msg.MPYTHON_CHOLLIMA_MUSIC_MUSICAL_NOTE_MESSAGE0 = "千里马 音符%1 节拍%2"
Blockly.Msg.MPYTHON_CHOLLIMA_MUSIC_TONE_TEMPO_MESSAGE0 = "千里马 播放音符%1"
Blockly.Msg.MPYTHON_CHOLLIMA_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0 = "千里马 播放音符列表 %1 等待 %2 %3 循环 %4"
Blockly.Msg.MPYTHON_CHOLLIMA_LOOP_MUSIC_TONE_MESSAGE0 = "千里马 连续播放音符%1"
Blockly.Msg.MPYTHON_CHOLLIMA_NEOPIXEL_SINGLE_MESSAGE0 = "千里马 彩灯%1号 红%2 绿%3 蓝%4"
Blockly.Msg.MPYTHON_CHOLLIMA_NEOPIXEL_SINGLE_GUI_MESSAGE0 = "千里马 彩灯 %1号 颜色为%2"
Blockly.Msg.MPYTHON_CHOLLIMA_NEOPIXEL_SHOW_MESSAGE0 = "千里马 彩灯显示生效"
Blockly.Msg.MPYTHON_CHOLLIMA_NEOPIXEL_OFF_MESSAGE0 = "千里马 彩灯关闭"
Blockly.Msg.MPYTHON_CHOLLIMA_REST_MESSAGE0 = "千里马复位"

Blockly.Msg.MPYTHON_NPLUS_SET_INTONATION_MESSAGE0 = "语音合成 设置语调%1"
Blockly.Msg.MPYTHON_NPLUS_SET_RATE_MESSAGE0 = "语音合成 设置语速%1"
Blockly.Msg.MPYTHON_NPLUS_SET_VOICE_MESSAGE0 = "语音合成 设置音量%1"
Blockly.Msg.MPYTHON_NPLUS_SPEECH_SPEAK_MESSAGE0 = "语音合成 合成语音%1"

//nplus end


//1956
Blockly.Msg.MPYTHON_1956_TRIAXIAL_ACCELERATION_HELPURL = 'https://1956.readthedocs.io/zh/master/library/mpython.html#id2';
Blockly.Msg.MPYTHON_1956_TRIAXIAL_ACCELERATION_MESSAGE0 = '%1轴加速度';
Blockly.Msg.MPYTHON_1956_TRIAXIAL_ACCELERATION_TOOLTIP = '单位g,范围-2~+2g。';

Blockly.Msg.MPYTHON_1956_TRIAXIAL_AUGULAR_VELOCITY_HELPURL = 'https://1956.readthedocs.io/zh/master/library/mpython.html#id2';
Blockly.Msg.MPYTHON_1956_TRIAXIAL_AUGULAR_VELOCITY_MESSAGE0 = '%1轴角速度';
Blockly.Msg.MPYTHON_1956_TRIAXIAL_AUGULAR_VELOCITY_TOOLTIP = '范围±500°/秒';

Blockly.Msg.MPYTHON_1956_EULER_ANGLE_HELPURL = 'https://1956.readthedocs.io/zh/master/library/mpython.html#id2';
Blockly.Msg.MPYTHON_1956_EULER_ANGLE_MESSAGE0 = '%1欧拉角';
Blockly.Msg.MPYTHON_1956_EULER_ANGLE_TOOLTIP = '返回当前欧拉角(Pitch,Roll,Yaw),单位角度';

Blockly.Msg.MPYTHON_1956_QUATERNION_HELPURL = 'https://1956.readthedocs.io/zh/master/library/mpython.html#id2';
Blockly.Msg.MPYTHON_1956_QUATERNION_MESSAGE0 = '%1四元数';
Blockly.Msg.MPYTHON_1956_QUATERNION_TOOLTIP = '返回当前四元数(w,x,y,z)';

Blockly.Msg.MPYTHON_1956_MOTOR_FOREWARD_MESSAGE0 = '电机正转 %1 速度%2';
Blockly.Msg.MPYTHON_1956_MOTOR_FOREWARD_TOOLTIP = '提供4路电机驱动。电机反转 范围0~100。';
Blockly.Msg.MPYTHON_1956_MOTOR_FOREWARD_HELPURL = 'https://1956.readthedocs.io/zh/master/library/apu.html#id2';

Blockly.Msg.MPYTHON_1956_MOTOR_REVERSAL_MESSAGE0 = '电机反转 %1 速度%2';
Blockly.Msg.MPYTHON_1956_MOTOR_REVERSAL_TOOLTIP = '提供4路电机驱动。电机正转 范围0~100。';
Blockly.Msg.MPYTHON_1956_MOTOR_REVERSAL_HELPURL = 'https://1956.readthedocs.io/zh/master/library/apu.html#id2';

Blockly.Msg.MPYTHON_1956_MOTOR_STOP_MESSAGE0 = '电机 %1 停止';
Blockly.Msg.MPYTHON_1956_MOTOR_STOP_TOOLTIP = '提供4路电机驱动。speed 范围0时停止';
Blockly.Msg.MPYTHON_1956_MOTOR_STOP_HELPURL = 'https://1956.readthedocs.io/zh/master/library/apu.html#id2';

//1956 人脸识别
Blockly.Msg.MPYTHON_1956_FACE_TRACKING_HELPURL = '';
Blockly.Msg.MPYTHON_1956_FACE_TRACKING_MESSAGE0 = '(1956)选择训练模型 人脸';
Blockly.Msg.MPYTHON_1956_FACE_TRACKING_TOOLTIP = '可以识别并且追踪人脸，显示人脸大小等';

Blockly.Msg.MPYTHON_1956_PHOTOGRAPH_TRACKING_HELPURL = '';
Blockly.Msg.MPYTHON_1956_PHOTOGRAPH_TRACKING_MESSAGE0 = '(1956)调用摄像头进行 人脸识别';
Blockly.Msg.MPYTHON_1956_PHOTOGRAPH_TRACKING_TOOLTIP = '可以识别并且追踪人脸，显示人脸大小等';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_MESSAGE0 = '(1956)获取识别后人脸的 所有参数';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_TOOLTIP = '获取识别后人脸的 所有参数';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_X_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_X_MESSAGE0 = '(1956)获取识别后人脸的 x坐标';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_X_TOOLTIP = '获取识别后人脸的 x坐标';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_Y_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_Y_MESSAGE0 = '(1956)获取识别后人脸的 y坐标';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_Y_TOOLTIP = '获取识别后人脸的 y坐标';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_W_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_W_MESSAGE0 = '(1956)获取识别后人脸的 宽度';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_W_TOOLTIP = '获取识别后人脸的 宽度';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_H_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_H_MESSAGE0 = '(1956)获取识别后人脸的 高度';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_H_TOOLTIP = '获取识别后人脸的 高度';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_VALUE_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_VALUE_MESSAGE0 = '(1956)获取识别后人脸的 置信度';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_VALUE_TOOLTIP = '获取识别后人脸的 置信度';

Blockly.Msg.MPYTHON_1956_RESULT_FACE_OBJNUM_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_OBJNUM_MESSAGE0 = '(1956)获取识别后人脸的 数量';
Blockly.Msg.MPYTHON_1956_RESULT_FACE_OBJNUM_TOOLTIP = '获取识别后人脸的 数量';


//1956 20分类
Blockly.Msg.MPYTHON_1956_20class_TRACKING_HELPURL = '';
Blockly.Msg.MPYTHON_1956_20class_TRACKING_MESSAGE0 = '(1956)选择训练模型 20类';
Blockly.Msg.MPYTHON_1956_20class_TRACKING_TOOLTIP = '可以识别20个类型，分别是0-19为飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛,餐桌,狗,屋子,摩托车,人,盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_1956_PHOTOGRAPH_20TRACKING_HELPURL = '';
Blockly.Msg.MPYTHON_1956_PHOTOGRAPH_20TRACKING_MESSAGE0 = '(1956)调用摄像头进行 20类识别';
Blockly.Msg.MPYTHON_1956_PHOTOGRAPH_20TRACKING_TOOLTIP = '调用摄像头进行 20类识别';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_MESSAGE0 = '(1956)获取识别后20类的 所有参数';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_TOOLTIP = '获取识别后20类的 所有参数';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_X_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_X_MESSAGE0 = '(1956)获取识别后20类的 x坐标';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_X_TOOLTIP = '获取识别后20类的 x坐标';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_Y_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_Y_MESSAGE0 = '(1956)获取识别后20类的 y坐标';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_Y_TOOLTIP = '获取识别后20类的 y坐标';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_W_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_W_MESSAGE0 = '(1956)获取识别后20类的 宽度';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_W_TOOLTIP = '获取识别后20类的 宽度';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_H_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_H_MESSAGE0 = '(1956)获取识别后20类的 高度';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_H_TOOLTIP = '获取识别后20类的 高度';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_VALUE_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_VALUE_MESSAGE0 = '(1956)获取识别后20类的 置信度';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_VALUE_TOOLTIP = '获取识别后20类的 置信度';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_OBJNUM_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_OBJNUM_MESSAGE0 = '(1956)获取识别后20类的 数量';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_OBJNUM_TOOLTIP = '获取识别后20类的 数量';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_CLASSID_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_CLASSID_MESSAGE0 = '(1956)获取识别后20类的 类型';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_CLASSID_TOOLTIP = '获取识别后20类的 类型可以放入获取识别的参数，可以识别20个类型，分别是0-19为飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛,餐桌,狗,屋子,摩托车,人,盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_INDEX_HELPURL = '';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_INDEX_MESSAGE0 = '(1956)获取识别后20类的 类型数量';
Blockly.Msg.MPYTHON_1956_RESULT_20CLASS_INDEX_TOOLTIP = '获取识别后20类的 类型数量';

//重改名字，掌控板改为1956
Blockly.Msg.MPYTHON_1956_SHAKE_DETECTOR_MESSAGE0 = '当1956 %1 时';
Blockly.Msg.MPYTHON_1956_SHAKE_DETECTOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_1956_SHAKE_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_1956_TILT_DETECTOR_MESSAGE0 = '当1956 %1 时';
Blockly.Msg.MPYTHON_1956_TILT_DETECTOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_1956_TILT_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_1956_IS_SHAKED_MESSAGE0 = '1956 %1';
Blockly.Msg.MPYTHON_1956_IS_SHAKED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_1956_IS_SHAKED_TOOLTIP = '';

Blockly.Msg.MPYTHON_1956_IS_TILTED_MESSAGE0 = '1956 %1';
Blockly.Msg.MPYTHON_1956_IS_TILTED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_1956_IS_TILTED_TOOLTIP = '';


//冲锋舟
//yolo分类
Blockly.Msg.MPYTHON_KHADAS_INITIALIZE_MESSAGE0 = '初始化 yolo识别模型';
Blockly.Msg.MPYTHON_KHADAS_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHON_KHADAS_INITIALIZE_TOOLTIP =
    'yolo识别模型可识别80种类，分别为：\n' +
    '1~10:person,bicycle,car,motorbike,aeroplane,bus,train,truck,boat,traffic light,\n' +
    '11~20:fire hydrant,stop sign,parking meter,bench,bird,cat,dog,horse,sheep,cow,\n' +
    '21~30:elephant,bear,zebra,giraffe,backpack,umbrella,handbag,tie,suitcase,frisbee,\n' +
    '31~40:skis,snowboard,sports ball,kite,baseball bat,baseball glove,skateboard,surfboard,tennis racket,bottle,\n' +
    '41~50:wine glass,cup,fork,knife,spoon,bowl,banana,apple,sandwich,orange,\n' +
    '51~60:broccoli,carrot,hot dog,pizza,donut,cake,chair,sofa,pottedplant,bed,\n' +
    '61~70:diningtable,toilet,tvmonitor,laptop,mouse,remote,keyboard,cell phone,microwave,oven,\n' +
    '71~80:toaster,sink,refrigerator,book,clock,vase,scissors,teddy bear,hair drier,toothbrush,\n' +
    '对应中文翻译，分别为：\n' +
    '1~10:人,自行车,车,摩托车,飞机,公共汽车,火车,卡车,船,红绿灯,\n' +
    '11~20:消防栓,停车标志,停车费,板凳上,鸟,猫,狗,马,羊,牛,\n' +
    '21~30:大象,熊,斑马,长颈鹿,背包,伞,手提包,领带,手提箱,飞盘,\n' +
    '31~40:雪橇,滑雪板,体育球,风筝,棒球棒,棒球手套,滑板,冲浪板,网球拍,瓶,\n' +
    '41~50:酒杯,杯,叉,刀,勺子,碗,香蕉,苹果,三明治,橙色,\n' +
    '51~60:西兰花,胡萝卜,热狗,披萨,甜甜圈,蛋糕,椅子,沙发,盆栽植物,床上,\n' +
    '61~70:餐桌,厕所,电视,移动PC,鼠标,远程,键盘,手机,微波,烤箱,\n' +
    '71~80:烤面包机,水槽,冰箱,书,时钟,花瓶,剪刀,泰迪熊,头发干燥器,牙刷';

Blockly.Msg.MPYTHON_KHADAS_CHOOSE_IMG_MESSAGE0 = '图片名称%1';
Blockly.Msg.MPYTHON_KHADAS_CHOOSE_IMG_TOOLTIP = '';
Blockly.Msg.MPYTHON_KHADAS_CHOOSE_IMG_HELPURL = '';

Blockly.Msg.MPYTHON_KHADAS_TYPE_RECTANGLE_MESSAGE0 = '显示 框选类型名%1';
Blockly.Msg.MPYTHON_KHADAS_TYPE_RECTANGLE_TOOLTIP = '';
Blockly.Msg.MPYTHON_KHADAS_TYPE_RECTANGLE_HELPURL = '';

Blockly.Msg.MPYTHON_KHADAS_RETURN_TYPE_MESSAGE0 = '所有 类型';
Blockly.Msg.MPYTHON_KHADAS_RETURN_TYPE_TOOLTIP = '';

Blockly.Msg.MPYTHON_KHADAS_RETURN_TYPE_HELPURL = '';

Blockly.Msg.MPYTHON_KHADAS_SHOW_IMAGE_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHON_KHADAS_SHOW_IMAGE_TOOLTIP = '';
Blockly.Msg.MPYTHON_KHADAS_SHOW_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHON_KHADAS_RETURN_NAME_MESSAGE0 = '所有 类型名';
Blockly.Msg.MPYTHON_KHADAS_RETURN_NAME_HELPURL = '';
Blockly.Msg.MPYTHON_KHADAS_RETURN_NAME_TOOLTIP =
    'yolo识别模型可识别80种类，分别为：\n' +
    '1~10:person,bicycle,car,motorbike,aeroplane,bus,train,truck,boat,traffic light,\n' +
    '11~20:fire hydrant,stop sign,parking meter,bench,bird,cat,dog,horse,sheep,cow,\n' +
    '21~30:elephant,bear,zebra,giraffe,backpack,umbrella,handbag,tie,suitcase,frisbee,\n' +
    '31~40:skis,snowboard,sports ball,kite,baseball bat,baseball glove,skateboard,surfboard,tennis racket,bottle,\n' +
    '41~50:wine glass,cup,fork,knife,spoon,bowl,banana,apple,sandwich,orange,\n' +
    '51~60:broccoli,carrot,hot dog,pizza,donut,cake,chair,sofa,pottedplant,bed,\n' +
    '61~70:diningtable,toilet,tvmonitor,laptop,mouse,remote,keyboard,cell phone,microwave,oven,\n' +
    '71~80:toaster,sink,refrigerator,book,clock,vase,scissors,teddy bear,hair drier,toothbrush,\n' +
    '对应中文翻译，分别为：\n' +
    '1~10:人,自行车,车,摩托车,飞机,公共汽车,火车,卡车,船,红绿灯,\n' +
    '11~20:消防栓,停车标志,停车费,板凳上,鸟,猫,狗,马,羊,牛,\n' +
    '21~30:大象,熊,斑马,长颈鹿,背包,伞,手提包,领带,手提箱,飞盘,\n' +
    '31~40:雪橇,滑雪板,体育球,风筝,棒球棒,棒球手套,滑板,冲浪板,网球拍,瓶,\n' +
    '41~50:酒杯,杯,叉,刀,勺子,碗,香蕉,苹果,三明治,橙色,\n' +
    '51~60:西兰花,胡萝卜,热狗,披萨,甜甜圈,蛋糕,椅子,沙发,盆栽植物,床上,\n' +
    '61~70:餐桌,厕所,电视,移动PC,鼠标,远程,键盘,手机,微波,烤箱,\n' +
    '71~80:烤面包机,水槽,冰箱,书,时钟,花瓶,剪刀,泰迪熊,头发干燥器,牙刷';

Blockly.Msg.MPYTHON_KHADAS_RETURN_POSSIBLITY_MESSAGE0 = '所有 类型置信度';
Blockly.Msg.MPYTHON_KHADAS_RETURN_POSSIBLITY_TOOLTIP = '';
Blockly.Msg.MPYTHON_KHADAS_RETURN_POSSIBLITY_HELPURL = '';

Blockly.Msg.MPYTHON_KHADAS_RETURN_ONE_NAME_MESSAGE0 = '第%1位 类型名 结果';
Blockly.Msg.MPYTHON_KHADAS_RETURN_ONE_NAME_TOOLTIP = '';
Blockly.Msg.MPYTHON_KHADAS_RETURN_ONE_NAME_HELPURL = '';

Blockly.Msg.MPYTHON_KHADAS_RETURN_ONE_POSSIBLITY_MESSAGE0 = '第%1位 类型置信度 结果';
Blockly.Msg.MPYTHON_KHADAS_RETURN_ONE_POSSIBLITY_TOOLTIP = '';
Blockly.Msg.MPYTHON_KHADAS_RETURN_ONE_POSSIBLITY_HELPURL = '';

Blockly.Msg.MPYTHON_ASSAULT_KHADAS_SEND_FORMAT_MESSAGE0 = 'SIoT         IP%1%2 账号%3密码%4%5 项ID%6名称%7 %8发送消息%9';
Blockly.Msg.MPYTHON_ASSAULT_KHADAS_SEND_FORMAT_TOOLTIP = '';
Blockly.Msg.MPYTHON_ASSAULT_KHADAS_SEND_FORMAT_HELPURL = '';



//三分类
Blockly.Msg.PYTHON_KHADAS_ASSAULT_INITIALIZE_MESSAGE0 = '初始化 CNN 三分类模型 标签%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_INITIALIZE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_INITIALIZE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_SEND_PREDICT_MESSAGE0 = '预测图片%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SEND_PREDICT_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SEND_PREDICT_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_SEND_TRAIN_MESSAGE0 = '训练数据 加载视频路径%1 标签%2';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SEND_TRAIN_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SEND_TRAIN_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_RESIZE_IMAGE_MESSAGE0 = '绘制训练历史';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RESIZE_IMAGE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RESIZE_IMAGE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_TRAIN_MODEL_MESSAGE0 = '配置参数开始训练模型 训练次数%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_TRAIN_MODEL_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_TRAIN_MODEL_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_READ_PREDICT_MESSAGE0 = '读取图片 路径%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_READ_PREDICT_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_READ_PREDICT_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_GET_HIGHEST_TYPE_MESSAGE0 = '获取置信度最大的类别 预测图片%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_GET_HIGHEST_TYPE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_GET_HIGHEST_TYPE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_SAVE_PATH_MESSAGE0 = '保存模型 路径%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SAVE_PATH_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SAVE_PATH_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_LOAD_MESSAGE0 = '加载模型 路径%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_LOAD_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_LOAD_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_CAMERA_MESSAGE0 = '调用摄像头拍摄图片 摄像头%1 保存图片路径%2';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_CAMERA_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_CAMERA_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETURN_LABLE_MESSAGE0 = '获取标签名(列表)';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETURN_LABLE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETURN_LABLE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_FILE_PATH_MESSAGE0 = '返回文件路径';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_FILE_PATH_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_FILE_PATH_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_PICTUREN_DISLOCATE_MESSAGE0 = '图片顺序打乱%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_PICTUREN_DISLOCATE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_PICTUREN_DISLOCATE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_SAVE_PATH_MESSAGE0 = '保存模型 路径%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SAVE_PATH_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_SAVE_PATH_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_VIDEO_PICTURE_PATH_MESSAGE0 = '设置视频转图片 存放图片的文件路径%1';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_VIDEO_PICTURE_PATH_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_VIDEO_PICTURE_PATH_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETUNRN_TRAIN_DATA_MESSAGE0 = '返回训练历史数据';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETUNRN_TRAIN_DATATOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETUNRN_TRAIN_DATA_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETUNRN_MODEL_PATH_MESSAGE0 = '返回模型路径';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETUNRN_MODEL_PATH_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ASSAULT_RETUNRN_MODEL_PATH_HELPURL = '';

//情绪分类
Blockly.Msg.PYTHON_KHADAS_EMOTIONAI_MODEL_MESSAGE0 = '初始化 Emotion识别模型';
Blockly.Msg.PYTHON_KHADAS_EMOTIONAI_MODEL_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_EMOTIONAI_MODEL_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_GATHER_PICTURE_MESSAGE0 = '采集 训练图片%1 摄像头%2 数量%4 标签%3';
Blockly.Msg.PYTHON_KHADAS_GATHER_PICTURE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_GATHER_PICTURE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_TRAIN_PICTURE_MESSAGE0 = '训练模型 次数%1';
Blockly.Msg.PYTHON_KHADAS_TRAIN_PICTURE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_TRAIN_PICTURE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_SHOOT_PICTURE_MESSAGE0 = '拍照%1 摄像头%2 名称%3';
Blockly.Msg.PYTHON_KHADAS_SHOOT_PICTURE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_SHOOT_PICTURE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_SHOW_PICTURE_MESSAGE0 = '显示图片';
Blockly.Msg.PYTHON_KHADAS_SHOW_PICTURE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_SHOW_PICTURE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_ALL_VALUE_MESSAGE0 = '获取识别后人脸的 所有参数';
Blockly.Msg.PYTHON_KHADAS_ALL_VALUE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_ALL_VALUE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_HAPPY_VALUE_MESSAGE0 = '情绪为开心';
Blockly.Msg.PYTHON_KHADAS_HAPPY_VALUE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_HAPPY_VALUE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_SAD_VALUE_MESSAGE0 = '情绪为悲伤';
Blockly.Msg.PYTHON_KHADAS_SAD_VALUE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_SAD_VALUE_HELPURL = '';

Blockly.Msg.PYTHON_KHADAS_NEUTRAL_VALUE_MESSAGE0 = '情绪为平静';
Blockly.Msg.PYTHON_KHADAS_NEUTRAL_VALUE_TOOLTIP = '';
Blockly.Msg.PYTHON_KHADAS_NEUTRAL_VALUE_HELPURL = '';

//AI摄像头 peripheral
Blockly.Msg.MPYTHON_AICAMERA_UART_VARIABLE_INIT_MESSAGE0 = '将变量%1 设定为%2';
Blockly.Msg.MPYTHON_AICAMERA_UART_VARIABLE_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_UART_VARIABLE_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_UART_INIT_MESSAGE0 = 'AI 摄像头 初始化  tx %1 rx %2';
Blockly.Msg.MPYTHON_AICAMERA_UART_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_UART_INIT_TOOLTIP = DEVICE + '支持3组串口。0用于REPL，剩下1、2两组串口可用。所有引脚均可以作为串口的输入RX，除 P2、P3 、P4 、P10 只能作为输入，其余所有的引脚理论上都可以作为输出TX。';

Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_LIGHT_MESSAGE0 = '补光灯 %1';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_LIGHT_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_LIGHT_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_MESSAGE0 = '按键 %1';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_TOOLTIP = '';

Blockly.Msg.IS_PRESSED = '已经按下';
Blockly.Msg.WAS_PRESSED = '曾经按下';
Blockly.Msg.GET_PRESSED = '按下过的次数';

Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_NEW_MESSAGE0 = '%1按键 %2';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_NEW_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_NEW_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_IS_PRESSED_MESSAGE0 = '按键 已经按下';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_IS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_IS_PRESSED_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_WAS_PRESSED_MESSAGE0 = '按键 曾经按下';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_WAS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_WAS_PRESSED_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_GET_PRESSED_MESSAGE0 = '按键 按下过的次数';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_GET_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_GET_PRESSED_TOOLTIP = '';

//AI摄像头 sensor通用
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_BASIC_SETTING_MESSAGE0 = '配置摄像头并开启%9 摄像头帧大小%1 %10摄像头帧格式%2 %11 水平镜像模式%3 垂直翻转模式%4 %12 摄像头白平衡%5 %13摄像头亮度%6 设置摄像头拍摄 宽度%7 设置摄像头拍摄 高度%8';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_BASIC_SETTING_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_BASIC_SETTING_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_INITIALIZE_MESSAGE0 = '摄像头 初始化';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_INITIALIZE_TOOLTIP = '拍摄图像,返回Image对象。';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_INITIALIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_INITIALIZE_1_MESSAGE0 = '%1摄像头 初始化';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_INITIALIZE_1_TOOLTIP = '拍摄图像,返回Image对象。';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_INITIALIZE_1_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_PIXFORMAT_MESSAGE0 = '摄像头 设置帧 尺寸%1';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_PIXFORMAT_TOOLTIP = '摄像头 设置帧大小\n' + 'VGA = 11,尺寸640x480\n' + 'QVGA = 10,尺寸320x240\n' + 'QQVGA = 9,尺寸160x120\n' + 'QQQVGA = 8,尺寸80x60\n' + 'QQQQVGA = 7,尺寸40x30\n如果图像大于LCD尺寸，lcd.display()显示会自己适配\n所有ai摄像头，人工智能交互实验箱，1956这三款硬件推荐使用QVGA';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_PIXFORMAT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_FRAMESIZE_MESSAGE0 = '摄像头 设置帧 格式 %1';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_FRAMESIZE_TOOLTIP = 'RGB565为彩色，GRAYSCALE为黑白';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_FRAMESIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SNAPSHOT_MESSAGE0 = '摄像头 拍摄图像';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SNAPSHOT_TOOLTIP = '拍摄图像,返回Image对象。';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SNAPSHOT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_HMIRROR_MESSAGE0 = '摄像头 %1 模式 %2';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_HMIRROR_TOOLTIP = '打开（True）或关闭（False）水平垂直翻转模式。默认关闭。';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_HMIRROR_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_AUTO_WHITEBAL_MESSAGE0 = '摄像头 白平衡%1';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_AUTO_WHITEBAL_TOOLTIP = '设置摄像自动白平衡模式,默认打开。True为打开, False为关闭自动白平衡。若您想追踪颜色，则需关闭白平衡。';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_AUTO_WHITEBAL_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_ENABLE_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_ENABLE_TOOLTIP = '捕获图像控制\n启动或关闭捕获图像功能(默认经过复位，设置帧大小，设置像素格式后会自动启动摄像头，不调用run(1)也会开始采集图像)';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_ENABLE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_WINDOWING_MESSAGE0 = '摄像头 设置窗口 宽%1 高%2';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_WINDOWING_TOOLTIP = '摄像头窗口设置有限制，必须为8的倍';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_WINDOWING_HELPURL = '';


//AI摄像头 LCD通用
Blockly.Msg.MPYTHON_AICAMERA_LCD_SHOW_SIZE_MESSAGE0 = 'LCD 显示%1 x%2 y%3';
Blockly.Msg.MPYTHON_AICAMERA_LCD_SHOW_SIZE_TOOLTIP = '显示图像的位置';
Blockly.Msg.MPYTHON_AICAMERA_LCD_SHOW_SIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_LCD_DISPLAY_MESSAGE0 = 'LCD 显示图像 %1';
Blockly.Msg.MPYTHON_AICAMERA_LCD_DISPLAY_TOOLTIP = '在液晶屏上显示图片';
Blockly.Msg.MPYTHON_AICAMERA_LCD_DISPLAY_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_LCD_CLEAR_MESSAGE0 = 'LCD 清屏 颜色为r%1 g%2 b%3';
Blockly.Msg.MPYTHON_AICAMERA_LCD_CLEAR_TOOLTIP = '将液晶屏清空为黑色';
Blockly.Msg.MPYTHON_AICAMERA_LCD_CLEAR_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_LCD_DRAW_STRING_MESSAGE0 = 'LCD 绘制文本 x%1 y%2 显示%3 颜色为%4';
Blockly.Msg.MPYTHON_AICAMERA_LCD_DRAW_STRING_TOOLTIP = 'LCD 显示文本，可显示英文，阿拉伯数字';
Blockly.Msg.MPYTHON_AICAMERA_LCD_DRAW_STRING_HELPURL = '';

//AI摄像头 IMG通用
Blockly.Msg.MPYTHON_AICAMERA_IMG_RESIZE_MESSAGE0 = '图像 %1重设大小 x%2 y%3';
Blockly.Msg.MPYTHON_AICAMERA_IMG_RESIZE_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_RESIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_INVERT_MESSAGE0 = '图像%1 像素反转';
Blockly.Msg.MPYTHON_AICAMERA_IMG_INVERT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_INVERT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_INIT_MESSAGE0 = '图像初始化';
Blockly.Msg.MPYTHON_AICAMERA_IMG_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_STRECH_CHAR_MESSAGE0 = '图像%1 暗角%2';
Blockly.Msg.MPYTHON_AICAMERA_IMG_STRECH_CHAR_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_STRECH_CHAR_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_PIX_TO_AI_MESSAGE0 = '图像%1 像素转ai';
Blockly.Msg.MPYTHON_AICAMERA_IMG_PIX_TO_AI_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_PIX_TO_AI_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_BRIGHTNESS_MESSAGE0 = '设置摄像头 亮度%1';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_BRIGHTNESS_TOOLTIP = '摄像头亮度，数值为int类型，范围为[-2,+2]';
Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_BRIGHTNESS_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_PIXEL_MESSAGE0 = '图像 绘制点 x%1 y%2 颜色为 r%3 g%4 b%5';
Blockly.Msg.MPYTHON_AICAMERA_IMG_PIXEL_TOOLTIP = '设置图像像素点颜色';
Blockly.Msg.MPYTHON_AICAMERA_IMG_PIXEL_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_HVLINE_MESSAGE0 = '图像 绘制线 %1 x%2 y%3 长度%4 颜色为 r%5 g%6 b%7';
Blockly.Msg.MPYTHON_AICAMERA_IMG_HVLINE_TOOLTIP = '在图像中绘制水平，垂直线';
Blockly.Msg.MPYTHON_AICAMERA_IMG_HVLINE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_LINE_MESSAGE0 = '图像 绘制线 x%1 y%2 宽%3 高%4 颜色为 r%5 g%6 b%7';
Blockly.Msg.MPYTHON_AICAMERA_IMG_LINE_TOOLTIP = '在图像中绘制任意线';
Blockly.Msg.MPYTHON_AICAMERA_IMG_LINE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_RECT_MESSAGE0 = '图像 绘制矩形 %8 x%1 y%2 宽%3 高%4 颜色为 r%5 g%6 b%7';
Blockly.Msg.MPYTHON_AICAMERA_IMG_RECT_TOOLTIP = '在图像中绘制空心，实心矩形';
Blockly.Msg.MPYTHON_AICAMERA_IMG_RECT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_CLEAR_MESSAGE0 = '图像%1 像素点清除';
Blockly.Msg.MPYTHON_AICAMERA_IMG_CLEAR_TOOLTIP = '将图像中的所有像素设置为零';
Blockly.Msg.MPYTHON_AICAMERA_IMG_CLEAR_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_MESSAGE0 = '图像 显示生效';
Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_TOOLTIP = '将图像中的IMG变量显示';
Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_IMAGE_IMAGE_MESSAGE0 = '图像%1 画中画 %2 x%3 y%4 x缩放%5 y缩放%6';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_IMAGE_IMAGE_TOOLTIP = '在液晶屏上显示图片';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_IMAGE_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_IMAGE_MESSAGE0 = '图片';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_IMAGE_TOOLTIP = '在图像中绘制任意线';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DISPCHAR_MESSAGE0 = '图像%1 颜色为%5 绘制文本%2 x%3 y%4 显示%6';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DISPCHAR_TOOLTIP = '在图像中的(x, y)位置开始绘制文本。字体采用 Google Noto Sans CJK 开源无衬线字体字体。字体高度16像素点,支持英文,简体中文繁体中文，日文和韩文语言。';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DISPCHAR_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_LINE_MESSAGE0 = '图像%1 颜色为%7 绘制线%2 x1%3 y1%4 x2%5 y2%6';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_LINE_TOOLTIP = '在图像中绘制任意线';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_LINE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_RECT_MESSAGE0 = '图像%1 颜色为%6 绘制矩形 %7 %8 x%2 y%3 宽%4 高%5';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_RECT_TOOLTIP = '在图像中绘制空心，实心矩形';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_RECT_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_CIRCLE_MESSAGE0 = '图像%1 颜色为%5 绘制圆形 %6 %7 x%2 y%3 半径%4';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_CIRCLE_TOOLTIP = '在图像中绘制空心，实心圆形';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_CIRCLE_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_TEN_STRING_MESSAGE0 = '图像%1 颜色为%4 绘制十字线%6  x%2 y%3 尺寸%5';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_TEN_STRING_TOOLTIP = '在图像上绘制十字线';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_TEN_STRING_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_ARROWS_MESSAGE0 = '图像%1 颜色为%6 绘制箭头%7  x1%2 y1%3 x2%4 y2%5';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_ARROWS_TOOLTIP = '在图像上绘制一个箭头';
Blockly.Msg.MPYTHON_AICAMERA_IMG_DRAW_ARROWS_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_ECTYPE_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_ECTYPE_MESSAGE0 = '图像%1 保存入SD卡 保存路径%2';
Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_ECTYPE_TOOLTIP = '图像副本保存入SD卡';

Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_IMAGE_PIRCTURE_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_IMAGE_PIRCTURE_MESSAGE0 = '图像 %1 加载路径%2';
Blockly.Msg.MPYTHON_AICAMERA_IMG_SHOW_IMAGE_PIRCTURE_TOOLTIP = '显示图像';

Blockly.Msg.MPYTHON_AICAMERA_IMG_RGB_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_RGB_MESSAGE0 = '颜色为r%1 g%2 b%3';
Blockly.Msg.MPYTHON_AICAMERA_IMG_RGB_TOOLTIP =

Blockly.Msg.MPYTHON_AICAMERA_IMG_LIST_COLOR_MESSAGE0 = '颜色为 %1';
Blockly.Msg.MPYTHON_AICAMERA_IMG_LIST_COLOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_COLOR_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_COLOR_MESSAGE0 = '图像%1 找色块%4 LAB颜色阈值(列表)%2 面积阈值%3';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_COLOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_LAB_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_LAB_MESSAGE0 = 'LAB颜色阈值%1';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_LAB_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_MESSAGE0 = '返回 图像 发现色块 (列表)';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_TOOLTIP = '返回所有内容';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_MAX_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_MAX_MESSAGE0 = '获取 发现最大色块对象的%1';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_MAX_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_ONLY_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_ONLY_MESSAGE0 = '获取 发现色块对象%1 的%2';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_BLOBS_ONLY_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_IMG_GET_PIXEL_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_IMG_GET_PIXEL_MESSAGE0 = '获取图像 %1 在 x : %2 y : %3 位置的点的颜色像素值';
Blockly.Msg.MPYTHON_AICAMERA_IMG_GET_PIXEL_TOOLTIP = '灰度图返回(x, y)位置的灰度像素值\nRGB565返回(x, y)位置的RGB888像素元组(r, g, b)\nBayer图像: 返回(x, y)位置的像素值';

Blockly.Msg.MPYTHON_AICAMERA_IMG_FIND_APRILTAGS_MESSAGE0 = '图像%1 AprilTag标记跟踪';
Blockly.Msg.MPYTHON_AICAMERA_IMG_FIND_APRILTAGS_HELPURL = 'http://cdn.makeymonkey.com/test/TAG36H11%20TAG.zip';
Blockly.Msg.MPYTHON_AICAMERA_IMG_FIND_APRILTAGS_TOOLTIP =
    'AprilTag是一个视觉的基准系统，可以使用AprilTag，通过算法来获取标签相对于摄像机的位置，距离以及坐标。\n' +
    'AprilTag有非常多的类型的标签，默认只用一种类型的标签(二维码TAG36H11)\n' +
    '通过右键点击帮助下载标签(二维码TAG36H11)';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_APRILTAGS_MESSAGE0 = '返回 图像 AprilTag标记跟踪 (列表)';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_APRILTAGS_HELPURL = 'https://docs.singtown.com/micropython/zh/latest/openmvcam/library/omv.image.html#apriltag-apriltag';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_APRILTAGS_TOOLTIP = '返回所有参数，参数详细说明，通过右键点击帮助查看文档';

Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_APRILTAGS_ONLY_MESSAGE0 = '获取 AprilTag标记跟踪对象%1 的%2';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_APRILTAGS_ONLY_HELPURL = 'https://docs.singtown.com/micropython/zh/latest/openmvcam/library/omv.image.html#apriltag-apriltag';
Blockly.Msg.MPYTHON_AICAMERA_IMG_TRACE_APRILTAGS_ONLY_TOOLTIP = '选择返回对应参数，参数详细说明，通过右键点击帮助查看文档';



//AI摄像头 kpu人脸识别，20分类新，手写数字通用
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_ALL_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_ALL_MESSAGE0 = 'kpu 配置为%1模式';
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_ALL_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_FACE_TRACKING_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FACE_TRACKING_MESSAGE0 = 'kpu 加载内置模型 %1';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FACE_TRACKING_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_LOAD_CUSTOM_MESSAGE0 = 'kpu 加载路径模型 %1';
Blockly.Msg.MPYTHON_AICAMERA_KPU_LOAD_CUSTOM_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_LOAD_CUSTOM_HELPURL = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_YOLO2_MESSAGE0 = 'kpu 初始化YOLO网络%5 概率阈值%1 门限%2 锚点数%3 锚点%4';
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_YOLO2_TOOLTIP =
    '概率阈值：值的区间0~1，数值默认0.5，大于所选数值的概率则可以检测，例如：使用人脸追踪，概率阈值大于0.5才会检测\n' +
    '门限：值的区间0~1，数值默认0.3，删除所有检测概率大于给定NMS阈值的预测边界框，仅保留最佳边界框。也就是删除所有检测概率大于0.3的预测边界框。\n' +
    '锚点数：默认5个锚点数，因为anchor元组内的每两个参数为一个锚点数。\n' +
    '锚点：描点参数与模型参数一致。预测框的初始宽高，第一个是w，第二个是h，总数量是num*2，默认的人脸追踪有5个预测框。\n' +
    '例如：摄像头在同一位置拍摄的图中有一个人和一辆汽车重叠。因此，人在前面，部分汽车被遮盖了，汽车和行人的中心都落在同一网格中。\n' +
    '由于每个网格单元的输出向量只能具有一个类别，因此将被迫选择汽车或人。但是，通过定义锚框，我们可以创建更长的网格单元矢量，并将多个类与每个网格单元相关联。';

Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_YOLO2_BASE_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_YOLO2_BASE_MESSAGE0 = 'kpu 初始化AI %1';
Blockly.Msg.MPYTHON_AICAMERA_KPU_INITIALIZE_YOLO2_BASE_TOOLTIP ='';

Blockly.Msg.MPYTHON_AICAMERA_KPU_FACE_DETECT_ANCHOR_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FACE_DETECT_ANCHOR_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FACE_DETECT_ANCHOR_TOOLTIP = '';



Blockly.Msg.MPYTHON_AICAMERA_KPU_RUN_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_RUN_YOLO2_MESSAGE0 = 'kpu 识别 %1';
Blockly.Msg.MPYTHON_AICAMERA_KPU_RUN_YOLO2_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_RETURN_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_RETURN_YOLO2_MESSAGE0 = '返回识别 对象(列表)';
Blockly.Msg.MPYTHON_AICAMERA_KPU_RETURN_YOLO2_TOOLTIP =
    '"对象"的数量无论是第几个，"对象数量"都可以显示所侦测到的物体的所有数量\n' +
    '仅20类识别可以使用"类别"，其余属性人脸追踪和20类识别都可以使用。\n' +
    '20种类别为：\n' +
    '0~4飞机,自行车,鸟,船,瓶子,\n' +
    '5~9公交车,汽车,猫,椅子,奶牛,\n' +
    '10~14餐桌,狗,屋子,摩托车,人,\n' +
    '15~19盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_AICAMERA_KPU_rect_obj_HELPURL = ''
Blockly.Msg.MPYTHON_AICAMERA_KPU_rect_obj_TOOLTIP = ''
Blockly.Msg.MPYTHON_AICAMERA_KPU_rect_obj_MESSAGE0 = '绘制检测框 图像%1'

Blockly.Msg.MPYTHON_AICAMERA_KPU_ACQUIRE_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_ACQUIRE_YOLO2_MESSAGE0 = '获取识别 对象第%1 个的%2';
Blockly.Msg.MPYTHON_AICAMERA_KPU_ACQUIRE_YOLO2_TOOLTIP =
    '"对象"的数量无论是第几个，"对象数量"都可以显示所侦测到的物体的所有数量\n' +
    '仅20类识别可以使用"类别"，其余属性人脸追踪和20类识别都可以使用。\n' +
    '20种类别为：\n' +
    '0~4飞机,自行车,鸟,船,瓶子,\n' +
    '5~9公交车,汽车,猫,椅子,奶牛,\n' +
    '10~14餐桌,狗,屋子,摩托车,人,\n' +
    '15~19盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_MESSAGE0 = 'kpu 分类器运算 %1';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_PROBABILITY_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_PROBABILITY_MESSAGE0 = '返回分类器的概率(元组)';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_PROBABILITY_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_TYPE_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_TYPE_MESSAGE0 = '获取分类器 最大概率的类别';
Blockly.Msg.MPYTHON_AICAMERA_KPU_FORWARD_TYPE_TOOLTIP = '';

Blockly.Msg.MPYTHON_AICAMERA_KPU_DEINIT_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_KPU_DEINIT_MESSAGE0 = 'kpu 释放';
Blockly.Msg.MPYTHON_AICAMERA_KPU_DEINIT_TOOLTIP = '';

//颜色识别简易版
Blockly.Msg.MPYTHON_AICAMERA_CR_EASY_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_CR_EASY_MESSAGE0 = '启动简易AI线程-颜色识别%5 AI摄像头引脚 tx %1 AI摄像头引脚 rx %2 颜色空间范围（LAB） %3 是否开启摄像头水平翻转 %4';
Blockly.Msg.MPYTHON_AICAMERA_CR_EASY_TOOLTIP = '';

//20类简易版
Blockly.Msg.MPYTHON_AICAMERA_CLASSIFICATION_EASY_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_CLASSIFICATION_EASY_MESSAGE0 = '启动简易AI线程-20类识别%4 AI摄像头引脚 tx %1 AI摄像头引脚 rx %2 是否开启摄像头水平翻转 %3';
Blockly.Msg.MPYTHON_AICAMERA_CLASSIFICATION_EASY_TOOLTIP = '';

//人脸识别简易版
Blockly.Msg.MPYTHON_AICAMERA_FACE_RECOGNITION_EASY_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_FACE_RECOGNITION_EASY_MESSAGE0 = '启动简易AI线程-人脸检测%4 AI摄像头引脚 tx %1 AI摄像头引脚 rx %2 是否开启摄像头水平翻转 %3';
Blockly.Msg.MPYTHON_AICAMERA_FACE_RECOGNITION_EASY_TOOLTIP = '';

//手写数字识别简易版
Blockly.Msg.MPYTHON_AICAMERA_MNIST_EASY_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_MNIST_EASY_MESSAGE0 = '启动简易AI线程-手写数字识别%4 AI摄像头引脚 tx %1 AI摄像头引脚 rx %2 是否开启摄像头水平翻转 %3';
Blockly.Msg.MPYTHON_AICAMERA_MNIST_EASY_TOOLTIP = '';

//退出简易AI
Blockly.Msg.MPYTHON_AICAMERA_EXIT_EASY_AI_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_EXIT_EASY_AI_MESSAGE0 = '退出简易AI线程';
Blockly.Msg.MPYTHON_AICAMERA_EXIT_EASY_AI_TOOLTIP = '';

//20211112 改串口通信新增
//人脸识别
Blockly.Msg.MPYTHON_AIcamera_face_recognization_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_init_MESSAGE0 = '人脸识别初始化 %4 人脸分类数量%1 识别阈值%2 摄像头%3';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_init_TOOLTIP = '';

Blockly.Msg.MPYTHON_AIcamera_face_recognization_add_face_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_add_face_TOOLTIP = '添加人脸数据';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_add_face_MESSAGE0 = '按A键添加人脸数据';

Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_MESSAGE0 = '运行识别';

Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_result_MESSAGE0 = '识别结果%1';

Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_result_index = 'ID'
Blockly.Msg.MPYTHON_AIcamera_face_recognization_recognize_result_max_score = '置信度'

//自学习
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_init_MESSAGE0 = '自学习分类初始化 %4 分类数量%1 训练集数量%2 摄像头%3';

Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_add_class_img_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_add_class_img_TOOLTIP = '每类只需拍摄一张';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_add_class_img_MESSAGE0 = '按A键按顺序添加分类图片';

Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_add_sample_img_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_add_sample_img_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_add_sample_img_MESSAGE0 = '按B键添加训练集图片';

Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_train_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_train_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_train_MESSAGE0 = '训练';

Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_result_TOOLTIP = '准确度范围为[0,11],数值越小表示越准确';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_result_MESSAGE0 = '识别%1';

Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_result_id = 'ID';
Blockly.Msg.MPYTHON_AIcamera_self_learning_classifier_result_max_score = '准确度';

//语音识别
Blockly.Msg.MPYTHON_AIcamera_asr_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_asr_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_asr_init_MESSAGE0 = '语音识别初始化';

Blockly.Msg.MPYTHON_AIcamera_asr_add_config_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_asr_add_config_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_asr_add_config_MESSAGE0 = '添加识别词%1 ID: %2';

Blockly.Msg.MPYTHON_AIcamera_asr_start_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_asr_start_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_asr_start_MESSAGE0 = '开始语音识别';

Blockly.Msg.MPYTHON_AIcamera_asr_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_asr_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_asr_result_MESSAGE0 = '语音识别ID';

//二维码
Blockly.Msg.MPYTHON_AIcamera_qrcode_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_qrcode_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_qrcode_init_MESSAGE0 = '二维码识别初始化 摄像头%1';

Blockly.Msg.MPYTHON_AIcamera_add_qrcode_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_add_qrcode_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_add_qrcode_MESSAGE0 = '按A键按顺序添加二维码数据，二维码数量%1';

Blockly.Msg.MPYTHON_AIcamera_qrcode_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_qrcode_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_qrcode_result_MESSAGE0 = '识别结果%1';

Blockly.Msg.MPYTHON_AIcamera_qrcode_id = 'ID';
Blockly.Msg.MPYTHON_AIcamera_qrcode_info = '二维码数据';

//颜色识别
Blockly.Msg.MPYTHON_AIcamera_color_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_color_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_color_init_MESSAGE0 = '颜色识别初始化 摄像头%1';

Blockly.Msg.MPYTHON_AIcamera_add_color_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_add_color_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_add_color_MESSAGE0 = '按A键按顺序添加颜色数据，数量%1';

Blockly.Msg.MPYTHON_AIcamera_color_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_colorresult_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_color_result_MESSAGE0 = '识别结果ID';


//人脸识别2.0 
Blockly.Msg.MPYTHON_AIcamera_face_detection = '人脸检测';
Blockly.Msg.MPYTHON_AIcamera_yolo_detect = '20类物体识别';
Blockly.Msg.MPYTHON_AIcamera_mnist_detect = '数字识别';
Blockly.Msg.MPYTHON_AIcamera_guidepos_detect = '路标识别';

Blockly.Msg.MPYTHON_AIcamera_ai_detect_confidence = '置信度';
Blockly.Msg.MPYTHON_AIcamera_face_detect_num = '人脸数量';
Blockly.Msg.MPYTHON_AIcamera_yolo_detect_num = '类别ID';
Blockly.Msg.MPYTHON_AIcamera_mnist_detect_num = '数字';
Blockly.Msg.MPYTHON_AIcamera_guidepost = '路标ID';

Blockly.Msg.MPYTHON_AIcamera_ai_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_ai_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_ai_init_MESSAGE0 = '初始化AI:%1 摄像头%2';

Blockly.Msg.MPYTHON_AIcamera_ai_recognize_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_ai_recognize_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_ai_recognize_MESSAGE0 = '%1 运行';

Blockly.Msg.MPYTHON_AIcamera_face_detect_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_face_detect_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_face_detect_result_MESSAGE0 = '人脸检测结果:%1';

Blockly.Msg.MPYTHON_AIcamera_yolo_detect_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_yolo_detect_result_TOOLTIP = '"飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛,餐桌,狗,屋子,摩托,人,盆栽,羊,沙发,火车,电视"';
Blockly.Msg.MPYTHON_AIcamera_yolo_detect_result_MESSAGE0 = '物体识别结果:%1';

Blockly.Msg.MPYTHON_AIcamera_yolo_detect_result_list_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_yolo_detect_result_list_TOOLTIP = '"飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛,餐桌,狗,屋子,摩托,人,盆栽,羊,沙发,火车,电视"';
Blockly.Msg.MPYTHON_AIcamera_yolo_detect_result_list_MESSAGE0 = '20类物体识别种类列表';

Blockly.Msg.MPYTHON_AIcamera_mnist_detect_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_mnist_detect_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_mnist_detect_result_MESSAGE0 = '数字识别结果:%1';

Blockly.Msg.MPYTHON_AIcamera_guidepost_detect_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_guidepost_detect_result_TOOLTIP = '"停止、左转、右转"路标识别，返回值："stop","left","right"';
Blockly.Msg.MPYTHON_AIcamera_guidepost_detect_result_MESSAGE0 = '路标识别结果:%1';

// 使用自定义模型
Blockly.Msg.MPYTHON_AIcamera_kmodel_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_kmodel_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_kmodel_init_MESSAGE0 = 'KPU模型 图像分类初始化 摄像头:%1 模型路径:%2 图像宽度:%3 图像高度:%4';
Blockly.Msg.MPYTHON_AIcamera_kmodel_yolo_init_MESSAGE0 = 'KPU模型 目标检测初始化 摄像头:%1 模型路径:%2 图像宽度:%3 图像高度:%4 锚点（列表）:%5';

Blockly.Msg.MPYTHON_AIcamera_kmodel_recognize_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_kmodel_recognize_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_kmodel_recognize_MESSAGE0 = 'KPU运行识别';

Blockly.Msg.MPYTHON_AIcamera_kmodel_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_kmodel_result_TOOLTIP = '""';
Blockly.Msg.MPYTHON_AIcamera_kmodel_result_MESSAGE0 = 'KPU识别结果:%1';


//寻找色块
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_MESSAGE0 = '寻找色块初始化 摄像头:%1';

Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_SET_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_SET_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_SET_MESSAGE0 = '设置LAB颜色阈值（列表）:%1 面积阈值:%2';

Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_RUN_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_RUN_MESSAGE0 = '寻找色块运行识别';

Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_RESULT_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_RESULT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_RESULT_MESSAGE0 = '获取 发现最大色块识别结果:%1';

Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_x = 'x';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_cx = '中心x';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_y = 'y';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_cy = '中心y';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_w = '宽度';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_h = '高度';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_pixels = '像素';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_count = '对象数量';
Blockly.Msg.MPYTHON_AICAMERA_2_TRACE_COLOR_result_code = '色块索引';

//切换模式
Blockly.Msg.MPYTHON_AICAMERA_2_DEFAULT_MODE = '默认';
Blockly.Msg.MPYTHON_AICAMERA_2_MNIST_MODE = "数字识别";
Blockly.Msg.MPYTHON_AICAMERA_2_OBJECT_RECOGNIZATION_MODE = "20类物体识别";
Blockly.Msg.MPYTHON_AICAMERA_2_FACE_DETECTION_MODE = "人脸检测";
Blockly.Msg.MPYTHON_AICAMERA_2_FACE_RECOGNIZATION_MODE = "人脸识别";
Blockly.Msg.MPYTHON_AICAMERA_2_SELF_LEARNING_CLASSIFIER_MODE = "自学习分类";
Blockly.Msg.MPYTHON_AICAMERA_2_COLOE_MODE = "颜色识别";
Blockly.Msg.MPYTHON_AICAMERA_2_QRCODE_MODE = "二维码识别";
Blockly.Msg.MPYTHON_AICAMERA_2_SPEECH_RECOGNIZATION_MODE = "语音识别";
Blockly.Msg.MPYTHON_AICAMERA_2_GUIDEPOST_MODE = "交通标志识别";
Blockly.Msg.MPYTHON_AICAMERA_2_KPU_MODEL_MODE = "自定义模型";
Blockly.Msg.MPYTHON_AICAMERA_2_TRACK_MODE = '寻找色块识别';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_MODE='图像处理';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_MODE='LAB颜色提取器';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_APRILTAG_MODE='AprilTag模式';

Blockly.Msg.MPYTHON_AICAMERA_2_SW_HELPURL="";
Blockly.Msg.MPYTHON_AICAMERA_2_SW_TOOLTIP="";
Blockly.Msg.MPYTHON_AICAMERA_2_SW_MESSAGE0="切换至 %1模式  摄像头%2"

//配置摄像头
Blockly.Msg.MPYTHON_AICAMERA_2_SENSOR_BASIC_SETTING_MESSAGE0 = '配置摄像头参数 %20 摄像头%11 双缓冲%18 %12 摄像头帧大小%1 %13摄像头帧格式%2 %14 水平镜像模式%3 垂直翻转模式%4 %15 白平衡%5 自动增益%17 %16 摄像头亮度%6 对比度%7 饱和度%8 设置摄像头拍摄 宽度%9 设置摄像头拍摄 高度%10 时钟频率HZ%19';
Blockly.Msg.MPYTHON_AICAMERA_2_SENSOR_BASIC_SETTING_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_SENSOR_BASIC_SETTING_TOOLTIP = '';


//图像处理
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_init_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_init_MESSAGE0 = '图像处理初始化 摄像头:%1';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_SET_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_SET_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_SET_MESSAGE0 = '设置图像灰度阈值（元组）:%1 ';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_SET_line_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_SET_line_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_SET_line_MESSAGE0 = '设置线性回归灰度阈值（元组）:%1 ';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RUN_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RUN_MESSAGE0 = '图像处理运行';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_MESSAGE0 = '获取图像处理数据 %1';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_5x3_MESSAGE0 = '5x3列表数据';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_X1_MESSAGE0 = '直线的p1顶点 x坐标分量';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_Y1_MESSAGE0 = '直线的p1顶点 y坐标分量';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_X2_MESSAGE0 = '直线的p2顶点 x坐标分量';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_Y2_MESSAGE0 = '直线的p2顶点 y坐标分量';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_length_MESSAGE0 = '直线长度';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_magnitude_MESSAGE0 = '霍夫变换后的直线的长度';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_theta_MESSAGE0 = '霍夫变换后的直线的角度（0-179度）';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_STATISTICS_RESULT_LINE_rho_MESSAGE0 = '霍夫变换后的直线p值';

// LAB颜色提取器
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_init_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_init_MESSAGE0 = 'LAB颜色提取器初始化 摄像头:%1';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_RUN_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_RUN_MESSAGE0 = '颜色提取器运行';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_RESULT_HELPURL = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_RESULT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_RESULT_MESSAGE0 = 'LAB颜色数据 %1';

Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_L = 'L的众数';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_A = 'A的众数';
Blockly.Msg.MPYTHON_AICAMERA_2_COLOR_EXTRACTO_B = 'B的众数';

// AprilTag模式
Blockly.Msg.MPYTHON_AICAMERA_2_AprilTag_init_MESSAGE0 = 'AprilTag模式初始化 摄像头:%1';
Blockly.Msg.MPYTHON_AICAMERA_2_AprilTag_set_MESSAGE0 = '启用Tag类 %1';
Blockly.Msg.MPYTHON_AICAMERA_2_AprilTag_RUN_MESSAGE0 = '运行AprilTag识别';
Blockly.Msg.MPYTHON_AICAMERA_2_AprilTag_tag_family = 'Tag类';
Blockly.Msg.MPYTHON_AICAMERA_2_AprilTag_tag_id = 'Tag ID';
Blockly.Msg.MPYTHON_AICAMERA_2_AprilTag_RESULT_MESSAGE0 = 'AprilTag数据: %1';

Blockly.Msg.TAG16H5 = 'TAG16H5';
Blockly.Msg.TAG25H7 = 'TAG25H7';
Blockly.Msg.TAG25H9 = 'TAG25H9';
Blockly.Msg.TAG36H10 = 'TAG36H10';
Blockly.Msg.TAG36H11 = 'TAG36H11';


// 录制视频
Blockly.Msg.MPYTHON_AIcamera_video_capture_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_video_capture_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_video_capture_MESSAGE0 = '录制视频 摄像头:%1 路径:%2 录制的帧间隔(us):%3 jpeg 压缩质量(%):%4 录制屏幕宽度:%5 录制屏幕高度:%6 录制时间(s):%7';


//AI2.0摄像头结束

//桌面机器人
//左边/右边传感器光线值
Blockly.Msg.MPYTHON_TABLEROBOT_LIGHT_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_LIGHT_MESSAGE0 = '%1光线值';
Blockly.Msg.MPYTHON_TABLEROBOT_LIGHT_TOOLTIP = '左边/右边传感器光线值';

//颜色
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_SET_LED_MESSAGE0 = '颜色传感器补光灯%1';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_SET_LED_TOOLTIP = '打开/关闭补光灯';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_SET_LED_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_INIT_MESSAGE0 = '颜色传感器 %1';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_INIT_TOOLTIP = '颜色传感器初始化，使用颜色传感前，必须先调用本函数初始化。\n颜色传感器去初始化，不需要使用颜色传感器时，可调用本函数。';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_GET_RAW_MESSAGE0 = '获取颜色传感器%1';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_GET_RAW_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_GET_RAW_TOOLTIP =
    '返回RGB颜色值元组(r,g,b),通过反射方式获取物体颜色时，须开启亮暗平衡调整功能。\n' +
    '返回hsv颜色值元组(h,s,v),通过反射方式获取物体颜色时，须开启亮暗平衡调整功能。\n' +
    '返回int色温值,通过反射方式获取物体颜色时，须开启亮暗平衡调整功能。\n' +
    '返回int亮度值,单位lux,通过反射方式获取物体颜色时，须开启亮暗平衡调整功能。\n' +
    '返回裸数据元组(r,g,b,c)';

Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_SET_BALANCE_MESSAGE0 = '颜色 设置为%1';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_SET_BALANCE_TOOLTIP = '设置亮暗平衡调整参数，设置后的参数值，会保存到flash中，所以通常本函数只需执行一次。';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_SET_BALANCE_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_BALANCE_EN_MESSAGE0 = '颜色 亮暗平衡调整为%1';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_BALANCE_EN_TOOLTIP = '使能/禁能亮暗平衡调整功能，获取反射型物体颜色时，须调用本函数使能亮暗平衡调整功能。';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_BALANCE_EN_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_COLOR_JUDGE_MESSAGE0 = '是否识别到%1？';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_COLOR_JUDGE_TOOLTIP = '是否识别到 红色/绿色/蓝色，返回True/False';
Blockly.Msg.MPYTHON_TABLEROBOT_COLOR_SENSOR_COLOR_JUDGE_HELPURL = '';

//循迹
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_SET_LED_MESSAGE0 = '循迹 led%1';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_SET_LED_TOOLTIP = '循迹传感器led开关，使用循迹传感器前需打开LED。';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_SET_LED_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_PID_TRACKING_MESSAGE0 = '循迹 PID循迹为%1';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_PID_TRACKING_TOOLTIP = '使能/禁能内置PID循迹功能';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_PID_TRACKING_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_DETECT_PARAM_MESSAGE0 = '获取循迹图黑白AD采样值';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_DETECT_PARAM_TOOLTIP = '获取循迹图上的黑白AD采样值，改善循迹效果。执行本函数后，相关参数存在flash，因此通常只需执行一次。';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_DETECT_PARAM_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_GET_VAL_MESSAGE0 = '获取循迹传感器%1AD采样值';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_GET_VAL_TOOLTIP = '返回四个循迹传感器AD采样值';
Blockly.Msg.MPYTHON_TABLEROBOT_TRACKING_SENSOR_GET_VAL_HELPURL = '';

//防跌落
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_SET_IR_MESSAGE0 = '防跌落 发射管%1';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_SET_IR_TOOLTIP = '防跌落传感器发射管开关，使用防跌落传感器需打开发射管。';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_SET_IR_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_AUTO_DETECT_MESSAGE0 = '自动防跌落%1';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_AUTO_DETECT_TOOLTIP = '开启/禁止内置防跌落功能, 开启本功能后，探测到机器人悬空后，机器人停止行走。';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_AUTO_DETECT_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_GET_SENSOR_VAL_MESSAGE0 = '获取 %1防跌落传感器AD采样值';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_GET_SENSOR_VAL_TOOLTIP = '返回左前/左后/右前/右后的防跌落传感器AD采样值';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_GET_SENSOR_VAL_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_SET_THRESHOLD_MESSAGE0 = '设置跌落检测阈值为%1';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_SET_THRESHOLD_TOOLTIP = '四个角的防跌落检测阈值。范围0~4095';
Blockly.Msg.MPYTHON_TABLEROBOT_DROP_SENSOR_SET_THRESHOLD_HELPURL = '';

//机器人运动
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_SET_MOTOR_MESSAGE0 = '机器人%1 %2 速度%3';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_SET_MOTOR_TOOLTIP = '控制单个马达速度-100~100';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_SET_MOTOR_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_MOVE_MESSAGE0 = '机器人%1 %2厘米 速度%3';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_MOVE_TOOLTIP = '机器人前进、后退';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_MOVE_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_ROTATE_MESSAGE0 = '机器人 %2角度%3 速度%1';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_ROTATE_TOOLTIP = '速度 取值范围： 0 -- 100,转角单位:度 取值范围：-360 -- 360 正值代表右转';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_ROTATE_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_COMPENSATION_MESSAGE0 = '机器人 %1 补偿值%2';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_COMPENSATION_TOOLTIP = '制造上的误差（如齿轮箱，轮子直径、轴距等），会影响行走的精确性。 本函数提供补偿功能。';
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_COMPENSATIONHELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_SET_MOTOR_STOP_MESSAGE0 = '机器人停止运动'
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_SET_MOTOR_STOP_TOOLTIP = '机器人两个马达停止'
Blockly.Msg.MPYTHON_TABLEROBOT_ROBOT_MOTION_SET_MOTOR_STOP_HELPURL = ''

//颜色显示
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_SET_COLOR_MESSAGE0 = '设置机器人%1 RGB灯颜色为 R%2 G%3 B%4';
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_SET_COLOR_TOOLTIP = '设置机器人左右手RGB灯颜色。';
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_SET_COLOR_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_CLEAR_MESSAGE0 = '关闭机器人%1 RGB灯颜色';
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_CLEAR_TOOLTIP = '关闭机器人左右手RGB灯。';
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_CLEAR_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_SET_COLOR_1_MESSAGE0 = '设置机器人%1 RGB灯颜色为 %2';
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_SET_COLOR_1_TOOLTIP = '设置机器人左右手RGB灯颜色。';
Blockly.Msg.MPYTHON_TABLEROBOT_HAND_COLOR_SET_COLOR_1_HELPURL = '';

//超声波
Blockly.Msg.MPYTHON_TABLEROBOT_ULTRASONIC_DISTANCE_MM_MESSAGE0 = '获取超声波测距值(cm)';
Blockly.Msg.MPYTHON_TABLEROBOT_ULTRASONIC_DISTANCE_MM_TOOLTIP = '返回超声波测距值，单位：cm';
Blockly.Msg.MPYTHON_TABLEROBOT_ULTRASONIC_DISTANCE_MM_HELPURL = '';

//顶部按键
Blockly.Msg.MPYTHON_TABLEROBOT_BUTTON_EVENT_MESSAGE0 = '当 按键被按下时';
Blockly.Msg.MPYTHON_TABLEROBOT_BUTTON_EVENT_TOOLTIP = '';
Blockly.Msg.MPYTHON_TABLEROBOT_BUTTON_EVENT_HELPURL = '';

//系统配置类
Blockly.Msg.MPYTHON_TABLEROBOT_SYSCONFIG_GET_PARAMS_MESSAGE0 = '获取机器人所有配置参数';
Blockly.Msg.MPYTHON_TABLEROBOT_SYSCONFIG_GET_PARAMS_TOOLTIP = '';
Blockly.Msg.MPYTHON_TABLEROBOT_SYSCONFIG_GET_PARAMS_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_SYSCONFIG_SET_DEFAULT_PARAMS_MESSAGE0 = '恢复缺省参数';
Blockly.Msg.MPYTHON_TABLEROBOT_SYSCONFIG_SET_DEFAULT_PARAMS_TOOLTIP = '设置缺省的参数。配置参数调乱时，可调用本函数恢复缺省参数。';
Blockly.Msg.MPYTHON_TABLEROBOT_SYSCONFIG_SET_DEFAULT_PARAMS_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_POWER_MESSAGE0 = '开启省电模式 %1';
Blockly.Msg.MPYTHON_TABLEROBOT_POWER_TOOLTIP = '功能：命令从MCU进入省电模式，从MCU进入省电械式前，会关闭底板3.3V外设电源，关闭各外设（循迹、防跌落、颜色传感器LED灯）,颜色传感器、马达驱动进入sleep mode。参数 mode: 1 进入sleep mode 2 进入stop mode 3 standby mode';
Blockly.Msg.MPYTHON_TABLEROBOT_POWER_HELPURL = '';

//播放器类
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_MESSAGE0 = '音频 初始化';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_TOOLTIP = '';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_PLAY_MESSAGE0 = '音频 播放%1';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_PLAY_TOOLTIP = '';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_PLAY_HELPURL = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_STATE_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_STATE_MESSAGE0 = '音频%1';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_STATE_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_SET_VOL_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_SET_VOL_MESSAGE0 = '设置播放器音量为%1';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_SET_VOL_TOOLTIP = '音量范围0~100';

Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_GET_VOL_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_GET_VOL_MESSAGE0 = '获取播放器音量';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_GET_VOL_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_GET_STATE_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_GET_STATE_MESSAGE0 = '获取播放状态';
Blockly.Msg.MPYTHON_TABLEROBOT_ESP_AUDIO_PLAYER_GET_STATE_TOOLTIP = '播放状态有可能为以下值:STATUS_UNKNOWN，STATUS_RUNNING，STATUS_PAUSED，STATUS_STOPPED，STATUS_FINISHED,CONFUSED,STATUS_ERROR';

Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_MESSAGE0 = '录制 初始化';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_START_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_START_MESSAGE0 = '录制音频 存储路径%1 格式%2';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_START_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_STOP_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_STOP_MESSAGE0 = '录制停止';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_STOP_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_IS_RUNNING_HELPURL = '';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_IS_RUNNING_MESSAGE0 = '返回 是否正在录音';
Blockly.Msg.MPYTHON_TABLEROBOT_RECORDER_IS_RUNNING_TOOLTIP = '';

//百度语音
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_INIT_HELPURL = 'https://labplus.readthedocs.io/zh/latest/mpython-desktop-robot/library/dueros.html#dueros';
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_INIT_MESSAGE0 = '语音识别 初始化';
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_GET_VOL_HELPURL = 'https://labplus.readthedocs.io/zh/latest/mpython-desktop-robot/library/dueros.html#dueros';
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_GET_VOL_MESSAGE0 = '获取播放器音量';
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_GET_VOL_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_SET_VOL_HELPURL = 'https://labplus.readthedocs.io/zh/latest/mpython-desktop-robot/library/dueros.html#dueros';
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_SET_VOL_MESSAGE0 = '设置播放器音量为%1';
Blockly.Msg.MPYTHON_TABLEROBOT_BAIDU_AUDIO_DUEROS_SET_VOL_TOOLTIP = '音量值，取值范围0-100。';

//重改名字，掌控板改为桌面机器人
Blockly.Msg.MPYTHON_TABLEROBOT_IS_TILTED_MESSAGE0 = '桌面机器人 %1';
Blockly.Msg.MPYTHON_TABLEROBOT_IS_TILTED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_TABLEROBOT_IS_TILTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_IS_SHAKED_MESSAGE0 = '桌面机器人 %1';
Blockly.Msg.MPYTHON_TABLEROBOT_IS_SHAKED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_TABLEROBOT_IS_SHAKED_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_SHAKE_DETECTOR_MESSAGE0 = '当桌面机器人 %1 时';
Blockly.Msg.MPYTHON_TABLEROBOT_SHAKE_DETECTOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_TABLEROBOT_SHAKE_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_TABLEROBOT_TILT_DETECTOR_MESSAGE0 = '当桌面机器人 %1 时';
Blockly.Msg.MPYTHON_TABLEROBOT_TILT_DETECTOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/accelerometer.html#id1';
Blockly.Msg.MPYTHON_TABLEROBOT_TILT_DETECTOR_TOOLTIP = '';

//桌面机器人选项 翻译
Blockly.Msg.mpython_tablerobot_open = '打开';
Blockly.Msg.mpython_tablerobot_close = '关闭';

Blockly.Msg.mpython_tablerobot_enable = '使能';
Blockly.Msg.mpython_tablerobot_disable = '禁能';

Blockly.Msg.mpython_tablerobot_color_sensor_init = '初始化';
Blockly.Msg.mpython_tablerobot_color_sensor_deinit = '去初始化';

Blockly.Msg.mpython_tablerobot_color_sensor_rgb = 'RGB值';
Blockly.Msg.mpython_tablerobot_color_sensor_hsv = 'HSV值';
Blockly.Msg.mpython_tablerobot_color_sensor_temp = '色温值';
Blockly.Msg.mpython_tablerobot_color_sensor_lux = '亮度值';
Blockly.Msg.mpython_tablerobot_color_sensor_raw = '裸数据';

Blockly.Msg.mpython_tablerobot_color_sensor_set_balance_on = '亮平衡';
Blockly.Msg.mpython_tablerobot_color_sensor_set_balance_off = '暗平衡';

Blockly.Msg.mpython_tablerobot_robot_motion_left_motor = '左马达';
Blockly.Msg.mpython_tablerobot_robot_motion_right_motor = '右马达';

Blockly.Msg.mpython_tablerobot_robot_motion_forward = '正转';
Blockly.Msg.mpython_tablerobot_robot_motion_reverse = '反转';

Blockly.Msg.mpython_tablerobot_robot_motion_move_forward = '前进';
Blockly.Msg.mpython_tablerobot_robot_motion_move_back = '后退';

Blockly.Msg.mpython_tablerobot_robot_motion_rotate_left = '左旋转';
Blockly.Msg.mpython_tablerobot_robot_motion_rotate_right = '右旋转';

Blockly.Msg.mpython_tablerobot_robot_motion_compensation_move = '移动补偿';
Blockly.Msg.mpython_tablerobot_robot_motion_compensation_rotate = '旋转补偿';

Blockly.Msg.mpython_tablerobot_hand_color_set_color_left = '左手';
Blockly.Msg.mpython_tablerobot_hand_color_set_color_right = '右手';

Blockly.Msg.mpython_tablerobot_low_power_mode = '默认';
Blockly.Msg.mpython_tablerobot_low_power_mode1 = '模式1';
Blockly.Msg.mpython_tablerobot_low_power_mode2 = '模式2';

Blockly.Msg.mpython_tablerobot_light_left = '左边';
Blockly.Msg.mpython_tablerobot_light_right = '右边';

Blockly.Msg.mpython_tablerobot_drop_sensor_get_sensor_val_left_0 = '左前';
Blockly.Msg.mpython_tablerobot_drop_sensor_get_sensor_val_left_1 = '左后';
Blockly.Msg.mpython_tablerobot_drop_sensor_get_sensor_val_right_0 = '右前';
Blockly.Msg.mpython_tablerobot_drop_sensor_get_sensor_val_right_1 = '右前';

Blockly.Msg.mpython_tablerobot_tracking_sensor_get_val_0 = '左边外侧';
Blockly.Msg.mpython_tablerobot_tracking_sensor_get_val_1 = '左边内侧';
Blockly.Msg.mpython_tablerobot_tracking_sensor_get_val_2 = '右边内侧';
Blockly.Msg.mpython_tablerobot_tracking_sensor_get_val_3 = '右边外侧';

Blockly.Msg.mpython_tablerobot_r = '红色'
Blockly.Msg.mpython_tablerobot_g = '绿色'
Blockly.Msg.mpython_tablerobot_b = '蓝色'

//蓝牙
Blockly.Msg.CATEGORY_BLE_PERIPHERAL = '外围设备';
Blockly.Msg.CATEGORY_BLE_CENTERAL = '中央设备';
Blockly.Msg.CATEGORY_BLE_UART = '串口透传';
Blockly.Msg.CATEGORY_BLE_HID = '人机交互设备';
Blockly.Msg.CATEGORY_BLE_MOUSE = '模拟鼠标';
Blockly.Msg.CATEGORY_BLE_KEYBOARD = '模拟键盘';
Blockly.Msg.CATEGORY_BLE_CONSUMER = '模拟遥控器';

Blockly.Msg.BLE_SETUP_PERIPHERAL_HELPURL = '';
Blockly.Msg.BLE_SETUP_PERIPHERAL_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_PERIPHERAL_MESSAGE0 = '构建 BLE 外围设备对象 %1 显示名称 %2 Service UUID %3';

Blockly.Msg.BLE_ADD_CHARACTERISTIC_HELPURL = '';
Blockly.Msg.BLE_ADD_CHARACTERISTIC_TOOLTIP = '';
Blockly.Msg.BLE_ADD_CHARACTERISTIC_MESSAGE0 = '定义 BLE 属性 %1 %2 Characteristic UUID %3 Read %4 Write %5 Notity %6';

Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_MESSAGE0 = 'BLE 外围设备 %1';

Blockly.Msg.BLE_START_BROADCASTING = "开始广播";
Blockly.Msg.BLE_STOP_BROADCASTING = "停止广播";

Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_MESSAGE0 = '读 BLE 设备的属性 %1';

Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_MESSAGE0 = '写 BLE 设备的属性 %1 %2 值 %3 Notify %4';

Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_MESSAGE0 = 'BLE 外围设备断开连接';

Blockly.Msg.BLE_PERIPHERAL_MAC_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_MAC_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_MAC_MESSAGE0 = 'BLE 外围设备 MAC地址';

Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_MESSAGE0 = '当 BLE 与中央设备建立连接时 %1 连接句柄 %2 地址类型 %3 中央设备的MAC地址 %4';

Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_MESSAGE0 = '当 BLE 设备的属性值被改写时 %1 连接句柄 %2 被写属性句柄 %3 写入的数据 %4';

Blockly.Msg.BLE_SETUP_CENTERAL_HELPURL = '';
Blockly.Msg.BLE_SETUP_CENTERAL_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_CENTERAL_MESSAGE0 = '构建 BLE 中央设备对象 显示名称 %1';

Blockly.Msg.BLE_CENTERAL_CONNECT_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CONNECT_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CONNECT_MESSAGE0 = 'BLE 中央设备连接到 %1 %2';

Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_MESSAGE0 = 'BLE 外围设备已连接 ?';

Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_MESSAGE0 = '设定 %1 为 已连接外围设备 属性对象 %2 Service UUID %3 Characteristic UUID %4';

Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_MESSAGE0 = '读 已连接外围设备的 属性 %1 值';

Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_MESSAGE0 = '写 已连接外围设备的 属性 %1 值 %2';

Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_MESSAGE0 = '当 已连接外围设备发起 Notify 通知事件时 %1 属性的值柄 %2 通知的属性值 %3';

Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_MESSAGE0 = '已连接的外围设备 %1';

Blockly.Msg.BLE_CENTERAL_CLOSE_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CLOSE_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CLOSE_MESSAGE0 = 'BLE 中央设备 断开连接';

Blockly.Msg.BLE_INFO_NAME = "蓝牙名称";
Blockly.Msg.BLE_INFO_MAC = "MAC地址";
Blockly.Msg.BLE_INFO_RSSI = "信号强度";
Blockly.Msg.BLE_INFO_ADDRTYPE = "地址类型";
Blockly.Msg.BLE_INFO_ADVTYPE = "广播类型";
Blockly.Msg.BLE_INFO_DATA = "原始数据(元组)";

Blockly.Msg.BLE_SETUP_UART_HELPURL = '';
Blockly.Msg.BLE_SETUP_UART_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_UART_MESSAGE0 = '构建 BLE UART从机 显示名称 %1';

Blockly.Msg.BLE_SETUP_UART_MASTER_HELPURL = '';
Blockly.Msg.BLE_SETUP_UART_MASTER_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_UART_MASTER_MESSAGE0 = '构建 BLE UART主机 连接到 %1 %2';

Blockly.Msg.BLE_UART_IS_CONNECTED_HELPURL = '';
Blockly.Msg.BLE_UART_IS_CONNECTED_TOOLTIP = '';
Blockly.Msg.BLE_UART_IS_CONNECTED_MESSAGE0 = 'BLE UART 已连接 ?';

Blockly.Msg.BLE_UART_ANY_HELPURL = '';
Blockly.Msg.BLE_UART_ANY_TOOLTIP = '';
Blockly.Msg.BLE_UART_ANY_MESSAGE0 = 'BLE UART 可读字节数量';

Blockly.Msg.BLE_UART_IRQ_HELPURL = '';
Blockly.Msg.BLE_UART_IRQ_TOOLTIP = '';
Blockly.Msg.BLE_UART_IRQ_MESSAGE0 = '当 BLE UART 接收到数据时';

Blockly.Msg.BLE_UART_READ_HELPURL = '';
Blockly.Msg.BLE_UART_READ_TOOLTIP = '从 UART 另一端发送过来的消息';
Blockly.Msg.BLE_UART_READ_MESSAGE0 = '已接收数据';

Blockly.Msg.BLE_UART_WRITE_HELPURL = '';
Blockly.Msg.BLE_UART_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_UART_WRITE_MESSAGE0 = 'BLE UART 发送字节 %1';

Blockly.Msg.BLE_UART_CLOSE_HELPURL = '';
Blockly.Msg.BLE_UART_CLOSE_TOOLTIP = '';
Blockly.Msg.BLE_UART_CLOSE_MESSAGE0 = 'BLE UART 断开连接';

Blockly.Msg.BLE_SETUP_HID_HELPURL = '';
Blockly.Msg.BLE_SETUP_HID_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_HID_MESSAGE0 = '构建 BLE HID %1 对象 %2 显示名称 %3 电池电量 %4';

Blockly.Msg.BLE_HID_MOUSE = "鼠标";
Blockly.Msg.BLE_HID_KEYBOARD = "键盘";
Blockly.Msg.BLE_HID_CONSUMER = "遥控器";

Blockly.Msg.BLE_HID_ADVERTISE_HELPURL = '';
Blockly.Msg.BLE_HID_ADVERTISE_TOOLTIP = '';
Blockly.Msg.BLE_HID_ADVERTISE_MESSAGE0 = 'BLE HID设备 %1';

Blockly.Msg.BLE_HID_CONNECT_EVENT_HELPURL = '';
Blockly.Msg.BLE_HID_CONNECT_EVENT_TOOLTIP = '';
Blockly.Msg.BLE_HID_CONNECT_EVENT_MESSAGE0 = '当 BLE HID设备 连接时';

Blockly.Msg.BLE_HID_DISCONNECT_HELPURL = '';
Blockly.Msg.BLE_HID_DISCONNECT_TOOLTIP = '';
Blockly.Msg.BLE_HID_DISCONNECT_MESSAGE0 = 'BLE HID设备 断开连接';

Blockly.Msg.BLE_HID_BATTERY_LEVEL_HELPURL = '';
Blockly.Msg.BLE_HID_BATTERY_LEVEL_TOOLTIP = '';
Blockly.Msg.BLE_HID_BATTERY_LEVEL_MESSAGE0 = 'BLE HID设备 电池电量';

Blockly.Msg.BLE_HID_MOUSE_BUTTONS_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_BUTTONS_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_BUTTONS_MESSAGE0 = '鼠标键 %1';

Blockly.Msg.BLE_HID_MOUSE_CLICK_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_CLICK_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_CLICK_MESSAGE0 = 'BLE HID 鼠标 点击按键 %1';

Blockly.Msg.BLE_HID_MOUSE_PRESS_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_PRESS_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_PRESS_MESSAGE0 = 'BLE HID 鼠标 长按按键 %1';

Blockly.Msg.BLE_HID_MOUSE_RELEASE_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_MESSAGE0 = 'BLE HID 鼠标 释放按键 %1';

Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_MESSAGE0 = 'BLE HID 鼠标 释放所有按键';

Blockly.Msg.BLE_HID_MOUSE_MOVE_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_MOVE_TOOLTIP = 'x, y - 光标移动量,范围 ±127 。\nwheel - 滚轮,范围 ±127 。';
Blockly.Msg.BLE_HID_MOUSE_MOVE_MESSAGE0 = 'BLE HID 鼠标 光标移动 %1 X轴移动量 %2 Y轴移动量 %3 滚轮 %4';

Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_MESSAGE0 = '键盘按键 %1';

Blockly.Msg.BLE_HID_KEYBOARD_SEND_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_MESSAGE0 = 'BLE HID 键盘 按下按键 %1';

Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_MESSAGE0 = 'BLE HID 键盘 同时按下按键 %1 %2 %3';

Blockly.Msg.BLE_HID_KEYBOARD_PRESS_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_PRESS_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_PRESS_MESSAGE0 = 'BLE HID 键盘 长按按键 %1';

Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_MESSAGE0 = 'BLE HID 键盘 释放按键 %1';

Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_MESSAGE0 = 'BLE HID 键盘 释放所有按键';

Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_HELPURL = '';
Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_TOOLTIP = '';
Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_MESSAGE0 = '遥控器键 %1';

Blockly.Msg.BLE_HID_CONSUMER_SEND_HELPURL = '';
Blockly.Msg.BLE_HID_CONSUMER_SEND_TOOLTIP = '';
Blockly.Msg.BLE_HID_CONSUMER_SEND_MESSAGE0 = 'BLE HID 遥控器点击 %1';

// 2020-12-28 增加 iBeacon
Blockly.Msg.BLE_SETUP_IBEACON_HELPURL = '';
Blockly.Msg.BLE_SETUP_IBEACON_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_IBEACON_MESSAGE0 = '构建 BLE iBeacon设备 %1 UUID %2 major %3 minor %4';

Blockly.Msg.BLE_IBEACON_ADVERTISE_HELPURL = '';
Blockly.Msg.BLE_IBEACON_ADVERTISE_TOOLTIP = '';
Blockly.Msg.BLE_IBEACON_ADVERTISE_MESSAGE0 = 'BLE iBeacon设备 %1';





//补齐url

//OLED
Blockly.Msg.mpython_display_OLED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#oled';
Blockly.Msg.mpython_display_OLED_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/oled.html#id4';
Blockly.Msg.mpython_display_OLED_CLOCK_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/gui.html#clock';

//music
Blockly.Msg.MICROBIT_MUSIC_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/music.html#music';

//rgb
Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/neopixel.html#rgb-led';
Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/neopixel.html#rgb-led';
Blockly.Msg.MPYTHON_OFF_RGB_LIST_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/neopixel.html#rgb-led';

//wifi
Blockly.Msg.mpython_init_wifi_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.mpython_dis_WiFi_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.mpython_WiFi_config_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.mpython_disable_APWiFi_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';
Blockly.Msg.mpython_ntptime_settime_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/basics/network/network_basics.html#id1';

//延时
Blockly.Msg.MPYTHON_SLEEP_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#id1';
//列表
Blockly.Msg.MPYTHON_LIST_HELPURL = 'https://mpythonsoftware.readthedocs.io/zh/latest/blocks/list.html';
//元组
Blockly.Msg.MPYTHON_TUPLE_HELPURL = 'https://mpythonsoftware.readthedocs.io/zh/latest/blocks/tuple.html';
//字典
Blockly.Msg.MPYTHON_DICT_HELPURL = 'https://mpythonsoftware.readthedocs.io/zh/latest/blocks/dict.html';
//集合
Blockly.Msg.MPYTHON_SET_HELPURL = 'https://mpythonsoftware.readthedocs.io/zh/latest/blocks/set.html#';
//PIN
Blockly.Msg.MPYTHON_PIN_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_SERVO_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/servo.html#servo';
Blockly.Msg.MPYTHON_I2C_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/machine/machine.I2C.html#i2c';

//添加扩展主题，标签，内容
Blockly.Msg.MPYTHON_FACEDETECT_MESSAGE0 = '人脸追踪';
Blockly.Msg.MPYTHON_20CLASS_MESSAGE0 = '20类识别';

Blockly.Msg.MPYTHON_X_MESSAGE0 = 'x';
Blockly.Msg.MPYTHON_Y_MESSAGE0 = 'y';
Blockly.Msg.MPYTHON_W_MESSAGE0 = '宽度';
Blockly.Msg.MPYTHON_H_MESSAGE0 = '高度';
Blockly.Msg.MPYTHON_VALUE_MESSAGE0 = '置信度';
Blockly.Msg.MPYTHON_OBJNUM_MESSAGE0 = '对象数量';
Blockly.Msg.MPYTHON_CLASSID_MESSAGE0 = '类别';
Blockly.Msg.MPYTHON_CENTER_X_MESSAGE0 = '中心x';
Blockly.Msg.MPYTHON_CENTER_Y_MESSAGE0 = '中心y';
Blockly.Msg.MPYTHON_ROTATION_MESSAGE0 = '旋度';
Blockly.Msg.MPYTHON_ROTATION_X_MESSAGE0 = 'x平面上的旋度';
Blockly.Msg.MPYTHON_ROTATION_Y_MESSAGE0 = 'y平面上的旋度';
Blockly.Msg.MPYTHON_ROTATION_Z_MESSAGE0 = 'Z平面上的旋度';
Blockly.Msg.MPYTHON_TRANSLATION_X_MESSAGE0 = '距离摄像机x方向的变换';
Blockly.Msg.MPYTHON_TRANSLATION_Y_MESSAGE0 = '距离摄像机y方向的变换';
Blockly.Msg.MPYTHON_TRANSLATION_Z_MESSAGE0 = '距离摄像机z方向的变换';
Blockly.Msg.MPYTHON_DECISION_MARGIN_MESSAGE0 = '匹配的色饱和度';
Blockly.Msg.MPYTHON_GOODNESS_MESSAGE0 = '图像的色饱和度';
Blockly.Msg.MPYTHON_HAMMING_MESSAGE0 = '最多可接受的数位误差数值';
Blockly.Msg.MPYTHON_NUMBER_ID_MESSAGE0 = '数字ID';

Blockly.Msg.MPYTHON_ELIMINATE_MESSAGE0 = '消除';
Blockly.Msg.MPYTHON_NOT_ELIMINATE_MESSAGE0 = '不消除';

Blockly.Msg.MPYTHON_WHITE_MESSAGE0 = '白';
Blockly.Msg.MPYTHON_BLACK_MESSAGE0 = '黑';
Blockly.Msg.MPYTHON_NAVY_MESSAGE0 = '深蓝';
Blockly.Msg.MPYTHON_DARKGREEN_MESSAGE0 = '深绿';
Blockly.Msg.MPYTHON_DARKCYAN_MESSAGE0 = '深青';
Blockly.Msg.MPYTHON_MAROON_MESSAGE0 = '褐红';
Blockly.Msg.MPYTHON_PURPLE_MESSAGE0 = '紫色';
Blockly.Msg.MPYTHON_OLIVE_MESSAGE0 = '橄榄绿';
Blockly.Msg.MPYTHON_LIGHTGREY_MESSAGE0 = '浅灰';
Blockly.Msg.MPYTHON_DARKGREY_MESSAGE0 = '深灰';
Blockly.Msg.MPYTHON_BLUE_MESSAGE0 = '蓝';
Blockly.Msg.MPYTHON_GREEN_MESSAGE0 = '绿';
Blockly.Msg.MPYTHON_RED_MESSAGE0 = '红';
Blockly.Msg.MPYTHON_MAGENTA_MESSAGE0 = '洋红';
Blockly.Msg.MPYTHON_YELLOW_MESSAGE0 = '黄';
Blockly.Msg.MPYTHON_ORANGE_MESSAGE0 = '橙';
Blockly.Msg.MPYTHON_GREENYELLOW_MESSAGE0 = '黄绿';
Blockly.Msg.MPYTHON_PINK_MESSAGE0 = '粉红';

Blockly.Msg.MPYTHON_COLOR_BLUE_MESSAGE0 = '蓝色';
Blockly.Msg.MPYTHON_COLOR_GREEN_MESSAGE0 = '绿色';
Blockly.Msg.MPYTHON_COLOR_RED_MESSAGE0 = '红色';


// 2021-01-13 mPython2 固件新增功能 
// 2021-07-01 掌控板v2.3开始弃用
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_MESSAGE0 = '[适用2.0板] 当' + DEVICE + ' %1 时';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_LEFT = '向左倾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_RIGHT = '向右倾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_UP = '向前倾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_DOWN = '向后倾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_UP = '正面朝上';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_DOWN = '正面朝下';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_SINGLE_CLICK = '被单击';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_DOUBLE_CLICK = '被双击';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FREEFALL = '坠落';

Blockly.Msg.MPYTHON2_ACCELEROMETER_ROLL_ANGLE = '横滚角';
Blockly.Msg.MPYTHON2_ACCELEROMETER_PITCH_ANGLE = '俯仰角';

Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_HELPURL = '';
Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_TOOLTIP = '';
Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_MESSAGE0 = DEVICE + ' %1';

Blockly.Msg.MPYTHON_BUTTON_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON_BUTTON_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON_BUTTON_PRESSED_MESSAGE0 = '按键 %1 %2';

Blockly.Msg.isPressed = "已经按下";
Blockly.Msg.was_pressed = "曾经按下";
Blockly.Msg.get_presses = "按下过的次数";

Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_MESSAGE0 = '按键 %1 已经按下';

Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_MESSAGE0 = '按键 %1 曾经按下';

Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_TOOLTIP = '';
Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_MESSAGE0 = '按键 %1 按下过的次数';

Blockly.Msg.MPYTHON2_BUTTON_EVENT_MESSAGE0 = '当按键 %1 被 %2 时';
Blockly.Msg.MPYTHON2_BUTTON_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON2_BUTTON_EVENT_PRESSED = '按下';
Blockly.Msg.MPYTHON2_BUTTON_EVENT_RELEASED = '松开';

Blockly.Msg.MPYTHON_TOUCHPAD_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON_TOUCHPAD_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON_TOUCHPAD_PRESSED_MESSAGE0 = '触摸键 %1 %2';

Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_MESSAGE0 = '触摸键 %1 已经按下';

Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_MESSAGE0 = '触摸键 %1 曾经按下';

Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_MESSAGE0 = '触摸键 %1 按下过的次数';

Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_MESSAGE0 = '触摸键 %1 值';

Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_MESSAGE0 = '当触摸键 %1 被 %2 时';
Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_PRESSED = '触摸';
Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_RELEASED = '释放';

Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_MESSAGE0 = '设置触摸键 %1 阀值为 %2';
Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_TOOLTIP = '';


// 2020-12-04 Mu for 掌控板

// Help文本
Blockly.Msg.LKL_VS2_HELP_INIT_TOOLTIP = '初始化视觉传感器，并选择相关的地址';

// 设置模块文本
Blockly.Msg.LKL_VS2_MU_INIT_MESSAGE0 = '初始化 %1 端口 %2';
Blockly.Msg.LKL_VS2_MU_RESET_MESSAGE0 = '%1 恢复默认设置';
Blockly.Msg.LKL_VS2_MU_BEGIN_MESSAGE0 = '%1 %2 算法 %3';
Blockly.Msg.LKL_VS2_MU_LED_SET_COLOR_MESSAGE0 = '%1 %2 检测到结果 %4 否则 %5 亮度(0~15) %3';
Blockly.Msg.LKL_VS2_MU_SET_VISION_LEVEL_MESSAGE0 = '%1 算法 %2 性能 %3';
// Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 🌈 颜色识别 设置识别区域 宽度 = %2 高度 = %3';
Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 颜色识别 设置识别区域 宽度 = %2 高度 = %3';
// Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 🌈 色块检测 设置最小识别尺寸 宽度 = %2 高度 = %3';
Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 色块检测 设置最小识别尺寸 宽度 = %2 高度 = %3';
Blockly.Msg.LKL_VS2_MU_SET_VISION_ZOOM_MESSAGE0 = '%1 数码变焦 %2';
Blockly.Msg.LKL_VS2_MU_SET_UART_BAUD_MESSAGE0 = '%1 串口波特率 %2';
Blockly.Msg.LKL_VS2_MU_SET_CAMERA_WHITE_BALANCE_MESSAGE0 = '%1 摄像头白平衡 %2';
Blockly.Msg.LKL_VS2_MU_SET_CAMERA_HFR_MESSAGE0 = '%1 高帧率模式 %2';

// 运行模块文本
Blockly.Msg.LKL_VS2_MU_DETECTED_STATUS_MESSAGE0 = '%1 检测到 %2';
Blockly.Msg.LKL_VS2_MU_GET_COLOR_RCG_LABEL_MESSAGE0 = '%1 识别到 坐标 x= %2 y= %3 颜色';
// Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0 = '获取 %1 算法 🌈 颜色识别 %2 值';
Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0 = '获取 %1 算法 颜色识别 %2 值';
Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_MESSAGE0 = '获取 %1 算法 %2 %3 值';
// Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 算法 🌈 色块检测 检测到 %2 色块';
Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 算法 色块检测 检测到 %2 色块';
// Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0 = '获取 %1 算法 🌈 颜色识别 颜色 = %2';
Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0 = '获取 %1 算法 颜色识别 颜色 = %2';
// Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0 = '获取 %1 算法 📐 形状卡片 type = %2';
// Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = '获取 %1 算法 🚥 交通卡片 type = %2';
// Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0 = '获取 %1 算法 🔢 数字卡片 type = %2';
Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0 = '获取 %1 算法 形状卡片 type = %2';
Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = '获取 %1 算法 交通卡片 type = %2';
Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0 = '获取 %1 算法 数字卡片 type = %2';

// 光线传感器模块文本
// Blockly.Msg.LKL_VS2_MU_LS_BEGIN_MESSAGE0 = '%1 ⚡️ 光线传感器 %2 %3';
// Blockly.Msg.LKL_VS2_MU_LS_SET_SENSITIVITY_MESSAGE0 = '%1 ⚡️ 光线传感器 设置 灵敏度 %2';
// Blockly.Msg.LKL_VS2_MU_LS_WHITE_BALANCE_ENABLE_MESSAGE0 = '%1 ⚡️ 光线传感器 校准白平衡';
// Blockly.Msg.LKL_VS2_MU_LS_READ_PROXIMITY_MESSAGE0 = '%1 ⚡️ 光线传感器 读取 接近检测';
// Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_MESSAGE0 = '%1 ⚡️ 光线传感器 读取一次手势';
// Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_TYPE_MESSAGE0 = '%1 ⚡️ 光线传感器 手势 = %2';
Blockly.Msg.LKL_VS2_MU_LS_BEGIN_MESSAGE0 = '%1 光线传感器 %2 %3';
Blockly.Msg.LKL_VS2_MU_LS_SET_SENSITIVITY_MESSAGE0 = '%1 光线传感器 设置 灵敏度 %2';
Blockly.Msg.LKL_VS2_MU_LS_WHITE_BALANCE_ENABLE_MESSAGE0 = '%1 光线传感器 校准白平衡';
Blockly.Msg.LKL_VS2_MU_LS_READ_PROXIMITY_MESSAGE0 = '%1 光线传感器 读取 接近检测';
Blockly.Msg.LKL_VS2_MU_LS_READ_AMBIENT_LIGHT_MESSAGE0 = '%1 光线传感器 读取 环境光检测';
Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_MESSAGE0 = '%1 光线传感器 读取一次手势';
Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_TYPE_MESSAGE0 = '%1 光线传感器 手势 = %2';

// WiFi模块文本
Blockly.Msg.LKL_VS2_MU_AT_WIFI_INIT_MESSAGE0 = 'MU WiFi 初始化 端口 %1';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_SET_MESSAGE0 = 'MU WiFi 设置 名称 %1 密码 %2 模式 %3';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_CON_MESSAGE0 = 'MU WiFi 连接成功？';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_DISCON_MESSAGE0 = 'MU WiFi 断开连接';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_UDP_MESSAGE0 = 'MU WiFi 设置 目标IP %1 端口 %2';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_CIP_MESSAGE0 = 'MU WiFi 读取 目标IP';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_SIP_MESSAGE0 = 'MU WiFi 读取 本地IP';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_READ_MESSAGE0 = 'MU WiFi 读取';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_WRITE_MESSAGE0 = 'MU WiFi 写入 %1';

// Vision Enable Disable
Blockly.Msg.LKL_VS2_ENABLE = '启用';
Blockly.Msg.LKL_VS2_DISABLE = '关闭';

// Vision type
// Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT = '🌈 色块检测';
// Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION = '🌈 颜色识别';
// Blockly.Msg.LKL_VS2_VISION_BALL = '⚽ 球体检测';
// Blockly.Msg.LKL_VS2_VISION_BODY = '👨‍👩‍👦 人体检测';
// Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD = '📐 形状卡片';
// Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD = '🚥 交通卡片';
// Blockly.Msg.LKL_VS2_VISION_NUM_CARD = '🔢 数字卡片';
Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT = '色块检测';
Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION = '颜色识别';
Blockly.Msg.LKL_VS2_VISION_BALL = '球体检测';
Blockly.Msg.LKL_VS2_VISION_BODY = '人体检测';
Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD = '形状卡片';
Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD = '交通卡片';
Blockly.Msg.LKL_VS2_VISION_NUM_CARD = '数字卡片';

// Vision Level
Blockly.Msg.LKL_VS2_LEVEL_DEFAULT = '默认';
Blockly.Msg.LKL_VS2_LEVEL_SPEED = '速度优先';
Blockly.Msg.LKL_VS2_LEVEL_BALANCE = '均衡';
Blockly.Msg.LKL_VS2_LEVEL_ACCURACY = '准确率优先';

// Vision Zoom Type
Blockly.Msg.LKL_VS2_ZOOM_DEFAULT = '默认';
Blockly.Msg.LKL_VS2_ZOOM_1 = '等级1';
Blockly.Msg.LKL_VS2_ZOOM_2 = '等级2';
Blockly.Msg.LKL_VS2_ZOOM_3 = '等级3';
Blockly.Msg.LKL_VS2_ZOOM_4 = '等级4';
Blockly.Msg.LKL_VS2_ZOOM_5 = '等级5';

// Vision White Balance Type
Blockly.Msg.LKL_VS2_AUTO = '自动';
Blockly.Msg.LKL_VS2_LOCK_AWB = '锁定白平衡';
Blockly.Msg.LKL_VS2_WHITE_LIGHT = '白光模式';
Blockly.Msg.LKL_VS2_YELLOW_LIGHT = '黄光模式';

// Vision State Value Type
Blockly.Msg.LKL_VS2_STATE_VALUE_X = '横向坐标';
Blockly.Msg.LKL_VS2_STATE_VALUE_Y = '纵向坐标';
Blockly.Msg.LKL_VS2_STATE_VALUE_WIDTH = '宽度';
Blockly.Msg.LKL_VS2_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.LKL_VS2_STATE_VALUE_LABEL = '标签';

Blockly.Msg.LKL_VS2_STATE_VALUE_R = '红色通道';
Blockly.Msg.LKL_VS2_STATE_VALUE_G = '绿色通道';
Blockly.Msg.LKL_VS2_STATE_VALUE_B = '蓝色通道';

// Vision Shape Card Type
// Blockly.Msg.LKL_VS2_CARD_TICK = '✔️ 钩';
// Blockly.Msg.LKL_VS2_CARD_CROSS = '❌ 叉';
// Blockly.Msg.LKL_VS2_CARD_CIRCLE = '🟡 圆形';
// Blockly.Msg.LKL_VS2_CARD_SQUARE = '🟩 方形';
// Blockly.Msg.LKL_VS2_CARD_TRIANGLE = '🔺 三角形';
Blockly.Msg.LKL_VS2_CARD_TICK = '钩';
Blockly.Msg.LKL_VS2_CARD_CROSS = '叉';
Blockly.Msg.LKL_VS2_CARD_CIRCLE = '圆形';
Blockly.Msg.LKL_VS2_CARD_SQUARE = '方形';
Blockly.Msg.LKL_VS2_CARD_TRIANGLE = '三角形';

// Vision Traffic Card Type
// Blockly.Msg.LKL_VS2_CARD_STRAIGHT = '⬆️ 向前';
// Blockly.Msg.LKL_VS2_CARD_TURN_LEFT = '⬅️ 向左';
// Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT = '➡️ 向右';
// Blockly.Msg.LKL_VS2_CARD_TURN_AROUND = '⬇️ 掉头';
// Blockly.Msg.LKL_VS2_CARD_STOP = '🅿️ 停止';
Blockly.Msg.LKL_VS2_CARD_STRAIGHT = '向前';
Blockly.Msg.LKL_VS2_CARD_TURN_LEFT = '向左';
Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT = '向右';
Blockly.Msg.LKL_VS2_CARD_TURN_AROUND = '掉头';
Blockly.Msg.LKL_VS2_CARD_STOP = '停止';

// Vision Color Type
Blockly.Msg.LKL_VS2_COLOR_BLACK = '黑色';
Blockly.Msg.LKL_VS2_COLOR_WHITE = '白色';
Blockly.Msg.LKL_VS2_COLOR_RED = '红色';
Blockly.Msg.LKL_VS2_COLOR_YELLOW = '黄色';
Blockly.Msg.LKL_VS2_COLOR_GREEN = '绿色';
Blockly.Msg.LKL_VS2_COLOR_CYAN = '青色';
Blockly.Msg.LKL_VS2_COLOR_BLUE = '蓝色';
Blockly.Msg.LKL_VS2_COLOR_PURPLE = '紫色';
Blockly.Msg.LKL_VS2_COLOR_UNKNOWN = '其他';

// LED color type
Blockly.Msg.LKL_VS2_LED_CLOSE = '关闭';
Blockly.Msg.LKL_VS2_LED_RED = '红色';
Blockly.Msg.LKL_VS2_LED_GREEN = '绿色';
Blockly.Msg.LKL_VS2_LED_YELLOW = '黄色';
Blockly.Msg.LKL_VS2_LED_BLUE = '蓝色';
Blockly.Msg.LKL_VS2_LED_PURPLE = '紫色';
Blockly.Msg.LKL_VS2_LED_CYAN = '青色';
Blockly.Msg.LKL_VS2_LED_WHITE = '白色';

// Mu Light Sensor Enable Disable
Blockly.Msg.LKL_VS2_LS_ENABLE = '启用';
Blockly.Msg.LKL_VS2_LS_DISABLE = '关闭';

// Mu Light Sensor Type
Blockly.Msg.LKL_VS2_LS_PROXIMITY = '接近检测';
Blockly.Msg.LKL_VS2_LS_ALS = '环境光检测';
Blockly.Msg.LKL_VS2_LS_GESTURE_SENSOR = '手势检测';

// Mu Light Sensor Sensitivity Type
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_DEFAULT = '默认';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_LOW = '低';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_MID = '中';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_HIGH = '高';

// Mu Light Sensor Gesture Type
Blockly.Msg.LKL_VS2_LS_GESTURE_UP = '上划';
Blockly.Msg.LKL_VS2_LS_GESTURE_DOWN = '下划';
Blockly.Msg.LKL_VS2_LS_GESTURE_LEFT = '左划';
Blockly.Msg.LKL_VS2_LS_GESTURE_RIGHT = '右划';
Blockly.Msg.LKL_VS2_LS_GESTURE_PUSH = '前进';
Blockly.Msg.LKL_VS2_LS_GESTURE_PULL = '后退';

// Mu WiFi Mode Type
Blockly.Msg.LKL_VS2_STA = '客户端';
Blockly.Msg.LKL_VS2_AP = '热点';

//AI博弈

//实例化模型（不可续写）
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_MESSAGE0 = '实例化训练模型%9 棋盘宽度 %1 棋盘高度 %2 获胜连棋数目 %3 蒙特卡洛搜索树搜寻深度 %4 数据缓冲区大小 %5 模型保存点轮数 %6 训练总轮数 %7 模型保存名字 %8 ';
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_TOOLTIP =
    '参数：\n' +
    '棋盘尺寸默认为(3，3)；\n' +
    '获胜连棋数目默认为3 赢棋规则：默认3子连棋获胜；\n' +
    '蒙特卡洛搜索树算法搜索深度影响AI的远见，默认深度1000；\n' +
    '数据缓冲区大小默认10000；\n' +
    '训练模型的保存点默认每50轮保存一次；\n' +
    '训练总轮数默认值为2000；\n' +
    '保存在当前项目目录下，模型包含三个文件分别为current_policy_tensorflow.model.data-00000-of-00001、current_policy_tensorflow.model.index和current_policy_tensorflow.model.meta';
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_HELPURL = '';

//实例化模型（可续写）
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_CT_MESSAGE0 = '使用已有模型训练%10 模型名字 %1 棋盘宽度 %2 棋盘高度 %3 获胜连棋数目 %4 蒙特卡洛搜索树搜寻深度 %5 数据缓冲区大小 %6 模型保存点轮数 %7 训练总轮数 %8 模型保存名字 %9 ';
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_CT_TOOLTIP =
    '参数：\n' +
    '先前训练的模型名字（用于之前的模型被中断后再次训练）；\n' +
    '棋盘尺寸默认为(3，3)；\n' +
    '获胜连棋数目默认为3 赢棋规则：默认3子连棋获胜；\n' +
    '蒙特卡洛搜索树算法搜索深度影响AI的远见，默认深度1000；\n' +
    '数据缓冲区大小默认10000；\n' +
    '训练模型的保存点默认每50轮保存一次；\n' +
    '训练总轮数默认值为2000；\n' +
    '保存在当前项目目录下，模型包含三个文件分别为current_policy_tensorflow.model.data-00000-of-00001、current_policy_tensorflow.model.index和current_policy_tensorflow.model.meta';
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_CT_HELPURL = '';

//训练模型
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_RUN_MESSAGE0 = '开始训练模型';
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_RUN_TOOLTIP = '';
Blockly.Msg.PYTHON_ALPHAZERO_TRAIN_RUN_HELPURL = '';

//实例化对战模型
Blockly.Msg.PYTHON_ALPHAZERO_PLAYERVSAI_MESSAGE0 = '实例化对战模型%8 模型路径 %1 获胜连棋数目 %2 棋盘宽度 %3 棋盘高度 %4 是否先后手 %5 %6 游戏是否可视化 %7';
Blockly.Msg.PYTHON_ALPHAZERO_PLAYERVSAI_TOOLTIP = '';
Blockly.Msg.PYTHON_ALPHAZERO_PLAYERVSAI_HELPURL = '';

//开始人机对战
Blockly.Msg.PYTHON_ALPHAZERO_PLAYERVSAI_RUN_MESSAGE0 = '启动人机对战';
Blockly.Msg.PYTHON_ALPHAZERO_PLAYERVSAI_RUN_TOOLTIP = '';
Blockly.Msg.PYTHON_ALPHAZERO_PLAYERVSAI_RUN_HELPURL = '';

//实例化AI对战模型
Blockly.Msg.PYTHON_ALPHAZERO_AIVSAI_MESSAGE0 = '实例化AI对战AI模型%9 黑棋模型路径 %1 黑棋meta路径 %2 白棋模型路径 %3 白棋meta路径 %4 获胜连棋数目 %5 棋盘宽度 %6 棋盘高度 %7 游戏是否可视化 %8';
Blockly.Msg.PYTHON_ALPHAZERO_AIVSAI_TOOLTIP = '训练模型保存时会有三个文件，其后缀分别是.data-00000-of-00001、.index和.meta，三个文件少一个都将会导致无法进行AI对战AI';
Blockly.Msg.PYTHON_ALPHAZERO_AIVSAI_HELPURL = '';

//开始AI对战
Blockly.Msg.PYTHON_ALPHAZERO_AIVSAI_RUN_MESSAGE0 = '启动AI对战';
Blockly.Msg.PYTHON_ALPHAZERO_AIVSAI_RUN_TOOLTIP = '';
Blockly.Msg.PYTHON_AlphaZero_AIVSAI_RUN_HELPURL = '';

//AI小车
Blockly.Msg.PYTHON_AI_CAR_KERAS_LOAD_MESSAGE0 = '预加载 keras模型';
Blockly.Msg.PYTHON_AI_CAR_KERAS_LOAD_TOOLTIP = '';
Blockly.Msg.PYTHON_AI_CAR_KERAS_LOAD_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_MOBILENET_MODEL_MESSAGE0 = '初始化 MobileNet网络模型 %4 在使用中图像的宽 %1 在使用中图像的高 %2 图像的通道数量 %3';
Blockly.Msg.PYTHON_AI_CAR_MOBILENET_MODEL_TOOLTIP = '卷积神经网络，用于移动端设备';
Blockly.Msg.PYTHON_AI_CAR_MOBILENET_MODEL_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_CONVOLUTION_MESSAGE0 = '自定义卷积层 输入shape %1';
Blockly.Msg.PYTHON_AI_CAR_CONVOLUTION_TOOLTIP = '用来添加自定义的卷积层';
Blockly.Msg.PYTHON_AI_CAR_CONVOLUTION_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_DORPOUT_MESSAGE0 = '自定义Dropout层 Dropout层系数 %1';
Blockly.Msg.PYTHON_AI_CAR_DORPOUT_TOOLTIP = '用来添加自定义的Dropout层';
Blockly.Msg.PYTHON_AI_CAR_DORPOUT_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_POOLING_MESSAGE0 = '自定义池化层 输入大小 %1';
Blockly.Msg.PYTHON_AI_CAR_POOLING_TOOLTIP = '用来添加自定义的池化层';
Blockly.Msg.PYTHON_AI_CAR_POOLING_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_PREDS_MESSAGE0 = '激活分类器 分类数%1';
Blockly.Msg.PYTHON_AI_CAR_PREDS_TOOLTIP = '最后模型需要实现的分类效果，需要放在所有神经网络层的最后面，需要与上面初始化MobileNet网络模型中分类数量一致';
Blockly.Msg.PYTHON_AI_CAR_PREDS_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_MODEL_MESSAGE0 = '指定模型的输入和输出';
Blockly.Msg.PYTHON_AI_CAR_MODEL_TOOLTIP = '';
Blockly.Msg.PYTHON_AI_CAR_MODEL_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_VALUE_PREDS_MESSAGE0 = '训练参数设定 %5 数据集名 %1 训练目标的宽 %2 训练目标的高 %3 每轮训练的数据集大小 %4';
Blockly.Msg.PYTHON_AI_CAR_VALUE_PREDS_TOOLTIP = 'data 放置图片文件夹 ，每个目录下对应一个类别';
Blockly.Msg.PYTHON_AI_CAR_VALUE_PREDS_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_MODEL_OPTIMIZER_MESSAGE0 = '模型优化器';
Blockly.Msg.PYTHON_AI_CAR_MODEL_OPTIMIZER_TOOLTIP = '损失函数将分类交叉熵，评价度量将准确性';
Blockly.Msg.PYTHON_AI_CAR_MODEL_OPTIMIZER_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_STEP_SIZE_TRAIN_MESSAGE0 = '开始训练 epochs训练步数%1';
Blockly.Msg.PYTHON_AI_CAR_STEP_SIZE_TRAIN_TOOLTIP = '训练步数可在1~10000区间，训练步数越大，训练时间越长。';
Blockly.Msg.PYTHON_AI_CAR_STEP_SIZE_TRAIN_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_MODEL_H5_MESSAGE0 = '保存模型路径：%1 模型名称:%2 .h5 ';
Blockly.Msg.PYTHON_AI_CAR_MODEL_H5_TOOLTIP = '保存模型';
Blockly.Msg.PYTHON_AI_CAR_MODEL_H5_HELPURL = '';

Blockly.Msg.PYTHON_AI_CAR_H5_CONVERSION_KMODE_MESSAGE0 = 'h5模型 转换为AI摄像头所用的kmodel模型';
Blockly.Msg.PYTHON_AI_CAR_H5_CONVERSION_KMODE_TOOLTIP = '与之前填写的保存模型路径一样';
Blockly.Msg.PYTHON_AI_CAR_H5_CONVERSION_KMODE_HELPURL = '';

//车牌识别
Blockly.Msg.PYTHON_CLPR_UI_MESSAGE0 = '使用可视化UI界面识别图片';
Blockly.Msg.PYTHON_CLPR_UI_TOOLTIP = '使用TK制作的UI界面';
Blockly.Msg.PYTHON_CLPR_UI_HELPURL = '';

Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_MESSAGE0 = '摄像头识别车牌主程序%2'+
'预加载双模型%3'+
'使用摄像头序号%1 按下Q键退出车牌识别主程序';
Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_TOOLTIP = '预加载模型，配置使用的摄像头';
Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_HELPURL = '';

Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_UNET_MESSAGE0 = '当定位到车牌时';
Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_UNET_TOOLTIP = '';
Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_UNET_HELPURL = '';

Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_CNN_MESSAGE0 = '当识别到车牌时';
Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_CNN_TOOLTIP = '';
Blockly.Msg.PYTHON_PREPROCESSING_CLPR_VIDEO_CNN_HELPURL = '';

Blockly.Msg.PYTHON_RECOGNITION_RESULT_MESSAGE0 = '车牌识别的结果';
Blockly.Msg.PYTHON_RECOGNITION_RESULT_TOOLTIP = '车牌识别的结果';
Blockly.Msg.PYTHON_RECOGNITION_RESULT_HELPURL = '';

//数据预处理
Blockly.Msg.PYTHON_VIDEO2IMG_MESSAGE0 = '视频转图片%4 视频路径： %1 存放图片路径： %2 帧差步长：%3 ';
Blockly.Msg.PYTHON_VIDEO2IMG_TOOLTIP =
    '将拍摄的视频转换成帧图片\n' +
    'video_path:视频路径\n' +
    'pic_path:转换后的图片存放路径\n' +
    'step:帧差\n';
Blockly.Msg.PYTHON_VIDEO2IMG_HELPURL = '';

Blockly.Msg.PYTHON_PREPROCESSING_MAIN_MESSAGE0 = '图片处理主程序%4 读取方式：%3 原图片路径%1 处理后图片存放路径：%2';
Blockly.Msg.PYTHON_PREPROCESSING_MAIN_TOOLTIP = '所有处理方法以及保存图片需放在此积木内部';
Blockly.Msg.PYTHON_PREPROCESSING_MAIN_HELPURL = '';

Blockly.Msg.PYTHON_SAVE_PIC_MESSAGE0 = '保存图片';
Blockly.Msg.PYTHON_SAVE_PIC_TOOLTIP = '将处理好的图片保存到主程序设置的路径内';
Blockly.Msg.PYTHON_SAVE_PIC_HELPURL = '';

Blockly.Msg.RGB_TO_GRAY = 'RGB转GRAY';
Blockly.Msg.RGB_TO_YUV = 'RGB转YUV';
Blockly.Msg.RGB_TO_LAB = 'RGB转LAB';
Blockly.Msg.RGB_TO_HSV = 'RGB转HSV';
Blockly.Msg.GRAY_TO_RGB = 'GRAY转RGB';
Blockly.Msg.HSV_TO_RGB = 'HSV转RGB';
Blockly.Msg.LAB_TO_RGB = 'LAB转RGB';
Blockly.Msg.GRAYSCALE = '灰度图';
Blockly.Msg.RGB_IMAGE = 'RGB图';
Blockly.Msg.YUV_GRAPH = 'YUV图';
Blockly.Msg.CORROSION = '腐蚀';
Blockly.Msg.EXPANSION = '膨胀';
Blockly.Msg.OPEN_OPERATION = '开运算';
Blockly.Msg.CLOSING_OPERATION = '闭运算';
Blockly.Msg.GAUSSIAN_FILTERING = '高斯滤波';
Blockly.Msg.MEDIAN_FILTER = '中值滤波';
Blockly.Msg.MEAN_FILTER = '均值滤波';
Blockly.Msg.ORDINARY_CONVOLUTION = '普通卷积';

Blockly.Msg.PYTHON_COLOR_SPACE_CONVERSION_MESSAGE0 = '颜色空间转换 转换方式：%1';
Blockly.Msg.PYTHON_COLOR_SPACE_CONVERSION_TOOLTIP = '转换颜色空间';
Blockly.Msg.PYTHON_COLOR_SPACE_CONVERSION_HELPURL = '';

Blockly.Msg.PYTHON_FEATURE_DUALIZATION_MESSAGE0 = '图像全局二值化 二值化方法%1';
Blockly.Msg.PYTHON_FEATURE_DUALIZATION_TOOLTIP =
    '特征二元化的过程是将数值型的属性转换为布尔值的属性，设定一个阈值作为划分属性值为0和1的分隔点。\n' +
    '需要在灰度图中使用：\n' +
    'cv2.THRESH_BINARY | cv2.THRESH_OTSU #大律法,全局自适应阈值 参数0可改为任意数字但不起作用\n' +
    'cv2.THRESH_BINARY | cv2.THRESH_TRIANGLE #TRIANGLE法,，全局自适应阈值, 参数0可改为任意数字但不起作用，适用于单个波峰\n' +
    '可以在任意类型图片中使用\n' +
    'cv2.THRESH_BINARY # 自定义阈值为150,大于150的是白色 小于的是黑色\n' +
    'cv2.THRESH_BINARY_INV # 自定义阈值为150,大于150的是黑色 小于的是白色\n' +
    'cv2.THRESH_TRUNC # 截断 大于150的是改为150  小于150的保留\n' +
    'cv2.THRESH_TOZERO # 截断 小于150的是改为150  大于150的保留\n';
Blockly.Msg.PYTHON_FEATURE_DUALIZATION_HELPURL = '';

Blockly.Msg.PYTHON_IMAGE_STADARDIZATION_MESSAGE0 = '图像标准化';
Blockly.Msg.PYTHON_IMAGE_STADARDIZATION_TOOLTIP = '图像标准化';
Blockly.Msg.PYTHON_IMAGE_STADARDIZATION_HELPURL = '';

Blockly.Msg.PYTHON_HISTOGRAM_EQUALIZATION_MESSAGE0 = '直方图均衡化 图片类型： %1';
Blockly.Msg.PYTHON_HISTOGRAM_EQUALIZATION_TOOLTIP =
    '直方图均衡化\n' +
    '图片类型为灰度图则需要读入图片为灰度图\n' +
    '图片类型为RGB图则需要读入图片为原图\n' +
    '图片类型为YUV图则两类图皆可\n';
Blockly.Msg.PYTHON_HISTOGRAM_EQUALIZATION_HELPURL = '';

Blockly.Msg.PYTHON_COR_AND_EXP_MESSAGE0 = '操作选择 %1 %4卷积核的尺寸X:%2 卷积核的尺寸Y:%3';
Blockly.Msg.PYTHON_COR_AND_EXP_TOOLTIP = '对图片进行腐蚀或膨胀操作';
Blockly.Msg.PYTHON_COR_AND_EXP_HELPURL = '';

Blockly.Msg.PYTHON_OPEN_CLOSE_MESSAGE0 = '运算方式选择 %1 %4卷积核的尺寸X:%2 卷积核的尺寸Y:%3';
Blockly.Msg.PYTHON_OPEN_CLOSE_TOOLTIP = '对图片进行开运算或闭运算操作';
Blockly.Msg.PYTHON_OPEN_CLOSE_HELPURL = '';

Blockly.Msg.PYTHON_FILTER_MESSAGE0 = '滤波器选择 %1 %4卷积核的尺寸X:%2 卷积核的尺寸Y:%3';
Blockly.Msg.PYTHON_FILTER_TOOLTIP =
    '使用滤波器来对图片操作\n' +
    '添加噪声、减少噪声、模糊、锐化功能取决于卷积核的设置\n' +
    '高斯滤波\n' +
    '中值滤波\n' +
    '均值滤波 卷积核为单个奇数，在这里取X的值为卷积核\n' +
    '普通卷积\n';
Blockly.Msg.PYTHON_FILTER_HELPURL = '';

Blockly.Msg.PYTHON_EDGE_EXTRACTION_MESSAGE0 = '边缘提取%3 临界点1：%1 临界点2：%2';
Blockly.Msg.PYTHON_EDGE_EXTRACTION_TOOLTIP =
    '最大最小阈值threshold1, threshold2\n' +
    'threshold1:连接边缘 设置100左右较为合适\n' +
    'threshold2：勾勒明显的边缘 设置250左右较为合适\n';
Blockly.Msg.PYTHON_EDGE_EXTRACTION_HELPURL = '';

Blockly.Msg.PYTHON_CaptureVideo_MESSAGE0 = '摄像头保存视频%8 摄像头索引：%1 存放路径：%2 横向分辨率：%3  纵向分辨率：%4 视频帧率fps: %5 格式 %6 键盘按键%7停止录制';

Blockly.Msg.PYTHON_CaptureImage_MESSAGE0 = '摄像头保存图片%7 摄像头索引：%1 存放路径：%2 横向分辨率：%3  纵向分辨率：%4 格式 %5 键盘按键%6保存';

// 2021.06.13 事件类block修改
Blockly.Msg.MQTT_RECEIVED_MESSAGE0 = '当从主题 %1 接收到消息 时';

Blockly.Msg.MQTT_MESSAGE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_MESSAGE_MESSAGE0 = '从 MQTT 收到的消息';
Blockly.Msg.MQTT_MESSAGE_TOOLTIP = "";

Blockly.Msg.MQTT_CONNECTED_HELPURL = ''
Blockly.Msg.MQTT_CONNECTED_MESSAGE0 = 'MQTT 连接状态';
Blockly.Msg.MQTT_CONNECTED_TOOLTIP = "";

Blockly.Msg.MPYTHON_BLYNK_RECEIVED_MESSAGE0 = '当 收到 Blynk 虚拟管脚 V %1 的值';

Blockly.Msg.MPYTHON_BLYNK_VALUE_MESSAGE0 = '从 Blynk 收到的值';
Blockly.Msg.MPYTHON_BLYNK_VALUE_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLYNK_VALUE_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_MSG_MESSAGE0 = '从 OneNET 收到的消息';
Blockly.Msg.MPYTHON_ONENET_MSG_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_MSG_HELPURL = '';

Blockly.Msg.MPYTHON3_ONENET_RECV_MESSAGE0 = '当 从 OneNET 收到消息 时';

Blockly.Msg.MPYTHON3_IR_REMOTE_RECV_MESSAGE0 = '当 红外接收端 %1 收到消息时';
Blockly.Msg.MPYTHON_IR_REMOTE_ADDRESS_MESSAGE0 = '红外回调地址';
Blockly.Msg.MPYTHON_IR_REMOTE_MESSAGE_MESSAGE0 = '红外接收内容';

Blockly.Msg.MPYTHON_RADIO_MSG_MESSAGE0 = '收到的无线广播消息';
Blockly.Msg.MPYTHON_RADIO_MSG_TOOLTIP = '';
Blockly.Msg.MPYTHON_RADIO_MSG_HELPURL = '';

Blockly.Msg.MPYTHON3_RADIO_RECV_MESSAGE0 = '当 收到无线广播消息 时';

Blockly.Msg.MPYTHON_TIMER_DEF_MESSAGE0 = '定义定时器 %1';
Blockly.Msg.MPYTHON_TIMER_INIT_MESSAGE0 = '启动定时器 %1 %2 周期 %3 毫秒';

Blockly.Msg.MPYTHON_MAIN_HELPURL = '';
Blockly.Msg.MPYTHON_MAIN_TOOLTIP = '';
Blockly.Msg.MPYTHON_MAIN_MESSAGE0 = '主程序';
// 事件类block修改 End

//M5700
Blockly.Msg.MPYTHON_M5700_SEND_MSM_MESSAGE0 = '发送英文短信 电话号码 %1 短信内容 %2'
Blockly.Msg.MPYTHON_M5700_SEND_MSM_TOOLTIP = '';
Blockly.Msg.MPYTHON_M5700_SEND_MSM_HELPURL = '';

Blockly.Msg.MPYTHON_M5700_INIT_MESSAGE0 = 'M5700通信模块初始化'
Blockly.Msg.MPYTHON_M5700_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_M5700_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_M5700_CALL_PHONE_MESSAGE0 = '拨打电话 号码 %1'

Blockly.Msg.MPYTHON_M5700_HANGUP_MESSAGE0 = '挂断电话'

//拓攻无人机
Blockly.Msg.TELLO_AUTO = '自动';

Blockly.Msg.MPYTHON_MYSTEAM_UAV_INIT_MESSAGE0 = '初始化 %1 台无人机'
Blockly.Msg.MPYTHON_MYSTEAM_UAV_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_INITT_HELPURL = '';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_RUN_MESSAGE0 = '运行线程 %1';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SLEEP_MESSAGE0 = '等待 %1 秒';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SLEEP_FOR_MESSAGE0 = '等待直到 %1';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_TTS_MESSAGE0 = '语音播报 %1';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_BUTTON_IS_PRESSED_MESSAGE0 = '按键 %1 被按下';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MAX_REPEAT_MESSAGE0 = '最大重发次数 %1';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_CLEAR_CONSOLE_MESSAGE0 = '清空控制台';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_CLEAR_TIMER_MESSAGE0 = '计时器清零';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_TIMER_MESSAGE0 = '计时器';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_CTRL_MESSAGE0 = '%1 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_CTRL_land = '降落';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_CTRL_brake = '刹车';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_CTRL_hover = '悬停';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_CTRL_scram = '急停';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_CTRL_calibration = '校准';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_TAKE_OFF_MESSAGE0 = '%1 起飞 %2 厘米';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_TAKE_OFF_TOOLTIP = '距离为：0 ~ 300';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AUTO_WAIT_MESSAGE0 = '%1 %2 自动等待';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SUB_FLOW_SWITCH_MESSAGE0 = '%1 %2 侧面流光';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_MOD_MESSAGE0 = '%1 切换为 %2 模式';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_MOD_drain = '光流定位';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_MOD_label = '标签定位';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_MOD_autonomy = '自主巡线';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SET_CENTER_OFFSET_MESSAGE0 = '%1 调整重心偏移(%2, %3)';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SET_LOCATION_MESSAGE0 = '%1 设置当前位置为(%2, %3)';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SET_TAG_DISTANCE_MESSAGE0 = '%1 设置标签距离为 %2 厘米';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_XY_SPEED_MESSAGE0 = '%1 水平速度 %2 厘米/秒';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_XYZ_SPEED_TOOLTIP = '速度为：0 ~ 100';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_Z_SPEED_MESSAGE0 = '%1 垂直速度 %2 厘米/秒';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_CTRL_MESSAGE0 = '%1 向 %2 飞 %3 厘米';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_go = '前';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_back = '后';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_left = '左';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_right = '右';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_up = '上';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_down = '下';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_left_up = '↖';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_right_up = '↗';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_left_down = '↙';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_right_down = '↘';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_SD_MESSAGE0 = '%1 向 %2 飞 %3 厘米，寻找黑色色块';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_SB_MESSAGE0 = '%1 向 %2 飞 %3 厘米，寻找色块( %4, %5, %6, %7, %8, %9)';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_ST_MESSAGE0 = '%1 向 %2 飞 %3 厘米，寻找 %4 号标签';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_FT_MESSAGE0 = '%1 向 %2 飞 %3 厘米，跟随 %4 号标签';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_MESSAGE0 = '%1 从 %2 位置移动( %3, %4, %5 )';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_current = '当前';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MOVE_target = '目标';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GOTOTAG_MESSAGE0 = '%1 直达 %2 号标签，高度 %3 厘米';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GOTO_MESSAGE0 = '%1 直达(%2, %3, %4)';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_HOR_AROUND_MESSAGE0 = '%1 水平环绕 %2 坐标 %3 %4 角度 %5 速度 %6 厘米/秒';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_ABSOLUTE = '绝对';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_RELATIVE = '相对';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_VER_AROUND_MESSAGE0 = '%1 垂直环绕 %2 方向 %3 %4 角度 %5 速度 %6 厘米/秒';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_BEFORE_AFTER = '前后';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_LEFT_RIGHT = '左右';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SIN_AROUND_MESSAGE0 = '%1 正弦环绕 %2 %3 方向，从 %4 度到 %5 度，周期长度 %6 厘米，振幅大小 %7 厘米， 速度 %8 厘米/秒';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_HOV = '水平';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_VER = '垂直';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_ROTATION_MESSAGE0 = '%1 自转 %2 度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_DIR_MESSAGE0 = '%1 航向 %2 度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLY_HIGH_MESSAGE0 = '%1 高度 %2 厘米';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_TOF_SWITCH_MESSAGE0 = '%1 激光高定 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_FLIP_CTRL_MESSAGE0 = '%1 向 %2 翻滚 %3 圈';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_always_bright = '常亮';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_breathing_lamp = '呼吸灯';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_Colorful_changes = '七彩变幻';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_light_off = '熄灭';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_LED_CTRL_MESSAGE0 = '%1 灯光 %2 颜色 %3';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_black_spot = '黑点';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_black_line = '黑线';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_label = '标签';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_qr_code = '二维码';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_bar_code = '条形码';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MV_CHECK_MOD_MESSAGE0 = '%1 检测 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MV_CHECK_TAG_MESSAGE0 = '%1 检测 %2 号标签';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MV_CHECK_BLOB_MESSAGE0 = '%1 检测%8 ( %2, %3, %4, %5, %6, %7 )';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MV_CHECK_BLOB_BLOCK = '色块';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MV_CHECK_BLOB_LINE = '色线';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MV_BLOB_AREA_MESSAGE0 = '%1 检测面积(%2, %3)';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_IS_MV_CHEAK_LINE_MESSAGE0 = '%1 检测到 %2 方有线';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_IS_MV_CHEAK_MESSAGE0 = '%1 检测到 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_lock = '锁定';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_Unlock = '解锁';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_LOCK_DIR_MESSAGE0 = '%1 %2 机头方向';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_single = '单次';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_continuity = '连续';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_stop = '停止';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SHOOT_CTRL_MESSAGE0 = '%1 %2 发射激光';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_close = '关闭';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_open = '打开';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_MAGNET_CTRL_MESSAGE0 = '%1 %2 电磁铁';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SERVO_CTRL_MESSAGE0 = '%1 舵机 %2 度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_OBS_DIS_MESSAGE0 = '%1 %2 方障碍物的距离';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_BLOB_RESULT_MESSAGE0 = '%1 色块的 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_COUNT = '数量';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AREA = '面积';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_LENGTH = '长度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_WIDTH = '宽度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_color_block = '色块';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_label_no = '标签号';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_roll_angle = '横滚角';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_pitch_angle = '俯仰角';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_yaw_angle = '偏航角';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_abscissa = '横坐标';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_ordinate = '纵坐标';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_height = '高度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_horizontal_axis_error = '横轴误差';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_vertical_axis_error = '纵轴误差';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_altitude_error = '高度误差';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_voltage = '电压';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_FLY_SENSOR_MESSAGE0 = '%1 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SWITCH_CTRL_MESSAGE0 = '%1 %2 电子开关';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_SCALE_WEIGHT_MESSAGE0 = '%1电子秤读数';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_achievement = '成绩';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_SHOOT_RESULT_MESSAGE0 = '%1 射击 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_ROLE_CTRL_MESSAGE0 = '%1 发送 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_content = '内容';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_serial_no = '序号';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_GET_ROLE_NEWS_MESSAGE0 = '%1 消息 %2';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_CLEAR_ROLE_NEWS_MESSAGE0 = '%1 清除消息';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_CAMERA_DEG_MESSAGE0 = '%1 镜头 %2 度';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_photograph = '拍照';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_color_sampling = '颜色采样';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_color_recognition = '颜色识别';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_count_recognition_selected = '计数识别（正选）';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_count_recognition_reverse = '计数识别（反选）';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_count_PASSBACK = '回传';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_count_Save_SD_card = '保存到内存卡';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_PHOTO_MOD_MESSAGE0 = '%1 %2 %3';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_PHOTO_MOD_6_MESSAGE0 = '%1 回传保存的照片';
Blockly.Msg.MPYTHON_MYSTEAM_UAV_PHOTO_OK_MESSAGE0 = "图片回传成功";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_secrecy = "保密";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_IR_SEND_MESSAGE0 = "%1 红外 %2 协议发送(0x%3, 0x%4, 0x%5, 0x%6)";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SHOW_STR_MESSAGE0 = "%1 OLED在(%2, %3) 显示字符串 %4 放大 %5 倍";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_clear_screen = "清屏";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_take_effect = "生效";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_SHOW_CTRL_MESSAGE0 = "%1 OLED显示 %2";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_END_MESSAGE0 = "程序结束";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_INIT_MESSAGE0 = "AI初始化";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_RUN_FUNCTION_MESSAGE0 = "AI识别文字%1";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_IS_COMPLETE_MESSAGE0 = "AI识别完成";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_IS_PHOTO_OK_MESSAGE0 = "AI照片读取完成";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_RESULT_NUM_MESSAGE0 = "AI识别到的目标数量";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_RESULT_OBJECT_MESSAGE0 = "第%1个目标的%2";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_name = "名称";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_confidence = "信度";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_perimeter = "周长";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_w = "长";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_h = "宽";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_RUN_TTS_MESSAGE0 = "AI语音播报%1";
Blockly.Msg.MPYTHON_MYSTEAM_UAV_AI_RESULT_MESSAGE0 = "AI语音识别结果";


//拓攻无人机 end

//Amigo AI摄像头主控模式
//按键 LED 

//下拉翻译
Blockly.Msg.MPYTHON_AMIGO_SENSOR_Pre = '外置';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_Back = '默认';

Blockly.Msg.MPYTHON_AMIGO_rotation_90 = '顺时针90°';
Blockly.Msg.MPYTHON_AMIGO_rotation_180 = '顺时针180°';
Blockly.Msg.MPYTHON_AMIGO_rotation_270 = '顺时针270°';
Blockly.Msg.MPYTHON_AMIGO_rotation_360 = '顺时针360°';

// Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_LIGHT_MESSAGE0 = '补光灯 %1';
// Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_LIGHT_HELPURL = '';
// Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_LIGHT_TOOLTIP = '';

// Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_MESSAGE0 = '按键 %1';
// Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_HELPURL = '';
// Blockly.Msg.MPYTHON_AICAMERA_PERIPHERAL_BUTTON_TOOLTIP = '';
// Blockly.Msg.IS_PRESSED = '已经按下';
// Blockly.Msg.WAS_PRESSED = '曾经按下';
// Blockly.Msg.GET_PRESSED = '按下过的次数';

Blockly.Msg.MPYTHON_AMIGO_BUTTON_EVENT_A_MESSAGE0 = '按键A被按下时';
Blockly.Msg.MPYTHON_AMIGO_BUTTON_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_BUTTON_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_BUTTON_EVENT_B_MESSAGE0 = '按键B被按下时';
Blockly.Msg.MPYTHON_AMIGO_BUTTON_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_BUTTON_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_rgb_display_MESSAGE0 = 'rgb%1号灯显示 R:%2 G:%3 B:%4'
Blockly.Msg.MPYTHON_AMIGO_rgb_display_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_rgb_display_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_rgb_display_clear_MESSAGE0 = '关闭所有rgb灯'
Blockly.Msg.MPYTHON_AMIGO_rgb_display_clear_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_rgb_display_clear_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_accelerometer_get_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_accelerometer_get_MESSAGE0 = '%1 轴加速度';
Blockly.Msg.MPYTHON_AMIGO_accelerometer_get_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_INITIALIZE_MESSAGE0 = 'AI摄像头初始化';
Blockly.Msg.MPYTHON_AMIGO_INITIALIZE_TOOLTIP = 'AI摄像头初始化 掌控GO';
Blockly.Msg.MPYTHON_AMIGO_INITIALIZE_HELPURL = '';

//AI摄像头 sensor通用
Blockly.Msg.MPYTHON_AMIGO_SENSOR_BASIC_SETTING_MESSAGE0 = '配置摄像头%6 摄像头帧大小%1 %7摄像头帧格式%2 %8 摄像头水平镜像%3 %10 摄像头垂直翻转%4 %9摄像头亮度%5';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_BASIC_SETTING_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_BASIC_SETTING_TOOLTIP = '摄像头亮度，范围为[-2,+2]';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_INITIALIZE_MESSAGE0 = '摄像头 %1 初始化';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_INITIALIZE_TOOLTIP = '拍摄图像,返回Image对象。';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_INITIALIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_PIXFORMAT_MESSAGE0 = '摄像头 设置帧 尺寸%1';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_PIXFORMAT_TOOLTIP = '摄像头 设置帧大小\n' + 'VGA = 11,尺寸640x480\n' + 'QVGA = 10,尺寸320x240\n' + 'QQVGA = 9,尺寸160x120\n' + 'QQQVGA = 8,尺寸80x60\n' + 'QQQQVGA = 7,尺寸40x30\n如果图像大于LCD尺寸，lcd.display()显示会自己适配\n所有ai摄像头，人工智能交互实验箱，1956这三款硬件推荐使用QVGA';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_PIXFORMAT_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_FRAMESIZE_MESSAGE0 = '摄像头 设置帧 格式 %1';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_FRAMESIZE_TOOLTIP = 'RGB565为彩色，GRAYSCALE为黑白';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_FRAMESIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_SNAPSHOT_MESSAGE0 = '摄像头 拍摄图像';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SNAPSHOT_TOOLTIP = '拍摄图像,返回Image对象。';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SNAPSHOT_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_HMIRROR_MESSAGE0 = '摄像头 %1 模式 %2';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_HMIRROR_TOOLTIP = '打开（True）或关闭（False）水平垂直翻转模式。默认关闭。';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_HMIRROR_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_ENABLE_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_ENABLE_TOOLTIP = '捕获图像控制\n启动或关闭捕获图像功能(默认经过复位，设置帧大小，设置像素格式后会自动启动摄像头，不调用run(1)也会开始采集图像)';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_ENABLE_HELPURL = '';

// Blockly.Msg.MPYTHON_AMIGO_SENSOR_AUTO_WHITEBAL_MESSAGE0 = '摄像头 白平衡%1';
// Blockly.Msg.MPYTHON_AMIGO_SENSOR_AUTO_WHITEBAL_TOOLTIP = '设置摄像自动白平衡模式,默认打开。True为打开, False为关闭自动白平衡。若您想追踪颜色，则需关闭白平衡。';
// Blockly.Msg.MPYTHON_AMIGO_SENSOR_AUTO_WHITEBAL_HELPURL = '';

// Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_WINDOWING_MESSAGE0 = '摄像头 设置窗口 宽%1 高%2';
// Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_WINDOWING_TOOLTIP = '摄像头窗口设置有限制，必须为8的倍';
// Blockly.Msg.MPYTHON_AICAMERA_SENSOR_SET_WINDOWING_HELPURL = '';


//LCD通用
Blockly.Msg.MPYTHON_AMIGO_LCD_SHOW_SIZE_MESSAGE0 = 'LCD 显示%1 x%2 y%3';
Blockly.Msg.MPYTHON_AMIGO_LCD_SHOW_SIZE_TOOLTIP = '显示图像的位置';
Blockly.Msg.MPYTHON_AMIGO_LCD_SHOW_SIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_LCD_DISPLAY_MESSAGE0 = 'LCD 显示图像 %1';
Blockly.Msg.MPYTHON_AMIGO_LCD_DISPLAY_TOOLTIP = '在液晶屏上显示图片';
Blockly.Msg.MPYTHON_AMIGO_LCD_DISPLAY_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_LCD_CLEAR_MESSAGE0 = 'LCD 清屏 颜色为r%1 g%2 b%3';
Blockly.Msg.MPYTHON_AMIGO_LCD_CLEAR_TOOLTIP = '将液晶屏清空为黑色';
Blockly.Msg.MPYTHON_AMIGO_LCD_CLEAR_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_LCD_DRAW_STRING_MESSAGE0 = 'LCD 绘制文本 x%1 y%2 显示%3 颜色为%4';
Blockly.Msg.MPYTHON_AMIGO_LCD_DRAW_STRING_TOOLTIP = 'LCD 显示文本，可显示英文，阿拉伯数字';
Blockly.Msg.MPYTHON_AMIGO_LCD_DRAW_STRING_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_LCD_rotation_MESSAGE0 = 'LCD 旋转 %1';
Blockly.Msg.MPYTHON_AMIGO_LCD_rotation_TOOLTIP = '取值范围 [0,3]， 从0到3依次顺时针旋转';
Blockly.Msg.MPYTHON_AMIGO_LCD_rotation_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_LCD_mirror_MESSAGE0 = 'LCD 镜面显示 %1';
Blockly.Msg.MPYTHON_AMIGO_LCD_mirror_TOOLTIP = '是否镜面显示， True 或者 False';
Blockly.Msg.MPYTHON_AMIGO_LCD_mirror_HELPURL = '';

// IMG通用
Blockly.Msg.MPYTHON_AMIGO_IMG_RESIZE_MESSAGE0 = '图像 %1重设大小 x%2 y%3';
Blockly.Msg.MPYTHON_AMIGO_IMG_RESIZE_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_RESIZE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_INVERT_MESSAGE0 = '图像%1 像素反转';
Blockly.Msg.MPYTHON_AMIGO_IMG_INVERT_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_INVERT_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_STRECH_CHAR_MESSAGE0 = '图像%1 暗角%2';
Blockly.Msg.MPYTHON_AMIGO_IMG_STRECH_CHAR_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_STRECH_CHAR_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_PIX_TO_AI_MESSAGE0 = '图像%1 像素转ai';
Blockly.Msg.MPYTHON_AMIGO_IMG_PIX_TO_AI_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_PIX_TO_AI_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_BRIGHTNESS_MESSAGE0 = '设置摄像头 亮度%1';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_BRIGHTNESS_TOOLTIP = '摄像头亮度，数值为int类型，范围为[-2,+2]';
Blockly.Msg.MPYTHON_AMIGO_SENSOR_SET_BRIGHTNESS_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_PIXEL_MESSAGE0 = '图像 绘制点 x%1 y%2 颜色为 r%3 g%4 b%5';
Blockly.Msg.MPYTHON_AMIGO_IMG_PIXEL_TOOLTIP = '设置图像像素点颜色';
Blockly.Msg.MPYTHON_AMIGO_IMG_PIXEL_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_HVLINE_MESSAGE0 = '图像 绘制线 %1 x%2 y%3 长度%4 颜色为 r%5 g%6 b%7';
Blockly.Msg.MPYTHON_AMIGO_IMG_HVLINE_TOOLTIP = '在图像中绘制水平，垂直线';
Blockly.Msg.MPYTHON_AMIGO_IMG_HVLINE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_LINE_MESSAGE0 = '图像 绘制线 x%1 y%2 宽%3 高%4 颜色为 r%5 g%6 b%7';
Blockly.Msg.MPYTHON_AMIGO_IMG_LINE_TOOLTIP = '在图像中绘制任意线';
Blockly.Msg.MPYTHON_AMIGO_IMG_LINE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_RECT_MESSAGE0 = '图像 绘制矩形 %8 x%1 y%2 宽%3 高%4 颜色为 r%5 g%6 b%7';
Blockly.Msg.MPYTHON_AMIGO_IMG_RECT_TOOLTIP = '在图像中绘制空心，实心矩形';
Blockly.Msg.MPYTHON_AMIGO_IMG_RECT_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_CLEAR_MESSAGE0 = '图像%1 像素点清除';
Blockly.Msg.MPYTHON_AMIGO_IMG_CLEAR_TOOLTIP = '将图像中的所有像素设置为零';
Blockly.Msg.MPYTHON_AMIGO_IMG_CLEAR_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_MESSAGE0 = '图像 显示生效';
Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_TOOLTIP = '将图像中的IMG变量显示';
Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_IMAGE_IMAGE_MESSAGE0 = '图像%1 画中画 %2 x%3 y%4 x缩放%5 y缩放%6';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_IMAGE_IMAGE_TOOLTIP = '在液晶屏上显示图片';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_IMAGE_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_IMAGE_MESSAGE0 = '图片';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_IMAGE_TOOLTIP = '在图像中绘制任意线';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DISPCHAR_MESSAGE0 = '图像%1 颜色为%5 绘制文本%2 x%3 y%4 字体大小%6 显示%7';
Blockly.Msg.MPYTHON_AMIGO_IMG_DISPCHAR_TOOLTIP = '在图像中的(x, y)位置开始绘制文本。字体采用 Google Noto Sans CJK 开源无衬线字体字体。字体高度16像素点,支持英文';
Blockly.Msg.MPYTHON_AMIGO_IMG_DISPCHAR_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DISPCHAR_FONT_MESSAGE0 = '图像%1 颜色为%5 绘制文本%2 x%3 y%4 显示中文(日文、韩文)%6';
Blockly.Msg.MPYTHON_AMIGO_IMG_DISPCHAR_FONT_TOOLTIP = '在图像中的(x, y)位置开始绘制文本。字体采用 Google Noto Sans CJK 开源无衬线字体字体。字体高度16像素点,支持英文,简体中文繁体中文，日文和韩文语言。';
Blockly.Msg.MPYTHON_AMIGO_IMG_DISPCHAR_FONT_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_LINE_MESSAGE0 = '图像%1 颜色为%7 绘制线%2 x1%3 y1%4 x2%5 y2%6';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_LINE_TOOLTIP = '在图像中绘制任意线';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_LINE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_RECT_MESSAGE0 = '图像%1 颜色为%6 绘制矩形 %7 %8 x%2 y%3 宽%4 高%5';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_RECT_TOOLTIP = '在图像中绘制空心，实心矩形';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_RECT_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_CIRCLE_MESSAGE0 = '图像%1 颜色为%5 绘制圆形 %6 %7 x%2 y%3 半径%4';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_CIRCLE_TOOLTIP = '在图像中绘制空心，实心圆形';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_CIRCLE_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_TEN_STRING_MESSAGE0 = '图像%1 颜色为%4 绘制十字线%6  x%2 y%3 尺寸%5';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_TEN_STRING_TOOLTIP = '在图像上绘制十字线';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_TEN_STRING_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_ARROWS_MESSAGE0 = '图像%1 颜色为%6 绘制箭头%7  x1%2 y1%3 x2%4 y2%5';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_ARROWS_TOOLTIP = '在图像上绘制一个箭头';
Blockly.Msg.MPYTHON_AMIGO_IMG_DRAW_ARROWS_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_ECTYPE_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_ECTYPE_MESSAGE0 = '图像%1 保存入SD卡 保存路径%2';
Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_ECTYPE_TOOLTIP = '图像副本保存入SD卡';

Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_IMAGE_PIRCTURE_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_IMAGE_PIRCTURE_MESSAGE0 = '图像 %1 加载路径%2';
Blockly.Msg.MPYTHON_AMIGO_IMG_SHOW_IMAGE_PIRCTURE_TOOLTIP = '显示图像';

Blockly.Msg.MPYTHON_AMIGO_IMG_RGB_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_RGB_MESSAGE0 = '颜色为r%1 g%2 b%3';
Blockly.Msg.MPYTHON_AMIGO_IMG_RGB_TOOLTIP =

Blockly.Msg.MPYTHON_AMIGO_IMG_LIST_COLOR_MESSAGE0 = '颜色为 %1';
Blockly.Msg.MPYTHON_AMIGO_IMG_LIST_COLOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_COLOR_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_COLOR_MESSAGE0 = '图像%1 找色块%4 LAB颜色阈值(列表)%2 面积阈值%3';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_COLOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_LAB_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_LAB_MESSAGE0 = 'LAB颜色阈值%1';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_LAB_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_MESSAGE0 = '返回 图像 发现色块 (列表)';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_TOOLTIP = '返回所有内容';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_MAX_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_MAX_MESSAGE0 = '获取 发现最大色块对象的%1';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_MAX_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_ONLY_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_ONLY_MESSAGE0 = '获取 发现色块对象%1 的%2';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_BLOBS_ONLY_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_IMG_GET_PIXEL_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_IMG_GET_PIXEL_MESSAGE0 = '获取图像 %1 在 x : %2 y : %3 位置的点的颜色像素值';
Blockly.Msg.MPYTHON_AMIGO_IMG_GET_PIXEL_TOOLTIP = '灰度图返回(x, y)位置的灰度像素值\nRGB565返回(x, y)位置的RGB888像素元组(r, g, b)\nBayer图像: 返回(x, y)位置的像素值';

Blockly.Msg.MPYTHON_AMIGO_IMG_FIND_APRILTAGS_MESSAGE0 = '图像%1 AprilTag标记跟踪';
Blockly.Msg.MPYTHON_AMIGO_IMG_FIND_APRILTAGS_HELPURL = 'http://cdn.makeymonkey.com/test/TAG36H11%20TAG.zip';
Blockly.Msg.MPYTHON_AMIGO_IMG_FIND_APRILTAGS_TOOLTIP =
    'AprilTag是一个视觉的基准系统，可以使用AprilTag，通过算法来获取标签相对于摄像机的位置，距离以及坐标。\n' +
    'AprilTag有非常多的类型的标签，默认只用一种类型的标签(二维码TAG36H11)\n' +
    '通过右键点击帮助下载标签(二维码TAG36H11)';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_APRILTAGS_MESSAGE0 = '返回 图像 AprilTag标记跟踪 (列表)';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_APRILTAGS_HELPURL = 'https://docs.singtown.com/micropython/zh/latest/openmvcam/library/omv.image.html#apriltag-apriltag';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_APRILTAGS_TOOLTIP = '返回所有参数，参数详细说明，通过右键点击帮助查看文档';

Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_APRILTAGS_ONLY_MESSAGE0 = '获取 AprilTag标记跟踪对象%1 的%2';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_APRILTAGS_ONLY_HELPURL = 'https://docs.singtown.com/micropython/zh/latest/openmvcam/library/omv.image.html#apriltag-apriltag';
Blockly.Msg.MPYTHON_AMIGO_IMG_TRACE_APRILTAGS_ONLY_TOOLTIP = '选择返回对应参数，参数详细说明，通过右键点击帮助查看文档';



//AI摄像头 kpu人脸识别，20分类新，手写数字通用
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_ALL_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_ALL_MESSAGE0 = 'kpu 配置为%1模式';
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_ALL_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_FACE_TRACKING_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_FACE_TRACKING_MESSAGE0 = 'kpu 加载内置模型 %1';
Blockly.Msg.MPYTHON_AMIGO_KPU_FACE_TRACKING_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_LOAD_CUSTOM_MESSAGE0 = 'kpu 加载路径模型 %1';
Blockly.Msg.MPYTHON_AMIGO_KPU_LOAD_CUSTOM_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_LOAD_CUSTOM_HELPURL = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_YOLO2_MESSAGE0 = 'kpu 初始化YOLO网络%5 概率阈值%1 门限%2 锚点数%3 锚点%4';
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_YOLO2_TOOLTIP =
    '概率阈值：值的区间0~1，数值默认0.5，大于所选数值的概率则可以检测，例如：使用人脸追踪，概率阈值大于0.5才会检测\n' +
    '门限：值的区间0~1，数值默认0.3，删除所有检测概率大于给定NMS阈值的预测边界框，仅保留最佳边界框。也就是删除所有检测概率大于0.3的预测边界框。\n' +
    '锚点数：默认5个锚点数，因为anchor元组内的每两个参数为一个锚点数。\n' +
    '锚点：描点参数与模型参数一致。预测框的初始宽高，第一个是w，第二个是h，总数量是num*2，默认的人脸追踪有5个预测框。\n' +
    '例如：摄像头在同一位置拍摄的图中有一个人和一辆汽车重叠。因此，人在前面，部分汽车被遮盖了，汽车和行人的中心都落在同一网格中。\n' +
    '由于每个网格单元的输出向量只能具有一个类别，因此将被迫选择汽车或人。但是，通过定义锚框，我们可以创建更长的网格单元矢量，并将多个类与每个网格单元相关联。';

Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_YOLO2_BASE_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_YOLO2_BASE_MESSAGE0 = 'kpu 初始化AI %1';
Blockly.Msg.MPYTHON_AMIGO_KPU_INITIALIZE_YOLO2_BASE_TOOLTIP ='';

Blockly.Msg.MPYTHON_AMIGO_KPU_FACE_DETECT_ANCHOR_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_FACE_DETECT_ANCHOR_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_AMIGO_KPU_FACE_DETECT_ANCHOR_TOOLTIP = '';



Blockly.Msg.MPYTHON_AMIGO_KPU_RUN_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_RUN_YOLO2_MESSAGE0 = 'kpu 识别 %1';
Blockly.Msg.MPYTHON_AMIGO_KPU_RUN_YOLO2_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_RETURN_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_RETURN_YOLO2_MESSAGE0 = '返回识别 对象(列表)';
Blockly.Msg.MPYTHON_AMIGO_KPU_RETURN_YOLO2_TOOLTIP =
    '"对象"的数量无论是第几个，"对象数量"都可以显示所侦测到的物体的所有数量\n' +
    '仅20类识别可以使用"类别"，其余属性人脸追踪和20类识别都可以使用。\n' +
    '20种类别为：\n' +
    '0~4飞机,自行车,鸟,船,瓶子,\n' +
    '5~9公交车,汽车,猫,椅子,奶牛,\n' +
    '10~14餐桌,狗,屋子,摩托车,人,\n' +
    '15~19盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_AMIGO_KPU_ACQUIRE_YOLO2_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_ACQUIRE_YOLO2_MESSAGE0 = '获取识别 对象第%1 个的%2';
Blockly.Msg.MPYTHON_AMIGO_KPU_ACQUIRE_YOLO2_TOOLTIP =
    '"对象"的数量无论是第几个，"对象数量"都可以显示所侦测到的物体的所有数量\n' +
    '仅20类识别可以使用"类别"，其余属性人脸追踪和20类识别都可以使用。\n' +
    '20种类别为：\n' +
    '0~4飞机,自行车,鸟,船,瓶子,\n' +
    '5~9公交车,汽车,猫,椅子,奶牛,\n' +
    '10~14餐桌,狗,屋子,摩托车,人,\n' +
    '15~19盆栽,羊,沙发,火车,电视';

Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_MESSAGE0 = 'kpu 分类器运算 %1';
Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_PROBABILITY_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_PROBABILITY_MESSAGE0 = '返回分类器的概率(元组)';
Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_PROBABILITY_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_TYPE_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_TYPE_MESSAGE0 = '获取分类器 最大概率的类别';
Blockly.Msg.MPYTHON_AMIGO_KPU_FORWARD_TYPE_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_KPU_DEINIT_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_KPU_DEINIT_MESSAGE0 = 'kpu 释放';
Blockly.Msg.MPYTHON_AMIGO_KPU_DEINIT_TOOLTIP = '';

//人脸识别
Blockly.Msg.MPYTHON_AMIGO_face_recognization_init_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_init_MESSAGE0 = '人脸识别初始化%5 人脸分类数量%1 置信度阈值%2 名字列表%3 摄像头%4';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_init_TOOLTIP = '';

Blockly.Msg.MPYTHON_AMIGO_face_recognization_add_face_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_add_face_TOOLTIP = '按A键添加人脸数据';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_add_face_MESSAGE0 = '按A键添加人脸数据';

Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_MESSAGE0 = '运行识别';

Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_result_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_result_MESSAGE0 = '识别结果%1';

Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_result_index = 'ID'
Blockly.Msg.MPYTHON_AMIGO_face_recognization_recognize_result_max_score = '置信度'

//自学习
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_init_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_init_MESSAGE0 = '自学习分类初始化 %5 分类数量%1 样本数量%2 分类名列表%3 摄像头%4';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_add_class_img_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_add_class_img_TOOLTIP = '每类只需拍摄一张';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_add_class_img_MESSAGE0 = '按A键添加分类图片';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_add_sample_img_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_add_sample_img_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_add_sample_img_MESSAGE0 = '按B键添加训练集图片';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_train_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_train_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_train_MESSAGE0 = '训练';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_save_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_save_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_save_MESSAGE0 = '保存已训练模型到%1';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_load_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_load_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_load_MESSAGE0 = '载入自分类模型从%1';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_result_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_result_MESSAGE0 = '识别ID';

Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_names_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_names_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_self_learning_classifier_names_MESSAGE0 = '分类名列表';


//二维码
Blockly.Msg.MPYTHON_AMIGO_qrcode_init_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_qrcode_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_qrcode_init_MESSAGE0 = '二维码识别初始化，摄像头%1';

Blockly.Msg.MPYTHON_AMIGO_add_qrcode_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_add_qrcode_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_add_qrcode_MESSAGE0 = '按A键按顺序添加二维码数据，二维码数量%1';

Blockly.Msg.MPYTHON_AMIGO_qrcode_result_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_qrcode_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_qrcode_result_MESSAGE0 = '识别结果%1';

Blockly.Msg.MPYTHON_AMIGO_qrcode_id = 'ID';
Blockly.Msg.MPYTHON_AMIGO_qrcode_info = '二维码数据';

//颜色识别
Blockly.Msg.MPYTHON_AMIGO_color_init_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_color_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_color_init_MESSAGE0 = '颜色识别初始化，摄像头%1';

Blockly.Msg.MPYTHON_AMIGO_add_color_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_add_color_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_add_color_MESSAGE0 = '按A键按顺序添加颜色数据，数量%1';

Blockly.Msg.MPYTHON_AMIGO_color_result_HELPURL = '';
Blockly.Msg.MPYTHON_AMIGO_colorresult_TOOLTIP = '';
Blockly.Msg.MPYTHON_AMIGO_color_result_MESSAGE0 = '识别结果ID';

// end


//变量
Blockly.Msg.PYTHON_INPUT_HELPURL = '';
Blockly.Msg.PYTHON_INPUT_TOOLTIP = '';
Blockly.Msg.PYTHON_INPUT_MESSAGE0 = 'input控制台输入';

//python讯飞语音
Blockly.Msg.XUNFEI_SR_PYTHON_HELPURL = '';
Blockly.Msg.XUNFEI_SR_PYTHON_TOOLTIP = '使用讯飞的语音识别，识别最长的录音时间为60s';
Blockly.Msg.XUNFEI_SR_PYTHON_MESSAGE0 = '录音并进行语音识别%6 录音存放路径%1 APPID%2 APISecret%3 APIKey%4 录音时长%5';

Blockly.Msg.SAVE_WAVE_HELPURL = '';
Blockly.Msg.SAVE_WAVE_TOOLTIP = '';
Blockly.Msg.SAVE_WAVE_MESSAGE0 = '录音%3 录音存放路径%1  录音时长%2';

Blockly.Msg.SR_RET_LIST_HELPURL = '';
Blockly.Msg.SR_RET_LIST_TOOLTIP = '';
Blockly.Msg.SR_RET_LIST_MESSAGE0 = '讯飞语音识别结果(列表)';

Blockly.Msg.SR_RET_STR_HELPURL = '';
Blockly.Msg.SR_RET_STR_TOOLTIP = '';
Blockly.Msg.SR_RET_STR_MESSAGE0 = '讯飞语音识别结果(字符串)';

Blockly.Msg.XUNFEI_TTS_PYTHON_HELPURL = '';
Blockly.Msg.XUNFEI_TTS_PYTHON_TOOLTIP = '使用讯飞的语音合成，返回MP3格式的音频文件';
Blockly.Msg.XUNFEI_TTS_PYTHON_MESSAGE0 = '进行语音合成%6 APPID%1 APISecret%2 APIKey%3 合成文本内容%4 合成音频存放路径%5';

Blockly.Msg.TTS_RET_HELPURL = '';
Blockly.Msg.TTS_RET_TOOLTIP = '';
Blockly.Msg.TTS_RET_MESSAGE0 = '讯飞语音合成返回结果';

Blockly.Msg.AUDIO_PYTHON_HELPURL = '';
Blockly.Msg.AUDIO_PYTHON_TOOLTIP = '';
Blockly.Msg.AUDIO_PYTHON_MESSAGE0 = '播放音频 %1';

//KNN
Blockly.Msg.KNN_INIT_HELPURL = '';
Blockly.Msg.KNN_INIT_TOOLTIP = '初始化KNN,无论是训练还是载入模型都需要先初始化';
Blockly.Msg.KNN_INIT_MESSAGE0 = 'KNN初始化%3分类的标签列表%1 使用的摄像头序号%2';

Blockly.Msg.KNN_SHOOT_HELPURL = '';
Blockly.Msg.KNN_SHOOT_TOOLTIP = '';
Blockly.Msg.KNN_SHOOT_MESSAGE0 = '拍摄数据集%4数据集的分类标签%1 拍摄数目%2 拍摄间隔（秒）%3';

Blockly.Msg.KNN_FIT_HELPURL = '';
Blockly.Msg.KNN_FIT_TOOLTIP = '';
Blockly.Msg.KNN_FIT_MESSAGE0 = '训练模型';

Blockly.Msg.KNN_RET_HELPURL = '';
Blockly.Msg.KNN_RET_TOOLTIP = '';
Blockly.Msg.KNN_RET_MESSAGE0 = 'KNN识别结果';

Blockly.Msg.KNN_START_HELPURL = '';
Blockly.Msg.KNN_START_TOOLTIP = '';
Blockly.Msg.KNN_START_MESSAGE0 = 'KNN循环识别%2 当按下%1时退出识别';

Blockly.Msg.KNN_LOAD_MODEL_HELPURL = '';
Blockly.Msg.KNN_LOAD_MODEL_TOOLTIP = '';
Blockly.Msg.KNN_LOAD_MODEL_MESSAGE0 = '加载KNN模型%1';

Blockly.Msg.KNN_SAVE_MODEL_HELPURL = '';
Blockly.Msg.KNN_SAVE_MODEL_TOOLTIP = '';
Blockly.Msg.KNN_SAVE_MODEL_MESSAGE0 = '保存KNN模型%1';

Blockly.Msg.KNN_PATH = '路径';

Blockly.Msg.KNN_LOAD_IMG_DATA_HELPURL = '';
Blockly.Msg.KNN_LOAD_IMG_DATA_TOOLTIP = '';
Blockly.Msg.KNN_LOAD_IMG_DATA_MESSAGE0 = '分类为 %1';
Blockly.Msg.KNN_LOAD_IMG_DATA_MESSAGE1 = '导入本地文件图片 >>';

//SVC
Blockly.Msg.SVC_INIT_HELPURL = '';
Blockly.Msg.SVC_INIT_TOOLTIP = '初始化SVC,无论是训练还是载入模型都需要先初始化';
Blockly.Msg.SVC_INIT_MESSAGE0 = 'SVC初始化';

Blockly.Msg.SVC_READ_FROM_XLSX_HELPURL = '';
Blockly.Msg.SVC_READ_FROM_XLSX_TOOLTIP = '读取XLSX文件并处理数据集';
Blockly.Msg.SVC_READ_FROM_XLSX_MESSAGE0 = '加载XLSX数据集%1';

Blockly.Msg.SVC_READ_DATA_HELPURL = '';
Blockly.Msg.SVC_READ_DATA_TOOLTIP = '手动输入数据集,每一个列表都是一条数据\n列表的内容格式为：[数据1,数据2,数据3......,标签值]\n例如[1,1,2]中最后一位‘2’代表分类的标签值，除了列表中的最后一位，其他的都是这个标签分类的特征属性';
Blockly.Msg.SVC_READ_DATA_MESSAGE0 = '手动输入数据集%2 数据集%1';

Blockly.Msg.SVC_FIT_HELPURL = '';
Blockly.Msg.SVC_FIT_TOOLTIP = '在数据集上训练SVC模型';
Blockly.Msg.SVC_FIT_MESSAGE0 = '训练SVC模型';

Blockly.Msg.SVC_PREDICT_HELPURL = '';
Blockly.Msg.SVC_PREDICT_TOOLTIP = '预测输入的数据';
Blockly.Msg.SVC_PREDICT_MESSAGE0 = '预测数据%1并返回结果';

Blockly.Msg.SVC_LOAD_MODEL_HELPURL = '';
Blockly.Msg.SVC_LOAD_MODEL_TOOLTIP = '加载模型';
Blockly.Msg.SVC_LOAD_MODEL_MESSAGE0 = '加载模型路径%1';

Blockly.Msg.SVC_SAVE_MODEL_HELPURL = '';
Blockly.Msg.SVC_SAVE_MODEL_TOOLTIP = '保存模型';
Blockly.Msg.SVC_SAVE_MODEL_MESSAGE0 = '保存模型路径%1';

//xgo机器狗
Blockly.Msg.MPYTHON_dog_uart_init_MESSAGE0 = DEVICE + '掌控GO初始化 TX:%1 RX:%2 UART:%3 '
Blockly.Msg.MPYTHON_dog_uart_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_init_HELPURL = '';

Blockly.Msg.MPYTHON_dog_show_expression_MESSAGE0 = '显示表情%1';
Blockly.Msg.MPYTHON_dog_show_expression_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_show_expression_HELPURL = '';

Blockly.Msg.MPYTHON_dog_face1 = '吐舌';
Blockly.Msg.MPYTHON_dog_face3 = '开心';
Blockly.Msg.MPYTHON_dog_face2 = '正常';
Blockly.Msg.MPYTHON_dog_face4 = '难过';

Blockly.Msg.MPYTHON_dog_uart_calibration_1 = '开始';
Blockly.Msg.MPYTHON_dog_uart_calibration_0 = '完成';

Blockly.Msg.MPYTHON_dog_uart_calibration_MESSAGE0 = '标定状态%1';
Blockly.Msg.MPYTHON_dog_uart_calibration_TOOLTIP = '用于软件标定，请谨慎使用！！！';
Blockly.Msg.MPYTHON_dog_uart_calibration_HELPURL = '';

Blockly.Msg.MPYTHON_AI_Camera_dog_init_MESSAGE0 = 'AI摄像头掌控GO初始化'
Blockly.Msg.MPYTHON_AI_Camera_dog_TOOLTIP = '';
Blockly.Msg.MPYTHON_AI_Camera_dog_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_action_MESSAGE0 = '机器狗执行%1指令'
Blockly.Msg.MPYTHON_dog_uart_action_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_action_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_action_reset = '恢复初始状态';
Blockly.Msg.MPYTHON_dog_uart_action_pall = '趴下';
Blockly.Msg.MPYTHON_dog_uart_action_stand = '站起';
Blockly.Msg.MPYTHON_dog_uart_action_belly = '匍匐前进';
Blockly.Msg.MPYTHON_dog_uart_action_whirl = '转圈';
Blockly.Msg.MPYTHON_dog_uart_action_marking_time = '原地踏步';
Blockly.Msg.MPYTHON_dog_uart_action_squat = '蹲起';
Blockly.Msg.MPYTHON_dog_uart_action_Roll = '转动Roll';
Blockly.Msg.MPYTHON_dog_uart_action_Pitch = '转动Pitch';
Blockly.Msg.MPYTHON_dog_uart_action_Yaw = '转动Yaw';
Blockly.Msg.MPYTHON_dog_uart_action_Three_axis_rotation = '三轴转动';
Blockly.Msg.MPYTHON_dog_uart_action_pee = '撒尿';
Blockly.Msg.MPYTHON_dog_uart_action_sit_down = '坐下';
Blockly.Msg.MPYTHON_dog_uart_action_wave_hand = '招手';
Blockly.Msg.MPYTHON_dog_uart_action_stretch_oneself = '伸懒腰';
Blockly.Msg.MPYTHON_dog_uart_action_wave = '波浪';
Blockly.Msg.MPYTHON_dog_uart_action_stretch_wiggly = '左右摇摆的';
Blockly.Msg.MPYTHON_dog_uart_action_begging_call = '求食';
Blockly.Msg.MPYTHON_dog_uart_action_foraging = '觅食';
Blockly.Msg.MPYTHON_dog_uart_action_handshake = '握手';
Blockly.Msg.MPYTHON_dog_uart_action_NY= '拜年';

Blockly.Msg.MPYTHON_dog_uart_action_fast= '快';
Blockly.Msg.MPYTHON_dog_uart_action_normal= '正常';
Blockly.Msg.MPYTHON_dog_uart_action_slow= '慢';

Blockly.Msg.MPYTHON_dog_uart_set_Servo_MESSAGE0 = '设置舵机速度为%1'
Blockly.Msg.MPYTHON_dog_uart_set_Servo_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_set_Servo_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_set_step_MESSAGE0 = '设置迈步频率为%1'
Blockly.Msg.MPYTHON_dog_uart_set_step_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_set_step_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_move_1= '前进(0~25mm)';
Blockly.Msg.MPYTHON_dog_uart_move_2= '后退(-25mm~0mm)';
Blockly.Msg.MPYTHON_dog_uart_move_3= '左移(0mm~18mm)';
Blockly.Msg.MPYTHON_dog_uart_move_4= '右移(-18mm~0mm)';

Blockly.Msg.MPYTHON_dog_uart_left= '左前';
Blockly.Msg.MPYTHON_dog_uart_left2= '左后';
Blockly.Msg.MPYTHON_dog_uart_right= '右前';
Blockly.Msg.MPYTHON_dog_uart_right2= '右后';

Blockly.Msg.MPYTHON_dog_uart_move_joint_MESSAGE0 = '设置%1腿部%2关节舵机转动至%3度';
Blockly.Msg.MPYTHON_dog_uart_move_joint_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_move_joint_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_up= '上（-31~31°）';
Blockly.Msg.MPYTHON_dog_uart_centre= '中（-66~93°）';
Blockly.Msg.MPYTHON_dog_uart_down= '下（-65~73°）';

Blockly.Msg.MPYTHON_dog_uart_turn_1= '左转(0°/s~150°/s)';
Blockly.Msg.MPYTHON_dog_uart_turn_2= '右转(-150°/s~0°/s)';

Blockly.Msg.MPYTHON_dog_uart_move_joint1_MESSAGE0 = '设置%1腿足尖%2方向%3度';
Blockly.Msg.MPYTHON_dog_uart_move_joint1_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_move_joint1_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_move_joint2_MESSAGE0 = '设置%1腿足尖 %5 X (-35mm~35mm) 方向的位置为%2 Y (-18mm~18mm) 方向的位置为%3 Z (75mm~115mm) 方向的位置为%4';
Blockly.Msg.MPYTHON_dog_uart_move_joint2_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_move_joint2_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_move_MESSAGE0 = '设置机器狗执行%1方向平移运动，步长为%2毫米';
Blockly.Msg.MPYTHON_dog_uart_move_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_move_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_move_s_MESSAGE0 = '设置机器狗执行%1方向平移运动，步长为%2毫米 持续%3秒';
Blockly.Msg.MPYTHON_dog_uart_move_s_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_move_s_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_turn_MESSAGE0 = '设置机器狗执行%1方向旋转运动，转动速度为%2度/秒';
Blockly.Msg.MPYTHON_dog_uart_turn_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_turn_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_turn_s_MESSAGE0 = '设置机器狗执行%1方向旋转运动，转动速度为%2度/秒 持续%3秒';
Blockly.Msg.MPYTHON_dog_uart_turn_s_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_turn_s_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_mark_time_MESSAGE0 = '设置机器狗以%1毫米(10mm~35mm)的抬腿高度以固定频率执行原地踏步 持续%2秒(只适用于mini)';
Blockly.Msg.MPYTHON_dog_uart_mark_time_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_mark_time_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_mark_time_1_MESSAGE0 = '设置机器狗以%1毫米(10mm~35mm)的抬腿高度以固定频率执行原地踏步(只适用于mini)';
Blockly.Msg.MPYTHON_dog_uart_mark_time_1_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_mark_time_1_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_translation_x= 'X (-35mm~35mm)';
Blockly.Msg.MPYTHON_dog_uart_translation_y= 'Y (-18mm~18mm)';
Blockly.Msg.MPYTHON_dog_uart_translation_z= 'Z (75mm~115mm)';

Blockly.Msg.MPYTHON_dog_uart_rotate_x= 'X (-15~15°)';
Blockly.Msg.MPYTHON_dog_uart_rotate_y= 'Y (-20~20°)';
Blockly.Msg.MPYTHON_dog_uart_rotate_z= 'Z (-11~11°)';

Blockly.Msg.MPYTHON_dog_x= 'X';
Blockly.Msg.MPYTHON_dog_y= 'Y';
Blockly.Msg.MPYTHON_dog_z= 'Z';

Blockly.Msg.MPYTHON_dog_uart_translation_MESSAGE0 = '设置机器狗以%1方向平移%2毫米';
Blockly.Msg.MPYTHON_dog_uart_translation_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_translation_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_translation_ing_MESSAGE0 = '设置机器狗以周期%1秒(1.5s~8s) 向%2方向往复平移';
Blockly.Msg.MPYTHON_dog_uart_translation_ing_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_translation_ing_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_translation_ing_stop_MESSAGE0 = '停止机器狗周期性向%1方向往复平移';
Blockly.Msg.MPYTHON_dog_uart_translation_ing_stop_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_translation_ing_stop_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_rotate_MESSAGE0 = '设置机器狗绕%1旋转%2度';
Blockly.Msg.MPYTHON_dog_uart_rotate_TOOLTIP = '机身姿态调整';
Blockly.Msg.MPYTHON_dog_uart_rotate_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_rotate_ing_MESSAGE0 = '设置机器狗以周期%1秒(1.5s~8s) 绕%2轴往复转动';
Blockly.Msg.MPYTHON_dog_uart_rotate_ing_TOOLTIP = '机身姿态调整';
Blockly.Msg.MPYTHON_dog_uart_rotate_ing_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_rotate_ing_stop_MESSAGE0 = '停止机器狗周期性绕%1轴往复转动';
Blockly.Msg.MPYTHON_dog_uart_rotate_ing_stop_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_rotate_ing_stop_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_imu_MESSAGE0 = '%1陀螺仪';
Blockly.Msg.MPYTHON_dog_uart_imu_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_imu_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_perform_MESSAGE0 = '%1机器狗表演模式';
Blockly.Msg.MPYTHON_dog_uart_perform_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_perform_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_get_battery_MESSAGE0 = '获取机器狗当前电量';
Blockly.Msg.MPYTHON_dog_uart_get_battery_TOOLTIP = '读取当前电池电量， 读取成功则返回1-100的整数，代表电池剩余电量百分比， 读取失败则返回0。';
Blockly.Msg.MPYTHON_dog_uart_get_battery_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_get_rotate_angle_MESSAGE0 = '获取陀螺仪%1轴的角度';
Blockly.Msg.MPYTHON_dog_uart_get_rotate_angle_TOOLTIP = '';
Blockly.Msg.MPYTHON_dog_uart_get_rotate_angle_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_arm_mode_MESSAGE0 = '%1 机械臂稳定模式';
Blockly.Msg.MPYTHON_dog_uart_arm_mode_TOOLTIP = '开启之后机械臂末端会不随着身体的平移而平移（平移指四脚站定躯干运动，而非前后左右迈步平移）。';
Blockly.Msg.MPYTHON_dog_uart_arm_mode_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_arm_MESSAGE0 = '设置机械臂末端位置 x轴[-80, 155]:%1  z轴[-95, 155]:%2';
Blockly.Msg.MPYTHON_dog_uart_arm_TOOLTIP = '此处的x和z是相对于机械臂的基座的坐标，单位为毫米。设定超过机械臂工作空间的值时，机械臂会保持最后一个有效值对应的姿态，比如(155,0)对应的姿态是向前伸到最大，(0,155)对应向上伸到最大，(155,155)是斜向上最大，但是机械臂达不到这个位置，就会保持上一次发送的有效位置。';
Blockly.Msg.MPYTHON_dog_uart_arm_HELPURL = '';

Blockly.Msg.MPYTHON_dog_uart_claw_MESSAGE0 = '设置机械臂夹爪开合[0,255]:%1';
Blockly.Msg.MPYTHON_dog_uart_claw_TOOLTIP = '[0,255], 0对应完全张开，255对应完全闭合。';
Blockly.Msg.MPYTHON_dog_uart_claw_HELPURL = '';


//xgo机器狗 end


// 掌控板实验箱 start
// 超声波
// 轮子
Blockly.Msg.MPYTHON_Box_BLUEBIT_MOTOR_ON_I2C_MESSAGE0 = '%1 轮子 %2 速度 %3';
Blockly.Msg.MPYTHON_Box_BLUEBIT_MOTOR_OFF_I2C_MESSAGE0 = '停止 %1 轮';
Blockly.Msg.MPYTHON_Box_BLUEBIT_GET_MOTORPEED_MESSAGE0 = '获取 %1 轮速度';
Blockly.Msg.MPYTHON_Box_BLUEBIT_MOTOR_ON_CLOCKWISE = '前进';
Blockly.Msg.MPYTHON_Box_BLUEBIT_MOTOR_ON_ANTICLOCKWISE = '后退';
// 舵机
Blockly.Msg.MPYTHON_Box_SERVO_ANGLE0_MESSAGE0 = '设置舵机 引脚P13 角度为 %1';
Blockly.Msg.MPYTHON_Box_SERVO_ANGLE_MESSAGE0 = '设置舵机 引脚P13 角度为 %1 脉宽从 %2 脉宽到 %3 最大角度 %4';
// 人体感应
Blockly.Msg.MPYTHON_Box_BLUEBIT_READ_DIGITAL_PIR_MESSAGE0 = '人体红外传感器 引脚P14 被触发 ';
// 旋钮电位器
Blockly.Msg.MPYTHON_Box_BLUEBIT_READ_ANALOG_RotateDimmer_MESSAGE0 = '旋钮电位器 引脚P2 模拟值 ';
// 灯环
Blockly.Msg.MPYTHON_Box_neopixel_init_MESSAGE0 = '灯环初始化 名称%1 引脚P8 数量%2';
Blockly.Msg.MPYTHON_Box_neopixel_single_gui_MESSAGE0 = '灯环 %1 %2号 颜色为 %3';
Blockly.Msg.MPYTHON_Box_neopixel_batch_gui_MESSAGE0 = '灯环 %1 设置%2至%3号灯 颜色为 %4';
Blockly.Msg.MPYTHON_Box_neopixel_single_MESSAGE0 = '灯环%1 %2号 红%3 绿%4 蓝%5';
Blockly.Msg.MPYTHON_Box_neopixel_batch_MESSAGE0 = '灯环 %1 设置%2至%3号灯 颜色为 红%4 绿%5 蓝%6';
Blockly.Msg.MPYTHON_Box_neopixel_all_gui_MESSAGE0 = '灯环%1 全亮 颜色%2';
Blockly.Msg.MPYTHON_Box_neopixel_all_MESSAGE0 = '灯环%1 全亮 红%2 绿%3 蓝%4';
Blockly.Msg.MPYTHON_Box_neopixel_show_MESSAGE0 = '灯环%1 设置生效';
Blockly.Msg.MPYTHON_Box_neopixel_off_MESSAGE0 = '灯环%1 关闭';
Blockly.Msg.MPYTHON_Box_NEOPIXEL_BRIGHTNESS_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/micropython/neopixel.html#NeoPixel.brightness';
Blockly.Msg.MPYTHON_Box_NEOPIXEL_BRIGHTNESS_TOOLTIP = '亮度调节, 范围 0 ~ 100';
Blockly.Msg.MPYTHON_Box_NEOPIXEL_BRIGHTNESS_MESSAGE0 = '灯环 %1 设置亮度为 %2';
Blockly.Msg.MPYTHON_Box_NEOPIXEL_RAINBOW_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.MPYTHON_Box_NEOPIXEL_RAINBOW_MESSAGE0 = '彩虹灯效 灯环%1 数量 %2 亮度 %3 偏移 %4';
// 四方向摇杆
Blockly.Msg.MPYTHON_Box_BLUEBIT_5BUTTON_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_Box_BLUEBIT_5BUTTON_TOOLTIP = '';
Blockly.Msg.MPYTHON_Box_BLUEBIT_5BUTTON_MESSAGE0 = '五向键 引脚P3 方向 %1 被触发';
Blockly.Msg.UP = '上';
Blockly.Msg.DOWN = '下';
Blockly.Msg.LEFT = '左';
Blockly.Msg.RIGHT = '右';
Blockly.Msg.MIDDLE = '中';
// 循迹
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_ON_OFF_ON = '打开';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_ON_OFF_OFF = '关闭';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_ON_OFF_MESSAGE0 = '%1 循迹传感器';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_ON_OFF_TOOLTIP = '';

Blockly.Msg.MPYTHON_BOX_READ_LINE_FOLLOW_MESSAGE0 = '循迹传感器进行检测';
Blockly.Msg.MPYTHON_BOX_READ_LINE_FOLLOW_HELPURL = '';
Blockly.Msg.MPYTHON_BOX_READ_LINE_FOLLOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_WHITE = '白';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_BLACK = '黑';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_MESSAGE0 = '%1 号循迹传感器检测结果为 %2';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_HELPURL = '';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_TOOLTIP = '';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_SET_THRESHOLD_TOOLTIP = '设置范围为0-4095';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_SET_THRESHOLD_MESSAGE0 = '设置%6 0号循迹传感器阈值为 %1 1号循迹传感器阈值为 %2 2号循迹传感器阈值为 %3 3号循迹传感器阈值为 %4 4号循迹传感器阈值为 %5';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_GET_THRESHOLD_TOOLTIP = '';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_GET_THRESHOLD_MESSAGE0 = '%1 号循迹传感器阈值';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_GET_VALUE_MESSAGE0 = '循迹传感器检测结果列表';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_GET_VALUE_TOOLTIP = '当前5个循迹传感器检测结果（0-白，1-黑）的列表';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_GET_RAW_VALUE_MESSAGE0 = '循迹传感器检测值列表';
Blockly.Msg.MPYTHON_BOX_LINE_FOLLOW_GET_RAW_VALUE_TOOLTIP = '当前五个循迹传感器检测值（0-4095）的列表';
Blockly.Msg.MPYTHONBOX_A_READ_DIGITAL_BUTTON_HELPURL = '';
Blockly.Msg.MPYTHONBOX_A_READ_DIGITAL_BUTTON_TOOLTIP = '返回魔盒按键A是否被触发，返回值：True\\False';
Blockly.Msg.MPYTHONBOX_A_READ_DIGITAL_BUTTON_MESSAGE0 = '魔盒按键A是否被触发';
Blockly.Msg.MPYTHONBOX_B_READ_DIGITAL_BUTTON_HELPURL = '';
Blockly.Msg.MPYTHONBOX_B_READ_DIGITAL_BUTTON_TOOLTIP = '返回魔盒按键B是否被触发，返回值：True\\False';
Blockly.Msg.MPYTHONBOX_B_READ_DIGITAL_BUTTON_MESSAGE0 = '魔盒按键B是否被触发';

//编码电机
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_TOOLTIP = '设置小车移动速度，可前进后退 速度：-100 -- 100, 速度>0 前进,速度<0 后退';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_MESSAGE0 = '设置编码电机速度 左:%1 右:%2';

// Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_Box_EncoderMotor_stop_TOOLTIP = '';
Blockly.Msg.MPYTHON_Box_EncoderMotor_stop_MESSAGE0 = '编码电机停止';

// Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_turn_angle_TOOLTIP = '设置编码电机转向  左转/右转  电机速度 0 -- 100 角度 0 -- 360';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_turn_angle_MESSAGE0 = '设置编码电机转向 转向:%1 速度:%2 角度:%3';

// Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_move_distance_TOOLTIP = '设置移动指定距离(速度:-100 -- 100  距离：0-6553 单位:cm), 速度>0 前进,速度<0 后退';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_move_distance_MESSAGE0 = '设置编码电机移动距离 速度:%1 距离:%2 cm';

// Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_set_correct_TOOLTIP = '设置小车移动指定距离可转向时修正系数，以修正精确度,修正系数： -100 -- 100';
Blockly.Msg.MPYTHON_Box_BLUEBIT_EncoderMotor_set_correct_MESSAGE0 = '设置编码电机转向/移动时修正系数 %1';


// 电量
Blockly.Msg.MPYTHON_BOX_GET_POWER_HELPURL = '';
Blockly.Msg.MPYTHON_BOX_GET_POWER_MESSAGE0 = '电量';
Blockly.Msg.MPYTHON_BOX_GET_POWER_TOOLTIP = '';

//掌控板实验箱 end

//乐动模块 start
//乐动模块
Blockly.Msg.MPYTHON_LEDONG_DRIVER = '驱动器';
Blockly.Msg.MPYTHON_DRIVER_SET_TRUE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_DRIVER_SET_TRUE_MESSAGE0 = '打开驱动器 引脚 %1';
Blockly.Msg.MPYTHON_DRIVER_SET_TRUE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRIVER_SET_FALSE_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/mpython.html#mpythonpin';
Blockly.Msg.MPYTHON_DRIVER_SET_FALSE_MESSAGE0 = '关闭驱动器 引脚 %1';
Blockly.Msg.MPYTHON_DRIVER_SET_FALSE_TOOLTIP = '';

Blockly.Msg.LEDONG_M1M2_ON_MESSAGE0 = '打开%1 输出功率%2';
Blockly.Msg.LEDONG_M1M2_ON_TIME_MESSAGE0 = '打开%1 输出功率%2 持续%3秒';
Blockly.Msg.LEDONG_M1M2_OFF_MESSAGE0 = '关闭%1输出';
Blockly.Msg.LEDONG_PARROT_GET_BATTERY_LEVEL_TOOLTIP = '返回电压，单位mV';
Blockly.Msg.LEDONG_PARROT_GET_BATTERY_LEVEL_MESSAGE0 = '电池电量(mV)';

Blockly.Msg.LEDONG_BAROMETRIC_GET_PRESSURE_HELPURL = '';
Blockly.Msg.LEDONG_BAROMETRIC_GET_PRESSURE_MESSAGE0 = '获取气压值';
Blockly.Msg.LEDONG_BAROMETRIC_GET_PRESSURE_TOOLTIP = '使用I2C引脚，获取气压，单位：Pa';

Blockly.Msg.LEDONG_BAROMETRIC_GET_TRMPERATURE_HELPURL = '';
Blockly.Msg.LEDONG_BAROMETRIC_GET_TRMPERATURE_MESSAGE0 = '获取温度值';
Blockly.Msg.LEDONG_BAROMETRIC_GET_TRMPERATURE_TOOLTIP = '使用I2C引脚，获取温度，单位：摄氏度℃';

Blockly.Msg.LEDONG_GESTURE_READGESTURE_HELPURL = '';
Blockly.Msg.LEDONG_GESTURE_READGESTURE_MESSAGE0 = '手势数据';
Blockly.Msg.LEDONG_GESTURE_READGESTURE_TOOLTIP = '使用I2C引脚，获取手势数据';

//RGB_LED_4
Blockly.Msg.LEDONG_RGB_4_LED_INIT_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_INIT_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_INIT_MESSAGE0 = 'RGB_LED四灯 初始化 名称%1 引脚%2';

Blockly.Msg.LEDONG_RGB_4_LED_RAINBOW_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_RAINBOW_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_RAINBOW_MESSAGE0 = '彩虹灯效 RGB_LED四灯%1 亮度 %2 偏移 %3';

Blockly.Msg.LEDONG_RGB_4_LED_BRIGHTNESS_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_BRIGHTNESS_TOOLTIP = '亮度调节, 范围 0 ~ 100';
Blockly.Msg.LEDONG_RGB_4_LED_BRIGHTNESS_MESSAGE0 = 'RGB_LED四灯 %1 设置亮度为 %2';

Blockly.Msg.LEDONG_RGB_4_LED_SINGLE_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_SINGLE_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_SINGLE_MESSAGE0 = 'RGB_LED四灯 %1 %2号 红%3 绿%4 蓝%5';

Blockly.Msg.LEDONG_RGB_4_LED_SINGLE_GUI_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_SINGLE_GUI_MESSAGE0 = 'RGB_LED四灯 %1 %2号 颜色为 %3';
Blockly.Msg.LEDONG_RGB_4_LED_SINGLE_GUI_TOOLTIP = '';

Blockly.Msg.LEDONG_RGB_4_LED_SHOW_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_SHOW_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_SHOW_MESSAGE0 = 'RGB_LED四灯 %1 设置生效';

Blockly.Msg.LEDONG_RGB_4_LED_OFF_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_OFF_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_OFF_MESSAGE0 = 'RGB_LED四灯 %1 关闭';

Blockly.Msg.LEDONG_RGB_4_LED_ALL_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_ALL_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_ALL_MESSAGE0 = 'RGB_LED四灯 %1 全亮 红%2 绿%3 蓝%4';

Blockly.Msg.LEDONG_RGB_4_LED_ALL_GUI_HELPURL = '';
Blockly.Msg.LEDONG_RGB_4_LED_ALL_GUI_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_4_LED_ALL_GUI_MESSAGE0 = 'RGB_LED四灯 %1 全亮 颜色%2';

//RGB_LED
Blockly.Msg.LEDONG_RGB_LED_INIT_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_INIT_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_INIT_MESSAGE0 = 'RGB_LED灯 初始化 名称%1 引脚%2';

Blockly.Msg.LEDONG_RGB_LED_RAINBOW_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_RAINBOW_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_RAINBOW_MESSAGE0 = '彩虹灯效 RGB_LED灯%1 亮度 %2 偏移 %3';

Blockly.Msg.LEDONG_RGB_LED_BRIGHTNESS_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_BRIGHTNESS_TOOLTIP = '亮度调节, 范围 0 ~ 100';
Blockly.Msg.LEDONG_RGB_LED_BRIGHTNESS_MESSAGE0 = 'RGB_LED灯 %1 设置亮度为 %2';

Blockly.Msg.LEDONG_RGB_LED_SINGLE_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_SINGLE_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_SINGLE_MESSAGE0 = 'RGB_LED灯 %1 %2号 红%3 绿%4 蓝%5';

Blockly.Msg.LEDONG_RGB_LED_SINGLE_GUI_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_SINGLE_GUI_MESSAGE0 = 'RGB_LED灯 %1 %2号 颜色为 %3';
Blockly.Msg.LEDONG_RGB_LED_SINGLE_GUI_TOOLTIP = '';

Blockly.Msg.LEDONG_RGB_LED_SHOW_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_SHOW_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_SHOW_MESSAGE0 = 'RGB_LED灯 %1 设置生效';

Blockly.Msg.LEDONG_RGB_LED_OFF_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_OFF_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_OFF_MESSAGE0 = 'RGB_LED灯 %1 关闭';

Blockly.Msg.LEDONG_RGB_LED_ALL_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_ALL_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_ALL_MESSAGE0 = 'RGB_LED灯 %1 亮 红%2 绿%3 蓝%4';

Blockly.Msg.LEDONG_RGB_LED_ALL_GUI_HELPURL = '';
Blockly.Msg.LEDONG_RGB_LED_ALL_GUI_TOOLTIP = '';
Blockly.Msg.LEDONG_RGB_LED_ALL_GUI_MESSAGE0 = 'RGB_LED灯 %1 亮%2';

Blockly.Msg.LEDONG_SET_ANALOG_MESSAGE0 = '设置LED灯 %1 值为 %2';

Blockly.Msg.LEDONG_ACTIVE_BUZZER_SET_TRUE_HELPURL = '';
Blockly.Msg.LEDONG_ACTIVE_BUZZER_SET_TRUE_TOOLTIP = '';
Blockly.Msg.LEDONG_ACTIVE_BUZZER_SET_TRUE_MESSAGE0 = '打开 有源蜂鸣器 引脚%1 ';

Blockly.Msg.LEDONG_ACTIVE_BUZZER_SET_FALSE_HELPURL = '';
Blockly.Msg.LEDONG_ACTIVE_BUZZER_SET_FALSE_TOOLTIP = '';
Blockly.Msg.LEDONG_ACTIVE_BUZZER_SET_FALSE_MESSAGE0 = '关闭 有源蜂鸣器 引脚 %1';

// 土壤
Blockly.Msg.LEDONG_READ_SOIL_HELPURL = '';
Blockly.Msg.LEDONG_READ_SOIL_TOOLTIP = '土壤湿度（返回 0 ~ 100 ）';
Blockly.Msg.LEDONG_READ_SOIL_MESSAGE0 = '土壤湿度（乐动版本）引脚%1';

Blockly.Msg.LEDONG_ANALOG_SoilMoisture_SET_THRESHOLD_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_SoilMoisture_SET_THRESHOLD_TOOLTIP = '土壤湿度传感器';
Blockly.Msg.LEDONG_ANALOG_SoilMoisture_SET_THRESHOLD_MESSAGE0 = '土壤湿度传感器引脚 %1 设置阈值为 %2';

Blockly.Msg.LEDONG_ANALOG_SoilMoisture_GET_RAW_VAL_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_SoilMoisture_GET_RAW_VAL_TOOLTIP = '';
Blockly.Msg.LEDONG_ANALOG_SoilMoisture_GET_RAW_VAL_MESSAGE0 = '%1 土壤湿度传感器的探测值';

Blockly.Msg.LEDONG_ANALOG_SoilMoisture_DETECT_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_SoilMoisture_DETECTT_TOOLTIP = '';
Blockly.Msg.LEDONG_ANALOG_SoilMoisture_DETECT_MESSAGE0 = '%1 土壤湿度传感器被触发';

Blockly.Msg.LEDONG_M1M2_FORWARD_HELPURL = '';
Blockly.Msg.LEDONG_M1M2_FORWARD_MESSAGE0 = '打开%1电机 正转 速度%2';
Blockly.Msg.LEDONG_M1M2_FORWARD_TOOLTIP = "";

Blockly.Msg.LEDONG_M1M2_REVERSE_HELPURL = '';
Blockly.Msg.LEDONG_M1M2_REVERSE_MESSAGE0 = '打开%1电机 反转 速度%2';
Blockly.Msg.LEDONG_M1M2_REVERSE_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_OFF_HELPURL = 'https://mpython.readthedocs.io/zh-cn/master/library/mPython/parrot.html';
Blockly.Msg.MPYTHON_M1M2_OFF_MESSAGE0 = '扩展板 关闭%1电源';
Blockly.Msg.MPYTHON_M1M2_OFF_TOOLTIP = "";

//智龙AI摄像头
Blockly.Msg.MPYTHON_ZHILONG_AI_K210_SET_MESSAGE0 = "摄像头初始化串口TX: %1 RX: %2";
Blockly.Msg.MPYTHON_ZHILONG_ARK_SET_WS2812_RGB_MESSAGE0 = "摄像头 %1 灯  红 %2 绿 %3 蓝 %4";
Blockly.Msg.MPYTHON_MUSIC_ZHILONG_TONE_MESSAGE0 = "摄像头播放音符 %1  节拍 %2",
Blockly.Msg.MPYTHON_ZHILONG_AI_LCD_ROTATE_ARK_MESSAGE0 = "摄像头LCD屏幕旋转 %1"

// 红外探测
Blockly.Msg.LEDONG_IR_RECEIVE_SET_THRESHOLD_HELPURL = '';
Blockly.Msg.LEDONG_IR_RECEIVE_SET_THRESHOLD_TOOLTIP = '红外探测';
Blockly.Msg.LEDONG_IR_RECEIVE_SET_THRESHOLD_MESSAGE0 = '红外探测引脚 %1 设置阈值为 %2';

Blockly.Msg.LEDONG_IR_RECEIVE_GET_RAW_VAL_HELPURL = '';
Blockly.Msg.LEDONG_IR_RECEIVE_GET_RAW_VAL_TOOLTIP = '';
Blockly.Msg.LEDONG_IR_RECEIVE_GET_RAW_VAL_MESSAGE0 = '%1 红外探测传感器的探测值';

Blockly.Msg.LEDONG_IR_RECEIVE_DETECT_HELPURL = '';
Blockly.Msg.LEDONG_IR_RECEIVE_DETECTT_TOOLTIP = '';
Blockly.Msg.LEDONG_IR_RECEIVE_DETECT_MESSAGE0 = '%1 红外探测传感器被触发';

// 满天星灯带
Blockly.Msg.LEDONG_M1M2_LED_ON_MESSAGE0 = '设满天星灯带 %1 亮度 %2';
Blockly.Msg.LEDONG_M1M2_LED_OFF_MESSAGE0 = '关闭满天星灯带 %1';

// 风扇
Blockly.Msg.LEDONG_BLUEBIT_SET_FAN_MESSAGE0 = '打开风扇 %1';
Blockly.Msg.LEDONG_BLUEBIT_SET_FAN_SPEED_MESSAGE0 = '打开风扇 %1 速度 %2';
Blockly.Msg.LEDONG_BLUEBIT_SET_FAN_OFF_MESSAGE0 = '关闭风扇 %1';


// 电压
Blockly.Msg.LEDONG_GET_FORCE_MEASURE_MESSAGE0 = 'I2C力传感器（乐动）';
Blockly.Msg.LEDONG_GET_FORCE_MEASURE_TOOLTIP = '';

// 电压
Blockly.Msg.LEDONG_GET_ELECTRICITY_MEASURE_MESSAGE0 = 'I2C电流传感器（乐动）';
Blockly.Msg.LEDONG_GET_ELECTRICITY_MEASURE_TOOLTIP = '';

// 电压
Blockly.Msg.LEDONG_GET_VOLTAGE_MEASURE_MESSAGE0 = 'I2C电压传感器（乐动）';

// 电压
Blockly.Msg.LEDONG_GET_MAGNETIC_MEASURE_MESSAGE0 = 'I2C磁场传感器（乐动）';
Blockly.Msg.LEDONG_GET_MAGNETIC_MEASURE_TOOLTIP = '';

// 电压
Blockly.Msg.LEDONG_GET_PH_MEASURE_MESSAGE0 = 'I2C PH传感器（乐动）';
Blockly.Msg.LEDONG_GET_PH_MEASURE_TOOLTIP = '';

// 电导率
Blockly.Msg.LEDONG_GET_TDS_MEASURE_MESSAGE0 = 'I2C电导率传感器（乐动）';
Blockly.Msg.LEDONG_GET_TDS_MEASURE_TOOLTIP = '';

// 烟雾
Blockly.Msg.LEDONG_ANALOG_GAS_SET_THRESHOLD_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_GAS_SET_THRESHOLD_TOOLTIP = '烟雾传感器';
Blockly.Msg.LEDONG_ANALOG_GAS_SET_THRESHOLD_MESSAGE0 = '烟雾传感器引脚 %1 设置阈值为 %2';

Blockly.Msg.LEDONG_ANALOG_GAS_GET_RAW_VAL_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_GAS_GET_RAW_VAL_TOOLTIP = '';
Blockly.Msg.LEDONG_ANALOG_GAS_GET_RAW_VAL_MESSAGE0 = '%1 烟雾传感器的探测值';

Blockly.Msg.LEDONG_ANALOG_GAS_DETECT_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_GAS_DETECTT_TOOLTIP = '';
Blockly.Msg.LEDONG_ANALOG_GAS_DETECT_MESSAGE0 = '%1 烟雾传感器被触发';

// 水位
Blockly.Msg.LEDONG_ANALOG_WATER_SET_THRESHOLD_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_WATER_SET_THRESHOLD_TOOLTIP = '水位传感器';
Blockly.Msg.LEDONG_ANALOG_WATER_SET_THRESHOLD_MESSAGE0 = '水位传感器引脚 %1 设置阈值为 %2';

Blockly.Msg.LEDONG_ANALOG_WATER_GET_RAW_VAL_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_WATER_GET_RAW_VAL_TOOLTIP = '';
Blockly.Msg.LEDONG_ANALOG_WATER_GET_RAW_VAL_MESSAGE0 = '%1 水位传感器的探测值';

Blockly.Msg.LEDONG_ANALOG_WATER_DETECT_HELPURL = '';
Blockly.Msg.LEDONG_ANALOG_WATER_DETECTT_TOOLTIP = '';
Blockly.Msg.LEDONG_ANALOG_WATER_DETECT_MESSAGE0 = '%1 水位传感器被触发';

//乐动模块 end


// 游戏手柄 start
Blockly.Msg.MPYTHON_GAME_HANDLE_START_EVENT_MESSAGE0 = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_START_EVENT_TOOLTIP = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_START_EVENT_MESSAGE0 = '%1 键被按下';

Blockly.Msg.MPYTHON_GAME_HANDLE_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_EVENT_TOOLTIP = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_EVENT_MESSAGE0 = ' %1 键被按下';

Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_EVENT_TOOLTIP = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_EVENT_MESSAGE0 = '摇杆中键被按下';

Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_DIRECTION_NUM_HELPURL = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_DIRECTION_NUM_TOOLTIP = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_DIRECTION_NUM_MESSAGE0 = '摇杆 %1 轴模拟值';

Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_DIRECTION_HELPURL = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_DIRECTION_TOOLTIP = '';
Blockly.Msg.MPYTHON_GAME_HANDLE_ROCKER_DIRECTION_MESSAGE0 = '摇杆被 %1 拨';

// 游戏手柄 end

// 气象站 start
Blockly.Msg.MPYTHON_WEATHER_STATION_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_INIT_MESSAGE0 = '初始化 气象站传感器 TX引脚 %1 RX引脚 %2 串口号%3';

Blockly.Msg.MPYTHON_WEATHER_STATION_INIT_1956_MESSAGE0 = '初始化 气象站传感器 串口:%1';

Blockly.Msg.MPYTHON_WEATHER_STATION_RAINFALL_HELPURL = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_RAINFALL_TOOLTIP = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_RAINFALL_MESSAGE0 = '降雨量（毫米）';

Blockly.Msg.MPYTHON_WEATHER_STATION_WIND_PER_HELPURL = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_WIND_PER_TOOLTIP = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_WIND_PER_MESSAGE0 = '风速 %1';

Blockly.Msg.MPYTHON_WEATHER_STATION_WIND_DIRECTION_HELPURL = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_WIND_DIRECTION_TOOLTIP = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_WIND_DIRECTION_MESSAGE0 = '风向';

Blockly.Msg.MPYTHON_WEATHER_STATION_T_H_P_HELPURL = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_T_H_P_TOOLTIP = '';
Blockly.Msg.MPYTHON_WEATHER_STATION_T_H_P_MESSAGE0 = '%1';

Blockly.Msg.MPYTHON_WEATHER_DEGREE_WIND = '级';
Blockly.Msg.MPYTHON_WEATHER_north_WIND = '北风';
Blockly.Msg.MPYTHON_WEATHER_northeast_WIND = '东北风';
Blockly.Msg.MPYTHON_WEATHER_east_WIND = '东风';
Blockly.Msg.MPYTHON_WEATHER_southeast_WIND = '东南风';
Blockly.Msg.MPYTHON_WEATHER_south_WIND = '南风';
Blockly.Msg.MPYTHON_WEATHER_southwest_WIND = '西南风';
Blockly.Msg.MPYTHON_WEATHER_west_WIND = '西风';
Blockly.Msg.MPYTHON_WEATHER_northwest_WIND = '西北风';
Blockly.Msg.MPYTHON_WEATHER_Humidity = '湿度值（%）';
Blockly.Msg.MPYTHON_WEATHER_Temperature = '温度值（°C）';
Blockly.Msg.MPYTHON_WEATHER_Atmospheric_pressure = '大气压力（KPa）';

// 气象站 end


// 收音机 start
Blockly.Msg.MPYTHON_RADIO_DEVICE_FREQUENCY_UP_DOWN_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_FREQUENCY_UP_DOWN_TOOLTIP = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_FREQUENCY_UP_DOWN_MESSAGE0 = '收音机 %1 搜索频道';

Blockly.Msg.MPYTHON_RADIO_DEVICE_SET_FREQUENCY_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_SET_FREQUENCY_TOOLTIP = '87.5 ~ 108';
Blockly.Msg.MPYTHON_RADIO_DEVICE_SET_FREQUENCY_MESSAGE0 = '设置收音机频率为 %1 MHz';

Blockly.Msg.MPYTHON_RADIO_DEVICE_AUTO_SET_FREQUENCY_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_AUTO_SET_FREQUENCY_TOOLTIP = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_AUTO_SET_FREQUENCY_MESSAGE0 = '收音机自动搜索频道';

Blockly.Msg.MPYTHON_RADIO_DEVICE_CHANNEL_TABLE_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_CHANNEL_TABLE_TOOLTIP = '';
Blockly.Msg.MPYTHON_RADIO_DEVICE_CHANNEL_TABLE_MESSAGE0 = '收音机频道列表';

// 收音机 end





// 新版1956 start
// 传感器
Blockly.Msg.NEW1956_ACCELEROMETER_ANGLE_HELPURL = '';
Blockly.Msg.NEW1956_ACCELEROMETER_ANGLE_TOOLTIP = '';
Blockly.Msg.NEW1956_ACCELEROMETER_ANGLE_MESSAGE0 = '1956 %1';

Blockly.Msg.NEW1956_IS_SHAKED_HELPURL = '';
Blockly.Msg.NEW1956_IS_SHAKED_TOOLTIP = '';
Blockly.Msg.NEW1956_IS_SHAKED_MESSAGE0 = '1956 %1';

Blockly.Msg.NEW1956_IS_TILTED_HELPURL = '';
Blockly.Msg.NEW1956_IS_TILTED_TOOLTIP = '';
Blockly.Msg.NEW1956_IS_TILTED_MESSAGE0 = '1956 %1';

Blockly.Msg.NEW1956_BAROMETRIC_VAL_HELPURL = '';
Blockly.Msg.NEW1956_BAROMETRIC_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_BAROMETRIC_VAL_MESSAGE0 = '气压传感器 %1 值';

Blockly.Msg.NEW1956_FIVE_WAY_KEY_HELPURL = '';
Blockly.Msg.NEW1956_FIVE_WAY_KEY_TOOLTIP = '';
Blockly.Msg.NEW1956_FIVE_WAY_KEY_MESSAGE0 = '五向键 方向 %1 被触发';

Blockly.Msg.NEW1956_GET_TIME_NOW_YEAR = '年';
Blockly.Msg.NEW1956_GET_TIME_NOW_MONTH = '月';
Blockly.Msg.NEW1956_GET_TIME_NOW_DAY = '日';
Blockly.Msg.NEW1956_GET_TIME_NOW_HOUR = '时';
Blockly.Msg.NEW1956_GET_TIME_NOW_MINUTE = '分';
Blockly.Msg.NEW1956_GET_TIME_NOW_SECOND = '秒';
Blockly.Msg.NEW1956_GET_TIME_NOW_HELPURL = '';
Blockly.Msg.NEW1956_GET_TIME_NOW_TOOLTIP = '';
Blockly.Msg.NEW1956_GET_TIME_NOW_MESSAGE0 = '获取当前时间 %1';

Blockly.Msg.NEW1956_GET_TIME_STR_HMS = '时:分:秒';
Blockly.Msg.NEW1956_GET_TIME_STR_HM = '时:分';
Blockly.Msg.NEW1956_GET_TIME_STR_YMDHMS1 = '年-月-日 时:分:秒';
Blockly.Msg.NEW1956_GET_TIME_STR_YMD1 = '年-月-日';
Blockly.Msg.NEW1956_GET_TIME_STR_YM1 = '年-月';
Blockly.Msg.NEW1956_GET_TIME_STR_YMDHMS2 = '年/月/日 时:分:秒';
Blockly.Msg.NEW1956_GET_TIME_STR_YMD2 = '年/月/日';
Blockly.Msg.NEW1956_GET_TIME_STR_YM2 = '年/月';
Blockly.Msg.NEW1956_GET_TIME_STR_HELPURL = '';
Blockly.Msg.NEW1956_GET_TIME_STR_TOOLTIP = '';
Blockly.Msg.NEW1956_GET_TIME_STR_MESSAGE0 = '获取当前时间 %1';

Blockly.Msg.NEW1956_GET_TIME_FORMAT_HELPURL = '';
Blockly.Msg.NEW1956_GET_TIME_FORMAT_TOOLTIP = '';
Blockly.Msg.NEW1956_GET_TIME_FORMAT_MESSAGE0 = '获取当前时间(格式化)';

Blockly.Msg.NEW1956_GET_TIME_STAMP_HELPURL = '';
Blockly.Msg.NEW1956_GET_TIME_STAMP_TOOLTIP = '';
Blockly.Msg.NEW1956_GET_TIME_STAMP_MESSAGE0 = '获取当前时间(时间戳)';

// 公共gui
Blockly.Msg.NEW1956_GUI_LABEL_SET_LONG_MODE_CROP = '超出部分隐藏';
Blockly.Msg.NEW1956_GUI_LABEL_SET_LONG_MODE_EXPAND = '宽度自适应';
Blockly.Msg.NEW1956_GUI_LABEL_SET_LONG_MODE_BREAK = '自动换行';
Blockly.Msg.NEW1956_GUI_LABEL_SET_LONG_MODE_DOT = '超出部分省略号代替';
Blockly.Msg.NEW1956_GUI_LABEL_SET_LONG_MODE_SROLL = '保持大小并来回滚动文本';
Blockly.Msg.NEW1956_GUI_LABEL_SET_LONG_MODE_SROLL_CIRC = '保持大小并循环滚动文本';

Blockly.Msg.NEW1956_GUI_DEFINE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_DEFINE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_VAR = '定义';
Blockly.Msg.NEW1956_GUI_CONTAINED_IN = ' %1 并放到其他控件 %2 中';
Blockly.Msg.NEW1956_GUI_btn = '按钮';
Blockly.Msg.NEW1956_GUI_bar = '进度条';
Blockly.Msg.NEW1956_GUI_cb = '复选框';
Blockly.Msg.NEW1956_GUI_dropdown = '下拉列表';
Blockly.Msg.NEW1956_GUI_label = '文本';
Blockly.Msg.NEW1956_GUI_led = 'LED';
Blockly.Msg.NEW1956_GUI_slider = '滑杆';
Blockly.Msg.NEW1956_GUI_switch = '开关';
Blockly.Msg.NEW1956_GUI_img = '图片';
Blockly.Msg.NEW1956_GUI_textarea = '输入框';
Blockly.Msg.NEW1956_GUI_spinbox = '数字调整框';
Blockly.Msg.NEW1956_GUI_gauge = '仪表';
Blockly.Msg.NEW1956_GUI_canvas = '画布';
Blockly.Msg.NEW1956_GUI_cpicker = '颜色选择器';
Blockly.Msg.NEW1956_GUI_lmeter = '仪表';
Blockly.Msg.NEW1956_GUI_chart = '图表';
Blockly.Msg.NEW1956_GUI_table = '表格';
Blockly.Msg.NEW1956_GUI_box = '盒子';
Blockly.Msg.NEW1956_GUI_container = '容器';
Blockly.Msg.NEW1956_GUI_WH_XY = '为 %1 宽 %2 高 %3 X %4 Y %5';
Blockly.Msg.NEW1956_GUI_XY = '为 %1 X %2 Y %3';

Blockly.Msg.NEW1956_GUI_SET_SIZE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SET_SIZE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SET_SIZE_MESSAGE0 = '更新 %1 尺寸为 宽 %2 高 %3';

Blockly.Msg.NEW1956_GUI_SET_POS_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SET_POS_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SET_POS_MESSAGE0 = '更新 %1 坐标为 X %2 Y %3';

Blockly.Msg.NEW1956_GUI_WIDTH = '宽度';
Blockly.Msg.NEW1956_GUI_HEIGHT = '高度';
Blockly.Msg.NEW1956_GUI_X = 'x坐标';
Blockly.Msg.NEW1956_GUI_Y = 'y坐标';
Blockly.Msg.NEW1956_GUI_SET_ATTRIBUTE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SET_ATTRIBUTE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SET_ATTRIBUTE_MESSAGE0 = '更新 %1 %2 为 %3';

Blockly.Msg.NEW1956_GUI_GET_ATTRIBUTE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GET_ATTRIBUTE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GET_ATTRIBUTE_MESSAGE0 = '获取 %1 %2';


Blockly.Msg.NEW1956_GUI_clicked = '被点击';
Blockly.Msg.NEW1956_GUI_pressed = '被按下';
Blockly.Msg.NEW1956_GUI_released = '被释放';
Blockly.Msg.NEW1956_GUI_long_pressed = '被长按';
Blockly.Msg.NEW1956_GUI_value_changed = '值改变';
Blockly.Msg.NEW1956_GUI_short_clicked = '被短点击';
Blockly.Msg.NEW1956_GUI_pressing = '被持续按下';
Blockly.Msg.NEW1956_GUI_long_pressed_repeat = '被重复长按';
Blockly.Msg.NEW1956_GUI_EVENT_HAPPENED_HELPURL = '';
Blockly.Msg.NEW1956_GUI_EVENT_HAPPENED_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_EVENT_HAPPENED_MESSAGE0 = '当 %1 %2';

Blockly.Msg.NEW1956_GUI_TO_TOP = '置顶';
Blockly.Msg.NEW1956_GUI_TO_BOTTOM = '置底';
Blockly.Msg.NEW1956_GUI_HIDE = '隐藏';
Blockly.Msg.NEW1956_GUI_SHOW = '显示';
Blockly.Msg.NEW1956_GUI_GROUP_OBJ_ADD = '可操作元素'
Blockly.Msg.NEW1956_GUI_GROUP_OBJ_REMOVE = '不可操作元素'
Blockly.Msg.NEW1956_GUI_GROUP_OBJ_FOCUS = '聚焦'
Blockly.Msg.NEW1956_GUI_DISABLED = '禁用';
Blockly.Msg.NEW1956_GUI_ENABLED = '启用';
Blockly.Msg.NEW1956_GUI_CHECKABLE = '可选中';
Blockly.Msg.NEW1956_GUI_UNCHECKABLE = '不可选中';

Blockly.Msg.NEW1956_GUI_GROUP_OBJ_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GROUP_OBJ_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GROUP_OBJ1_MESSAGE0 = '设置';
Blockly.Msg.NEW1956_GUI_GROUP_OBJ2_MESSAGE0 = ' %1 为 %2';

Blockly.Msg.NEW1956_GUI_GROUP_REMOVE_ALL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GROUP_REMOVE_ALL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GROUP_REMOVE_ALL_MESSAGE0 = '清除所有可操作元素';

Blockly.Msg.NEW1956_GUI_SET_BG_COLOR_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SET_BG_COLOR_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SET_BG_COLOR_MESSAGE0 = '更新 %1 背景颜色为 %2';

Blockly.Msg.NEW1956_GUI_BTN_SET_TITLE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_TITLE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_TITLE_MESSAGE0 = '更新 按钮 %1 名称为 %2 字体颜色 %3';

Blockly.Msg.NEW1956_GUI_BTN_SET_STATE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_STATE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_STATE_MESSAGE0 = '更新 按钮 %1 状态为 %2';

Blockly.Msg.NEW1956_GUI_BTN_SET_RANGE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_RANGE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_RANGE_MESSAGE0 = '更新 进度条 %1 范围为 %2 到 %3';

Blockly.Msg.NEW1956_GUI_ON = '开';
Blockly.Msg.NEW1956_GUI_OFF = '关';
Blockly.Msg.NEW1956_GUI_BTN_SET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_BTN_SET_VAL_MESSAGE0 = '更新 进度条 %1 值为 %2 动态效果 %3';

Blockly.Msg.NEW1956_GUI_CB_SET_TEXT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CB_SET_TEXT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CB_SET_TEXT_MESSAGE0 = '更新 复选框 %1 文本为 %2';

Blockly.Msg.NEW1956_GUI_CHECKED = '选中';
Blockly.Msg.NEW1956_GUI_CANCEL = '未选中';
Blockly.Msg.NEW1956_GUI_CB_SET_STATE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CB_SET_STATE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CB_SET_STATE_MESSAGE0 = '更新 复选框 %1 为 %2';

Blockly.Msg.NEW1956_GUI_CB_GET_STATE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CB_GET_STATE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CB_GET_STATE_MESSAGE0 = '复选框 %1 被选中';

Blockly.Msg.NEW1956_GUI_DROPDOWN_SET_OPTIONS_HELPURL = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_SET_OPTIONS_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_SET_OPTIONS_MESSAGE0 = '更新 下拉框 %1 选项为 %2';

Blockly.Msg.NEW1956_GUI_DROPDOWN_ADD_OPTION_HELPURL = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_ADD_OPTION_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_ADD_OPTION_MESSAGE0 = '下拉框 %1 增加选项 %2';

Blockly.Msg.NEW1956_GUI_DROPDOWN_SET_SELECTED_HELPURL = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_SET_SELECTED_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_SET_SELECTED_MESSAGE0 = '令 下拉框 %1 选中第 %2 项';

Blockly.Msg.NEW1956_GUI_DROPDOWN_GET_SELECTED_HELPURL = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_GET_SELECTED_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_DROPDOWN_GET_SELECTED_MESSAGE0 = '获取下拉框 %1 选中的索引序号';

Blockly.Msg.NEW1956_GUI_LABEL_SET_TEXT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_LABEL_SET_TEXT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_LABEL_SET_TEXT_MESSAGE0 = '更新 文本 %1 文字为 %2 颜色 %3';

Blockly.Msg.NEW1956_GUI_LABEL_SET_FONT_SIZE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_LABEL_SET_FONT_SIZE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_LABEL_SET_FONT_SIZE_MESSAGE0 = '更新 文本 %1 字体大小为 %2';

Blockly.Msg.NEW1956_GUI_LIGHT_ON = '点亮';
Blockly.Msg.NEW1956_GUI_LIGHT_OFF = '熄灭';
Blockly.Msg.NEW1956_GUI_LED_SET_STATE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_LED_SET_STATE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_LED_SET_STATE_MESSAGE0 = '令 LED %1 %2';

Blockly.Msg.NEW1956_GUI_SLIDER_SET_RANGE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SLIDER_SET_RANGE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SLIDER_SET_RANGE_MESSAGE0 = '更新 滑杆 %1 范围为 %2 到 %3';

Blockly.Msg.NEW1956_GUI_SLIDER_SET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SLIDER_SET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SLIDER_SET_VAL_MESSAGE0 = '更新 滑杆 %1 值为 %2 动画效果 %3';

Blockly.Msg.NEW1956_GUI_SLIDER_GET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SLIDER_GET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SLIDER_GET_VAL_MESSAGE0 = '获取 滑杆 %1 值';


Blockly.Msg.NEW1956_GUI_SWITCH_SET_STATE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SWITCH_SET_STATE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SWITCH_SET_STATE_MESSAGE0 = '令 开关 %1 %2 动画效果 %3';

Blockly.Msg.NEW1956_GUI_SWITCH_GET_STATE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SWITCH_GET_STATE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SWITCH_GET_STATE_MESSAGE0 = '获取 开关 %1 值';


Blockly.Msg.NEW1956_GUI_GET_SYMBOL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GET_SYMBOL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GET_SYMBOL_MESSAGE0 = '文本图案 %1';

Blockly.Msg.NEW1956_GUI_IMG_SIZE_AUTO = '保持原图';
Blockly.Msg.NEW1956_GUI_IMG_SIZE_SCREEN = '适配屏幕';
Blockly.Msg.NEW1956_GUI_IMG_SET_SRC_HELPURL = '';
Blockly.Msg.NEW1956_GUI_IMG_SET_SRC_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_IMG_SET_SRC_MESSAGE0 = '更新 图片 %1 内容为 文件 %2 尺寸为 %3';

Blockly.Msg.NEW1956_GUI_IMG_SET_ZOOM_HELPURL = '';
Blockly.Msg.NEW1956_GUI_IMG_SET_ZOOM_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_IMG_SET_ZOOM_MESSAGE0 = '设置 图片 %1 放大倍率为 %2 %';

Blockly.Msg.NEW1956_GUI_IMG_SET_ANGLE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_IMG_SET_ANGLE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_IMG_SET_ANGLE_MESSAGE0 = '设置 图片 %1 旋转角度为 %2 度';


Blockly.Msg.NEW1956_GUI_ROTATION_ANGLE = '旋转角度';
Blockly.Msg.NEW1956_GUI_FILE_NAME = '文件名';
Blockly.Msg.NEW1956_GUI_MAGNIFICATION = '放大倍率';
Blockly.Msg.NEW1956_GUI_IMG_GET_ATTRIBUTE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_IMG_GET_ATTRIBUTE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_IMG_GET_ATTRIBUTE_MESSAGE0 = '获取图片 %1 %2';

Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_TEXT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_TEXT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_TEXT_MESSAGE0 = '更新输入框 %1 内容为 %2';

Blockly.Msg.NEW1956_GUI_SINGLE_LINE_MODE = '单行模式';
Blockly.Msg.NEW1956_GUI_MULTILINE_MODE = '多行模式';

Blockly.Msg.NEW1956_GUI_PWD_MODE = '密码模式';
Blockly.Msg.NEW1956_GUI_NORMAL_MODE = '普通模式';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_PWD_MODE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_PWD_MODE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_PWD_MODE_MESSAGE0 = '输入框 %1 设置为 %2';

Blockly.Msg.NEW1956_GUI_TEXT_ALIGN_LEFT = '居左';
Blockly.Msg.NEW1956_GUI_TEXT_ALIGN_CENTER = '居中';
Blockly.Msg.NEW1956_GUI_TEXT_ALIGN_RIGHT = '居右';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_TEXT_ALIGN_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_TEXT_ALIGN_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_TEXT_ALIGN_MESSAGE0 = '设置 输入框 %1 对齐方式为 %2';

Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_ACCEPTED_CHARS_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_ACCEPTED_CHARS_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_ACCEPTED_CHARS_MESSAGE0 = '设置 输入框 %1 可接受字符为 %2';

Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_MAX_LENGTH_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_MAX_LENGTH_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_MAX_LENGTH_MESSAGE0 = '设置 输入框 %1 最大字符长度为 %2';

Blockly.Msg.NEW1956_GUI_TEXTAREA_GET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_GET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_GET_VAL_MESSAGE0 = '获取 输入框 %1 内容';

Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_CURSOR_HIDDEN_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_CURSOR_HIDDEN_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TEXTAREA_SET_CURSOR_HIDDEN_MESSAGE0 = '设置 输入框 %1 输入状态为 %2';

Blockly.Msg.NEW1956_GUI_SPINBOX_SET_DIGIT_FORMAT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_DIGIT_FORMAT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_DIGIT_FORMAT_MESSAGE0 = '设置 数字调整框 %1 共 %2 位，其中小数点前 %3 位';

Blockly.Msg.NEW1956_GUI_SPINBOX_SET_RANGE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_RANGE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_RANGE_MESSAGE0 = '设置 数字调整框 %1 最小值 %2 最大值 %3';

Blockly.Msg.NEW1956_GUI_INCREMENT = '递增';
Blockly.Msg.NEW1956_GUI_DECREMENT = '递减';
Blockly.Msg.NEW1956_GUI_SPINBOX_INCREMENT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_INCREMENT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_INCREMENT_MESSAGE0 = '令 数字调整框 %1 %2';

Blockly.Msg.NEW1956_GUI_SPINBOX_SET_STEP_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_STEP_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_STEP_MESSAGE0 = '设置 数字调整框 %1 递增递减步长为 %2';

Blockly.Msg.NEW1956_GUI_SPINBOX_SET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_SET_VAL_MESSAGE0 = '设置 数字调整框 %1 值为 %2';

Blockly.Msg.NEW1956_GUI_SPINBOX_GET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_GET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_SPINBOX_GET_VAL_MESSAGE0 = '获取 数字调整框 %1 值';

Blockly.Msg.NEW1956_GUI_GAUGE_DEFINE_TOOLTIP = '范围最小值为-32768，最大值为+32767';

Blockly.Msg.NEW1956_GUI_GAUGE_SET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GAUGE_SET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GAUGE_SET_VAL_MESSAGE0 = '更新 仪表 %1 第 %2 根指针 值为 %3';

Blockly.Msg.NEW1956_GUI_GAUGE_SET_SCALE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GAUGE_SET_SCALE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GAUGE_SET_SCALE_MESSAGE0 = '设置 仪表 %1 最大角度 %2 小刻度数 %3 大刻度数 %4';

Blockly.Msg.NEW1956_GUI_GAUGE_SET_ANGLE_OFFSET_HELPURL = '';
Blockly.Msg.NEW1956_GUI_GAUGE_SET_ANGLE_OFFSET_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_GAUGE_SET_ANGLE_OFFSET_MESSAGE0 = '令 仪表 %1 顺时针旋转 %2 度';

Blockly.Msg.NEW1956_GUI_AQUA = '湖绿色';
Blockly.Msg.NEW1956_GUI_BLACK = '黑色';
Blockly.Msg.NEW1956_GUI_BLUE = '蓝色';
Blockly.Msg.NEW1956_GUI_CYAN = '青色';
Blockly.Msg.NEW1956_GUI_GRAY = '灰色';
Blockly.Msg.NEW1956_GUI_GREEN = '绿色';
Blockly.Msg.NEW1956_GUI_LIME = '石灰色';
Blockly.Msg.NEW1956_GUI_MAGENTA = '紫红色';
Blockly.Msg.NEW1956_GUI_MAROON = '紫褐色';
Blockly.Msg.NEW1956_GUI_NAVY = '深蓝色';
Blockly.Msg.NEW1956_GUI_OLIVE = '橄榄绿色';
Blockly.Msg.NEW1956_GUI_ORANGE = '橙色';
Blockly.Msg.NEW1956_GUI_PURPLE = '紫色';
Blockly.Msg.NEW1956_GUI_RED = '红色';
Blockly.Msg.NEW1956_GUI_SILVER = '银色';
Blockly.Msg.NEW1956_GUI_TEAL = '蓝绿色';
Blockly.Msg.NEW1956_GUI_WHITE = '白色';
Blockly.Msg.NEW1956_GUI_YELLOW = '黄色';
Blockly.Msg.NEW1956_GUI_CANVAS_GET_LVGL_COLOR_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CANVAS_GET_LVGL_COLOR_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CANVAS_GET_LVGL_COLOR_MESSAGE0 = '颜色 %1';


Blockly.Msg.NEW1956_GUI_HUE = '色调';
Blockly.Msg.NEW1956_GUI_SATURATION = '饱和度';
Blockly.Msg.NEW1956_GUI_CPICKER_VALUE = '亮度';
Blockly.Msg.NEW1956_GUI_CPICKER_SET_VALUE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CPICKER_SET_VALUE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CPICKER_SET_VALUE_MESSAGE0 = '设置 颜色选择器 %1 所选颜色 %2 值为 %3';

Blockly.Msg.NEW1956_GUI_CPICKER_GET_COLOR_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CPICKER_GET_COLOR_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CPICKER_GET_COLOR_MESSAGE0 = '获取 颜色选择器 %1 所选颜色的 %2 值';

Blockly.Msg.NEW1956_GUI_LINEMETER_SET_ANGLE_OFFSET_HELPURL = '';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_ANGLE_OFFSET_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_ANGLE_OFFSET_MESSAGE0 = '令 仪表 %1 旋转 %2 度';

Blockly.Msg.NEW1956_GUI_CLOCKWISE = '关闭';
Blockly.Msg.NEW1956_GUI_ANTICLOCKWISE = '开启';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_MIRROR_HELPURL = '';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_MIRROR_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_MIRROR_MESSAGE0 = '设置 仪表%1 镜像%2';

Blockly.Msg.NEW1956_GUI_LINEMETER_SET_VAL_HELPURL = '';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_VAL_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_LINEMETER_SET_VAL_MESSAGE0 = '更新 仪表 %1 值为 %2';

Blockly.Msg.NEW1956_GUI_CHART_INIT_SIMPLIFY_SCALE = '请输入数值 2 ~ 50，建议 5 ~ 10';

Blockly.Msg.NEW1956_GUI_CHART_INIT_SIMPLIFY_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_INIT_SIMPLIFY_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_INIT_SIMPLIFY_MESSAGE0 = '定义图表%1 X， Y%2 宽，高%3 最小值，最大值 %4 刻度数量为 %5 保留小数 %6 边距 %7 类型为 %8 %11曲线数量 %9数据集长度 %10';

Blockly.Msg.NEW1956_GUI_LINE_CHART = '折线图';
Blockly.Msg.NEW1956_GUI_BAR_CHART = '柱状图';
Blockly.Msg.NEW1956_GUI_NONE_CHART = '隐藏数据';
Blockly.Msg.NEW1956_GUI_CHART_SET_TYPE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_TYPE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_TYPE_MESSAGE0 = '设置 图表 %1 类型为 %2';

Blockly.Msg.NEW1956_GUI_CHART_SET_RANGE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_RANGE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_RANGE_MESSAGE0 = '设置 图表 %1 Y轴参数 %7 最小值 %2 最大值 %3 刻度数量为 %4 保留小数 %5 边距 %6';

Blockly.Msg.NEW1956_GUI_CHART_SET_DIV_LINE_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_DIV_LINE_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_DIV_LINE_MESSAGE0 = '设置 图表 %1 背景 行数量 %2 列数量 %3';

Blockly.Msg.NEW1956_GUI_CHART_SET_TICK_TEXT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_TICK_TEXT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_TICK_TEXT_MESSAGE0 = '设置 图表 %1 X轴参数 刻度文本为 %2 边距 %3';

Blockly.Msg.NEW1956_GUI_CHART_SET_LINE_COUNT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_LINE_COUNT_TOOLTIP = '数据集长度 0 ~ 100';
Blockly.Msg.NEW1956_GUI_CHART_SET_LINE_COUNT_MESSAGE0 = '设置 图表 %1 曲线数量 %2 数据集长度 %3';

Blockly.Msg.NEW1956_GUI_CHART_SET_NEXT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_NEXT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_SET_NEXT_MESSAGE0 = '绘制 图表 %1 第 %2 条曲线增加一个点 %3';

Blockly.Msg.NEW1956_GUI_CHART_REINIT_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_REINIT_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_REINIT_MESSAGE0 = '清空 图表 %1';

Blockly.Msg.NEW1956_GUI_CHART_GET_POINTS_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CHART_GET_POINTS_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CHART_GET_POINTS_MESSAGE0 = '获取 数据集 第 %1 条曲线的数据';

Blockly.Msg.NEW1956_GUI_TABLE_DEFINE_TOOLTIP = '行数最小值不能小于4';

Blockly.Msg.NEW1956_GUI_TABLE_SET_DATA_HELPURL = '';
Blockly.Msg.NEW1956_GUI_TABLE_SET_DATA_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_TABLE_SET_DATA_MESSAGE0 = '设置表格 %1 第 %2 行 数据为 %3';

Blockly.Msg.NEW1956_GUI_TABLE_SET_LABELS = '数据：'

Blockly.Msg.NEW1956_GUI_CONTAINER_APPEND_HELPURL = '';
Blockly.Msg.NEW1956_GUI_CONTAINER_APPEND_TOOLTIP = '';
Blockly.Msg.NEW1956_GUI_CONTAINER_APPEND_MESSAGE0 = '容器 %1 添加控件 %2';

Blockly.Msg.NEW1956_GUI_CONTAINER_SET_LABELS = '控件：'


Blockly.Msg.NEW1956_GUI_VAR_btn_MESSAGE0 = '定义按钮%1 名称%2 X%3 Y%4 宽%5 高%6 字体颜色%7';
Blockly.Msg.NEW1956_GUI_VAR_bar_MESSAGE0 = '定义进度条%1 X%2 Y%3 宽%4 高%5 范围为 %6 到 %7';
Blockly.Msg.NEW1956_GUI_VAR_cb_MESSAGE0 = '定义复选框%1 文本%2 X%3 Y%4';
Blockly.Msg.NEW1956_GUI_VAR_dropdown_MESSAGE0 = '定义下拉列表%1 X%2 Y%3 宽%4 高%5 选项为 %6';
Blockly.Msg.NEW1956_GUI_VAR_label_MESSAGE0 = '定义 %1 显示文本%2 X%3 Y%4 宽%5 字体%6 颜色%7 %8';
Blockly.Msg.NEW1956_GUI_VAR_led_MESSAGE0 = '定义LED%1 X%2 Y%3 宽%4 高%5';
Blockly.Msg.NEW1956_GUI_VAR_slider_MESSAGE0 = '定义滑杆%1 X%2 Y%3 宽%4 高%5 范围为 %6 到 %7';
Blockly.Msg.NEW1956_GUI_VAR_switch_MESSAGE0 = '定义开关%1 X%2 Y%3 宽%4 高%5';
Blockly.Msg.NEW1956_GUI_VAR_img_MESSAGE0 = '定义图片%1 X%2 Y%3 内容为 文件%4 尺寸为%5';
Blockly.Msg.NEW1956_GUI_VAR_textarea_MESSAGE0 = '定义输入框%1 X%2 Y%3 宽%4 高%5 文本模式 %6';
Blockly.Msg.NEW1956_GUI_VAR_spinbox_MESSAGE0 = '定义数字框%1 X%2 Y%3 宽%4 高%5';
Blockly.Msg.NEW1956_GUI_VAR_gauge_MESSAGE0 = '定义仪表%1 X%2 Y%3 宽%4 高%5 数值范围为 %6 到 %7 指针数 %8';
Blockly.Msg.NEW1956_GUI_VAR_cpicker_MESSAGE0 = '定义颜色选择器%1 X%2 Y%3 宽%4 高%5 初始颜色 %6';
Blockly.Msg.NEW1956_GUI_VAR_lmeter_MESSAGE0 = '定义仪表%1 X%2 Y%3 宽%4 高%5 范围为 %6 到 %7 最大角度 %8 刻度数 %9';
Blockly.Msg.NEW1956_GUI_VAR_chart_MESSAGE0 = '定义图表%1 X%2 Y%3 宽%4 高%5 类型为 %6';
Blockly.Msg.NEW1956_GUI_VAR_table_MESSAGE0 = '定义表格%1 X%2 Y%3 宽%4 行数%5 列数%6';
Blockly.Msg.NEW1956_GUI_VAR_container_MESSAGE0 = '定义容器%1 X%2 Y%3 宽%4 高%5 背景颜色%6 圆角半径%7';
Blockly.Msg.NEW1956_GUI_VAR_box_XD_MESSAGE0 = '绘制%1 线段%2 X%3 Y%4 长%5 粗细%6 颜色%7';
Blockly.Msg.NEW1956_GUI_VAR_box_JX_MESSAGE0 = '绘制矩形%1 X%2 Y%3 宽%4 高%5 边框粗细%6 边框颜色%7';
Blockly.Msg.NEW1956_GUI_VAR_box_TCJX_MESSAGE0 = '绘制填充矩形%1 X%2 Y%3 宽%4 高%5 填充颜色%6';
Blockly.Msg.NEW1956_GUI_VAR_box_YJJX_MESSAGE0 = '绘制圆角矩形%1 X%2 Y%3 宽%4 高%5 边框粗细%6 边框颜色%7 圆角半径%8';
Blockly.Msg.NEW1956_GUI_VAR_box_TCYJJX_MESSAGE0 = '绘制圆角填充矩形%1 X%2 Y%3 宽%4 高%5 填充颜色%6 圆角半径%7';
Blockly.Msg.NEW1956_GUI_VAR_box_YX_MESSAGE0 = '绘制圆形%1 圆心X%2 圆心Y%3 半径%4 边框粗细%5 边框颜色%6';
Blockly.Msg.NEW1956_GUI_VAR_box_TCYX_MESSAGE0 = '绘制填充圆形%1 圆心X%2 圆心Y%3 半径%4 填充颜色%5';


// 音频
Blockly.Msg.NEW1956_AUDIO_PLAY_HELPURL = '';
Blockly.Msg.NEW1956_AUDIO_PLAY_MESSAGE0 = '音频 播放本地  %1';
Blockly.Msg.NEW1956_AUDIO_PLAY_TOOLTIP = "需把音频资源上传至1956";

Blockly.Msg.NEW1956_AUDIO_RECORD_HELPURL = '';
Blockly.Msg.NEW1956_AUDIO_RECORD_MESSAGE0 = '录制音频 存储路径 %1 时长 %2 秒';
Blockly.Msg.NEW1956_AUDIO_RECORD_TOOLTIP = '录音获取音频文件，并以 WAV 格式存储。';

Blockly.Msg.NEW1956_AUDIO_SET_VOLUME_HELPURL = '';
Blockly.Msg.NEW1956_AUDIO_SET_VOLUME_MESSAGE0 = '设置音频 音量 %1';
Blockly.Msg.NEW1956_AUDIO_SET_VOLUME_TOOLTIP = '音量范围 0 ~ 30';


// 输出
Blockly.Msg.NEW1956_DIGITAL_READ_HELPURL = '';
Blockly.Msg.NEW1956_DIGITAL_READ_TOOLTIP = '';
Blockly.Msg.NEW1956_DIGITAL_READ_MESSAGE0 = '引脚 %1 数字值';

Blockly.Msg.NEW1956_DIGITAL_WRITE_HELPURL = '';
Blockly.Msg.NEW1956_DIGITAL_WRITE_TOOLTIP = '';
Blockly.Msg.NEW1956_DIGITAL_WRITE_MESSAGE0 = '设置 引脚 %1 数字值为 %2';

Blockly.Msg.NEW1956_ANALOG_READ_HELPURL = '';
Blockly.Msg.NEW1956_ANALOG_READ_TOOLTIP = '';
Blockly.Msg.NEW1956_ANALOG_READ_MESSAGE0 = '引脚 %1 模拟值';

Blockly.Msg.NEW1956_SET_PIN_PWM_HELPURL = '';
Blockly.Msg.NEW1956_SET_PIN_PWM_TOOLTIP = '';
Blockly.Msg.NEW1956_SET_PIN_PWM_MESSAGE0 = '设置 引脚 %1 PWM输出 %2';

Blockly.Msg.NEW1956_SET_M1M2_PWM_HELPURL = '';
Blockly.Msg.NEW1956_SET_M1M2_PWM_TOOLTIP = '';
Blockly.Msg.NEW1956_SET_M1M2_PWM_MESSAGE0 = '设置 %1 输出 %2';


// SIoT
Blockly.Msg.MPYTHON_SIOT_LABPLUS_CONNECT_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_LABPLUS_CONNECT_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT_LABPLUS_CONNECT_MESSAGE0 = '掌控IOT平台 %1 client_id %2 user %3 password %4';

Blockly.Msg.MPYTHON_SIOT_LABPLUS_SUBSCRIBE_EMPTY_TITLE = "点击左边星号 订阅 主题";
Blockly.Msg.MPYTHON_SIOT_LABPLUS_SUBSCRIBE_INPUT_WITH = "订阅 主题1";
Blockly.Msg.MPYTHON_SIOT_LABPLUS_DISCONNECT_MESSAGE0 = "断开连接";
Blockly.Msg.MPYTHON_SIOT_LABPLUS_MESSAGE_MESSAGE0 = "收到的消息";
Blockly.Msg.MPYTHON_SIOT_LABPLUS_PUBLISH_TO_MESSAGE0 = "发送消息 %1 到 主题 %2";
Blockly.Msg.MPYTHON_SIOT_LABPLUS_RECEIVE_FROM_MESSAGE0 = "当从主题 %1 收到消息时";


Blockly.Msg.IOT_TEMP_UI_INIT_MESSAGE0 = "初始化通用模板案例";
Blockly.Msg.IOT_TEMP_UI_INIT_TOOLTIP = '';
Blockly.Msg.IOT_TEMP_UI_INIT_HELPURL = '';

Blockly.Msg.IOT_TEMP_UI_INIT_PART1_MESSAGE0 = "通用模板案例 启用表格\\文本展示界面";
Blockly.Msg.IOT_TEMP_UI_INIT_PART1_TOOLTIP = '';
Blockly.Msg.IOT_TEMP_UI_INIT_PART1_HELPURL = '';

Blockly.Msg.IOT_TEMP_UI_INIT_PART2_MESSAGE0 = "通用模板案例 启用单数据展示界面";
Blockly.Msg.IOT_TEMP_UI_INIT_PART2_TOOLTIP = '';
Blockly.Msg.IOT_TEMP_UI_INIT_PART2_HELPURL = '';

Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MESSAGE0 = "通用模板案例 启用开关系统界面";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_TOOLTIP = '';
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_HELPURL = '';

Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_ADD_MESSAGE0 = "通用模板案例 向开关系统界面添加组件%1";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_ADD_TOOLTIP = '';
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_ADD_HELPURL = '';

Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_ALL_MESSAGE0 = "全部";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_SWITCH_MESSAGE0 = "滑块";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_SPIN_BOX_MESSAGE0 = "数字调整框";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_BUTTON_MESSAGE0 = "按钮";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_SEND_BOX_MESSAGE0 = "发送框";
Blockly.Msg.IOT_TEMP_UI_INIT_PART3_MODULE_SLIDER_MESSAGE0 = "滑杆";

Blockly.Msg.MPYTHON_SIOT_TEMP_INIT_MESSAGE0 = "初始化SIOT简单模板客户端 客户端ID%1 服务器IP%2";
Blockly.Msg.MPYTHON_SIOT_TEMP_INIT_TOOLTIP = '已包含客户端的参数设置连接，仅使用在1956运行SIoT模板时。\n客户端ID不可重复，建议由字母、数字和下划线组成，并且应以字母或下划线开头。\n服务器IP默认为：192.168.5.1';
Blockly.Msg.MPYTHON_SIOT_TEMP_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_SIOT_TEMP_RECV_MESSAGE0 = "当收到来自主题%1组件%2的消息时";
Blockly.Msg.MPYTHON_SIOT_TEMP_RECV_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT_TEMP_RECV_HELPURL = '';

Blockly.Msg.MPYTHON_SIOT_TEMP_RECV_MESSAGE_MESSAGE0 = "来自1956 SIOT模板的消息";
Blockly.Msg.MPYTHON_SIOT_TEMP_RECV_MESSAGE_TOOLTIP = '消息为字符串str类型';
Blockly.Msg.MPYTHON_SIOT_TEMP_RECV_MESSAGE_HELPURL = '';
// 新版1956 end

// 2023.5新增乐动模块
// PM2.5 GP2Y1014AU
Blockly.Msg.MPYTHON_BLUEBIT_PM25_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_PM25_INIT_MESSAGE0 = '初始化PM2.5模块（P0,P1）';
Blockly.Msg.MPYTHON_BLUEBIT_PM25_INIT_TOOLTIP = '只能使用P0,P1引脚';

Blockly.Msg.MPYTHON_BLUEBIT_PM25_MG_MESSAGE0 = 'PM2.5 (ug/m3)';
Blockly.Msg.MPYTHON_BLUEBIT_PM25_MG_TOOLTIP = '单位ug/m3，0-100 (优)，100-200 (良)，200-275 (轻度污染)，275-400 (中度污染)，400+ (重度污染)';

// 北斗卫星模块 
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_INIT_MESSAGE0 = '初始化 北斗卫星模块 TX引脚 %1 RX引脚 %2 串口号%3';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_INIT_TOOLTIP = '因为卫星模块是室外定位的，室内没有卫星信号。\n首次定位需要下载卫星数据，定位时间：32 秒也, 有可能是几分钟，要看具体环境而定。\n全球卫星导航系统（Global Navigation Satellite System，GNSS），是一种能在地球表面或近地空间的任何地点，为用户提供全天候的三维坐标、速度以及时间信息的空基无线电导航定位系统。中国北斗导航系统（BDS3），历史悠久的美国卫星都属于GNSS的一种。';

Blockly.Msg.new1956_BLUEBIT_ATGM336H_INIT_MESSAGE0 = '初始化 北斗卫星模块 串口：%1';

Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_Parese_MESSAGE0 = '读取处理卫星数据信息';

Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_DataIsUseful_MESSAGE0 = '是否有有效数据';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_DataIsUseful_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_DATA_MESSAGE0 = '卫星定位数据：%1';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_DATA_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_Date = '日期';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_UTC_Time = 'UTC时间';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_Beijing_Time = '北京时间';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_N_S = '纬度信息';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_E_W = '经度信息';
Blockly.Msg.MPYTHON_BLUEBIT_ATGM336H_speed_to_groud_kh = '卫星对地航速 km/h';

//心率血氧模块
Blockly.Msg.MPYTHON_BLUEBIT_max30102_INIT_MESSAGE0 = 'I2C心率血氧模块初始化';
Blockly.Msg.MPYTHON_BLUEBIT_max30102_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_max30102_measurement_MESSAGE0 = '启动测量（30-60秒）';

Blockly.Msg.MPYTHON_BLUEBIT_max30102_result_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_BLUEBIT_max30102_result_TOOLTIP = '心率 单位：次/分（BPM）,血氧饱和度：%';

Blockly.Msg.MPYTHON_BLUEBIT_max30102_heart_rate_MESSAGE0 = '心率BPM';
Blockly.Msg.MPYTHON_BLUEBIT_max30102_spo_MESSAGE0 = '血氧饱和度%';

// email smtp
Blockly.Msg.MPYTHON_email_send_MESSAGE0 = '使用SMTP协议客户端发送邮件%8 发送端邮箱地址:%1 发送端邮箱密码:%2 接收端邮箱地址:%3 邮件主题：%4 邮件内容：%5 发送端邮件服务器:%6 %7';
Blockly.Msg.MPYTHON_email_send_TOOLTIP = '发送端支持微软邮箱(Microsoft365,Outlook,Hotmail), QQ邮箱, 网易126、163邮箱';
Blockly.Msg.MPYTHON_email_SMTP_SERVER_MESSAGE0 = '发送邮件服务器';
Blockly.Msg.MPYTHON_email_SMTP_SERVER_PORT_MESSAGE0 = '发送邮件服务器端口';

Blockly.Msg.MPYTHON_email_SMTP_SERVER_ms_MESSAGE0 = '微软邮箱邮件服务器';
Blockly.Msg.MPYTHON_email_SMTP_SERVER_qq_MESSAGE0 = 'qq邮箱邮件服务器';
Blockly.Msg.MPYTHON_email_SMTP_SERVER_126_MESSAGE0 = '网易126邮箱邮件服务器';
Blockly.Msg.MPYTHON_email_SMTP_SERVER_163_MESSAGE0 = '网易163邮箱邮件服务器';

Blockly.Msg.MPYTHON_email_SMTP_SERVER_qq_PORT_MESSAGE0 = 'qq邮箱邮件服务器端口';
Blockly.Msg.MPYTHON_email_SMTP_SERVER_ms_PORT_MESSAGE0 = '微软邮箱邮件服务器端口';

Blockly.Msg.MPYTHON_email_DEFAULT_EMAIL_MESSAGE0 = '默认发送邮箱';
Blockly.Msg.MPYTHON_email_DEFAULT_PASSWORD_MESSAGE0 = '默认发送邮箱密码';

// 新1956 AI start
Blockly.Msg.NEW1956_AI_FACE_DETECT = '人脸检测';
Blockly.Msg.NEW1956_AI_FACE_IDENTIFY = '人脸识别';
Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_MODE = '人脸识别(录入模型)';
Blockly.Msg.NEW1956_AI_NUMBER_IDENTIFY = '数字识别';

Blockly.Msg.NEW1956_AI_START_MESSAGE0 = "开始执行";
Blockly.Msg.NEW1956_AI_START_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_START_HELPURL = '';

Blockly.Msg.NEW1956_AI_SET_LABEL_MESSAGE0 = "设置人脸标签 %1";
Blockly.Msg.NEW1956_AI_SET_LABEL_TOOLTIP = '标签对应训练时候的ID顺序，且勿用中文和特殊字符';
Blockly.Msg.NEW1956_AI_SET_LABEL_HELPURL = '';

Blockly.Msg.NEW1956_AI_SET_IMG_MESSAGE0 = "设置待识别图片路径 %1";
Blockly.Msg.NEW1956_AI_SET_IMG_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_SET_IMG_HELPURL = '';

Blockly.Msg.NEW1956_AI_DISCONTINUE_MESSAGE0 = "结束识别";
Blockly.Msg.NEW1956_AI_DISCONTINUE_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_DISCONTINUE_HELPURL = '';


Blockly.Msg.NEW1956_AI_FACE_NUM = '人脸数量';
Blockly.Msg.NEW1956_AI_FACE_ID = '人脸ID';
Blockly.Msg.NEW1956_AI_FACE_LABEL = '人脸标签';
Blockly.Msg.NEW1956_AI_FACE_LEVEL = '置信度';
Blockly.Msg.NEW1956_AI_FACE_XYWH = '位置和大小';

Blockly.Msg.NEW1956_AI_SET_LABELS = '标签：'

Blockly.Msg.NEW1956_AI_TRAIN_MODEL_CAMERA = '摄像头';
Blockly.Msg.NEW1956_AI_TRAIN_MODEL_FILE = '图片';

Blockly.Msg.NEW1956_AI_SET_LOAD_PATH_MESSAGE0 = "设置载入模型的路径 %1";
Blockly.Msg.NEW1956_AI_SET_LOAD_PATH_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_SET_LOAD_PATH_HELPURL = '';

Blockly.Msg.NEW1956_AI_SET_SAVE_PATH_MESSAGE0 = "设置保存模型的路径 %1";
Blockly.Msg.NEW1956_AI_SET_SAVE_PATH_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_SET_SAVE_PATH_HELPURL = '';


Blockly.Msg.NEW1956_AI_FACE_DETECT_INIT_MESSAGE0 = "初始化人脸检测 %1";
Blockly.Msg.NEW1956_AI_FACE_DETECT_INIT_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_FACE_DETECT_INIT_HELPURL = '';

Blockly.Msg.NEW1956_AI_FACE_DETECT_GET_MESSAGE0 = "获取人脸检测结果: %1";
Blockly.Msg.NEW1956_AI_FACE_DETECT_GET_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_FACE_DETECT_GET_HELPURL = '';

Blockly.Msg.NEW1956_AI_TYPE_TRAIN_IDENTIFY = '训练+识别(默认)';
Blockly.Msg.NEW1956_AI_TYPE_TRAIN = '仅训练';
Blockly.Msg.NEW1956_AI_TYPE_IDENTIFY = '仅识别';

Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_INIT_MESSAGE0 = "初始化人脸识别%5 识别阈值 %1 模式为 %2 %3 设备 %4";
Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_INIT_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_INIT_HELPURL = '';

Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_GET_MESSAGE0 = "获取人脸识别结果: %1";
Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_GET_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_FACE_IDENTIFY_GET_HELPURL = '';


Blockly.Msg.NEW1956_AI_NUMBER_IDENTIFY_INIT_MESSAGE0 = "初始化手写数字识别%4 模式为 %1 %2 设备 %3";
Blockly.Msg.NEW1956_AI_NUMBER_IDENTIFY_INIT_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_NUMBER_IDENTIFY_INIT_HELPURL = '';

Blockly.Msg.NEW1956_AI_NUMBER_NUM = '数字结果';
Blockly.Msg.NEW1956_AI_NUMBER_XYWH = '位置和大小';

Blockly.Msg.NEW1956_AI_NUMBER_DETECT_GET_MESSAGE0 = "获取数字识别结果";
Blockly.Msg.NEW1956_AI_NUMBER_DETECT_GET_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_NUMBER_DETECT_GET_HELPURL = '';

Blockly.Msg.NEW1956_AI_NUMBER_IS_INT = '数字';
Blockly.Msg.NEW1956_AI_NUMBER_IS_LIST = '列表';

Blockly.Msg.NEW1956_AI_NUMBER_DETECT_RES_TYPE_MESSAGE0 = "返回结果 %1 类型为 %2";
Blockly.Msg.NEW1956_AI_NUMBER_DETECT_RES_TYPE_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_NUMBER_DETECT_RES_TYPE_HELPURL = '';

Blockly.Msg.NEW1956_AI_OBJECT_IDENTIFY_INIT_MESSAGE0 = "初始化物体识别 设备 %1";
Blockly.Msg.NEW1956_AI_OBJECT_IDENTIFY_INIT_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_OBJECT_IDENTIFY_INIT_HELPURL = '';

Blockly.Msg.NEW1956_AI_OBJECT_LABEL = '物体名称';
Blockly.Msg.NEW1956_AI_OBJECT_ID = '物体ID';
Blockly.Msg.NEW1956_AI_OBJECT_LEVEL = '置信度';

Blockly.Msg.NEW1956_AI_OBJECT_IDENTIFY_GET_MESSAGE0 = "获取物体识别结果: %1";
Blockly.Msg.NEW1956_AI_OBJECT_IDENTIFY_GET_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_OBJECT_IDENTIFY_GET_HELPURL = '';


Blockly.Msg.NEW1956_AI_QRCODE_INIT_MESSAGE0 = "初始化二维码识别 %1";
Blockly.Msg.NEW1956_AI_QRCODE_INIT_TOOLTIP = '可识别二维码、条形码等';
Blockly.Msg.NEW1956_AI_QRCODE_INIT_HELPURL = '';

Blockly.Msg.NEW1956_AI_QRCODE_INFO_MESSAGE0 = "二维码信息";
Blockly.Msg.NEW1956_AI_QRCODE_INFO_TOOLTIP = '可识别二维码、条形码等';
Blockly.Msg.NEW1956_AI_QRCODE_INFO_HELPURL = '';

Blockly.Msg.NEW1956_AI_COLOR_INIT_MESSAGE0 = "初始化颜色识别 目标颜色 %1 设备 %2";
Blockly.Msg.NEW1956_AI_COLOR_INIT_TOOLTIP = 'HSV色彩空间';
Blockly.Msg.NEW1956_AI_COLOR_INIT_HELPURL = '';

Blockly.Msg.NEW1956_AI_COLOR_INFO_MESSAGE0 = "%1";
Blockly.Msg.NEW1956_AI_COLOR_INFO_TOOLTIP = '';
Blockly.Msg.NEW1956_AI_COLOR_INFO_HELPURL = '';

Blockly.Msg.NEW1956_AI_COLOR_INFO_flag = '是否识别到颜色';
Blockly.Msg.NEW1956_AI_COLOR_INFO_area = '颜色区域面积';
Blockly.Msg.NEW1956_AI_COLOR_INFO_box = '颜色区域矩形边界坐标';

Blockly.Msg.NEW1956_AI_COLOR_RED = '红色';
Blockly.Msg.NEW1956_AI_COLOR_GREEN = '绿色';
Blockly.Msg.NEW1956_AI_COLOR_BLUE = '蓝色';
Blockly.Msg.NEW1956_AI_COLOR_PURPLE = '紫色';
Blockly.Msg.NEW1956_AI_COLOR_ORANGE = '橙色';
Blockly.Msg.NEW1956_AI_COLOR_CYAN = '青色';
Blockly.Msg.NEW1956_AI_COLOR_YELLOW = '黄色';
Blockly.Msg.NEW1956_AI_COLOR_BLACK = '黑色';

// 新1956 AI end

// OpenCV start
Blockly.Msg.OPENCV_READ_IMG_MESSAGE0 = "读取图片 文件内容 %2 格式为 %3 并返回 %1";
Blockly.Msg.OPENCV_READ_IMG_TOOLTIP = '';
Blockly.Msg.OPENCV_READ_IMG_HELPURL = '';

Blockly.Msg.OPENCV_IMREAD_UNCHANGED = '原图';
Blockly.Msg.OPENCV_IMREAD_GRAYSCALE = '灰度图';
Blockly.Msg.OPENCV_IMREAD_COLOR = 'RGB图';

Blockly.Msg.OPENCV_SAVE_IMG_MESSAGE0 = "保存图片 %1 到 %2";
Blockly.Msg.OPENCV_SAVE_IMG_TOOLTIP = '';
Blockly.Msg.OPENCV_SAVE_IMG_HELPURL = '';

Blockly.Msg.OPENCV_SHOW_IMG_MESSAGE0 = "显示图片 %1";
Blockly.Msg.OPENCV_SHOW_IMG_TOOLTIP = '';
Blockly.Msg.OPENCV_SHOW_IMG_HELPURL = '';

Blockly.Msg.OPENCV_IMG_IMENCODE_MESSAGE0 = "将 %1 图片 %2 写入内存缓冲区 %3 并返回是否成功写入 %4";
Blockly.Msg.OPENCV_IMG_IMENCODE_TOOLTIP = '';
Blockly.Msg.OPENCV_IMG_IMENCODE_HELPURL = '';

Blockly.Msg.OPENCV_IMG_IMDECODE_MESSAGE0 = "以 %1 的模式读取 %2 并返回 %3";
Blockly.Msg.OPENCV_IMG_IMDECODE_TOOLTIP = '';
Blockly.Msg.OPENCV_IMG_IMDECODE_HELPURL = '';

Blockly.Msg.OPENCV_IMG_SHAPE_MESSAGE0 = "获取图片 %1 的行数、列数和通道数";
Blockly.Msg.OPENCV_IMG_SHAPE_TOOLTIP = '';
Blockly.Msg.OPENCV_IMG_SHAPE_HELPURL = '';

Blockly.Msg.OPENCV_IMG_SIZE_MESSAGE0 = "获取图片 %1 的大小";
Blockly.Msg.OPENCV_IMG_SIZE_TOOLTIP = '';
Blockly.Msg.OPENCV_IMG_SIZE_HELPURL = '';

Blockly.Msg.OPENCV_IMREAD_BORDER_REPLICATE = '复刻法';
Blockly.Msg.OPENCV_IMREAD_BORDER_REFLECT = '反射法';
Blockly.Msg.OPENCV_IMREAD_BORDER_REFLECT101 = '反射法101';
Blockly.Msg.OPENCV_IMREAD_BORDER_WRAP = '外包装法';
Blockly.Msg.OPENCV_IMREAD_BORDER_CONSTANT = '常量法';

Blockly.Msg.OPENCV_IMG_MAKE_BORDER_MESSAGE0 = "设置图片 %1 上边框%2 下边框 %3 左边框 %4 右边框 %5 边框类型为 %6 %8返回 %7";
Blockly.Msg.OPENCV_IMG_MAKE_BORDER_TOOLTIP = '';
Blockly.Msg.OPENCV_IMG_MAKE_BORDER_HELPURL = '';

Blockly.Msg.OPENCV_IMREAD_COLOR_BGR2BGRA = '将 Alpha 通道添加到 BGR';
Blockly.Msg.OPENCV_IMREAD_COLOR_RGB2RGBA = '将 Alpha 通道添加到 RGB';
Blockly.Msg.OPENCV_IMREAD_COLOR_BGRA2BGR = '从 BGR 图像中删除 Alpha 通道';
Blockly.Msg.OPENCV_IMREAD_COLOR_RGBA2RGB = '从 RGB 图像中删除 Alpha 通道';
Blockly.Msg.OPENCV_IMREAD_COLOR_BGR2RGBA = '在 BGR 和 RGB 颜色空间之间转换';
Blockly.Msg.OPENCV_IMREAD_COLOR_RGB2BGRA = '在 RGB 和 BGR 颜色空间之间转换';
Blockly.Msg.OPENCV_IMREAD_COLOR_BGR2GRAY = '在 BGR 和 灰度 之间转换';
Blockly.Msg.OPENCV_IMREAD_COLOR_RGB2GRAY = '在 RGB 和 灰度 之间转换';

Blockly.Msg.OPENCV_IMG_CVT_COLOR_MESSAGE0 = "图片 %1 转换色彩空间模式 %2 并返回 %3";
Blockly.Msg.OPENCV_IMG_CVT_COLOR_TOOLTIP = '';
Blockly.Msg.OPENCV_IMG_CVT_COLOR_HELPURL = '';

Blockly.Msg.OPENCV_CAP_INIT_MESSAGE0 = "创建视频对象 %1";
Blockly.Msg.OPENCV_CAP_INIT_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_INIT_HELPURL = '';

Blockly.Msg.OPENCV_CAP_OPEN_0_MESSAGE0 = "使用视频对象 %1 打开摄像头 画面宽高为 %2";
Blockly.Msg.OPENCV_CAP_OPEN_0_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_OPEN_0_HELPURL = '';

Blockly.Msg.OPENCV_CAP_OPEN_FILE_MESSAGE0 = "使用视频对象 %1 打开视频文件 %2 画面宽高为 %3";
Blockly.Msg.OPENCV_CAP_OPEN_FILE_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_OPEN_FILE_HELPURL = '';

Blockly.Msg.OPENCV_CAP_IS_OPEN_MESSAGE0 = "视频对象 %1 是否初始化完成";
Blockly.Msg.OPENCV_CAP_IS_OPEN_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_IS_OPEN_HELPURL = '';

Blockly.Msg.OPENCV_CAP_RELEASE_MESSAGE0 = "释放视频对象 %1";
Blockly.Msg.OPENCV_CAP_RELEASE_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_RELEASE_HELPURL = '';
Blockly.Msg.OPENCV_CAP_OPEN_FILE_HELPURL = '';

Blockly.Msg.OPENCV_CAP_GRAB_MESSAGE0 = "视频对象 %1 是否有下一帧";
Blockly.Msg.OPENCV_CAP_GRAB_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_GRAB_HELPURL = '';

Blockly.Msg.OPENCV_CAP_READ_MESSAGE0 = "从视频对象 %1 中抓取下一帧 %2 以及状态 %3";
Blockly.Msg.OPENCV_CAP_READ_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_READ_HELPURL = '';

Blockly.Msg.OPENCV_CAP_PROP_POS_MSEC = '当前视频播放位置';
Blockly.Msg.OPENCV_CAP_PROP_FRAME_WIDTH = '当前视频宽度';
Blockly.Msg.OPENCV_CAP_PROP_FRAME_HEIGHT = '当前视频高度';
Blockly.Msg.OPENCV_CAP_PROP_FPS = '当前视频帧率';
Blockly.Msg.OPENCV_CAP_PROP_FRAME_COUNT = '当前视频帧数';

Blockly.Msg.OPENCV_CAP_GET_ATTR_MESSAGE0 = "获取视频对象 %1 属性 %2 的值";
Blockly.Msg.OPENCV_CAP_GET_ATTR_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_GET_ATTR_HELPURL = '';

Blockly.Msg.OPENCV_CAP_SET_ATTR_MESSAGE0 = "设置视频对象 %1 属性 %2 的值为 %3";
Blockly.Msg.OPENCV_CAP_SET_ATTR_TOOLTIP = '';
Blockly.Msg.OPENCV_CAP_SET_ATTR_HELPURL = '';

Blockly.Msg.OPENCV_CASCADE_INIT_MESSAGE0 = "创建分类器 %1";
Blockly.Msg.OPENCV_CASCADE_INIT_TOOLTIP = '';
Blockly.Msg.OPENCV_CASCADE_INIT_HELPURL = '';

Blockly.Msg.OPENCV_CASCADE_haarcascade_frontalface_default = '人脸(默认)数据模型';

Blockly.Msg.OPENCV_CASCADE_LOAD_MESSAGE0 = "分类器 %1 加载文件 %2";
Blockly.Msg.OPENCV_CASCADE_LOAD_TOOLTIP = '';
Blockly.Msg.OPENCV_CASCADE_LOAD_HELPURL = '';

Blockly.Msg.OPENCV_CASCADE_IS_OK_MESSAGE0 = "分类器 %1 是否加载完成";
Blockly.Msg.OPENCV_CASCADE_IS_OK_TOOLTIP = '';
Blockly.Msg.OPENCV_CASCADE_IS_OK_HELPURL = '';

Blockly.Msg.OPENCV_CASCADE_DETECT_FN = '常用检测方法';
Blockly.Msg.OPENCV_CASCADE_DETECT_FN2 = '检测方法2';
Blockly.Msg.OPENCV_CASCADE_DETECT_FN3 = '检测方法3';

Blockly.Msg.OPENCV_CASCADE_DETECT_MESSAGE0 = "使用分类器 %1 通过%2 检测%3 设置缩放比例%4 构成目标的最小相邻个数%5 方法3额外参数输出%6%8并返回 %7";
Blockly.Msg.OPENCV_CASCADE_DETECT_TOOLTIP = '';
Blockly.Msg.OPENCV_CASCADE_DETECT_HELPURL = '';

Blockly.Msg.OPENCV_MAPPING_FILLED = '填充线'
Blockly.Msg.OPENCV_MAPPING_LINE_4 = '4连线'
Blockly.Msg.OPENCV_MAPPING_LINE_8 = '8连线'
Blockly.Msg.OPENCV_MAPPING_LINE_AA = '抗锯齿线'

Blockly.Msg.OPENCV_MAPPING_MAKER_BGIMG_MESSAGE0 = "创建黑色背景图片 %1";
Blockly.Msg.OPENCV_MAPPING_MAKER_BGIMG_TOOLTIP = '';
Blockly.Msg.OPENCV_MAPPING_MAKER_BGIMG_HELPURL = '';

Blockly.Msg.OPENCV_MAPPING_LINE_MESSAGE0 = "在图片 %1 绘制一条线 %6 起始点坐标 %2 结束点坐标 %3 线条颜色 %4%7线条粗细 %5";
Blockly.Msg.OPENCV_MAPPING_LINE_TOOLTIP = '';
Blockly.Msg.OPENCV_MAPPING_LINE_HELPURL = '';

Blockly.Msg.OPENCV_MAPPING_RECT_HOLLOW = '空心矩形'
Blockly.Msg.OPENCV_MAPPING_RECT_FILL = '实心矩形'

Blockly.Msg.OPENCV_MAPPING_RECT_MESSAGE0 = "在图片 %1 绘制一个%2 %8 左上角坐标点 %3 宽度为 %4 高度为 %5 边框颜色 %6%9边框线粗细 %7";
Blockly.Msg.OPENCV_MAPPING_RECT_TOOLTIP = '';
Blockly.Msg.OPENCV_MAPPING_RECT_HELPURL = '';

Blockly.Msg.OPENCV_MAPPING_CIRCLE_HOLLOW = '空心圆'
Blockly.Msg.OPENCV_MAPPING_CIRCLE_FILL = '实心圆'

Blockly.Msg.OPENCV_MAPPING_CIRCLE_MESSAGE0 = "在图片 %1 绘制一个%2 %7 圆心坐标点 %3 半径为 %4 边框颜色 %5%8边框线粗细 %6";
Blockly.Msg.OPENCV_MAPPING_CIRCLE_TOOLTIP = '';
Blockly.Msg.OPENCV_MAPPING_CIRCLE_HELPURL = '';

Blockly.Msg.opencv_image_flags_writeable_MESSAGE0 = '设置图像%1为%2'
Blockly.Msg.opencv_image_flags_writeable_TOOLTIP = '可以选择将图像标记为不可写入，可提高性能，'

Blockly.Msg.OPENCV_IMAGE_WRITE_TRUE= '可写入'
Blockly.Msg.OPENCV_IMAGE_WRITE_FALSE = '不可写入'

Blockly.Msg.opencv_image_flip_MESSAGE0 = '设置图像%1为%2'
Blockly.Msg.opencv_image_flip_TOOLTIP = '图像的翻转 (镜像)，控制参数，整型（int），flipCode>0 水平翻转，flipCode=0 垂直翻转，flipCode<0 水平和垂直翻转'


// OpenCV end

// OpenBlock
Blockly.Msg.MPYTHON_OPENBLOCK_SET_VAR_MESSAGE0 = "向OpenBlock Iot服务器发送变量%3 请求网址%1 变量名称%2";
Blockly.Msg.MPYTHON_OPENBLOCK_SET_VAR_TOOLTIP = '';
Blockly.Msg.MPYTHON_OPENBLOCK_SET_VAR_HELPURL = '';

Blockly.Msg.MPYTHON_OPENBLOCK_GET_VAR_DATA_MESSAGE0 = "从OpenBlock Iot服务器读取变量数据%3 请求网址%1 变量名称%2";
Blockly.Msg.MPYTHON_OPENBLOCK_GET_VAR_DATA_TOOLTIP = '';
Blockly.Msg.MPYTHON_OPENBLOCK_GET_VAR_DATA_HELPURL = '';

Blockly.Msg.MPYTHON_OPENBLOCK_CLEAR_MESSAGE0 = "清除OpenBlock Iot服务器数据 请求网址%1";
Blockly.Msg.MPYTHON_OPENBLOCK_CLEAR_TOOLTIP = '';
Blockly.Msg.MPYTHON_OPENBLOCK_CLEAR_HELPURL = '';

// 1956NTP同步
Blockly.Msg._1956_NTP_time_synchronization_MESSAGE0 = "NTP时间同步";
Blockly.Msg._1956_NTP_time_synchronization_TOOLTIP = "连接网络后使用NTP服务器同步时间";
Blockly.Msg._1956_NTP_time_synchronization_HELPURL = "";

// 获取百度热搜榜
Blockly.Msg._1956_baidu_news_MESSAGE0 = "获取百度热搜";
Blockly.Msg._1956_baidu_news_TOOLTIP = "获取百度热搜榜，置顶、1-5新闻";
Blockly.Msg._1956_baidu_news_HELPUR = "";

Blockly.Msg._1956_baidu_news_result_STICKY = "置顶";
Blockly.Msg._1956_baidu_news_result_ARTICLE1 = "第一条";
Blockly.Msg._1956_baidu_news_result_ARTICLE2 = "第二条";
Blockly.Msg._1956_baidu_news_result_ARTICLE3 = "第三条";
Blockly.Msg._1956_baidu_news_result_ARTICLE4 = "第四条";
Blockly.Msg._1956_baidu_news_result_ARTICLE5 = "第五条";
Blockly.Msg._1956_baidu_news_result_MESSAGE0 = "新闻%1";
Blockly.Msg._1956_baidu_news_result_TOOLTIP = "";
Blockly.Msg._1956_baidu_news_result_HELPUR = "";

Blockly.Msg.MPYTHON_1956_SHAKE_DETECTOR_MESSAGE0 = '当1956 %1 时';

// 语音合成模块
Blockly.Msg.MPYTHON_SpeechSynthesis_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_SpeechSynthesis_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_SpeechSynthesis_INIT_MESSAGE0 = '初始化 语音合成模块 TX引脚 %1 RX引脚 %2 串口号%3';
Blockly.Msg._1956_SpeechSynthesis_INIT_MESSAGE0 = '初始化 语音合成模块 串口：%1';

Blockly.Msg.MPYTHON_SpeechSynthesis_play_TOOLTIP = '';
Blockly.Msg.MPYTHON_SpeechSynthesis_play_MESSAGE0 = '合成音频并播放：%1';

Blockly.Msg.MPYTHON_SpeechSynthesis_release_TOOLTIP = '释放资源后，合成音频需重新初始化';
Blockly.Msg.MPYTHON_SpeechSynthesis_release_MESSAGE0 = '释放资源';

// 天问 语音识别模块
Blockly.Msg.ledong_speech_recognition_init_HELPURL = '';
Blockly.Msg.ledong_speech_recognition_init_MESSAGE0 = '初始化 语音识别模块 TX引脚 %1 RX引脚 %2 串口号%3';
Blockly.Msg.ledong_speech_recognition_init_TOOLTIP = DEVICE + '的 tx 引脚连接模块的 RXI 引脚,rx 引脚连接模块的 TXI 引脚；串口号默认为1,非串口冲突则无需改变';
Blockly.Msg._1956_ledong_speech_recognition_init_MESSAGE0 = '初始化 语音识别模块 串口：%1';

Blockly.Msg.ledong_speech_recognition_any_MESSAGE0 = '是否识别到了';

Blockly.Msg.ledong_speech_recognition_result_MESSAGE0 = '识别词id';

Blockly.Msg.ledong_speech_recognition_default_word_MESSAGE0 = '%1';

Blockly.Msg.MPYTHON_IdentifyingWord_1 = '开灯';
Blockly.Msg.MPYTHON_IdentifyingWord_2 = '打开灯';
Blockly.Msg.MPYTHON_IdentifyingWord_3 = '关灯'; 
Blockly.Msg.MPYTHON_IdentifyingWord_4 = '关闭灯';
Blockly.Msg.MPYTHON_IdentifyingWord_5 = '打开垃圾桶';
Blockly.Msg.MPYTHON_IdentifyingWord_6 = '关闭垃圾桶';
Blockly.Msg.MPYTHON_IdentifyingWord_7 = '晾衣架上升';
Blockly.Msg.MPYTHON_IdentifyingWord_8 = '晾衣架下降';
Blockly.Msg.MPYTHON_IdentifyingWord_9 = '打开氛围灯';
Blockly.Msg.MPYTHON_IdentifyingWord_10 = '关闭氛围灯';

Blockly.Msg.MPYTHON_IdentifyingWord_11 = '锁门';
Blockly.Msg.MPYTHON_IdentifyingWord_12 = '解锁';
Blockly.Msg.MPYTHON_IdentifyingWord_13 = '打开风扇';
Blockly.Msg.MPYTHON_IdentifyingWord_14 = '关闭风扇';
Blockly.Msg.MPYTHON_IdentifyingWord_15 = '打开摇头';
Blockly.Msg.MPYTHON_IdentifyingWord_16 = '关闭摇头';
Blockly.Msg.MPYTHON_IdentifyingWord_17 = '风速调大';
Blockly.Msg.MPYTHON_IdentifyingWord_18 = '风速调小';
Blockly.Msg.MPYTHON_IdentifyingWord_19 = '播放音乐';
Blockly.Msg.MPYTHON_IdentifyingWord_20 = '关闭音乐';
Blockly.Msg.MPYTHON_IdentifyingWord_21 = '上一首';
Blockly.Msg.MPYTHON_IdentifyingWord_22 = '下一首';
Blockly.Msg.MPYTHON_IdentifyingWord_23 = '暂停播放';
Blockly.Msg.MPYTHON_IdentifyingWord_24 = '继续播放';
Blockly.Msg.MPYTHON_IdentifyingWord_25 = '音量调高';
Blockly.Msg.MPYTHON_IdentifyingWord_26 = '音量调低';
Blockly.Msg.MPYTHON_IdentifyingWord_27 = '你好';
Blockly.Msg.MPYTHON_IdentifyingWord_28 = '开门';
Blockly.Msg.MPYTHON_IdentifyingWord_29 = '关门';
Blockly.Msg.MPYTHON_IdentifyingWord_30 = '打开窗帘';
Blockly.Msg.MPYTHON_IdentifyingWord_31 = '关闭窗帘';
Blockly.Msg.MPYTHON_IdentifyingWord_32 = '打开天窗';
Blockly.Msg.MPYTHON_IdentifyingWord_33 = '关闭天窗';
Blockly.Msg.MPYTHON_IdentifyingWord_34 = '打开车窗';
Blockly.Msg.MPYTHON_IdentifyingWord_35 = '关闭车窗';
Blockly.Msg.MPYTHON_IdentifyingWord_36 = '打开按摩';
Blockly.Msg.MPYTHON_IdentifyingWord_37 = '停止按摩';
Blockly.Msg.MPYTHON_IdentifyingWord_38 = '打开后备箱';
Blockly.Msg.MPYTHON_IdentifyingWord_39 = '关闭后备箱';
Blockly.Msg.MPYTHON_IdentifyingWord_40 = '你在哪里';
Blockly.Msg.MPYTHON_IdentifyingWord_41 = '打开PM2.5';
Blockly.Msg.MPYTHON_IdentifyingWord_42 = '关闭PM2.5';
Blockly.Msg.MPYTHON_IdentifyingWord_43 = '深圳天气怎么样';
Blockly.Msg.MPYTHON_IdentifyingWord_44 = '现在几点了';
Blockly.Msg.MPYTHON_IdentifyingWord_45 = '查询天气';
Blockly.Msg.MPYTHON_IdentifyingWord_46 = '打开闹钟';
Blockly.Msg.MPYTHON_IdentifyingWord_47 = '关闭闹钟';
Blockly.Msg.MPYTHON_IdentifyingWord_48 = '打开游戏';
Blockly.Msg.MPYTHON_IdentifyingWord_49 = '关闭游戏';
Blockly.Msg.MPYTHON_IdentifyingWord_50 = '打开人脸识别';
Blockly.Msg.MPYTHON_IdentifyingWord_51 = '关闭人脸识别';
Blockly.Msg.MPYTHON_IdentifyingWord_52 = '打开心率监测';
Blockly.Msg.MPYTHON_IdentifyingWord_53 = '关闭心率监测';
Blockly.Msg.MPYTHON_IdentifyingWord_54 = '目前的位置';
Blockly.Msg.MPYTHON_IdentifyingWord_55 = '开始清扫';
Blockly.Msg.MPYTHON_IdentifyingWord_56 = '停止清扫';
Blockly.Msg.MPYTHON_IdentifyingWord_57 = '开始回充';
Blockly.Msg.MPYTHON_IdentifyingWord_58 = '前进';
Blockly.Msg.MPYTHON_IdentifyingWord_59 = '后退';
Blockly.Msg.MPYTHON_IdentifyingWord_60 = '左转';
Blockly.Msg.MPYTHON_IdentifyingWord_61 = '右转';
Blockly.Msg.MPYTHON_IdentifyingWord_62 = '停止';
Blockly.Msg.MPYTHON_IdentifyingWord_63 = '转圈';
Blockly.Msg.MPYTHON_IdentifyingWord_64 = '跳舞';
Blockly.Msg.MPYTHON_IdentifyingWord_65 = '调暗灯光';
Blockly.Msg.MPYTHON_IdentifyingWord_66 = '调亮灯光';
Blockly.Msg.MPYTHON_IdentifyingWord_67 = '人脸识别';
Blockly.Msg.MPYTHON_IdentifyingWord_68 = '垃圾识别';
Blockly.Msg.MPYTHON_IdentifyingWord_69 = '识别颜色';
Blockly.Msg.MPYTHON_IdentifyingWord_70 = '自动驾驶';
Blockly.Msg.MPYTHON_IdentifyingWord_71 = '手动驾驶';
Blockly.Msg.MPYTHON_IdentifyingWord_72 = '识别行人';
Blockly.Msg.MPYTHON_IdentifyingWord_73 = '额度播报';


// 1956 MediaPipe
Blockly.Msg.MediaPipe_import_mp_drawing_MESSAGE0 = "初始化MediaPipe绘图工具及样式";
Blockly.Msg.MediaPipe_import_mp_drawing_TOOLTIP = "";
Blockly.Msg.MediaPipe_import_mp_drawing_HELPUR = "";

Blockly.Msg.MediaPipe_init_mp_face_detection_FaceDetection_MESSAGE0 = "初始化人脸检测器";
Blockly.Msg.MediaPipe_init_mp_face_detection_FaceDetection_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_face_detection_process_MESSAGE0 = "把图像%1传入检测模型处理";
Blockly.Msg.MediaPipe_mp_face_detection_process_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_face_detection_detections_MESSAGE0 = "检测到的人脸集合";
Blockly.Msg.MediaPipe_mp_face_detection_detections_TOOLTIP = "其中每个人脸都表示为一个检测原始消息，其中包含 人脸的概率、1 个边界框、6 个关键点（右眼、左眼、鼻尖、嘴巴中心、右耳、左耳）。边界框由 xmin 和 width (由图像宽度归一化为 [0, 1])以及 ymin 和 height (由图像高度归一化为 [0, 1])组成。每个关键点由 x 和 y 组成，分别通过图像宽度和高度归一化为 [0, 1]。";

Blockly.Msg.MediaPipe_mp_draw_detection_MESSAGE0 = "在图像%1绘制脸部关键点%2";
Blockly.Msg.MediaPipe_mp_draw_detection_TOOLTIP = "";

Blockly.Msg.MediaPipe_init_mp_hand_detection_Detection_MESSAGE0 = "初始化手部关键点检测器";
Blockly.Msg.MediaPipe_init_mp_hand_detection_Detection_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_hand_detection_process_MESSAGE0 = "把图像%1传入检测模型处理";
Blockly.Msg.MediaPipe_mp_hand_detection_process_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_draw_hand_landmarks_MESSAGE0 = "在图像%1绘制手部关键点及连线%2";
Blockly.Msg.MediaPipe_mp_draw_pose_landmarks_MESSAGE0 = "在图像%1绘制人体骨架关键点及连线%2";
Blockly.Msg.MediaPipe_mp_draw_landmarks_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_hand_landmarks_MESSAGE0 = "被检测手的21个关键点集合";
Blockly.Msg.MediaPipe_mp_hand_landmarks_TOOLTIP = "被检测/跟踪的手的集合，其中每只手被表示为21个手部地标的列表，每个地标由x、y和z组成。x和y分别由图像的宽度和高度归一化为[0.0,1.0]。Z表示地标深度，以手腕深度为原点，值越小，地标离相机越近。 z的大小与x的大小大致相同。";

Blockly.Msg.MediaPipe_mp_hand_multi_handedness_MESSAGE0 = "被检测手的信息";
Blockly.Msg.MediaPipe_mp_hand_multi_handedness_TOOLTIP = "包括label和score，label是字符串'Left'或'Right'，score是置信度[0.0,1.0]。Z表示地标深度，以手腕深度为原点，值越小，地标离相机越近。 z的大小与x的大小大致相同。";

Blockly.Msg.MediaPipe_init_mp_pose_detection_MESSAGE0 = "初始化人体骨架关键点检测器";
Blockly.Msg.MediaPipe_init_mp_pose_detection_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_pose_detection_process_MESSAGE0 = "把图像%1传入检测模型处理";
Blockly.Msg.MediaPipe_mp_pose_detection_process_TOOLTIP = "";

Blockly.Msg.MediaPipe_mp_pose_landmarks_MESSAGE0 = "人体骨架关键点集合";
Blockly.Msg.MediaPipe_mp_pose_landmarks_TOOLTIP = "被检测/跟踪的手的集合，其中每只手被表示为21个手部地标的列表，每个地标由x、y和z组成。x和y分别由图像的宽度和高度归一化为[0.0,1.0]。Z表示地标深度，以手腕深度为原点，值越小，地标离相机越近。 z的大小与x的大小大致相同。";


/* edu core start */
Blockly.Msg.EDUCORE_PIN_EVENT_CHANGE = "电平转换";
Blockly.Msg.EDUCORE_PIN_EVENT_RISING = "上升沿";
Blockly.Msg.EDUCORE_PIN_EVENT_FALLING = "下降沿";

Blockly.Msg.EDUCORE_PIN_EVENT_HAPPENED_MESSAGE0 = "当引脚 %1 %2";
Blockly.Msg.EDUCORE_PIN_EVENT_HAPPENED_TOOLTIP = "";
Blockly.Msg.EDUCORE_PIN_EVENT_HAPPENED_HELPURL = "";

Blockly.Msg.EDUCORE_OLED_PRINT_MESSAGE0 = "在显示屏显示字符串 %1";
Blockly.Msg.EDUCORE_OLED_PRINT_TOOLTIP = "支持换行符";
Blockly.Msg.EDUCORE_OLED_PRINT_HELPURL = "";

Blockly.Msg.EDUCORE_OLED_CLEAR_MESSAGE0 = "清除屏幕显示内容";
Blockly.Msg.EDUCORE_OLED_CLEAR_TOOLTIP = "";
Blockly.Msg.EDUCORE_OLED_CLEAR_HELPURL = "";

Blockly.Msg.EDUCORE_BUTTON_STATUS_MESSAGE0 = "按键 %1 被按下";
Blockly.Msg.EDUCORE_BUTTON_STATUS_TOOLTIP = "";
Blockly.Msg.EDUCORE_BUTTON_STATUS_HELPURL = "";

Blockly.Msg.EDUCORE_BUTTON_EVENT_HAPPENED_MESSAGE0 = "当按键 %1 被按下时";
Blockly.Msg.EDUCORE_BUTTON_EVENT_HAPPENED_TOOLTIP = "";
Blockly.Msg.EDUCORE_BUTTON_EVENT_HAPPENED_HELPURL = "";

Blockly.Msg.EDUCORE_ACCELEROMETER_GET_MESSAGE0 = "%1轴加速度";
Blockly.Msg.EDUCORE_ACCELEROMETER_GET_TOOLTIP = "";
Blockly.Msg.EDUCORE_ACCELEROMETER_GET_HELPURL = "";

Blockly.Msg.EDUCORE_ACCELEROMETER_SHAKE_MESSAGE0 = "被摇晃";
Blockly.Msg.EDUCORE_ACCELEROMETER_SHAKE_TOOLTIP = "";
Blockly.Msg.EDUCORE_ACCELEROMETER_SHAKE_HELPURL = "";

Blockly.Msg.EDUCORE_SPEAKER_INIT_MESSAGE0 = "初始化板载蜂鸣器 名称%1";
Blockly.Msg.EDUCORE_SPEAKER_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SPEAKER_INIT_HELPURL = "";

Blockly.Msg.EDUCORE_SPEAKER_OUTPUT_MESSAGE0 = "板载蜂鸣器%1输出 %2HZ 正弦波声音，持续 %3 毫秒";
Blockly.Msg.EDUCORE_SPEAKER_OUTPUT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SPEAKER_OUTPUT_HELPURL = "";

Blockly.Msg.EDUCORE_SPEAKER_STOP_MESSAGE0 = "板载蜂鸣器%1停止播放声音";
Blockly.Msg.EDUCORE_SPEAKER_STOP_TOOLTIP = "";
Blockly.Msg.EDUCORE_SPEAKER_STOP_HELPURL = "";

Blockly.Msg.EDUCORE_SPEAKER_INIT_PIN_MESSAGE0 = "初始化蜂鸣器%1 引脚%2";
Blockly.Msg.EDUCORE_SPEAKER_INIT_PIN_TOOLTIP = "";
Blockly.Msg.EDUCORE_SPEAKER_INIT_PIN_HELPURL = "";

Blockly.Msg.EDUCORE_SPEAKER_OUTPUT_PIN_MESSAGE0 = "蜂鸣器%1 输出 %2HZ 正弦波声音，持续 %3 毫秒";
Blockly.Msg.EDUCORE_SPEAKER_OUTPUT_PIN_TOOLTIP = "";
Blockly.Msg.EDUCORE_SPEAKER_OUTPUT_PIN_HELPURL = "";

Blockly.Msg.EDUCORE_SPEAKER_STOP_PIN_MESSAGE0 = "蜂鸣器%1 停止播放声音";
Blockly.Msg.EDUCORE_SPEAKER_STOP_PIN_TOOLTIP = "";
Blockly.Msg.EDUCORE_SPEAKER_STOP_PIN_HELPURL = "";


Blockly.Msg.EDUCORE_PARROT_PIN_MESSAGE0 = "初始化电机%1 in0%2 in1%3";
Blockly.Msg.EDUCORE_PARROT_PIN_TOOLTIP = "in0和in1引脚用于控制电机方向。";
Blockly.Msg.EDUCORE_PARROT_PIN_HELPURL = "";

Blockly.Msg.EDUCORE_PARROT_PIN_SET_SPEED_MESSAGE0 = "设置电机%1 速度 %2";
Blockly.Msg.EDUCORE_PARROT_PIN_SET_SPEED_TOOLTIP = "速度范围: -100 ~ 100，0表示停止，负数也表示反转，绝对值越大转速越快。";
Blockly.Msg.EDUCORE_PARROT_PIN_SET_SPEED_HELPURL = "";

Blockly.Msg.EDUCORE_PARROT_MESSAGE0 = "初始化电机%1 引脚%2";
Blockly.Msg.EDUCORE_PARROT_TOOLTIP = "";
Blockly.Msg.EDUCORE_PARROT_HELPURL = "";

Blockly.Msg.EDUCORE_PARROT_SET_SPEED_MESSAGE0 = "设置电机 %1 速度 %2";
Blockly.Msg.EDUCORE_PARROT_SET_SPEED_TOOLTIP = "速度范围: -100 ~ 100，0表示停止，负数也表示反转，绝对值越大转速越快。";
Blockly.Msg.EDUCORE_PARROT_SET_SPEED_HELPURL = "";

Blockly.Msg.EDUCORE_SERVO_MESSAGE0 = "设置舵机%1 角度为 %2 ";
Blockly.Msg.EDUCORE_SERVO_TOOLTIP = "角度范围：0 ~ 180";
Blockly.Msg.EDUCORE_SERVO_HELPURL = "";

Blockly.Msg.EDUCORE_WIFI_MESSAGE0 = "连接 Wi-Fi 名称%1 密码%2 超时时间%3秒";
Blockly.Msg.EDUCORE_WIFI_TOOLTIP = "";
Blockly.Msg.EDUCORE_WIFI_HELPURL = "";

Blockly.Msg.EDUCORE_WIFI_STATUS_MESSAGE0 = "Wi-Fi网络连接状态";
Blockly.Msg.EDUCORE_WIFI_STATUS_TOOLTIP = "";
Blockly.Msg.EDUCORE_WIFI_STATUS_HELPURL = "";

Blockly.Msg.EDUCORE_WIFI_INFO_MESSAGE0 = "Wi-Fi配置信息";
Blockly.Msg.EDUCORE_WIFI_INFO_TOOLTIP = "";
Blockly.Msg.EDUCORE_WIFI_INFO_HELPURL = "";

Blockly.Msg.EDUCORE_MQTT_CONNECT1_MESSAGE0 = "连接MQTT %6 服务器%1 端口%2 client_id%3 user%4 psd%5";
Blockly.Msg.EDUCORE_MQTT_CONNECT1_TOOLTIP = "";
Blockly.Msg.EDUCORE_MQTT_CONNECT1_HELPURL = "";

Blockly.Msg.SERVER = "服务器";
Blockly.Msg.PORT = "端口";

Blockly.Msg.EDUCORE_MQTT_CONNECT_ITEM_TITLE = "参数";
Blockly.Msg.EDUCORE_MQTT_CONNECT_ITEM_TOOLTIP = "";
Blockly.Msg.EDUCORE_MQTT_CONNECT_CONTAINER_TITLE_ADD = "参数";
Blockly.Msg.EDUCORE_MQTT_CONNECT_CONTAINER_TOOLTIP = "";

Blockly.Msg.EDUCORE_MQTT_CONNECT_HELPURL = '';
Blockly.Msg.EDUCORE_MQTT_CONNECT_TOOLTIP = '';
Blockly.Msg.EDUCORE_MQTT_CONNECT_MESSAGE0 = '连接MQTT';

Blockly.Msg.EDUCORE_MQTT_CONNECTED_MESSAGE0 = "MQTT已连接";
Blockly.Msg.EDUCORE_MQTT_CONNECTED_TOOLTIP = "";
Blockly.Msg.EDUCORE_MQTT_CONNECTED_HELPURL = "";

Blockly.Msg.EDUCORE_MQTT_PUBLISH_MESSAGE0 = "发布%2 至 主题%1";
Blockly.Msg.EDUCORE_MQTT_PUBLISH_TOOLTIP = "";
Blockly.Msg.EDUCORE_MQTT_PUBLISH_HELPURL = "";

Blockly.Msg.EDUCORE_MQTT_RECEIVE_MESSAGE0 = "获取主题%1 的消息";
Blockly.Msg.EDUCORE_MQTT_RECEIVE_TOOLTIP = "";
Blockly.Msg.EDUCORE_MQTT_RECEIVE_HELPURL = "";

Blockly.Msg.EDUCORE_MQTT_RECEIVE_EVENT_MESSAGE0 = "当从主题 %1 接收到消息 时";
Blockly.Msg.EDUCORE_MQTT_RECEIVE_EVENT_TOOLTIP = "";
Blockly.Msg.EDUCORE_MQTT_RECEIVE_EVENT_HELPURL = "";

Blockly.Msg.EDUCORE_BLE_HID_MESSAGE0 = "构建 BLE HID 对象 显示名称 %1";
Blockly.Msg.EDUCORE_BLE_HID_TOOLTIP = "";
Blockly.Msg.EDUCORE_BLE_HID_HELPURL = "";

Blockly.Msg.EDUCORE_BLE_HID_CONNECTED_MESSAGE0 = "BLE HID 已连接";
Blockly.Msg.EDUCORE_BLE_HID_CONNECTED_TOOLTIP = "";
Blockly.Msg.EDUCORE_BLE_HID_CONNECTED_HELPURL = "";

Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_SPACE = "空格";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_ENTER = "回车换行";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_CTRL = "CONTROL";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_SHIFT = "SHIFT";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_ALT = "ALT";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_LEFT = "方向按键左";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_RIGHT = "方向按键右";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_UP = "方向按键上";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_DOWN = "方向按键下";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_UPPRRCASE = "大写字符";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_LOWERCASE = "小写字符";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_NUMBER = "数字字符";

Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_SEND_MESSAGE0 = "BLE HID 模拟键盘按下 %1";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_SEND_TOOLTIP = "";
Blockly.Msg.EDUCORE_BLE_HID_KEYBOARD_SEND_HELPURL = "";

Blockly.Msg.EDUCORE_BLE_HID_MOUSE_CLICK = "鼠标单击";
Blockly.Msg.EDUCORE_BLE_HID_MOUSE_DCLICK = "鼠标双击";
Blockly.Msg.EDUCORE_BLE_HID_MOUSE_KEY_MESSAGE0 = "BLE HID 模拟鼠标 %1";
Blockly.Msg.EDUCORE_BLE_HID_MOUSE_KEY_TOOLTIP = "";
Blockly.Msg.EDUCORE_BLE_HID_MOUSE_KEY_HELPURL = "";

Blockly.Msg.EDUCORE_RFID_INIT_MESSAGE0 = "初始化 RFID sda%1 scl%2";
Blockly.Msg.EDUCORE_RFID_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_RFID_INIT_HELPURL = "";

Blockly.Msg.EDUCORE_RFID_SCANNING_MESSAGE0 = "读取 RFID 卡片信息，以%1方式";
Blockly.Msg.EDUCORE_RFID_SCANNING_TOOLTIP = "";
Blockly.Msg.EDUCORE_RFID_SCANNING_HELPURL = "";

Blockly.Msg.EDUCORE_RFID_SCANNING_TIME_MESSAGE0 = "读取 RFID 卡片信息，等待 %1 秒";
Blockly.Msg.EDUCORE_RFID_SCANNING_TIME_TOOLTIP = "";
Blockly.Msg.EDUCORE_RFID_SCANNING_TIME_HELPURL = "";

Blockly.Msg.EDUCORE_RFID_SERIAL_NUMBER_MESSAGE0 = "获取 RFID 卡片序列号";
Blockly.Msg.EDUCORE_RFID_SERIAL_NUMBER_TOOLTIP = "";
Blockly.Msg.EDUCORE_RFID_SERIAL_NUMBER_HELPURL = "";

Blockly.Msg.EDUCORE_DICT_FILE_MESSAGE0 = "读取文本文件 %1 内容并生成字典";
Blockly.Msg.EDUCORE_DICT_FILE_TOOLTIP = "";
Blockly.Msg.EDUCORE_DICT_FILE_HELPURL = "";

Blockly.Msg.EDUCORE_DICT_STR_MESSAGE0 = "根据字符串 %1 生成字典";
Blockly.Msg.EDUCORE_DICT_STR_TOOLTIP = "";
Blockly.Msg.EDUCORE_DICT_STR_HELPURL = "";

Blockly.Msg.EDUCORE_SMARTCAMERA_INIT_MESSAGE0 = "初始化 摄像头 tx%1 rx%2";
Blockly.Msg.EDUCORE_SMARTCAMERA_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SMARTCAMERA_INIT_HELPURL = "";

Blockly.Msg.EDUCORE_SMARTCAMERA_LOAD_RECOGNIZE_MESSAGE0 = "人脸识别初始化";
Blockly.Msg.EDUCORE_SMARTCAMERA_LOAD_RECOGNIZE_TOOLTIP = "";
Blockly.Msg.EDUCORE_SMARTCAMERA_LOAD_RECOGNIZE_HELPURL = "";

Blockly.Msg.EDUCORE_SMARTCAMERA_LOAD_DETECT_MESSAGE0 = "人脸检测初始化";
Blockly.Msg.EDUCORE_SMARTCAMERA_LOAD_DETECT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SMARTCAMERA_LOAD_DETECT_HELPURL = "";

Blockly.Msg.EDUCORE_SMARTCAMERA_EYE_AND_MOUTH_INIT_MESSAGE0 = "眨眼张嘴检测初始化";
Blockly.Msg.EDUCORE_SMARTCAMERA_EYE_AND_MOUTH_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SMARTCAMERA_EYE_AND_MOUTH_INIT_HELPURL = "";

Blockly.Msg.EDUCORE_SMARTCAMERA_RESULT_MESSAGE0 = "模型推理结果（字典）";
Blockly.Msg.EDUCORE_SMARTCAMERA_RESULT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SMARTCAMERA_RESULT_HELPURL = "";


Blockly.Msg.EDUCORE_WEB_SMARTCAMERA_INIT_MESSAGE0 = "连接网络摄像头 ID%1";
Blockly.Msg.EDUCORE_WEB_SMARTCAMERA_INIT_TOOLTIP = "ID为网页摄像头提供的id号，关联网页与主控板之间的关联";
Blockly.Msg.EDUCORE_WEB_SMARTCAMERA_INIT_HELPURL = "https://iot.mpython.cn/static/aiot/face-landmarks-detection.html";

Blockly.Msg.EDUCORE_WEB_SMARTCAMERA_RESULT_MESSAGE0 = "推理结果（字典）";
Blockly.Msg.EDUCORE_WEB_SMARTCAMERA_RESULT_TOOLTIP = "";
Blockly.Msg.EDUCORE_WEB_SMARTCAMERA_RESULT_HELPURL = "";

Blockly.Msg.EDUCORE_HARDWARE_ID_MESSAGE0 = "获取硬件唯一标识";
Blockly.Msg.EDUCORE_HARDWARE_ID_TOOLTIP = "";
Blockly.Msg.EDUCORE_HARDWARE_ID_HELPURL = "";

Blockly.Msg.EDUCORE_soil_moisture_MESSAGE0 = "土壤湿度传感器 %1";
Blockly.Msg.EDUCORE_soil_moisture_TOOLTIP = "模拟值输出0-4095";
Blockly.Msg.EDUCORE_soil_moisture_HELPURL = "";

Blockly.Msg.EDUCORE_PIN_INIT_MESSAGE0 = '初始化引脚%1 或直接%2';
Blockly.Msg.EDUCORE_PIN_INIT_TOOLTIP = "实例化引脚";
Blockly.Msg.EDUCORE_PIN_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_PIN_READ_DIGITAL_MESSAGE0 = '读取引脚%1的电平';
Blockly.Msg.EDUCORE_PIN_READ_DIGITAL_TOOLTIP = "读取引脚的电平";
Blockly.Msg.EDUCORE_PIN_READ_DIGITAL_HELPURL = "";
Blockly.Msg.EDUCORE_PIN_READ_ANALOG_MESSAGE0 = '读取引脚%1的模拟值';
Blockly.Msg.EDUCORE_PIN_READ_ANALOG_TOOLTIP = "读取引脚的模拟值";
Blockly.Msg.EDUCORE_PIN_READ_ANALOG_HELPURL = "";
Blockly.Msg.EDUCORE_PIN_WRITE_DIGITAL_MESSAGE0 = '设置引脚%1输出电平%2';
Blockly.Msg.EDUCORE_PIN_WRITE_DIGITAL_TOOLTIP = "设置引脚输出高低电平";
Blockly.Msg.EDUCORE_PIN_WRITE_DIGITAL_HELPURL = "";
Blockly.Msg.EDUCORE_PIN_WRITE_ANALOG_MESSAGE0 = "设置引脚 %1 模拟值（PWM）为 %2 周期频率为 %3Hz";
Blockly.Msg.EDUCORE_PIN_WRITE_ANALOG_TOOLTIP = "模拟值范围：0 ~ 1023，周期频率默认5000Hz";
Blockly.Msg.EDUCORE_PIN_WRITE_ANALOG_HELPURL = "";
Blockly.Msg.EDUCORE_LIGHT_MESSAGE0 = '光敏传感器%1 读取数值';
Blockly.Msg.EDUCORE_LIGHT_TOOLTIP = "范围0-4095";
Blockly.Msg.EDUCORE_LIGHT_HELPURL = ""; 
Blockly.Msg.EDUCORE_RGB_INIT_MESSAGE0 = 'RGB 初始化%1 引脚%2';
Blockly.Msg.EDUCORE_RGB_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_RGB_INIT_HELPURL = ""; 
Blockly.Msg.EDUCORE_RGB_ON_MESSAGE0 = '设置 RGB%1的%2 号灯颜色为 R %3 G %4 B %5';
Blockly.Msg.EDUCORE_RGB_ON_TOOLTIP = '原生亮度的 1/30 能较好显示色差';
Blockly.Msg.EDUCORE_RGB_ON_HELPURL = "";
Blockly.Msg.EDUCORE_RGB_ON_LIST_MESSAGE0 = '设置 RGB%1的%2至%3 号灯颜色为 R %4 G %5 B %6';
Blockly.Msg.EDUCORE_RGB_ON_LIST_TOOLTIP = '原生亮度的 1/30 能较好显示色差';
Blockly.Msg.EDUCORE_RGB_ON_LIST_HELPURL = "";
Blockly.Msg.EDUCORE_RGB_OFF_MESSAGE0 = '关闭 %1 RGB的所有灯';
Blockly.Msg.EDUCORE_RGB_OFF_TOOLTIP = '';
Blockly.Msg.EDUCORE_RGB_OFF_HELPURL = ""; 
Blockly.Msg.EDUCORE_SOUND_INIT_MESSAGE0 = '声音传感器初始化 引脚%1 或直接%2';
Blockly.Msg.EDUCORE_SOUND_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SOUND_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_SOUND_MESSAGE0 = '读取声音传感器%1的数值';
Blockly.Msg.EDUCORE_SOUND_TOOLTIP = "";
Blockly.Msg.EDUCORE_SOUND_HELPURL = "";
Blockly.Msg.EDUCORE_OLED_INIT_MESSAGE0 = 'OLED初始化 sda%1 scl%2';
Blockly.Msg.EDUCORE_OLED_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_OLED_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_EB_INIT_MESSAGE0 = '按键初始化 引脚%1 或直接%2';
Blockly.Msg.EDUCORE_EB_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_EB_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_EB_STATUS_MESSAGE0 = '获取按键%1的状态';
Blockly.Msg.EDUCORE_EB_STATUS_TOOLTIP = "0 表示释放，1 表示按下";
Blockly.Msg.EDUCORE_EB_STATUS_HELPURL = "";
Blockly.Msg.EDUCORE_EB_EVENT_MESSAGE0 = '按键%1被按下时';
Blockly.Msg.EDUCORE_EB_EVENT_TOOLTIP = "";
Blockly.Msg.EDUCORE_EB_EVENT_HELPURL = "";
Blockly.Msg.EDUCORE_EACC_INIT_MESSAGE0 = '加速度传感器初始化sda%1scl%2 或直接%3';
Blockly.Msg.EDUCORE_EACC_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_EACC_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_EACC_GET_MESSAGE0 = '获得加速度传感器%1%2';
Blockly.Msg.EDUCORE_EACC_GET_TOOLTIP = "";
Blockly.Msg.EDUCORE_EACC_GET_HELPURL = "";
Blockly.Msg.EDUCORE_EACC_GET_X_MESSAGE0 = 'X轴加速度值';
Blockly.Msg.EDUCORE_EACC_GET_Y_MESSAGE0 = 'Y轴加速度值';
Blockly.Msg.EDUCORE_EACC_GET_Z_MESSAGE0 = 'Z轴加速度值';
Blockly.Msg.EDUCORE_EACC_GET_SHAKE_MESSAGE0 = '是否被摇晃';
Blockly.Msg.EDUCORE_SERVO_INIT_MESSAGE0 = '舵机初始化%1 引脚%2 或直接%3';
Blockly.Msg.EDUCORE_SERVO_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_SERVO_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_LIGHT_INIT_MESSAGE0 = '光敏传感器初始化 引脚%1 或直接%2';
Blockly.Msg.EDUCORE_LIGHT_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_LIGHT_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_LIGHT_MESSAGE0 = '读取光敏传感器%1的值';
Blockly.Msg.EDUCORE_LIGHT_TOOLTIP = "";
Blockly.Msg.EDUCORE_LIGHT_HELPURL = "";
Blockly.Msg.EDUCORE_DHT_INIT_MESSAGE0 = 'DHT传感器初始化 引脚%1 或直接%2';
Blockly.Msg.EDUCORE_DHT_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_DHT_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_DHT_MESSAGE0 = '读取DHT传感器%1的%2值';
Blockly.Msg.EDUCORE_DHT_TOOLTIP = "";
Blockly.Msg.EDUCORE_DHT_HELPURL = "";
Blockly.Msg.EDUCORE_DS18B20_INIT_MESSAGE0 = 'DS18B20传感器初始化 引脚%1 或直接%2';
Blockly.Msg.EDUCORE_DS18B20_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_DS18B20_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_DS18B20_MESSAGE0 = '读取DS18B20传感器%1的数值';
Blockly.Msg.EDUCORE_DS18B20_TOOLTIP = "";
Blockly.Msg.EDUCORE_DS18B20_HELPURL = ""; 
Blockly.Msg.EDUCORE_ULT_INIT_MESSAGE0 = '超声波传感器初始化 sda%1 scl%2 或直接%3';
Blockly.Msg.EDUCORE_ULT_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_ULT_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_ULT_MESSAGE0 = '读取超声波传感器%1的值（单位：cm）';
Blockly.Msg.EDUCORE_ULT_TOOLTIP = "";
Blockly.Msg.EDUCORE_ULT_HELPURL = "";
Blockly.Msg.EDUCORE_TSD_INIT_MESSAGE0 = '红外热释电传感器初始化 pin%1 或直接%2';
Blockly.Msg.EDUCORE_TSD_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_TSD_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_TSD_MESSAGE0 = '读取红外热释电传感器%1的值';
Blockly.Msg.EDUCORE_TSD_TOOLTIP = "";
Blockly.Msg.EDUCORE_TSD_HELPURL = "";
Blockly.Msg.EDUCORE_PRESSURE_INIT_MESSAGE0 = '大气压强传感器初始化 sda%1 scl%2 或直接%3';
Blockly.Msg.EDUCORE_PRESSURE_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_PRESSURE_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_PRESSURE_MESSAGE0 = '读取大气压强传感器%1的值（单位：百帕）';
Blockly.Msg.EDUCORE_PRESSURE_TOOLTIP = "";
Blockly.Msg.EDUCORE_PRESSURE_HELPURL = "";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_MESSAGE0 = "板载磁力传感器初始化名称%1";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_HELPURL = "";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_ADJUST_MESSAGE0 = "板载磁力传感器%1校准";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_ADJUST_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_ADJUST_HELPURL = "";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_DIRECTION_MESSAGE0 = "获取板载磁力传感器%1的方向值";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_DIRECTION_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_COMPASS_DIRECTION_HELPURL = "";
Blockly.Msg.EDUCORE_COMPASS_MESSAGE0 = "磁力传感器初始化 sda%1 scl%2 或直接%3";
Blockly.Msg.EDUCORE_COMPASS_TOOLTIP = "";
Blockly.Msg.EDUCORE_COMPASS_HELPURL = "";
Blockly.Msg.EDUCORE_COMPASS_ADJUST_MESSAGE0 = "磁力传感器%1校准";
Blockly.Msg.EDUCORE_COMPASS_ADJUST_TOOLTIP = "";
Blockly.Msg.EDUCORE_COMPASS_ADJUST_HELPURL = "";
Blockly.Msg.EDUCORE_COMPASS_DIRECTION_MESSAGE0 = "获取磁力传感器%1的方向值";
Blockly.Msg.EDUCORE_COMPASS_DIRECTION_TOOLTIP = "";
Blockly.Msg.EDUCORE_COMPASS_DIRECTION_HELPURL = "";
Blockly.Msg.EDUCORE_FORCE_INIT_MESSAGE0 = "力传感器初始化sda%1scl%2或直接%3";
Blockly.Msg.EDUCORE_FORCE_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_FORCE_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_FORCE_ZERO_MESSAGE0 = "力传感器%1归零";
Blockly.Msg.EDUCORE_FORCE_ZERO_TOOLTIP = "";
Blockly.Msg.EDUCORE_FORCE_ZERO_HELPURL = "";
Blockly.Msg.EDUCORE_FORCE_READ_MESSAGE0 = "力传感器%1读取值 %2";
Blockly.Msg.EDUCORE_FORCE_READ_TOOLTIP = "默认返回质量，当参数mass=False时，返回力的单位N（牛顿）";
Blockly.Msg.EDUCORE_FORCE_READ_HELPURL = "";
Blockly.Msg.EDUCORE_FORCE_MASS_TRUE = "质量(g)";
Blockly.Msg.EDUCORE_FORCE_MASS_FALSE = "牛顿(N)";
Blockly.Msg.EDUCORE_RFID_BLOCK_MESSAGE0 = '阻塞';
Blockly.Msg.EDUCORE_RFID_NO_BLOCK_MESSAGE0 = '非阻塞';
Blockly.Msg.EDUCORE_STEPPER_INIT_MESSAGE0 = "初始化步进电机%1sda%2scl%3";
Blockly.Msg.EDUCORE_STEPPER_INIT_TOOLTIP = "";
Blockly.Msg.EDUCORE_STEPPER_INIT_HELPURL = "";
Blockly.Msg.EDUCORE_STEPPER_SPEED_MESSAGE0 = "设置步进电机%1速度%2";
Blockly.Msg.EDUCORE_STEPPER_SPEED_TOOLTIP = "";
Blockly.Msg.EDUCORE_STEPPER_SPEED_HELPURL = "";
Blockly.Msg.EDUCORE_STEPPER_GOTO_MESSAGE0 = "设置步进电机%1以%2速度转%3圈%4";
Blockly.Msg.EDUCORE_STEPPER_GOTO_TOOLTIP = "";
Blockly.Msg.EDUCORE_STEPPER_GOTO_HELPURL = "";
Blockly.Msg.EDUCORE_STEPPER_BLOCK_MESSAGE0 = '等待完成';
Blockly.Msg.EDUCORE_STEPPER_NO_BLOCK_MESSAGE0 = '不等待完成';
Blockly.Msg.EDUCORE_ONBORD_LIGHT_MESSAGE0 = "板载光敏传感器初始化 或直接%1";
Blockly.Msg.EDUCORE_ONBORD_LIGHT_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_LIGHT_HELPURL = "";
Blockly.Msg.EDUCORE_ONBORD_LIGHT_READ_MESSAGE0 = "获取板载光敏传感器%1的光线值";
Blockly.Msg.EDUCORE_ONBORD_LIGHT_READ_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_LIGHT_READ_HELPURL = "";
Blockly.Msg.EDUCORE_ONBORD_SOUND_MESSAGE0 = "板载声音传感器初始化 或直接%1";
Blockly.Msg.EDUCORE_ONBORD_SOUND_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_SOUND_HELPURL = "";
Blockly.Msg.EDUCORE_ONBORD_SOUND_READ_MESSAGE0 = "获取板载声音传感器%1的声音值";
Blockly.Msg.EDUCORE_ONBORD_SOUND_READ_TOOLTIP = "";
Blockly.Msg.EDUCORE_ONBORD_SOUND_READ_HELPURL = "";
Blockly.Msg.EDUCORE_MATH_ABS_MESSAGE0 = "绝对值%1";
Blockly.Msg.EDUCORE_MATH_ABS_TOOLTIP = "";
Blockly.Msg.EDUCORE_MATH_ABS_HELPURL = "";

/* edu core end */

/* 千帆大模型 start */
Blockly.Msg.CHAT_QIANFAN_INIT_MESSAGE0 = "初始化%3 API Key%1 Secret Key%2";
Blockly.Msg.CHAT_QIANFAN_INIT_TOOLTIP = "";
Blockly.Msg.CHAT_QIANFAN_INIT_HELPURL = "";

Blockly.Msg.CHAT_QIANFAN_DIALOG_SEND_MESSAGE0 = "发送问题：%1";
Blockly.Msg.CHAT_QIANFAN_DIALOG_SEND_TOOLTIP = "";
Blockly.Msg.CHAT_QIANFAN_DIALOG_SEND_HELPURL = "";

Blockly.Msg.CHAT_QIANFAN_DIALOG_RESULT_TXT = "回答文本内容";

Blockly.Msg.CHAT_QIANFAN_DIALOG_RESULT_MESSAGE0 = "文字对话 响应内容 形式%1";
Blockly.Msg.CHAT_QIANFAN_DIALOG_RESULT_TOOLTIP = "";
Blockly.Msg.CHAT_QIANFAN_DIALOG_RESULT_HELPURL = "";

Blockly.Msg.CHAT_QIANFAN_TXT_PIC_1956 = '1956可完全显示';

Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Base = "基础风格";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_3D_Model = "3D模型";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Analog_Film = "模拟胶片";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Anime = "动漫";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Cinematic = "电影";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Comic_Book = "漫画";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Craft_Clay = "工艺黏土";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Digital_Art = "数字艺术";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Enhance = "增强";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Fantasy_Art = "幻想艺术";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Isometric = "等距风格";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Line_Art = "线条艺术";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Lowpoly = "低多边形";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Neonpunk = "霓虹朋克";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Origami = "折纸";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Photographic = "摄影";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Pixel_Art = "像素艺术";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_Texture = "纹理";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_MESSAGE0 = "描述%1 反向提示词%2 尺寸%3 %6风格%4 %7保存路径%5";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_TOOLTIP = "提示词，即用户希望图片包含的元素。长度限制为1024字符，建议中文或者英文单词总数量不超过150个；\n反向提示词，即用户希望图片不包含的元素。长度限制为1024字符，建议中文或者英文单词总数量不超过150个";
Blockly.Msg.CHAT_QIANFAN_TXT_PIC_HELPURL = "";

Blockly.Msg.CHAT_QIANFAN_PIC_TXT_MESSAGE0 = "图片路径%1";
Blockly.Msg.CHAT_QIANFAN_PIC_TXT_TOOLTIP = "图片会自动转为base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px，支持jpg/png/bmp格式";
Blockly.Msg.CHAT_QIANFAN_PIC_TXT_HELPURL = "";

Blockly.Msg.CHAT_QIANFAN_PIC_TXT_RESULT_TXT = "文字内容";

Blockly.Msg.CHAT_QIANFAN_PIC_TXT_RESULT_MESSAGE0 = "图片转文字 响应内容 形式%1";
Blockly.Msg.CHAT_QIANFAN_PIC_TXT_RESULT_TOOLTIP = "";
Blockly.Msg.CHAT_QIANFAN_PIC_TXT_RESULT_HELPURL = "";


Blockly.Msg.CHAT_QIANFAN_V2_INIT_MESSAGE0 = "初始化千帆大模型参数 模型名称%2 API Key%1";
Blockly.Msg.CHAT_QIANFAN_V2_INIT_TOOLTIP = "";
Blockly.Msg.CHAT_QIANFAN_V2_INIT_HELPURL = "";

/* 千帆大模型 end */

/* ChatGpt start */
Blockly.Msg.CHATGPT_INIT_MESSAGE0 = "ChatGpt 初始化";
Blockly.Msg.CHATGPT_INIT_TOOLTIP = "";
Blockly.Msg.CHATGPT_INIT_HELPURL = "";

Blockly.Msg.CHATGPT_GET_TXT_PIC_RESULT = "返回图片的路径结果";
Blockly.Msg.CHATGPT_GET_PIC_TXT_RESULT = "返回生成文字的结果";
Blockly.Msg.CHATGPT_GET_TXT_VOICE_RESULT = "返回语音文件路径结果";
Blockly.Msg.CHATGPT_GET_VOICE_TXT_RESULT = "返回语音生成文字的结果";
Blockly.Msg.CHATGPT_GET_TXT_DIALOGUE_RESULT = "返回问题结果";
Blockly.Msg.CHATGPT_GET_AI_RESULT = "返回AI智能体结果";

Blockly.Msg.CHATGPT_GET_RESULT_MESSAGE0 = "%1";
Blockly.Msg.CHATGPT_GET_RESULT_TOOLTIP = "";
Blockly.Msg.CHATGPT_GET_RESULT_HELPURL = "";

Blockly.Msg.CHATGPT_TXT_PIC_MESSAGE0 = "设置生成图片的描述 %1";
Blockly.Msg.CHATGPT_TXT_PIC_TOOLTIP = "";
Blockly.Msg.CHATGPT_TXT_PIC_HELPURL = "";

Blockly.Msg.CHATGPT_PIC_TXT_MESSAGE0 = "设置生成文字的图片路径 %1 设置提问的问题 %2";
Blockly.Msg.CHATGPT_PIC_TXT_TOOLTIP = "";
Blockly.Msg.CHATGPT_PIC_TXT_HELPURL = "";

Blockly.Msg.CHATGPT_TXT_VOICE_MESSAGE0 = "设置生成语音的文字内容 %1";
Blockly.Msg.CHATGPT_TXT_VOICE_TOOLTIP = "";
Blockly.Msg.CHATGPT_TXT_VOICE_HELPURL = "";

Blockly.Msg.CHATGPT_VOICE_TXT_MESSAGE0 = "设置生成文字的语音路径 %1";
Blockly.Msg.CHATGPT_VOICE_TXT_TOOLTIP = "";
Blockly.Msg.CHATGPT_VOICE_TXT_HELPURL = "";

Blockly.Msg.CHATGPT_TXT_DIALOGUE_MESSAGE0 = "设置问题的内容 %1";
Blockly.Msg.CHATGPT_TXT_DIALOGUE_TOOLTIP = "";
Blockly.Msg.CHATGPT_TXT_DIALOGUE_HELPURL = "";

Blockly.Msg.CHATGPT_AI_MESSAGE0 = "设置AI智能体apiKey %1 设置提问的问题 %2";
Blockly.Msg.CHATGPT_AI_TOOLTIP = "";
Blockly.Msg.CHATGPT_AI_HELPURL = "";

/* ChatGpt end */


/* v831 start */
Blockly.Msg.MPYTHON_AICAMERA_V831_UART_INIT_MESSAGE0 = 'AI摄像头初始化 tx %1 rx %2';

Blockly.Msg.MPYTHON_AIcamera_V831_face_recognization_init_MESSAGE0 = '人脸识别初始化 %3 人脸分类数量%1 识别阈值%2';

Blockly.Msg.MPYTHON_AIcamera_V831_self_learning_classifier_init_MESSAGE0 = '自学习分类初始化 %3 分类数量%1 训练集数量%2';

Blockly.Msg.MPYTHON_AIcamera_V831_qrcode_init_MESSAGE0 = '二维码识别初始化';

Blockly.Msg.MPYTHON_AIcamera_V831_ai_init_MESSAGE0 = '初始化AI:%1';

Blockly.Msg.MPYTHON_AIcamera_V831_color_init_MESSAGE0 = '颜色识别初始化';

Blockly.Msg.MPYTHON_AICAMERA_V831_TRACE_COLOR_MESSAGE0 = '寻找色块初始化';

Blockly.Msg.MPYTHON_AICAMERA_V831_LPR_INIT_MESSAGE0 = '车牌初始化';
Blockly.Msg.MPYTHON_AIcamera_1000_class_detect = '1000类物体识别';
Blockly.Msg.MPYTHON_AIcamera_1000_detect_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_1000_detect_result_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_1000_detect_result_MESSAGE0 = '1000类识别结果:%1';

Blockly.Msg.MPYTHON_AIcamera_1000_detect_result_list_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_1000_detect_result_list_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_1000_detect_result_list_MESSAGE0 = '1000类物体识别种类列表';

//图像寻线
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_MESSAGE0 = '图像寻线初始化';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_TOOLTIP = "返回值:{'pixels': , 'cx': , 'cy': , 'rotation': }, pixels为线的像素大小, (cx, cy)框的中心点, rotation为框的偏转角度(角度°)";
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_HELPURL = "";
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_run_MESSAGE0 = '图像寻线运行';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_RESULT_MESSAGE0 = '黑线框：%1';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_RESULT_rect = '坐标列表';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_RESULT_pixels = '像素大小';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_RESULT_cx = '中心点坐标x';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_RESULT_cy = '中心点坐标y';
Blockly.Msg.MPYTHON_AICAMERA_V831_find_line_init_RESULT_rotation = '偏转角度(°)';


Blockly.Msg.MPYTHON_AICAMERA_V831_COLOR_EXTRACTO_init_MESSAGE0 = 'LAB颜色提取器初始化';

Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_init_MESSAGE0 = 'AprilTag模式初始化';

Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_RESULT_MESSAGE0 = 'AprilTag数据: %1';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_x_tran = 'x_translation';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_y_tran = 'y_translation';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_z_tran = 'z_translation';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_x_rol = 'x_rotation(°)';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_y_rol = 'y_rotation(°)';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_z_rol = 'z_rotation(°)';
Blockly.Msg.MPYTHON_AICAMERA_V831_AprilTag_length = '虚拟距离';


Blockly.Msg.MPYTHON_AIcamera_V831_video_capture_MESSAGE0 = '录制视频 路径:%1 录制的帧间隔(us):%2 jpeg 压缩质量(%):%3 录制屏幕宽度:%4 录制屏幕高度:%5 录制时间(s):%6';

// 切换模型
Blockly.Msg.MPYTHON_AICAMERA_V831_Find_the_black_line_MODE = '图像寻线';
Blockly.Msg.MPYTHON_AICAMERA_V831_MODEL_MODE = '自定义模型';

// 使用自定义模型
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_init_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_init_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_init_MESSAGE0 = '目标检测模型初始化%1 标签（列表）:%2 模型（param）路径:%3 模型（bin）路径:%4 图像宽度:%5 图像高度:%6 锚点（列表）:%7';
Blockly.Msg.MPYTHON_AIcamera_V831_restnet18_init_MESSAGE0 = '图像分类模型初始化%1 标签:%2 模型（param）路径:%3 模型（bin）路径:%4 图像宽度:%5 图像高度:%6';


Blockly.Msg.MPYTHON_AIcamera_V831_yolo_recognize_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_recognize_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_recognize_MESSAGE0 = '运行识别';

Blockly.Msg.MPYTHON_AIcamera_V831_yolo_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_result_TOOLTIP = '""';
Blockly.Msg.MPYTHON_AIcamera_V831_yolo_result_MESSAGE0 = '识别结果:%1';

Blockly.Msg.MPYTHON_AIcamera_V831_LPR_recognize_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_V831_LPR_recognize_TOOLTIP = '';
Blockly.Msg.MPYTHON_AIcamera_V831_LPR_recognize_MESSAGE0 = '运行识别';

Blockly.Msg.MPYTHON_AIcamera_V831_LPR_result_HELPURL = '';
Blockly.Msg.MPYTHON_AIcamera_V831_LPR_result_TOOLTIP = '""';
Blockly.Msg.MPYTHON_AIcamera_V831_LPR_result_MESSAGE0 = '识别结果:%1';

Blockly.Msg.MPYTHON_AIcamera_V831_LPR_result_lpr = '车牌字符串';

Blockly.Msg.MPYTHON_AICAMERA_V831_SW_HELPURL="";
Blockly.Msg.MPYTHON_AICAMERA_V831_SW_TOOLTIP="";
Blockly.Msg.MPYTHON_AICAMERA_V831_SW_MESSAGE0="切换至 %1模式"

Blockly.Msg.MPYTHON_AICAMERA_V831_LED_MESSAGE0="LED灯 %1"

Blockly.Msg.MPYTHON_AICAMERA_V831_RGB_MESSAGE0="打开RGB灯 颜色为 R:%1 G:%2 B:%3"

Blockly.Msg.MPYTHON_AICAMERA_V831_RGB_OFF_MESSAGE0="关闭RGB灯"

Blockly.Msg.MPYTHON_AIcamera_V831_img_capture_init_MESSAGE0 = '保存图像%1 保存路径:%2 图像宽度:%3 图像高度:%4';
Blockly.Msg.MPYTHON_AIcamera_V831_img_capture_init_TOOLTIP = '保存图像'

/* v831 end */

//opencv-python
Blockly.Msg.XEDUHUB_INIT_CAP_HELPURL="";
Blockly.Msg.XEDUHUB_INIT_CAP_TOOLTIP="";
Blockly.Msg.XEDUHUB_INIT_CAP_MESSAGE0="cv2 初始化摄像头 序号%1";

Blockly.Msg.XEDUHUB_INIT_CAP_SIZE_HELPURL="";
Blockly.Msg.XEDUHUB_INIT_CAP_SIZE_TOOLTIP="";
Blockly.Msg.XEDUHUB_INIT_CAP_SIZE_MESSAGE0="cv2 设置摄像头获取图像尺寸 宽%1 高%2";

Blockly.Msg.XEDUHUB_GET_CAP_RES_HELPURL="";
Blockly.Msg.XEDUHUB_GET_CAP_RES_TOOLTIP="";
Blockly.Msg.XEDUHUB_GET_CAP_RES_MESSAGE0="cv2 从摄像头获取%1";
Blockly.Msg.XEDUHUB_GET_CAP_RES_STATUS_MESSAGE0="状态";
Blockly.Msg.XEDUHUB_GET_CAP_RES_IMG_MESSAGE0="图像";

Blockly.Msg.XEDUHUB_CV2_SHOW_HELPURL="";
Blockly.Msg.XEDUHUB_CV2_SHOW_TOOLTIP="";
Blockly.Msg.XEDUHUB_CV2_SHOW_MESSAGE0="cv2 在窗口%1显示图片/视频帧%2";

Blockly.Msg.XEDUHUB_CV2_QUIT_HELPURL="";
Blockly.Msg.XEDUHUB_CV2_QUIT_TOOLTIP="";
Blockly.Msg.XEDUHUB_CV2_QUIT_MESSAGE0="按下Q键退出opencv和循环";

//xedu
Blockly.Msg.XEDUHUB_INIT_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INIT_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_INIT_MODEL_MESSAGE0="定义AI任务%1的模型类别%2";

Blockly.Msg.XEDUHUB_COCO_MODEL_MESSAGE0="COCO目标检测";
Blockly.Msg.XEDUHUB_COCOL_MODEL_MESSAGE0="COCO目标检测（增强版）";
Blockly.Msg.XEDUHUB_DET_BODY_MODEL_MESSAGE0="人体检测";
Blockly.Msg.XEDUHUB_DET_BODYL_MODEL_MESSAGE0="人体检测（增强版）";
Blockly.Msg.XEDUHUB_DET_FACE_MODEL_MESSAGE0="脸部检测";
Blockly.Msg.XEDUHUB_DET_HAND_MODEL_MESSAGE0="手部检测";
Blockly.Msg.XEDUHUB_POSE_BODY_MODEL_MESSAGE0="人体关键点";
Blockly.Msg.XEDUHUB_POSE_BODY26_MODEL_MESSAGE0="人体关键点（26关键点）";
Blockly.Msg.XEDUHUB_POSE_FACE_MODEL_MESSAGE0="人脸关键点";
Blockly.Msg.XEDUHUB_POSE_HAND_MODEL_MESSAGE0="人手关键点";
Blockly.Msg.XEDUHUB_POSE_WHOLEBODY_MODEL_MESSAGE0="人体关键点（全关键点）";
Blockly.Msg.XEDUHUB_OCR_MODEL_MESSAGE0="光学字符识别";
Blockly.Msg.XEDUHUB_CLS_IMAGENET_MODEL_MESSAGE0="图像分类";
Blockly.Msg.XEDUHUB_GEN_STYLE_MODEL_MESSAGE0="图像风格迁移";
Blockly.Msg.XEDUHUB_GEN_COLOR_MODEL_MESSAGE0="图像着色";
Blockly.Msg.XEDUHUB_DRIVE_PERCEPTION_MODEL_MESSAGE0="全景驾驶感知";
Blockly.Msg.XEDUHUB_EMBEDDING_IMAGE_MODEL_MESSAGE0="图像特征提取";
Blockly.Msg.XEDUHUB_EMBEDDING_TEXT_MODEL_MESSAGE0="文本特征提取";
Blockly.Msg.XEDUHUB_MMEDU_MODEL_MESSAGE0="MMEdu";
Blockly.Msg.XEDUHUB_BASENN_MODEL_MESSAGE0="BaseNN";
Blockly.Msg.XEDUHUB_BASEML_MODEL_MESSAGE0="BaseML";
Blockly.Msg.XEDUHUB_CUSTOM_MODEL_MESSAGE0="自定义onnx模型推理";

Blockly.Msg.XEDUHUB_WF_ARGS_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_WF_ARGS_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_WF_ARGS_MODEL_MESSAGE0="AI任务%1 添加参数 %2 %3";
Blockly.Msg.XEDUHUB_CHECKPOINT_MODEL_MESSAGE0="使用自定义模型 模型路径为";
Blockly.Msg.XEDUHUB_DOWNLOAD_PATH_MESSAGE0="下载的模型存放路径为";
Blockly.Msg.XEDUHUB_WF_STYLE_MESSAGE0="设置图像风格迁移模型的风格为";

Blockly.Msg.XEDUHUB_WF_INT_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_WF_INT_TOOLTIP="";
Blockly.Msg.XEDUHUB_WF_INT_MESSAGE0="实例化AI任务%1";

Blockly.Msg.XEDUHUB_INF_ARGS_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INF_ARGS_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_INF_ARGS_MODEL_MESSAGE0="设置AI任务%1模型推理参数 %2 %3";
Blockly.Msg.XEDUHUB_INT_ARGS_IMGTYPE_MESSAGE0='输出图片类型';
Blockly.Msg.XEDUHUB_INT_ARGS_THR_MESSAGE0='检测框阈值（0~1）';
Blockly.Msg.XEDUHUB_INT_ARGS_BBOX_MESSAGE0='检测框范围';
Blockly.Msg.XEDUHUB_INT_ARGS_SHOW_MESSAGE0='是否输出图片';
Blockly.Msg.XEDUHUB_INT_ARGS_MINSIZE_MESSAGE0='检测框最小尺寸';
Blockly.Msg.XEDUHUB__INT_ARGS_MAXSIZE_MESSAGE0='检测框最大尺寸';
Blockly.Msg.XEDUHUB_INT_ARGS_SCALEFACTOR_MESSAGE0='缩放图像（1.1~1.5）';
Blockly.Msg.XEDUHUB_INT_ARGS_MINNEIGHBORS_MESSAGE0='最小邻域矩形个数（2~10）';
Blockly.Msg.XEDUHUB_INT_ARGS_TARGETCLASS_MESSAGE0='指定要检测的对象（仅coco目标检测及增强版有效）';


Blockly.Msg.XEDUHUB_INF_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INF_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_INF_MODEL_MESSAGE0="AI任务%1模型对图像 %2 进行一次推理";

Blockly.Msg.XEDUHUB_INF_RES_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INF_RES_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_GET_INF_RES_MODEL_MESSAGE0="返回AI任务%1推理结果的%2";
Blockly.Msg.XEDUHUB_INF_RES_MODEL_MESSAGE0="推理结果";
Blockly.Msg.XEDUHUB_INF_IMG_RES_MODEL_MESSAGE0="图像结果";
Blockly.Msg.XEDUHUB_INF_BASE_RES_MODEL_MESSAGE0="原始结果";

Blockly.Msg.XEDUHUB_INF_FT_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INF_FT_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_INF_FT_MODEL_MESSAGE0="将AI任务%1推理结果格式化并返回结果";
Blockly.Msg.XEDUHUB_INF_ZH_MODEL_MESSAGE0="中文";
Blockly.Msg.XEDUHUB_INF_EN_MODEL_MESSAGE0="英语";
Blockly.Msg.XEDUHUB_INF_RU_MODEL_MESSAGE0="俄语";
Blockly.Msg.XEDUHUB_INF_DE_MODEL_MESSAGE0="德语";
Blockly.Msg.XEDUHUB_INF_FR_MODEL_MESSAGE0="法语";

Blockly.Msg.XEDUHUB_INF_FT_ITEM_MODEL_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INF_FT_ITEM_MODEL_TOOLTIP="";
Blockly.Msg.XEDUHUB_INF_FT_ITEM_MODEL_MESSAGE0="将AI任务%1推理结果格式化并返回结果中%2的值";

Blockly.Msg.XEDUHUB_INF_SHOW_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_INF_SHOW_TOOLTIP="";
Blockly.Msg.XEDUHUB_INF_SHOW_MESSAGE0="显示AI任务%1推理的图像结果";

Blockly.Msg.XEDUHUB_SAVE_HELPURL="https://xedu.readthedocs.io/zh-cn/master/index.html";
Blockly.Msg.XEDUHUB_SAVE_TOOLTIP="";
Blockly.Msg.XEDUHUB_SAVE_MESSAGE0="保存AI任务%1推理的图像结果到%2";

//python-xedu-mnist
Blockly.Msg.XEDU_MNIST_TRAIN_INIT_HELPURL="";
Blockly.Msg.XEDU_MNIST_TRAIN_INIT_TOOLTIP="";
Blockly.Msg.XEDU_MNIST_TRAIN_INIT_MESSAGE0="定义mnist手写数字识别模型（训练）数据集路径（不填写则使用默认数据集）%1 模型存放路径%2";

Blockly.Msg.XEDU_MNIST_TRAIN_HELPURL="";
Blockly.Msg.XEDU_MNIST_TRAIN_TOOLTIP="";
Blockly.Msg.XEDU_MNIST_TRAIN_MESSAGE0="设置模型训练参数 训练轮数%1 学习率%2 训练设备%3  开始训练并保存为ONNX格式";
Blockly.Msg.XEDU_MNIST_TRAIN_CPU_MESSAGE0="CPU";
Blockly.Msg.XEDU_MNIST_TRAIN_GPU_MESSAGE0="GPU";

Blockly.Msg.XEDU_MNIST_HELPURL="";
Blockly.Msg.XEDU_MNIST_TOOLTIP="";
Blockly.Msg.XEDU_MNIST_MESSAGE0="定义mnist手写数字识别模型（推理） %1 模型路径%2 ";
Blockly.Msg.XEDU_MNIST_DEF_MODEL_MESSAGE0="默认模型（无需填写模型路径）";
Blockly.Msg.XEDU_MNIST_SELF_MODEL_MESSAGE0="自定义模型 ";

Blockly.Msg.XEDU_MNIST_INF_HELPURL="";
Blockly.Msg.XEDU_MNIST_INF_TOOLTIP="";
Blockly.Msg.XEDU_MNIST_INF_MESSAGE0="mnist手写数字识别模型在图像%1上推理一次";

Blockly.Msg.XEDU_MNIST_INF_RES_HELPURL="";
Blockly.Msg.XEDU_MNIST_INF_RES_TOOLTIP="";
Blockly.Msg.XEDU_MNIST_INF_RES_MESSAGE0="返回mnist手写数字识别模型的%1";
Blockly.Msg.XEDU_MNIST_INF_BASE_RES_MESSAGE0="推理结果";
Blockly.Msg.XEDU_MNIST_INF_IMG_RES_MESSAGE0="图像结果";

//python-xedu-iris
Blockly.Msg.XEDU_IRIS_TRAIN_INIT_HELPURL="";
Blockly.Msg.XEDU_IRIS_TRAIN_INIT_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_TRAIN_INIT_MESSAGE0="定义鸢尾花识别模型（训练）";

Blockly.Msg.XEDU_IRIS_LOAD_DATA_HELPURL="";
Blockly.Msg.XEDU_IRIS_LOAD_DATA_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_LOAD_DATA_MESSAGE0="鸢尾花识别模型使用%1 数据集路径%2 ";
Blockly.Msg.XEDU_IRIS_LOAD_DEF_DATA_MESSAGE0="默认数据集（无需填写数据集路径）";
Blockly.Msg.XEDU_IRIS_LOAD_SELF_DATA_MESSAGE0="自定义数据集";

Blockly.Msg.XEDU_IRIS_BUILD_HELPURL="";
Blockly.Msg.XEDU_IRIS_BUILD_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_BUILD_MESSAGE0="构建鸢尾花识别模型";

Blockly.Msg.XEDU_IRIS_TRAIN_HELPURL="";
Blockly.Msg.XEDU_IRIS_TRAIN_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_TRAIN_MESSAGE0="设置模型训练参数 训练轮数%1 学习率%2 保存路径%3  开始训练并保存为ONNX格式";

Blockly.Msg.XEDU_IRIS_HELPURL="";
Blockly.Msg.XEDU_IRIS_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_MESSAGE0="定义鸢尾花识别模型（推理） %1 模型路径%2 ";
Blockly.Msg.XEDU_IRIS_DEF_MODEL_MESSAGE0="默认模型（无需填写模型路径）";
Blockly.Msg.XEDU_IRIS_SELF_MODEL_MESSAGE0="自定义模型 ";

Blockly.Msg.XEDU_IRIS_INF_HELPURL="";
Blockly.Msg.XEDU_IRIS_INF_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_INF_MESSAGE0="鸢尾花识别模型在测试数据文件路径（不填则使用默认测试数据集）%1上推理";

Blockly.Msg.XEDU_IRIS_INF_RES_HELPURL="";
Blockly.Msg.XEDU_IRIS_INF_RES_TOOLTIP="";
Blockly.Msg.XEDU_IRIS_INF_RES_MESSAGE0="返回鸢尾花识别模型推理结果";


Blockly.Msg.PYTHON_MAIN_HELPURL="";
Blockly.Msg.PYTHON_MAIN_TOOLTIP="";
Blockly.Msg.PYTHON_MAIN_MESSAGE0="if __name__ == '__main__";


/* 信息科技示教板 start */
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_BURN_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_BURN_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_BURN_MESSAGE0="语音识别模块进入烧录模式";

Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_POWER_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_POWER_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_POWER_MESSAGE0="语音识别模块上电";

Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_INIT_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_INIT_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_SPEECH_RECOGNITION_INIT_MESSAGE0="初始化 语音识别模块";

Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_INIT_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_INIT_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_INIT_MESSAGE0="初始化 PAJ7620手势传感器";

Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_READ_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_READ_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_READ_MESSAGE0="PAJ7620手势传感器 读取结果";

Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_NEAR="靠近挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_AWAY="远离挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_RIGHT="向右挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_LEFT="向左挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_UP="向上挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_DOWN="向下挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_CLOCKWISE="顺时针转动挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_ANTICLOCKWISE="逆时针转动挥手";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_WAVE="挥舞";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_IS_MESSAGE0="PAJ7620手势传感器 %1 被触发";

Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_INIT_HELPURL="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_INIT_TOOLTIP="";
Blockly.Msg.PROCESS_CPNTROL_PAJ_GESTURE_INIT_MESSAGE0="初始化 PAJ7620手势传感器";

Blockly.Msg.PROCESS_CONTROL_READ_ANALOG_ROTATEDIMMER_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_READ_ANALOG_ROTATEDIMMER_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_READ_ANALOG_ROTATEDIMMER_MESSAGE0="滑杆电位器 模拟值";

Blockly.Msg.PROCESS_CONTROL_SERVO_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SERVO_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SERVO_MESSAGE0="设置 舵机 角度为 %1";

Blockly.Msg.PROCESS_CONTROL_SERVO_ANGLE_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SERVO_ANGLE_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SERVO_ANGLE_MESSAGE0="设置 舵机 角度为 %1 脉宽从 %2 脉宽到 %3 最大角度 %4";

Blockly.Msg.PROCESS_CONTROL_MOTOR_M1_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MOTOR_M1_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MOTOR_M1_MESSAGE0="打开 风扇 %1 速度 %2";

Blockly.Msg.PROCESS_CONTROL_OFF_MOTOR_M1_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_OFF_MOTOR_M1_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_OFF_MOTOR_M1_MESSAGE0="关闭 风扇";

Blockly.Msg.PROCESS_CONTROL_4LED_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_4LED_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_4LED_MESSAGE0="设置 LED灯 引脚 %1  值为 %2";

Blockly.Msg.PROCESS_CONTROL_MP3_SET_MASSTORAGE_MODE_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_SET_MASSTORAGE_MODE_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_SET_MASSTORAGE_MODE_MESSAGE0="MP3模块 进入u盘模式(不要在播放状态下操作)";

Blockly.Msg.PROCESS_CONTROL_MP3_SET_MP3_MODE_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_SET_MP3_MODE_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_SET_MP3_MODE_MESSAGE0="MP3模块 退出U盘模式";

Blockly.Msg.PROCESS_CONTROL_MP3_INIT_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_INIT_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_INIT_MESSAGE0="初始化 MP3";

Blockly.Msg.PROCESS_CONTROL_MP3_VOLUME_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_VOLUME_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_VOLUME_MESSAGE0="设 MP3 音量 %1";

Blockly.Msg.PROCESS_CONTROL_MP3_PLAY_SONG_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_PLAY_SONG_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_PLAY_SONG_MESSAGE0="MP3 播放第 %1 首歌";

Blockly.Msg.PROCESS_CONTROL_PAUSE="暂停播放";
Blockly.Msg.PROCESS_CONTROL_STOP="停止播放";
Blockly.Msg.PROCESS_CONTROL_PLAY="继续播放";
Blockly.Msg.PROCESS_CONTROL_PLAYNEXT="上一首";
Blockly.Msg.PROCESS_CONTROL_PLAYPREV="下一首";

Blockly.Msg.PROCESS_CONTROL_MP3_CMD_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_CMD_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_CMD_MESSAGE0="MP3 %1";

Blockly.Msg.PROCESS_CONTROL_MP3_PLAY_MODE_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_MP3_PLAY_MODE_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_MP3_PLAY_MODE_MESSAGE0="设置 MP3 播放模式为 %1";

Blockly.Msg.PROCESS_CONTROL_SET_WATER_PUMP_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SET_WATER_PUMP_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SET_WATER_PUMP_MESSAGE0="%1 M1水泵";

Blockly.Msg.PROCESS_CONTROL_SOLAR_SET_SERVO_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SOLAR_SET_SERVO_TOOLTIP="1号舵机角度范围为：0 ~ 180，2号舵机角度范围为：10 ~ 90";
Blockly.Msg.PROCESS_CONTROL_SOLAR_SET_SERVO_MESSAGE0="太阳能板 设置 %1号 舵机角度为 %2";

Blockly.Msg.PROCESS_CONTROL_SOLAR_SET_SERVO1_MESSAGE0="太阳能板 设置 1号 舵机角度为 %1（0 ~ 180°）";
Blockly.Msg.PROCESS_CONTROL_SOLAR_SET_SERVO2_MESSAGE0="太阳能板 设置 2号 舵机角度为 %1（10 ~ 90°）";

Blockly.Msg.PROCESS_CONTROL_SOLAR_GET_LIGHT_VAL_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SOLAR_GET_LIGHT_VAL_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SOLAR_GET_LIGHT_VAL_MESSAGE0="太阳能板 获取4组光线值";

Blockly.Msg.PROCESS_CONTROL_SOLAR_GET_LIGHT_NUM_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SOLAR_GET_LIGHT_NUM_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SOLAR_GET_LIGHT_NUM_MESSAGE0="太阳能板 获取第 %1 组光线值";

Blockly.Msg.PROCESS_CONTROL_GET_FORCE_MEASURE_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_GET_FORCE_MEASURE_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_GET_FORCE_MEASURE_MESSAGE0="I2C称重传感器";

Blockly.Msg.PROCESS_CONTROL_SCREEN_INIT_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SCREEN_INIT_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SCREEN_INIT_MESSAGE0="初始化屏幕";

Blockly.Msg.PROCESS_CONTROL_SCREEN_SHOW_LARGE="大";
Blockly.Msg.PROCESS_CONTROL_SCREEN_SHOW_SMALL="小";
Blockly.Msg.PROCESS_CONTROL_SCREEN_SHOW_MEDIUM="中";

Blockly.Msg.PROCESS_CONTROL_SCREEN_SHOW_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SCREEN_SHOW_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SCREEN_SHOW_MESSAGE0="显示文字 %1 字体 %2 X %3 Y %4";

Blockly.Msg.PROCESS_CONTROL_SCREEN_CLEAR_HELPURL="";
Blockly.Msg.PROCESS_CONTROL_SCREEN_CLEAR_TOOLTIP="";
Blockly.Msg.PROCESS_CONTROL_SCREEN_CLEAR_MESSAGE0="清空屏幕";

Blockly.Msg.PROCESS_CONTROL_AIcamera_ai_init_MESSAGE0 = '初始化AI:%1';
Blockly.Msg.PROCESS_CONTROL_AIcamera_face_recognization_init_MESSAGE0 = '人脸识别初始化 人脸分类数量%1 识别阈值%2';
Blockly.Msg.PROCESS_CONTROL_AIcamera_self_learning_classifier_init_MESSAGE0 = '自学习分类初始化 分类数量%1 训练集数量%2';
Blockly.Msg.PROCESS_CONTROL_AIcamera_qrcode_init_MESSAGE0 = '二维码识别初始化';
Blockly.Msg.PROCESS_CONTROL_AIcamera_color_init_MESSAGE0 = '颜色识别初始化';
Blockly.Msg.PROCESS_CONTROL_AIcamera_kmodel_init_MESSAGE0 = 'KPU模型 图像分类初始化 模型路径:%1 图像宽度:%2 图像高度:%3';
Blockly.Msg.PROCESS_CONTROL_AIcamera_kmodel_yolo_init_MESSAGE0 = 'KPU模型 目标检测初始化 模型路径:%1 图像宽度:%2 图像高度:%3 锚点（列表）:%4';
Blockly.Msg.PROCESS_CONTROL_AICAMERA_2_SENSOR_BASIC_SETTING_MESSAGE0 = '配置摄像头参数 %19 双缓冲%17 %11 摄像头帧大小%1 %12摄像头帧格式%2 %13 水平镜像模式%3 垂直翻转模式%4 %14 白平衡%5 自动增益%16 %15 摄像头亮度%6 对比度%7 饱和度%8 设置摄像头拍摄 宽度%9 设置摄像头拍摄 高度%10 时钟频率HZ%18';
Blockly.Msg.PROCESS_CONTROL_AICAMERA_2_TRACE_COLOR_MESSAGE0 = '寻找色块初始化';
Blockly.Msg.PROCESS_CONTROL_AICAMERA_2_COLOR_STATISTICS_init_MESSAGE0 = '图像处理初始化';
Blockly.Msg.PROCESS_CONTROL_AICAMERA_2_COLOR_EXTRACTO_init_MESSAGE0 = 'LAB颜色提取器初始化';
Blockly.Msg.PROCESS_CONTROL_AICAMERA_2_AprilTag_init_MESSAGE0 = 'AprilTag模式初始化';
Blockly.Msg.PROCESS_CONTROL_AICAMERA_2_SW_MESSAGE0="切换至 %1模式";
Blockly.Msg.PROCESS_CONTROL_AIcamera_video_capture_MESSAGE0 = '录制视频 路径:%1 录制的帧间隔(us):%2 jpeg 压缩质量(%):%3 录制屏幕宽度:%4 录制屏幕高度:%5 录制时间(s):%6';

Blockly.Msg.PROCESS_CONTROL_AIcamera_face_recognization_add_face_MESSAGE0 = '按 S1键 添加人脸数据';
Blockly.Msg.PROCESS_CONTROL_AIcamera_self_learning_classifier_add_class_img_MESSAGE0 = '按 S1键 按顺序添加分类图片';
Blockly.Msg.PROCESS_CONTROL_AIcamera_self_learning_classifier_add_sample_img_MESSAGE0 = '按 S2键 添加训练集图片';
Blockly.Msg.PROCESS_CONTROL_AIcamera_add_qrcode_MESSAGE0 = '按 S1键 按顺序添加二维码数据，二维码数量 %1';
Blockly.Msg.PROCESS_CONTROL_AIcamera_add_color_MESSAGE0 = '按 S1键 按顺序添加颜色数据，数量 %1';

Blockly.Msg.PROCESS_CONTROL_HUM_TEM_MESSAGE0 = '获取 %1';

Blockly.Msg.PROCESS_CONTROL_NEWRFID_SCAN_MESSAGE0 = '射频卡 扫描';
Blockly.Msg.PROCESS_CONTROL_NEWRFID_SCAN_DATA_MESSAGE0 = '射频卡 扫描数据';
Blockly.Msg.PROCESS_CONTROL_NEWRFID_GETSERIAL_MESSAGE0 = '射频卡 获取序列号';
Blockly.Msg.PROCESS_CONTROL_NEWRFID_SET_MESSAGE0 = '射频卡 初始化电子钱包';
Blockly.Msg.PROCESS_CONTROL_NEWRFID_MONEY_MESSAGE0 = '射频卡 给电子钱包 %1 金额 %2';
Blockly.Msg.PROCESS_CONTROL_NEWRFID_GET_MESSAGE0 = '射频卡 获取电子钱包余额';

Blockly.Msg.PROCESS_CONTROL_AICAMERA_V831_UART_INIT_MESSAGE0 = 'AI摄像头初始化';

Blockly.Msg.PROCESS_CPNTROL_GET_FORCE_G = '质量（g）';
Blockly.Msg.PROCESS_CPNTROL_GET_FORCE_N = '力（N）';

Blockly.Msg.PROCESS_CPNTROL_GET_FORCE_MEASURE_TOOLTIP = '';
Blockly.Msg.PROCESS_CPNTROL_GET_FORCE_MEASURE_MESSAGE0 = 'I2C 力--称重传感器 %1';

Blockly.Msg.PROCESS_CPNTROL_SET_M1_OPEN_TOOLTIP = '输出功率：-100 ~ 100，正数为正转，负数为反转';
Blockly.Msg.PROCESS_CPNTROL_SET_M1_OPEN_MESSAGE0 = '打开 M1电源 输出功率 %1';
Blockly.Msg.PROCESS_CPNTROL_SET_M1_OPEN_TIME_TOOLTIP = '输出功率：-100 ~ 100，正数为正转，负数为反转';
Blockly.Msg.PROCESS_CPNTROL_SET_M1_OPEN_TIME_MESSAGE0 = '打开 M1电源 输出功率 %1 持续 %2 秒';
Blockly.Msg.PROCESS_CPNTROL_SET_M1_CLOSE_MESSAGE0 = '关闭 M1电源';


/* 信息科技示教板 end */

Blockly.Msg.ON = "打开";
Blockly.Msg.OFF = "关闭";

//Udplink
Blockly.Msg.PYTHON_MPYTHONLINKLIB_HELPURL="";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_TOOLTIP = "";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_MESSAGE0 = "Udplink连接硬件客户端%1 %5硬件ip地址：%2 硬件端口号（默认100）：%3 硬件类型：%4";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_HARDWARE_TYPE1_MESSAGE0 = "掌控板";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_HARDWARE_TYPE2_MESSAGE0 = "掌控魔盒";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_HARDWARE_TYPE3_MESSAGE0 = "乐动掌控";

Blockly.Msg.PYTHON_MPYTHONLINKLIB_SETSPEED_HELPURL="";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_SETSPEED_TOOLTIP = "";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_SETSPEED_MESSAGE0 = "客户端%1 设置左轮速度%2右轮速度%3 ";

Blockly.Msg.PYTHON_MPYTHONLINKLIB_STOP_HELPURL="";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_STOP_TOOLTIP = "";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_STOP_MESSAGE0 = "客户端%1 马达停止";

Blockly.Msg.PYTHON_MPYTHONLINKLIB_MBYD_HELPURL="";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_MBYD_TOOLTIP = "";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_MBYD_MESSAGE0 = "客户端%1 在速度%2下移动%3cm";

Blockly.Msg.PYTHON_MPYTHONLINKLIB_MBYT_HELPURL = "";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_MBYT_TOOLTIP = "";
Blockly.Msg.PYTHON_MPYTHONLINKLIB_MBYT_MESSAGE0 = "客户端%1 设置 左轮速度%2右轮速度%3 移动%4秒";


/* 乐动掌控-pro start */
Blockly.Msg.LEDONG_PRO_EncoderMotor_I2C_MESSAGE0 = '设置编码电机 M1速度: %1 M2速度: %2';
Blockly.Msg.LEDONG_PRO_EncoderMotor_I2C_TOOLTIP = '速度: -100 ~ 100';

Blockly.Msg.LEDONG_PRO_EncoderMotor_angle_TOOLTIP = '速度: -100 ~ 100';
Blockly.Msg.LEDONG_PRO_EncoderMotor_angle_MESSAGE0 = '设置编码电机 %1 速度: %2';

Blockly.Msg.LEDONG_PRO_LINE_FOLLOW_INIT_MESSAGE0 = '初始化 红外巡线传感器 %1 A0 %2 A1 %3';

Blockly.Msg.LEDONG_PRO_LINE_FOLLOW_SET_THRESHOLD_MESSAGE0 = '设置 红外巡线传感器%1 %4 A0阈值为 %2 A1阈值为%3';
Blockly.Msg.LEDONG_PRO_LINE_FOLLOW_SET_THRESHOLD_TOOLTIP = '设置范围为0-4095';

Blockly.Msg.LEDONG_PRO_LINE_FOLLOW_MESSAGE0 = '红外巡线传感器%1 %2检测结果为 %3';

Blockly.Msg.LEDONG_PRO_LINE_FOLLOW_GET_VALUE_MESSAGE0 = '获取 红外巡线传感器%1 检测结果列表';

Blockly.Msg.LEDONG_PRO_LINE_FOLLOW_GET_RAW_VALUE_MESSAGE0 = '获取 红外巡线传感器%1 检测值列表';

Blockly.Msg.JOINT_READ_DIGITAL_MESSAGE0 = '读取接口 %1 数字值';
Blockly.Msg.JOINT_SET_DIGITAL_MESSAGE0 = '设置接口 %2 数字值为 %1';
Blockly.Msg.JOINT_READ_ANALOG_MESSAGE0 = '读取接口 %1 模拟值';
Blockly.Msg.JOINT_SET_ANALOG_MESSAGE0 = '设置接口 %2 模拟值为 %1';
Blockly.Msg.JOINT_READ_I2C_MESSAGE0 = '读取接口（I2C） %1 字节数';
Blockly.Msg.JOINT_SET_I2C_MESSAGE0 = '写入接口（I2C %2 字节数为 %1';


/* 乐动掌控-pro end */

/* 掌控板 3.0 start */
Blockly.Msg.mpython_v3_read_light_MESSAGE0 = '光线值（lx）';
Blockly.Msg.mpython_v3_read_light_TOOLTIP = '单位‌：勒克斯（lx）';
Blockly.Msg.mpython_v3_radio_loudness_MESSAGE0 = '噪声值（dB）';
Blockly.Msg.mpython_v3_radio_loudness_TOOLTIP = '单位‌：分贝（dB）\n噪音测量应用不能与录音同时使用，否则会导致录音数据异常';

// GUI
Blockly.Msg.MPYTHON_V3_GUI_BG_COLOR_MESSAGE0 = '设置屏幕颜色 %1';
Blockly.Msg.MPYTHON_V3_GUI_CLEAR_MESSAGE0 = '屏幕 显示 %1';
Blockly.Msg.MPYTHON_V3_GUI_SHOW_MESSAGE0 = '屏幕 显示生效';
Blockly.Msg.MPYTHON_V3_GUI_TXT_ROW_MESSAGE0 = '屏幕 第 %1 行显示 %2 颜色 %3 %4';
Blockly.Msg.MPYTHON_V3_GUI_CLEAR_ROW_MESSAGE0 = '屏幕 清除第 %1 行';
Blockly.Msg.MPYTHON_V3_GUI_TXT_MESSAGE0 = '显示文本 X %1 Y %2 内容 %3 宽 %4 颜色 %5 %6';
Blockly.Msg.MPYTHON_V3_GUI_POINT_MESSAGE0 = '描点 X %1 Y %2 颜色 %3 状态 %4';
Blockly.Msg.MPYTHON_V3_GUI_PROGRESS_BAR_MESSAGE0 = '进度条 X %1 Y %2 宽 %3 高 %4 进度 %5 边框颜色 %6 填充颜色 %7';
Blockly.Msg.MPYTHON_V3_GUI_HOR = '水平';
Blockly.Msg.MPYTHON_V3_GUI_VER = '垂直';
Blockly.Msg.MPYTHON_V3_GUI_COLUMNAR_BAR_MESSAGE0 = '柱状条 %1 X %2 Y %3 宽 %4 高 %5 进度 %6 边框颜色 %7 填充颜色 %8';
Blockly.Msg.MPYTHON_V3_GUI_DRAW = '绘制';
Blockly.Msg.MPYTHON_V3_GUI_ERASE = '擦除';
Blockly.Msg.MPYTHON_V3_GUI_LINE_HV_MESSAGE0 = '%1 %2 线 X %3 Y %4 长度 %5 粗细 %6 颜色 %7';
Blockly.Msg.MPYTHON_V3_GUI_LINE_MESSAGE0 = '%1 线 X1 %2 Y1 %3 X2 %4 Y2 %5 粗细 %6 颜色 %7';
Blockly.Msg.MPYTHON_V3_GUI_FILL = '实心';
Blockly.Msg.MPYTHON_V3_GUI_NO_FILL = '空心';
Blockly.Msg.MPYTHON_V3_GUI_RECT_MESSAGE0 = '%1 %2 矩形 X %3 Y %4 宽 %5 高 %6 边框粗细 %7 边框颜色 %8 填充颜色 %9 圆角半径 %10';
Blockly.Msg.MPYTHON_V3_GUI_RECT_RADIUS_MESSAGE0 = '%1 弧角边框 X %2 Y %3 宽 %4 高 %5 边框粗细 %6 边框颜色 %7 半径 %8';
Blockly.Msg.MPYTHON_V3_GUI_ROUND_MESSAGE0 = '%1 %2 圆 X %3 Y %4 半径 %5 边框粗细 %6 边框颜色 %7 填充颜色 %8';
Blockly.Msg.MPYTHON_V3_GUI_ROUND_TOOLTIP = 'X和Y是圆心坐标';
Blockly.Msg.MPYTHON_V3_GUI_TRIANGLE_MESSAGE0 = '%1 %2 三角 %10 X1 %3 Y1 %4 X2 %5 Y2 %6 X3 %7 Y3 %8 颜色 %9';
Blockly.Msg.MPYTHON_V3_GUI_STAR_MESSAGE0 = '%1 %2 五角星 中心坐标 X %3 Y %4 半径 %5 颜色 %6';
Blockly.Msg.MPYTHON_V3_GUI_BITMAP_MESSAGE0 = '绘制图像%6 X %1 Y %2 宽 %3 高 %4 16进制图像数据 %5';
Blockly.Msg.MPYTHON_V3_GUI_BUILT_IN_IMG_MESSAGE0 = '内置图片 %1';
Blockly.Msg.MPYTHON_V3_GUI_CUSTOM_IMG_MESSAGE0 = '自定义图像 %1';
Blockly.Msg.MPYTHON_V3_GUI_CUSTOM_IMG_TOOLTIP = '图片大小建议在 100kb 以内，当前仅支持 .png 格式的图片';
Blockly.Msg.MPYTHON_V3_GUI_SHOW_IMG_MESSAGE0 = '在坐标 %1 X %2 Y %3 显示图片 %4';
Blockly.Msg.MPYTHON_V3_GUI_DIGIT_FONT_16 = '仿数码管 16像素';
Blockly.Msg.MPYTHON_V3_GUI_DIGIT_FONT_32 = '仿数码管 32像素';
Blockly.Msg.MPYTHON_V3_GUI_DIGIT_FONT_64 = '仿数码管 64像素';
Blockly.Msg.MPYTHON_V3_GUI_DIGIT_FONT_96 = '仿数码管 96像素';
Blockly.Msg.MPYTHON_V3_GUI_DIGIT_FONT_128 = '仿数码管 128像素';
Blockly.Msg.MPYTHON_V3_GUI_DOT_DIGIT_FONT_64 = '仿数码管64像素（点阵风格）';
Blockly.Msg.MPYTHON_V3_GUI_DOT_DIGIT_FONT_128 = '仿数码管128像素（点阵风格）';
Blockly.Msg.MPYTHON_V3_GUI_DOT_DIGIT_MESSAGE0 = '在坐标 X %1 Y %2 显示 %3 %4 %5';
Blockly.Msg.MPYTHON_V3_GUI_QRCODE_MESSAGE0 = '坐标%6 X %1 Y %2 绘制二维码 %3 %4 颜色 %5';
Blockly.Msg.MPYTHON_V3_GUI_CLOCK_MESSAGE0 = '绘制 时钟 X %1 Y %2 半径 %3';
Blockly.Msg.MPYTHON_V3_GUI_LOOP_EVENT_MESSAGE0 = '当 屏幕更新任务 %1 执行时';
Blockly.Msg.MPYTHON_V3_GUI_LOOP_OPERATE_DESTROY = '销毁';
Blockly.Msg.MPYTHON_V3_GUI_LOOP_OPERATE_DISABLE = '减少调度计数';
Blockly.Msg.MPYTHON_V3_GUI_LOOP_OPERATE_ENABLE = '增加调度计数';
Blockly.Msg.MPYTHON_V3_GUI_LOOP_OPERATE_MESSAGE0 = '屏幕更新任务 %1 执行 %2 操作';
// 控件
Blockly.Msg.MPYTHON_V3_GUI_BTN_INIT_MESSAGE0 = '定义 按钮 %1 名称 %2 X %3 Y %4 宽 %5 高 %6 字体颜色 %7 背景颜色 %8';
Blockly.Msg.MPYTHON_V3_GUI_BTN_INIT_TOOLTIP = '按A键触发按钮的点击事件；\n按B键切换到下一个按钮。';
Blockly.Msg.MPYTHON_V3_GUI_BTN_EVENT_MESSAGE0 = '当 按钮 %1 被点击';
Blockly.Msg.MPYTHON_V3_GUI_BTN_EVENT_COMMENT = '按A键触发按钮点击事件\n\n按B键切换下一个按钮。';

Blockly.Msg.MPYTHON_V3_GUI_TEXTAREA_SINGLE_ROW = '单行模式';
Blockly.Msg.MPYTHON_V3_GUI_TEXTAREA_MULTILINE = '多行模式';
Blockly.Msg.MPYTHON_V3_GUI_TEXTAREA_INIT_MESSAGE0 = '定义 文本框 %1 内容 %2 X %3 Y %4 宽 %5 高 %6 %7';
Blockly.Msg.MPYTHON_V3_GUI_TEXTAREA_SET_COLOR_MESSAGE0 = '设置 文本框 %1 字体颜色 %2 背景颜色 %3 边框颜色 %4';
Blockly.Msg.MPYTHON_V3_GUI_TEXTAREA_SET_TXT_MESSAGE0 = '更新 文本框 %1 内容为 %2';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_MODE_CLIP = '超出部分隐藏';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_MODE_WRAP = '自动换行';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_MODE_DOTS = '超出部分省略号代替';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_MODE_SCROLL = '水平来回滚动';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_MODE_SCROLL_CIRCULAR = '水平循环滚动';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_INIT_MESSAGE0 = '定义 标签 %1 名称 %2 X %3 Y %4 宽 %5 高 %6 字体 %7 颜色 %8 %9';
Blockly.Msg.MPYTHON_V3_GUI_LABEL_SET_TXT_MESSAGE0 = '更新 标签 %1 内容为 %2 颜色 %3';
Blockly.Msg.MPYTHON_V3_GUI_TABLE_INIT_MESSAGE0 = '定义 表格 %1 X %2 Y %3 宽 %4 行数 %5 列数 %6';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_MODE_HORIZONTAL_BOTTOM = '水平刻度尺';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_MODE_VERTICAL_RIGHT = '垂直刻度尺';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_MODE_ROUND_INNER = '环形刻度尺';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_INIT_MESSAGE0 = '定义 刻度 %1 X %2 Y %3 宽 %4 高 %5 类型 %6 指针数 %7';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_SET_RANGE_MESSAGE0 = '设置 刻度 %1 范围为 %2 到 %3 刻度线和标签颜色为 %4';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_SET_LABEL_MESSAGE0 = '设置 刻度 %1 标签为 %2 刻度线和标签颜色为 %3';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_SET_RED_SECTION_MESSAGE0 = '设置 刻度 %1 红线区范围为 %2 到 %3 刻度线颜色为 %4';
Blockly.Msg.MPYTHON_V3_GUI_SCALE_SET_VALUE_MESSAGE0 = '更新 刻度 %1 第 %2 根指针 值为 %3';

Blockly.Msg.CHART_LINE = '折线图';
Blockly.Msg.CHART_BAR = '柱状图';
Blockly.Msg.CHART_NONE = '隐藏数据';
Blockly.Msg.MPYTHON_V3_GUI_CHART_INIT_MESSAGE0 = '定义 图表 %1 X %2 Y %3 宽 %4 高 %5 曲线数量 %6 类型 %7';
Blockly.Msg.MPYTHON_V3_GUI_CHART_SET_RANGE_MESSAGE0 = '设置 图表 %1 Y轴范围为 %2 到 %3';
Blockly.Msg.MPYTHON_V3_GUI_CHART_ADD_POINT_MESSAGE0 = '向图表 %1 第 %2 条曲线添加一个点 %3';
Blockly.Msg.MPYTHON_V3_GUI_BAR_INIT_MESSAGE0 = '定义 进度条 %1 X %2 Y %3 宽 %4 高 %5';
Blockly.Msg.MPYTHON_V3_GUI_BAR_INIT_TOOLTIP = '进度条默认范围 0 ~ 100';
Blockly.Msg.MPYTHON_V3_GUI_BAR_SET_VALUE_MESSAGE0 = '更新 进度条 %1 值为 %2';
Blockly.Msg.MPYTHON_V3_GUI_BAR_SET_RANGE_MESSAGE0 = '更新 进度条 %1 范围为 %2 到 %3';


Blockly.Msg.MPYTHON_V3_RADIO_INIT_TOOLTIP = '频道：0 ~ 11';
Blockly.Msg.MPYTHON_V3_RADIO_INIT_MESSAGE0 = '初始化 无线广播%1 频道为%2';

Blockly.Msg.MPYTHON_V3_RADIO_SEND_MESSAGE0 = '%1 发送 %2';

Blockly.Msg.MPYTHON_V3_RADIO_RECV_MSG = '收到的消息';
Blockly.Msg.MPYTHON_V3_RADIO_RECV_MAC = '发送端的MAC地址';
Blockly.Msg.MPYTHON_V3_RADIO_RECV_RSSI = '信号强度(dBm)';
Blockly.Msg.MPYTHON_V3_RADIO_RECV_MESSAGE0 = '当 %1 收到无线广播消息 时';

Blockly.Msg.MPYTHON_V3_RADIO_MODE_STA = 'sta地址';
Blockly.Msg.MPYTHON_V3_RADIO_MODE_AP = 'ap地址';
Blockly.Msg.MPYTHON_V3_RADIO_GET_MAC_MESSAGE0 = '%1 MAC地址 模式%2';

Blockly.Msg.MPYTHON_V3_RADIO_SEND_BY_MAC_MESSAGE0 = '%1 指定MAC %2 发送 %3';

/* 掌控板 3.0 end */


/* 乐动掌控 2.0 start */
Blockly.Msg.LEDONG_V2_CAMERA_INIT_MESSAGE0 = '初始化摄像头 模型 %1';
Blockly.Msg.LEDONG_V2_MODE_FACE_DETECTION = '人脸检测';
Blockly.Msg.LEDONG_V2_MODE_FACE_RECOGNITION = '人脸识别';
Blockly.Msg.LEDONG_V2_MODE_CAT_FACE_DETECTION = '猫狗检测';
Blockly.Msg.LEDONG_V2_MODE_COLOR_DETECTION = '颜色识别';
Blockly.Msg.LEDONG_V2_MODE_MOTION_DEECTION = '运动检测';
Blockly.Msg.LEDONG_V2_MODE_CODE_SCANNER = '二维码识别';
Blockly.Msg.LEDONG_V2_CAMERA_IS_DETECT_MESSAGE0 = '如果检测到结果';
Blockly.Msg.LEDONG_V2_CAMERA_GET_RES_MESSAGE0 = '检测结果（原始数据）';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_NUM_MESSAGE0 = '人脸检测 人脸数量';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_POS_MESSAGE0 = '人脸检测 第 %1 张人脸的 位置';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_POS_TOOLTIP = '结果为元组，分别对应(x1, y1, x2, y2)';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_MOUTH_LEFT = '左嘴角';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_MOUTH_RIGHT = '右嘴角';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_NOSE = '鼻子';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_EYE_LEFT = '左眼';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_EYE_RIGHT = '右眼';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_MESSAGE0 = '人脸检测 第 %1 张人脸关键点 %2 的坐标';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_DETECTION_KEY_POINTS_TOOLTIP = '结果为元组，分别为(x, y)';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_DETECT_MESSAGE0 = '人脸识别 运行识别';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_ADD_RECORD_MESSAGE0 = '人脸识别 添加人脸数据';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_DEL_RECORD_MESSAGE0 = '人脸识别 删除人脸记录';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_GET_SIM = '置信度';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_GET_POS = '人脸位置';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_GET_ID_MESSAGE0 = '人脸识别 %1';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_GET_ID_TOOLTIP = '人脸位置结果为元组，分别对应(x1, y1, x2, y2)';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_KEY_POINTS_MESSAGE0 = '人脸识别 关键点 %1 的坐标';
Blockly.Msg.LEDONG_V2_CAMERA_GET_FACE_RECOGNITION_KEY_POINTS_TOOLTIP = '结果为元组，分别对应(x1, y1, x2, y2)';
Blockly.Msg.LEDONG_V2_CAMERA_GET_CAT_FACE_DETECTION_NUM_MESSAGE0 = '猫狗检测 脸的数量';
Blockly.Msg.LEDONG_V2_CAMERA_GET_CAT_FACE_DETECTION_POS_MESSAGE0 = '猫狗检测 第 %1 张脸的 位置';
Blockly.Msg.LEDONG_V2_CAMERA_GET_CAT_FACE_DETECTION_KEY_POINTS_MESSAGE0 = '猫狗检测 第 %1 张脸关键点 %2 的坐标';
Blockly.Msg.LEDONG_V2_CAMERA_MOTION_DETECTION_GET_RES_MESSAGE0 = '有在运动';
Blockly.Msg.LEDONG_V2_CAMERA_QR_CODE_DETECTION_GET_RES_MESSAGE0 = '二维码内容';
Blockly.Msg.LEDONG_V2_CAMERA_Add_Otherwise_Branch = '添加否则分支';
Blockly.Msg.LEDONG_V2_CAMERA_Add_conditions = '添加条件';
Blockly.Msg.LEDONG_V2_CAMERA_Used_for_managing_mutant_sub_blocks = '用于管理变异器子块';
Blockly.Msg.LEDONG_V2_CAMERA_If_detected = '如果检测到';
Blockly.Msg.LEDONG_V2_CAMERA_execute = '执行';

/* 乐动掌控 2.0 end */

Blockly.Msg.PM25_DC01_INIT_MESSAGE0 = '初始化 PM2.5 模块，TX %1 RX %2';
Blockly.Msg.PM25_DC01_READ_MESSAGE0 = 'PM2.5 (ug/m3)';

/* AI摄像头4.0 start */
Blockly.Msg.AICAMERA_V4_INIT_MESSAGE0 = 'AI摄像头4.0 初始化 TX %1 RX %2';
Blockly.Msg.AICAMERA_V4_AI_NONE = '无';
Blockly.Msg.AICAMERA_V4_AI_FACE_DETECTION_MODE = '人脸检测';
Blockly.Msg.AICAMERA_V4_AI_YOLO_DETECT_RECOGNIZE = '80类物体识别';
Blockly.Msg.AICAMERA_V4_AI_LICENSE_PLATE_RECOGNITION = '车牌识别';
Blockly.Msg.AICAMERA_V4_AI_HAND_KEYPOINT_CLASS = '手掌关键点分类';
Blockly.Msg.AICAMERA_V4_AI_FACE_LANDMARK_LIVING_BODY = '眨眼张嘴检测';
Blockly.Msg.AICAMERA_V4_AI_FACE_LANDMARK_EXPRESSION = '表情识别';
Blockly.Msg.AICAMERA_V4_AI_PERSON_KEYPOINT_DETECT = '人体关键点检测';
Blockly.Msg.AICAMERA_V4_AI_QRCODE_RECOGNIZE = '二维码识别';
Blockly.Msg.AICAMERA_V4_AI_FALL_RECOGNIZE = '跌倒检测';
Blockly.Msg.AICAMERA_V4_AI_BAR_CODE_RECOGNIZE = '条形码识别';
Blockly.Msg.AICAMERA_V4_AI_FCR_RECOGNIZE = '人脸识别';
Blockly.Msg.AICAMERA_V4_AI_COLOR_RECOGNIZE = '颜色识别';
Blockly.Msg.AICAMERA_V4_AI_CLASSIFY_MODEL = '分类模型';
Blockly.Msg.AICAMERA_V4_AI_DYNAMIC_GESTURE = '动态手势识别';
Blockly.Msg.AICAMERA_V4_AI_HAND_DETECT = '手掌检测';
Blockly.Msg.AICAMERA_V4_AI_PERSON_DETECT = '人体检测';
Blockly.Msg.AICAMERA_V4_AI_HUMAN_POSTURE_RECOGNIZE = '人体姿态识别';
Blockly.Msg.AICAMERA_V4_AI_INIT_MESSAGE0 = '初始化 AI模型 %1';
Blockly.Msg.AICAMERA_V4_FACE_NUM = '人脸数量';
Blockly.Msg.AICAMERA_V4_FACE_DETECT_GET_RES_MESSAGE0 = '人脸检测结果 %1';
Blockly.Msg.AICAMERA_V4_80_YOLO_RECOGNIZE_ID = '类别id';
Blockly.Msg.AICAMERA_V4_80_YOLO_RECOGNIZE_CATEGORY_LIST = '类别名称';
Blockly.Msg.AICAMERA_V4_80_YOLO_RECOGNIZE_MAX_SCORE = '置信度';
Blockly.Msg.AICAMERA_V4_80_YOLO_RECOGNIZE_GET_RES_MESSAGE0 = '80类物体识别结果 %1';
Blockly.Msg.AICAMERA_V4_LPR_STR = '车牌字符串';
Blockly.Msg.AICAMERA_V4_LPR_GET_RES_MESSAGE0 = '车牌识别结果 %1';
Blockly.Msg.AICAMERA_V4_HAND_KEYPOINT_ID = '手势id';
Blockly.Msg.AICAMERA_V4_HAND_KEYPOINT_STR = '手势字符串';
Blockly.Msg.AICAMERA_V4_HAND_KEYPOINT_GET_RES_MESSAGE0 = '手掌关键点分类结果 %1';
Blockly.Msg.AICAMERA_V4_OPEN_MOUTH_NUM = '眨眼次数';
Blockly.Msg.AICAMERA_V4_BLINK_NUM = '张嘴次数';
Blockly.Msg.AICAMERA_V4_FACE_LIVING_BODY_GET_RES_MESSAGE0 = '眨眼张嘴检测结果 %1';
Blockly.Msg.AICAMERA_V4_FACE_EXPRESSION_ID = '表情id';
Blockly.Msg.AICAMERA_V4_FACE_EXPRESSION_STR = '表情';
Blockly.Msg.AICAMERA_V4_FACE_EXPRESSION_GET_RES_MESSAGE0 = '表情识别结果 %1';
Blockly.Msg.AICAMERA_V4_PERSON_KEYPOINT_DETECT_ID = '姿态识别id';
Blockly.Msg.AICAMERA_V4_PERSON_KEYPOINT_DETECT_GET_RES_MESSAGE0 = '人体姿态识别结果 %1';
Blockly.Msg.AICAMERA_V4_QRCODE_RECOGNIZE_RES = '二维码内容';
Blockly.Msg.AICAMERA_V4_QRCODE_RECOGNIZE_GET_RES_MESSAGE0 = '二维码识别结果 %1';
Blockly.Msg.AICAMERA_V4_BAR_CODE_RECOGNIZE_TYPE = '条形码类型';
Blockly.Msg.AICAMERA_V4_BAR_CODE_RECOGNIZE_INFO = '条形码数据';
Blockly.Msg.AICAMERA_V4_BAR_CODE_RECOGNIZE_GET_RES_MESSAGE0 = '条形码识别结果 %1';
Blockly.Msg.AICAMERA_V4_FALL_RECOGNIZE_ID = '跌倒id';
Blockly.Msg.AICAMERA_V4_FALL_RECOGNIZE_GET_RES_MESSAGE0 = '跌倒检测结果 %1';
Blockly.Msg.AICAMERA_V4_FACE_RECOGNIZE_ID = '人脸id';
Blockly.Msg.AICAMERA_V4_FACE_RECOGNIZE_SCORE = '置信度';
Blockly.Msg.AICAMERA_V4_FACE_RECOGNIZE_GET_RES_MESSAGE0 = '人脸识别结果 %1';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_RED = '红';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_GREEN = '绿';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_BLUE = '蓝';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_INIT_MESSAGE0 = '颜色识别 初始化%7 设置颜色阈值%8 Lmin%1 Lmax%2 Amin%3 Amax%4 Bmin%5 Bmax%6';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_INIT2_MESSAGE0 = '颜色识别 初始化 设置颜色阈值%1';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_INIT2_TOOLTIP = 'color=[[L_min, L_max, A_min, A_max, B_min, B_max], [], []] 多个颜色范围';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_RUN_MESSAGE0 = '颜色识别 运行识别';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_COUNT = '色块数量';
Blockly.Msg.AICAMERA_V4_COLOR_RECOGNIZE_GET_RES_MESSAGE0 = '颜色识别结果 %1';
Blockly.Msg.AICAMERA_V4_CLASSIFY_MODEL_INIT_MESSAGE0 = '分类模型 初始化%5 模型路径%1 标签名称列表%2 置信度阈值%3 nms阈值%4';
Blockly.Msg.AICAMERA_V4_CLASSIFY_MODEL_RUN_MESSAGE0 = '分类模型 运行识别';
Blockly.Msg.AICAMERA_V4_CLASSIFY_MODEL_ID = '分类模型id';
Blockly.Msg.AICAMERA_V4_CLASSIFY_MODEL_SCORE = '分类模型置信度';
Blockly.Msg.AICAMERA_V4_CLASSIFY_MODEL_GET_RES_MESSAGE0 = '分类模型检测结果 %1';
Blockly.Msg.AICAMERA_V4_CLASSIFY_MODEL_GET_RES_DICT_MESSAGE0 = '分类模型检测结果（字典）';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_INIT_MESSAGE0 = '目标检测模型 初始化%5 模型路径%1 标签名称列表%2 置信度阈值%3 nms阈值%4';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_RUN_MESSAGE0 = '目标检测 运行识别';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_ID = 'id';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_NUM = '数量';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_SCORE = '置信度';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_GET_RES_MESSAGE0 = '目标检测 检测结果 %1';
Blockly.Msg.AICAMERA_V4_DETECT_MODEL_GET_RES_DICT_MESSAGE0 = '目标检测检测结果（字典）';
Blockly.Msg.AICAMERA_V4_SWITCHER_MODEL_DEF = '默认';
Blockly.Msg.AICAMERA_V4_SWITCHER_MODEL_MESSAGE0 = '模型切换到 %1';
Blockly.Msg.AICAMERA_V4_DYNAMIC_GESTURE_ID = '手势id';
Blockly.Msg.AICAMERA_V4_DYNAMIC_GESTURE_STR = '手势字符串';
Blockly.Msg.AICAMERA_V4_DYNAMIC_GESTURE_GET_RES_MESSAGE0 = '动态手势识别 识别结果 %1';
Blockly.Msg.AICAMERA_V4_IS_NOT_RECOGNIZE = '是否识别到';
Blockly.Msg.AICAMERA_V4_HAND_DETECT_GET_RES_MESSAGE0 = '手掌检测 是否识别到';
Blockly.Msg.AICAMERA_V4_HAND_DETECT_GET_RES_NUM_MESSAGE0 = '手掌检测 手掌数量';
Blockly.Msg.AICAMERA_V4_PERSON_DETECT_GET_RES_MESSAGE0 = '人体检测 是否识别到';
Blockly.Msg.AICAMERA_V4_PERSON_DETECT_GET_RES_NUM_MESSAGE0 = '人体检测 人体数量';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_INIT_MESSAGE0 = '巡线初始化 是否检测T字路口%1 是否检测斑马线%2 检测线%3';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_RUN_MESSAGE0 = '巡线 运行识别';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_BLACK = '黑线';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_WHITE = '白线';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_CX = '中心点X坐标';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_CY = '中心点Y坐标';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_ANGLE = '倾斜角度';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_IS_INT = '是否检测到T字形路口';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_IS_ZEBRA = '是否检测到斑马线';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_V3_GET_RES_MESSAGE0 = '巡线 结果 %1';
Blockly.Msg.AICAMERA_V4_AI_FACE_REG_PLUS_MODE = '人脸注册';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_INIT_MESSAGE0 = '快速线性回归 初始化 灰度阈值 最大值%1 最小值%2';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_RUN_MESSAGE0 = '快速线性回归 运行识别';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_GET_RES_MESSAGE0 = '快速线性回归 结果 %1';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_GET_RES_TOOLTIP = '包含了直线两个顶点的坐标、直线长度、霍夫变换后直线的长度、角度、以及直线的p值，其中最重要的是theta值，它是霍夫变换后直线的角度（范围：0-179度）';
Blockly.Msg.AICAMERA_V4_LINEAR_REGRESSION_FAST_GET_RES_HELPURL = "https://wiki.alientek.com/docs/Boards/Kendryte/DNK230D/example-image/fast_linear_regression/#%E5%AE%9E%E9%AA%8C%E4%BB%A3%E7%A0%81";
Blockly.Msg.AICAMERA_V4_PERSON_KEYPOINT_REC = '人体骨架关键点识别';
Blockly.Msg.AICAMERA_V4_PERSON_KEYPOINT_REC_GET_RES_MESSAGE0 = '人体骨架关键点识别 识别结果';


/* AI摄像头4.0 end */

/* esp32s3离线语音 start */
Blockly.Msg.ESP32S3_TTS_INIT_HELPURL = "";
Blockly.Msg.ESP32S3_TTS_INIT_TOOLTIP = "";
Blockly.Msg.ESP32S3_TTS_INIT_MESSAGE0 = "语音合成 TTS 初始化";
Blockly.Msg.ESP32S3_TTS_GEN_HELPURL = "";
Blockly.Msg.ESP32S3_TTS_GEN_TOOLTIP = "";
Blockly.Msg.ESP32S3_TTS_GEN_MESSAGE0 = "合成音频并播放：%1";

Blockly.Msg.ESP32S3_ASR_INIT_HELPURL = "";
Blockly.Msg.ESP32S3_ASR_INIT_TOOLTIP = "";
Blockly.Msg.ESP32S3_ASR_INIT_MESSAGE0 = "语音识别 初始化 %3 回应词：%1 识别超时时长（ms） %2";
Blockly.Msg.ESP32S3_ASR_ADD_HELPURL = "";
Blockly.Msg.ESP32S3_ASR_ADD_TOOLTIP = "识别指令越简短，识别率越高\n指令词的数量越多，准度越低";
Blockly.Msg.ESP32S3_ASR_ADD_MESSAGE0 = "添加语音指令 %3 指令拼音(字间需要空格)：%1 指令id %2";
Blockly.Msg.ESP32S3_ASR_ADD_UPDATE_HELPURL = "";
Blockly.Msg.ESP32S3_ASR_ADD_UPDATE_TOOLTIP = "";
Blockly.Msg.ESP32S3_ASR_ADD_UPDATE_MESSAGE0 = "语音指令库更新";
Blockly.Msg.ESP32S3_ASR_CLEAR_HELPURL = "";
Blockly.Msg.ESP32S3_ASR_CLEAR_TOOLTIP = "";
Blockly.Msg.ESP32S3_ASR_CLEAR_MESSAGE0 = "清空语音指令库";
Blockly.Msg.ESP32S3_ASR_GET_ID_HELPURL = "";
Blockly.Msg.ESP32S3_ASR_GET_ID_TOOLTIP = "";
Blockly.Msg.ESP32S3_ASR_GET_ID_MESSAGE0 = "获取语音识别指令的id";

/* esp32s3离线语音 end */

/* 湖南教材 start */
Blockly.Msg.HUNAN_LOOP = "循环执行";
Blockly.Msg.HUNAN_FOR = "重复执行%1次";
Blockly.Msg.HUNAN_DENGDAIZHIDAO = "等待直到%1";
Blockly.Msg.HUNAN_CONTROLS_REPEAT_TITLE = "重复执行直到%1";
Blockly.Msg.HUNAN_TOUCHPAD_EVENT = "当触摸按键%1被%2";
Blockly.Msg.HUNAN_RGB_BRIGHTNESS = "设置LED灯亮度为%1";
Blockly.Msg.HUNAN_RGB_ON = "灯号%1显示颜色%2";
Blockly.Msg.HUNAN_RGB_OFF = "关闭%1LED"; 
Blockly.Msg.HUNAN_RADIO_ON_OFF_MESSAGE0 = '%1 无线广播';
Blockly.Msg.HUNAN_RADIO_RECV_MSG_MESSAGE0 = '当接收到特定消息%1';
Blockly.Msg.HUNAN_init_wifi_MESSAGE0 = 'Wi-Fi 连接到 热点:%1密码:%2';
Blockly.Msg.HUNAN_time_localtime_MESSAGE0 = '获取开发板当前%1';
Blockly.Msg.HUNAN_servo = '设置%1引脚伺服舵机为%2度';
Blockly.Msg.HUNAN_motor = '设置%1%2速度%3%';
Blockly.Msg.HUNAN_motor_ex = '扩展板 设置%1%2速度%3%';
Blockly.Msg.HUNAN_motor_ex_stop = '扩展板 全部停止';
Blockly.Msg.HUNAN_color_init = '初始化颜色传感器 I2C';
Blockly.Msg.HUNAN_get_color = '读取颜色传感器 %1';
Blockly.Msg.HUNAN_DHT11 = '读取%1 DHT11 %2';
Blockly.Msg.HUNAN_ULT = '读取超声波传感器距离';
Blockly.Msg.HUNAN_GPS_INIT = '北斗定位模块初始化 直到成功 TX引脚 %1 RX引脚 %2 串口号%3';
Blockly.Msg.HUNAN_GPS_READ = '读取一次数据存入并结果';
Blockly.Msg.HUNAN_GPS_READ_DATA = '从结果中取文本数据 %1';
Blockly.Msg.HUNAN_RFID = 'RFID 检测到卡片？';
Blockly.Msg.HUNAN_RFID_READ = 'RFID 读取RFID/NFC模块 UID(Number)';
Blockly.Msg.HUNAN_ASR = '识别一次语音，获取编号';
Blockly.Msg.HUNAN_WIFI_ISCONNECTED = 'Wi-Fi 连接成功?';
Blockly.Msg.HUNAN_MAIN = 'ESP32 主程序';
Blockly.Msg.HUNAN_RGB_SET_COLOR = '灯号%1 显示颜色红%2绿%3蓝%4';
Blockly.Msg.HUNAN_ULT_INIT = '初始化I2C超声波传感器';
Blockly.Msg.HUNAN_ULT_INIT = '初始化I2C超声波传感器';
Blockly.Msg.HUNAN_MQTT_INIT = 'MQTT 初始化参数 %1 客户端ID(不可重复) %2 服务器IP %3 用户 %4 密码 %5';
Blockly.Msg.HUNAN_MQTT_CONNECT = 'MQTT 发起连接';
Blockly.Msg.HUNAN_MQTT_CONNECT_SUCCESS = 'MQTT 连接成功？';
Blockly.Msg.HUNAN_MPYTHON_SIOT_SUBSCRIBE_INPUT_WITH = "MQTT 订阅";
Blockly.Msg.HUNAN_MPYTHON_SIOT_SUBSCRIBE_ITEM_TITLE = "MQTT 订阅";
Blockly.Msg.HUNAN_MPYTHON_SIOT_PUBLISH_TO_MESSAGE0 = "MQTT 发送消息 %1 至 %2";
Blockly.Msg.HUNAN_MPYTHON_SIOT_RECEIVE_FROM_MESSAGE0 = "当接收到 %1 的MQTT消息";
Blockly.Msg.HUNAN_MPYTHON_SIOT_RECEIVE_MSG_MESSAGE0 = "当接收到 %1 的消息为%2";
Blockly.Msg.HUNAN_MPYTHON_SIOT_MESSAGE_MESSAGE0 = "MQTT消息";
Blockly.Msg.HUNAN_MPYTHON_SENIVERSE_CITY_WEATHER_NEW_MESSAGE0 = '心知天气服务器初始化 3天天气预报信息 %1 免费API私钥 %2 ';
Blockly.Msg.HUNAN_MPYTHON_GET_SENIVERSE_WEATHER_INFO2_MESSAGE0 = '省份/直辖市%1的%2的%3';
Blockly.Msg.HUNAN_mpython_music_pitch_MESSAGE0 = '后台播放音调%1';
Blockly.Msg.HUNAN_mpython_ntptime_settime_MESSAGE0 = 'NTP设置网络时间,时区 %1 授时服务器 %2';
Blockly.Msg.HUNAN_MPYTHON_SIOT_CONNECT_TOOLTIP = '客户端ID重复的话会出现被挤掉线的情况，默认用户名siot，默认密码zhangkong';
/* 湖南教材 end */

/*dify_mPython*/

Blockly.Msg.DIFY_MPYTHON_HELPURL = ''
Blockly.Msg.DIFY_MPYTHON_MESSAGE0 = '连接到dify_mPython插件 硬件设备id%1';
Blockly.Msg.DIFY_MPYTHON_TOOLTIP = "连接到dify_mPython插件";

Blockly.Msg.DIFY_RECEIVED_MESSAGE0 = '当硬件设备从dify接收到消息时';

Blockly.Msg.DIFY_MPYTHON_MESSAGE_HELPURL = ''
Blockly.Msg.DIFY_MPYTHON_MESSAGE_MESSAGE0 = '来自dify_mPython插件的消息';
Blockly.Msg.DIFY_MPYTHON_MESSAGE_TOOLTIP = "来自dify_mPython插件的消息";

//新产品彩色图片图形化描述替换
Blockly.Msg.MPYTHON_NEW_1 = '心'
Blockly.Msg.MPYTHON_NEW_2 = '心(小)'
Blockly.Msg.MPYTHON_NEW_3 = '高兴'
Blockly.Msg.MPYTHON_NEW_4 = '笑脸'
Blockly.Msg.MPYTHON_NEW_5 = '伤心'
Blockly.Msg.MPYTHON_NEW_6 = '困惑'
Blockly.Msg.MPYTHON_NEW_7 = '生气'
Blockly.Msg.MPYTHON_NEW_8 = '睡着'
Blockly.Msg.MPYTHON_NEW_9 = '惊讶'
Blockly.Msg.MPYTHON_NEW_10 = '愚蠢'
Blockly.Msg.MPYTHON_NEW_11 = '极妙'
Blockly.Msg.MPYTHON_NEW_12 = '无聊'
Blockly.Msg.MPYTHON_NEW_Accept = '正确'
Blockly.Msg.MPYTHON_NEW_Angry = '眼睛-生气'
Blockly.Msg.MPYTHON_NEW_Backward = '箭头-下'
Blockly.Msg.MPYTHON_NEW_Bomb = '炸弹'
Blockly.Msg.MPYTHON_NEW_Bottomleft = '眼睛-左下看'
Blockly.Msg.MPYTHON_NEW_Bottomright = '眼睛-右下看'
Blockly.Msg.MPYTHON_NEW_Crazy1 = '眼睛-疯狂1'
Blockly.Msg.MPYTHON_NEW_Crazy2 = '眼睛-疯狂2'
Blockly.Msg.MPYTHON_NEW_Decline = '错误'
Blockly.Msg.MPYTHON_NEW_Disappointed = '眼睛-失望'
Blockly.Msg.MPYTHON_NEW_Dizzy = '眼睛-眩晕'
Blockly.Msg.MPYTHON_NEW_Down = '眼睛-下看'
Blockly.Msg.MPYTHON_NEW_Fire = '火'
Blockly.Msg.MPYTHON_NEW_Flowers = '花'
Blockly.Msg.MPYTHON_NEW_Forward = '箭头-上'
Blockly.Msg.MPYTHON_NEW_Hurt = '眼睛-伤心'
Blockly.Msg.MPYTHON_NEW_Left = '箭头-左'
Blockly.Msg.MPYTHON_NEW_Lightoff = '灯泡-灭'
Blockly.Msg.MPYTHON_NEW_Lighton = '灯泡-亮'
Blockly.Msg.MPYTHON_NEW_Love = '眼睛-爱心'
Blockly.Msg.MPYTHON_NEW_Middleleft = '眼睛-左看'
Blockly.Msg.MPYTHON_NEW_Middleright = '眼睛-右看'
Blockly.Msg.MPYTHON_NEW_Neutral = '眼睛-正常'
Blockly.Msg.MPYTHON_NEW_Night = '晚上'
Blockly.Msg.MPYTHON_NEW_Nogo = '禁止'
Blockly.Msg.MPYTHON_NEW_paper = '布'
Blockly.Msg.MPYTHON_NEW_Pinchleft = '眼睛-向左挤眼'
Blockly.Msg.MPYTHON_NEW_Pinchmiddle = '眼睛-挤眼'
Blockly.Msg.MPYTHON_NEW_Pinchright = '眼睛-向右挤眼'
Blockly.Msg.MPYTHON_NEW_Right = '箭头-右'
Blockly.Msg.MPYTHON_NEW_rock = '石头'
Blockly.Msg.MPYTHON_NEW_scissors = '剪刀'
Blockly.Msg.MPYTHON_NEW_Snow = '雪'
Blockly.Msg.MPYTHON_NEW_Stop1 = '路标-停止'
Blockly.Msg.MPYTHON_NEW_Tear = '眼睛-挤眼流泪'
Blockly.Msg.MPYTHON_NEW_Thumbsup = '点赞'
Blockly.Msg.MPYTHON_NEW_Up = '眼睛-上看'
Blockly.Msg.MPYTHON_NEW_Winking = '眼睛-眨眼'
Blockly.Msg.MPYTHON_NEW_ArrowDown = '箭头-下'
Blockly.Msg.MPYTHON_NEW_Arrowleft = '箭头-左'
Blockly.Msg.MPYTHON_NEW_ArrowRight = '箭头-右'
Blockly.Msg.MPYTHON_NEW_ArrowUp = '箭头-上'
Blockly.Msg.MPYTHON_NEW_bomb = '炸弹'
Blockly.Msg.MPYTHON_NEW_cloth = '布'
Blockly.Msg.MPYTHON_NEW_correct = '正确'
Blockly.Msg.MPYTHON_NEW_error = '错误'
Blockly.Msg.MPYTHON_NEW_ExpressionAngry = '表情-生气'
Blockly.Msg.MPYTHON_NEW_ExpressionConfusion = '表情-困惑'
Blockly.Msg.MPYTHON_NEW_ExpressionEmbarrassing = '表情-尴尬'
Blockly.Msg.MPYTHON_NEW_Expressionhappy = '表情-高兴'
Blockly.Msg.MPYTHON_NEW_ExpressionLike = '表情-喜欢'
Blockly.Msg.MPYTHON_NEW_ExpressionSad = '表情-伤心'
Blockly.Msg.MPYTHON_NEW_ExpressionSleep = '表情-睡觉'
Blockly.Msg.MPYTHON_NEW_ExpressionSmile = '表情-微笑'
Blockly.Msg.MPYTHON_NEW_Expressionspeechless = '表情-无语'
Blockly.Msg.MPYTHON_NEW_ExpressionSurprised = '表情-惊讶'
Blockly.Msg.MPYTHON_NEW_EyesAnger = '眼神-愤怒'
Blockly.Msg.MPYTHON_NEW_EyesBlink = '眼神-眨眼'
Blockly.Msg.MPYTHON_NEW_Eyesbottomleft = '眼神-左下'
Blockly.Msg.MPYTHON_NEW_Eyesbottomright = '眼神-右下'
Blockly.Msg.MPYTHON_NEW_EyesCrazy1 = '眼神-疯狂1'
Blockly.Msg.MPYTHON_NEW_EyesCrazy2 = '眼神-疯狂2'
Blockly.Msg.MPYTHON_NEW_EyesDisappointment = '眼神-失望'
Blockly.Msg.MPYTHON_NEW_Eyesdizzy = '眼神-晕'
Blockly.Msg.MPYTHON_NEW_EyesLeft = '眼神-左瞄'
Blockly.Msg.MPYTHON_NEW_Eyeslookdown = '眼神-下看'
Blockly.Msg.MPYTHON_NEW_Eyeslookup = '眼神-上看'
Blockly.Msg.MPYTHON_NEW_EyesLoss = '眼神-失落'
Blockly.Msg.MPYTHON_NEW_EyesLove = '眼神-爱心'
Blockly.Msg.MPYTHON_NEW_EyesNormal = '眼神-正常'
Blockly.Msg.MPYTHON_NEW_Eyesright = '眼神-右瞄'
Blockly.Msg.MPYTHON_NEW_Eyestiredlookleft = '眼神-疲惫左看'
Blockly.Msg.MPYTHON_NEW_Eyestiredlookright = '眼神-疲惫右看'
Blockly.Msg.MPYTHON_NEW_EyesTired = '眼神-疲惫'
Blockly.Msg.MPYTHON_NEW_flame = '火'
Blockly.Msg.MPYTHON_NEW_flowers = '花'
Blockly.Msg.MPYTHON_NEW_Lightbulbnoton = '灯泡-未开'
Blockly.Msg.MPYTHON_NEW_Lightbulbon = '灯泡-打开'
Blockly.Msg.MPYTHON_NEW_LoveBig = '爱心-大'
Blockly.Msg.MPYTHON_NEW_Lovesmall = '爱心-小'
Blockly.Msg.MPYTHON_NEW_Moonandstars = '月亮星星'
Blockly.Msg.MPYTHON_NEW_praise = '点赞'
Blockly.Msg.MPYTHON_NEW_prohibited = '禁止'
Blockly.Msg.MPYTHON_NEW_scissors = '剪刀'
Blockly.Msg.MPYTHON_NEW_shedtears = '眼神-流眼泪'
Blockly.Msg.MPYTHON_NEW_snowflakes = '雪花'
Blockly.Msg.MPYTHON_NEW_stone = '石头'
Blockly.Msg.MPYTHON_NEW_stop = '停止'
Blockly.Msg.MPYTHON_NEW_color = '(彩)'


/* esp32 s3板载蓝牙 */
Blockly.Msg.ESP32_BLE_SIMPLE_PERIPHERAL_INIT_MESSAGE0 = '构建蓝牙 BLE 外围设备%5 显示名称 %1 UUID %2 发送端 TX %3 接收端 RX %4';
Blockly.Msg.ESP32_BLE_SIMPLE_PERIPHERAL_ON_WRITE_MESSAGE0 = '当从中心设备接收到消息时';
Blockly.Msg.ESP32_BLE_SIMPLE_PERIPHERAL_ON_WRITE_MESSAGE1 = '收到的消息';
Blockly.Msg.ESP32_BLE_SIMPLE_PERIPHERAL_IS_CONNECTED_MESSAGE0 = '已连接中心设备';
Blockly.Msg.ESP32_BLE_SIMPLE_PERIPHERAL_SEND_MESSAGE0 = '发送数据 %1 到中心设备';

Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_INIT_MESSAGE0 = '构建蓝牙 BLE 中心设备%4 UUID %1 接收端 RX %2 发送端 TX %3';
Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_SCAN_CONNECT_MESSAGE0 = '扫描并连接外围设备';
Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_IS_CONNECTED_MESSAGE0 = '已连接外围设备';
Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_GET_CONNECT_HANDLE_MESSAGE0 = '获取已连接的外围设备信息';
Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_ON_NOTIFY_MESSAGE0 = '当从外围设备接收到消息时';
Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_ON_NOTIFY_MESSAGE1 = '收到的消息';
Blockly.Msg.ESP32_BLE_SIMPLE_CENTRAL_WRITE_MESSAGE0 = '发送数据 %1 到外围设备';


Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_NEW_HELPURL = '获取 力传感器 %1 值';


/* 1956 v2.0 start */
Blockly.Msg._1956_V2_GUI_BG_COLOR_MESSAGE0 = '设置屏幕背景颜色为%1';
Blockly.Msg._1956_V2_GUI_BG_OPA_MESSAGE0 = '设置屏幕背景不透明度为%1%';
Blockly.Msg._1956_V2_GUI_CLEAR_MESSAGE0 = '清空屏幕';
Blockly.Msg._1956_V2_GUI_EVENT_MESSAGE0 = '当';
Blockly.Msg._1956_V2_GUI_GET_ATTR_MESSAGE0 = '获取%1 %2';
Blockly.Msg._1956_V2_GUI_SET_ATTR_MESSAGE0 = '更新%1 %2 为 %3';
Blockly.Msg._1956_V2_GUI_SET_STATUS_MESSAGE0 = '设置%1 为 %2';
Blockly.Msg._1956_V2_GUI_DEF_MESSAGE0 = '把'
Blockly.Msg._1956_V2_GUI_BTN_MESSAGE0 = '按钮';
Blockly.Msg._1956_V2_GUI_LABEL_MESSAGE0 = '文本显示';
Blockly.Msg._1956_V2_GUI_TEXTAREA_MESSAGE0 = '输入框';
Blockly.Msg._1956_V2_GUI_SLIDER_MESSAGE0 = '滑杆';
Blockly.Msg._1956_V2_GUI_SWITCH_MESSAGE0 = '开关';
Blockly.Msg._1956_V2_GUI_IMG_MESSAGE0 = '图片';
Blockly.Msg._1956_V2_GUI_CHART_MESSAGE0 = '图表';
Blockly.Msg._1956_V2_GUI_TABLE_MESSAGE0 = '表格';
Blockly.Msg._1956_V2_GUI_BAR_MESSAGE0 = '进度条';
Blockly.Msg._1956_V2_GUI_CHECKBOX_MESSAGE0 = '复选框';
Blockly.Msg._1956_V2_GUI_DROPDOWN_MESSAGE0 = '下拉列表';
Blockly.Msg._1956_V2_GUI_METER_MESSAGE0 = '仪表';
Blockly.Msg._1956_V2_GUI_OBJ_MESSAGE0 = '容器';
Blockly.Msg._1956_V2_GUI_BY_PARENT_MESSAGE0 = '%1 放到其他控件%2 中';
Blockly.Msg._1956_V2_GUI_BTN_INIT_MESSAGE0 = '定义 按钮%1 名称%2 x%3 y%4 宽%5 高%6 字号%7 字体颜色%8 背景颜色%9';
Blockly.Msg._1956_V2_GUI_BTN_SET_NAME_MESSAGE0 = '更新按钮%1 名称为%2 字号%3';
Blockly.Msg._1956_V2_GUI_BTN_SET_COLOR_MESSAGE0 = '更新按钮%1 字体颜色为%2 背景颜色为%3';
Blockly.Msg._1956_V2_GUI_LABEL_INIT_MESSAGE0 = '定义 %1 显示文本%2 x%3 y%4 宽%5 字号%6 颜色%7 %8';
Blockly.Msg._1956_V2_GUI_LABEL_SET_NAME_MESSAGE0 = '更新%1 文本为%2 字号%3';
Blockly.Msg._1956_V2_GUI_LABEL_SET_COLOR_MESSAGE0 = '更新%1 字体颜色为%2';
Blockly.Msg._1956_V2_GUI_TEXTAREA_INIT_MESSAGE0 = '定义 输入框%1 x%2 y%3 宽%4 高%5 字号%6 字体颜色%7 背景颜色%8 文本模式%9';
Blockly.Msg._1956_V2_GUI_TEXTAREA_GET_TXT_MESSAGE0 = '获取输入框%1 的内容';
Blockly.Msg._1956_V2_GUI_TEXTAREA_SET_TXT_MESSAGE0 = '更新输入框%1 内容为%2 字号%3';
Blockly.Msg._1956_V2_GUI_TEXTAREA_SET_COLOR_MESSAGE0 = '更新输入框%1 字体颜色为%2 背景颜色为%3';
Blockly.Msg._1956_V2_GUI_TEXTAREA_SET_PLACEHOLDER_MESSAGE0 = '设置输入框%1 占位符内容为%2';
Blockly.Msg._1956_V2_GUI_TEXTAREA_SET_MODE_MESSAGE0 = '输入框%1 设置为%2';
Blockly.Msg._1956_V2_GUI_SLIDER_INIT_MESSAGE0 = '定义 滑块%1 x%2 y%3 宽%4 高%5 范围为%6 到%7';
Blockly.Msg._1956_V2_GUI_SLIDER_GET_VALUE_MESSAGE0 = '获取滑块%1 的值';
Blockly.Msg._1956_V2_GUI_SLIDER_SET_VALUE_MESSAGE0 = '更新滑块%1 的值为%2';
Blockly.Msg._1956_V2_GUI_SLIDER_SET_RANGE_MESSAGE0 = '更新滑块%1 的范围为%2 到 %3';
Blockly.Msg._1956_V2_GUI_SWITCH_INIT_MESSAGE0 = '定义 开关%1 x%2 y%3 宽%4 高%5';
Blockly.Msg._1956_V2_GUI_SWITCH_GET_VALUE_MESSAGE0 = '获取开关%1 的状态';
Blockly.Msg._1956_V2_GUI_SWITCH_SET_VALUE_MESSAGE0 = '更新开关%1 的状态为%2';
Blockly.Msg._1956_V2_GUI_IMG_INIT_MESSAGE0 = '定义 图片%1 x%2 y%3 内容为 文件%4 尺寸为%5';
Blockly.Msg._1956_V2_GUI_IMG_TOOLTIP = '仅支持.png格式的图片文件';
Blockly.Msg._1956_V2_GUI_IMG_SET_PATH_MESSAGE0 = '更新图片%1 内容为 文件%2 尺寸为%3';
Blockly.Msg._1956_V2_GUI_IMG_SET_ZOOM_MESSAGE0 = '设置图片%1 放大倍率为%2 %';
Blockly.Msg._1956_V2_GUI_IMG_SET_ANGLE_MESSAGE0 = '设置图片%1 旋转角度为%2 度';
Blockly.Msg._1956_V2_GUI_CHART_INIT_MESSAGE0 = '定义 图表%1 x%2 y%3 宽%4 高%5 曲线数量%6 类型为%7';
Blockly.Msg._1956_V2_GUI_CHART_SET_VALUE_MESSAGE0 = '图表%1 第%2条曲线增加一个点%3';
Blockly.Msg._1956_V2_GUI_CHART_SET_RANGE_MESSAGE0 = '更新图表%1 的Y轴范围为%2 到 %3';
Blockly.Msg._1956_V2_GUI_CHART_CLEAR_MESSAGE0 = '清空图表%1';
Blockly.Msg._1956_V2_GUI_TABLE_INIT_MESSAGE0 = '定义 表格%1 x%2 y%3 宽%4 高%5 字号%6 行数%7 列数%8';
Blockly.Msg._1956_V2_GUI_TABLE_SET_CELL_MESSAGE0 = '设置表格%1 第%2行 数据为%3';
Blockly.Msg._1956_V2_GUI_BAR_INIT_MESSAGE0 = '定义 进度条%1 x%2 y%3 宽%4 高%5 范围为%6 到%7';
Blockly.Msg._1956_V2_GUI_BAR_SET_VALUE_MESSAGE0 = '更新进度条%1 的值为%2';
Blockly.Msg._1956_V2_GUI_BAR_SET_RANGE_MESSAGE0 = '更新进度条%1 的范围为%2 到 %3';
Blockly.Msg._1956_V2_GUI_CHECKBOX_INIT_MESSAGE0 = '定义 复选框%1 文本%2 x%3 y%4 字号%5 字体颜色%6';
Blockly.Msg._1956_V2_GUI_CHECKBOX_GET_VALUE_MESSAGE0 = '获取复选框%1 的状态';
Blockly.Msg._1956_V2_GUI_CHECKBOX_SET_STATE_MESSAGE0 = '设置复选框%1 的状态为%2';
Blockly.Msg._1956_V2_GUI_CHECKBOX_SET_TXT_MESSAGE0 = '更新复选框%1 文本为%2 字号为%3';
Blockly.Msg._1956_V2_GUI_DROPDOWN_INIT_MESSAGE0 = '定义 下拉菜单%1 x%2 y%3 宽%4 字号%5';
Blockly.Msg._1956_V2_GUI_DROPDOWN_GET_INDEX_MESSAGE0 = '获取下拉菜单%1 选中项的索引号';
Blockly.Msg._1956_V2_GUI_DROPDOWN_GET_STR_MESSAGE0 = '获取下拉菜单%1 选中项的内容';
Blockly.Msg._1956_V2_GUI_DROPDOWN_ADD_OPTION_MESSAGE0 = '下拉菜单%1 增加选项%2';
Blockly.Msg._1956_V2_GUI_DROPDOWN_SET_OPTIONS_MESSAGE0 = '更新 下拉菜单%1 选项为%2';
Blockly.Msg._1956_V2_GUI_METER_INIT_MESSAGE0 = '定义 仪表%1 x%2 y%3 宽%4 高%5 指针数%6';
Blockly.Msg._1956_V2_GUI_METER_SET_VALUE_MESSAGE0 = '设置仪表%1 第%2根指针 值为%3';
Blockly.Msg._1956_V2_GUI_METER_SET_RANGE_MESSAGE0 = '设置仪表%1 数值范围为%2 到%3';
Blockly.Msg._1956_V2_GUI_METER_SET_INDICATOR_MESSAGE0 = '设置仪表%1 提醒范围为%2 到%3 颜色为%4';
Blockly.Msg._1956_V2_GUI_OBJ_INIT_MESSAGE0 = '定义 容器%1 x%2 y%3 宽%4 高%5 背景颜色%6 圆角半径%7';
Blockly.Msg._1956_V2_GUI_OBJ_SET_BORDER_MESSAGE0 = '设置容器%1 边框粗细为%2 颜色为%3';
Blockly.Msg._1956_V2_GUI_OBJ_SET_OPA_MESSAGE0 = '设置容器%1 背景不透明度为%2%';

Blockly.Msg._1956_V2_WIFI_STATUS_MESSAGE0 = '获取Wi-Fi状态信息';
Blockly.Msg._1956_V2_WIFI_STATUS_TOOLTIP = 'connected: 是否已连接。\nconfig: 配置信息。\nstatus: 当前网络连接的状态';
Blockly.Msg._1956_V2_ENABLE_APWIFI_TOOLTIP = '密码可以为空，或者8位以上的字母或数字。\nAP模式仅用于主控之间的相互通信，不可以作为热点，令其它设备上网。';
Blockly.Msg._1956_V2_ENABLE_APWIFI_MESSAGE0 = '开启 AP 模式 %1 名称 %2 密码 %3';

Blockly.Msg._1956_V2_RECORD_AUDIO_MESSAGE0 = '录制音频 存储路径%1 时长%2秒';
Blockly.Msg._1956_V2_RECORD_AUDIO_TOOLTIP = '只支持 wav格式 的文件';
Blockly.Msg._1956_V2_PLAY_AUDIO_MESSAGE0 = '播放音频 文件路径%1 音量%2';
Blockly.Msg._1956_V2_PLAY_AUDIO_TOOLTIP = '只支持 wav格式 的文件\n音量：0 ~ 100';
Blockly.Msg._1956_V2_AUDIO_RECORDER_MESSAGE0 = '录制音频并播放 路径%1 时长%2秒 音量%3';
Blockly.Msg._1956_V2_AUDIO_RECORDER_TOOLTIP = '只支持 wav格式 的文件\n音量：0 ~ 100';
Blockly.Msg._1956_V2_PLAY_LOCAL_MESSAGE0 = '音频 播放%1';

Blockly.Msg.MQTT_1956V2_SETUP_HELPURL = '连接1956 v2.0启动的MQTT服务\n设备id不可重复\n服务器地址为启动MQTT服务所在设备连接的wifi信息IP地址';
Blockly.Msg.MQTT_1956V2_SETUP_MESSAGE0 = 'MQTT 1956 v2.0 %1 client_id %2 server %3';


Blockly.Msg._1956_V2_GUI_WS2812_INIT_MESSAGE0 = '初始化灯带 名称%1 引脚%2 数量%3';
Blockly.Msg._1956_V2_SERVO_ANGLE_TOOLTIP = '角度：0 ~ 180\n过渡时间：单位(秒)，0表示立即到达'
Blockly.Msg._1956_V2_SERVO_ANGLE_MESSAGE0 = '设置舵机%1 角度为%2 过渡时间%3'

Blockly.Msg._1956_V2_AI_HELP_URL = 'https://www.kendryte.com/k230_canmv/zh/main/zh/example/ai/AI_Demo%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html';
Blockly.Msg._1956_V2_FACE_DET_INIT_MESSAGE0 = '初始化人脸检测';
Blockly.Msg._1956_V2_FACE_DET_INIT_TOOLTIP = '人脸检测应用对视频中每一个人脸检测，并以检测框的形式标识出来，同时将每个人脸的左眼球、右眼球、鼻尖、左嘴角、右嘴角五个关键点位置标出。';
Blockly.Msg._1956_V2_FACE_DET_GET_RES_MESSAGE0 = '获取人脸检测结果%1';
Blockly.Msg._1956_V2_FACE_REC_INIT_MESSAGE0 = '初始化人脸识别 识别阈值%1';
Blockly.Msg._1956_V2_FACE_REC_INIT_TOOLTIP = '人脸识别应用是基于人脸注册的信息对视频中的每一帧图片做人脸身份识别，如果识别到的人脸在注册数据库中，则标注识别人脸的身份信息，否则显示unknown。';
Blockly.Msg._1956_V2_FACE_REC_GET_RES_MESSAGE0 = '获取人脸识别结果列表';
Blockly.Msg._1956_V2_FACE_REC_HAS_MESSAGE0 = '人脸识别结果包含%1';
Blockly.Msg._1956_V2_FACE_REC_GET_RES_NAME_MESSAGE0 = '人脸识别结果获取%1的%2';
Blockly.Msg._1956_V2_FACE_REG_INIT_MESSAGE0 = '录入人脸 人脸标签%1';
Blockly.Msg._1956_V2_FACE_REG_INIT_TOOLTIP = '人脸注册是人脸识别的前置任务，对人脸数据库中每一张包含人脸的图片进行特征化，并将人脸特征以bin文件的形式写入人脸数据库目录，以备人脸识别程序调用。';
Blockly.Msg._1956_V2_LICENCE_DET_REC_INIT_MESSAGE0 = '初始化车牌识别';
Blockly.Msg._1956_V2_LICENCE_DET_REC_INIT_TOOLTIP = '车牌识别应用是一个双模型任务，首先对视频中出现的车牌进行检测，然后对检测到的每个车牌进行识别，并将识别的车牌内容标识在对应检测框附近。';
Blockly.Msg._1956_V2_LICENCE_DET_REC_GET_RES_MESSAGE0 = '获取车牌识别结果列表';
Blockly.Msg._1956_V2_LICENCE_DET_REC_HAS_MESSAGE0 = '车牌识别结果包含车牌%1';
Blockly.Msg._1956_V2_OBJ_REC_INIT_MESSAGE0 = '初始化80类物体识别';
Blockly.Msg._1956_V2_OBJ_REC_INIT_TOOLTIP = 'yolov8n目标检测应用使用yolov8n模型对COCO的80个类别进行检测，检测结果在屏幕上以检测框的形式标识。';
Blockly.Msg._1956_V2_OBJ_REC_GET_RES_MESSAGE0 = '获取80类物体识别结果%1';
Blockly.Msg._1956_V2_OBJ_REC_GET_RES_IDS = 'id列表';
Blockly.Msg._1956_V2_OBJ_REC_GET_RES_NAMES = 'name列表';
Blockly.Msg._1956_V2_FACE_LANDMARK_INIT_MESSAGE0 = '初始化人脸关键部位检测';
Blockly.Msg._1956_V2_FACE_LANDMARK_INIT_TOOLTIP = '人脸关键部位应用是双模型应用，首先对视频的每一帧图像进行人脸检测，然后对检测到的每一张人脸识别106个关键点，并根据106个关键点绘制人脸、嘴巴、眼睛、鼻子和眉毛区域的轮廓。';
Blockly.Msg._1956_V2_FACE_LANDMARK_GET_RES_MESSAGE0 = '获取人脸关键部位%1';
Blockly.Msg._1956_V2_FACE_LEFT_EYEBROW = '左眉';
Blockly.Msg._1956_V2_FACE_RIGHT_EYEBROW = '右眉';
Blockly.Msg._1956_V2_FACE_LEFT_EYE = '左眼';
Blockly.Msg._1956_V2_FACE_RIGHT_EYEBROW = '右眼';
Blockly.Msg._1956_V2_FACE_PUPIL = '瞳孔';
Blockly.Msg._1956_V2_FACE_BRIDGE_NOSE = '鼻梁';
Blockly.Msg._1956_V2_FACE_WING_NOSE = '鼻翼';
Blockly.Msg._1956_V2_FACE_OUT_LIP = '外唇';
Blockly.Msg._1956_V2_FACE_IN_LIP = '内唇';
Blockly.Msg._1956_V2_FACE_BASIN = '脸部轮廓';
Blockly.Msg._1956_V2_FACE_PARSE_INIT_MESSAGE0 = '初始化人脸解析';
Blockly.Msg._1956_V2_FACE_PARSE_INIT_TOOLTIP = '人脸解析（又称人脸分割）应用是一个双模型应用，首先进行人脸检测，然后实现人脸不同部分的分割。人脸分割包括对眼睛、鼻子、嘴巴等部位的像素级分类，不同区域在屏幕上以不同颜色标识。';
Blockly.Msg._1956_V2_FACE_POSE_INIT_MESSAGE0 = '初始化人脸姿态';
Blockly.Msg._1956_V2_FACE_POSE_INIT_TOOLTIP = '人脸姿态是一个双模型应用，首先对视频的每一帧进行人脸检测，然后对检测到的每张人脸预测人脸朝向。人脸朝向使用欧拉角（roll/yaw/pitch）表示，roll表示人脸左右摇头的程度，yaw表示人脸左右旋转的程度，pitch表示人脸低头抬头的程度。该应用通过构建投影矩阵的方式将人脸朝向可视化到屏幕上。';
Blockly.Msg._1956_V2_FACE_POSE_GET_RES_MESSAGE0 = '获取人脸姿态结果%1';
Blockly.Msg._1956_V2_FACE_POSE_INIT_ORI = '人脸朝向';
Blockly.Msg._1956_V2_PERSON_POINT_INIT_MESSAGE0 = '初始化人体关键点检测';
Blockly.Msg._1956_V2_PERSON_POINT_INIT_TOOLTIP = '人体关键点检测应用使用yolov8n-pose模型对人体姿态进行检测，检测结果得到17个人体骨骼关键点的位置，并用不同颜色的线将关键点连起来在屏幕显示。';
Blockly.Msg._1956_V2_PERSON_POINT_GET_RES_MESSAGE0 = '获取人体关键点坐标列表';
Blockly.Msg._1956_V2_HAN_KEYPOINT_CLASS_INIT_MESSAGE0 = '手掌关键点分类';
Blockly.Msg._1956_V2_HAN_KEYPOINT_CLASS_INIT_TOOLTIP = '手掌关键点分类应用是双模型任务，首先对视频中存在的手掌进行检测，然后对检测到的手掌进行关键点回归，得到关键点信息后通过计算手指之间的角度信息区分不同的手势。';
Blockly.Msg._1956_V2_HAN_KEYPOINT_CLASS_GET_RES_MESSAGE0 = '手掌关键点分类结果列表';
Blockly.Msg._1956_V2_HAN_KEYPOINT_CLASS_GET_RES_TYPE_MESSAGE0 = '手掌关键点分类 识别到%1';
Blockly.Msg._1956_V2_FALL_DEF_INIT_MESSAGE0 = '初始化跌倒检测';
Blockly.Msg._1956_V2_FALL_DEF_INIT_TOOLTIP = '跌倒检测应用对视频中的每一帧图片是否存在人类并对人类的跌倒状态进行检测，如果非跌倒则标识NoFall，如果跌倒则标识Fall。';
Blockly.Msg._1956_V2_FALL_DEF_GET_RES_MESSAGE0 = '跌倒检测 检测到有人跌倒';
Blockly.Msg._1956_V2_OCR_REC_INIT_MESSAGE0 = '初始化文本识别';
Blockly.Msg._1956_V2_OCR_REC_INIT_TOOLTIP = 'OCR识别应用是一个双模型任务，首先对视频中每一帧图片中的文本进行检测，然后对检测到的文本进行识别，最后将检测框在屏幕上标识出来并在检测框附近添加识别文本内容。';
Blockly.Msg._1956_V2_OCR_REC_GET_RES_MESSAGE0 = '获取文本识别结果列表';
Blockly.Msg._1956_V2_OCR_REC_HAS_MESSAGE0 = '文本识别结果包含%1';

// 适配乐动模块
Blockly.Msg._1956_V2_BLUEBIT_GET_COLOR_MESSAGE0 = 'I2C%1 RGB 颜色 %2';
Blockly.Msg._1956_V2_BLUEBIT_GET_ALL_COLOR_MESSAGE0 = 'I2C%1 RGB 颜色';
Blockly.Msg._1956_V2_BLUEBIT_GET_COLOR_HSV_MESSAGE0 = 'I2C%1 HSV 颜色 %2';
Blockly.Msg._1956_V2_BLUEBIT_GET_ALL_COLOR_HSV_MESSAGE0 = 'I2C%1 HSV 颜色';
Blockly.Msg._1956_V2_BLUEBIT_HUM_TEM_MESSAGE0 = 'I2C%1 %2';
Blockly.Msg._1956_V2_GESTURE_READGESTURE_MESSAGE0 = 'I2C%1 手势数据';
Blockly.Msg._1956_V2_BLUEBIT_ULTRASONIC_MESSAGE0 = 'I2C%1 超声波';
Blockly.Msg._1956_V2_BLUEBIT_max30102_INIT_MESSAGE0 = 'I2C%1 心率血氧模块初始化';
Blockly.Msg._1956_V2_BLUEBIT_SEG_DISPLAY_MESSAGE0 = '数码管%1显示%2';
Blockly.Msg._1956_V2_BLUEBIT_SEG_CLEAR_MESSAGE0 = '清空 数码管%1';
Blockly.Msg._1956_V2_EncoderMotor_I2C_INIT_MESSAGE0 = '初始化编码电机 名称%1 引脚%2';
Blockly.Msg._1956_V2_EncoderMotor_I2C_MESSAGE0 = '设置编码电机%1 M1速度: %2 M2速度: %3';
Blockly.Msg._1956_V2_EncoderMotor_stop_MESSAGE0 = '编码电机%1 停止';
Blockly.Msg._1956_V2_EncoderMotor_angle_MESSAGE0 = '设置编码电机%1 %2 速度: %3';
Blockly.Msg._1956_V2_BLUEBIT_MP3_INIT_MESSAGE0 = '初始化MP3 名称%1 引脚%2';
Blockly.Msg._1956_V2_BLUEBIT_MP3_1_VOLUME_MESSAGE0 = '设MP3%1音量%2';
Blockly.Msg._1956_V2_BLUEBIT_MP3_1_CMD_MESSAGE0 = 'MP3%1 播放 %2';
Blockly.Msg._1956_V2_BLUEBIT_MP3_1_PLAY_SONG_MESSAGE0 = 'MP3%1 播放第 %2 首歌';
Blockly.Msg._1956_V2_BLUEBIT_MP3_1_NEW_PLAY_MODE_MESSAGE0 = 'MP3%1 设置%2播放模式';
Blockly.Msg._1956_V2_WEATHER_STATION_INIT_MESSAGE0 = '初始化 气象站 名称%1 引脚%2';
Blockly.Msg._1956_V2_WEATHER_STATION_WIND_PER_MESSAGE0 = '气象站%1 风速 %2';
Blockly.Msg._1956_V2_WEATHER_STATION_WIND_DIRECTION_MESSAGE0 = '气象站%1 风向';
Blockly.Msg._1956_V2_BAROMETRIC_GET_PRESSURE_MESSAGE0 = 'I2C%1气压传感器 气压值';
Blockly.Msg._1956_V2_BAROMETRIC_GET_TRMPERATURE_MESSAGE0 = 'I2C%1气压传感器 温度值';
Blockly.Msg._1956_V2_GET_PH_MEASURE_MESSAGE0 = 'I2C%1 PH传感器值';
Blockly.Msg._1956_V2_GET_TDS_MEASURE_MESSAGE0 = 'I2C%1 电导率传感器值';
Blockly.Msg._1956_V2_GET_ELECTRICITY_MEASURE_MESSAGE0 = 'I2C%1 电流传感器值';
Blockly.Msg._1956_V2_GET_VOLTAGE_MEASURE_MESSAGE0 = 'I2C%1 电压传感器值';
Blockly.Msg._1956_V2_GET_MAGNETIC_MEASURE_MESSAGE0 = 'I2C%1 磁场传感器值';
Blockly.Msg._1956_V2_GET_FORCE_MEASURE_MESSAGE0 = 'I2C%1 力传感器值';
Blockly.Msg._1956_V2_GET_FORCE_MEASURE_NEW_HELPURL = 'I2C%1 力传感器%2值';
Blockly.Msg._1956_V2_speech_recognition_init_MESSAGE0 = '初始化 语音识别模块 %1';
Blockly.Msg._1956_V2_SpeechSynthesis_INIT_MESSAGE0 = '初始化 语音合成模块 %1';
Blockly.Msg._1956_V2_PM25_DC01_INIT_MESSAGE0 = '初始化 PM2.5模块 %1';
Blockly.Msg._1956_V2_ATGM336H_INIT_MESSAGE0 = '初始化 北斗卫星模块 %1';




/* 1956 v2.0 end */

export default Blockly;