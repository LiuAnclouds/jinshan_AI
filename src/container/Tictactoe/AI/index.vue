<script setup>
import { ref, onMounted } from 'vue';
// import { useRoute, useRouter } from 'vue-router';
import Create from './Create.vue';
import Train from './Train.vue';
import Versus from './Versus.vue';

// const route = useRoute();
// const router = useRouter();


let visible = ref(1);
let level = ref('easy');
let state = ref(0)
let count = ref(0);

/* onMounted(() => {
  console.log(`the component is now mounted.`)
  // getData();
  const { steps } = route.query;
  if (steps && !isNaN(Number(steps))) {
    changeType(Number(steps))
  }
}) */


function changeType(steps) {
  visible.value = steps
  // router.push({ path: '/tictactoe/ai', query: { steps } })
}

function changeState(val) {
  state.value = val;
}

function changeLevel(type) {
  level.value = type;
  state.value = 0;
}

function changeCount(val) {
  count.value = val;
}
const INTRODUCES = [
  '提供三类数据集：较差的数据集（数据总量2550条）、普通的数据集（数据总量25516条）和优秀的数据集（数据总量255168条）。不同质量的数据集会影响后续训练模型的聪明程度',

  '基于前面选择的数据集进行模型训练，提供acc(准确度)、loss（损失值）两个训练指标，通过这两个指标可以直观的看到模型训练的好坏。',
  '基于前面所选的数据集训练出来的AI模型，与所训练的AI模型的对战。'
]

</script>

<template>
  <div class="container">
    <div class="head">
      <RouterLink to="/tictactoe"><button>返回</button></RouterLink>
    </div>
    <div class="content-box">
      <div class="tool-introduce">简介：<br />{{INTRODUCES[visible - 1]}}</div>
      <div class="content">
        <ul class="nav">
          <li :class="visible === 1 ? 'active' : ''" @click="changeType(1)">1.生成数据集</li>
          <li :class="visible === 2 ? 'active' : ''" @click="changeType(2)">2.模型训练</li>
          <li :class="visible === 3 ? 'active' : ''" @click="changeType(3)">3.与AI对战</li>
        </ul>
        <div class="child-area">
          <Create
            :changeState="changeState"
            :state="state"
            :changeLevel="changeLevel"
            :level="level"
            :changeCount="changeCount"
            :count="count"
            v-show="visible === 1"
          />
          <Train
            :changeState="changeState"
            :state="state"
            :level="level"
            :count="count"
            v-show="visible === 2"
          />
          <Versus
            :changeState="changeState"
            :state="state"
            :level="level"
            v-show="visible === 3"
          />
        </div>
      </div>
    </div>
    
</div>
</template>

<style src="./index.css" scoped></style>