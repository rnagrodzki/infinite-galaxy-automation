const NEW_LINE = 'HUAN_HANG';

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
		const itemContent = xmlItem
			.replace('##KEY##', keys)
			.replace('##ID##', index.toString())
			.replace('##POSY##', index.toString())
			.replace('##POS2Y##', index.toString())
			.replace('##MACRO##', content.join(NEW_LINE));
		return itemContent;
	});

	const keyboardContent = xmlTemplate.replace(
		'##ITEMS##',
		items.join('\r\n')
	);

	return [
		{
			name: 'keymap',
			content: keyboardContent,
			path: `${dir}/72e202c01b7b4714881e363d8e474e96`,
		},
	];
};

export default generateKeymap;
