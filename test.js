import test from 'ava';
import getRange from './index.js';

/** @param {import('.').Range} range */
const get = range => [...getRange(range)];

test('main', t => {
	t.deepEqual(get({end: 0}), []);
	t.deepEqual(get({end: 1}), [0]);
	t.deepEqual(get({end: 2}), [0, 1]);
	t.deepEqual(get({end: 5}), [0, 1, 2, 3, 4]);
	t.deepEqual(get({end: -2}), []);

	t.deepEqual(get({start: 0, end: 1}), [0]);
	t.deepEqual(get({start: 0, end: 2}), [0, 1]);
	t.deepEqual(get({start: 1, end: 2}), [1]);
	t.deepEqual(get({start: 1, end: 5}), [1, 2, 3, 4]);
	t.deepEqual(get({start: -2, end: 2}), [-2, -1, 0, 1]);

	t.deepEqual(get({start: 0, end: 2, step: 2}), [0]);
	t.deepEqual(get({start: 0, end: 3, step: 2}), [0, 2]);
	t.deepEqual(get({start: 0, end: 4, step: 2}), [0, 2]);
	t.deepEqual(get({start: 0, end: 6, step: 2}), [0, 2, 4]);

	t.deepEqual(get({start: 0, end: -1, step: -1}), [0]);
	t.deepEqual(get({start: 0, end: -2, step: -1}), [0, -1]);
	t.deepEqual(get({start: -1, end: -2, step: -1}), [-1]);
	t.deepEqual(get({start: -1, end: -5, step: -1}), [-1, -2, -3, -4]);
	t.deepEqual(get({start: 2, end: -2, step: -1}), [2, 1, 0, -1]);

	t.deepEqual(get({start: 0, end: -2, step: -2}), [0]);
	t.deepEqual(get({start: 0, end: -3, step: -2}), [0, -2]);
	t.deepEqual(get({start: 0, end: -4, step: -2}), [0, -2]);
	t.deepEqual(get({start: 0, end: -6, step: -2}), [0, -2, -4]);

	t.deepEqual(get({end: 0, inclusive: true}), [0]);
	t.deepEqual(get({end: 1, inclusive: true}), [0, 1]);
	t.deepEqual(get({end: -2, inclusive: true}), []);
	t.deepEqual(get({start: 1, end: 5, inclusive: true}), [1, 2, 3, 4, 5]);
	t.deepEqual(get({start: 0, end: 2, step: 2, inclusive: true}), [0, 2]);
	t.deepEqual(get({start: 0, end: 3, step: 2, inclusive: true}), [0, 2]);
	t.deepEqual(get({start: 0, end: -6, step: -2, inclusive: true}), [0, -2, -4, -6]);
});

test('generator', t => {
	const range = getRange({start: 0, end: 4, step: 2});
	t.is(range.next().value, 0);
	t.is(range.next().value, 2);
});
