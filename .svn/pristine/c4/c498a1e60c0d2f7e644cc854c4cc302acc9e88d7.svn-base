<script setup>
import { ref, onMounted } from 'vue';
import Chessboard from '@/components/Tictactoe/Chessboard.vue';

const isScore = ref(false);
let visible = ref('');
const role = ref('x');
let status = ref(false);
let attackList = ref(new Array(9).fill(null).map(() => ({ player: '', score: null })));
let defenseList = ref(new Array(9).fill(null).map(() => ({ player: '', score: null })));

const chessBoardRef = ref(null);

function generateXOArray(size = 9, xCount = 2, oCount = 2) {
  const arr = Array(size).fill(null);
  const indexes = [...Array(size).keys()]; // [0,1,2,3,4,5,6,7,8]
  // 打乱索引顺序
  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  // 前 xCount 个放 x
  for (let i = 0; i < xCount; i++) {
    arr[indexes[i]] = 'x';
  }
  // 再放 o
  for (let i = xCount; i < xCount + oCount; i++) {
    arr[indexes[i]] = 'o';
  }
  return arr;
}

function chessChage(index, player, arr) {
  role.value = player;
  attackList.value = arr.map((item) => ({ player: item, score: null }));
  defenseList.value = arr.map((item) => ({ player: item, score: null }));
}

function onOver() {
  status.value = false;
}

function changeState() {
  status.value = true;
  let arr = generateXOArray();
  chessBoardRef.value.reset(arr);
}

function showScoreMod(index, type) {
  if (!status.value) return;
  if (type === 'attack' && !attackList.value[index].player) {
    visible.value = 'attack' + index;
  } else if (type === 'defense' && !defenseList.value[index].player) {
    visible.value = 'defense' + index;
  }
}

function selectScore(index, score, type, e) {
  e.stopPropagation();
  if (type === 'attack' && !attackList.value[index].player) {
    attackList.value[index].score = score;
    isScore.value = true;
  } else if (type === 'defense' && !defenseList.value[index].player) {
    defenseList.value[index].score = score;
    isScore.value = true;
  }
  visible.value = '';
}

function selectChess() {
  if (!isScore.value) {
    alert('请先打分再确认落子！')
    return;
  }
  let arr = []
  for (let i = 0; i < attackList.value.length; i++) {
    if (attackList.value[i].player) {
       arr.push(0);
      continue
    }
    arr.push(attackList.value[i]?.score + defenseList.value[i]?.score)
  }
  let maxScore = Math.max(...arr);
  if (maxScore <= 0) {
    alert('打分有误！')
    return;
  }
  let index = arr.indexOf(maxScore);
  chessBoardRef.value.select(index);
}

</script>

<template>
  <div class="container">
    <div class="head">
      <RouterLink to="/tictactoe"><button>返回</button></RouterLink>
    </div>
    <div class="content">
      <div class="tool-introduce"> <strong>核心功能：</strong> 通过模拟AI下棋的思维过程，理解其决策逻辑。<br /> 当AI分析落子位置时，会同时从<strong>进攻</strong>与<strong>防守</strong>两个视角评估棋盘：分别计算每个棋格在进攻时可获得的收益分数，以及防守时需应对的威胁分数，最终将两者叠加为<strong>综合总分</strong>。<br /> AI将选择综合总分最高的位置作为落子点，实现攻守兼备的决策策略。 </div>
      <div class="score-container">
        <div class="score-box">
          <h4>进攻视角打分</h4>
          <div class="score-board">
            <div
              v-for="(item, index) in attackList"
              :class="!status || item.player || item.score !== null || visible === ('attack' + index) ? 'item disabled' : 'item'"
              @click="showScoreMod(index, 'attack')"
              :style="{color: `var(--${item.player || 'c'})`}"
              :key="index"
            >
              {{ item.player ? item.player.toUpperCase() : item.score !== null ? item.score : '' }}
              <div class="score" v-show="visible === ('attack' + index)">
                <span @click="selectScore(index, 100, 'attack', $event)">100分</span>
                <span @click="selectScore(index, 10, 'attack', $event)">10分</span>
                <span @click="selectScore(index, 0, 'attack', $event)">0分</span>
              </div>
            </div>
          </div>
          <h4>防守视角打分</h4>
          <div class="score-board">
            <div
              v-for="(item, index) in defenseList"
              :class="!status || item.player || item.score !== null || visible === ('defense' + index) ? 'item disabled' : 'item'"
              @click="showScoreMod(index, 'defense')"
              :style="{color: `var(--${item.player})`}"
              :key="index"
            >
              {{ item.player ? item.player.toUpperCase() : item.score !== null ? item.score : '' }}
              <div class="score" v-show="visible === ('defense' + index)">
                <span @click="selectScore(index, 0, 'defense', $event)">0分</span>
                <span @click="selectScore(index, -50, 'defense', $event)">-50分</span>
              </div>
            </div>
          </div>
          <button class="btn" @click="selectChess" :disabled="!status">确认落子</button>
        </div>
        <div class="board-box">
          <div class="score-top">
            <button @click="changeState(1)" :disabled="status">开始对局</button>
          </div>
          <Chessboard
            ref="chessBoardRef"
            :disabled="true"
            :onChage="chessChage"
            :onOver="onOver"
            :level="'easy'"
            :mode="'pve'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./index.css" scoped></style>