exports.A_FUNCTION = function() {};
exports.NOW = new Date();

exports.OBJ = {
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
  dateObj: exports.NOW,
  fn: exports.A_FUNCTION,
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
