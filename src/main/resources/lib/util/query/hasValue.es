/**
 * @memberof module:query
 * @static
 * @alias hasValue
 *
 * @param {Object} field
 * @param {Object} values
 * @returns {Object} object containing the hasValues with field and values
*/

export function hasValue(
	field,
	values
) {
	return {
		hasValue: {
			field,
			values
		}
	};
}
