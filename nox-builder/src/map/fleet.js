const FLEET_CHOOSE_DELAY = 200;
const ACCEPT_TARGET_DELAY = 1000;

export default {
	fleetConfirm: [
		{
			command: 'click',
			arguments: [1340, 540],
			delay: ACCEPT_TARGET_DELAY,
			description: 'Click attack button on selected target',
		},
		{
			command: 'click',
			arguments: [1540, 480],
			delay: FLEET_CHOOSE_DELAY,
			description: 'Confirm sending fleet - fleet 1',
		},
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
	fleetFirstConfirm: [
		{
			command: 'click',
			arguments: [1340, 540],
			delay: ACCEPT_TARGET_DELAY,
			description: 'Click attack button on selected target',
		},
		{
			command: 'click',
			arguments: [1800, 280],
			delay: FLEET_CHOOSE_DELAY,
			description: 'Click 1st fleet on list',
		},
		{
			command: 'click',
			arguments: [1540, 480],
			delay: FLEET_CHOOSE_DELAY,
			description: 'Confirm sending fleet - fleet 1',
		},
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
};
