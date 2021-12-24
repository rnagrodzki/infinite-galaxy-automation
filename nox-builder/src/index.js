import fs from 'fs';
import yaml from 'js-yaml';
import {TEMPLATES_DIR, MACROS_DIR, BUILD_DIR} from './consts/index.js';
import map from './map/index.js';

const createIfNotExist = dir => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
};

const processCommand = commandName => {
	const commands = map[commandName];
	if (!Array.isArray(commands))
		throw new Error(
			`Command "${commandName}" definition has to be an array`
		);

	return commands.map(({command, coordinates, delay, description}) => {
		const lines = [
			`# action: ${description}`,
			`${command} ${coordinates.join(' ')}`,
			`delay ${delay}`,
		];
		return lines.join('\r\n');
	});
};

const generateMacro = ({name, story}) => {
	const {title, comment, keys, commands} = story;
	if (!Array.isArray(commands)) {
		console.log(story);
		throw new Error(`${name}: Commands have to be an array`);
	}
	commands.forEach(command => {
		if (!map[command])
			throw new Error(`${name}: Not supported command "${command}"`);
	});
	const filePath = `${MACROS_DIR}/${name}.txt`;
	if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

	const buffer = [`# ---- ${title} ----`, `# description: ${comment}`].concat(
		commands.map(processCommand).flat()
	);

	fs.writeFileSync(filePath, buffer.join('\r\n'), {encoding: 'utf-8'});
};

const main = async () => {
	createIfNotExist(BUILD_DIR);
	createIfNotExist(MACROS_DIR);

	fs.readdir(TEMPLATES_DIR, (err, files) => {
		files &&
			files.forEach(file => {
				const story = yaml.load(
					fs.readFileSync(`${TEMPLATES_DIR}/${file}`, 'utf-8')
				);
				const name = file.split('.')[0];
				if (story) {
					generateMacro({name, story});
				}
			});
	});
};

main();
