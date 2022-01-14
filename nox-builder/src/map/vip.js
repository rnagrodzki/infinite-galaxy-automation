import {CLICK} from '../supportedCommands.js';

export default {
	vip: {
		description: 'Open VIP menu',
		actions: [
			{
				command: CLICK,
				arguments: [90, 160],
				delay: 1500,
				description: 'Open VIP menu',
			},
		],
	},
	vipFreeChest: {
		description: 'Get daily VIP rewards chest',
		actions: [
			{
				command: CLICK,
				arguments: [1600, 570],
				delay: 750,
				description: 'Click daily VIP rewards chest',
			},
			{
				command: CLICK,
				arguments: [1600, 570],
				delay: 500,
				description: 'Stop rewards animation',
			},
			{
				command: CLICK,
				arguments: [1600, 570],
				delay: 500,
				description: 'Close rewards overlay',
			},
		],
	},
	vipPointsChest: {
		description: 'Get daily VIP points chest',
		actions: [
			{
				command: CLICK,
				arguments: [1720, 240],
				delay: 750,
				description: 'Click daily VIP points chest',
			},
			{
				command: CLICK,
				arguments: [1720, 240],
				delay: 500,
				description: 'Stop rewards animation',
			},
			{
				command: CLICK,
				arguments: [1720, 240],
				delay: 500,
				description: 'Close rewards overlay',
			},
		],
	},
	vipClose: {
		description: 'Close VIP menu',
		actions: [
			{
				command: CLICK,
				arguments: [1840, 100],
				delay: 1000,
				description: 'Close VIP menu',
			},
		],
	},
};
