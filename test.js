import test from 'ava';
import getRange from '.';

const get = (...args) => [...getRange(...args)];

test('main', t => {
	t.deepEqual(get(0), []);
	t.deepEqual(get(1), [0]);
	t.deepEqual(get(2), [0, 1]);
	t.deepEqual(get(5), [0, 1, 2, 3, 4]);
	t.deepEqual(get(-2), []);

	t.deepEqual(get(0, 1), [0]);
	t.deepEqual(get(0, 2), [0, 1]);
	t.deepEqual(get(1, 2), [1]);
	t.deepEqual(get(1, 5), [1, 2, 3, 4]);
	t.deepEqual(get(-2, 2), [-2, -1, 0, 1]);

	t.deepEqual(get(0, 2, 2), [0]);
	t.deepEqual(get(0, 3, 2), [0, 2]);
	t.deepEqual(get(0, 4, 2), [0, 2]);
	t.deepEqual(get(0, 6, 2), [0, 2, 4]);
});
