#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import {STORIES_DIR} from '../nox-builder/src/consts.js';
import macroGenerator from '../nox-builder/src/generators/macro.js';
import noxKeyboardReader from '../nox-builder/src/readers/noxKeyboardReader.js';
import noxKeyboardGenerator from '../nox-builder/src/generators/noxKeyboard.js';
import noxKeyboardWriter from '../nox-builder/src/writers/noxKeyboardWriter.js';

const optionDefinitions = [
	{
		name: 'keyboard',
		alias: 'k',
		type: String,
		description: 'Path to your Nox keyboard definition.',
	},
	{
		name: 'stories',
		alias: 's',
		type: String,
		description:
			'Path to your custom stories. If not provided default stories will be process.',
	},
];

const info = [
	{
		header: 'Infinity Galaxy Nox Keyboard Updater',
		content:
			'Tool for fast & easy updating your keyboard macros.\n\rIf any story match your existing script shortcut, it will replace it with newest version.',
	},
	{
		header: 'Options',
		optionList: optionDefinitions,
	},
];

const main = () => {
	console.log(commandLineUsage(info));
	const options = commandLineArgs(optionDefinitions);

	console.log(`---- PREPARING DATA ----`);
	const keyboardPath = path.resolve(options.keyboard);
	console.log(`> Processing keyboard: ${keyboardPath}`);
	try {
		fs.accessSync(keyboardPath, fs.constants.R_OK | fs.constants.W_OK);
	} catch (error) {
		console.error(
			`Keyboard file doesn't exists or process doesn't have read/write access to file.`
		);
		error.description && console.error(error.description);
		process.exit(1);
	}

	const storiesPath = path.resolve(options.stories || STORIES_DIR);
	console.log(`> Processing stories: ${storiesPath}`);
	try {
		fs.accessSync(storiesPath, fs.constants.R_OK);
	} catch (error) {
		console.error(
			`Stories directory doesn't exists or process doesn't have read/write access to file.`
		);
		error.description && console.error(error.description);
		process.exit(1);
	}

	console.log(`> Creating backup for ${keyboardPath}`);
	fs.copyFileSync(keyboardPath, `${keyboardPath}.backup`);
	console.log(`---- UPDATING MACROS ----`);
	const noxKeyboard = noxKeyboardReader(keyboardPath);
	const macros = macroGenerator(storiesPath);
	const newNoxKeyboard = noxKeyboardGenerator({macros, content: noxKeyboard});
	noxKeyboardWriter({keyboard: newNoxKeyboard, path: keyboardPath});
	console.log(`---- MACROS UPDATED ----`);

	process.exit(0);
};

main();
