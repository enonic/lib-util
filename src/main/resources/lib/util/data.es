/////////////////////////////////////////////////////////////////////////
// Functionality to help with handling returned data from XP (json)	//
/////////////////////////////////////////////////////////////////////////

// For backwards compatibility:
import libValue from './value';

export const { isInt, isSet } = libValue;

/**
 * Force data to array
 * Will filter out any undefined values
 * @param data - data to force into an array
 * @returns {Array} A new array
 */
export const forceArray = (data) => {
	if (Array.isArray(data)) {
		// eslint-disable-next-line arrow-body-style
		return data.filter((elem) => {
			return elem !== undefined;
		});
	}
	if (data === undefined) {
		return [];
	}
	return [data];
};

/**
 * Trim empty array elements
 * Empty: undefined, null or ''
 * @param {Array} array - Array to trim
 * @returns {Array} Trimmed array
 */
export const trimArray = (maybeArray) =>
	forceArray(maybeArray).filter((x) => isSet(x) && x !== '');

/**
 * Delete all properties with empty string from an object
 * Set 'recursive' to true if you also want to delete properties in nested objects
 * @param {Object} obj
 * @param {boolean} recursive
 */
export function deleteEmptyProperties(obj, recursive = false) {
	// eslint-disable-next-line no-restricted-syntax
	for (const i in obj) {
		if (obj[i] === '') {
			// eslint-disable-next-line no-param-reassign
			delete obj[i];
		} else if (recursive && typeof obj[i] === 'object') {
			exports.deleteEmptyProperties(obj[i], recursive);
		}
	}
}

export default {
	deleteEmptyProperties,
	forceArray,
	isInt, // For backwards compatibility
	isSet, // For backwards compatibility:
	trimArray
};
