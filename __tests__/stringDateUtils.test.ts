import { splitWords, capitalize, capitalizeAll } from '../src/index';

describe('Tests for splitWords Function', () => {
  test('splitWords to return word array', () => {
    const sentence = 'walrus tools';
    const expected = ['walrus', 'tools'];
    expect(splitWords(sentence)).toEqual(expected);
  });

  test('splitWords to return work with many words', () => {
    const sentence = 'walrus tools is a utility library for typescript';
    const expected = [
      'walrus',
      'tools',
      'is',
      'a',
      'utility',
      'library',
      'for',
      'typescript',
    ];
    expect(splitWords(sentence)).toEqual(expected);
  });
});

describe('Tests for capitalize Function', () => {
  test('capitalize to capitalize single word', () => {
    const sentence = 'walrus';
    const expected = 'Walrus';
    expect(capitalize(sentence)).toEqual(expected);
  });

  test('capitalize to capitalize first letter of a sentence', () => {
    const sentence = 'walrus tools';
    const expected = 'Walrus tools';
    expect(capitalize(sentence)).toEqual(expected);
  });

  test('capitalize to override other capitalization', () => {
    const sentence = 'wAlRUS toOLs';
    const expected = 'Walrus tools';
    expect(capitalize(sentence)).toEqual(expected);
  });
});

describe('Tests for capitalizeAll Function', () => {
  test('capitalizeAll to capitalize single word', () => {
    const sentence = 'walrus';
    const expected = 'Walrus';
    expect(capitalizeAll(sentence)).toEqual(expected);
  });

  test('capitalizeAll to capitalize multiple words', () => {
    const sentence = 'walrus tools is a utility library';
    const expected = 'Walrus Tools Is A Utility Library';
    expect(capitalizeAll(sentence)).toEqual(expected);
  });

  test('capitalizeAll to override existing formatting', () => {
    const sentence = 'waLRus TOols IS a utILIty liBRary';
    const expected = 'Walrus Tools Is A Utility Library';
    expect(capitalizeAll(sentence)).toEqual(expected);
  });

  test('capitalizeAll exceptions are not capitalized', () => {
    const sentence = 'walrus tools is a utility library';
    const expected = 'Walrus Tools is a Utility Library';
    expect(capitalizeAll(sentence, 'is', 'a')).toEqual(expected);
  });
});
