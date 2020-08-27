/////////////////////////////////////////////////////////////////////////
// Functionality to help with XP regions                               //
/////////////////////////////////////////////////////////////////////////
import {getComponent} from '/lib/xp/portal';

/** @module region */

/**
 * Get regions as array
 * @returns {Array}
 */
export const get = () => {
	const component = getComponent();
	const {regions} = component;
	const values = Object.keys(regions).map((key) => regions[key]);
	return values;
};

export default {
	get
};
