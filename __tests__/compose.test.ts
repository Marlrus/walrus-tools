import { pfCompose, compose, dirCompose } from '../src/index';

describe('Tests for pfCompose Function', () => {
  test('pfCompose to return funcition on 1st execution', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    expect(typeof pfCompose(add1, times2)).toBe('function');
  });

  test('pfCompose to return correct result on receiving values', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const add1Times2 = pfCompose(add1, times2);
    const nonComposeFn = (x: number) => add1(times2(x));
    expect(add1Times2(1)).toBe(nonComposeFn(1));
  });

  test('pfCompose to Work with multiple fns', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const minus2 = (x: number) => x - 2;
    const times10 = (x: number) => x * 10;
    const fourFnCompose = pfCompose(add1, times2, minus2, times10);
    const nonComposeFn = (x: number) => add1(times2(minus2(times10(x))));
    expect(fourFnCompose(1)).toBe(nonComposeFn(1));
  });
});

describe('Tests for compose Function', () => {
  test('compose to return funcition on 1st execution', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    expect(typeof compose(add1, times2)).toBe('function');
  });

  test('compose to return correct result on receiving values', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const add1Times2 = compose<number, number>(add1, times2);
    const nonComposeFn = (x: number) => add1(times2(x));
    expect(add1Times2(1)).toBe(nonComposeFn(1));
  });

  test('compose to Work with multiple fns', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const minus2 = (x: number) => x - 2;
    const times10 = (x: number) => x * 10;
    const fourFnCompose = compose<number, number>(
      add1,
      times2,
      minus2,
      times10
    );
    const nonComposeFn = (x: number) => add1(times2(minus2(times10(x))));
    expect(fourFnCompose(1)).toBe(nonComposeFn(1));
  });
});

describe('Tests for dirCompose Function', () => {
  test('dirCompose to return correct result on receiving values', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const add1Times2 = dirCompose<number, number>(1, add1, times2);
    const nonCompose = add1(times2(1));
    expect(add1Times2).toBe(nonCompose);
  });

  test('dirCompose to Work with multiple fns', () => {
    const add1 = (x: number) => x + 1;
    const times2 = (x: number) => x * 2;
    const minus2 = (x: number) => x - 2;
    const times10 = (x: number) => x * 10;
    const fourFnCompose = dirCompose<number, number>(
      1,
      add1,
      times2,
      minus2,
      times10
    );
    const nonCompose = add1(times2(minus2(times10(1))));
    expect(fourFnCompose).toBe(nonCompose);
  });
});
