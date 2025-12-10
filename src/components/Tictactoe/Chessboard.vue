<script setup>
import { ref, onMounted } from 'vue';
const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


const props = defineProps([
  'disabled',
  'onChage',
  'mode',
  'level',
  'onOver',
  'player',
  'chesses',
]);

const chessTipsRef = ref(null);
const chessBoardRef = ref(null);
const chesses = ref(new Array(9).fill(null));
const player = ref('x');       // 玩家选择的符号
const role = ref('x');         // 当前执手方
const winner = ref('');        // 赢家
const status = ref(false);     // 棋局状态
const resultTips = ref('');    // 提示
const mode = ref('pvp'); // 'pve' | 'pvp'
const level = ref('hard');
const mask = ref(false);

onMounted(()=> {
  if (props.level) level.value = props.level;
  if (props.mode) mode.value = props.mode;
  if (props.player) player.value = props.player;
  if (props.chesses) chesses.value = props.chesses;
  if (props.disabled) mask.value = true;
})

// ------------------- 基础工具 -------------------
function isFull(chesses) { return chesses.every(Boolean); }

function checkWinner(chesses) {
  for (const [a, b1, c] of WIN_LINES) {
    if (chesses[a] && chesses[a] === chesses[b1] && chesses[a] === chesses[c]) return chesses[a];
  }
  return null;
}

function makeMove(index, player) {
  if (chesses.value[index] || !status.value) return false;
  chesses.value[index] = player;
  props?.onChage(index, player, chesses.value);
  return true;
}

// ------------------- Minimax 算法 -------------------
function minimax(chesses, isMaximizing, playerRoot) {
  const winner = checkWinner(chesses);
  if (winner === playerRoot) return 10;
  if (winner && winner !== playerRoot) return -10;
  if (isFull(chesses)) return 0;

  const currentPlayer = isMaximizing ? playerRoot : (playerRoot === 'x' ? 'o' : 'x');
  let best = isMaximizing ? -Infinity : Infinity;

  for (let i = 0; i < 9; i++) {
    if (!chesses[i]) {
      chesses[i] = currentPlayer;
      const score = minimax(chesses, !isMaximizing, playerRoot);
      chesses[i] = null;
      if (isMaximizing) best = Math.max(best, score);
      else best = Math.min(best, score);
    }
  }
  return best;
}

function bestMove(boardState, player) {
  if (boardState.every(v => !v) && !boardState[4]) return 4;
  let bestScore = -Infinity;
  let move = null;
  for (let i = 0; i < 9; i++) {
    if (!boardState[i]) {
      boardState[i] = player;
      const score = minimax(boardState, false, player);
      boardState[i] = null;
      if (score > bestScore) { bestScore = score; move = i; }
    }
  }
  if (move === null) for (let i = 0; i < 9; i++) if (!boardState[i]) return i;
  return move;
}

// ------------------- AI 落子逻辑 -------------------
function aiSelect() {
  setTimeout(() => {
    let aiMove = null;
    const emptyCells = chesses.value
      .map((v, i) => (v ? null : i))
      .filter(i => i !== null);
    
    if (level.value === 'easy') {
      // 🧸 教笨：完全随机
      aiMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    } else if (level.value === 'normal') {
      // ⚖️ 一般：50% 几率用 minimax，50% 随机
      if (Math.random() < 0.5) {
        aiMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      } else {
        aiMove = bestMove(chesses.value, role.value);
      }
    } else {
      // 🧠 聪明：完全使用 minimax
      aiMove = bestMove(chesses.value, role.value);
    }

    makeMove(aiMove, role.value);
    const w = checkWinner(chesses.value);
    if (w) {
      console.log(mode.value);
      
      resultTips.value = mode.value === 'pvp' ? `玩家${w.toUpperCase()}获胜！` : w === player.value ? '玩家获胜！' : 'AI获胜！';
      winner.value = w.toUpperCase();
      status.value = false;
      props?.onOver({ chesses: chesses.value, winner: winner.value, resultTips: resultTips.value, mode: mode.value });
      return;
    } else if (isFull(chesses.value)) {
      resultTips.value = '平局！';
      winner.value = '---';
      status.value = false;
      props?.onOver({ chesses: chesses.value, winner: winner.value, resultTips: resultTips.value, mode: mode.value });
      return;
    }
    role.value = role.value === 'x' ? 'o' : 'x';
  }, 180);
}

// ------------------- 玩家操作 -------------------
function select(index) {
  if (!status.value || resultTips.value || chesses.value[index]) return;
  
  makeMove(index, role.value);
  let w = checkWinner(chesses.value);
  if (w) {
    resultTips.value = mode.value === 'pvp' ? `玩家${w.toUpperCase()}获胜！` : w === player.value ? '玩家获胜！' : 'AI获胜！';
    winner.value = w.toUpperCase();
    status.value = false;
    props?.onOver({ chesses: chesses.value, winner: winner.value, resultTips: resultTips.value, mode: mode.value });
    return;
  } else if (isFull(chesses.value)) {
    resultTips.value = '平局！';
    winner.value = '---';
    status.value = false;
    props?.onOver({ chesses: chesses.value, winner: winner.value, resultTips: resultTips.value, mode: mode.value });
    return;
  }
  role.value = role.value === 'x' ? 'o' : 'x';
  if (mode.value === 'pvp') return;
  aiSelect()
}

function selectRole(val) { player.value = val }

function setChesses(val) {
  chesses.value = val;
}

function reset(data) {
  chesses.value = data ? data : new Array(9).fill(null);
  role.value = player.value;
  resultTips.value = '';
  winner.value = '';
  status.value = true;
  props?.onChage(-1, player.value, chesses.value);
}

// 用 defineExpose 暴露函数，以便父组件调用
defineExpose({
  select,
  aiSelect,
  setChesses,
  reset,
  selectRole,
  chessTipsRef,
  chessBoardRef
})

</script>

<template>
  <div class="chessboard-box">
    <div class="chess-tisp">
      <span ref="chessTipsRef">当前执手方：<b :style="{color: `var(--${role})`}" v-if="status">{{ role.toUpperCase() }}</b><span v-else>---</span></span>
      <span class="res">{{ resultTips }}</span>
      <span></span>
    </div>
    <div class="chessboard" ref="chessBoardRef">
      <span
        class="chess"
        v-for="(item, index) in chesses"
        @click="select(index)"
        :class="status ? (item ? 'disabled': '') : 'disabled'"
        :style="{color: `var(--${item})`}"
        :key="index"
      >{{ item ? item.toUpperCase() : '' }}</span>
      <div class="mask" v-show="mask"></div>
    </div>
  </div>
</template>

<style scoped>
.chessboard-box {
  width: 100%;
  height: 100%;
}
.chess-tisp {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.chess-tisp span {
  flex: 1;
}
.chess-tisp .res {
  color: #f00;
  text-align: center;
}
.chessboard {
  width: 100%;
  height: calc(100% - 34px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  background-color: #bbb;
  padding: 20px;
  border-radius: 4px;
  position: relative;
}
.chessboard span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 8px;
  cursor: pointer;
  font-size: clamp(30px, 8vmin, 72px);
  font-weight: bold;
}
.chessboard span.disabled {
  cursor: default;
}
.chessboard span:not(.disabled):hover {
  background-color: #ddd;
}

.mask {
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  left: 0;
  top: 0;
}

</style>