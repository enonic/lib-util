// Click load pagination
function Pagination(element) {
    var me = this;
    this.list = element;

    this.init = function () {
        me.paginationUrl = me.list.data('pagination-url');
        me.paginationIndex = me.list.data('pagination-index');
        me.paginationCount = me.list.data('pagination-count');
        me.paginationTotal = me.list.data('pagination-total');
        me.addButton();
    };

    this.addButton = function () {
        if (me.paginationTotal > me.paginationCount) {
            me.createLoadMoreButton();
        }
    };

    this.createLoadMoreButton = function () {
        me.button = $('<button/>');
        me.button.text('Load more');
        me.bindLoadMoreClick();
        me.list.after(me.button);
    };

    this.bindLoadMoreClick = function () {
        me.button.click(function () {
            me.loadNextPage();
        });
    };

    this.loadNextPage = function () {
        me.button.addClass('loading');
        var url = me.createPaginationUrl();
        $.get(url, function (data) {
            var paginationData = $(data).find('.pagination > li');
            paginationData.appendTo(me.list);
            me.updatePaginationIndex();
            me.button.removeClass('loading');
        });
    };

    this.createPaginationUrl = function () {
        var url = me.paginationUrl;
        var index = me.paginationIndex;
        var param = 's=' + index;
        url += (url.split('?')[1] ? '&' : '?') + param;
        return url;
    };

    this.updatePaginationIndex = function () {
        var newIndex = me.paginationIndex + me.paginationCount;
        me.paginationIndex = newIndex;
        if (newIndex >= me.paginationTotal) {
            me.removeLoadMoreButton();
        }
    };

    this.removeLoadMoreButton = function () {
        me.button.remove();
    };
}

$.fn.UTIL_pagination = function (options) {
    return this.each(function () {
        var element = $(this);

        // Return early if this element already has a plugin instance
        if (element.data('UTIL_pagination')) {
            return;
        }

        // pass options to plugin constructor
        var pagination = new Pagination(element);
        pagination.init();

        // Store plugin object in this element's data
        element.data('UTIL_pagination', pagination);
    });
};