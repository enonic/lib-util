/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
import proxyquire from 'proxyquire';
import {deepStrictEqual} from 'assert';

const proxyquireStrict = proxyquire.noCallThru();

const libXpPortalStub = {};

const content = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content', {
	'/lib/xp/content': {},
	'/lib/xp/portal': libXpPortalStub
});
//console.log('content:', content);

const region = proxyquireStrict('../build/resources/main/site/lib/enonic/util/region', {
	'/lib/xp/portal': libXpPortalStub
});
//console.log('region:', region);


const index = proxyquireStrict('../build/resources/main/site/lib/enonic/util/index', {
	'./content': content,
	'./region': region
});
//console.log('index:', index);

const {
	app,
	data,
	object,
	toStr,
	value,
	log
} = index;

const {getShortName, getJsonName} = app;
const {
	get, exists, getParent, getPath, getProperty
} = content;
const {
	isSet: dataIsSet, isInt: dataIsInt, forceArray, trimArray, deleteEmptyProperties
} = data;
const {dlv, hasProperty} = object;
const {get: getRegion} = region;
const {
	isObject, isString, isSet, isNotSet, isInt, toStr: valueToStr, valueOrEmptyString, valueOr, ifSetPassToFunction
} = value;

describe('index', () => {
	it('exports the correct things', () => {
		deepStrictEqual('function', typeof log);
		deepStrictEqual('function', typeof toStr);

		deepStrictEqual('object', typeof app);
		deepStrictEqual('function', typeof get);
		deepStrictEqual('function', typeof exists);
		deepStrictEqual('function', typeof getParent);
		deepStrictEqual('function', typeof getPath);
		deepStrictEqual('function', typeof getProperty);

		deepStrictEqual('object', typeof content);
		deepStrictEqual('function', typeof getShortName);
		deepStrictEqual('function', typeof getJsonName);

		deepStrictEqual('object', typeof data);
		deepStrictEqual('function', typeof dataIsSet);
		deepStrictEqual('function', typeof dataIsInt);
		deepStrictEqual('function', typeof forceArray);
		deepStrictEqual('function', typeof trimArray);
		deepStrictEqual('function', typeof deleteEmptyProperties);

		deepStrictEqual('object', typeof object);
		deepStrictEqual('function', typeof dlv);
		deepStrictEqual('function', typeof hasProperty);

		deepStrictEqual('object', typeof region);
		deepStrictEqual('function', typeof getRegion);

		deepStrictEqual('object', typeof value);
		deepStrictEqual('function', typeof isObject);
		deepStrictEqual('function', typeof isString);
		deepStrictEqual('function', typeof isSet);
		deepStrictEqual('function', typeof isNotSet);
		deepStrictEqual('function', typeof isInt);
		deepStrictEqual('function', typeof valueToStr);
		deepStrictEqual('function', typeof valueOrEmptyString);
		deepStrictEqual('function', typeof valueOr);
		deepStrictEqual('function', typeof ifSetPassToFunction);
	});
});
