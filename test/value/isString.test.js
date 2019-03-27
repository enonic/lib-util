var _assert = require('assert');
var _value  = require('../../build/resources/main/lib/util/value.js');

var deepStrictEqual = _assert.deepStrictEqual;
var isString        = _value.isString;

var aFunction = function() {};

describe('value', function() {
  describe('isString', function() {
    it('return true', function() {
      deepStrictEqual(isString('foo'), true);
      deepStrictEqual(isString(''), true);
    });

    it('return false', function() {
      deepStrictEqual(isString({}), false);
      deepStrictEqual(isString([]), false);
      deepStrictEqual(isString(new Date()), false);
      deepStrictEqual(isString(aFunction), false);
      deepStrictEqual(isString(true), false);
      deepStrictEqual(isString(42), false);
      deepStrictEqual(isString(-42), false);
      deepStrictEqual(isString(3.14), false);
      deepStrictEqual(isString(-3.14), false);
      deepStrictEqual(isString(Infinity), false);
      deepStrictEqual(isString(-Infinity), false);

      deepStrictEqual(isString(false), false);
      deepStrictEqual(isString(null), false);
      deepStrictEqual(isString(undefined), false);
      deepStrictEqual(isString(), false);
      deepStrictEqual(isString(0), false);
      deepStrictEqual(isString(NaN), false);
    }); // false
  }); // isString
}); // value
