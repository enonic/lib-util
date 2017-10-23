/////////////////////////////////////////////////////////////////////////
// Functionality to help with handling returned data from XP (json)    //
/////////////////////////////////////////////////////////////////////////

var libs = {
    value: require('./value')
};

// For backwards compatibility:
exports.isSet = libs.value.isSet;
exports.isInt = libs.value.isInt;

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
