<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { Terminal } from '@xterm/xterm';
import { CanvasAddon } from '@xterm/addon-canvas';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

const container = ref(null);
let term, fitAddon;

onMounted(() => {
  initTerm();
});

function initTerm() {
  // 获取容器宽高/字号大小，定义行数和列数
  let of = container.value.offsetWidth / 8
  let cols = of > 170 ? (of - 18) : of > 130 ? (of - 16) : of > 100 ? (of - 12) : of > 60 ? (of - 8) : (of - 4);
  let rows = 30 / (577 / container.value.offsetHeight);
  term = new Terminal({
    useStyle: true,
    screenKeys: true,
    rendererType: 'dom', // 'canvas',
    rows: parseInt(rows), //行数
    cols: parseInt(cols), // 不指定行数，自动回车后光标从下一行开始
    convertEol: true, //启用时，光标将设置为下一行的开头
    // scrollback:100,//终端中的回滚量
    disableStdin: false, //是否应禁用输入。
    cursorStyle: 'underline', //光标样式
    cursorBlink: true, //光标闪烁
    lineHeight: 1.2,
    theme: {
      foreground: '#333', //字体
      background: '#ffffff', //背景色
      cursor: '#000000', //设置光标
      selectionBackground: 'rgba(2, 50, 255, 0.4)',
    },
    fontSize: 14,
    macOptionIsMeta: false
  });

  term.loadAddon(new CanvasAddon());
  fitAddon = new FitAddon();
  term.loadAddon(fitAddon);

  term.open(container.value);
  fitAddon.fit();

  //输入
  term.onData(function (key) {
    console.log(key);
    if (key === '\x7F' || key === '\x08') {
      // 删除一个字符
      term.write('\b \b');
    } else if (key === '\r') {
      // 回车
      term.write('\r\n');
    } else {
      term.write(key);
    }
  })
  
  term.write('Hello from Xterm 5!\r\n');

  window.term = term;
}

onBeforeUnmount(() => {
  term?.dispose();
});

</script>

<template>
  <div class="term-container">
    <div class="term-head">
      <span>终端</span>
    </div>
    <div ref="container" class="term-content"></div>
  </div>
</template>

<style src="./index.css" scoped></style>
