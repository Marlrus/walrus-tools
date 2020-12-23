import { pyRange } from '../src/index';

describe('Tests for pyRange Function', () => {
  test('pyRange single arg, returns proper length', () => {
    const arrOf5 = pyRange(5);
    expect(arrOf5.length).toBe(5);
  });

  test('pyRange single arg, returns proper values', () => {
    const arrOf5 = pyRange(5);
    const expected = [0, 1, 2, 3, 4];
    expect(arrOf5).toEqual(expected);
  });

  test('pyRange single arg, fails on negative value', () => {
    expect(() => pyRange(-2)).toThrow('Start has to be a positive integer.');
  });

  test('pyRange two args, returns proper length', () => {
    const arrStartEnd = pyRange(2, 4);
    expect(arrStartEnd.length).toBe(2);
  });

  test('pyRange two args, returns proper values', () => {
    const arrStartEnd = pyRange(2, 4);
    const expected = [2, 3];
    expect(arrStartEnd).toEqual(expected);
  });

  test('pyRange two args, fails on start after end param', () => {
    expect(() => pyRange(4, 2)).toThrow('Start cannot be after end param.');
  });

  test('pyRange two args, fails on start as negative value', () => {
    expect(() => pyRange(-2, 2)).toThrow('Start has to be a positive integer.');
  });

  test('pyRange three args, returns proper length', () => {
    const arrStepped = pyRange(2, 10, 2);
    expect(arrStepped.length).toBe(4);
  });

  test('pyRange three args, returns proper values', () => {
    const arrStepped = pyRange(2, 10, 2);
    const expected = [2, 4, 6, 8];
    expect(arrStepped).toEqual(expected);
  });

  test('pyRange three args, fails on step as negative value', () => {
    expect(() => pyRange(2, 10, -2)).toThrow(
      'Step has to be a positive integer greater than 0.'
    );
  });

  test('pyRange fails if end is negative', () => {
    expect(() => pyRange(2, -10, -2)).toThrow(
      'End param cannot be a negative integer.'
    );
  });
});
