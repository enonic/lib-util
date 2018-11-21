/* global describe it */
var _testdata = require('./testdata.js');
var _object	 = require('../../build/resources/main/site/lib/enonic/util/object.js');
var _assert	 = require('assert');

var deepStrictEqual = _assert.deepStrictEqual;
var doesNotThrow = _assert.doesNotThrow
var ok = _assert.ok;
var throws = _assert.throws;

var hasProperty = _object.hasProperty;

var A_FUNCTION = _testdata.A_FUNCTION
var NOW = _testdata.NOW;
var OBJ = _testdata.OBJ;


describe('object', () => {
	describe('hasProperty', () => {
		it('throws on missing arguments', () => {
			throws(() => { hasProperty(); });
			throws(() => { hasProperty(undefined); });
			throws(() => { hasProperty(true); });
			throws(() => { hasProperty({}); });
			throws(() => { hasProperty([]); });
			throws(() => { hasProperty(42); });
			throws(() => { hasProperty('foo'); });
			throws(() => { hasProperty(new Date()); });
			throws(() => { hasProperty(A_FUNCTION); });
			throws(() => { hasProperty(-42); });
			throws(() => { hasProperty(3.14); });
			throws(() => { hasProperty(-3.14); });
			throws(() => { hasProperty(Infinity); });
			throws(() => { hasProperty(-Infinity); });
			throws(() => { hasProperty(false); });
			throws(() => { hasProperty(null); });
			throws(() => { hasProperty(0); });
			throws(() => { hasProperty(NaN); });
			throws(() => { hasProperty(''); });
		}); // throws on missing arguments


		it('throws on first argument non-object', () => {
			throws(() => { hasProperty(undefined, 'string'); });
			throws(() => { hasProperty(true, 'string'); });
			doesNotThrow(() => { hasProperty({}, 'string'); });
			doesNotThrow(() => { hasProperty([], 'string'); });
			throws(() => { hasProperty(42, 'string'); });
			doesNotThrow(() => { hasProperty(new Date(), 'string'); });
			doesNotThrow(() => { hasProperty(A_FUNCTION, 'string'); });
			throws(() => { hasProperty('foo', 'string'); });
			throws(() => { hasProperty(-42, 'string'); });
			throws(() => { hasProperty(3.14, 'string'); });
			throws(() => { hasProperty(-3.14, 'string'); });
			throws(() => { hasProperty(Infinity, 'string'); });
			throws(() => { hasProperty(-Infinity, 'string'); });
			throws(() => { hasProperty(false, 'string'); });
			throws(() => { hasProperty(null, 'string'); });
			throws(() => { hasProperty(0, 'string'); });
			throws(() => { hasProperty(NaN, 'string'); });
			throws(() => { hasProperty('', 'string'); });
		}); // throws on first argument non-object


		it('throws on second argument non-string', () => {
			throws(() => { hasProperty(OBJ); });
			throws(() => { hasProperty(OBJ, undefined); });
			throws(() => { hasProperty(OBJ, true); });
			throws(() => { hasProperty(OBJ, {}); });
			throws(() => { hasProperty(OBJ, []); });
			throws(() => { hasProperty(OBJ, 42); });
			throws(() => { hasProperty(OBJ, new Date()); });
			throws(() => { hasProperty(OBJ, A_FUNCTION); });
			throws(() => { hasProperty(OBJ, -42); });
			throws(() => { hasProperty(OBJ, 3.14); });
			throws(() => { hasProperty(OBJ, -3.14); });
			throws(() => { hasProperty(OBJ, Infinity); });
			throws(() => { hasProperty(OBJ, -Infinity); });
			throws(() => { hasProperty(OBJ, false); });
			throws(() => { hasProperty(OBJ, null); });
			throws(() => { hasProperty(OBJ, 0); });
			throws(() => { hasProperty(OBJ, NaN); });
			doesNotThrow(() => { hasProperty(OBJ, ''); });
		}); // throws on second argument non-string


		it('returns true', () => {
			deepStrictEqual(hasProperty(OBJ, 'one'), true);
			deepStrictEqual(hasProperty(OBJ, 'one.two'), true);
			deepStrictEqual(hasProperty(OBJ, 'one.two.three'), true);

			deepStrictEqual(hasProperty(OBJ, 'true'), true);
			deepStrictEqual(hasProperty(OBJ, 'emptyObj'), true);
			deepStrictEqual(hasProperty(OBJ, 'emptyArr'), true);
			deepStrictEqual(hasProperty(OBJ, 'int'), true);
			deepStrictEqual(hasProperty(OBJ, 'string'), true);
			deepStrictEqual(hasProperty(OBJ, 'dateObj'), true);
			deepStrictEqual(hasProperty(OBJ, 'fn'), true);
			deepStrictEqual(hasProperty(OBJ, 'negInt'), true);
			deepStrictEqual(hasProperty(OBJ, 'float'), true);
			deepStrictEqual(hasProperty(OBJ, 'negFloat'), true);
			deepStrictEqual(hasProperty(OBJ, 'inf'), true);
			deepStrictEqual(hasProperty(OBJ, 'negInf'), true);
			deepStrictEqual(hasProperty(OBJ, 'false'), true);
			deepStrictEqual(hasProperty(OBJ, 'null'), true);
			deepStrictEqual(hasProperty(OBJ, 'zero'), true);
			deepStrictEqual(hasProperty(OBJ, 'nan'), true);
			deepStrictEqual(hasProperty(OBJ, 'emptyString'), true);
		}); // true

		it('returns false', () => {
			deepStrictEqual(hasProperty(OBJ, ''), false);
			deepStrictEqual(hasProperty(OBJ, 'nope'), false);
			deepStrictEqual(hasProperty(OBJ, 'one.nope'), false);
			deepStrictEqual(hasProperty(OBJ, 'one.two.nope'), false);
			deepStrictEqual(hasProperty(OBJ, 'one.two.three.nope'), false);
		}); // false
	}); //
}); // object
