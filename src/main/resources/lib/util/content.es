//──────────────────────────────────────────────────────────────────────────────
// Functionality to assist with working with content in XP
//──────────────────────────────────────────────────────────────────────────────
import {getAncestors as importedGetAncestors} from './content/getAncestors';
import {getChildren as importedGetChildren} from './content/getChildren';
import {getParent as importedGetParent} from './content/getParent';
import {getSites as importedGetSites} from './content/getSites';
import {getTree as importedGetTree} from './content/getTree';
import {get as getContentByKey} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';


/**
 * Get content by key (path or id)
 * @param {string} key - Content key
 * @returns {object} Content object
 */
export const get = key => typeof key === 'undefined' ? getCurrentContent() : getContentByKey({key});


/**
 * Check if content exists at path
 * @param {string} path
 * @returns {boolean}
 */
export const exists = path => !!getContentByKey({key: path});


export const getAncestors = importedGetAncestors;


export const getChildren = importedGetChildren;


export const getParent = importedGetParent;


/**
 * Returns the path to the content location. If the key to a content is passed, it will be used. If contenKey is null, the path
 * to the page that the part is on will be returned.
 * @param {Content} key - content key. Example: config['saveFolder']
 * @return {String} Returns the path of the save location.
 */
export function getPath(key) {
	if (key) {
		const content = getContentByKey({key});
		if (content) { return content._path; }
	}
	return getCurrentContent()._path;
}


/**
 * Get content property
 * @param {string} key - Content key
 * @param {string} property - Property name
 * @returns {*}
 */
export function getProperty(key, property) {
	if (!key || !property) {
		return null;
	}
	const result = get(key);
	return result ? result[property] : null;
}


export const getSites = importedGetSites;


export const getTree = importedGetTree;


export default {
	exists,
	get,
	getAncestors,
	getChildren,
	getPath,
	getParent,
	getProperty,
	getSites,
	getTree
};
