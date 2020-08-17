import {query as queryContent} from '/lib/xp/content';
import {
	get as getContext,
	run
} from '/lib/xp/context';

//import {toStr} from '../value';
import {isFunction} from '../value/isFunction';

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
		childRes.hits = childRes.hits.map(c => map(c));
	}
	//log.info(toStr({childRes}));
	return childRes;
} // function getSites
