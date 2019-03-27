/* global describe it before after */
import {deepStrictEqual} from 'assert';
import app, {getShortName, getJsonName} from '../build/resources/main/lib/util/app';


describe('app', () => {
	describe('export', () => {
		it('default in an object', () => deepStrictEqual('object', typeof app));
		it('default.getJsonName in an function', () => deepStrictEqual('function', typeof app.getJsonName));
		it('default.getShortName in an function', () => deepStrictEqual('function', typeof app.getShortName));
		it('getJsonName in an function', () => deepStrictEqual('function', typeof getJsonName));
		it('getShortName in an function', () => deepStrictEqual('function', typeof getShortName));
	});
	describe('functions', () => {
		before(() => {
			global.app = {name: 'com.enonic.app.example'};
		});
		after(() => {
			delete global.app;
		});
		it('getJsonName works', () => deepStrictEqual('com-enonic-app-example', getJsonName()));
		it('getShortName works', () => deepStrictEqual('example', getShortName()));
	});
});
