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

// export const pipe = (...fns) => x => {
// 	const [head, ...tail] = fns;
// 	const res = head(x);

// 	return tail.length > 0 ? pipe(...tail)(res) : res;
// };

// export const compose = (...fns) => x => {
// 	const last = fns[fns.length - 1];
// 	const front = fns.slice(0, fns.length - 1);
// 	const res = last(x);

// 	return front.length > 0 ? compose(...front)(res) : res;
// };

export const randomInt = (top: number, start = 0) => {
	const range = top - start + 1;
	return Math.floor(Math.random() * range + start);
};

export const logger = <T>(x: T) => {
	hmm(x);
	return x;
};

export const head = <T>(arr: T[]) => arr.slice(0, 1)[0];

export const first = head;

export const last = <T>(arr: T[]) => arr.slice(arr.length - 1)[0];

export const tail = <T>(arr: T[]) => arr.slice(1, arr.length);

export const initial = <T>(arr: T[]) => arr.slice(0, arr.length - 1);

// export const prop = (key, obj) => {
// 	if (obj === undefined)
// 		return obj => {
// 			return obj[key];
// 		};
// 	return obj[key];
// };

// export const props = (keys, obj) => {
// 	if (obj === undefined) {
// 		return obj => keys.reduce((p, c) => ({ ...p, [c]: obj[c] }), {});
// 	}
// 	return keys.reduce((p, c) => ({ ...p, [c]: obj[c] }), {});
// };

// const obj = { x: 1, y: 2, z: 3 };

// let x = prop('x', obj);

// const yz = props(['y', 'z']);

// hmm({ x });
// hmm(yz(obj));
// hmm(obj);
