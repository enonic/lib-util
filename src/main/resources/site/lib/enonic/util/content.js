/////////////////////////////////////////////////////////////////////////
// Functionality to assist with working with content in XP             //
/////////////////////////////////////////////////////////////////////////

var libs = {
    portal: require('/lib/xp/portal'),
    content: require('/lib/xp/content')
};


/**
 * Get content by key (path or id)
 * @param {string} key - Content key
 * @returns {object} Content object
 */
exports.get = function (key) {
    var content;
    if (typeof key == 'undefined') {
        content = libs.portal.getContent();
    }
    else {
        content = libs.content.get({
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
exports.exists = function (path) {
    return exports.get(path) ? true : false;
};


/**
 * Get content property
 * @param {string} key - Content key
 * @param {string} property - Property name
 * @returns {*}
 */
exports.getProperty = function (key, property) {
    if (!key || !property) {
        return null;
    }
    var result = exports.get(key);
    return result ? result[property] : null;
};

/**
 * Returns the path to the content location. If the key to a content is passed, it will be used. If contenKey is null, the path
 * to the page that the part is on will be returned.
 * @param {Content} contentKey - content key. Example: config['saveFolder']
 * @return {String} Returns the path of the save location.
 */
exports.getPath = function (contentKey) {
    var defaultContent = libs.portal.getContent();
    var contentPath;
    if (contentKey) {
        var content = exports.get(contentKey);
        if (content) {
            contentPath = content._path;
        }
    }
    return contentPath ? contentPath : defaultContent._path;
};
