'use strict';

const validate = (name, value) => {
	if (!Number.isSafeInteger(value)) {
		throw new TypeError(`Expected \`${name}\` to be a safe integer`);
	}
};

module.exports = function * ({start = 0, end, step = 1}) {
	if (step === 0) {
		throw new TypeError('The `step` parameter cannot be zero');
	}

	validate('start', start);
	validate('end', end);
	validate('step', step);

	for (let i = start; i < end; i += step) {
		yield i;
	}
};
