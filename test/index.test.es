/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-eval */
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
	describe('export', () => {
		[
			'app',
			'content',
			'data',
			'object',
			'region',
			'value'
		].forEach((v) => {
			it(`${v} is a object`, () => { deepStrictEqual('object', typeof eval(v)); });
		});

		[
			'log',
			'toStr',

			'app.getJsonName',
			'app.getShortName',
			'getJsonName',
			'getShortName',

			'get',
			'exists',
			'getParent',
			'getPath',
			'getProperty',

			'dataIsInt',
			'dataIsSet',
			'deleteEmptyProperties',
			'forceArray',
			'trimArray',

			'dlv',
			'hasProperty',

			'getRegion',

			'isObject',
			'isString',
			'isSet',
			'isNotSet',
			'isInt',
			'valueToStr',
			'valueOrEmptyString',
			'valueOr',
			'ifSetPassToFunction'
		].forEach((v) => {
			it(`${v} is a function`, () => { deepStrictEqual('function', typeof eval(v)); });
		});
	});
});
