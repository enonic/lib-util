/* global describe it */
import {deepStrictEqual} from 'assert';
import {trimArray} from '../../build/resources/main/lib/util/data';


const A_FUNCTION = () => {};
const NOW = new Date();


describe('data', () => {
	describe('trimArray', () => {
		it('Removes undefined', () => deepStrictEqual([], trimArray([undefined])));
		it('Removes null', () => deepStrictEqual([], trimArray([null])));
		it('Removes emptystring', () => deepStrictEqual([], trimArray([''])));

		it('Keeps string', () => deepStrictEqual(['s'], trimArray(['s'])));
		it('Keeps object', () => deepStrictEqual([{}], trimArray([{}])));
		it('Keeps array', () => deepStrictEqual([[]], trimArray([[]])));

		it('Keeps boolean true', () => deepStrictEqual([true], trimArray([true])));
		it('Keeps boolean false', () => deepStrictEqual([false], trimArray([false])));

		it('Keeps 0', () => deepStrictEqual([0], trimArray([0])));
		it('Keeps positive integer', () => deepStrictEqual([1], trimArray([1])));
		it('Keeps negative integer', () => deepStrictEqual([-1], trimArray([-1])));
		it('Keeps positive float', () => deepStrictEqual([3.14], trimArray([3.14])));
		it('Keeps negative float', () => deepStrictEqual([-3.14], trimArray([-3.14])));
		it('Keeps NaN', () => deepStrictEqual([NaN], trimArray([NaN])));
		it('Keeps positive Infinity', () => deepStrictEqual([Infinity], trimArray([Infinity])));
		it('Keeps negative Infinity', () => deepStrictEqual([-Infinity], trimArray([-Infinity])));

		it('Keeps date object', () => deepStrictEqual([NOW], trimArray([NOW])));
		it('Keeps functions', () => deepStrictEqual([A_FUNCTION], trimArray([A_FUNCTION])));
	});
});
