//import AcceptLanguage from 'accept-language';

import {getLocale as adminGetLocale} from '/lib/xp/admin';
import {get as getContentByKey} from '/lib/xp/content';
import {getContent as getCurrentContent} from '/lib/xp/portal';

import {getParent} from '../content/getParent';
import {toStr} from '../value/toStr';


/*const FALLBACK_LOCALE = 'en';

const LANGUAGES = [
	FALLBACK_LOCALE
];*/


export function getLocale({
	key,
	content = key ? getContentByKey({key}) : getCurrentContent()/*,
	request = { headers: {} },
	acceptLanguage = request.headers['Accept-Language'],
	languages = LANGUAGES*/
} = {}) {
	log.debug(toStr({key, content}));
	if (content && content.language) { return content.language; }
	let parent = getParent({content});
	log.debug(toStr({parent}));
	while (parent) {
		if (parent.language) { return parent.language; }
		parent = getParent({content});
		log.debug(toStr({parent}));
	}
	/*if (acceptLanguage) { // adminGetLocale already does this?
		AcceptLanguage.languages(languages);
		const language = AcceptLanguage.get(acceptLanguage);
		if (language) { return language; }
	}*/
	const adminLocale = adminGetLocale();
	log.debug(toStr({adminLocale}));
	return adminLocale;
}


export default {
	getLocale
};
