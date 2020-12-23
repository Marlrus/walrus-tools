import { hmm, err, logger, startT, stopT, table } from '../src/index';

describe('Tests for Utils (IMPURE)', () => {
  test('hmm returns undefined', () => {
    expect(hmm()).toBe(undefined);
  });

  test('err with no args throws ¯_(ツ)_/¯', () => {
    expect(() => err()).toThrow(`¯\_(ツ)_/¯`);
  });

  test('err with message throws message', () => {
    expect(() => err('poop')).toThrow('poop');
  });

  test('logger returns value being logged', () => {
    expect(logger('hai')).toBe('hai');
  });

  test('startT returns undefined', () => {
    expect(startT('start')).toBe(undefined);
  });

  test('stopT returns undefined', () => {
    expect(stopT('end')).toBe(undefined);
  });

  test('table returns undefined', () => {
    expect(table({})).toBe(undefined);
  });

  test('table returns undefined', () => {
    expect(table({}, ['hai'])).toBe(undefined);
  });
});
