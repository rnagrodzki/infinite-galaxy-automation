import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const read = dir => {
	return fs
		.readdirSync(dir)
		.map(file => {
			if (path.extname(file) !== '.yaml') return {content: undefined};

			const content = yaml.load(
				fs.readFileSync(path.resolve(dir, file), 'utf-8')
			);
			const name = file.split('.')[0];
			return {name, content};
		})
		.filter(({content}) => !!content);
};

export default read;
