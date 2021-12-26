import alliance from './alliance.js';
import crew from './crew.js';
import fleet from './fleet.js';
import search from './search.js';
import vip from './vip.js';
import common from './common.js';
import rally from './rally.js';

const generateMap = () => {
	return Object.assign({}, vip, search, alliance, crew, fleet, common, rally);
};

const map = generateMap();
export default map;
