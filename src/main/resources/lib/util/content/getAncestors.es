import {
	get as getContentByKey,
	query as queryContent
} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';

import {addFilter} from '../query/addFilter';
import {hasValue} from '../query/hasValue';
//import {toStr} from '../value';
import {isFunction} from '../value/isFunction';

/** @module content */

/**
 * Returns a list of ancestors.
 *
 * @param {object} params - JSON with the parameters.
 * @param {object} [params.content = getContent()] - Content (as JSON) to find ancestors of.
 * @param {Array} [params.contentTypes = [`${app.name}:page`,'portal:site']] - Content types to filter on.
 * @param {Number} [params.count = -1] - Number of contents to fetch.
 * @param {string} [params.sort = '_path ASC'] - Sorting expression.
 * @return {Array} Returns a list of ancestor content
 */
export function getAncestors({
	id,
	path,
	key = id || path,

	branch,
	content = key ? getContentByKey({key, branch}) : getCurrentContent(),

	aggregations,
	contentTypes = [],
	count = -1,
	filters = {},
	includeCurrent = false,
	includeChildren = false,
	map, //= ({displayName, data}) => ({displayName, data}),
	query,
	sort = '_path ASC'
} = {}) {
	/*log.debug(toStr({
		branch, key, content, contentTypes, count, sort
	}));*/
	const pathParts = content._path.split('/').slice(includeCurrent ? 1 : 2); //log.info(toStr({pathParts}));
	addFilter({
		clause: 'should',
		filter: hasValue(
			'_path',
			pathParts.map((ignored, i) => `/content/${pathParts.slice(0, i + 1).join('/')}`) // eslint-disable-line no-unused-vars
		),
		filters // Gets modified
	});
	if (includeChildren) {
		addFilter({
			clause: 'should',
			filter: hasValue('_parentPath', [`/content${content._path}`]),
			filters // Gets modified
		});
	}
	const queryParams = {
		aggregations,
		contentTypes,
		count,
		filters,
		query, //: query ? `${aQ} AND (${query})` : aQ,
		sort
	}; //log.info(toStr({queryParams}));
	const queryRes = queryContent(queryParams); //log.info(toStr({queryRes}));
	if (isFunction(map)) {
		queryRes.hits = queryRes.hits.map(c => map(c));
	}
	//log.info(toStr({queryRes}));
	return queryRes;
} // function getAncestors
