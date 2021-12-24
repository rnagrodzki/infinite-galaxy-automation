const OPEN_TAB_DELAY = 1500;
const CLOSING_TAB_DELAY = 1000;
const SLIDE_DELAY = 2000;
const REWARDS_OVERLAY_DELAY = 1000;
const CLOSING_REWARDS_OVERLAY_DELAY = 600;
const SWITCH_TAB_DELAY = 750;

export default {
	alliance: [
		{
			command: 'click',
			arguments: [1050, 950],
			delay: 2000,
			description: 'Open alliance tab',
		},
	],
	allianceTech: [
		{
			command: 'click',
			arguments: [760, 830],
			delay: OPEN_TAB_DELAY,
			description: 'Open alliance tech tab',
		},
	],
	allianceGift: [
		{
			command: 'click',
			arguments: [1050, 830],
			delay: OPEN_TAB_DELAY,
			description: 'Open alliance gift tab',
		},
		{
			command: 'click',
			arguments: [1780, 290],
			delay: REWARDS_OVERLAY_DELAY,
			description: 'Claim all gifts',
		},
		{
			command: 'click',
			arguments: [1780, 290],
			delay: 500,
			description: 'Dismiss rewards overlay',
		},
	],
	allianceGiftRemoveAll: [
		{
			command: 'click',
			arguments: [1600, 290],
			delay: 500,
			description: 'Remove all rewards',
		},
	],
	allianceMissions: [
		{
			command: 'click',
			arguments: [1600, 830],
			delay: OPEN_TAB_DELAY,
			description: 'Open alliance daily missions tab',
		},
		{
			command: 'click',
			arguments: [1600, 830],
			delay: REWARDS_OVERLAY_DELAY,
			description: 'Claim all rewards for daily missions',
		},
		{
			command: 'click',
			arguments: [1600, 830],
			delay: CLOSING_REWARDS_OVERLAY_DELAY,
			description: 'Dismiss rewards overlay',
		},
	],
	allianceEvent: [
		{
			command: 'click',
			arguments: [480, 830],
			delay: OPEN_TAB_DELAY,
			description: 'Open alliance event tab',
		},
	],
	allianceBattle: [
		{
			command: 'click',
			arguments: [480, 830],
			delay: OPEN_TAB_DELAY,
			description: 'Open alliance battle tab',
		},
	],
	allianceSlideLeft: [
		{
			command: 'slide',
			arguments: [1800, 830, 190, 830], // X1, Y1, X2, Y2
			delay: SLIDE_DELAY,
			description: 'Slide alliance menu left',
		},
	],
	allianceSlideRight: [
		{
			command: 'slide',
			arguments: [190, 830, 1800, 830], // X1, Y1, X2, Y2
			delay: SLIDE_DELAY,
			description: 'Slide alliance menu right',
		},
	],
	allianceTerritoryTax: [
		{
			command: 'click',
			arguments: [1170, 830],
			delay: OPEN_TAB_DELAY,
			description: 'Open alliance territory tab',
		},
		{
			command: 'click',
			arguments: [1220, 100],
			delay: SWITCH_TAB_DELAY,
			description: 'Switch to alliance territory tax tab',
		},
		{
			command: 'click',
			arguments: [1600, 250],
			delay: REWARDS_OVERLAY_DELAY,
			description: 'Claim tax reward',
		},
		{
			command: 'click',
			arguments: [1600, 250],
			delay: CLOSING_REWARDS_OVERLAY_DELAY,
			description: 'Claim tax reward',
		},
	],
	allianceClose: [
		{
			command: 'click',
			arguments: [1830, 100],
			delay: CLOSING_TAB_DELAY,
			description: 'Close alliance tab',
		},
	],
};
