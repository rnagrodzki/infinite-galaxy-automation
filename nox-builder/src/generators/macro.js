import map from '../map/index.js';
import {
	MACROS_DIR,
	MAX_SCREEN_HEIGHT,
	MAX_SCREEN_WIDTH,
} from '../consts/index.js';
import fs from 'fs';
import yaml from 'js-yaml';

const parseCommandDefinition = def => {
	if (!def) throw new Error('Command definition can not be empty');

	const parts = def.split(';');
	const name = parts.shift();
	return {
		name,
		parameters: parts,
	};
};

const processCommand = ({name: commandName, parameters}) => {
	const commands = map[commandName];
	if (!Array.isArray(commands))
		throw new Error(
			`Command "${commandName}" definition has to be an array`
		);

	return commands
		.map(({command, arguments: params, delay, description}) => {
			const mergedParams = (
				params ? params.concat(parameters) : parameters
			).filter(item => item !== undefined);
			return [
				`# action: ${description}`,
				`${command} ${mergedParams.join(' ')}`,
				...(delay ? [`delay ${delay}`] : []),
			];
		})
		.flat();
};

const generateMacro = ({name, story}) => {
	const {title, comment, keys, commands} = story;
	if (!Array.isArray(commands)) {
		console.log(story);
		throw new Error(`${name}: Commands have to be an array`);
	}
	const parsedCommands = commands.map(parseCommandDefinition);
	parsedCommands.forEach(({name: commandName}) => {
		if (!map[commandName])
			throw new Error(`${name}: Not supported command "${commandName}"`);
	});
	const filePath = `${MACROS_DIR}/${name}.txt`;
	if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

	const buffer = [
		`size ${MAX_SCREEN_WIDTH} ${MAX_SCREEN_HEIGHT}`,
		`# ---- ${title} ----`,
		`# description: ${comment}`,
	].concat(parsedCommands.map(processCommand).flat());

	return {name, content: buffer, path: filePath, keys};
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
