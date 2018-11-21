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
		'array-includes',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-object-assign'
	],
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: false
			}
		]
	]
}
