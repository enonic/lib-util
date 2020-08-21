import { exists, isObject } from './value';
import { get } from './content';
// Function that should ease the use of working with images

/** @module image */

/**
 * Finds the caption of an image <br>
 * Note* Assums the image is uploaded to content studio
 * @param {Object|String} imageRef Content, id or path to an image
 * @returns {String} Caption string or empty string
 */
export const getCaption = (imageRef) => {
	let content;
	if (isObject(imageRef) === false && exists(imageRef)) {
		content = get(imageRef);
	} else {
		content = imageRef;
	}

	if (content.data && content.data.caption) {
		return content.data.caption;
	}

	// Need to return a string
	return '';
};
