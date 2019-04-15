import {expectType} from 'tsd';
import getRange = require('.');

expectType<IterableIterator<number>>(getRange(-5));
expectType<IterableIterator<number>>(getRange(0, -5));
expectType<IterableIterator<number>>(getRange(0, -5, -1));

for (const i of getRange(4)) {
}
