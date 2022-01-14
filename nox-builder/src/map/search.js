import {CLICK} from '../supportedCommands.js';

const CONFIRM_SEARCH_DELAY = 2000;

export default {
	search: {
		description: 'Open search window',
		actions: [
			{
				command: CLICK,
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
				command: CLICK,
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
				command: CLICK,
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
				command: CLICK,
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
				command: CLICK,
				arguments: [1560, 680],
				delay: CONFIRM_SEARCH_DELAY,
				description: 'Select latest killed pirates',
			},
		],
	},
	searchResourceLvl6: {
		description: 'Select resource lvl 5',
		actions: [
			{
				command: CLICK,
				arguments: [1560, 280],
				delay: CONFIRM_SEARCH_DELAY,
				description: 'Select resource lvl 5',
			},
		],
	},
	searchResourceLvl5: {
		description: 'Select resource lvl 5',
		actions: [
			{
				command: CLICK,
				arguments: [1560, 380],
				delay: CONFIRM_SEARCH_DELAY,
				description: 'Select resource lvl 5',
			},
		],
	},
	searchResourceLvl4: {
		description: 'Select resource lvl 4',
		actions: [
			{
				command: CLICK,
				arguments: [1560, 480],
				delay: CONFIRM_SEARCH_DELAY,
				description: 'Select resource lvl 4',
			},
		],
	},
	searchResourceLvl3: {
		description: 'Select resource lvl 3',
		actions: [
			{
				command: CLICK,
				arguments: [1560, 580],
				delay: CONFIRM_SEARCH_DELAY,
				description: 'Select resource lvl 3',
			},
		],
	},
	searchResourceLvl2: {
		description: 'Select resource lvl 2',
		actions: [
			{
				command: CLICK,
				arguments: [1560, 680],
				delay: CONFIRM_SEARCH_DELAY,
				description: 'Select resource lvl 2',
			},
		],
	},
};
