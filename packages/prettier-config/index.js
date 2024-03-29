module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	proseWrap: 'preserve',
	endOfLine: 'lf',
	overrides: [
		{
			files: ['*.yml', '*.md'],
			options: {
				useTabs: false,
			},
		},
	],
};
