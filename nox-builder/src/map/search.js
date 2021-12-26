export default {
	search: {
		description: 'Open search window',
		actions: [
			{
				command: 'click',
				arguments: [1620, 340],
				delay: 1000,
				description: 'Open search window',
			},
		],
	},
	searchPirates: {
		description: 'Switch to pirates tab in search window',
		actions: [
			{
				command: 'click',
				arguments: [460, 270],
				delay: 750,
				description: 'Open pirates search tab',
			},
		],
	},
	searchPlasma: {
		description: 'Switch to plasma tab in search window',
		actions: [
			{
				command: 'click',
				arguments: [460, 800],
				delay: 750,
				description: 'Open plasma search tab',
			},
		],
	},
	searchNickel: {
		description: 'Switch to nickel tab in search window',
		actions: [
			{
				command: 'click',
				arguments: [460, 690],
				delay: 750,
				description: 'Open nickel search tab',
			},
		],
	},
	searchLatestPirate: {
		description: 'Select latest killed pirates',
		actions: [
			{
				command: 'click',
				arguments: [1560, 680],
				delay: 1500,
				description: 'Select latest killed pirates',
			},
		],
	},
	searchResourceLvl4: {
		description: 'Select resource lvl 4',
		actions: [
			{
				command: 'click',
				arguments: [1560, 480],
				delay: 1500,
				description: 'Select resource lvl 4',
			},
		],
	},
};
