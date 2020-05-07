/**
 * 洗牌算法
 * 有限序列乱序
 * @runtime O(n)
 * @memory O(n)
 */
export const disarray = (arr: number[]): number[] => {
  arr.forEach((v: number, k: number) => {
    let randomIndex = Math.floor(Math.random() * (k + 1));
    [arr[k], arr[randomIndex]] = [arr[randomIndex], v];
  });
  return arr;
};
