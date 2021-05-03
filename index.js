const validate = (name, value) => {
	if (!Number.isSafeInteger(value)) {
		throw new TypeError(`Expected \`${name}\` to be a safe integer`);
	}
};

export default function * getRange({start = 0, end, step = 1}) {
	if (step === 0) {
		throw new TypeError('The `step` parameter cannot be zero');
	}

	validate('start', start);
	validate('end', end);
	validate('step', step);

	for (let index = start; index < end; index += step) {
		yield index;
	}
}
