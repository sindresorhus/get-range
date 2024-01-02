export type Range = {
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

	/**
	Whether or not to include the end value in the range.

	@default false
	@example
	```
	console.log(...getRange({start: 3, end: 5, inclusive: true}));
	//=> [3, 4, 5]
	```
	*/
	readonly inclusive?: boolean;
};

/**
Lazy number range generator.

@example
```
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
*/
export default function getRange(range: Range): IterableIterator<number>;
