import alliance from './alliance.js';
import crew from './crew.js';
import fleet from './fleet.js';
import search from './search.js';
import vip from './vip.js';

const generateMap = () => {
	return Object.assign({}, vip, search, alliance, crew, fleet);
};

const map = generateMap();
export default map;
