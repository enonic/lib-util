function ResponsiveImages(element, settings) {
    var me = this;
    this.img = element;
    this.settings = settings;

    this.init = function () {
        if (me.img.attr('data-srcset')) {
            me.srcSet = me.img.data('srcset');
            me.setImageSrc();
        }
    };

    // Update image src attribute with optimal image size
    this.setImageSrc = function () {
        var optimalImage = me.getOptimalImage();
        me.img.attr('src', optimalImage);
    };

    // Get optimal image (closest width to placeholder image)
    this.getOptimalImage = function () {
        var width = me.getImageWidth();
        if (me.settings.retina) {
            width = width * (window.devicePixelRatio || 1);
        }
        var availableSizes = me.getAvailableSizes();
        var srcIndex = me.getClosestHigherNum(width, availableSizes);
        return me.srcSet[srcIndex];
    };

    // Get current width of placeholder image
    this.getImageWidth = function () {
        var width = Math.floor(me.img.width());
        return width;
    };

    // Get array of available sizes (widths) of the image
    this.getAvailableSizes = function () {
        var sizes = [];
        $.each(me.srcSet, function (index) {
            sizes.push(parseInt(index, 10));
        });
        sizes.sort(function (a, b) {
            return a - b;
        });
        return sizes;
    };

    // Get's the closest higher number in array
    this.getClosestHigherNum = function (num, ar) {
        var closest = ar[ar.length - 1];
        for (var i = ar.length; i >= 0; i--) {
            if (ar[i] > num) {
                closest = ar[i];
            }
        }
        return closest;
    };
}



$.fn.UTIL_responsiveImages = function (options) {
    return this.each(function () {
        var element = $(this);

        // Return early if this element already has a plugin instance
        if (element.data('UTIL_responsiveImages')) {
            return;
        }

        // Retina setting will use window.devicePixelRatio as width multiplier
        var settings = $.extend({
            retina: false
        }, options);

        // pass options to plugin constructor
        var responsiveImages = new ResponsiveImages(element, settings);
        responsiveImages.init();

        // Store plugin object in this element's data
        element.data('UTIL_responsiveImages', responsiveImages);
    });
};