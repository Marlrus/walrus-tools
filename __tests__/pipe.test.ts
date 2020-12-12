import { pfPipe, pipe, dirPipe } from '../src/index';

describe('Tests for pfPipe Function', () => {
  test('pfPipe to return funcition on 1st execution', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    expect(typeof pfPipe(add1, times2)).toBe('function');
  });

  test('pfPipe to return correct result on receiving values', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const add1Times2 = pfPipe(add1, times2);
    const nonPipeFn = (x: number) => times2(add1(x));
    expect(add1Times2(1)).toBe(nonPipeFn(1));
  });

  test('pfPipe to Work with multiple fns', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const minus2 = (x: number) => x - 2;
    const times10 = (x: number) => x * 10;
    const fourFnPipe = pfPipe(add1, times2, minus2, times10);
    const nonPipeFn = (x: number) => times10(minus2(times2(add1(x))));
    expect(fourFnPipe(1)).toBe(nonPipeFn(1));
  });
});

describe('Tests for pipe Function', () => {
  test('pipe to return funcition on 1st execution', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    expect(typeof pipe(add1, times2)).toBe('function');
  });

  test('pipe to return correct result on receiving values', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const add1Times2 = pipe(add1, times2);
    const nonPipeFn = (x: number) => times2(add1(x));
    expect(add1Times2(1)).toBe(nonPipeFn(1));
  });

  test('pipe to Work with multiple fns', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const minus2 = (x: number) => x - 2;
    const times10 = (x: number) => x * 10;
    const fourFnPipe = pipe<number, number>(add1, times2, minus2, times10);
    const nonPipeFn = (x: number) => times10(minus2(times2(add1(x))));
    expect(fourFnPipe(1)).toBe(nonPipeFn(1));
  });
});

describe('Tests for dirPipe Function', () => {
  test('dirPipe to return correct result on receiving values', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const add1Times2 = dirPipe(1, add1, times2);
    const nondirPipeFn = (x: number) => times2(add1(x));
    expect(add1Times2).toBe(nondirPipeFn(1));
  });

  test('dirPipe to Work with multiple fns', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const minus2 = (x: number) => x - 2;
    const times10 = (x: number) => x * 10;
    const fourFnPipe = dirPipe<number, number>(
      1,
      add1,
      times2,
      minus2,
      times10
    );
    const nondirPipeFn = (x: number) => times10(minus2(times2(add1(x))));
    expect(fourFnPipe).toBe(nondirPipeFn(1));
  });
});
