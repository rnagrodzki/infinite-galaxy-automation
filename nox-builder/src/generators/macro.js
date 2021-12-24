import map from '../map/index.js';
import {
	MACROS_DIR,
	MAX_SCREEN_HEIGHT,
	MAX_SCREEN_WIDTH,
} from '../consts/index.js';
import fs from 'fs';
import yaml from 'js-yaml';

const processCommand = commandName => {
	const commands = map[commandName];
	if (!Array.isArray(commands))
		throw new Error(
			`Command "${commandName}" definition has to be an array`
		);

	return commands.map(({command, arguments: params, delay, description}) => {
		const lines = [
			`# action: ${description}`,
			...(params ? [`${command} ${params.join(' ')}`] : [command]),
			...(delay ? [`delay ${delay}`] : []),
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

	const buffer = [
		`size ${MAX_SCREEN_WIDTH} ${MAX_SCREEN_HEIGHT}`,
		`# ---- ${title} ----`,
		`# description: ${comment}`,
	].concat(commands.map(processCommand).flat());

	return {name, content: buffer.join('\r\n'), path: filePath};
};

const process = directory => {
	const files = fs.readdirSync(directory);
	return files
		.map(file => {
			const story = yaml.load(
				fs.readFileSync(`${directory}/${file}`, 'utf-8')
			);
			const name = file.split('.')[0];
			return story ? generateMacro({name, story}) : null;
		})
		.filter(item => !!item);
};

export default process;
