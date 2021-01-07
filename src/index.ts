/*=======================
Utilities IMPURE
=======================*/

export const hmm = (vars?: any) => {
  if (vars === undefined || vars === null) return console.log(`ಠ_ಠ`);
  console.log(vars);
};

export const err = (message?: string) => {
  if (message === undefined) throw new Error(`¯\_(ツ)_/¯`);
  throw new Error(message);
};

export const logger = <T>(x: T) => {
  hmm(x);
  return x;
};

export const startT = (name: string) => console.time(name);

export const stopT = (name: string) => console.timeEnd(name);

export const table = (tabularData: any, properties?: string[]) => {
  if (properties) return console.table(tabularData, properties);
  console.table(tabularData);
};

/*===========================
Iterable and Array Creators
============================*/

export const range = (end: number, start?: number, step = 1) => {
  if (end < 0) err('End param cannot be a negative integer.');

  if (!start) return [...Array(end).keys()];

  if (start > end) err('Start cannot be after end param.');
  if (start < 0) err('Start has to be a positive integer.');
  if (step <= 0) err('Step has to be a positive integer greater than 0.');

  const length = Math.ceil((end - start) / step);

  const arr = [...Array(length).keys()];

  return arr.map(x => x + start + x * (step - 1));
};

export const pyRange = (start: number, end?: number, step = 1) => {
  if (start < 0) err('Start has to be a positive integer.');

  if (!end) return [...Array(start).keys()];

  if (end < 0) err('End param cannot be a negative integer.');
  if (start > end) err('Start cannot be after end param.');
  if (step <= 0) err('Step has to be a positive integer greater than 0.');

  const length = Math.ceil((end - start) / step);

  const arr = [...Array(length).keys()];

  return arr.map(x => x + start + x * (step - 1));
};

/*=====================
 Basic array Transformations
 =====================*/

export const head = <T>(arr: T[]) => arr.slice(0, 1)[0];

export const first = head;

export const last = <T>(arr: T[]) => arr.slice(arr.length - 1)[0];

export const tail = <T>(arr: T[]) => arr.slice(1, arr.length);

export const initial = <T>(arr: T[]) => arr.slice(0, arr.length - 1);

export const decoupleHead = <T>(arr: T[]): [T, T[]] => [head(arr), tail(arr)];

export const decoupleTail = <T>(arr: T[]): [T, T[]] => [
  last(arr),
  initial(arr),
];

/*======================
 STRING and DATE Utils
========================*/

// split words
export const splitWords = (sentence: string) => sentence.split(' ');

//Capitalize string
export const capitalize = (word: string) => {
  const lcWord = word.toLowerCase();
  return `${lcWord[0].toUpperCase()}${lcWord.slice(1, lcWord.length)}`;
};

// Capitalize all add exceptions
export const capitalizeAll = (sentence: string, ...exceptions: string[]) =>
  sentence
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

/*=====================
	Getters
======================*/

export const dirProp = <T extends keyof U, U>(key: T, obj: U): U[T] => obj[key];

export const prop = (key: string) => (obj: any) => obj[key];

export const pluck = <T extends keyof U, U>(keys: T[], obj: U) =>
  keys.map(k => dirProp(k, obj));

export const pfPluck = (keys: string[], obj: any) =>
  keys.map(k => dirProp(k, obj));

/*==================
	Array Functions
==================*/

export const pfPipe = (...fns: Function[]) => (x: any): any => {
  const [head, ...tail] = fns;
  const res = head(x);

  if (tail.length > 0) return pfPipe(...tail)(res);
  return res;
};

export const pipe = <In, Out>(...fns: Function[]) => (x: In): Out => {
  const [head, ...tail] = fns;
  const res = head(x);

  if (tail.length > 0) return pipe<In, Out>(...tail)(res);
  return res;
};

export const dirPipe = <In, Out>(x: In, ...fns: Function[]): Out => {
  const [head, ...tail] = fns;
  const res = head(x);

  if (tail.length > 0) return dirPipe<In, Out>(res, ...tail);
  return res;
};

export const pfCompose = (...fns: Function[]) => (x: any): any => {
  const [last, initial] = decoupleTail(fns);
  const res = last(x);

  if (initial.length > 0) return pfCompose(...initial)(res);
  return res;
};

export const compose = <In, Out>(...fns: Function[]) => (x: In): Out => {
  const [last, initial] = decoupleTail(fns);
  const res = last(x);

  if (initial.length > 0) return compose<In, Out>(...initial)(res);
  return res;
};

export const dirCompose = <In, Out>(x: In, ...fns: Function[]): Out => {
  const [last, initial] = decoupleTail(fns);
  const res = last(x);

  if (initial.length > 0) return dirCompose<In, Out>(res, ...initial);
  return res;
};

type MapCBFn<T, U> = (value: T, index: number, array: T[]) => U;

export const dirMap = <T, U>(fn: MapCBFn<T, U>, x: T[]): U[] => x.map(fn);

export const map = <T, U>(fn: MapCBFn<T, U>) => (x: T[]): U[] => x.map(fn);

export const pfMap = (fn: Function) => (x: any) => x.map(fn);

type FilterCBFn<T> = (value: T, index?: number, array?: T[]) => boolean;

export const evalPredicates = <T>(...fns: FilterCBFn<T>[]) => (
  x: T
): boolean => {
  const [head, tail] = decoupleHead(fns);
  if (tail.length === 0) return head(x);
  if (head(x)) return evalPredicates(...tail)(x);
  return false;
};

export const dirFilter = <T>(x: T[], ...fns: FilterCBFn<T>[]) => {
  if (fns.length === 1) return x.filter(fns[0]);
  return x.filter(evalPredicates(...fns));
};

export const filter = <T>(...fns: FilterCBFn<T>[]) => (x: T[]) => {
  if (fns.length === 1) return x.filter(fns[0]);
  return x.filter(evalPredicates(...fns));
};

export const pfFilter = (...fns: FilterCBFn<any>[]) => (x: any) => {
  if (fns.length === 1) return x.filter(fns[0]);
  return x.filter(evalPredicates(...fns));
};

//Reduce

export function reduce<T>(
  callbackFn: (
    previousValue: T,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => T
): (x: T[]) => T;
export function reduce<T>(
  callbackFn: (
    previousValue: T,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => T,
  initialValue: T
): (x: T[]) => T;
export function reduce<T, U>(
  callbackFn: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => U,
  initialValue: U
): (x: T[]) => U;
export function reduce(fn: any, initialValue?: any) {
  return function (x: any[]) {
    if (initialValue) return x.reduce(fn, initialValue);
    return x.reduce(fn);
  };
}

export const pfReduce = (fn: any, initialValue?: any) => (x: any[]) => {
  if (initialValue) return x.reduce(fn, initialValue);
  return x.reduce(fn);
};

export function dirReduce<T>(
  x: T[],
  callbackFn: (
    previousValue: T,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => T
): T;
export function dirReduce<T>(
  x: T[],
  callbackFn: (
    previousValue: T,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => T,
  initialValue: T
): T;
export function dirReduce<T, U>(
  x: T[],
  callbackFn: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => U,
  initialValue: U
): U;
export function dirReduce(x: any[], fn: any, initialValue?: any) {
  if (initialValue) return x.reduce(fn, initialValue);
  return x.reduce(fn);
}

/*========================
Object and Array Utilities
=========================*/

export const copyValues = <T>(x: T): T => JSON.parse(JSON.stringify(x));

export const deepCopy = <T extends AnyIterable>(obj: T): T => {
  const keys = Object.keys(obj);

  if (obj.length) {
    return keys.reduce((copy: any, key: string) => {
      const node = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
      return (copy[key] = node), copy;
    }, []);
  }

  return keys.reduce((copy: any, key: string) => {
    const node = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    return (copy[key] = node), copy;
  }, {});
};

interface AnyIterable {
  [key: string]: any;
}

export const sortIterable = <T extends AnyIterable>(obj: T): T => {
  const keys = Object.keys(obj).sort();

  if (obj.length) {
    return keys.reduce((sorted: any, key: string) => {
      const node =
        typeof obj[key] === 'object' ? sortIterable(obj[key]) : obj[key];
      return (sorted[key] = node), sorted;
    }, []);
  }

  return keys.reduce((sorted: any, key: string) => {
    const node =
      typeof obj[key] === 'object' ? sortIterable(obj[key]) : obj[key];
    return (sorted[key] = node), sorted;
  }, {});
};

export const dataEquals = (x: any, y: any) => {
  if (typeof x !== typeof y) return false;
  if (typeof x === 'object')
    return JSON.stringify(sortIterable(x)) === JSON.stringify(sortIterable(y));
  return x === y;
};

export const equals = (x: any, y: any) => {
  const specialEquals = (x: any, y: any) => {
    const [typeX, typeY] = [typeof x, typeof y];
    if (typeX !== typeY) return false;
    if (typeX !== 'function' && typeX !== 'object' && x !== y) return false;
    if (typeX === 'function' && x.toString() !== y.toString()) return false;
    return true;
  };

  if (!specialEquals(x, y)) return false;
  if (typeof x === 'object') {
    const [xKeys, yKeys] = [Object.keys(x).sort(), Object.keys(y).sort()];
    if (xKeys.toString() !== yKeys.toString()) return false;
    for (const key of xKeys) {
      if (!specialEquals(x[key], y[key])) return false;
      if (typeof x[key] === 'object') {
        const deepReturn = equals(x[key], y[key]);
        if (!deepReturn) return false;
      }
    }
  }
  return true;
};
