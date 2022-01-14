import {SLIDE} from '../supportedCommands.js';

const processor =
	config =>
	({args}) => {
		if (!Array.isArray(args) || args.length !== 4)
			throw new Error(`Incorrect slide arguments`);

		const values = args.map(cord => {
			const value = Number.parseInt(cord);
			if (Number.isNaN(value))
				throw new Error(`Incorrect slide coordinate value "${cord}"`);
			return value.toString(10);
		});

		return `${SLIDE} ${values.join(' ')}`;
	};

export default processor;
