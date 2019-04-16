import {expectType} from 'tsd';
import getRange = require('.');

expectType<IterableIterator<number>>(getRange({end: -5}));
expectType<IterableIterator<number>>(getRange({start: 0, end: -5}));
expectType<IterableIterator<number>>(getRange({start: 0, end: -5, step: -1}));

for (const i of getRange({end: 4})) {}
