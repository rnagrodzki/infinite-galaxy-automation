const OPEN_CHEST_DELAY = 750;
const CLOSE_REWARDS_OVERLAY_DELAY = 250;

export default {
	missions: [
		{
			command: 'click',
			arguments: [790, 960],
			delay: 1500,
			description: 'Open missions window',
		},
	],
	missions2ndTab: [
		{
			command: 'click',
			arguments: [560, 100],
			delay: 500,
			description: 'Open 2nd missions tab',
		},
	],
	missionsChest1: [
		{
			command: 'click',
			arguments: [380, 250],
			delay: OPEN_CHEST_DELAY,
			description: 'Open missions chest 1',
		},
		{
			command: 'click',
			arguments: [380, 250],
			delay: CLOSE_REWARDS_OVERLAY_DELAY,
			description: 'Close rewards overlay',
		},
	],
	missionsChest2: [
		{
			command: 'click',
			arguments: [600, 250],
			delay: OPEN_CHEST_DELAY,
			description: 'Open missions chest 2',
		},
		{
			command: 'click',
			arguments: [600, 250],
			delay: CLOSE_REWARDS_OVERLAY_DELAY,
			description: 'Close rewards overlay',
		},
	],
	missionsChest3: [
		{
			command: 'click',
			arguments: [920, 250],
			delay: OPEN_CHEST_DELAY,
			description: 'Open missions chest 3',
		},
		{
			command: 'click',
			arguments: [920, 250],
			delay: CLOSE_REWARDS_OVERLAY_DELAY,
			description: 'Close rewards overlay',
		},
	],
	missionsChest4: [
		{
			command: 'click',
			arguments: [1190, 250],
			delay: OPEN_CHEST_DELAY,
			description: 'Open missions chest 4',
		},
		{
			command: 'click',
			arguments: [1190, 250],
			delay: CLOSE_REWARDS_OVERLAY_DELAY,
			description: 'Close rewards overlay',
		},
	],
	missionsChest5: [
		{
			command: 'click',
			arguments: [1460, 250],
			delay: OPEN_CHEST_DELAY,
			description: 'Open missions chest 5',
		},
		{
			command: 'click',
			arguments: [1460, 250],
			delay: CLOSE_REWARDS_OVERLAY_DELAY,
			description: 'Close rewards overlay',
		},
	],
	missionsChest6: [
		{
			command: 'click',
			arguments: [1780, 250],
			delay: OPEN_CHEST_DELAY,
			description: 'Open missions chest 6',
		},
		{
			command: 'click',
			arguments: [1780, 250],
			delay: CLOSE_REWARDS_OVERLAY_DELAY,
			description: 'Close rewards overlay',
		},
	],
	missionsClose: [
		{
			command: 'click',
			arguments: [1830, 100],
			delay: 1500,
			description: 'Close missions window',
		},
	],
};
