import vip from './vip.js';
import search from './search.js';

const generateMap = () => {
	return Object.assign({}, vip, search);
};

const map = generateMap();
export default map;
