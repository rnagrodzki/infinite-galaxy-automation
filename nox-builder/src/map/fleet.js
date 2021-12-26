const FLEET_CHOOSE_DELAY = 200;
const ACCEPT_TARGET_DELAY = 1000;

const LAUNCH_FIRST_FLEET_COMMAND = {
	command: 'click',
	arguments: [1540, 480],
	delay: FLEET_CHOOSE_DELAY,
	description: 'Confirm sending fleet - fleet 1',
};

const ACCEPT_TARGET_COMMAND = {
	command: 'click',
	arguments: [1340, 540],
	delay: ACCEPT_TARGET_DELAY,
	description: 'Click attack button on selected target',
};

export default {
	fleetLaunch: {description: '', actions: [LAUNCH_FIRST_FLEET_COMMAND]},
	fleetConfirm: {
		description: '',
		actions: [
			ACCEPT_TARGET_COMMAND,
			LAUNCH_FIRST_FLEET_COMMAND,
			{
				command: 'click',
				arguments: [1540, 610],
				delay: FLEET_CHOOSE_DELAY,
				description: 'Confirm sending fleet - fleet 2',
			},
			{
				command: 'click',
				arguments: [1540, 740],
				delay: FLEET_CHOOSE_DELAY,
				description: 'Confirm sending fleet - fleet 3 & 4',
			},
		],
	},
	fleetFirstConfirm: {
		description: '',
		actions: [
			ACCEPT_TARGET_COMMAND,
			{
				command: 'click',
				arguments: [1800, 280],
				delay: FLEET_CHOOSE_DELAY,
				description: 'Click 1st fleet on list',
			},
			LAUNCH_FIRST_FLEET_COMMAND,
		],
	},
};
