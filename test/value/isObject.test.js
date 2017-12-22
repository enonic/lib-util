var _assert = require('assert');
var _value  = require('../../src/main/resources/site/lib/enonic/util/value.js');

var deepStrictEqual = _assert.deepStrictEqual;
var isObject        = _value.isObject;

var aFunction = function() {};

describe('value', function() {
  describe('isObject', function() {
    it('return true', function() {
      deepStrictEqual(isObject({}), true);
      deepStrictEqual(isObject([]), true);
      deepStrictEqual(isObject(new Date()), true);
      deepStrictEqual(isObject(aFunction), true);
    });

    it('return false', function() {
      deepStrictEqual(isObject(true), false);
      deepStrictEqual(isObject(42), false);
      deepStrictEqual(isObject('foo'), false);
      deepStrictEqual(isObject(-42), false);
      deepStrictEqual(isObject(3.14), false);
      deepStrictEqual(isObject(-3.14), false);
      deepStrictEqual(isObject(Infinity), false);
      deepStrictEqual(isObject(-Infinity), false);

      deepStrictEqual(isObject(false), false);
      deepStrictEqual(isObject(null), false);
      deepStrictEqual(isObject(undefined), false);
      deepStrictEqual(isObject(), false);
      deepStrictEqual(isObject(0), false);
      deepStrictEqual(isObject(NaN), false);
      deepStrictEqual(isObject(''), false);
    }); // false
  }); // isObject
}); // value
