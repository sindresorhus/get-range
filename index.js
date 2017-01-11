'use strict';

const validate = (name, val) => {
	if (!Number.isSafeInteger(val)) {
		throw new TypeError(`Expected \`${name}\` to be a safe integer`);
	}
};

module.exports = function * (start, stop, step) {
	if (stop === undefined) {
		stop = start;
		start = 0;
	}

	step = typeof step === 'number' ? step : 1;

	if (step === 0) {
		throw new TypeError('The `step` parameter cannot be zero');
	}

	validate('start', start);
	validate('stop', stop);
	validate('step', step);

	let i = start;

	while (step >= 0 ? i < stop : i > stop) {
		yield i;
		i += step;
	}
};
