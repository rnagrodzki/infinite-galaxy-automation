import commandLineUsage from 'command-line-usage';
import map from './map/index.js';
import storiesReader from './readers/storiesReader.js';
import {STORIES_DIR} from './consts/index.js';

const general = [
	{
		header: 'Nox Macros Builder',
		content: 'Set of tools for easy macros generation for Infinite Galaxy',
	},
	{
		header: 'Options',
		optionList: [
			{
				name: 'commands',
				alias: 'c',
				type: Boolean,
				description: 'Prints list of available macro commands.',
			},
			{
				name: 'stories',
				alias: 's',
				type: Boolean,
				description: 'Prints list of available stories.',
			},
			{
				name: 'delay',
				alias: 'd',
				type: Number,
				description:
					'Add extra value to all delays defined in commands.',
			},
			{
				name: 'help',
				alias: 'h',
				type: Boolean,
				description: 'Print this usage guide.',
			},
		],
	},
];

const generateCommandsListItem = commandsMap => key => {
	const {description} = commandsMap[key];
	return {
		desc: key,
		example: description,
	};
};

const generateCommandsList = allCommands => {
	return [
		{
			header: 'Available commands',
			content: Object.keys(allCommands)
				.sort()
				.map(generateCommandsListItem(allCommands)),
		},
	];
};

const generateScenariosList = () => {
	return [
		{
			header: 'Available stories',
			content: storiesReader(STORIES_DIR).map(({content}) => {
				const {title, comment, keys} = content;
				return {
					header: `${title} (${keys})`,
					content: comment,
				};
			}),
		},
	];
};

const captureUserCommands = ({help, commands, stories}) => {
	console.log(commandLineUsage(general));
	if (help) {
		return true;
	} else if (commands) {
		console.log(commandLineUsage(generateCommandsList(map)));
		return true;
	} else if (stories) {
		console.log(commandLineUsage(generateScenariosList()));
		return true;
	}

	return false;
};

export default captureUserCommands;
