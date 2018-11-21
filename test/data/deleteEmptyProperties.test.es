/* global describe it */
import {deepStrictEqual} from 'assert';
import {deleteEmptyProperties} from '../../build/resources/main/site/lib/enonic/util/data';
//import {A_FUNCTION, NOW, OBJ} from '../object/testdata'; // This makes other tests fail!

const A_FUNCTION = () => {};
const NOW = new Date();

const OBJ = {
	one: {
		two: {
			three: true
		}
	},

	keyUndefined: undefined,

	true: true,
	emptyObj: {},
	emptyArr: [],
	int: 42,
	string: 'foo',
	dateObj: NOW,
	fn: A_FUNCTION,
	negInt: -42,
	float: 3.14,
	negFloat: -3.14,
	inf: Infinity,
	negInf: -Infinity,

	false: false,
	null: null,
	zero: 0,
	nan: NaN,
	emptyString: ''
};


describe('data', () => {
	describe('deleteEmptyProperties', () => {
		it('Modifes the object passed in and returns undefined', () => {
			const res = deleteEmptyProperties(OBJ);
			//console.log(OBJ);
			deepStrictEqual(undefined, res);
			deepStrictEqual({
				one: {
					two: {
						three: true
					}
				},

				keyUndefined: undefined,

				true: true,
				emptyObj: {},
				emptyArr: [],
				int: 42,
				string: 'foo',
				dateObj: NOW,
				fn: A_FUNCTION,
				negInt: -42,
				float: 3.14,
				negFloat: -3.14,
				inf: Infinity,
				negInf: -Infinity,

				false: false,
				null: null,
				zero: 0,
				nan: NaN//,
				//emptyString: ''
			}, OBJ);
		});
	});
});
