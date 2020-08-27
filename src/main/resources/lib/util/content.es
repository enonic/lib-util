//──────────────────────────────────────────────────────────────────────────────
// Functionality to assist with working with content in XP
//──────────────────────────────────────────────────────────────────────────────
import {getAncestors as importedGetAncestors} from './content/getAncestors';
import {getChildren as importedGetChildren} from './content/getChildren';
import {getParent as importedGetParent} from './content/getParent';
import {getSites as importedGetSites} from './content/getSites';
import {getTree as importedGetTree} from './content/getTree';
import {get as getContentByKey, exists as contentExists} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';

/**
 * @module content
 */

/**
 * Get content by key
 * @param {String} [key = portal.getContent()] - path or id of content
 * @returns {Object} Returns the content object
 */
export const get = (key) => typeof key === 'undefined' ? getCurrentContent() : getContentByKey({key});

/**
 * Check if content exists
 * @param {String} key - path or id
 * @returns {Boolean}
 */
export const exists = (key) => !!contentExists({ key });

export const getAncestors = importedGetAncestors;

export const getChildren = importedGetChildren;

export const getParent = importedGetParent;

/**
 * Returns the path to the content location. If the key to a content is passed, it will be used.
 * If contenKey is null or undefined, the path to the page that the part is on will be returned.
 * @param {Content} [key] - content key. Example: config['saveFolder']
 * @return {String} Returns the path
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
 * @param {String} key - Content key
 * @param {String} property - Property name
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
