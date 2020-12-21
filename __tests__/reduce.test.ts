import { reduce, pfReduce, dirReduce } from '../src/index';

describe('Tests for reduce Function', () => {
  test('reduce to return function on first execution', () => {
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 'function';
    expect(typeof reduce<number>(findTotal)).toBe(expected);
  });

  test('reduce to work without initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 6;
    expect(reduce<number>(findTotal)(arr)).toBe(expected);
  });

  test('reduce to work with initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 16;
    expect(reduce<number>(findTotal, 10)(arr)).toBe(expected);
  });

  test('reduce to work with different type initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: string, curr: number) => acc + curr.toString();
    const expected = '0123';
    expect(reduce<number, string>(findTotal, '0')(arr)).toBe(expected);
  });
});

describe('Tests for pfReduce Function', () => {
  test('pfReduce to return function on first execution', () => {
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 'function';
    expect(typeof pfReduce(findTotal)).toBe(expected);
  });

  test('pfReduce to work without initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 6;
    expect(pfReduce(findTotal)(arr)).toBe(expected);
  });

  test('pfReduce to work with initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 16;
    expect(pfReduce(findTotal, 10)(arr)).toBe(expected);
  });

  test('pfReduce to work with different type initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: string, curr: number) => acc + curr.toString();
    const expected = '0123';
    expect(pfReduce(findTotal, '0')(arr)).toBe(expected);
  });
});

describe('Tests for dirReduce Function', () => {
  test('dirReduce to work without initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 6;
    expect(dirReduce(arr, findTotal)).toBe(expected);
  });

  test('dirReduce to work with initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: number, curr: number) => acc + curr;
    const expected = 16;
    expect(dirReduce(arr, findTotal, 10)).toBe(expected);
  });

  test('dirReduce to work with different type initial value', () => {
    const arr = [1, 2, 3];
    const findTotal = (acc: string, curr: number) => acc + curr.toString();
    const expected = '0123';
    expect(dirReduce(arr, findTotal, '0')).toBe(expected);
  });
});
