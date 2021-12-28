import fs from 'fs';
import path from 'path';
import {xml2js} from 'xml-js';

const read = filePath => {
	const resolvedPath = path.resolve(filePath);
	const content = fs.readFileSync(resolvedPath, 'utf-8');
	return xml2js(content, {compact: true});
};

export default read;
