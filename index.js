'use strict';

const validate = (name, value) => {
	if (!Number.isSafeInteger(value)) {
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

	for (let i = start; i < stop; i += step) {
		yield i;
	}
};
