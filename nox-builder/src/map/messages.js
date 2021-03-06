export default {
	messages: {
		description: 'Open messages window',
		actions: [
			{
				command: 'click',
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
				command: 'click',
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
				command: 'click',
				arguments: [160, 980],
				delay: 1000,
				description: 'Claim all rewards from active messages tab',
			},
			{
				command: 'click',
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
				command: 'click',
				arguments: [600, 980],
				delay: 500,
				description: 'Delete all read messages from active messages',
			},
			{
				command: 'click',
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
				command: 'click',
				arguments: [1835, 100],
				delay: 1000,
				description: 'close messages window',
			},
		],
	},
};
