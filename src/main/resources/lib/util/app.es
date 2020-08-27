/////////////////////////////////////////////////////////////////////////
// App specific functionality in XP                                    //
/////////////////////////////////////////////////////////////////////////

/** @module app */

/**
 * Get app's name for use in JSON-nodes (com.enonic.app as com-enonic-app)
 * @returns {String}
 */
export const getJsonName = () => app.name.replace(/\./g, '-');

/**
 * Get short app name (last part)
 * @returns {String}
 */
export const getShortName = () => app.name.split('.').pop();

export default {
	getJsonName,
	getShortName
};
