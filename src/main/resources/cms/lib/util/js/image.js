exports.image = {};
exports.content = require('content.js').content;

var config = require('../config.js').config;

var prescaledImageSizes = config.prescaledImageSizes || [256, 512, 1024];

/**
 * Creates image object.
 * @param {String} The image content key
 * @param {String} Scaling filter
 * @param {String} Additional image filters
 * @param {String} Image format
 * @param {String} Image quality (JPEG)
 * @param {Boolean} Create responsive image sizes?
 * @return {Object} The image object
 */
exports.image.create = function (key, scaling, filter, format, quality, responsive) {
    scaling = scaling || 'scaleWidth(1)';
    responsive = typeof responsive !== 'undefined' ? responsive : true;
    var image = {};
    if (key) {
        var result = exports.content.get(key);
        if (result) {
            if (responsive) {
                var srcSet = createSrcSet(result, scaling, filter, format, quality);
                // The set of scaled images, stringify object for template use
                image.srcSet = JSON.stringify(srcSet);
                // Transparent placeholder
                image.placeholder = createPlaceholder(result, scaling);
                // Fallback image is first image in srcSet
                image.fallback = srcSet[prescaledImageSizes[0]];
            }
            else {
                image.src = exports.image.createUrl(key, scaling, filter, format, quality);
            }
            image.artist = result.data['artist'] || null;
        }
    }
    return image;
};

/**
 * Creates image URL.
 * @param {String} The image content key
 * @param {String} Scaling filter
 * @param {String} Additional image filters
 * @param {String} Image format
 * @param {String} Image quality (JPEG)
 * @return {String} The image URL
 */
exports.image.createUrl = function (key, scaling, filter, format, quality) {
    // Join filter and scaling
    var finalFilter = [filter, scaling].filter(function (val) {
        return val;
    }).join(';');
    return execute('portal.imageUrl', {
        id: key,
        filter: finalFilter,
        format: format,
        quality: quality
    });
};

/**
 * Creates image responsive srcset.
 * @param {Object} The image content
 * @param {String} Scaling filter
 * @param {String} Additional image filters
 * @param {String} Image format
 * @param {String} Image quality (JPEG)
 * @return {Object} The image srcset
 */
function createSrcSet(image, scaling, filter, format, quality) {
    var srcSet = {};
    for (var i = 0; i < prescaledImageSizes.length; i++) {
        var scaledWidth = prescaledImageSizes[i];
        var scalingFilter = createScaleFilter(image, scaling, scaledWidth);
        var scaledUrl = exports.image.createUrl(image['_id'], scalingFilter, filter, format, quality);
        srcSet[scaledWidth] = scaledUrl;
    }
    return srcSet;
};

/**
 * Get individual scale parameters from scaling parameter.
 * @param {String} Scaling filter
 * @return {Array} The individual scaling parameters
 */
function getScaleParameters(scaling) {
    // remove trailing parenthesis
    var res = scaling.replace(/\)$/, '');
    // split on parenthesis and comma
    res = res.split(/[(,]/);
    return res;
}


/**
 * Create final scale filter based on selected scaling filter and available width
 * @param {Object} The image content
 * @param {String} Scaling filter
 * @return {Integer} Available width
 */
function createScaleFilter(image, scaling, width) {
    var scaleParams = getScaleParameters(scaling);
    var scaleType = scaleParams[0].toLowerCase();
    var finalScaleFilterArray = [];

    var scaleTypes = getScaleTypes();

    if (scaleTypes['x'].indexOf(scaleType) >= 0) {
        finalScaleFilterArray.push(width);
    }

    if (scaleTypes['y'].indexOf(scaleType) >= 0) {
        // height scaling does not make sense for responsive images
    }

    if (scaleTypes['xy'].indexOf(scaleType) >= 0) {
        var scaleRatio = scaleParams[1] / scaleParams[2];
        finalScaleFilterArray.push(Math.round(width / scaleRatio));
    }

    if (scaleParams[3]) {
        finalScaleFilterArray.push(scaleParams[3]);
    }

    if (scaleParams[4]) {
        finalScaleFilterArray.push(scaleParams[4]);
    }

    var finalScaleFilter = scaleType + '(' + finalScaleFilterArray.join() + ')';
    return finalScaleFilter;
}


/**
 * Get image dimensions (width and height) for image
 * @param {Object} The image content
 * @return {Object} The image dimensions
 */
function getImageDimensions(image) {
    var imageInfo = image['x']['media']['image-info'];
    var imageDimensions = {
        x: imageInfo['imageWidth'],
        y: imageInfo['imageHeight']
    }
    return imageDimensions;
}


/**
 * Get aspect ratio (width divided by height) of image
 * @param {Object} The image content
 * @return {Float} The image aspect ratio
 */
function getImageAspectRatio(image) {
    var imageDimensions = getImageDimensions(image);
    return imageDimensions['x'] / imageDimensions['y'];
}

/**
 * Get available scaletypes (grouped by affected image dimensions)
 * @return {Object} The available scale types
 */
function getScaleTypes() {
    return {
        x: ['scalewidth', 'scalewide', 'scalemax', 'scalesquare', 'scaleblock'],
        y: ['scaleheight'],
        xy: ['scalewide', 'scaleblock']
    }
}


/**
 * Calculate optimal dimensions (width and height) for placeholder image
 * @param {Object} The image content
 * @param {String} Scaling filter
 * @return {Object} Placeholder (dimensions)
 */
function createPlaceholder(image, scaling) {
    var scaleParams = getScaleParameters(scaling);
    var scaleType = scaleParams[0].toLowerCase();
    var scaleTypes = getScaleTypes();

    var scaleDimensions = {};
    scaleDimensions['x'] = scaleParams[1];

    if (scaleTypes['xy'].indexOf(scaleType) >= 0) {
        scaleDimensions['y'] = scaleParams[2];
    }
    else {
        var y = Math.round(scaleParams[1] / getImageAspectRatio(image));
        scaleDimensions['y'] = y;
    }

    var gcd = greatestCommonDivisor(scaleDimensions['x'], scaleDimensions['y']);

    var placeholder = {};
    placeholder.x = (scaleDimensions['x'] / gcd).toString();
    placeholder.y = (scaleDimensions['y'] / gcd).toString();

    return placeholder;
}


/**
 * Calculates the greatest common divisor for a and b
 * @param {Integer}
 * @param {Integer}
 * @return {Integer} Greatest common divisor
 */
function greatestCommonDivisor(a, b) {
    if (b) {
        return greatestCommonDivisor(b, a % b);
    } else {
        return Math.abs(a);
    }
}