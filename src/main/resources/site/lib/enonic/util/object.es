import {isObject, isString} from './value';


/*
  Begin License MIT
  Inspiration from https://github.com/developit/dlv
  By Jason Miller <jason@developit.ca> (http://jasonformat.com)
*/
/**
 * Safely get a dot-notated path within a nested object, with ability to return
 * a default if the full key path does not exist or the value is undefined.
 * @param {object} object
 * @param {string} keyPath
 * @param {*=} [default]
 * @returns value || default || undefined
 */
export function dlv(object, keyPath, def) { // NOTE default is a reserved word
	let p = 0;
	const ourKeyPath = keyPath.split ? keyPath.split('.') : keyPath;
	let ourObjectRef = object;
	while (ourObjectRef && p < ourKeyPath.length) {
		ourObjectRef = ourObjectRef[ourKeyPath[p]];
		p += 1;
	}
	return ourObjectRef === undefined ? def : ourObjectRef;
}


export function hasProperty(object, property) {
	if (!isObject(object)) { throw new Error('hasProperty(): object must be an object!'); }
	if (!isString(property)) { throw new Error('hasProperty(): property must be a string!'); }
	let p = 0;
	const ourProperty = property.split ? property.split('.') : property;
	let ourObjectRef = object;
	while (ourObjectRef && p < ourProperty.length) {
		if (!Object.prototype.hasOwnProperty.call(ourObjectRef, ourProperty[p])) { return false; }
		ourObjectRef = ourObjectRef[ourProperty[p]];
		p += 1;
	}
	return true;
}
// End License MIT
