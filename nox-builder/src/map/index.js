import alliance from './alliance.js';
import common from './common.js';
import crew from './crew.js';
import fleet from './fleet.js';
import messages from './messages.js';
import missions from './missions.js';
import search from './search.js';
import rally from './rally.js';
import vip from './vip.js';

const generateMap = () => {
	return Object.assign(
		{},
		alliance,
		common,
		crew,
		fleet,
		messages,
		missions,
		search,
		rally,
		vip
	);
};

const map = generateMap();
export default map;
