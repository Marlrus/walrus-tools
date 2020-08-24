/*=======================
Utilities
=======================*/

export const hmm = (vars?: any) => {
	if (vars === undefined || vars === null) {
		console.log(`ಠ_ಠ`);
	} else {
		console.log(vars);
	}
};

export const err = (message?: string) => {
	if (message === undefined) {
		throw new Error(`¯\_(ツ)_/¯`);
	} else {
		throw new Error(message);
	}
};

export const logger = <T>(x: T) => {
	hmm(x);
	return x;
};

/*===========================
Iterable and Array Creators
============================*/

export const iter = (loops: number) => [...Array(loops).keys()];

export const range = (end: number, start = 0, step = 1) => {
	// if (end < 0 || start > end || step <= 0) return;
	if (end < 0) err('End param cannot be a negative integer.');
	if (start > end) err('Start cannot be after end param.');
	if (start < 0) err('Start has to be a positive integer.');
	if (step <= 0) err('Step has to be a positive integer greater than 0.');

	const length = Math.ceil((end - start) / step);

	const arr = [...Array(length).keys()];

	return arr.map(x => x + start + x * (step - 1));
};

// // const emptyArr = Array(5);

// // const keysIterator = emptyArr.keys();

// // const finalArr = Array.from(keysIterator);

// // hmm({ finalArr });

export const pyRange = (start: number, end?: number, step = 1) => {
	if (end === undefined) {
		end = start;
		start = 0;
	}

	if (end < 0) err('End param cannot be a negative integer.');
	if (start > end) err('Start cannot be after end param.');
	if (start < 0) err('Start has to be a positive integer.');
	if (step <= 0) err('Step has to be a positive integer greater than 0.');

	const length = Math.ceil((end - start) / step);

	const arr = [...Array(length).keys()];

	return arr.map(x => x + start + x * (step - 1));
};

export const randomInt = (top: number, start = 0) => {
	const range = top - start + 1;
	return Math.floor(Math.random() * range + start);
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

/*=====================
	Getters
======================*/

export const prop = <T extends keyof U, U>(key: T, obj: U) => obj[key];

//Ambiguous
export const pluck = <T extends keyof U, U>(keys: T[], obj: U) =>
	keys.map(k => prop(k, obj));

/*==================
	POINTFREE
==================*/

export const pfProp = (key: string) => (obj: any) => obj[key];

export const pfPluck = (keys: string[], obj: any) =>
	keys.map(k => prop(k, obj));

export const pfPipe = (...fns: Function[]) => (x: any): any => {
	const [head, ...tail] = fns;
	const res = head(x);

	return tail.length > 0 ? pipe(...tail)(res) : res;
};

export const pipe = <In, Out>(...fns: Function[]) => (x: In): Out => {
	const [head, ...tail] = fns;
	const res = head(x);

	return tail.length > 0 ? pipe(...tail)(res) : res;
};

//Find convention
export const dirPipe = <In, Out>(x: In, ...fns: Function[]): Out => {
	const [head, ...tail] = fns;
	const res = head(x);

	return tail.length > 0 ? pipe(...tail)(res) : res;
};

export const pfCompose = (...fns: Function[]) => (x: any): any => {
	const [last, initial] = decoupleTail(fns);
	const res = last(x);

	return initial.length > 0 ? compose(...initial)(res) : res;
};

export const compose = <In, Out>(...fns: Function[]) => (x: In): Out => {
	const [last, initial] = decoupleTail(fns);
	const res = last(x);

	return initial.length > 0 ? compose(...initial)(res) : res;
};

export const dirCompose = <In, Out>(x: In, ...fns: Function[]): Out => {
	const [last, initial] = decoupleTail(fns);
	const res = last(x);

	return initial.length > 0 ? compose(...initial)(res) : res;
};

type MapCBFn<T, U> = (value: T, index: number, array: T[]) => U;

export const dirMap = <T, U>(fn: MapCBFn<T, U>, x: T[]): U[] => x.map(fn);

export const map = <T, U>(fn: MapCBFn<T, U>) => (x: T[]): U[] => x.map(fn);

export const pfMap = (fn: Function) => (x: any) => x.map(fn);

type FilterCBFn<T> = (value: T, index: number, array: T[]) => boolean;

export const dirFilter = <T>(fn: FilterCBFn<T>, x: T[]) => x.filter(fn);

export const filter = <T>(fn: FilterCBFn<T>) => (x: T[]) => x.filter(fn);

const arr = range(10);

const grtThan2 = (x: number) => x > 2;
// // const toString = (x: any): string => x.toString();

const add2 = (x: number) => x + 2;
const times10 = (x: number) => x * 10;
// const toString = (x: any) => x.toString();

const add2Times10 = pipe(add2, times10);
const times10plus2 = compose(add2, times10);

const fltr2Add2Times10 = pipe<number[], number[]>(
	filter(grtThan2),
	map<number, number>(pipe(times10plus2, add2Times10))
);

const tester = fltr2Add2Times10(arr);

hmm(tester);

// const concat = <T extends Arr, U extends Arr>(
// 	arr1: T,
// 	arr2: U
// ): [...T, ...U] => [...arr1, ...arr2];

// to enable deep level flatten use recursion with reduce and concat
// function flatDeep<T>(arr: T[], d = 1): any[] {
// 	return d > 0
// 		? arr.reduce(
// 				(acc, val) =>
// 					acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
// 				[]
// 		  )
// 		: arr.slice();
// }

// hmm(flatDeep(arr, 1));
// [1, 2, 3, 4, 5, 6]

/*========================
Complex Fn Related
=========================*/
