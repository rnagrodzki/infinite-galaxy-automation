import fs from 'fs';
import yaml from 'js-yaml';

const read = dir => {
	return fs
		.readdirSync(dir)
		.map(file => {
			const content = yaml.load(
				fs.readFileSync(`${dir}/${file}`, 'utf-8')
			);
			const name = file.split('.')[0];
			return {name, content};
		})
		.filter(({content}) => !!content);
};

export default read;
