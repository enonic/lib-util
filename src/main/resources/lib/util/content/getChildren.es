import {
	get as getContentByKey,
	query as queryContent
} from '/lib/xp/content';
//import {get as getContext} from '/lib/xp/context';
import {getContent as getCurrentContent} from '/lib/xp/portal';

import {addFilter} from '../query/addFilter';
import {hasValue} from '../query/hasValue';
//import {toStr} from '../value';
import {isFunction} from '../value/isFunction';

/**
 * Returns a list of all child content.
 * @static
 * @memberof module:content
 * @alias getChildren
 *
 * @param {object} params - JSON with the parameters.
 * @param {String} [params.id] - Content id to find children of
 * @param {String} [params.path] - Content path to find children of
 * @param {String} [param.key = id || path]
 * @param {String} [params.branch] - What branch to search
 * @param {object} [params.content = getContent()] - Content (as JSON) to find children of.
 * @param {Array} [params.contentTypes = []] - Content types to filter on.
 * @param {Number} [params.count = -1] - Number of contents to fetch.
 * @param {Object} [params.filters = {}]
 * @param {String} [params.query]
 * @param {string} [params.sort = '_manualordervalue DESC'] - Sorting expression.
 * @param {Number} [params.start = 0]
 * @return {Object} - Object with hits propertie being the content children
 */
export function getChildren({
	id,
	path,
	key = id || path,

	branch, // = getContext().branch, // query does this on its own
	content = key ? getContentByKey({key, branch}) : getCurrentContent(),

	aggregations,
	contentTypes = [],
	count = -1, // Get all children by default
	filters = {},
	map, //= ({displayName, data}) => ({displayName, data}),
	query,
	sort = '_manualordervalue DESC',
	start = 0
} = {}) {
	//log.debug(toStr({branch, contentTypes, count, id, path, key, content, sort, start}));
	addFilter({
		clause: 'should',
		filter: hasValue('_parentPath', [`/content${content._path}`]),
		filters // Gets modified
	});
	const queryParams = {
		aggregations,
		count,
		contentTypes,
		filters,
		query,
		sort,
		start
	};
	//log.debug(toStr({queryParams}));
	const childRes = queryContent(queryParams);
	if (isFunction(map)) {
		childRes.hits = childRes.hits.map((c) => map(c));
	}
	//log.debug(toStr({childRes}));
	return childRes;
} // function getChildren
