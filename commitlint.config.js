module.exports = {
    extends: ["@commitlint/config-conventional"], // 使用 Conventional Commits 规范
    rules: {
        "type-enum": [ // 限定提交类型
            2,
            "always",
            ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"]
        ],
        "subject-case": [0], // 关闭 subject 大小写检查
        "header-max-length": [2, "always", 100] // 提交信息最长 100 字符
    }
};