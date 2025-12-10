<script setup>
import { ref } from 'vue';
const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


const props = defineProps([
  'changeState',
  'state',
  'level', // AI 难度 level（easy / normal / hard）
]);

let chesses = ref(new Array(9).fill(null));
let player = ref('x');       // 玩家选择的符号
let role = ref('x');         // 当前执手方
let winner = ref('');        // 赢家
let status = ref(false);     // 棋局状态
let resultTips = ref('');    // 提示
let chessRecord = ref(new Array(9).fill(null).map(() => ({ pos: null, player: '' })));


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
  const num = chessRecord.value.findIndex(item => !item.player && item.pos === null);
  if (num !== -1) chessRecord.value[num] = { pos: index + 1, player: player };
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

    if (props.level === 'easy') {
      // 🧸 教笨：完全随机
      aiMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    } 
    else if (props.level === 'normal') {
      // ⚖️ 一般：50% 几率用 minimax，50% 随机
      if (Math.random() < 0.5) {
        aiMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      } else {
        aiMove = bestMove(chesses.value, role.value);
      }
    } 
    else {
      // 🧠 聪明：完全使用 minimax
      aiMove = bestMove(chesses.value, role.value);
    }

    makeMove(aiMove, role.value);
    const w = checkWinner(chesses.value);
    if (w) {
      resultTips.value = w === player.value ? '玩家获胜！' : 'AI获胜！';
      winner.value = w.toUpperCase();
      status.value = false;
      return;
    } else if (isFull(chesses.value)) {
      resultTips.value = '平局！';
      winner.value = '---';
      status.value = false;
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
    resultTips.value = w === player.value ? '玩家获胜！' : 'AI获胜！';
    winner.value = w.toUpperCase();
    status.value = false;
    return;
  } else if (isFull(chesses.value)) {
    resultTips.value = '平局！';
    winner.value = '---';
    status.value = false;
    return;
  }
  role.value = role.value === 'x' ? 'o' : 'x';
  aiSelect();
}

function selectRole(e) { player.value = e.target.value; }

function reset() {
  chesses.value = new Array(9).fill('');
  role.value = 'x';
  resultTips.value = '';
  winner.value = '';
  status.value = true;
  chessRecord.value = new Array(9).fill(null).map(() => ({ pos: null, player: '' }));
  if (player.value === 'o') aiSelect();
}
</script>

<template>
  <div class="versus-content">
    <div class="board-box">
      <div class="board-head">
        <span>当前执手方：<b :style="{color: `var(--${role})`}" v-if="status">{{ role }}</b><span v-else>---</span></span>
        <span class="res">{{ resultTips }}</span>
        <span></span>
      </div>
      <div class="chessboard">
        <span
          class="chess"
          v-for="(item, index) in chesses"
          @click="select(index)"
          :class="status ? (item ? 'disabled': '') : 'disabled'"
          :style="{color: `var(--${item})`}"
          :key="index"
        >{{ item ? item.toUpperCase() : '' }}</span>
      </div>
    </div>
    <div class="set-info">
      <div class="select-role">
        <label for="选择角色">选择角色：</label>
        <select :value="player" @change="selectRole($event)" :disabled="state < 2 || status">
          <option value="x">X</option>
          <option value="o">O</option>
        </select>
      </div>
      <button @click="reset" :disabled="state < 2 || status" :title="state < 2 ? '请先“训练模型”再开始对战' : ''">{{ winner ? '重开一局' : '开始棋局' }}</button>
      <div class="line"></div>
      <div class="ai-level">AI难度：{{ state < 2 ? '---' : level == 'hard' ? '聪明' : level == 'normal' ? '一般' : '较笨' }}</div>
      <p>玩家：<span :style="{color: `var(--${player})`}">{{ player.toUpperCase() }}</span></p>
      <p>AI：<span :style="{color: `var(--${player === 'x' ? 'o' : 'x'})`}">{{ player === 'x' ? 'O' : 'X' }}</span></p>
      <div class="line"></div>
      <p class="tips">注：棋局为X先手，O后手。</p>
    </div>
  </div>
</template>

<style scoped>
.versus-content {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 20px;
}
.board-box {
  width: 560px;
}
.board-head {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.board-head b {
  font-size: 24px;
}
.board-head .res {
  color: #ef4444;
  font-weight: bold;
}
.chessboard {
  width: 100%;
  height: 560px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  background-color: #bbb;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
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

.set-info {
  flex: 1;
  color: #333;
  font-size: 20px;
  height: 560px;
  border: 1px dashed #ccc;
  border-radius: 4px;
  margin-left: 40px;
  padding: 40px 20px;
  background-color: #eee;
}
.select-role {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.select-role select {
  flex: 1;
  height: 26px;
  outline: none;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 4px;
}
.set-info button {
  width: 100%;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  background-color: #ef4444;
  border-color: #f00;
  border-radius: 4px;
  margin-top: 60px;
}
.set-info button:not([disabled]):hover {
  opacity: 0.8;
}
.set-info button[disabled] {
  opacity: 0.5;
  cursor: no-drop;
}
.line {
  border-bottom: 1px dashed #ccc;
  margin: 20px 0;
}
.ai-level {
  margin: 10px 0;
}
.set-info p {
  margin-bottom: 10px;
}
.set-info .tips {
  color: #666;
  font-size: 16px;
}

</style>