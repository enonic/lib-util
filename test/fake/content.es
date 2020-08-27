import {A_CONTENT, CONTENTS} from './constants';

export default {
	get: ({key}) => CONTENTS[key],
	query: () => ({
		count: 1,
		total: 1,
		hits: [A_CONTENT]
	}),
	exists: ({key}) => {
		if (key == A_CONTENT._id || key == A_CONTENT._path) {
			return true;
		}
		return false;
	}
};
