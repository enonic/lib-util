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
		childRes.hits = childRes.hits.map(c => map(c));
	}
	//log.debug(toStr({childRes}));
	return childRes;
} // function getChildren
