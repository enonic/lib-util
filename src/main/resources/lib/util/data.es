/////////////////////////////////////////////////////////////////////////
// Functionality to help with handling returned data from XP (json)	//
/////////////////////////////////////////////////////////////////////////

// For backwards compatibility:
import libValue from './value';

export const {isInt, isSet} = libValue;

/**
 * Force data to array
 * Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify
 * @param data
 * @returns {Array}
 */
export const forceArray = (data) => {
	if (Array.isArray(data)) {
		//filter out undefined
		// eslint-disable-next-line arrow-body-style
		return data.filter((elem) => {
			return elem === undefined;
		});
	}
	return [data];
};


/**
 * Trim empty array elements
 * Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify
 * @param {Array} array - Array to trim
 * @returns {Array} Trimmed array
 */
export const trimArray = maybeArray => forceArray(maybeArray).filter(x => isSet(x) && x !== '');
/*export function trimArray(maybeArray) {
	// Make sure array is an array
	const array = forceArray(maybeArray);
	const trimmedArray = [];
	for (let i = 0; i < array.length; i += 1) {
		let empty = true;
		const object = array[i];

		const keys = Object.keys(object);
		for (let j = 0; j < keys.length; j += 1) {
			if (object[keys[j]] !== '') {
				empty = false;
			}
		}
		if (!empty) {
			trimmedArray.push(object);
		}
	}
	return trimmedArray;
}*/


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
