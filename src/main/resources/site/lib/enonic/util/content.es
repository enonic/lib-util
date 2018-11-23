//──────────────────────────────────────────────────────────────────────────────
// Functionality to assist with working with content in XP
//──────────────────────────────────────────────────────────────────────────────
import {toStr} from './value';
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


/**
 * Returns parent content or null if there is no parent content.
 * @param {object} Content object
 * @param {String} key Path or id to the content.
 * @param {String} branch Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.
 * @returns {object} Content object
 */
export function getParent({
	branch,
	key,
	content = key ? getContentByKey({key, branch}) : getCurrentContent()
} = {}) {
	log.debug(toStr({
		branch, key, content, typeOfContent: typeof content
	}));
	if (!content) {
		throw new Error(`getParent() was unable to get content with key:${key} branch:${branch} nor currentContent!`);
	}
	const parentPath = content._path.replace(/^(.*?)\/[^/]+$/, '$1'); log.debug(toStr({parentPath}));
	const parent = getContentByKey({key: parentPath, branch}); log.debug(toStr({parent, type: typeof parent}));
	return parent;
}


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


export default {
	exists,
	get,
	getPath,
	getParent,
	getProperty
};
