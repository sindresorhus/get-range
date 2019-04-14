/**
Lazy number range generator.

@param start - Start from this number. Default: `0`.
@param stop - Stop after this many numbers.
@param step - Distance between numbers. Default: `1`. Minimum: `1`.

@example
```
import getRange = require('get-range');

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
*/
declare function getRange(stop: number): IterableIterator<number>;
declare function getRange(
	start: number,
	stop: number,
	step?: number
): IterableIterator<number>;

export = getRange;
