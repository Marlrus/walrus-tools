import {
  head,
  first,
  last,
  tail,
  initial,
  decoupleHead,
  decoupleTail,
} from '../src/index';

describe('Tests for head Function', () => {
  test('head to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    expect(head(arr)).toBe(1);
  });

  test('head to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(head(arr)).toEqual({ a: 1 });
  });

  test('head to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    expect(head(arr)).toEqual(add1and2);
  });
});

describe('first Function works just like head', () => {
  test('first to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    expect(first(arr)).toBe(1);
  });

  test('first to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(first(arr)).toEqual({ a: 1 });
  });

  test('first to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    expect(first(arr)).toEqual(add1and2);
  });
});

describe('Tests for last Function', () => {
  test('last to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    expect(last(arr)).toBe(4);
  });

  test('last to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(last(arr)).toEqual({ c: 3 });
  });

  test('last to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    expect(last(arr)).toEqual(add3and4);
  });
});

describe('Tests for tail Function', () => {
  test('tail to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    expect(tail(arr)).toEqual([2, 3, 4]);
  });

  test('tail to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(tail(arr)).toEqual([{ b: 2 }, { c: 3 }]);
  });

  test('tail to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    expect(tail(arr)).toEqual([add2and3, add3and4]);
  });
});

describe('Tests for initial Function', () => {
  test('initial to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    expect(initial(arr)).toEqual([1, 2, 3]);
  });

  test('initial to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(initial(arr)).toEqual([{ a: 1 }, { b: 2 }]);
  });

  test('initial to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    expect(initial(arr)).toEqual([add1and2, add2and3]);
  });
});

describe('Tests for decoupleHead Function', () => {
  test('decoupleHead to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    const expected = [1, [2, 3, 4]];
    expect(decoupleHead(arr)).toEqual(expected);
  });

  test('decoupleHead to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const expected = [{ a: 1 }, [{ b: 2 }, { c: 3 }]];
    expect(decoupleHead(arr)).toEqual(expected);
  });

  test('decoupleHead to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    const expected = [add1and2, [add2and3, add3and4]];
    expect(decoupleHead(arr)).toEqual(expected);
  });
});

describe('Tests for decoupleTail Function', () => {
  test('decoupleTail to work with primitives', () => {
    const arr = [1, 2, 3, 4];
    const expected = [4, [1, 2, 3]];
    expect(decoupleTail(arr)).toEqual(expected);
  });

  test('decoupleTail to work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const expected = [{ c: 3 }, [{ a: 1 }, { b: 2 }]];
    expect(decoupleTail(arr)).toEqual(expected);
  });

  test('decoupleTail to work with functions', () => {
    const add1and2 = () => 1 + 2;
    const add2and3 = () => 2 + 3;
    const add3and4 = () => 3 + 4;
    const arr = [add1and2, add2and3, add3and4];
    const expected = [add3and4, [add1and2, add2and3]];
    expect(decoupleTail(arr)).toEqual(expected);
  });
});
