/* global describe it */
import {deepStrictEqual} from 'assert';
import {forceArray} from '../../build/resources/main/site/lib/enonic/util/data';

const A_FUNCTION = () => {};
const NOW = new Date();

describe('data', () => {
	describe('forceArray', () => {
		it('forceArray() --> [undefined]', () => deepStrictEqual(forceArray(), [undefined]));
		it('forceArray(null) --> [null]', () => deepStrictEqual(forceArray(null), [null]));
		it('forceArray([undefined]) --> [undefined]', () => deepStrictEqual(forceArray([undefined]), [undefined]));
		it('forceArray([null]) --> [null]', () => deepStrictEqual(forceArray([null]), [null]));

		it('forceArray([]) --> []', () => deepStrictEqual(forceArray([]), []));

		it('forceArray({}) --> [{}]', () => deepStrictEqual(forceArray({}), [{}]));
		it('forceArray([{}]) --> [{}]', () => deepStrictEqual(forceArray([{}]), [{}]));

		it('forceArray(true) --> [true]', () => deepStrictEqual(forceArray(true), [true]));
		it('forceArray([true]) --> [true]', () => deepStrictEqual(forceArray([true]), [true]));

		it('forceArray(false) --> [false]', () => deepStrictEqual(forceArray(false), [false]));
		it('forceArray([false]) --> [false]', () => deepStrictEqual(forceArray([false]), [false]));

		it("forceArray('') --> ['']", () => deepStrictEqual(forceArray(''), ['']));
		it("forceArray(['']) --> ['']", () => deepStrictEqual(forceArray(['']), ['']));

		it("forceArray('str') --> ['str']", () => deepStrictEqual(forceArray('str'), ['str']));
		it("forceArray(['str']) --> ['str']", () => deepStrictEqual(forceArray(['str']), ['str']));

		it('forceArray(0) --> [0]', () => deepStrictEqual(forceArray(0), [0]));
		it('forceArray([0]) --> [0]', () => deepStrictEqual(forceArray([0]), [0]));

		it('forceArray(1) --> [1]', () => deepStrictEqual(forceArray(1), [1]));
		it('forceArray([1]) --> [1]', () => deepStrictEqual(forceArray([1]), [1]));

		it('forceArray(-1) --> [-1]', () => deepStrictEqual(forceArray(-1), [-1]));
		it('forceArray([-1]) --> [-1]', () => deepStrictEqual(forceArray([-1]), [-1]));

		it('forceArray(0.0) --> [0.0]', () => deepStrictEqual(forceArray(0.0), [0.0]));
		it('forceArray([0.0]) --> [0.0]', () => deepStrictEqual(forceArray([0.0]), [0.0]));

		it('forceArray(-0.0) --> [-0.0]', () => deepStrictEqual(forceArray(-0.0), [-0.0]));
		it('forceArray([-0.0]) --> [-0.0]', () => deepStrictEqual(forceArray([-0.0]), [-0.0]));

		it('forceArray(Infinity) --> [Infinity]', () => deepStrictEqual(forceArray(Infinity), [Infinity]));
		it('forceArray([Infinity]) --> [Infinity]', () => deepStrictEqual(forceArray([Infinity]), [Infinity]));

		it('forceArray(-Infinity) --> [-Infinity]', () => deepStrictEqual(forceArray(-Infinity), [-Infinity]));
		it('forceArray([-Infinity]) --> [-Infinity]', () => deepStrictEqual(forceArray([-Infinity]), [-Infinity]));

		it('forceArray(NaN) --> [NaN]', () => deepStrictEqual(forceArray(NaN), [NaN]));
		it('forceArray([NaN]) --> [NaN]', () => deepStrictEqual(forceArray([NaN]), [NaN]));

		it('forceArray(NOW) --> [NOW]', () => deepStrictEqual(forceArray(NOW), [NOW]));
		it('forceArray([NOW]) --> [NOW]', () => deepStrictEqual(forceArray([NOW]), [NOW]));

		it('forceArray(A_FUNCTION) --> [A_FUNCTION]', () => deepStrictEqual(forceArray(A_FUNCTION), [A_FUNCTION]));
		it('forceArray([A_FUNCTION]) --> [A_FUNCTION]', () => deepStrictEqual(forceArray([A_FUNCTION]), [A_FUNCTION]));
	});
});
