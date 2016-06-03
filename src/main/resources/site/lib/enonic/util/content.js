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

/**
 * Gets content from a content ID (string) or an array of content IDs. Very useful for ContentSelectors.
 * @param {array or string} contentIDs - Array of content IDs or a single content ID as a string.
 * @returns {array} Array of content items
 */
exports.getInOrder = function(contentIDs) {
    if (!Array.isArray(contentIDs)) {
        contentIDs = [contentIDs];
    }
    var contentArray = [];
    contentIDs.map(function(id) {
        var content = libs.content.get({key: id});
        if(content) {
            contentArray.push(content);
        }
    });
    return contentArray;
};

/**
 * Get the query for an array of content IDs or a single ID string. Useful for getting multiple content from ContentSelectors
 * @param {array or string} contentIDs - Array of content IDs or a single ID as a string
 * @returns {string} Query string for array of content IDs '_id IN ("c300beed-3777-4a5d-87a7-4a8ee743ea76", "d04c31e5-eb63-4921-bec5-1672b4a80bd5")'
 */
exports.getQueryFromIDs = function(contentIDs) {
    return '_id IN (' + JSON.stringify(contentIDs).replace('[','').replace(']','') + ')';
};
