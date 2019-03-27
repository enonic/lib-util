/* global describe it */
var _testdata = require('./testdata.js');
var _object	 = require('../../build/resources/main/lib/util/object.js');
var _assert	 = require('assert');

var deepStrictEqual = _assert.deepStrictEqual;
var ok = _assert.ok;
var throws = _assert.throws;

var dlv = _object.dlv;

var A_FUNCTION = _testdata.A_FUNCTION
var NOW = _testdata.NOW;
var OBJ = _testdata.OBJ;


describe('object', () => {
	describe('dlv', () => {
		it('undefined', () => {
			throws(() => { dlv(); });
			throws(() => { dlv(undefined); });
			throws(() => { dlv(undefined, undefined); });
			throws(() => { dlv(undefined, undefined, undefined); });

			deepStrictEqual(dlv(undefined, 'whatever'), undefined);
			deepStrictEqual(dlv(undefined, 'whatever', 'fallback'), 'fallback');

			deepStrictEqual(dlv(OBJ, 'nope'), undefined);
			deepStrictEqual(dlv(OBJ, 'nope', 'fallback'), 'fallback');
			deepStrictEqual(dlv(OBJ, 'nope', undefined), undefined);

			deepStrictEqual(dlv(OBJ, 'keyUndefined'), undefined);
			deepStrictEqual(dlv(OBJ, 'keyUndefined', 'fallback'), 'fallback');
		}); // undefined

		it('truthy', () => {
			deepStrictEqual(dlv(OBJ, 'true'), true);
			deepStrictEqual(dlv(OBJ, 'emptyObj'), {});
			deepStrictEqual(dlv(OBJ, 'emptyArr'), []);
			deepStrictEqual(dlv(OBJ, 'int'), 42);
			deepStrictEqual(dlv(OBJ, 'string'), 'foo');
			deepStrictEqual(dlv(OBJ, 'dateObj'), NOW);
			deepStrictEqual(dlv(OBJ, 'fn'), A_FUNCTION);
			deepStrictEqual(dlv(OBJ, 'true'), true);
			deepStrictEqual(dlv(OBJ, 'negInt'), -42);
			deepStrictEqual(dlv(OBJ, 'float'), 3.14);
			deepStrictEqual(dlv(OBJ, 'negFloat'), -3.14);
			deepStrictEqual(dlv(OBJ, 'inf'), Infinity);
			deepStrictEqual(dlv(OBJ, 'negInf'), -Infinity);

			deepStrictEqual(dlv(OBJ, 'true', 'fallback'), true);
			deepStrictEqual(dlv(OBJ, 'emptyObj', 'fallback'), {});
			deepStrictEqual(dlv(OBJ, 'emptyArr', 'fallback'), []);
			deepStrictEqual(dlv(OBJ, 'int', 'fallback'), 42);
			deepStrictEqual(dlv(OBJ, 'string', 'fallback'), 'foo');
			deepStrictEqual(dlv(OBJ, 'dateObj', 'fallback'), NOW);
			deepStrictEqual(dlv(OBJ, 'fn', 'fallback'), A_FUNCTION);
			deepStrictEqual(dlv(OBJ, 'true', 'fallback'), true);
			deepStrictEqual(dlv(OBJ, 'negInt', 'fallback'), -42);
			deepStrictEqual(dlv(OBJ, 'float', 'fallback'), 3.14);
			deepStrictEqual(dlv(OBJ, 'negFloat', 'fallback'), -3.14);
			deepStrictEqual(dlv(OBJ, 'inf', 'fallback'), Infinity);
			deepStrictEqual(dlv(OBJ, 'negInf', 'fallback'), -Infinity);
		}); // thruthy

		it('falsy', () => {
			deepStrictEqual(dlv(OBJ, 'false'), false);
			deepStrictEqual(dlv(OBJ, 'null'), null);
			deepStrictEqual(dlv(OBJ, 'zero'), 0);
			ok(Number.isNaN(dlv(OBJ, 'nan')));
			deepStrictEqual(dlv(OBJ, 'emptyString'), '');

			deepStrictEqual(dlv(OBJ, 'false', 'fallback'), false);
			deepStrictEqual(dlv(OBJ, 'null', 'fallback'), null);
			deepStrictEqual(dlv(OBJ, 'zero', 'fallback'), 0);
			ok(Number.isNaN(dlv(OBJ, 'nan', 'fallback')));
			deepStrictEqual(dlv(OBJ, 'emptyString', 'fallback'), '');
		}); // falsy

		it('Nested', () => {
			deepStrictEqual(dlv(OBJ, 'one.two.three'), true);
			deepStrictEqual(dlv(OBJ, 'one.two.three', 'fallback'), true);

			deepStrictEqual(dlv(OBJ, 'nope.two.three'), undefined);
			deepStrictEqual(dlv(OBJ, 'nope.two.three', 'fallback'), 'fallback');

			deepStrictEqual(dlv(OBJ, 'one.nope.three'), undefined);
			deepStrictEqual(dlv(OBJ, 'one.nope.three', 'fallback'), 'fallback');

			deepStrictEqual(dlv(OBJ, 'one.two.nope'), undefined);
			deepStrictEqual(dlv(OBJ, 'one.two.nope', 'fallback'), 'fallback');
		});
	}); // dlv
}); // object
