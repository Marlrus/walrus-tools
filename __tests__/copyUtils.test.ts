import { copyValues, deepCopy } from '../src/index';

describe('Tests for copyValues Function', () => {
  test('copyValues to return same values as original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, b: 2, c: 3 };
    expect(copyValues(obj)).toEqual(expected);
  });

  test('copyValues to return same values as original array', () => {
    const obj = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(copyValues(obj)).toEqual(expected);
  });

  test('copyValues to be on a different location in memory', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const objCopy = copyValues(obj);
    const expected = false;
    expect(obj === objCopy).toEqual(expected);
  });

  test('copyValues to not work with functions', () => {
    const obj = { a: 1, b: 2, c: 3, d: () => 1 + 1 };
    const expected = { a: 1, b: 2, c: 3 };
    expect(copyValues(obj)).toEqual(expected);
  });

  test('copyValues to work with deeply nested objects', () => {
    const obj = { a: 1, b: [1, 2, { c: 14, d: [1, 2, 3] }], c: 3 };
    const expected = { a: 1, b: [1, 2, { c: 14, d: [1, 2, 3] }], c: 3 };
    expect(copyValues(obj)).toEqual(expected);
  });
});

describe('Tests for deepCopy Function', () => {
  test('deepCopy to return same values as original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, b: 2, c: 3 };
    expect(deepCopy(obj)).toEqual(expected);
  });

  test('deepCopy to return same values as original array', () => {
    const obj = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(deepCopy(obj)).toEqual(expected);
  });

  test('deepCopy to be on a different location in memory', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const objCopy = deepCopy(obj);
    const expected = false;
    expect(obj === objCopy).toEqual(expected);
  });

  test('deepCopy to work with functions', () => {
    const obj = { a: 1, b: 2, c: 3, d: (x: number) => x + 1 };
    const objFnCall = obj.d(1);
    const expected = deepCopy(obj).d(1);
    expect(objFnCall).toBe(expected);
  });

  test('deepCopy to work with deeply nested objects', () => {
    const obj = { a: 1, b: [1, 2, { c: 14, d: [1, 2, 3] }], c: 3 };
    const expected = { a: 1, b: [1, 2, { c: 14, d: [1, 2, 3] }], c: 3 };
    expect(deepCopy(obj)).toEqual(expected);
  });

  test('deepCopy to work with deeply nested objects with functions', () => {
    const obj = {
      a: 1,
      b: [1, 2, { c: 14, d: [1, 2, 3, (x: number) => x + 1] }],
      c: 3,
    } as const;
    const nestedObjFnCall = obj.b[2].d[3](1);
    const expected = deepCopy(obj).b[2].d[3](1);
    expect(nestedObjFnCall).toEqual(expected);
  });
});
