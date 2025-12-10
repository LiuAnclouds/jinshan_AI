<script setup>
import { ref, onMounted } from 'vue';
import Chessboard from '@/components/Tictactoe/Chessboard.vue';
import guide from "@/utils/guide";

const chessBoardBoxRef = ref(null);
const chessRecord = ref([]);


const guideStep2 = ref(null);
const guideStep5 = ref(null);
const guideStep6 = ref(null);

onMounted(() => {
  let chesses = new Array(9).fill(null);
  const guideChess = [{pos: 5, player: 'x'}, {pos: 1, player: 'o'}, {pos: 3, player: 'x'}, {pos: 4, player: 'o'}];
  chessRecord.value = guideChess.concat(new Array(5).fill(null).map(() => ({ pos: null, player: '' })));
  for (let i = 0; i < guideChess.length; i++) {
    chesses[guideChess[i].pos - 1] = guideChess[i].player;
  }
  
  chessBoardBoxRef.value.setChesses(chesses);
  const steps = [
    {element: null, popover: {title: '第一步', description: '这是一个井字棋对战游戏工具'}},
    {element: guideStep2.value, popover: {title: '第二步', description: '这是井字棋对战游戏工具介绍'}},
    {element: chessBoardBoxRef.value.chessBoardRef, popover: {title: '第三步', description: '这是棋盘'}},
    {element: chessBoardBoxRef.value.chessTipsRef, popover: {title: '第四步', description: '这里介绍当前执手方'}},
    {element: guideStep5.value, popover: {title: '第五步', description: '开始对局'}},
    {element: guideStep6.value, popover: {title: '第六步', description: '这里是棋谱'}},
  ]
  guide(steps, {
    doneCb: ()=> {
      chessBoardBoxRef.value.setChesses(new Array(9).fill(null));
      chessRecord.value = [];
    }
  })
})

function chessChage(index, player, arr) {
  if (index === -1) {
    chessRecord.value = new Array(9).fill(null).map(() => ({ pos: null, player: '' }));
    return;
  }
  const num = chessRecord.value.findIndex(item => !item.player && item.pos === null);
  if (num === -1) return;
  chessRecord.value[num] = { pos: index + 1, player: player };
}

function onOver(data) {
  saveData(data);
}

function reset() {
  chessBoardBoxRef.value.reset();
}


function saveData(data) {
  try {
    const { chesses, winner, resultTips, mode } = data;
    let dataList = localStorage.getItem('tictactoe-data') || '[]';
    let arr = JSON.parse(dataList);
    const obj = {
      id: String(Date.now()),
      chesses: chesses,
      winner: winner,
      resultTips: resultTips,
      mode: mode,
      chessRecord: chessRecord.value,
      timestamp: Date.now()
    };
    arr = arr.splice(0, 9)
    arr.unshift(obj);
    const dataStr = JSON.stringify(arr);
    localStorage.setItem('tictactoe-data', dataStr);
  } catch (e) {
    console.error('保存游戏数据失败', e);
  }
}
</script>

<template>
  <div class="container">
    <div class="head">
      <RouterLink to="/tictactoe"><button>返回</button></RouterLink>
    </div>
    <div class="content">
      <div class="tool-introduce">
        <span ref="guideStep2">简介：<br />两名玩家分别使用 X 和 O，轮流在 3×3 的棋盘空格中落子，任何一方只要率先在横、竖或斜方向上连成三个相同符号就能获胜；若九个格子全部填满仍无人达成三连线，则本局判为平局</span>
      </div>
      <div class="left-panel">
        <div class="board-head">
          <button class="btn" @click="reset" ref="guideStep5">开始对局</button>
          <button class="btn">下载棋盘文件</button>
        </div>
        <div class="board-box">
          <Chessboard
            ref="chessBoardBoxRef"
            :onChage="chessChage"
            :onOver="onOver"
          />
        </div>
      </div>
      <div class="right-panel" ref="guideStep6">
        <h4 class="title">棋谱</h4>
        <ul class="chess-record">
          <li v-for="(item, index) in chessRecord" :key="index">
            <p>第 {{ index + 1 }} 步</p>
            <span :style="{color: `var(--${item.player})`}">{{ item.pos }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style src="./index.css" scoped></style>