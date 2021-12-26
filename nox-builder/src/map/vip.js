export default {
	vip: {
		description: '',
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
		description: '',
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
		description: '',
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
		description: '',
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
