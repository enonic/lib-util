import libApp from './app';
import libContent from './content';
import libData from './data';
import libObject from './object';
import libRegion from './region';
import libValue from './value';

export const app = libApp;
export const content = libContent;
export const data = libData;
export const object = libObject;
export const region = libRegion;
export const value = libValue;

export const {toStr} = libValue;


/**
 * Log data
 * @param {*} data
 */
exports.log = d => log.info('UTIL log %s', JSON.stringify(d, null, 4));
// WARNING export const log will NOT work, because Enonic XP log object is in the global namespace!


export default {
	app,
	content,
	data,
	log: exports.log,
	object,
	region,
	toStr,
	value
};
