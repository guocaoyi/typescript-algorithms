import { Sort, bubble } from '../src/algorithms/sorting/bubble';

describe('Soring Algorithms (e2e)', () => {
  let bubble1: Sort<number> = bubble;

  test('should sort an array of numbers', () =>
    expect(bubble1([4, 3, 2, 1])).toEqual([1, 2, 3, 4]));

  let bubble2: Sort<string> = bubble;

  test('should sort an array of strings', () =>
    expect(
      bubble2(['cherries', 'kiwi', 'grapes', 'avocado', 'pineapple', 'peach'])
    ).toEqual(['avocado', 'cherries', 'grapes', 'kiwi', 'peach', 'pineapple']));
});
