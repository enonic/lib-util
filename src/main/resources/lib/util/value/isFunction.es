/**
 * Returns true if the value is a function. Otherwise false.
 * @memberof module:value
 * @static
 * @alias isFunction
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value) {
	return !!(value && value.constructor && value.call && value.apply); // highly performant from underscore
}


export default {
	isFunction
};
