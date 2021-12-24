import fs from 'fs';

const saveFiles = contents => {
	contents.forEach(({name, content, path}) => {
		console.log(`Saving ${name}`);
		fs.writeFileSync(path, content, {encoding: 'utf-8'});
	});
};

export default saveFiles;
