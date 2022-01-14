import {CLICK, DELAY, LOOP, SLIDE} from '../supportedCommands.js';
import clickProcessor from './clickProcessor.js';
import delayProcessor from './delayProcessor.js';
import loopProcessor from './loopProcessor.js';
import slideProcessor from './slideProcessor.js';

const processors = new Map();
processors.set(CLICK, clickProcessor);
processors.set(DELAY, delayProcessor);
processors.set(LOOP, loopProcessor);
processors.set(SLIDE, slideProcessor);

const resolver = command => {
	if (processors.has(command)) return processors.get(command);
	throw new Error(`Processor for command "${command}" not found.`);
};

export default resolver;
