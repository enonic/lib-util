/* global describe before after it */
/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */


import {deepStrictEqual} from 'assert';
import proxyquire from 'proxyquire';

const proxyquireStrict = proxyquire.noCallThru();

import {
	UUID, A_CONTENT,
	CHILD_ID, CHILD_CONTENT, CHILD_LANG,
	GRAND_CHILD_ID, GRAND_CHILD_CONTENT
} from '../fake/constants';
import fakeAdmin, {FALLBACK_LOCALE} from '../fake/admin';
import fakeContent from '../fake/content';
import {Log, LogWarnings} from '../fake/log'; // eslint-disable-line no-unused-vars
import fakePortal from '../fake/portal';


const {getLocale} = proxyquireStrict('../../build/resources/main/site/lib/enonic/util/portal/getLocale', {
	'/lib/xp/admin': fakeAdmin,
	'/lib/xp/content': fakeContent,
	'/lib/xp/portal': fakePortal,
	'../content/getParent': proxyquireStrict('../../build/resources/main/site/lib/enonic/util/content/getParent', {
		'/lib/xp/content': fakeContent,
		'/lib/xp/portal': fakePortal
	})
});


describe('portal', () => {
	before(() => {
		global.log = LogWarnings;
	});
	after(() => {
		delete global.log;
	});
	describe('getLocale', () => {
		it('getLocale() --> FALLBACK_LOCALE', () => deepStrictEqual(getLocale(), FALLBACK_LOCALE));

		it('getLocale({key: UUID}) --> FALLBACK_LOCALE', () => deepStrictEqual(getLocale({key: UUID}), FALLBACK_LOCALE));
		it('getLocale({content: A_CONTENT}) --> FALLBACK_LOCALE', () => deepStrictEqual(getLocale({content: A_CONTENT}), FALLBACK_LOCALE));

		it('getLocale({key: CHILD_ID}) --> CHILD_LANG', () => deepStrictEqual(getLocale({key: CHILD_ID}), CHILD_LANG));
		it('getLocale({content: CHILD_CONTENT}) --> CHILD_LANG', () => deepStrictEqual(getLocale({content: CHILD_CONTENT}), CHILD_LANG));

		it('getLocale({key: GRAND_CHILD_ID}) --> CHILD_LANG', () => deepStrictEqual(getLocale({key: GRAND_CHILD_ID}), CHILD_LANG));
		it('getLocale({content: GRAND_CHILD_CONTENT}) --> CHILD_LANG', () => deepStrictEqual(getLocale({content: GRAND_CHILD_CONTENT}), CHILD_LANG));
	});
});
