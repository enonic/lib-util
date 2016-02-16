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
 * Get the site config for the current app
 * The site config path is different if one or several apps are installed for the site
 * This function handles both scenarios (forces array)
 * @returns {Object}
 */
exports.getSiteConfig = function() {
    var site = libs.portal.getSite();
    var siteConfig = site.data.siteConfig;
    if (!Array.isArray(siteConfig)) {
        siteConfig = [siteConfig];
    }
    var lookup = {};
    for (var i = 0, len = siteConfig.length; i < len; i++) {
        lookup[siteConfig[i].applicationKey] = siteConfig[i];
    }
    return lookup[app.name].config;
};