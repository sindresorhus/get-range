declare namespace getRange {
	interface Range {
		/**
		Start of the range.

		@default 0
		*/
		readonly start?: number;

		/**
		End of the range.
		*/
		readonly end: number;

		/**
		Distance between numbers.

		Minimum: `1`.

		@default 1
		*/
		readonly step?: number;
	}
}

/**
Lazy number range generator.

@example
```
import getRange = require('get-range');

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
*/
declare function getRange(range: getRange.Range): IterableIterator<number>;

export = getRange;
