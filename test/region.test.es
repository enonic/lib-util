/* global describe it before after */
/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
import proxyquire from 'proxyquire';
import {deepStrictEqual} from 'assert';
import fakePortal, {BODY_REGION} from './fake/portal';

const proxyquireStrict = proxyquire.noCallThru();


const region = proxyquireStrict('../build/resources/main/lib/util/region', {
	'/lib/xp/portal': fakePortal
});
const {get} = region;

describe('region', () => {
	before(() => {
		global.log = {
			//debug: console.log,
			debug: () => {},
			//info: console.log
			info: () => {}
		};
	});
	after(() => {
		delete global.log;
	});
	describe('export', () => {
		it('default in an object', () => deepStrictEqual('object', typeof region));
	});
	[
		'region.get',
		'get',
	].forEach((v) => {
		it(`${v} is a function`, () => { deepStrictEqual('function', typeof eval(v)); });
	});
	describe('functions', () => {
		it('get() --> [BODY_REGION]', () => deepStrictEqual([BODY_REGION], get()));
	});
});
