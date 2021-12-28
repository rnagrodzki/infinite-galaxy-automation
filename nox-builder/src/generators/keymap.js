import keymapMacro from './keymapMacro.js';

const xmlTemplate = `<?xml version='1.0' encoding='UTF-8'?>
<Root>
	<Scene id="com.camelgames.ig" horizonFlag="1" width="1920" height="1080" opacity="5" rotateAngle="0">
##ITEMS##
    </Scene>
</Root>`;

const xmlItem = `        <Item clicked_tip="" width="104" type="9" height="48" pos="10,##POSY##" macro="##MACRO##">
            <Key keyString="##KEY##" value="##ID##" modifier_value="0" description="" keyLevel="">
                <Point>10,##POS2Y##</Point>
            </Key>
        </Item>`;

const generateKeymap = (macros, dir) => {
	const items = macros.map(({name, content, path, keys}, index) => {
		return xmlItem
			.replace('##KEY##', keys)
			.replace('##ID##', index.toString())
			.replace('##POSY##', index.toString())
			.replace('##POS2Y##', index.toString())
			.replace('##MACRO##', keymapMacro(content));
	});

	const keyboardContent = xmlTemplate.replace(
		'##ITEMS##',
		items.join('\r\n')
	);

	return [
		{
			name: 'keymap',
			content: keyboardContent,
			path: `${dir}/keymap`,
		},
		{
			name: 'keymap-macros',
			content: JSON.stringify(
				macros.map(({name, keys, content}) => ({
					name,
					keys,
					macro: keymapMacro(content),
				})),
				null,
				2
			),
			path: `${dir}/keymap-macros-map.json`,
		},
	];
};

export default generateKeymap;
