import uncompress from '../../problems/array/uncompress';

test('uncompress simple case', () => {
  expect(uncompress([['a', 2], ['b', 3]])).toBe('aabbb');
});

test('uncompress empty array', () => {
  expect(uncompress([])).toBe('');
});

test('uncompress with single item', () => {
  expect(uncompress([['x', 5]])).toBe('xxxxx');
});
