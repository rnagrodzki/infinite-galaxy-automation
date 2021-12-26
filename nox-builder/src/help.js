import commandLineUsage from 'command-line-usage';
import map from './map/index.js';

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
	const {description} = commandsMap[key][0];
	return {
		desc: key,
		example: description,
	};
};

const generateCommandsList = allCommands => {
	return [
		{
			header: 'Commands',
			content: Object.keys(allCommands).map(
				generateCommandsListItem(allCommands)
			),
		},
	];
};

const captureUserCommands = ({help, commands}) => {
	console.log(commandLineUsage(general));
	if (help) {
		return true;
	} else if (commands) {
		console.log(
			commandLineUsage(general.concat(generateCommandsList(map)))
		);
		return true;
	}

	return false;
};

export default captureUserCommands;
