/* global describe it before after */
/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable no-eval */
import proxyquire from 'proxyquire';
import {deepStrictEqual} from 'assert';

const proxyquireStrict = proxyquire.noCallThru();

import {
	A_CONTENT,
	DISPLAY_NAME, DATA,
	CHILD_ID, CHILD_PATH, CHILD_CONTENT, NAME, PATH, UUID // eslint-disable-line no-unused-vars
} from './fake/constants';
import fakeContent from './fake/content';
import {Log, LogWarnings} from './fake/log'; // eslint-disable-line no-unused-vars
import fakePortal from './fake/portal';


const libGetParent = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content/getParent', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal
});

const libGetTree = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content/getTree', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal
});

const content = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal,
	'./content/getParent': libGetParent,
	'./content/getTree': libGetTree
});

const {
	exists, get, getPath, getParent, getProperty, getTree
} = content;
//console.log('content:', content);

describe('content', () => {
	before(() => {
		global.log = LogWarnings;
	});
	after(() => {
		delete global.log;
	});
	describe('export', () => {
		it('default in an object', () => deepStrictEqual('object', typeof content));
		[
			'content.exists',
			'content.get',
			'content.getPath',
			'content.getParent',
			'content.getProperty',

			'exists',
			'get',
			'getPath',
			'getParent',
			'getProperty',
			'getTree'
		].forEach((v) => {
			it(`${v} is a function`, () => { deepStrictEqual('function', typeof eval(v)); });
		});
	});
	describe('functions', () => {
		it('exists() false', () => deepStrictEqual(false, exists()));
		it('exists(PATH) true', () => deepStrictEqual(true, exists(PATH)));
		it('exists(UUID) true', () => deepStrictEqual(true, exists(UUID)));
		it('exists false', () => deepStrictEqual(false, exists('/non-existant')));

		it('get works', () => deepStrictEqual(A_CONTENT, get()));

		it('getParent() --> null', () => deepStrictEqual(null, getParent()));
		it('getParent({key: UUID}) --> null', () => deepStrictEqual(null, getParent({key: UUID})));
		it('getParent({key: PATH}) --> null', () => deepStrictEqual(null, getParent({key: PATH})));
		it('getParent({content: A_CONTENT}) --> null', () => deepStrictEqual(null, getParent({content: A_CONTENT})));
		it('getParent({key: CHILD_ID}) --> A_CONTENT', () => deepStrictEqual(A_CONTENT, getParent({key: CHILD_ID})));
		it('getParent({key: CHILD_PATH}) --> A_CONTENT', () => deepStrictEqual(A_CONTENT, getParent({key: CHILD_PATH})));
		it('getParent({content: CHILD_CONTENT}) --> A_CONTENT', () => deepStrictEqual(A_CONTENT, getParent({content: CHILD_CONTENT})));

		it('getPath() works', () => deepStrictEqual(PATH, getPath()));
		it('getPath(PATH) works', () => deepStrictEqual(PATH, getPath(PATH)));
		it('getPath(UUID) works', () => deepStrictEqual(PATH, getPath(UUID)));

		it('getProperty() --> null', () => deepStrictEqual(null, getProperty()));
		it('getProperty(UUID) --> null', () => deepStrictEqual(null, getProperty(UUID)));
		it("getProperty(UUID, '_name') --> NAME", () => deepStrictEqual(NAME, getProperty(UUID, '_name')));
		it("getProperty(UUID, '_path') --> PATH", () => deepStrictEqual(PATH, getProperty(UUID, '_path')));
		it("getProperty(UUID, '_id') --> UUID", () => deepStrictEqual(UUID, getProperty(UUID, '_id')));
		it("getProperty('non-existant', '_id') --> null", () => deepStrictEqual(null, getProperty('non-existant', '_id')));
		it("getProperty(UUID, 'non-existant') --> undefined", () => deepStrictEqual(undefined, getProperty(UUID, 'non-existant')));

		it('getTree(levels: 1)', () => deepStrictEqual({
			content: {
				displayName: DISPLAY_NAME,
				data: DATA
			}
		}, getTree({levels: 1})));
	});
});
