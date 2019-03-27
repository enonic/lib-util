import {toStr} from '../value';
import {get as getContentByKey} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';


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
	if (!parentPath) { return null; }
	const parent = getContentByKey({key: parentPath, branch}); log.debug(toStr({parent, type: typeof parent}));
	return parent;
}


export default {
	getParent
};
