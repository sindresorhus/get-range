const validate = (name, value) => {
	if (!Number.isSafeInteger(value)) {
		throw new TypeError(`Expected \`${name}\` to be a safe integer.`);
	}
};

const lt = (left, right) => left < right;
const gt = (left, right) => left > right;
const lte = (left, right) => left <= right;
const gte = (left, right) => left >= right;

export default function * getRange({start = 0, end, step = 1, inclusive = false}) {
	if (step === 0) {
		throw new TypeError('The `step` option cannot be zero.');
	}

	validate('start', start);
	validate('end', end);
	validate('step', step);

	const compareExclusive = step < 0 ? gt : lt;
	const compareInclusive = step < 0 ? gte : lte;
	const compare = inclusive ? compareInclusive : compareExclusive;

	for (let index = start; compare(index, end); index += step) {
		yield index;
	}
}
