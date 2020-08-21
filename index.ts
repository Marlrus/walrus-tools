export const hmm = (vars: any) => {
	if (vars === undefined || vars === null) {
		console.log(`ಠ_ಠ`);
	} else {
		console.log(vars);
	}
};

hmm('hai');

// export const err = message => {
// 	if (message === undefined) {
// 		throw new Error(`¯\_(ツ)_/¯`);
// 	} else {
// 		throw new Error(message);
// 	}
// };

// export const iter = loops => [...Array(loops).keys()];

// export const range = (end, start = 0, step = 1) => {
// 	if (end < 0 || start > end || step <= 0) return;

// 	const length = Math.ceil((end - start) / step);

// 	const arr = [...Array(length).keys()];

// 	return arr.map(x => x + start + x * (step - 1));
// };

// // const emptyArr = Array(5);

// // const keysIterator = emptyArr.keys();

// // const finalArr = Array.from(keysIterator);

// // hmm({ finalArr });

// export const pyRange = (start, end, step = 1) => {
// 	if (end < 0 || start > end || step <= 0) return;

// 	if (end === undefined) {
// 		end = start;
// 		start = 0;
// 	}

// 	const length = Math.ceil((end - start) / step);

// 	const arr = [...Array(length).keys()];

// 	return arr.map(x => x + start + x * (step - 1));
// };

// //Make it work with objects as well and DRY
// export const map = (fn, iter) => {
// 	if (iter === undefined) {
// 		return iter => {
// 			if (typeof iter !== 'object') return;

// 			if (Array.isArray(iter)) {
// 				return iter.map(fn);
// 			} else {
// 				const obj = {};
// 				for (const k in iter) {
// 					obj[k] = fn(iter[k]);
// 				}
// 				return obj;
// 			}
// 		};
// 	}

// 	if (typeof iter !== 'object') return;

// 	if (Array.isArray(iter)) {
// 		return iter.map(fn);
// 	} else {
// 		const obj = {};
// 		for (const k in iter) {
// 			obj[k] = fn(iter[k]);
// 		}
// 		return obj;
// 	}
// };

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

// export const randomInt = (top, start = 0) => {
// 	const range = top - start + 1;
// 	return Math.floor(Math.random() * range + start);
// };

// export const logger = x => {
// 	hmm(x);
// 	return x;
// };

// export const head = arr => arr.slice(0, 1);

// export const first = head;

// export const last = arr => arr.slice(arr.length - 1);

// export const tail = arr => arr.slice(1, arr.length);

// export const initial = arr => arr.slice(0, arr.length - 1);

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
