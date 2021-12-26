export default {
	delay: [
		{
			command: 'delay',
			arguments: [],
			description: 'Add extra delay',
		},
	],
	loop: [
		{
			command: 'loop',
			arguments: [],
			description: 'Repeat macro several times',
		},
	],
	openChatWindow: [
		{
			command: 'click',
			arguments: [250, 1040],
			delay: 750,
			description: 'Open chat window',
		},
	],
	clickOnLatestChatMessage: [
		{
			command: 'click',
			arguments: [600, 830],
			delay: 750,
			description: 'Click on latest message in chat',
		},
	],
};
