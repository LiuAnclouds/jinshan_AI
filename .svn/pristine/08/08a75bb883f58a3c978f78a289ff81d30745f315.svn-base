<script setup>
import { ref } from 'vue';
import { queryData } from '@/utils/api';
import rcExcel from '@/utils/rcExcel';

const props = defineProps([
  'changeState',
  'state',
  'changeLevel',
  'level',
  'changeCount',
  'count'
]);

const listRef = ref(null);
let loading = ref(false);
let dataList = ref([]);
let pageNo = ref(1);

async function getData(page, size=100) {
  try {
    loading.value = true;
    let res = await queryData({page, size, level: props.level});
    // console.log(res);
    dataList.value = dataList.value.concat(res.result);
    props.changeCount(res.count);
    pageNo.value = page;
    loading.value = false;
    props.changeState(1);
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
}

function handleScroll(e) {
  if (loading.value) return;
  const el = e.target;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
    getData(pageNo.value + 1);
    // console.log('加载数据');
  }
}

function selectLevel(e) {
  props.changeLevel(e.target.value);
  dataList.value = [];
  props.changeCount(0);
  pageNo.value = 1;
}

function createFn() {
  dataList.value = [];
  props.changeCount(0);
  pageNo.value = 1;
  getData(pageNo.value)
}

async function downlodData() {
  try {
    let res = await queryData({page: 1, size: 300000, type: props.level});
    // console.log(res);
    let arr = res.result;
    let exportObj = { // 构造导出数据对象
      "fileName": '数据集' + new Date().getTime(), //导出Excel的文件名字
      "sheets": [{
        titles: ["棋谱", "结果"],//列名
        name: '数据',//sheet页名
        data: arr,//sheet页数据
      }]
    };
    rcExcel.ExportToCSV(exportObj);
  } catch (error) {
    console.log('下载失败！', error);
  }
}

</script>

<template>
  <div class="create-content">
    <div class="top">
      <div class="create-data">
        选择数据集：
        <select :value="props.level" @change="selectLevel">
          <option value="easy">较差的数据集</option>
          <option value="normal">普通的数据集</option>
          <option value="hard">优秀的数据集</option>
        </select>
        <button @click="createFn">生成</button>
      </div>
      <button @click="downlodData">下载数据集</button>
    </div>
    <div class="list-box">
      <div class="num">数据集数量：{{ count || 0 }}</div>
      <div class="list" v-if="loading && dataList.length <= 0">
        <div class="loading">数据加载中...</div>
      </div>
      <ul class="list" v-else-if="dataList.length > 0" @scroll="handleScroll" ref="listRef">
        <li v-for="(item, index) in dataList" :key="index">
          <span>{{ item.chessRecord }}</span><span>{{ item.result }}</span>
        </li>
        <li class="loading" v-if="loading">数据加载中...</li>
      </ul>
      <div class="list" v-else>
        <div class="no-data">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-content {
  width: 100%;
  padding: 0 20px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.create-data {
  display: flex;
  align-items: center;
}
.create-data select {
  width: 120px;
  height: 30px;
  outline: none;
  margin-right: 20px;
  padding: 0 6px;
}
.top button {
  padding: 4px 12px;
  cursor: pointer;
}
.list-box {
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 4px;
  padding: 40px;
}
.list-box .num {
  font-size: 18px;
  color: #333;
}
.list {
  height: 400px;
  border: 1px solid #ccc;
  margin-top: 20px;
  overflow: auto;
}
.list li {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.list li:nth-child(even) {
  background-color: #f9f9f9;
}
.list li span {
  flex: 1;
  height: 100%;
  text-align: center;
  line-height: 40px;
  border-right: 1px solid #ccc;
}
.list li span:last-child {
  border-right: none;
}
.loading {
  padding: 10px 20px;
  color: #666;
}
.no-data {
  width: 100%;
  height: 100%;
  padding-top: 40px;
  text-align: center;
  color: #999;
}
</style>