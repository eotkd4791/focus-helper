module.exports = {
	types: [
		{ value: '✨ Feat', name: '✨ Feat:\tAdd a new feature' },
		{ value: '🐛 Modify', name: '🐛 Fix:\tModify production, UI,UX code' },
		{ value: '📝 Docs', name: '📝 Docs:\tAdd or update documentation' },
		{
			value: '💄 Style',
			name: '💄 Style:\tAdd or update code format (not updation production, UI,UX code)',
		},
		{
			value: '🤖 Refactor',
			name: '🤖 Refactor:\tCode change that neither fixes a bug nor adds a feature',
		},
		{
			value: '✅ Test',
			name: '✅ Test:\tCode change related with tests cases',
		},
		{
			value: '🚚 Chore',
			name: '🚚 Chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
		},
	],
	allowCustomScopes: false,
	allowBreakingChanges: ['feat', 'fix'],
	skipQuestions: ['body'],
	subjectLimit: 100,
}
