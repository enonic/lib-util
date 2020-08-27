import {query as queryContent} from '/lib/xp/content';
import {
	get as getContext,
	run
} from '/lib/xp/context';

//import {toStr} from '../value';
import {isFunction} from '../value/isFunction';

/**
 * Gets all content of type portal:sites
 * @memberof module:content
 * @static
 * @alias getSites
 *
 * @param {Object} params - JSON with the parameters
 * @param {Object} [params.aggregations]
 * @param {Object} [params.branch] - what branch to use in the context
 * @param {object} [params.context = lib.context.get()] - Context object used to find sites.
 * @param {Number} [params.count = -1] - Number of elements to search for
 * @param {Object} [params.filters]
 * @param {String} [params.query]
 * @param {String} [params.sort]
 * @param {Number} [params.start]
 * @returns {Object} Returns a query result with hits of all sites (result.hits)
*/

export function getSites({
	aggregations,
	branch,
	context = (() => {
		const c = getContext();
		if (branch) { c.branch = branch; }
		return c;
	})(), // IIFE
	count = -1,
	filters,
	map,
	query,
	sort,
	start
} = {}) {
	//log.info(toStr({context}));

	const queryParams = {
		aggregations,
		count, // parseInt not needed
		contentTypes: ['portal:site'],
		filters,
		query,
		sort,
		start // parseInt not needed
	};
	//log.info(toStr({queryParams}));

	const childRes = run(context, () => queryContent(queryParams));
	if (isFunction(map)) {
		childRes.hits = childRes.hits.map((c) => map(c));
	}
	//log.info(toStr({childRes}));
	return childRes;
} // function getSites
