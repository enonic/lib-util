exports.app = require('./app');
exports.data = require('./data');
exports.content = require('./content');
exports.region = require('./region');

var _value                  = require('./value');
exports.isSet               = _value.isSet;
exports.isNotSet            = _value.isNotSet;
exports.valueOrEmptyString  = _value.valueOrEmptyString;
exports.valueOr             = _value.valueOr;
exports.ifSetPassToFunction = _value.ifSetPassToFunction;

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
