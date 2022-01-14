import map from '../map/index.js';
import {DELAY} from '../supportedCommands.js';
import {MACROS_DIR, MAX_SCREEN_HEIGHT, MAX_SCREEN_WIDTH} from '../consts.js';
import storiesReader from '../readers/storiesReader.js';
import processorResolver from '../processors/index.js';

const parseCommandDefinition = def => {
	if (!def) throw new Error('Command definition can not be empty');

	const parts = def.split(';');
	const name = parts.shift();
	return {
		name,
		parameters: parts,
	};
};

const processCommand =
	options =>
	({name: commandName, parameters}) => {
		const {actions} = map[commandName];
		if (!Array.isArray(actions))
			throw new Error(
				`Command "${commandName}" definition has to be an array`
			);

		return actions
			.map(({command, arguments: params, delay, description}) => {
				const mergedParams = (
					params ? params.concat(parameters) : parameters
				).filter(item => item !== undefined);
				const processor = processorResolver(command)(options);
				const delayProcessor = processorResolver(DELAY)(options);
				return [
					`# action: ${description}`,
					processor({args: mergedParams}),
					...(delay ? [delayProcessor({args: [delay]})] : []),
				];
			})
			.flat();
	};

const generateMacro = ({name, story, options}) => {
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

	const buffer = [
		`size ${MAX_SCREEN_WIDTH} ${MAX_SCREEN_HEIGHT}`,
		`# ---- ${title} ----`,
		`# description: ${comment}`,
	].concat(parsedCommands.map(processCommand(options)).flat());

	return {name, content: buffer, path: filePath, keys};
};

const process = (directory, options) => {
	return storiesReader(directory)
		.map(({name, content}) => {
			return content
				? generateMacro({name, story: content, options})
				: null;
		})
		.filter(item => !!item);
};

export default process;
