export default {
	vip: {
		description: 'Open VIP menu',
		actions: [
			{
				command: 'click',
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
				command: 'click',
				arguments: [1600, 570],
				delay: 500,
				description: 'Click daily VIP rewards chest',
			},
			{
				command: 'click',
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
				command: 'click',
				arguments: [1600, 570],
				delay: 500,
				description: 'Click daily VIP points chest',
			},
			{
				command: 'click',
				arguments: [1600, 570],
				delay: 500,
				description: 'Close rewards overlay',
			},
		],
	},
	vipClose: {
		description: 'Close VIP menu',
		actions: [
			{
				command: 'click',
				arguments: [1840, 100],
				delay: 1000,
				description: 'Close VIP menu',
			},
		],
	},
};
