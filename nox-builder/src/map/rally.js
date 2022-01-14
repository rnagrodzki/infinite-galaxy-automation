import {CLICK} from '../supportedCommands.js';

export default {
	rallyJoinOrWithdraw: {
		description: 'Press in window rally join/withdraw',
		actions: [
			{
				command: CLICK,
				arguments: [300, 950],
				delay: 500,
				description: 'Join or withdraw from rally',
			},
		],
	},
	rallyClose: {
		description: 'Close rally window',
		actions: [
			{
				command: CLICK,
				arguments: [1840, 100],
				delay: 100,
				description: 'Close rally window',
			},
		],
	},
};
