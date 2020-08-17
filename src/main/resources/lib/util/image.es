import { exists, isObject } from './value';
import get from './content';

/**
 * Finds the caption of an image
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
