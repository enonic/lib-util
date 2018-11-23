module.exports = {
	env: {
		production: {
			comments: false,
			compact: true,
			minified: true,
			sourceMaps: false
		}
	},
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-modules-commonjs',
		'@babel/plugin-transform-object-assign',
		'array-includes'
	],
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'commonjs', // This is what Enonic XP is supporting.
			}
		]
	]
}
