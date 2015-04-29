exports.content = {};

/**
 * Get content by key (path or id)
 * @param {string} key - Content key
 * @returns {object} Content object
 */
exports.content.get = function (key) {
    var content;
    if (typeof key == 'undefined') {
        content = execute('portal.getContent');
    }
    else {
        content = execute('content.get', {
            key: key
        });
    }
    return content;
};

/**
 * Check if content exists at path
 * @param {string} path
 * @returns {boolean}
 */
exports.content.exists = function (path) {
    return exports.content.get(path) ? true : false;
};


/**
 * Get content property
 * @param {string} key - Content key
 * @param {string} property - Property name
 * @returns {*}
 */
exports.content.getProperty = function (key, property) {
    if (!key || !property) {
        return null;
    }
    var result = exports.content.get(key);
    return result ? result[property] : null;
};

/**
 * Returns the path to the content location. If the key to a content is passed, it will be used. If contenKey is null, the path
 * to the page that the part is on will be returned.
 * @param {Content} contentKey - content key. Example: config['saveFolder']
 * @return {String} Returns the path of the save location.
 */
exports.content.getPath = function (contentKey) {
    var defaultContent = execute('portal.getContent');
    var contentPath;
    if (contentKey) {
        var content = exports.content.get(contentKey);
        if (content) {
            contentPath = content._path;
        }
    }
    return contentPath ? contentPath : defaultContent._path;
};