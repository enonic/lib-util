exports.module = {};

/**
 * Get full module name
 * @returns {String}
 */
exports.module.getName = function () {
    return module.name;
};

/**
 * Get short module name (last part)
 * @returns {String}
 */
exports.module.getShortName = function () {
    var moduleName = exports.module.getName();
    return moduleName.split('.').pop();
};