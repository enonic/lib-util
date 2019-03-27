/**
 * Syntactic sugar for JSON.stringify
 * @param {*} value
 * @param {Function} replacer - default: null
 * @param {String|Number} space - default: 4
 * @returns {String} A JSON string representing the given value.
 */
export const toStr = (value, replacer = null, space = 4) => JSON.stringify(value, replacer, space);

export default {
	toStr
};
