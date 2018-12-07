import {A_CONTENT, CONTENTS} from './constants';

export default {
	get: ({key}) => CONTENTS[key],
	query: () => ({
		count: 1,
		total: 1,
		hits: [A_CONTENT]
	})
};
