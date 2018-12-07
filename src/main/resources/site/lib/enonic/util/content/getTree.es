import {
	get as getContentByKey,
	query as contentQuery
} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';

import {isFunction} from '../value/isFunction';
import {toStr} from '../value/toStr';


/**
 * Returns a tree of contents.
 * @param {String|String[]} [key=currentContent._id] Path or id or an array of the same.
 * @param {Object|Object[]} [content=currentContent] If you already have fetched a content, use this. Content or an array content.
 * @param {number} [levels=0] Number of levels to fetch. 0 means infinite.
 * @param {number} [count=0] Number of contents to fetch. 0 means infinite.
 * @param {function} [map=({displayName, data}) => ({displayName, data})] Function to map content through
 * @param {function} [sort=_manualordervalue DESC] Sorting expression.
 * @param {String} [branch] Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.
 * @returns {Object|Object[]} Content object
 */
export function getTree({
	key,
	branch,
	content = key // eslint-disable-line no-nested-ternary
		? (Array.isArray(key)
			? key.map(k => getContentByKey({key: k}))
			: getContentByKey({key}))
		: getCurrentContent(),
	contentTypes,
	count = 0, // <1 means infinite
	levels = 0, // <1 means infinite
	map = ({displayName, data}) => ({displayName, data}),
	sort = '_manualordervalue DESC'
} = {}) {
	log.debug(toStr({
		key,
		content,
		contentTypes,
		count,
		levels,
		map,
		sort
	}));
	if (Array.isArray(content)) {
		return content.map(c => getTree({
			content: c,
			contentTypes,
			count,
			levels,
			map,
			sort
		}));
	}
	const tree = {
		content: contentTypes // eslint-disable-line no-nested-ternary
			? (
				contentTypes.includes(content.type) // eslint-disable-line no-nested-ternary
					? (isFunction(map) ? map(content) : content)
					: undefined
			)
			: (isFunction(map) ? map(content) : content)
	};
	log.debug(toStr({levels}));
	const queryParams = {
		branch,
		contentTypes,
		count: count === 0 ? -1 : count,
		query: `_parentPath = '/content${content._path}'`,
		sort
	}; log.debug(toStr({queryParams}));
	const childrenRes = contentQuery(queryParams); log.debug(toStr({childrenRes}));
	levels -= 1; // eslint-disable-line no-param-reassign
	log.debug(toStr({'childrenRes.count': childrenRes.count, levels}));
	if (childrenRes.count && levels !== 0) {
		tree.children = childrenRes.hits.map(hit => getTree({
			content: hit,
			contentTypes,
			count,
			levels,
			map,
			sort
		}));
	}
	log.debug(toStr({tree}));
	return tree;
}


export default {
	getTree
};
