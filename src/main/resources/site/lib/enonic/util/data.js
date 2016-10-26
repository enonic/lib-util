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
 * @param {object} the object to search in
 * @param {string} name of the property to search for
 * @returns {boolean}
*/
exports.hasProperty = function(object, property){

    var isPropertyInArray = false;

    if( Object.keys(object).indexOf(property) == 0 ){
        isPropertyInArray = true;
    } else {

        for(var prop in object){
            if( typeof(object[prop]) == 'object'){
                isPropertyInArray = this.hasProperty( object[prop], property  );
            }
            if(isPropertyInArray) return isPropertyInArray;
        }
    }
    return isPropertyInArray;
};


/**
* checks if that property path exists
* @param {object} object to search in
* @param {string} the path to look for eg. 'data.property.foo.bar'
* @returns {boolean}
*/
exports.validatePath = function(object, properties){

    var path = [],
        root = object,
        prop;

    if ( !root ) {
        return false;
    }

    if ( typeof properties === 'string' ) {
        path = properties ? properties.split('.') : [];
    } else {
        if ( Object.prototype.toString.call( properties ) === '[object Array]' ) {
            path = properties;
        } else {
            if ( properties ) {
                return false;
            }
        }
    }

    while ( prop = path.shift() ) {

        try {
            if ( prop in root ) {
                root = root[prop];
            } else {
                return false;
            }
        } catch(e) {
            return false;
        }
    }

    return true;

}
