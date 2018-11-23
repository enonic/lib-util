/* global describe it before after */
/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable no-eval */
import proxyquire from 'proxyquire';
import {deepStrictEqual} from 'assert';

const proxyquireStrict = proxyquire.noCallThru();

import {
	A_CONTENT, CHILD_ID, CHILD_PATH, CHILD_CONTENT, NAME, PATH, UUID // eslint-disable-line no-unused-vars
} from './fake/constants';
import fakeContent from './fake/content';
import fakePortal from './fake/portal';

const content = proxyquireStrict('../build/resources/main/site/lib/enonic/util/content', {
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal
});

const {
	exists, get, getPath, getParent, getProperty
} = content;
//console.log('content:', content);

describe('content', () => {
	before(() => {
		global.log = {
			debug: () => {}, //console.log,
			info: () => {} //console.log
		};
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
			'getProperty'
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

		it('getParent() --> undefined', () => deepStrictEqual(undefined, getParent()));
		it('getParent({key: UUID}) --> undefined', () => deepStrictEqual(undefined, getParent({key: UUID})));
		it('getParent({key: PATH}) --> undefined', () => deepStrictEqual(undefined, getParent({key: PATH})));
		it('getParent({content: A_CONTENT}) --> undefined', () => deepStrictEqual(undefined, getParent({content: A_CONTENT})));
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
	});
});
