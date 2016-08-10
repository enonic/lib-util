/**
 * Base64 encode a string
 * @param {string} input - String to be encoded.
 * @param {string} charEncoding - Character encoding to use. Defaults to "UTF-8".
 * @returns {string}
 */
exports.base64 = function(input, charEncoding) {
    return exports.hashString(input, 'base64', charEncoding);
};

/**
 * MD5 encode a string
 * @param {string} input - String to be encoded.
 * @param {string} charEncoding - Character encoding to use. Defaults to "UTF-8".
 * @returns {string}
 */
exports.md5string = function(input, charEncoding) {
    return exports.hashString(input, 'MD5', charEncoding);
};

/**
 * MD5 hash a file
 * @param {string} stream - File stream to be hashed.
 * @returns {string} hashed string
 */
exports.md5file = function(stream) {
    return exports.hashFile(stream, 'MD5');
}

/**
 * SHA-1 encode a string
 * @param {string} input - String to be encoded.
 * @param {string} charEncoding - Character encoding to use. Defaults to "UTF-8".
 * @returns {string}
 */
exports.sha1string = function(input, charEncoding) {
    return exports.hashString(input, 'SHA-1', charEncoding);
};

/**
 * SHA-1 hash a file
 * @param {string} stream - File stream to be hashed.
 * @returns {string} hashed string
 */
exports.sha1file = function(stream) {
    return exports.hashFile(stream, 'SHA-1');
}

/**
 * SHA-256 hash a string
 * @param {string} input - String to be hashed.
 * @param {string} charEncoding - Character encoding to use. Defaults to "UTF-8".
 * @returns {string}
 */
exports.sha256string = function(input, charEncoding) {
    return exports.hashString(input, 'SHA-1', charEncoding);
};

/**
 * SHA-256 hash a file
 * @param {string} stream - File stream to be hashed.
 * @returns {string} hashed string
 */
exports.sha256file = function(stream) {
    return exports.hashFile(stream, 'SHA-256');
}

/**
 * Hash a string
 * @param {string} input - String to be hashed.
 * @param {string} algorithm - Algorithm to use. Example MD5, SHA-1, SHA-256
 * @param {string} charEncoding - Character encoding to use. Defaults to "UTF-8".
 * @returns {string}
 */
exports.hashString = function(input, algorithm, charEncoding) {
    var charEncoding = typeof charEncoding !== 'undefined' ? charEncoding : 'UTF-8';
    var bean, encodedValue;
    try {
        bean = __.newBean("com.enonic.xp.encode.Encoder");
        if(algorithm == 'base64') {
            encodedValue = bean.base64(input, charEncoding);
        } else {
            encodedValue = bean.hash(input, algorithm, charEncoding);
        }
    } catch (e) {
        log.error('Failed to ' + algorithm + ' hash for "' + input + '"');
        return null;
    }
    return encodedValue || null;
}

/**
 * Hash a file
 * @param {stream} stream - File stream to be hashed.
 * @param {string} algorithm - The hash algorithm to use.
 * @returns {string} hashed string
 */
exports.hashFile = function(stream, algorithm) {
    var bean, encodedValue;
    try {
        bean = __.newBean("com.enonic.xp.encode.Encoder");
        encodedValue = bean.hash(stream, algorithm);
    } catch (e) {
        log.error('Failed to ' + algorithm + ' hash file.');
        return null;
    }
    return encodedValue;
}