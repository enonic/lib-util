//export {default as data} from './data'; // Does NOT work
//const app = require('./app'); // Works
//import app from './app'; // Does NOT work
//import {default as app} from './app'; // Does NOT work

// So lets stick to old syntax since new doesn't work
exports.app = require('./app');
exports.content = require('./content');
exports.data = require('./data');
exports.object = require('./object');
exports.region = require('./region');
exports.value = require('./value');

exports.toStr = exports.value.toStr;

/**
 * Log data
 * @param {*} data
 */
exports.log = data => log.info('UTIL log %s', JSON.stringify(data, null, 4));
