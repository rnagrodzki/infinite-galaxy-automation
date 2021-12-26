export default {
	delay: {
		description: '',
		actions: [
			{
				command: 'delay',
				arguments: [],
				description: 'Add extra delay',
			},
		],
	},
	loop: {
		description: '',
		actions: [
			{
				command: 'loop',
				arguments: [],
				description: 'Repeat macro several times',
			},
		],
	},
	openChatWindow: {
		description: '',
		actions: [
			{
				command: 'click',
				arguments: [250, 1040],
				delay: 750,
				description: 'Open chat window',
			},
		],
	},
	clickOnLatestChatMessage: {
		description: '',
		actions: [
			{
				command: 'click',
				arguments: [600, 830],
				delay: 750,
				description: 'Click on latest message in chat',
			},
		],
	},
};
