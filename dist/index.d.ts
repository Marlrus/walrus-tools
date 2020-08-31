export declare const hmm: (vars?: any) => void;
export declare const err: (message?: string | undefined) => never;
export declare const logger: <T>(x: T) => T;
export declare const startT: (name: string) => void;
export declare const stopT: (name: string) => void;
export declare const table: (tabularData: any, properties?: string[] | undefined) => void;
export declare const iter: (loops: number) => number[];
export declare const range: (end: number, start?: number, step?: number) => number[];
export declare const pyRange: (start: number, end?: number | undefined, step?: number) => number[];
export declare const randomInt: (top: number, start?: number) => number;
export declare const head: <T>(arr: T[]) => T;
export declare const first: <T>(arr: T[]) => T;
export declare const last: <T>(arr: T[]) => T;
export declare const tail: <T>(arr: T[]) => T[];
export declare const initial: <T>(arr: T[]) => T[];
export declare const decoupleHead: <T>(arr: T[]) => [T, T[]];
export declare const decoupleTail: <T>(arr: T[]) => [T, T[]];
export declare const dirProp: <T extends keyof U, U>(key: T, obj: U) => U[T];
export declare const prop: (key: string) => (obj: any) => any;
export declare const pluck: <T extends keyof U, U>(keys: T[], obj: U) => U[T][];
export declare const pfPluck: (keys: string[], obj: any) => any[];
export declare const pfPipe: (...fns: Function[]) => (x: any) => any;
export declare const pipe: <In, Out>(...fns: Function[]) => (x: In) => Out;
export declare const dirPipe: <In, Out>(x: In, ...fns: Function[]) => Out;
export declare const pfCompose: (...fns: Function[]) => (x: any) => any;
export declare const compose: <In, Out>(...fns: Function[]) => (x: In) => Out;
export declare const dirCompose: <In, Out>(x: In, ...fns: Function[]) => Out;
declare type MapCBFn<T, U> = (value: T, index: number, array: T[]) => U;
export declare const dirMap: <T, U>(fn: MapCBFn<T, U>, x: T[]) => U[];
/**
 * Curried Function.
 *
 * TS Typing: map: <T, U>(fn: MapCBFn<T, U>) => (x: T[]) => U[]
 *
 * First Execution: Takes a Map Callback Fn as its first argument.
 *
 * Second Execution: Takes a value to be mapped over.
 */
export declare const map: <T, U>(fn: MapCBFn<T, U>) => (x: T[]) => U[];
export declare const pfMap: (fn: Function) => (x: any) => any;
export declare const dirFilter: <T>(fn: FilterCBFn<T>, x: T[]) => T[];
export declare const filter: <T>(fn: FilterCBFn<T>) => (x: T[]) => T[];
export declare const pfFilter: (fn: Function) => (x: any) => any;
export declare function reduce<T>(callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): (x: T[]) => T;
export declare function reduce<T>(callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): (x: T[]) => T;
export declare function reduce<T, U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): (x: T[]) => U;
export declare const pfReduce: (fn: any, initialValue?: any) => (x: any[]) => any;
export declare function dirReduce<T>(x: T[], callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
export declare function dirReduce<T>(x: T[], callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
export declare function dirReduce<T, U>(x: T[], callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
export declare const dataEquals: (x: any, y: any) => boolean;
export declare const copyValues: <T>(x: T) => T;
interface AnyIterable {
    [key: string]: any;
}
export declare const sortIterable: <T extends AnyIterable>(obj: T) => T;
export declare const deepCopy: <T extends AnyIterable>(obj: T) => T;
export declare const equals: (x: any, y: any) => boolean;
declare type FilterCBFn<T> = (value: T, index?: number, array?: T[]) => boolean;
export declare const evaluate: <T>(fns: FilterCBFn<T>[]) => (x: T) => any;
export declare const compoundFilter: <T>(...fns: FilterCBFn<T>[]) => (x: T[]) => T[];
export {};
//# sourceMappingURL=index.d.ts.map