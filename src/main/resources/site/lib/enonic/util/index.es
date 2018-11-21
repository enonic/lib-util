export {default as app} from '/lib/enonic/util/app';
export {default as content} from '/lib/enonic/util/content';
export {default as data} from '/lib/enonic/util/data';
export {default as region} from '/lib/enonic/util/region';
export {default as object} from '/lib/enonic/util/object';
export {
	/*
	isNotSet,
	isSet,
	ifSetPassToFunction,
	*/
	toStr,
	default as value/*,
	valueOr,
	valueOrEmptyString*/
} from '/lib/enonic/util/value';

/**
 * Log data
 * @param {*} data
 */
export const log = data => log.info('UTIL log %s', JSON.stringify(data, null, 4));
