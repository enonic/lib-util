exports.region = {};
var portal = require('/lib/xp/portal');

/**
 * Get regions in correct order
 * @param {Array} potentialRegions - A list with names of the potential regions in requested order
 * @returns {Array}
 */
exports.region.get = function(potentialRegions) {
    var regions = [];
    var component = portal.getComponent();
    for (var i = 0; i < potentialRegions.length; i++) {
        if (component.regions[potentialRegions[i]]) {
            regions.push(component.regions[potentialRegions[i]]);
        }
    }
    return regions;
};