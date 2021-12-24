export default {
	vip: [
		{
			command: 'click',
			arguments: [90, 160],
			delay: 1500,
			description: 'Open VIP menu',
		},
	],
	vipFreeChest: [
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
	vipPointsChest: [
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
	vipClose: [
		{
			command: 'click',
			arguments: [1840, 100],
			delay: 1000,
			description: 'Close VIP menu',
		},
	],
};
