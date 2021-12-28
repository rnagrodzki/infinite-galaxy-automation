import {KEYMAP_MACRO_NEW_LINE} from '../consts.js';

const encode = content => {
	return content.join(KEYMAP_MACRO_NEW_LINE);
};
export default encode;
