/**
 * Adds values to an id object
 *
 * @memberof module:query
 * @static
 * @alias ids
 *
 * @param {*} values
 * @returns {Object} returns a object with id containing the values
*/

export function ids(
	values
) {
	return {
		ids: {
			values
		}
	};
}
