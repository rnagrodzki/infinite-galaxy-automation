import {DELAY} from '../supportedCommands.js';

const MINIMUM_ALLOWED_DELAY = 10;

const processor =
	config =>
	({args}) => {
		// global delay modificator
		const {delay} = config;
		// action argument
		const argDelay = Number.parseInt(args[0]) ?? 0;
		const calculated = argDelay + Number.parseInt(delay);
		return `${DELAY} ${Math.max(calculated, MINIMUM_ALLOWED_DELAY)}`;
	};

export default processor;
