import {CLICK, SLIDE} from '../supportedCommands.js';

export default {
	materialsWorkshop: {
		description: 'Open Materials Workshop',
		actions: [
			{
				command: SLIDE,
				arguments: [1700, 760, 100, 760], // X1, Y1, X2, Y2
				delay: 2000,
				description: 'Move camera to Materials Workshop station',
			},
			{
				command: CLICK,
				arguments: [1110, 540],
				delay: 1500,
				description: 'Click on Materials Workshop',
			},
		],
	},
	materialsWorkshopM1: {
		description: 'Click to add to queue M1',
		actions: [
			{
				command: CLICK,
				arguments: [1150, 250],
				delay: 500,
				description: 'Click to add to queue M1',
			},
		],
	},
	materialsWorkshopM2: {
		description: 'Click to add to queue M2: Amorphous Alloy',
		actions: [
			{
				command: CLICK,
				arguments: [1350, 250],
				delay: 500,
				description: 'Click to add to queue M2: Amorphous Alloy',
			},
		],
	},
	materialsWorkshopM3: {
		description: 'Click to add to queue M3',
		actions: [
			{
				command: CLICK,
				arguments: [1550, 250],
				delay: 500,
				description: 'Click to add to queue M31',
			},
		],
	},
	materialsWorkshopM4: {
		description: 'Click to add to queue M4',
		actions: [
			{
				command: CLICK,
				arguments: [1750, 250],
				delay: 500,
				description: 'Click to add to queue M4',
			},
		],
	},
	materialsWorkshopM5: {
		description: 'Click to add to queue M5',
		actions: [
			{
				command: CLICK,
				arguments: [1150, 450],
				delay: 500,
				description: 'Click to add to queue M5',
			},
		],
	},
	materialsWorkshopM6: {
		description: 'Click to add to queue M6',
		actions: [
			{
				command: CLICK,
				arguments: [1350, 450],
				delay: 500,
				description: 'Click to add to queue M6',
			},
		],
	},
	materialsWorkshopM7: {
		description: 'Click to add to queue M7',
		actions: [
			{
				command: CLICK,
				arguments: [1550, 450],
				delay: 500,
				description: 'Click to add to queue M7',
			},
		],
	},
	materialsWorkshopM8: {
		description: 'Click to add to queue M8',
		actions: [
			{
				command: CLICK,
				arguments: [1750, 450],
				delay: 500,
				description: 'Click to add to queue M8',
			},
		],
	},
	materialsWorkshopM9: {
		description: 'Click to add to queue M9',
		actions: [
			{
				command: CLICK,
				arguments: [1150, 650],
				delay: 500,
				description: 'Click to add to queue M9',
			},
		],
	},
	materialsWorkshopM10: {
		description: 'Click to add to queue M10',
		actions: [
			{
				command: CLICK,
				arguments: [1350, 650],
				delay: 500,
				description: 'Click to add to queue M10',
			},
		],
	},
	materialsWorkshopClose: {
		description: 'Close Materials Workshop',
		actions: [
			{
				command: CLICK,
				arguments: [1840, 100],
				delay: 1500,
				description: 'Close Materials Workshop',
			},
		],
	},
};
