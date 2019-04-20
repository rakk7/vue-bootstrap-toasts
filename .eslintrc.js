module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "vue/html-indent": [
      "error",
      2,
      {
        baseIndent: 1
      }
    ],
    "vue/max-attributes-per-line": [
      3,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    "vue/singleline-html-element-content-newline": "off"
  }
};
