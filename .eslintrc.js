module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:vue/strongly-recommended"],
    parserOptions: {
        ecmaVersion: 2018,
        parser: "babel-eslint",
        sourceType: "module"
    },
    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": "off",
        "linebreak-style": ["error", "windows"],
        "no-undef": 0,
        "object-curly-newline": ["error", {
            "ImportDeclaration": {
                "multiline": true
            },
        }],
        "vue/max-attributes-per-line": [4,
            {
                "singleline": 4,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": true
                }
            }
        ],
        "vue/html-self-closing": "off",
        "vue/singleline-html-element-content-newline": "off",
    }
};
