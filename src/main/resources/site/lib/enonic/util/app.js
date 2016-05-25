var libs = {
    portal: require('/lib/xp/portal')
};

/**
 * Get short app name (last part)
 * @returns {String}
 */
exports.getShortName = function () {
    var appName = app.name;
    return appName.split('.').pop();
};

/**
 * Get app's name for use in JSON-nodes (com.enonic.app as com-enonic-app)
 * @returns {String}
 */
exports.getJsonName = function () {
    var appName = app.name;
    return appName.replace(/\./g, '-');
};
