import {CLICK} from '../supportedCommands.js';

export default {
	messages: {
		description: 'Open messages window',
		actions: [
			{
				command: CLICK,
				arguments: [1310, 950],
				delay: 1000,
				description: 'Open messages window',
			},
		],
	},
	messages2ndTab: {
		description: 'Switch to 2nd tab in messages window',
		actions: [
			{
				command: CLICK,
				arguments: [450, 100],
				delay: 500,
				description: 'Switch to 2nd tab',
			},
		],
	},
	messagesClaimAll: {
		description:
			'Claim all rewards from active messages tab & dispose rewards popup',
		actions: [
			{
				command: CLICK,
				arguments: [160, 980],
				delay: 1000,
				description: 'Claim all rewards from active messages tab',
			},
			{
				command: CLICK,
				arguments: [160, 980],
				delay: 200,
				description: 'Dispose rewards overlay',
			},
		],
	},
	messagesDeleteAll: {
		description: 'Delete all read messages from active messages',
		actions: [
			{
				command: CLICK,
				arguments: [600, 980],
				delay: 500,
				description: 'Delete all read messages from active messages',
			},
			{
				command: CLICK,
				arguments: [780, 720],
				delay: 500,
				description: 'Confirm to delete all read mail',
			},
		],
	},
	messagesClose: {
		description: 'close messages window',
		actions: [
			{
				command: CLICK,
				arguments: [1835, 100],
				delay: 1000,
				description: 'close messages window',
			},
		],
	},
};
