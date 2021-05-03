# get-range

> Lazy number range generator

Useful for iteration.

Similar to the Python 3 [`range`](https://docs.python.org/3/library/stdtypes.html#typesseq-range) function.

## Install

```
$ npm install get-range
```

## Usage

```js
import getRange from 'get-range';

for (const index of getRange({end: 4})) {
	console.log(index);
}
//=> 0
//=> 1
//=> 2
//=> 3

const range = getRange({start: 0, end: 4, step: 2});

range.next().value;
//=> 0

range.next().value;
//=> 2

console.log(...getRange({start: 0, end: -5, step: -1}));
//=> [0, -1, -2, -3, -4]
```

It can replace normal for-loops in many cases:

```js
// Before
for (let i = 0; i < 5; i++) {}

// After
for (const index of getRange({end: 5})) {}
```

## API

### getRange(range)

Returns a [`Generator` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) *(which is both an `Iterable` and `Iterator`)*.

#### range

Type: `object`

##### start

Type: `integer`\
Default: `0`

Start of the range.

##### end

Type: `integer`

End of the range.

##### step

Type: `integer`\
Default: `1`\
Minimum: `1`

Distance between numbers.
