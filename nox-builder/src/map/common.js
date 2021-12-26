export default {
	delay: {
		description: 'Add extra delay. Command usage "delay;[ms]"',
		actions: [
			{
				command: 'delay',
				arguments: [],
				description: 'Add extra delay',
			},
		],
	},
	loop: {
		description:
			'Repeat macro exact amount of times. Command usage "loop;[repetitionsCount]"',
		actions: [
			{
				command: 'loop',
				arguments: [],
				description: 'Repeat macro several times',
			},
		],
	},
	openChatWindow: {
		description: 'Open chat window',
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
		description: 'Click on latest message in chat when chat is open',
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
