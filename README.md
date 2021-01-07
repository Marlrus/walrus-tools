# Walrus Tools

Basic tooling for Functional programming using TypeScript. It works around TypeScript typing limitations for functional programming by creating standardized variations of common utilities.

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

- [Utilities](#Utilities) (IMPURE)
- [Iterable and Array Creators](#iterable-and-array-creators)
- Basic array Transformations
- STRING and DATE Utils
- Getters
- Array Functions
- Object and Array Utilities

## Utilities

[index](#package-categories)

### hmm

Replaces console.log, if left empty it defaults to `ಠ_ಠ`

```typescript
hmm(); // ಠ_ಠ
hmm('hai'); // hai
hmm({ hai: 'hai' }); // { hai: 'hai' }
```

### err

Throws an Error via `throw new Error`, defaults to `¯\_(ツ)_/¯`

```typescript
err();
err('Invalid argument type');
```

### logger

Logger tool to assist in pipe or compose, logs the value and returns the value.

```typescript
const getItemTotal = compose<Item[], number>(getTotal, logger, getItems);
getItemTotal(items); // will log the result of getItems
```

### startT and stopT

Uses console.time and console.timeEnd to measure execution time based on the name argument passed to it.

```typescript
startT('/test route time')
...
stopT('/test route time')
```

### table

Replaces the use of console.table

```typescript
const data = [
  { name: 'chainsword', quantity: 1, value: 100 },
  { name: 'bolter', quantity: 2, value: 200 },
];
table(data);
/*
    ┌─────────┬──────────────┬──────────┬───────┐
    │ (index) │     name     │ quantity │ value │
    ├─────────┼──────────────┼──────────┼───────┤
    │    0    │ 'chainsword' │    1     │  100  │
    │    1    │   'bolter'   │    2     │  200  │
    └─────────┴──────────────┴──────────┴───────┘
*/
table(data, ['name', 'value']);
/*
    ┌─────────┬──────────────┬───────┐
    │ (index) │     name     │ value │
    ├─────────┼──────────────┼───────┤
    │    0    │ 'chainsword' │  100  │
    │    1    │   'bolter'   │  200  │
    └─────────┴──────────────┴───────┘
*/
```

## Iterable and Array Creators

[index](#package-categories)
