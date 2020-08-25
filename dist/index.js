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
export const iter = (loops) => [...Array(loops).keys()];
export const range = (end, start = 0, step = 1) => {
    // if (end < 0 || start > end || step <= 0) return;
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
// // const emptyArr = Array(5);
// // const keysIterator = emptyArr.keys();
// // const finalArr = Array.from(keysIterator);
// // hmm({ finalArr });
export const pyRange = (start, end, step = 1) => {
    if (end === undefined) {
        end = start;
        start = 0;
    }
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
export const randomInt = (top, start = 0) => {
    const range = top - start + 1;
    return Math.floor(Math.random() * range + start);
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
/*=====================
    Getters
======================*/
export const dirProp = (key, obj) => obj[key];
export const prop = (key) => (obj) => obj[key];
export const pluck = (keys, obj) => keys.map(k => dirProp(k, obj));
export const pfPluck = (keys, obj) => keys.map(k => dirProp(k, obj));
/*==================
    POINTFREE
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
export const dirFilter = (fn, x) => x.filter(fn);
export const filter = (fn) => (x) => x.filter(fn);
export const pfFilter = (fn) => (x) => x.filter(fn);
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
export const equals = (x, y) => JSON.stringify(x) === JSON.stringify(y);
export const deepCopy = (x) => JSON.parse(JSON.stringify(x));
/*=========================
TESTING GROUNDS
===========================*/
// const arr = iter(10);
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