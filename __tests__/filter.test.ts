import { dirFilter, evalPredicates, filter, pfFilter } from '../src/index';

describe('Tests for evalPredicates Function', () => {
  test('evalPredicates to return function on the first execution', () => {
    const eq1 = (x: number) => x === 1;
    expect(typeof evalPredicates(eq1)).toBe('function');
  });

  test('evalPredicates to return true on 1 function', () => {
    const gtZero = (x: number) => x > 0;
    const value = 1;
    const expected = true;
    expect(evalPredicates(gtZero)(value)).toEqual(expected);
  });

  test('evalPredicates to return false on 1 function', () => {
    const ltZero = (x: number) => x < 0;
    const value = 1;
    const expected = false;
    expect(evalPredicates(ltZero)(value)).toEqual(expected);
  });

  test('evalPredicates to return true on multiple function', () => {
    const gtZero = (x: number) => x > 0;
    const notZero = (x: number) => x !== 0;
    const notString = (x: number) => typeof x !== 'string';
    const value = 1;
    const expected = true;
    expect(evalPredicates(gtZero, notZero, notString)(value)).toEqual(expected);
  });

  test('evalPredicates to return false on multiple function', () => {
    const ltZero = (x: number) => x < 0;
    const notZero = (x: number) => x !== 0;
    const notString = (x: number) => typeof x !== 'string';
    const value = 1;
    const expected = false;
    expect(evalPredicates(ltZero, notZero, notString)(value)).toEqual(expected);
  });
});

describe('Tests for dirFilter Function', () => {
  test('dirFilter to filter properly on 1 function', () => {
    const gtZero = (x: number) => x > 1;
    const value = [1, 2, 3];
    const expected = [2, 3];
    expect(dirFilter(value, gtZero)).toEqual(expected);
  });

  test('dirFilter to filter properly on multiple functions', () => {
    const gtZero = (x: number) => x > 1;
    const not3 = (x: number) => x !== 3;
    const value = [1, 2, 3];
    const expected = [2];
    expect(dirFilter(value, gtZero, not3)).toEqual(expected);
  });
});

describe('Tests for filter Function', () => {
  test('filter to return function on first execution', () => {
    const gtZero = (x: number) => x > 1;
    expect(typeof filter(gtZero)).toBe('function');
  });

  test('filter to filter properly on 1 function', () => {
    const gtZero = (x: number) => x > 1;
    const value = [1, 2, 3];
    const expected = [2, 3];
    expect(filter<number>(gtZero)(value)).toEqual(expected);
  });

  test('filter to filter properly on multiple functions', () => {
    const gtZero = (x: number) => x > 1;
    const not3 = (x: number) => x !== 3;
    const value = [1, 2, 3];
    const expected = [2];
    expect(filter<number>(gtZero, not3)(value)).toEqual(expected);
  });
});

describe('Tests for pfFilter Function', () => {
  test('pfFilter to return function on first execution', () => {
    const gtZero = (x: number) => x > 1;
    expect(typeof pfFilter(gtZero)).toBe('function');
  });

  test('pfFilter to filter properly on 1 function', () => {
    const gtZero = (x: number) => x > 1;
    const value = [1, 2, 3];
    const expected = [2, 3];
    expect(pfFilter(gtZero)(value)).toEqual(expected);
  });

  test('pfFilter to filter properly on multiple functions', () => {
    const gtZero = (x: number) => x > 1;
    const not3 = (x: number) => x !== 3;
    const value = [1, 2, 3];
    const expected = [2];
    expect(pfFilter(gtZero, not3)(value)).toEqual(expected);
  });
});
