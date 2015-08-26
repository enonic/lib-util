exports.app = {};

/**
 * Get full app name
 * @returns {String}
 */
exports.app.getName = function () {
    return app.name;
};

/**
 * Get short app name (last part)
 * @returns {String}
 */
exports.app.getShortName = function () {
    var appName = exports.app.getName();
    return appName.split('.').pop();
};