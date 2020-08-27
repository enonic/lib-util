/** @module query */

/**
 * @memberof module:query
 * @alias addFilter
 * @static
 *
 * @param {Object} param Object with the parameters
 * @param {String} [param.clause = 'must'] Filter clause
 * @param {Object} param.filter
 *
 * @returns {Object} Returns the updated filters object
*/
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
