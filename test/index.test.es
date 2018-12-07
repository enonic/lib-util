/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-eval */
import proxyquire from 'proxyquire';
import {deepStrictEqual} from 'assert';

const proxyquireStrict = proxyquire.noCallThru();

const fakeAdmin = {};
const fakePortal = {};
const fakeContent = {};

const libGetParent = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content/getParent', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal
});
//console.log('libGetParent:', libGetParent);

const libGetTree = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content/getTree', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal
});

const libGetLocale = proxyquireStrict('../build/resources/main/site/lib/enonic/util/portal/getLocale', {
	'/lib/xp/admin': fakeAdmin,
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal,
	'../content/getParent': libGetParent
});
//console.log('libGetLocale:', libGetLocale);

const libPortal = proxyquireStrict('../build/resources/main/site/lib/enonic/util/portal', {
	'./getLocale': libGetLocale
});
//console.log('libPortal:', libPortal);

const libContent = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal,
	'./content/getParent': libGetParent,
	'./content/getTree': libGetTree
});
//console.log('libContent:', libContent);

const libRegion = proxyquireStrict('../build/resources/main/site/lib/enonic/util/region', {
	'/lib/xp/portal': fakePortal
});
//console.log('libRegion:', libRegion);


const index = proxyquireStrict('../build/resources/main/site/lib/enonic/util/index', {
	'./content': libContent,
	'./portal': libPortal,
	'./region': libRegion
});
//console.log('index:', index);


/* eslint-disable no-unused-vars */
const {
	app: {getShortName, getJsonName},
	data: {
		isSet: dataIsSet, isInt: dataIsInt, forceArray, trimArray, deleteEmptyProperties
	},
	content: {
		get, exists, getParent, getPath, getProperty, getTree
	},
	object: {dlv, hasProperty},
	portal: {getLocale},
	toStr,
	region: {get: getRegion},
	value: {
		isFunction, isObject, isString, isSet, isNotSet, isInt, valueOrEmptyString, valueOr, ifSetPassToFunction
	},
	log
} = index;
/* eslint-enable no-unused-vars */


describe('index', () => {
	describe('export', () => {
		[
			'index.app',
			'index.content',
			'index.data',
			'index.object',
			'index.portal',
			'index.region',
			'index.value'
		].forEach((v) => {
			it(`${v} is a object`, () => { deepStrictEqual('object', typeof eval(v)); });
		});

		[
			'log',
			'toStr',

			'getJsonName',
			'getShortName',

			'get',
			'exists',
			'getParent',
			'getPath',
			'getProperty',
			'getTree',

			'dataIsInt',
			'dataIsSet',
			'deleteEmptyProperties',
			'forceArray',
			'trimArray',

			'dlv',
			'hasProperty',

			'getLocale',

			'getRegion',

			'isFunction',
			'isObject',
			'isString',
			'isSet',
			'isNotSet',
			'isInt',
			'valueOrEmptyString',
			'valueOr',
			'ifSetPassToFunction'
		].forEach((v) => {
			it(`${v} is a function`, () => { deepStrictEqual('function', typeof eval(v)); });
		});
	});
});
