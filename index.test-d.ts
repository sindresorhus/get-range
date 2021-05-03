import {expectType} from 'tsd';
import getRange from './index.js';

expectType<IterableIterator<number>>(getRange({end: -5}));
expectType<IterableIterator<number>>(getRange({start: 0, end: -5}));
expectType<IterableIterator<number>>(getRange({start: 0, end: -5, step: -1}));

for (const index of getRange({end: 4})) {
	console.log(index);
}
