module.exports = {
    extends: [require.resolve('@umijs/lint/dist/config/eslint')],
    rules: {
        // 自定义规则（可选）
        "array-callback-return":"off",
        "no-promise-executor-return":"off"
    }
};