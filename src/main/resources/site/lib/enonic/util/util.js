exports.app = require('app');
exports.data = require('data');
exports.content = require('content');
exports.region = require('region');
exports.jsonpath = require('jsonpath');

/**
 * Log data
 * @param {*} data
 */
exports.log = function (data) {
    log.info('UTIL log %s', JSON.stringify(data, null, 4));
};