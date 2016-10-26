exports.app = require('app');
exports.data = require('data');
exports.content = require('content');
exports.region = require('region');

/**
 * Log data
 * @param {*} data
 */
exports.log = function (data) {
    log.info('UTIL log %s', JSON.stringify(data, null, 4));
};

/**
 * Syntactic sugar for JSON.stringify
 * @param {*} value
 * @param {Function} replacer - default: null
 * @param {String|Number} space - default: 4
 * @returns {String} A JSON string representing the given value.
 */
exports.toStr = function(value) {
    var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var space = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    return JSON.stringify(value, replacer, space);
};

/**
 * Returns true if a value is set. Returns false if the value is NOT set.
 * @param {*} value
 * @returns true || false
 */
exports.isSet = function (value) {
    return value !== null && typeof value !== 'undefined';
};

/**
 * Returns true if a value is NOT set. Returns false if the value is set.
 * @param {*} value
 * @returns true || false
 */
exports.isNotSet = function (value) {
    return value === null || typeof value === 'undefined';
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
    if (exports.isSet(value)) {
        return fn(value);
    }
};
