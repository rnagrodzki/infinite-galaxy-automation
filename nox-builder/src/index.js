import fs from 'fs';
import commandLineArgs from 'command-line-args';
import captureUserCommands from './help.js';
import {
	STORIES_DIR,
	MACROS_DIR,
	BUILD_DIR,
	KEYMAP_DIR,
} from './consts/index.js';
import macroGenerator from './generators/macro.js';
import saveFiles from './saveFiles.js';
import generateKeymap from './generators/keymap.js';

const optionDefinitions = [
	{name: 'help', alias: 'h', type: Boolean},
	{name: 'commands', alias: 'c', type: Boolean},
	{name: 'stories', alias: 's', type: Boolean},
	{name: 'delay', alias: 'd', type: Number},
];

const createIfNotExist = dir => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
};

const deleteDirectory = dir => {
	if (fs.existsSync(dir)) {
		fs.rmSync(dir, {recursive: true});
	}
};

const main = async () => {
	const options = commandLineArgs(optionDefinitions);

	if (captureUserCommands(options)) return;

	deleteDirectory(BUILD_DIR);
	createIfNotExist(BUILD_DIR);
	createIfNotExist(MACROS_DIR);
	createIfNotExist(KEYMAP_DIR);

	const macros = macroGenerator(STORIES_DIR, options);
	const keymap = generateKeymap(macros, KEYMAP_DIR);
	const files = macros.concat(keymap);
	saveFiles(files);
};

main();
