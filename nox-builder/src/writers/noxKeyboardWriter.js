import fs from 'fs';
import {js2xml} from 'xml-js';

const write = ({keyboard, path}) => {
	fs.writeFileSync(path, js2xml(keyboard, {compact: true}), 'utf-8');
};

export default write;
