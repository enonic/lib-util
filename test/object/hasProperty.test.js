var _testdata = require('./testdata.js');
var _object   = require('../../src/main/resources/site/lib/enonic/util/object.js');
var _assert   = require('assert');

var deepStrictEqual = _assert.deepStrictEqual;
var doesNotThrow    = _assert.doesNotThrow
var ok              = _assert.ok;
var throws          = _assert.throws;

var hasProperty     = _object.hasProperty;

var A_FUNCTION = _testdata.A_FUNCTION
var NOW        = _testdata.NOW;
var OBJ        = _testdata.OBJ;


describe('object', function() {
  describe('hasProperty', function() {
    it('throws on missing arguments', function() {
      throws(function() {hasProperty()});
      throws(function() {hasProperty(undefined)});
      throws(function() {hasProperty(true)});
      throws(function() {hasProperty({})});
      throws(function() {hasProperty([])});
      throws(function() {hasProperty(42)});
      throws(function() {hasProperty('foo')});
      throws(function() {hasProperty(new Date())});
      throws(function() {hasProperty(A_FUNCTION)});
      throws(function() {hasProperty(-42)});
      throws(function() {hasProperty(3.14)});
      throws(function() {hasProperty(-3.14)});
      throws(function() {hasProperty(Infinity)});
      throws(function() {hasProperty(-Infinity)});
      throws(function() {hasProperty(false)});
      throws(function() {hasProperty(null)});
      throws(function() {hasProperty(0)});
      throws(function() {hasProperty(NaN)});
      throws(function() {hasProperty('')});
    }); // throws on missing arguments


    it('throws on first argument non-object', function() {
      throws(function() {hasProperty(undefined, 'string')});
      throws(function() {hasProperty(true, 'string')});
      doesNotThrow(function() {hasProperty({}, 'string')});
      doesNotThrow(function() {hasProperty([], 'string')});
      throws(function() {hasProperty(42, 'string')});
      doesNotThrow(function() {hasProperty(new Date(), 'string')});
      doesNotThrow(function() {hasProperty(A_FUNCTION, 'string')});
      throws(function() {hasProperty('foo', 'string')});
      throws(function() {hasProperty(-42, 'string')});
      throws(function() {hasProperty(3.14, 'string')});
      throws(function() {hasProperty(-3.14, 'string')});
      throws(function() {hasProperty(Infinity, 'string')});
      throws(function() {hasProperty(-Infinity, 'string')});
      throws(function() {hasProperty(false, 'string')});
      throws(function() {hasProperty(null, 'string')});
      throws(function() {hasProperty(0, 'string')});
      throws(function() {hasProperty(NaN, 'string')});
      throws(function() {hasProperty('', 'string')});
    }); // throws on first argument non-object


    it('throws on second argument non-string', function() {
      throws(function() {hasProperty(OBJ)});
      throws(function() {hasProperty(OBJ, undefined)});
      throws(function() {hasProperty(OBJ, true)});
      throws(function() {hasProperty(OBJ, {})});
      throws(function() {hasProperty(OBJ, [])});
      throws(function() {hasProperty(OBJ, 42)});
      throws(function() {hasProperty(OBJ, new Date())});
      throws(function() {hasProperty(OBJ, A_FUNCTION)});
      throws(function() {hasProperty(OBJ, -42)});
      throws(function() {hasProperty(OBJ, 3.14)});
      throws(function() {hasProperty(OBJ, -3.14)});
      throws(function() {hasProperty(OBJ, Infinity)});
      throws(function() {hasProperty(OBJ, -Infinity)});
      throws(function() {hasProperty(OBJ, false)});
      throws(function() {hasProperty(OBJ, null)});
      throws(function() {hasProperty(OBJ, 0)});
      throws(function() {hasProperty(OBJ, NaN)});
      doesNotThrow(function() {hasProperty(OBJ, '')});
    }); // throws on second argument non-string


    it('returns true', function() {
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


    it('returns false', function() {
      deepStrictEqual(hasProperty(OBJ, ''), false);
      deepStrictEqual(hasProperty(OBJ, 'nope'), false);
      deepStrictEqual(hasProperty(OBJ, 'one.nope'), false);
      deepStrictEqual(hasProperty(OBJ, 'one.two.nope'), false);
      deepStrictEqual(hasProperty(OBJ, 'one.two.three.nope'), false);
    }); // false
  }); //
}); // object
