# get-range [![Build Status](https://travis-ci.org/sindresorhus/get-range.svg?branch=master)](https://travis-ci.org/sindresorhus/get-range)

> Lazy number range generator

Useful for iteration.

Similar to the Python 3 [`range`](https://docs.python.org/3/library/stdtypes.html#typesseq-range) function.


## Install

```
$ npm install get-range
```


## Usage

```js
const getRange = require('get-range');

for (const i of getRange(4)) {
	console.log(i);
}
//=> 0
//=> 1
//=> 2
//=> 3

const r = getRange(0, 4, 2);
r.next().value;
//=> 0
r.next().value;
//=> 2

console.log(...getRange(0, -5, -1));
//=> [0, -1, -2, -3, -4]
```

Can replace for-loops in many cases:

```js
// Before
for (let i = 0; i < 5; i++) {}

// After
for (const i of getRange(5)) {}
```


## API

### getRange(stop)
### getRange(start, stop, [step])

Returns a [`Generator` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) *(which is both an `Iterable` and `Iterator`)*.

#### start

Type: `integer`<br>
Default: `0`

Start from this number.

#### stop

Type: `integer`

Stop after this many numbers.

#### step

Type: `integer`<br>
Default: `1`<br>
Minimum: `1`

Distance between numbers.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
