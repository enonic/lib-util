//import {toStr} from '../value';
import {get as getContentByKey} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';

/**
 * Returns parent content or null if there is no parent content.
 * @memberof module:content
 * @alias getParent
 * @static
 *
 * @param {object} [content = content.get(key) \|\| portal.getContent()] - May be overridden.
 * Default is content by key or current content
 * @param {String} key - Path or id to the content.
 * @param {String} [branch] - May be overridden, but this is not recommended.
 * Defaults to the current branch set in portal if not overriden.
 * @returns {object} Returns the parent content or null
 */
export function getParent({
	branch,
	key,
	content = key ? getContentByKey({key, branch}) : getCurrentContent()
} = {}) {
	/* log.debug(toStr({
		branch, key, content, typeOfContent: typeof content
	})); */
	if (!content) {
		throw new Error(`getParent() was unable to get content with key:${key} branch:${branch} nor currentContent!`);
	}
	const parentPath = content._path.replace(/^(.*?)\/[^/]+$/, '$1');
	//log.debug(toStr({parentPath}));
	if (!parentPath) { return null; }
	const parent = getContentByKey({key: parentPath, branch});
	//log.debug(toStr({parent, type: typeof parent}));
	return parent;
}

export default {
	getParent
};
