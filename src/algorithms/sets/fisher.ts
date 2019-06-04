/**
 * 洗牌算法
 * 有限序列乱序
 * @runtime O(n)
 * @memory O(n)
 */
export default (arr: Array<number | string>): Array<number | string> => {
  for (let i = 0; i < arr.length; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};
