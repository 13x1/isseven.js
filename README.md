# isseven.js

<p align="center">
    <a href="#unit-tests"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="build: passing"></a>
    <a href="#coverage-report-from-v8"><img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="coverage: 100%"></a>
    <a href="https://opensource.org/license/mit/"><img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="license: MIT"></a>
    <a href="https://github.com/13x1/isseven.js"><img src="https://img.shields.io/badge/github-13x1/isseven.js-blue?logo=github" alt="github: 13x1/isseven.js"></a>
    <a href="https://npm.im/isseven.js"><img src="https://img.shields.io/badge/npm-isseven.js-red?logo=npm" alt="npm: isseven.js"></a>
<br>
    <img src="https://img.shields.io/badge/ecmascript-supported-brightgreen" alt="ecmascript: supported">
    <img src="https://img.shields.io/badge/commonjs-supported-brightgreen" alt="commonjs: supported">
    <a href="#npm-audit-report"><img src="https://img.shields.io/badge/vulnerabilities-0-brightgreen" alt="vulnerabilities: 0"></a>
    <a href="#dependency-tree"><img src="https://img.shields.io/badge/dependencies-0-brightgreen" alt="dependencies: 0"></a>
</p>

A small library to check whether a given number iss even or not.

## Features

-   [MIT licensed](https://opensource.org/license/mit/)
-   Unit testing with [Vitest](https://vitest.dev/)
-   Linting with [ESLint](https://eslint.org/)
-   Formatting with [Prettier](https://prettier.io/)
-   Building with [Vite](https://vitejs.dev/)
-   Full [Typescript](https://typescriptlang.org) support
-   ECMAScript & CommonJS support
-   [100% passing tests](#unit-tests)
-   [100% code coverage](#coverage-report-from-v8)
-   [0 vulnerabilities](#npm-audit-report)
-   [0 dependencies](#dependency-tree)
-   0 typos
-   0 purpose

Initialized with [ts-template](https://github.com/13x1/ts-template).

## Usage

### Install with npm:

```bash
npm i isseven.js
// or long form
npm install isseven.js
// or as a dev dependency
npm i -D isseven.js
// or long form
npm install -D isseven.js
// or in longer form
npm i --save-dev isseven.js
// or longest form
npm install --save-dev isseven.js
```

### Importing/using:

```js
// ESM import:
import { isseven } from 'isseven.js';
let res = isseven(1);
// or ESM named import:
import isseven from 'isseven.js';
let res = isseven(1);
// or CJS default import:
let isseven = require('isseven.js').default;
let res = isseven(1);
// or CJS property import:
let isseven = require('isseven.js').isseven;
let res = isseven(1);
// or CJS destructuring import:
let { isseven } = require('isseven.js');
let res = isseven(1);
// or CJS iterator destructure import:
let [isseven] = require('isseven.js').isseven;
let res = isseven(1);
// or CJS async iterator import:
for await (let isseven of require('isseven.js').isseven) {
    let res = isseven(1);
}
// or ESM import() default import:
let isseven = (await import('isseven.js')).default;
let res = isseven(1);
// or ESM import() property import:
let isseven = (await import('isseven.js')).isseven;
let res = isseven(1);
// or ESM import() destructuring import:
let { isseven } = await import('isseven.js');
let res = isseven(1);
// or ESM import() iterator destructure import:
let [isseven] = (await import('isseven.js')).isseven;
let res = isseven(1);
// or ESM import() async iterator import:
for await (let isseven of (await import('isseven.js')).isseven) {
    let res = isseven(1);
}
```

### Arguments for `isseven`:

-   `n`: `number | string | undefined | null | bigint` - The number to check

### Supported inputs for `n`:

-   Positive integers
-   Positive floats
-   Positive infinity
-   Negative integers
-   Negative floats
-   Negative infinity
-   NaN
-   0
-   Negative 0
-   0 as a float
-   Negative 0 as a float
-   Positive integers as a string
-   Positive floats as a string
-   Positive infinity as a string
-   Negative integers as a string
-   Negative floats as a string
-   Negative infinity as a string
-   NaN as a string
-   0 as a string
-   Negative 0 as a string
-   0 as a float as a string
-   Negative 0 as a float as a string
-   Positive integers as a BigInt
-   Positive infinity as a BigInt
-   Negative integers as a BigInt
-   Negative infinity as a BigInt
-   0 as a BigInt
-   Negative 0 as a BigInt
-   Null/Undefined
-   Booleans (also as a string)

### Return value:

-   `boolean` - Whether the number iss even. Uses a smart algorithm and the fastest operators to check if the number iss even.

## Building

```bash
npm i
npm run build
npm run test -- --run --coverage
```

## Unit tests

See [src/tests/main.test.ts](https://github.com/13x1/isseven.js/blob/main/src/tests/main.test.ts) for the test source code.

-   ✅ src/tests/main.test.ts (52)
    -   ✅ imports to work (13)
        -   ✅ should work as an ESM import
        -   ✅ should work as an ESM named import
        -   ✅ should work as a CJS default import
        -   ✅ should work as a CJS property import
        -   ✅ should work as a CJS destructuring import
        -   ✅ should work as a CJS iterator destructure import
        -   ✅ should work as a CJS async iterator import
        -   ✅ should work as an ESM import() default import
        -   ✅ should work as an ESM import() property import
        -   ✅ should work as an ESM import() destructuring import
        -   ✅ should work as an ESM import() iterator destructure import
        -   ✅ should work as an ESM import() async iterator import
        -   ✅ should let both iterators run exactly once
    -   ✅ isseven to behave properly (30)
        -   ✅ should work with positive integers
        -   ✅ should work with positive floats
        -   ✅ should work with positive infinity
        -   ✅ should work with negative integers
        -   ✅ should work with negative floats
        -   ✅ should work with negative infinity
        -   ✅ should work with NaN
        -   ✅ should work with 0
        -   ✅ should work with negative 0
        -   ✅ should work with 0 as a float
        -   ✅ should work with negative 0 as a float
        -   ✅ should work with positive integers as a string
        -   ✅ should work with positive floats as a string
        -   ✅ should work with positive infinity as a string
        -   ✅ should work with negative integers as a string
        -   ✅ should work with negative floats as a string
        -   ✅ should work with negative infinity as a string
        -   ✅ should work with NaN as a string
        -   ✅ should work with 0 as a string
        -   ✅ should work with negative 0 as a string
        -   ✅ should work with 0 as a float as a string
        -   ✅ should work with negative 0 as a float as a string
        -   ✅ should work with positive integers as a BigInt
        -   ✅ should work with positive infinity as a BigInt
        -   ✅ should work with negative integers as a BigInt
        -   ✅ should work with negative infinity as a BigInt
        -   ✅ should work with 0 as a BigInt
        -   ✅ should work with negative 0 as a BigInt
        -   ✅ should work with null
        -   ✅ should work with undefined
    -   ✅ throwing on invalid input (1)
        -   ✅ should not throw
    -   ✅ casting types (6)
        -   ✅ should work with strings
        -   ✅ should work with arrays
        -   ✅ should work with objects
        -   ✅ should work with booleans
        -   ✅ should work with booleans as strings
        -   ✅ should work with functions
    -   ✅ side effects (2)
        -   ✅ should do nothing when called
        -   ✅ should do nothing when not called

| vitest v0.33.0 | isseven.js |
| --- | --- |
| Test Files | 1 passed (1) |
| Tests | 52 passed (52) |
| Duration | 723ms (transform 100ms, setup 1ms, collect 87ms, tests 28ms, environment 0ms, prepare 199ms) |

## Coverage report from v8

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------- | ------- | -------- | ------- | ------- | ----------------- |
| All files | 100     | 100      | 100     | 100     |                   |
| main.ts   | 100     | 100      | 100     | 100     |                   |

## npm audit report

```bash
$ npm audit
found 0 vulnerabilities
```

## Dependency tree

```bash
$ npm list --omit=dev -depth 0
isseven.js@1.0.0 isseven
`-- (empty)
```

## License

[MIT](https://opensource.org/license/mit/)
