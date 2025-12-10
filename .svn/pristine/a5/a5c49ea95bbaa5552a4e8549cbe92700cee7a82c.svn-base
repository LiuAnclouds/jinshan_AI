

let hardData = [], normalData = [], easyData = [];
(async function () {
  const res = await fetch('/valid_games.json')
  hardData = await res.json();
  normalData = hardData.slice(0, 25516);
  easyData = hardData.slice(0, 2550);
  // console.log(allData)
})()


export function queryData({page=1, size=10, level='easy'}) {
  return new Promise(resolve => {
    setTimeout(() => {
      let data = level ==='hard' ? hardData : level ==='normal' ? normalData : easyData;
      let arr = data.slice((page - 1) * size, ((page - 1) * size) + size);
      resolve({ result: arr, count: data.length })
    }, 1000)
  })
}