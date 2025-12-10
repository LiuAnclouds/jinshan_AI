export function arraysEqualIgnoreOrder(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  const countMap = new Map();
  
  // 统计arr1中每个元素的出现次数
  for (const item of arr1) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }
  
  // 用arr2减少计数
  for (const item of arr2) {
    if (!countMap.has(item)) return false;
    
    const count = countMap.get(item);
    if (count === 1) {
      countMap.delete(item);
    } else {
      countMap.set(item, count - 1);
    }
  }
  
  // 如果Map为空，说明两个数组元素完全相同
  return countMap.size === 0;
}