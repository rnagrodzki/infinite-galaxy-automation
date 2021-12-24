import fs from 'fs';
import {TEMPLATES_DIR, MACROS_DIR, BUILD_DIR} from './consts/index.js';
import macroGenerator from './generators/macro.js';
import saveFiles from './saveFiles.js';

const createIfNotExist = dir => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
};

const main = async () => {
	createIfNotExist(BUILD_DIR);
	createIfNotExist(MACROS_DIR);

	const macros = macroGenerator(TEMPLATES_DIR);
	saveFiles(macros);
};

main();
