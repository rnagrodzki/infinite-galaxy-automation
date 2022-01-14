import {LOOP} from '../supportedCommands.js';

const processor =
	config =>
	({args}) => {
		if (Number.isNaN(args) || args <= 0)
			throw new Error(`Loop argument need to be a positive number.`);

		return `${LOOP} ${args}`;
	};

export default processor;
