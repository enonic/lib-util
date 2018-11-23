
export const UUID = '993f0738-8256-4727-b189-2ee361829310';
export const NAME = 'contentName';
export const PATH = `/${NAME}`;
export const A_CONTENT = {
	_id: UUID,
	_path: PATH,
	_name: NAME
};


export const CHILD_ID = 'childId';
export const CHILD_NAME = 'childName';
export const CHILD_PATH = `${PATH}/${CHILD_NAME}`;
export const CHILD_CONTENT = {
	_id: CHILD_ID,
	_name: CHILD_NAME,
	_path: CHILD_PATH
};


export const CONTENTS = {
	[PATH]: A_CONTENT,
	[UUID]: A_CONTENT,
	[CHILD_ID]: CHILD_CONTENT,
	[CHILD_PATH]: CHILD_CONTENT
};
