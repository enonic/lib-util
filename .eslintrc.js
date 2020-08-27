module.exports = {

	// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
	extends: 'airbnb-base',

	globals: {
		// Enonic XP
		app: false,
		log: false
	},

	rules: { // https://eslint.org/docs/rules
		'comma-dangle': ['error', {
			arrays: 'ignore',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'ignore'
		}],
		'import/no-absolute-path': ['off'],
		'import/no-unresolved': ['warn', {
			ignore: [
				'^/'
			]
		}],
		indent: ['warn', 'tab'],
		'max-len': ['error', 160, 2, {
			ignoreUrls: true,
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],
		'no-confusing-arrow': ['off'],
		'no-tabs': ['off'],
		'no-underscore-dangle': ['error', {
			allow: [
				'_id', // content-type property
				'_path', // content-type property
				'_selected' // option-set property
			],
			allowAfterThis: false,
			allowAfterSuper: false,
			enforceInMethodNames: false
		}],
		'object-curly-newline': ['off'],
		'object-curly-spacing': ['off'],
		'import/prefer-default-export': ['off'],
		'spaced-comment': ['off'],
		'implicit-arrow-linebreak': ['warn'],
		'linebreak-style': ['off'],
		'import/extensions': ['error', 'never']
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.es', '.js']
			}
		}
	}

}; // exports
