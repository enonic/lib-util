/////////////////////////////////////////////////////////////////////////
// Functionality to help with XP regions                               //
/////////////////////////////////////////////////////////////////////////
import {getComponent} from '/lib/xp/portal';


/**
 * Get regions as array
 * @returns {Array}
 */
export const get = () => {
	const component = getComponent(); log.debug({component});
	const {regions} = component; log.debug({regions});
	const values = Object.values(regions); log.debug({values});
	return values;
};


export default {
	get
};
