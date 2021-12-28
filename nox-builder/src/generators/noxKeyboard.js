import generateKeymapMacro from './keymapMacro.js';

// https://github.com/nashwaan/xml-js/issues/69
const escapeMacro = str => {
	return str
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll("'", '&#39;')
		.replaceAll('"', '&quot;');
};

const mapMacro = macros => item => {
	const keyString = item.Key._attributes.keyString;
	const {content, name, keys} =
		macros.find(({keys: macroKeys}) => macroKeys === keyString) || {};

	const copy = Object.assign({}, item);
	if (name) {
		console.log(`Updating macro for ${name} (${keys})`);
		copy._attributes.macro = escapeMacro(generateKeymapMacro(content));
	}
	return copy;
};

const generate = ({content, macros}) => {
	const copy = Object.assign({}, content);
	copy.Root.Scene.Item = copy.Root.Scene.Item.map(mapMacro(macros));
	return copy;
};

export default generate;
