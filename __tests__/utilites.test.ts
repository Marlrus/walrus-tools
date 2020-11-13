import { hmm, err } from '../src/index';

test('hmm returns undefined', () => {
  expect(hmm()).toBe(undefined);
});

test('err with no args throws ¯_(ツ)_/¯', () => {
  expect(() => err()).toThrow(`¯\_(ツ)_/¯`);
});

test('err with message throws message', () => {
  expect(() => err('poop')).toThrow('poop');
});
