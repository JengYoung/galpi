module.exports = {
  extends: ['stylelint-config-recess-order', "stylelint-config-standard-scss", "stylelint-config-recommended-vue/scss", "stylelint-config-recommended-vue"],
  plugins: ["stylelint-prettier", "stylelint-scss", 'stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        "prettier/prettier": [true, { "singleQuote": false }],
      },
      // ignoreFiles: ['**/*.scss']
    },
    {
      files: ['**/*.scss'],
      // customSyntax: 'postcss-html',
      rules: {
        "prettier/prettier": [true, { "singleQuote": false }],
      },
      // ignoreFiles: ['**/*.vue']
    },
  ],
  rules: {
    "no-empty-source": null,
  }
}

