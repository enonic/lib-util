/* global describe it */
import {deepStrictEqual} from 'assert';
import {isFunction} from '../../build/resources/main/site/lib/enonic/util/value/isFunction';
import {OBJ} from '../object/testdata';

describe('value', () => {
	describe('isFunction', () => {
		it('isFunction(fn) --> true', () => deepStrictEqual(isFunction(OBJ.fn), true));


		it('isFunction() --> false', () => deepStrictEqual(isFunction(), false));
		it('isFunction(undefined) --> false', () => deepStrictEqual(isFunction(undefined), false));
		it('isFunction(null) --> false', () => deepStrictEqual(isFunction(null), false));

		it("isFunction('') --> false", () => deepStrictEqual(isFunction(''), false));
		it('isFunction("") --> false', () => deepStrictEqual(isFunction(""), false)); // eslint-disable-line quotes
		it("isFunction('foo') --> false", () => deepStrictEqual(isFunction('foo'), false));

		it('isFunction({}) --> false', () => deepStrictEqual(isFunction({}), false));
		it('isFunction(obj) --> false', () => deepStrictEqual(isFunction(OBJ), false));

		it('isFunction([]) --> false', () => deepStrictEqual(isFunction([]), false));

		it('isFunction(42) --> false', () => deepStrictEqual(isFunction(42), false));
		it('isFunction(0) --> false', () => deepStrictEqual(isFunction(0), false));
		it('isFunction(-0) --> false', () => deepStrictEqual(isFunction(-0), false));
		it('isFunction(-42) --> false', () => deepStrictEqual(isFunction(-42), false));

		it('isFunction(3.14) --> false', () => deepStrictEqual(isFunction(3.14), false));
		it('isFunction(0.0) --> false', () => deepStrictEqual(isFunction(0.0), false));
		it('isFunction(-0.0) --> false', () => deepStrictEqual(isFunction(-0.0), false));
		it('isFunction(-3.14) --> false', () => deepStrictEqual(isFunction(-3.14), false));

		it('isFunction(true) --> false', () => deepStrictEqual(isFunction(true), false));
		it('isFunction(false) --> false', () => deepStrictEqual(isFunction(false), false));

		it('isFunction(Infinity) --> false', () => deepStrictEqual(isFunction(Infinity), false));
		it('isFunction(-Infinity) --> false', () => deepStrictEqual(isFunction(-Infinity), false));

		it('isFunction(NaN) --> false', () => deepStrictEqual(isFunction(NaN), false));

		it('isFunction(new Date()) --> false', () => deepStrictEqual(isFunction(new Date()), false));
	});
});
