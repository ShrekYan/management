module.exports = {
    extends: [require.resolve('@umijs/lint/dist/config/stylelint')],
    plugins: ['stylelint-less'],  // 新增插件
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
            rules: {
                'less/no-duplicate-variables': true  // 规则移动到此处
            }
        }
    ],
    rules: {
        'color-no-invalid-hex': true
    }
};