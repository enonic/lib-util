exports.menu = {};
exports.data = require('data.js').data;

/**
 * Get menu tree
 * @param {integer} levels - menu levels to get
 * @returns {Array}
 */
exports.menu.get = function (levels) {
    levels = (exports.data.isInt(levels) ? levels : 1);
    var site = execute('portal.getSite');

    if (!site) {
        return [];
    }
    var menu = exports.menu.getSubMenus(site, levels);

    return menu;
};

/**
 * Returns submenus of a parent menuitem.
 * @param {Content} parentContent - content object obtained with 'portal.getContent', 'portal.getSite' or any 'content.*' commands
 * @param {Integer} levels - The number of submenus to retrieve
 * @return {Array} Array of submenus
 */
exports.menu.getSubMenus = function (parentContent, levels) {
    var subMenus = [];

    if (parentContent.type === 'portal:site' && isMenuItem(parentContent)) {
        subMenus.push(menuItemToJson(parentContent, 0));
    }

    var children = execute('content.getChildren', {
        key: parentContent._id,
        count: 100
    });

    levels--;

    children.contents.forEach(function (child) {
        if (isMenuItem(child)) {
            subMenus.push(menuItemToJson(child, levels));
        }
    });

    return subMenus;
}


/**
 * Checks if the content is a menu item.
 * @param {Content} content - content object obtained with 'portal.getContent', 'portal.getSite' or any 'content.*' commands
 * @return {Boolean} true if the content is marked as menu item
 */
function isMenuItem(content) {
    var extraData = content.x;
    if (!extraData) {
        return false;
    }
    var moduleNamePropertyName = module.name.replace(/\./g, '-');
    var extraDataModule = extraData[moduleNamePropertyName];
    if (!extraDataModule || !extraDataModule['menu-item']) {
        return false;
    }
    var menuItemMetadata = extraDataModule['menu-item'] || {};
    var menuItemValue = menuItemMetadata['menuItem'];

    return menuItemValue;
}

/**
 * Returns JSON data for a menuitem.
 * @param {Content} content - content object obtained with 'portal.getContent', 'portal.getSite' or any 'content.*' commands
 * @param {Integer} levels - The number of submenus to retrieve
 * @return {Object} Menuitem JSON data
 */
function menuItemToJson(content, levels) {
    var subMenus = [];
    if (levels > 0) {
        subMenus = exports.menu.getSubMenus(content, levels);
    }

    var moduleNamePropertyName = module.name.replace(/\./g, '-');
    var menuItem = content.x[moduleNamePropertyName]['menu-item'];
    return {
        displayName: content.displayName,
        menuName: menuItem.menuName && menuItem.menuName.length ? menuItem.menuName : null,
        path: content._path,
        name: content._name,
        id: content._id,
        hasChildren: subMenus.length > 0,
        children: subMenus
    };
}
