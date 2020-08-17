/////////////////////////////////////////////////////////////////////////
// Functionality to help with values (return or check)                 //
/////////////////////////////////////////////////////////////////////////
import {isFunction as importedIsFunction} from './value/isFunction';
import {toStr as importedToStr} from './value/toStr';

/** @module value */

export const isFunction = importedIsFunction;

/**
 * Returns true if the value is an object. Otherwise false.
 * Note that array and function is an object.
 * @param {*} value
 * @returns {boolean}
 */
export const isObject = (value) => value === Object(value);

/**
 * Returns true if the value is a string. Otherwise false.
 * @param {*} value
 * @returns {boolean}
 */
export const isString = (value) => typeof value === 'string' || value instanceof String;

/**
 * Returns true if a value is set. Returns false if the value is NOT set.
 * @param {*} value
 * @returns {boolean}
 */
export function isSet(value) {
	if (typeof value === 'boolean') { return true; } // If value is true/false it is set
	return value !== null && typeof value !== 'undefined';
}

/**
 * Returns true if a value is NOT set. Returns false if the value is set.
 * @param {*} value
 * @returns {boolean}
 */
export const isNotSet = (value) => value === null || typeof value === 'undefined';

/* eslint-disable no-restricted-globals */
/**
 * Check if value is integer
 * @param value
 * @returns {boolean}
 */
export function isInt(value) {
	return !isNaN(value)
		&& parseInt(Number(value), 10) === value
		&& !isNaN(parseInt(value, 10));
}
/* eslint-enable no-restricted-globals */

export const toStr = importedToStr;

/**
 * Returns the value if the value is set. Otherwise returns an empty string.
 * @param {*} value
 * @returns {*} value || ''
 */
export const valueOrEmptyString = (value) => isSet(value) ? value : '';

/**
 * Returns the value1 if the value1 is set. Otherwise returns value2.
 * @param {*} value1
 * @param {*} value2
 * @returns {*} value || ''
 */
export function valueOr(value1, value2) {
	if (arguments.length < 2) { throw new Error('valueOr requires two parameters!'); }
	return isSet(value1) ? value1 : value2;
}

/**
 * If the value is set: execute the function expression with value as the first
 * and only parameter and return the return value of the function.
 * Otherwise don't even execute the function expression and return undefined.
 * @param {*} value
 * @param {function} fn
 * @returns {*} * || undefined
 */
export function ifSetPassToFunction(value, fn) {
	if (arguments.length < 2) { throw new Error('ifSetPassToFunction requires two parameters!'); }
	if (typeof fn !== 'function') { throw new Error('ifSetPassToFunction second parameter need to be of type function!'); }
	if (exports.isSet(value)) {
		return fn(value);
	}
	return undefined;
}

export default {
	ifSetPassToFunction,
	isFunction,
	isNotSet,
	isInt,
	isObject,
	isSet,
	isString,
	toStr,
	valueOr,
	valueOrEmptyString
};
