# Walrus Tools

Basic tooling for Functional programming using TypeScript. It works around TypeScript typing limitations for functional programming by creating standardized variations of common utilities as a workaround.

## Basics and Caveats

| Prefix | Meaning   | Caveats                                          |
| ------ | --------- | ------------------------------------------------ |
| None   | NA        | Always Curried, Generic \<Input, Output\>        |
| dir    | Direct    | All arguments at once, Generic \<Input, Output\> |
| pf     | Pointfree | Always Curried, Typed using **any**              |

Example:

```typescript
// none
const numArr = [1, 2, 3];
const add2 = (x: number) => x + 2;
const add2ToArr = map<number, number>(add2);
const result = add2ToArr(numArr);

// dir
const numArr = [1, 2, 3];
const add2 = (x: number) => x + 2;
const result = dirMap<number, number>(add2, numArr);

// pf
const numArr = [1, 2, 3];
const add2 = (x: number) => x + 2;
const add2ToArr = pfMap(add2);
const result: number[] = add2ToArr(numArr);
```

## Package Categories

The functions are separated in the following categories:

- Utilities (IMPURE)
- Iterable and Array Creators
- Basic array Transformations
- STRING and DATE Utils
- Getters
- Array Functions
- Object and Array Utilities

## Notes

Readme is a WIP
