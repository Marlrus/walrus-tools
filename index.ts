/*=======================
Impure: Logging and Erring
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
export const fullPipe = <In, Out>(x: In, ...fns: Function[]): Out => {
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
	// const front = fns.slice(0, fns.length - 1);
	const res = last(x);

	return initial.length > 0 ? compose(...initial)(res) : res;
};

export const fullCompose = <In, Out>(x: In, ...fns: Function[]): Out => {
	const [last, initial] = decoupleTail(fns);
	// const front = fns.slice(0, fns.length - 1);
	const res = last(x);

	return initial.length > 0 ? compose(...initial)(res) : res;
};

type MapCallbackFn<T, U> = (value: T, index: number, array: T[]) => U;

export const map = <T, U>(fn: MapCallbackFn<T, U>, x: T[]): U[] => x.map(fn);

export const currMap = <T, U>(fn: MapCallbackFn<T, U>) => (x: T[]): U[] =>
	x.map(fn);

export const pfMap = (fn: Function) => (x: any) => x.map(fn);

//map obj

const arr = range(10);

const add2 = (x: number) => x + 2;
const times10 = (x: number) => x * 10;

hmm(currMap(add2));
hmm(currMap(add2)(arr));
hmm(fullCompose(1, add2, times10));
hmm(fullPipe(1, add2, times10));
// const toString = (x: any): string => x.toString();

// // const mult10add2 = pfCompose( add2, times10);
// const add2mult10 = pipe<number, string>(add2, times10, toString);
// const test = map(add2mult10, arr);

// hmm(test);

// const toString = (x: any) => x.toString();

// const twelve: string = mult10add2(1);
// hmm({ twelve });

// const thirty = add2mult10(1);
// hmm({ thirty });

/*========================
Complex Fn Related
=========================*/

// type MapFunction<T> = (value: T, index?: number, array?: any[]) => unknown;
// type iterableObject = { [key: string]: any };

// //Make it work with objects as well and DRY
// export const map = <T, U extends [] | iterableObject>(
// 	fn: MapFunction<T>,
// 	iter?: U
// ) => {
// 	// if (iter === undefined) {
// 	// 	return (iter: U) => {
// 	// 		if (typeof iter !== 'object') return;

// 	// 		if (Array.isArray(iter)) {
// 	// 			return iter.map(fn);
// 	// 		} else {
// 	// 			const obj = {};
// 	// 			for (const k in iter) {
// 	// 				obj[k] = fn(iter[k]);
// 	// 			}
// 	// 			return obj;
// 	// 		}
// 	// 	};
// 	// }

// 	if (typeof iter !== 'object') return;

// 	if (Array.isArray(iter)) {
// 		return iter.map(fn);
// 	} else {
// 		const obj: iterableObject = {};
// 		for (const k in iter) {
// 			obj[k] = fn(iter[k] as any);
// 		}
// 		return obj;
// 	}
// };

// const arr = [1, 2, 3];
// const add: MapFunction<number> = (x: number) => x + 2;
// const obj = { a: 1, b: 2, c: 3 };

// const test1 = map(add, arr);
// const test2 = map(add, obj);

// hmm(test1);
// hmm(test2);
