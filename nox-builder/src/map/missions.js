import {CLICK} from '../supportedCommands.js';

const OPEN_CHEST_DELAY = 750;
const CLOSE_REWARDS_OVERLAY_DELAY = 250;

export default {
	missions: {
		description: 'Open daily missions window',
		actions: [
			{
				command: CLICK,
				arguments: [790, 960],
				delay: 1500,
				description: 'Open missions window',
			},
		],
	},
	missions2ndTab: {
		description: 'Switch to 2nd tab in daily missions window',
		actions: [
			{
				command: CLICK,
				arguments: [560, 100],
				delay: 500,
				description: 'Open 2nd missions tab',
			},
		],
	},
	missionsChest1: {
		description: 'Open chest and claim rewards',
		actions: [
			{
				command: CLICK,
				arguments: [380, 250],
				delay: OPEN_CHEST_DELAY,
				description: 'Open missions chest 1',
			},
			{
				command: CLICK,
				arguments: [380, 250],
				delay: CLOSE_REWARDS_OVERLAY_DELAY,
				description: 'Close rewards overlay',
			},
		],
	},
	missionsChest2: {
		description: 'Open chest and claim rewards',
		actions: [
			{
				command: CLICK,
				arguments: [600, 250],
				delay: OPEN_CHEST_DELAY,
				description: 'Open missions chest 2',
			},
			{
				command: CLICK,
				arguments: [600, 250],
				delay: CLOSE_REWARDS_OVERLAY_DELAY,
				description: 'Close rewards overlay',
			},
		],
	},
	missionsChest3: {
		description: 'Open chest and claim rewards',
		actions: [
			{
				command: CLICK,
				arguments: [920, 250],
				delay: OPEN_CHEST_DELAY,
				description: 'Open missions chest 3',
			},
			{
				command: CLICK,
				arguments: [920, 250],
				delay: CLOSE_REWARDS_OVERLAY_DELAY,
				description: 'Close rewards overlay',
			},
		],
	},
	missionsChest4: {
		description: 'Open chest and claim rewards',
		actions: [
			{
				command: CLICK,
				arguments: [1190, 250],
				delay: OPEN_CHEST_DELAY,
				description: 'Open missions chest 4',
			},
			{
				command: CLICK,
				arguments: [1190, 250],
				delay: CLOSE_REWARDS_OVERLAY_DELAY,
				description: 'Close rewards overlay',
			},
		],
	},
	missionsChest5: {
		description: 'Open chest and claim rewards',
		actions: [
			{
				command: CLICK,
				arguments: [1460, 250],
				delay: OPEN_CHEST_DELAY,
				description: 'Open missions chest 5',
			},
			{
				command: CLICK,
				arguments: [1460, 250],
				delay: CLOSE_REWARDS_OVERLAY_DELAY,
				description: 'Close rewards overlay',
			},
		],
	},
	missionsChest6: {
		description: 'Open chest and claim rewards',
		actions: [
			{
				command: CLICK,
				arguments: [1780, 250],
				delay: OPEN_CHEST_DELAY,
				description: 'Open missions chest 6',
			},
			{
				command: CLICK,
				arguments: [1780, 250],
				delay: CLOSE_REWARDS_OVERLAY_DELAY,
				description: 'Close rewards overlay',
			},
		],
	},
	missionsClose: {
		description: 'Close daily missions window',
		actions: [
			{
				command: CLICK,
				arguments: [1830, 100],
				delay: 1500,
				description: 'Close missions window',
			},
		],
	},
};
