export const CT_SITE = 'portal:site';


export const UUID = '993f0738-8256-4727-b189-2ee361829310';
export const NAME = 'site';
export const PATH = `/${NAME}`;
export const DISPLAY_NAME = 'Site displayName';
export const DATA = {};
export const LANG = undefined;
export const TYPE = CT_SITE;
export const A_CONTENT = {
	_id: UUID,
	_path: PATH,
	_name: NAME,
	displayName: DISPLAY_NAME,
	data: DATA,
	language: LANG,
	type: TYPE
};


export const CHILD_ID = 'childId';
export const CHILD_NAME = 'childName';
export const CHILD_PATH = `${PATH}/${CHILD_NAME}`;
export const CHILD_LANG = 'no';
export const CHILD_CONTENT = {
	_id: CHILD_ID,
	_name: CHILD_NAME,
	_path: CHILD_PATH,
	language: CHILD_LANG
};


export const GRAND_CHILD_ID = 'grandChildId';
export const GRAND_CHILD_NAME = 'childName';
export const GRAND_CHILD_PATH = `${PATH}/${CHILD_NAME}/${GRAND_CHILD_NAME}`;
export const GRAND_CHILD_LANG = undefined;
export const GRAND_CHILD_CONTENT = {
	_id: GRAND_CHILD_ID,
	_name: GRAND_CHILD_NAME,
	_path: GRAND_CHILD_PATH,
	language: GRAND_CHILD_LANG
};


export const CONTENTS = {
	[PATH]: A_CONTENT,
	[UUID]: A_CONTENT,
	[CHILD_ID]: CHILD_CONTENT,
	[CHILD_PATH]: CHILD_CONTENT,
	[GRAND_CHILD_ID]: GRAND_CHILD_CONTENT,
	[GRAND_CHILD_PATH]: GRAND_CHILD_CONTENT
};
