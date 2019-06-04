/**
 * fibonacci(uncached)
 * @param n number
 */
export const fib = (n: number): number => {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

/**
 * fibonacci(cached)
 * @param n number
 * @param m cacheMap
 */
export const fib_cached = (n: number, m: any = { 0: 0, 1: 1 }): number => {
  if (n in m) return m[n];
  else return [(m[n] = fib_cached(n - 1, m) + fib_cached(n - 2, m)), m[n]][1];
};
