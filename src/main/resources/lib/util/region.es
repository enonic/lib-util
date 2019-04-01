/////////////////////////////////////////////////////////////////////////
// Functionality to help with XP regions                               //
/////////////////////////////////////////////////////////////////////////
import {getComponent} from '/lib/xp/portal';


/**
 * Get regions as array
 * @returns {Array}
 */
export const get = () => {
	const component = getComponent();
	const {regions} = component;
	const values = [];
	for (const key in regions) {
        if (regions.hasOwnProperty(key)) {
            const region = regions[key];
			// The "name" property has been dropped in 7.0, so we add it back in here for backwards compatibility
            region.name = key;
            values.push(region);
        }
    }
	return values;
};


export default {
	get
};
