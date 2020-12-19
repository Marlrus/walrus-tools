import { dirMap, map, pfMap } from '../src/index';

describe('Tests for dirMap Function', () => {
  test('dirMap to return expected result', () => {
    const add1 = (x: number) => x + 1;
    const arr = [1, 2, 3];
    const expected = [2, 3, 4];
    expect(dirMap(add1, arr)).toEqual(expected);
  });
});

describe('Tests for map Function', () => {
  test('map to return function on the first execution', () => {
    const add1 = (x: number) => x + 1;
    expect(typeof map(add1)).toBe('function');
  });

  test('map to return expected result', () => {
    const add1 = (x: number) => x + 1;
    const arr = [1, 2, 3];
    const expected = [2, 3, 4];
    expect(map<number, number>(add1)(arr)).toEqual(expected);
  });
});

describe('Tests for pfMap Function', () => {
  test('pfMap to return function on the first execution', () => {
    const add1 = (x: number) => x + 1;
    expect(typeof pfMap(add1)).toBe('function');
  });

  test('pfMap to return expected result', () => {
    const add1 = (x: number) => x + 1;
    const arr = [1, 2, 3];
    const expected = [2, 3, 4];
    expect(pfMap(add1)(arr)).toEqual(expected);
  });
});
