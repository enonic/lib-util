var assert = require('assert');

var _value              = require('../src/main/resources/site/lib/enonic/util/value.js');
var isSet               = _value.isSet;
var isNotSet            = _value.isNotSet;
var valueOrEmptyString  = _value.valueOrEmptyString;
var valueOr             = _value.valueOr;
var ifSetPassToFunction = _value.ifSetPassToFunction;

describe('util', function() {

    describe('isSet(value)', function() {
        it('should return false when no parameter is passed', function() {
            assert.strictEqual(false, isSet());
        });
        [null,undefined].forEach(function (value) {
            it('should return false when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(false, isSet(value));
            });
        });
        ['',"",[],{},0,'0'].forEach(function (value) {
            it('should return true when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(true, isSet(value));
            });
        });
    });

    describe('isNotSet(value)', function() {
        it('should return true when no parameter is passed', function() {
            assert.strictEqual(true, isNotSet());
        });
        [null,undefined].forEach(function (value) {
            it('should return true when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(true, isNotSet(value));
            });
        });
        ['',"",[],{},0,'0'].forEach(function (value) {
            it('should return false when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(false, isNotSet(value));
            });
        });
    });


    describe('valueOrEmptyString(value)', function() {
        it('should return an empty string when no parameter is passed', function() {
            assert.strictEqual('', valueOrEmptyString());
        });
        [null,undefined].forEach(function (value) {
            it('should return an empty string when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual('', valueOrEmptyString(value));
            });
        });
        ['',"",[],{},0,'0'].forEach(function (value) {
            it('should return the value when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(value, valueOrEmptyString(value));
            });
        });
    });

    describe('valueOr(value, or)', function() {
        it("should throw the Error('valueOr requires two parameters!') when less than two parameters are passed", function() {
            assert.throws(function() { valueOr(); }, /^Error: valueOr requires two parameters!$/);
            assert.throws(function() { valueOr('value'); }, /^Error: valueOr requires two parameters!$/);
        });
        it('should NOT throw an error when two parameters are passed', function() {
            assert.doesNotThrow(function() { valueOr('value', 'or'); }, /.*/);
        });
        [null,undefined].forEach(function (value) {
            it('should return the or parameter when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual('or', valueOr(value, 'or'));
            });
        });
        ['',"",[],{},0,'0'].forEach(function (value) {
            it('should return the value when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(value, valueOr(value, 'or'));
            });
        });
    });

    describe('ifSetPassToFunction(value, function(v) { return v; })', function() {
        it("should throw the Error('ifSetPassToFunction requires two parameters!') when less than two parameters are passed", function() {
            assert.throws(function() { ifSetPassToFunction(); }, /^Error: ifSetPassToFunction requires two parameters!$/);
            assert.throws(function() { ifSetPassToFunction('value'); }, /^Error: ifSetPassToFunction requires two parameters!$/);
        });
        it("should throw the Error('ifSetPassToFunction second parameter need to be of type function!') when the second parameter is NOT of type function", function() {
            assert.throws(function() { ifSetPassToFunction('value', 'notFunction'); }, /^Error: ifSetPassToFunction second parameter need to be of type function!$/);
        });
        it('should NOT throw an error when  when the second parameter is of type function', function() {
            assert.doesNotThrow(function() { valueOr('value', function(v) { return v; }); }, /.*/);
        });
        [null,undefined].forEach(function (value) {
            it('should return undefined when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(undefined, ifSetPassToFunction(value, function(v) { return v; }));
            });
        });
        ['',"",[],{},0,'0'].forEach(function (value) {
            it('should pass the value to the function expression and run it when the value is ' + JSON.stringify(value), function() {
                assert.strictEqual(value, ifSetPassToFunction(value, function(v) { return v; }));
            });
        });
    });

}); // util
