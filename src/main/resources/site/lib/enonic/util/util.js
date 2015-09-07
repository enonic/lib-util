exports.app = require('app.js').app;
exports.data = require('data.js').data;
exports.content = require('content.js').content;
exports.region = require('region.js').region;

/**
 * Log data
 * @param {*} data
 */
exports.log = function (data) {
    log.info('UTIL log %s', JSON.stringify(data, null, 4));
};
