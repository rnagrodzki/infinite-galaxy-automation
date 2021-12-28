import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = resolve(dirname(fileURLToPath(import.meta.url)), '../'); // nox-builder directory

export const MAX_SCREEN_WIDTH = 1920;
export const MAX_SCREEN_HEIGHT = 1080;
export const KEYMAP_MACRO_NEW_LINE = 'HUAN_HANG';
export const STORIES_DIR = resolve(__dirname, 'stories');
export const BUILD_DIR = resolve(__dirname, 'build');
export const MACROS_DIR = resolve(__dirname, 'build/macros');
export const KEYMAP_DIR = resolve(__dirname, 'build/keymap');
