export default {
	get: () => ({
		branch: 'draft',
		repository: 'com.enonic.cms.default',
		authInfo: {
			user: {
				type: 'user',
				key: 'user:system:su',
				displayName: 'Super User',
				disabled: false,
				login: 'su',
				idProvider: 'system'
			},
			principals: [
				'role:system.admin',
				'role:system.authenticated',
				'role:system.everyone',
				'user:system:su'
			]
		}
	}),
	run: (context, fn) => fn()
};
