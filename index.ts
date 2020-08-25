/*=======================
Utilities IMPURE
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

export const startT = (name: string) => console.time(name);

export const stopT = (name: string) => console.timeEnd(name);

export const table = (tabularData: any, properties?: string[]) =>
	properties
		? console.table(tabularData, properties)
		: console.table(tabularData);

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

export const dirProp = <T extends keyof U, U>(key: T, obj: U): U[T] => obj[key];

export const prop = (key: string) => (obj: any) => obj[key];
//Ambiguous
export const pluck = <T extends keyof U, U>(keys: T[], obj: U) =>
	keys.map(k => dirProp(k, obj));

export const pfPluck = (keys: string[], obj: any) =>
	keys.map(k => dirProp(k, obj));

/*==================
	POINTFREE
==================*/

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

export const pfFilter = (fn: Function) => (x: any) => x.filter(fn);

//Reduce

export function reduce<T>(
	callbackFn: (
		previousValue: T,
		currentValue: T,
		currentIndex: number,
		array: T[],
	) => T,
): (x: T[]) => T;
export function reduce<T>(
	callbackFn: (
		previousValue: T,
		currentValue: T,
		currentIndex: number,
		array: T[],
	) => T,
	initialValue: T,
): (x: T[]) => T;
export function reduce<T, U>(
	callbackFn: (
		previousValue: U,
		currentValue: T,
		currentIndex: number,
		array: T[],
	) => U,
	initialValue: U,
): (x: T[]) => U;
export function reduce(fn: any, initialValue?: any) {
	return function (x: any[]) {
		return initialValue ? x.reduce(fn, initialValue) : x.reduce(fn);
	};
}

export const pfReduce = (fn: any, initialValue?: any) => (x: any[]) =>
	initialValue ? x.reduce(fn, initialValue) : x.reduce(fn);

export function dirReduce<T>(
	x: T[],
	callbackFn: (
		previousValue: T,
		currentValue: T,
		currentIndex: number,
		array: T[],
	) => T,
): T;
export function dirReduce<T>(
	x: T[],
	callbackFn: (
		previousValue: T,
		currentValue: T,
		currentIndex: number,
		array: T[],
	) => T,
	initialValue: T,
): T;
export function dirReduce<T, U>(
	x: T[],
	callbackFn: (
		previousValue: U,
		currentValue: T,
		currentIndex: number,
		array: T[],
	) => U,
	initialValue: U,
): U;
export function dirReduce(x: any[], fn: any, initialValue?: any) {
	return initialValue ? x.reduce(fn, initialValue) : x.reduce(fn);
}

/*========================
Complex Fn Related
=========================*/

/*=========================
TESTING GROUNDS
===========================*/

const arr = iter(10);

const grtThan2 = (x: number) => x > 2;

const add2 = (x: number) => x + 2;
const times10 = (x: number) => x * 10;

const add2Times10 = pipe(add2, times10);
const times10plus2 = compose(add2, times10);
const totObj = (p: { total: number }, c: number) => ({ total: p.total + c });

const fltr2Add2Times10 = pipe<typeof arr, ReturnType<typeof totObj>>(
	filter(grtThan2),
	map(compose(times10plus2, add2Times10)),
	reduce(totObj, { total: 0 }),
);

const fltr2Times10Add2 = pipe<typeof arr, ReturnType<typeof totObj>>(
	filter(grtThan2),
	map(pipe(times10plus2, add2Times10)),
	reduce(totObj, { total: 0 }),
);

const composeTest = fltr2Add2Times10(arr);
const pipeTest = fltr2Times10Add2(arr);

table({ composeTest, pipeTest });
