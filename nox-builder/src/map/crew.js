export default {
	crew: {
		description: 'Open Crew main menu',
		actions: [
			{
				command: 'click',
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
				command: 'click',
				arguments: [930, 470],
				delay: 1500,
				description: 'Open recruitment menu',
			},
			{
				command: 'click',
				arguments: [550, 550],
				delay: 1500,
				description: 'Recruit 1 time',
			},
			{
				command: 'click',
				arguments: [960, 950],
				delay: 1000,
				description: 'Skip animation in case you are lucky',
			},
			{
				command: 'click',
				arguments: [960, 950],
				delay: 1000,
				description: 'Accept cards set in case you are lucky',
			},
			{
				command: 'click',
				arguments: [580, 950],
				delay: 1500,
				description: 'Accept cards',
			},
		],
	},
	crewExperience: {
		description:
			'Add extra XP to first crew member on list & back to crew menu',
		actions: [
			{
				command: 'click',
				arguments: [290, 670],
				delay: 1500,
				description: 'Open crew overview',
			},
			{
				command: 'click',
				arguments: [450, 610],
				delay: 1500,
				description: 'Open crew overview',
			},
			{
				command: 'click',
				arguments: [1840, 270],
				delay: 750,
				description: 'Click add experience button',
			},
			{
				command: 'click',
				arguments: [1360, 520],
				delay: 750,
				description: 'Use first experience card on list',
			},
			{
				command: 'click',
				arguments: [1480, 190],
				delay: 750,
				description: 'Close window with experience cards',
			},
			{
				command: 'click',
				arguments: [200, 45],
				delay: 1500,
				description: 'Back to main crew view',
			},
		],
	},
	crewClose: {
		description: 'Close crew menu',
		actions: [
			{
				command: 'click',
				arguments: [200, 45],
				delay: 1500,
				description: 'Close crew menu',
			},
		],
	},
};
