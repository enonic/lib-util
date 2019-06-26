export function addFilter({
	clause = 'must',
	filter,
	filters = {} // Reference which gets modified
}) {
	if (!filters.boolean) { filters.boolean = {}; } // eslint-disable-line no-param-reassign
	if (!filters.boolean[clause]) { filters.boolean[clause] = []; } // eslint-disable-line no-param-reassign
	if (!Array.isArray(filters.boolean[clause])) {
		filters.boolean[clause] = [filters.boolean[clause]]; // eslint-disable-line no-param-reassign
	}
	filters.boolean[clause].push(filter);
	return filters;
}
