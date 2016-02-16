var libs = {
    portal: require('/lib/xp/portal')
};

/**
 * Get regions as array
 * @returns {Array}
 */
exports.get = function() {

    var component = libs.portal.getComponent();
    var regions = component.regions;

    var regionArray = [];
    for (var key in regions) {
        if (regions.hasOwnProperty(key)) {
            var region = regions[key];
            regionArray.push(region);
        }
    }

    return regionArray;
};