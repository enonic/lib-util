import {A_CONTENT} from './constants';

export const BODY_REGION = {
	components: [],
	name: 'body'
};


export const REGIONS = {
	body: BODY_REGION
};


export default {
	getComponent: () => ({
		regions: REGIONS
	}),
	getContent: () => A_CONTENT
};
