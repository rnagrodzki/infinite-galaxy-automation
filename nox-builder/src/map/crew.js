import {CLICK} from '../supportedCommands.js';

const BACK_COMMAND = {
	command: CLICK,
	arguments: [200, 45],
	delay: 1500,
	description: 'Click back button',
};

export default {
	crew: {
		description: 'Open Crew main menu',
		actions: [
			{
				command: CLICK,
				arguments: [450, 610],
				delay: 1500,
				description: 'Open crew menu',
			},
		],
	},
	crewRecruitment: {
		description: 'Recruit crew member 1 time & back to crew menu',
		actions: [
			{
				command: CLICK,
				arguments: [930, 470],
				delay: 1500,
				description: 'Open recruitment menu',
			},
			{
				command: CLICK,
				arguments: [550, 550],
				delay: 1500,
				description: 'Recruit 1 time',
			},
			{
				command: CLICK,
				arguments: [960, 950],
				delay: 1000,
				description: 'Skip animation in case you are lucky',
			},
			{
				command: CLICK,
				arguments: [960, 950],
				delay: 1000,
				description: 'Accept cards set in case you are lucky',
			},
			{
				command: CLICK,
				arguments: [580, 950],
				delay: 1500,
				description: 'Accept cards',
			},
			BACK_COMMAND,
		],
	},
	crewExperience: {
		description:
			'Add extra XP to first crew member on list & back to crew menu',
		actions: [
			{
				command: CLICK,
				arguments: [290, 670],
				delay: 1500,
				description: 'Open crew overview',
			},
			{
				command: CLICK,
				arguments: [450, 610],
				delay: 1500,
				description: 'Open crew overview',
			},
			{
				command: CLICK,
				arguments: [1840, 270],
				delay: 750,
				description: 'Click add experience button',
			},
			{
				command: CLICK,
				arguments: [1360, 520],
				delay: 750,
				description: 'Use first experience card on list',
			},
			{
				command: CLICK,
				arguments: [1480, 190],
				delay: 750,
				description: 'Close window with experience cards',
			},
			BACK_COMMAND,
		],
	},
	crewClose: {
		description: 'Close crew menu',
		actions: [BACK_COMMAND],
	},
};
