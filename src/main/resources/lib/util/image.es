import libValue from './value';
import get from './content';

const { isSet } = libValue;

// Check if its content or not
// Should this be included anywhere else?
function isContent(content) {
	if (typeof content !== 'object') {
		return false;
	}

	// Stupid simple check
	if (isSet(content._id)
        && isSet(content._path)
        && isSet(content._name)) {
		return true;
	}
	return false;
}

/**
 * Finds the caption of an image
 * Note* Assums the image is uploaded to content studio
 * @param imageRef Content, id or path to an image
 * @returns Caption string or empty string
 */
export const getCaption = (imageRef) => {
	let content;
	if (isContent(imageRef) === false) {
		content = get(imageRef);
	}

	if (content.data && content.data.caption) {
		return content.data.caption;
	}
	// Need to return a string
	return '';
};
