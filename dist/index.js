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
export const iter = (loops) => [...Array(loops).keys()];
export const range = (end, start = 0, step = 1) => {
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
export const prop = (key, obj) => obj[key];
export const pluck = (keys, obj) => keys.map(k => prop(k, obj));
export const pfProp = (key) => (obj) => obj[key];
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
export const map = (fn, x) => x.map(fn);
//# sourceMappingURL=index.js.map