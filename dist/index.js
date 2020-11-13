/*=======================
Utilities IMPURE
=======================*/
export const hmm = (vars) => {
    if (vars === undefined || vars === null) {
        console.log(`ಠ_ಠ`);
    }
    else {
        console.log(vars);
    }
};
export const err = (message) => {
    if (message === undefined) {
        throw new Error(`¯\_(ツ)_/¯`);
    }
    else {
        throw new Error(message);
    }
};
export const logger = (x) => {
    hmm(x);
    return x;
};
export const startT = (name) => console.time(name);
export const stopT = (name) => console.timeEnd(name);
export const table = (tabularData, properties) => properties
    ? console.table(tabularData, properties)
    : console.table(tabularData);
/*===========================
Iterable and Array Creators
============================*/
//Remove keys part (OBSOLETE do with Array()) moved Fnality to Range and pyRange
// export const iter = (loops: number) => [...Array(loops).keys()];
export const range = (end, start, step = 1) => {
    if (!start)
        return [...Array(end).keys()];
    if (end < 0)
        err('End param cannot be a negative integer.');
    if (start > end)
        err('Start cannot be after end param.');
    if (start < 0)
        err('Start has to be a positive integer.');
    if (step <= 0)
        err('Step has to be a positive integer greater than 0.');
    const length = Math.ceil((end - start) / step);
    const arr = [...Array(length).keys()];
    return arr.map(x => x + start + x * (step - 1));
};
export const pyRange = (start, end, step = 1) => {
    if (!end)
        return [...Array(start).keys()];
    if (end < 0)
        err('End param cannot be a negative integer.');
    if (start > end)
        err('Start cannot be after end param.');
    if (start < 0)
        err('Start has to be a positive integer.');
    if (step <= 0)
        err('Step has to be a positive integer greater than 0.');
    const length = Math.ceil((end - start) / step);
    const arr = [...Array(length).keys()];
    return arr.map(x => x + start + x * (step - 1));
};
/*=====================
 Basic array Transformations
 =====================*/
export const head = (arr) => arr.slice(0, 1)[0];
export const first = head;
export const last = (arr) => arr.slice(arr.length - 1)[0];
export const tail = (arr) => arr.slice(1, arr.length);
export const initial = (arr) => arr.slice(0, arr.length - 1);
export const decoupleHead = (arr) => [head(arr), tail(arr)];
export const decoupleTail = (arr) => [
    last(arr),
    initial(arr),
];
/*======================
 STRING and DATE Utils
========================*/
// split words
export const splitWords = (sentence) => sentence.split(' ');
//Capitalize
export const capitalize = (word) => {
    const lcWord = word.toLowerCase();
    return `${lcWord[0].toUpperCase()}${lcWord.slice(1, lcWord.length)}`;
};
// Catpizalize first word
export const capitalizeFirst = (sentence) => {
    const [first, rest] = decoupleHead(sentence.toLowerCase().split(' '));
    return `${capitalize(first)} ${rest.join(' ')}`;
};
// Capitalize all add exceptions
export const capitalizeAll = (sentence, ...exceptions) => sentence
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
// const phrase = 'HELLO THERE FELLOW TRAVELLER.';
// hmm(capitalizeAll(phrase, 'there'));
// Remove Hour
// Get Hour
// toLocaleString ?
// Price utils ?
/*=====================
    Getters
======================*/
export const dirProp = (key, obj) => obj[key];
export const prop = (key) => (obj) => obj[key];
export const pluck = (keys, obj) => keys.map(k => dirProp(k, obj));
export const pfPluck = (keys, obj) => keys.map(k => dirProp(k, obj));
/*==================
    Array Functions
==================*/
export const pfPipe = (...fns) => (x) => {
    const [head, ...tail] = fns;
    const res = head(x);
    return tail.length > 0 ? pipe(...tail)(res) : res;
};
export const pipe = (...fns) => (x) => {
    const [head, ...tail] = fns;
    const res = head(x);
    return tail.length > 0 ? pipe(...tail)(res) : res;
};
export const dirPipe = (x, ...fns) => {
    const [head, ...tail] = fns;
    const res = head(x);
    return tail.length > 0 ? pipe(...tail)(res) : res;
};
export const pfCompose = (...fns) => (x) => {
    const [last, initial] = decoupleTail(fns);
    const res = last(x);
    return initial.length > 0 ? compose(...initial)(res) : res;
};
export const compose = (...fns) => (x) => {
    const [last, initial] = decoupleTail(fns);
    const res = last(x);
    return initial.length > 0 ? compose(...initial)(res) : res;
};
export const dirCompose = (x, ...fns) => {
    const [last, initial] = decoupleTail(fns);
    const res = last(x);
    return initial.length > 0 ? compose(...initial)(res) : res;
};
export const dirMap = (fn, x) => x.map(fn);
/**
 * Curried Function.
 *
 * TS Typing: map: <T, U>(fn: MapCBFn<T, U>) => (x: T[]) => U[]
 *
 * First Execution: Takes a Map Callback Fn as its first argument.
 *
 * Second Execution: Takes a value to be mapped over.
 */
export const map = (fn) => (x) => x.map(fn);
export const pfMap = (fn) => (x) => x.map(fn);
export const evalPredicates = (...fns) => (x) => {
    const [head, tail] = decoupleHead(fns);
    return tail.length === 0
        ? head(x)
        : head(x)
            ? evalPredicates(...tail)(x)
            : false;
};
export const dirFilter = (x, ...fns) => {
    return fns.length === 1 ? x.filter(fns[0]) : x.filter(evalPredicates(...fns));
};
export const filter = (...fns) => (x) => {
    return fns.length === 1 ? x.filter(fns[0]) : x.filter(evalPredicates(...fns));
};
export const pfFilter = (...fns) => (x) => {
    return fns.length === 1 ? x.filter(fns[0]) : x.filter(evalPredicates(...fns));
};
export function reduce(fn, initialValue) {
    return function (x) {
        return initialValue ? x.reduce(fn, initialValue) : x.reduce(fn);
    };
}
export const pfReduce = (fn, initialValue) => (x) => initialValue ? x.reduce(fn, initialValue) : x.reduce(fn);
export function dirReduce(x, fn, initialValue) {
    return initialValue ? x.reduce(fn, initialValue) : x.reduce(fn);
}
/*========================
Object and Array Utilities
=========================*/
export const dataEquals = (x, y) => {
    if (typeof x && typeof y) {
        return typeof x === 'object'
            ? JSON.stringify(sortIterable(x)) === JSON.stringify(sortIterable(y))
            : x === y;
    }
    return false;
};
export const copyValues = (x) => JSON.parse(JSON.stringify(x));
export const sortIterable = (obj) => {
    const keys = Object.keys(obj).sort();
    return obj.length
        ? keys.reduce((sorted, key) => {
            const node = typeof obj[key] === 'object' ? sortIterable(obj[key]) : obj[key];
            return (sorted[key] = node), sorted;
        }, [])
        : keys.reduce((sorted, key) => {
            const node = typeof obj[key] === 'object' ? sortIterable(obj[key]) : obj[key];
            return (sorted[key] = node), sorted;
        }, {});
};
export const deepCopy = (obj) => {
    const keys = Object.keys(obj);
    return obj.length
        ? keys.reduce((copy, key) => {
            const node = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
            return (copy[key] = node), copy;
        }, [])
        : keys.reduce((copy, key) => {
            const node = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
            return (copy[key] = node), copy;
        }, {});
};
const primitiveEquals = (x, y) => {
    const [typeX, typeY] = [typeof x, typeof y];
    if (typeX !== typeY)
        return false;
    if (typeX !== 'function' && typeX !== 'object' && x !== y)
        return false;
    if (typeX === 'function' && x.toString() !== y.toString())
        return false;
    return true;
};
export const equals = (x, y) => {
    if (!primitiveEquals(x, y))
        return false;
    if (typeof x === 'object') {
        const [xKeys, yKeys] = [Object.keys(x).sort(), Object.keys(y).sort()];
        if (xKeys.toString() !== yKeys.toString())
            return false;
        for (const key of xKeys) {
            if (!primitiveEquals(x[key], y[key]))
                return false;
            if (typeof x[key] === 'object') {
                const deepReturn = equals(x[key], y[key]);
                if (!deepReturn)
                    return false;
            }
        }
    }
    return true;
};
// const user = {
// 	name: 'Moerse',
// 	hai: () => hmm('Hai'),
// 	num: [1, 2, 3, [1, 2, { a: 1, b: 2, bai: () => hmm('bai') }]],
// 	tie: 1,
// };
// const user2 = {
// 	hai: () => hmm('Hai'),
// 	num: [1, 2, 3, [1, 2, { b: 2, a: 1, bai: () => hmm('bai') }]],
// 	tie: 1,
// 	name: 'Moerse',
// };
// hmm(equals(user, user2));
// hmm(dataEquals(user, user2));
/*=========================
TESTING GROUNDS
===========================*/
// const gt3 = (num: number) => num > 3;
// const lt10 = (num: number) => num < 10;
// const oneTo20 = range(21, 1);
// const filterTest = filter(gt3, lt10)(oneTo20);
// const dirFilterTest = dirFilter(oneTo20, gt3, lt10);
// const pfFilterTest = pfFilter(gt3, lt10)(oneTo20);
// hmm({ filterTest, dirFilterTest, pfFilterTest });
// const grtThan2 = (x: number) => x > 2;
// const add2 = (x: number) => x + 2;
// const times10 = (x: number) => x * 10;
// const add2Times10 = pipe(add2, times10);
// const times10plus2 = compose(add2, times10);
// const totObj = (p: { total: number }, c: number) => ({ total: p.total + c });
// const fltr2Add2Times10 = pipe<typeof arr, ReturnType<typeof totObj>>(
// 	filter(grtThan2),
// 	map(compose(times10plus2, add2Times10)),
// 	reduce(totObj, { total: 0 }),
// );
// const fltr2Times10Add2 = pipe<typeof arr, ReturnType<typeof totObj>>(
// 	filter(grtThan2),
// 	map(pipe(times10plus2, add2Times10)),
// 	reduce(totObj, { total: 0 }),
// );
// const composeTest = fltr2Add2Times10(arr);
// const pipeTest = fltr2Times10Add2(arr);
// table({ composeTest, pipeTest });
//# sourceMappingURL=index.js.map