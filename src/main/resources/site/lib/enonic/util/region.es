/////////////////////////////////////////////////////////////////////////
// Functionality to help with XP regions                               //
/////////////////////////////////////////////////////////////////////////
import {getComponent} from '/lib/xp/portal';


/**
 * Get regions as array
 * @returns {Array}
 */
export const get = () => Object.values(getComponent().regions);
