<script setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const props = defineProps([
  'count',
  'changeState',
  'state',
  'level'
]);

const chartRef = ref(null);
let chart = null;
let chartData = ref([]);
let maxChartY = ref(2);
let training = ref(false);
let maxEpoch = ref(100);
let timer = null;

onMounted(() => {
  if (!chart) initChart()
})
onBeforeUnmount(() => {
  chart?.dispose();
})

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

function initChart() {
  if (!chart) chart = echarts.init(chartRef.value);
  chartData.value = [{name: 'acc', data: []}, {name: 'loss', data: []}];
  chart.setOption(getChartOptions(chartData.value));
}

function updateChart(epoch, data) {
  let series = []
  for (let i = 0; i < chartData.value.length; i++) {
    let key = chartData.value[i].name;
    let num = data[key];
    if (num > maxChartY.value) maxChartY.value = Math.floor(num) + 1;
    chartData.value[i].data.push({ value: [epoch, num] });
    series.push({
      name: chartData.value[i].name,
      type: 'line',
      showSymbol: false,
      smooth: true,
      data: chartData.value[i].data
    })
  }
  chart.setOption({
    yAxis: {
      max: maxChartY.value
    },
    xAxis: { max: epoch },
    series: series
  })
}

function trainFn() {
  if (training.value) return;
  if (maxEpoch.value < 20 || maxEpoch.value > 400) {
    alert('训练轮数不能小于20或大于400！');
    return;
  }
  training.value = true;
  initChart(); // 重置图表
  let epoch = 1;
  let num = Math.floor(maxEpoch.value * 0.2);
  if (num <= 1) num = 1;
  let levelNum = props.level === 'easy' ? 0.2 : props.level === 'normal' ? 0.1 : 0;
  // 先清除之前的定时器
  timer && clearInterval(timer);

  timer = setInterval(() => {
    if (epoch > maxEpoch.value) {
      clearInterval(timer);
      training.value = false;
      props.changeState(2);
      return;
    }

    // ===== ACC: 指数增长，开始快，后期慢 =====
    let acc;
    if (epoch <= num) {
      const t = epoch / num; // 0~1
      acc = 1 - Math.exp(-3 * t); // 0 → 1，前期增长快，后期慢
      acc += getRandom(-0.02 - levelNum, 0.02 - levelNum); // 小扰动
    } else {
      acc = getRandom(0.95 - levelNum, 1.0 - levelNum); // 收敛波动
    }
    acc = Math.min(Math.max(acc, 0), 1); // 限制范围 [0,1]

    // ===== LOSS: 指数衰减，开始快，后期慢 =====
    let loss;
    if (epoch <= num) {
      const t = epoch / num;
      loss = 4 * Math.exp(-3 * t); // 4 → 0
      loss += getRandom(-0.05 + levelNum, 0.05 + levelNum);
    } else {
      loss = getRandom(0.05 + levelNum, 0.1 + levelNum);
    }
    loss = Math.max(loss, 0);

    // ===== 更新图表 =====
    updateChart(epoch, { acc, loss });
    epoch++;
  }, 200);
}




function getChartOptions(arr) {
  let series = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = {
      name: arr[i].name,
      type: 'line',
      showSymbol: false,
      smooth: true,
      data: []
    };
    if (arr[i].color) obj.color = arr[i].color;
    series.push(obj);
  }
  const options = {
    color: ['#f66', '#00f'],
    tooltip: {
      trigger: 'axis', formatter: function (params) {
        let rounds = params[0].value[0];
        let str = '<b>第' + rounds + '轮</b><br />';
        for (let i = 0; i < params.length; i++) {
          str += params[i].seriesName + '：<span style="color: #f66;">' + params[i].value[1] + '</span><br />'
        }
        return str;
      },
    },
    legend: {
      data: arr.map(item => item.name),
      top: '20px',             // 上边距
      left: 'center',          // 水平居中
    },
    grid: {
      left: '10%',
      right: '14%',
      bottom: '10%'
    },
    xAxis: {
      name: '轮数',
      type: 'value',
      splitLine: {
        show: false
      },
      min: 1,
      // interval: 1, // 间隔
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      min: 0
    },
    series,
    animation: false
  }
  return options;
}

function getRandom(min, max) {
  if (min > max) [min, max] = [max, min]; // 自动纠正顺序
  const random = Math.random() * (max - min) + min;
  return Number(random.toFixed(5)); // 自动去掉多余的 0
}

</script>

<template>
  <div class="train-content">
    <div class="chart" ref="chartRef"></div>
    <div class="set">
      <div>数据集数量：<br /><span>{{ state < 1 ? '---' : (count || 0) }}</span></div>
      <div>数据集质量：<br /><span>{{ state < 1 ? '---' : level === 'easy' ? '较差' : level === 'normal' ? '一般' : '优秀' }}</span></div>
      <div>训练轮数：<input class="train-input" type="text" v-model="maxEpoch" :disabled="state < 1 || training" /></div>
      <button class="train-btn" @click="trainFn" :disabled="state < 1 || training" :title="state < 1 ? '请先“生成数据集”才能训练模型' : ''">开始训练</button>
    </div>
  </div>
</template>

<style scoped>
.train-content {
  width: 100%;
  padding: 0 20px;
  display: flex;
}
.chart {
  width: 660px;
  height: 400px;
  background-color: rgba(255, 0, 0, 0.2);
}
.set {
  flex: 1;
  font-size: 14px;
  color: #666;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
}
.set > div {
  margin-bottom: 20px;
}
.set > div > span {
  color: #333;
  font-size: 18px;
}
.train-input {
  width: 100%;
  height: 30px;
  color: #333;
  font-size: 16px;
  margin-top: 12px;
  padding: 0 8px;
}
.train-btn {
  width: 100%;
  height: 60px;
  font-size: 20px;
  border-radius: 4px;
  outline: none;
  color: #fff;
  background-color: #f66;
  border-color: #f00;
  cursor: pointer;
  margin-top: 40px;
}
.train-btn[disabled] {
  opacity: 0.5;
  cursor: no-drop;
}
.train-btn:not([disabled]):hover {
  opacity: 0.8;
}
</style>