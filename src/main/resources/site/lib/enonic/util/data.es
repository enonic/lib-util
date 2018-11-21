/////////////////////////////////////////////////////////////////////////
// Functionality to help with handling returned data from XP (json)	//
/////////////////////////////////////////////////////////////////////////

// For backwards compatibility:
import {isSet} from './value';

export {isSet};
export {isInt} from './value';


/**
 * Force data to array
 * Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify
 * @param data
 * @returns {Array}
 */
export const forceArray = data => Array.isArray(data) ? data : [data];


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
	//console.log('obj:', obj, ' recursive:', recursive);
	Object.entries(obj).forEach(([key, value]) => {
		//console.log('key:', key, ' value:', value);
		if (value === '') {
			//console.log('deleting key:', key);
			delete obj[key]; // eslint-disable-line no-param-reassign
		} else if (recursive && typeof value === 'object') {
			deleteEmptyProperties(value, recursive);
		} /*else {
			console.log('keeping key:', key);
		}*/
	});
	//return obj;
}
