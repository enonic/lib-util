exports.view = {};

/**
 * Render Thymeleaf view.
 * @param {String} Location of the view. Use resolve(..) to resolve a view
 * @param {Object} Model that is passed to the view.
 * @return {Object} The rendered view
 */
exports.view.render = function(view, model) {
    return {
        body: execute('thymeleaf.render', {
            view: view,
            model: model
        })
    };
};