import { dirProp, prop, pluck, pfPluck } from '../src/index';

describe('Tests for dirProp Function', () => {
  test('dirProp to return prop from object', () => {
    const object = { name: 'Walrus', occupation: 'coder' };
    const expected = object.name;
    expect(dirProp('name', object)).toEqual(expected);
  });
});

describe('Tests for prop Function', () => {
  test('prop to return prop from object', () => {
    const object = { name: 'Walrus', occupation: 'coder' };
    const getName = prop('name');
    const expected = object.name;
    expect(getName(object)).toEqual(expected);
  });
});

describe('Tests for pluck Function', () => {
  test('pluck to return single prop in Array from object', () => {
    const object = { name: 'Walrus', occupation: 'developer' };
    const expected = [object.name];
    expect(pluck(['name'], object)).toEqual(expected);
  });

  test('pluck to return multiple props in Array from object', () => {
    const object = { name: 'Walrus', occupation: 'developer' };
    const expected = [object.name, object.occupation];
    expect(pluck(['name', 'occupation'], object)).toEqual(expected);
  });
});

describe('Tests for pfPluck Function', () => {
  test('pfPluck to return single prop in Array from object', () => {
    const object = { name: 'Walrus', occupation: 'developer' };
    const expected = [object.name];
    expect(pfPluck(['name'], object)).toEqual(expected);
  });

  test('pfPluck to return multiple props in Array from object', () => {
    const object = { name: 'Walrus', occupation: 'developer' };
    const expected = [object.name, object.occupation];
    expect(pfPluck(['name', 'occupation'], object)).toEqual(expected);
  });
});
