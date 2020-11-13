import { range } from '../src/index';

describe('Tests for range Function', () => {
  test('range single arg, returns proper length', () => {
    const arrOf5 = range(5);
    expect(arrOf5.length).toBe(5);
  });

  test('range single arg, returns proper values', () => {
    const arrOf5 = range(5);
    const expected = [0, 1, 2, 3, 4];
    expect(arrOf5).toEqual(expected);
  });

  test('range single arg, fails on negative value', () => {
    expect(() => range(-2)).toThrow('End param cannot be a negative integer.');
  });

  test('range two args, returns proper length', () => {
    const arrStartEnd = range(4, 2);
    expect(arrStartEnd.length).toBe(2);
  });

  test('range two args, returns proper values', () => {
    const arrStartEnd = range(4, 2);
    const expected = [2, 3];
    expect(arrStartEnd).toEqual(expected);
  });

  test('range two args, fails on start after end param', () => {
    expect(() => range(2, 4)).toThrow('Start cannot be after end param.');
  });

  test('range two args, fails on start as negative value', () => {
    expect(() => range(2, -2)).toThrow('Start has to be a positive integer.');
  });

  test('range three args, returns proper length', () => {
    const arrStepped = range(10, 2, 2);
    expect(arrStepped.length).toBe(4);
  });

  test('range three args, returns proper values', () => {
    const arrStepped = range(10, 2, 2);
    const expected = [2, 4, 6, 8];
    expect(arrStepped).toEqual(expected);
  });

  test('range three args, fails on step as negative value', () => {
    expect(() => range(10, 2, -2)).toThrow(
      'Step has to be a positive integer greater than 0.'
    );
  });
});
