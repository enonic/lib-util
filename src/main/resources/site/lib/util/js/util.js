exports.data = require('data.js').data;
exports.module = require('module.js').module;
exports.content = require('content.js').content;
exports.image = require('image.js').image;
exports.menu = require('menu.js').menu;
exports.region = require('region.js').region;

/**
 * Log data
 * @param {*} data
 */
exports.log = function (data) {
    log.info('UTIL log %s', JSON.stringify(data, null, 4));
};
