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