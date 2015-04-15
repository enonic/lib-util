exports.region = {};

/**
 * Get regions in correct order
 * @param {Array} A list with names of the potential regions in requested order
 * @returns {Array}
 */
exports.region.get = function(potentialRegions) {
    var regions = [];
    var component = execute('portal.getComponent');
    for (var i = 0; i < potentialRegions.length; i++) {
        if (component.regions[potentialRegions[i]]) {
            regions.push(component.regions[potentialRegions[i]]);
        }
    }
    return regions;
};