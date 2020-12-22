import { sortIterable, dataEquals, equals } from '../src/index';

describe('Tests for sortIterable Function', () => {
  test('sortIterable to return object sorted by Key', () => {
    const obj = { c: 1, b: 2, a: 3 };
    const expected = { a: 3, b: 2, c: 1 };
    expect(sortIterable(obj)).toEqual(expected);
  });

  test('sortIterable to return unaltered primitive array', () => {
    const obj = [3, 2, 1];
    const expected = [3, 2, 1];
    expect(sortIterable(obj)).toEqual(expected);
  });

  test('sortIterable to return unaltered primitive array', () => {
    const obj = [3, 2, 1];
    const expected = [3, 2, 1];
    expect(sortIterable(obj)).toEqual(expected);
  });

  test('sortIterable to return sorted nested object', () => {
    const obj = {
      c: [1, 2, 3, { c: 3, b: 2, a: 1 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const expected = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: 3 }],
    };
    expect(sortIterable(obj)).toEqual(expected);
  });
});

describe('Tests for dataEquals Function', () => {
  test('dataEquals returns true for equal strings', () => {
    const a = 'hai';
    const b = 'hai';
    const expected = true;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns false for different strings', () => {
    const a = 'hai';
    const b = 'bai';
    const expected = false;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns true for equal numbers', () => {
    const a = 1;
    const b = 1;
    const expected = true;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns false for different numbers', () => {
    const a = 1;
    const b = 2;
    const expected = false;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns false for equal functions', () => {
    const a = () => console.log('hai');
    const b = () => console.log('hai');
    const expected = false;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns false for different functions', () => {
    const a = () => console.log('hai');
    const b = () => console.log('bai');
    const expected = false;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns false for equal functions', () => {
    const a = () => console.log('hai');
    const b = () => console.log('hai');
    const expected = false;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals returns false for different types', () => {
    const a = 1;
    const b = '1';
    const expected = false;
    expect(dataEquals(a, b)).toEqual(expected);
  });

  test('dataEquals to return true for objects with same data, different order', () => {
    const obj = { c: 1, b: 2, a: 3 };
    const obj2 = { a: 3, b: 2, c: 1 };
    const expected = true;
    expect(dataEquals(obj, obj2)).toEqual(expected);
  });

  test('dataEquals to return true for arrays with same data', () => {
    const obj = [{ c: 1, b: 2, a: 3 }, 2];
    const obj2 = [{ a: 3, b: 2, c: 1 }, 2];
    const expected = true;
    expect(dataEquals(obj, obj2)).toEqual(expected);
  });

  test('dataEquals to return false for objects with different data', () => {
    const obj = { c: 1, b: 4, a: 3 };
    const obj2 = { a: 3, b: 2, c: 1 };
    const expected = false;
    expect(dataEquals(obj, obj2)).toEqual(expected);
  });

  test('dataEquals to return false for arrays with different data', () => {
    const obj = [{ c: 1, b: 2, a: 3 }, 2];
    const obj2 = [2, { a: 3, b: 2, c: 1 }];
    const expected = false;
    expect(dataEquals(obj, obj2)).toEqual(expected);
  });

  test('dataEquals to return true for nested objects', () => {
    const obj = {
      c: [1, 2, 3, { c: 3, b: 2, a: 1 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const obj2 = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: 3 }],
    };
    const expected = true;
    expect(dataEquals(obj, obj2)).toEqual(expected);
  });

  test('dataEquals to return false for nested objects with different data', () => {
    const obj = {
      c: [1, 2, 3, { c: 3, b: 2, a: 4 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const obj2 = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: 3 }],
    };
    const expected = false;
    expect(dataEquals(obj, obj2)).toEqual(expected);
  });
});

describe('Tests for equals Function', () => {
  test('equals returns true for equal strings', () => {
    const a = 'hai';
    const b = 'hai';
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different strings', () => {
    const a = 'hai';
    const b = 'bai';
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns true for equal numbers', () => {
    const a = 1;
    const b = 1;
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different numbers', () => {
    const a = 1;
    const b = 2;
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns true for equal functions', () => {
    const a = () => console.log('hai');
    const b = () => console.log('hai');
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different functions', () => {
    const a = () => console.log('hai');
    const b = () => console.log('bai');
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns true for equal functions', () => {
    const a = () => console.log('hai');
    const b = () => console.log('hai');
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns true for equal objects', () => {
    const a = { c: 1, b: 2, a: 3 };
    const b = { a: 3, b: 2, c: 1 };
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different objects', () => {
    const a = { c: 1, b: 4, a: 3 };
    const b = { a: 3, b: 2, c: 1 };
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns true for equal objects with functions', () => {
    const a = { c: 1, b: 2, a: () => console.log('hai') };
    const b = { a: () => console.log('hai'), b: 2, c: 1 };
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different objects with functions', () => {
    const a = { c: 1, b: 4, a: () => console.log('hai') };
    const b = { a: () => console.log('bai'), b: 2, c: 1 };
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns true for equal arrays', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    const expected = true;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different arrays', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 2];
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals to return true for nested objects', () => {
    const obj = {
      c: [1, 2, 3, { c: 3, b: 2, a: 1 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const obj2 = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: 3 }],
    };
    const expected = true;
    expect(equals(obj, obj2)).toEqual(expected);
  });

  test('equals to return false for nested objects with different data', () => {
    const obj = {
      c: [1, 2, 3, { c: 3, b: 2, a: 4 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const obj2 = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: 3 }],
    };
    const expected = false;
    expect(equals(obj, obj2)).toEqual(expected);
  });

  test('equals to return true for nested objects with functions', () => {
    const obj = {
      c: [1, 2, 3, { c: () => console.log('hai'), b: 2, a: 1 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const obj2 = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: () => console.log('hai') }],
    };
    const expected = true;
    expect(equals(obj, obj2)).toEqual(expected);
  });

  test('equals to return false for nested objects with different functions', () => {
    const obj = {
      c: [1, 2, 3, { c: () => console.log('hai'), b: 2, a: 4 }],
      b: { b: 2, a: 1 },
      a: { b: [1, 2, 3], a: 1 },
    };
    const obj2 = {
      a: { a: 1, b: [1, 2, 3] },
      b: { a: 1, b: 2 },
      c: [1, 2, 3, { a: 1, b: 2, c: () => console.log('bai') }],
    };
    const expected = false;
    expect(equals(obj, obj2)).toEqual(expected);
  });

  test('equals returns false for non matching object keys', () => {
    const a = { d: 1, b: 4, a: 3 };
    const b = { a: 3, b: 2, c: 1 };
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });

  test('equals returns false for different primitive types', () => {
    const a = 1;
    const b = '1';
    const expected = false;
    expect(equals(a, b)).toEqual(expected);
  });
});
