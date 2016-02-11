/**
 * Force data to array
 * Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify
 * @param data
 * @returns {Array}
 */
exports.forceArray = function(data) {
    if (!Array.isArray(data)) {
        data = [data];
    }
    return data;
};

/**
 * Trim empty array elements
 * Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify
 * @param {Array} array - Array to trim
 * @returns {Array} Trimmed array
 */
exports.trimArray = function(array) {
    // Make sure array is an array
    array = exports.forceArray(array);
    var trimmedArray = [];
    for (var i = 0; i < array.length; i++) {
        var empty = true;
        var object = array[i];

        for (var key in object) {
            if (object[key] !== '') {
                empty = false;
            }
        }
        if (!empty) {
            trimmedArray.push(object);
        }
    }
    return trimmedArray;
};

/**
 * Delete all properties with empty string from an object
 * Set 'recursive' to true if you also want to delete properties in nested objects
 * @param {Object} obj
 * @param {boolean} recursive
 */
exports.deleteEmptyProperties = function(obj, recursive) {
    for (var i in obj) {
        if (obj[i] === '') {
            delete obj[i];
        } else if (recursive && typeof obj[i] === 'object') {
            exports.deleteEmptyProperties(obj[i], recursive);
        }
    }
};

/**
 * Check if value is integer
 * @param value
 * @returns {boolean}
 */
exports.isInt = function(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
};


/**
 * checks recursivly if an object have a property
 * @param {string} name of the property to search for
 * @param {object} the object to search in
 * @returns {boolean}
*/
exports.hasProperty = function(propertyName, obj){

  var isPropertyInArray = false;

  if( Object.keys(obj).indexOf(propertyName) == 0 ){
    isPropertyInArray = true;
  } else {
    for( prop in obj ){
      if( typeof(obj[prop]) == 'object'){
        isPropertyInArray = hasProperty( propertyName, obj[prop] );
      }
    }
  }
  return isPropertyInArray;
}
