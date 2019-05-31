import bubble from '../src/algorithms/sorting/bubble';

describe('Soring Algorithms (e2e)', () => {
  const result = bubble([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

  expect(result).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
