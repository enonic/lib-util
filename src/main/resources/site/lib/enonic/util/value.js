/////////////////////////////////////////////////////////////////////////
// Functionality to help with values (return or check)                 //
/////////////////////////////////////////////////////////////////////////

/**
 * Returns true if a value is set. Returns false if the value is NOT set.
 * @param {*} value
 * @returns {boolean}
 */
exports.isSet = function (value) {
    if (typeof value === 'boolean') { return true } // If value is true/false it is set
    return value !== null && typeof value !== 'undefined';
};

/**
 * Returns true if a value is NOT set. Returns false if the value is set.
 * @param {*} value
 * @returns {boolean}
 */
exports.isNotSet = function (value) {
    return value === null || typeof value === 'undefined';
};

/**
 * Check if value is integer
 * @param value
 * @returns {boolean}
 */
exports.isInt = function(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
};

/**
 * Returns the value if the value is set. Otherwise returns an empty string.
 * @param {*} value
 * @returns value || ''
 */
exports.valueOrEmptyString = function (value) {
    return exports.isSet(value) ? value : '';
};

/**
 * Returns the value1 if the value1 is set. Otherwise returns value2.
 * @param {*} value1
 * @param {*} value2
 * @returns value || ''
 */
exports.valueOr = function (value1, value2) {
    if(arguments.length < 2) { throw new Error('valueOr requires two parameters!'); }
    return exports.isSet(value1) ? value1 : value2;
};

/**
 * If the value is set: execute the function expression with value as the first
 * and only parameter and return the return value of the function.
 * Otherwise don't even execute the function expression and return undefined.
 * @param {*} value
 * @param {function} fn
 * @returns * || undefined
 */
exports.ifSetPassToFunction = function (value, fn) {
    if(arguments.length < 2) { throw new Error('ifSetPassToFunction requires two parameters!'); }
    if(typeof fn !== 'function') { throw new Error('ifSetPassToFunction second parameter need to be of type function!'); }
    if (exports.isSet(value)) {
        return fn(value);
    }
};
