import {CLICK} from '../supportedCommands.js';

const processor =
	config =>
	({args}) => {
		if (!Array.isArray(args) && args.length !== 2)
			throw new Error(`Incorrect arguments amount for click action`);

		const values = args.map(cord => {
			const value = Number.parseInt(cord);
			if (Number.isNaN(value))
				throw new Error(`Incorrect click coordinate value "${cord}"`);
			return value.toString(10);
		});
		return `${CLICK} ${values.join(' ')}`;
	};

export default processor;
