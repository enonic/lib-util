var _value = require('./value.js');
var isObject = _value.isObject;
var isString = _value.isString;


/*
  Begin License MIT
  Inspiration from https://github.com/developit/dlv
  By Jason Miller <jason@developit.ca> (http://jasonformat.com)
*/
exports.hasProperty = function(object, property) {
  if (!isObject(object)) { throw new Error('hasProperty(): object must be an object!')}
  if (!isString(property)) { throw new Error('hasProperty(): property must be a string!')}
  var p = 0;
  property = property.split ? property.split('.') : property;
  while (object && p<property.length) {
    if(!object.hasOwnProperty(property[p])) { return false; }
    object = object[property[p++]];
  }
  return true;
}

/**
 * Safely get a dot-notated path within a nested object, with ability to return
 * a default if the full key path does not exist or the value is undefined.
 * @param {object} object
 * @param {string} keyPath
 * @param {*=} [default]
 * @returns value || default || undefined
 */
exports.dlv = function(object, keyPath, def) {// NOTE default is a reserved word
  var p = 0;
  keyPath = keyPath.split ? keyPath.split('.') : keyPath;
  while (object && p<keyPath.length) object = object[keyPath[p++]];
  return object===undefined ? def : object;
}
// End License MIT
