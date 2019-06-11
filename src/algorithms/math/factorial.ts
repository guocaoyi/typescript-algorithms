/**
 * Factorial 阶乘
 * num!
 */
export const factorial = (num: number = 0): number => {
  if (num == 0 || isNaN(Number(num))) return 0;
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
};
