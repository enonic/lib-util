exports.app = {};

/**
 * Get short app name (last part)
 * @returns {String}
 */
exports.app.getShortName = function () {
    var appName = app.name;
    return appName.split('.').pop();
};