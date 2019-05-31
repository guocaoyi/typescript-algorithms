/**
 * 包泡排序
 * @param arr
 */
export default (arr: number[]) => {
  // 对极值做处理
  if (!arr && arr.length <= 0) return arr;

  // 遍历 & 对比 & 换值
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] >= arr[j + 1]) {
        // in-place replace value
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }
  }
  return arr;
};
