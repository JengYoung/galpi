module.exports = {
  extends: [
    'stylelint-config-recess-order',
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-recommended-vue"
  ],
  plugins: ["stylelint-prettier", "stylelint-scss", 'stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue, **/*.scss'],
      customSyntax: 'postcss-html',
      rules: {
        "prettier/prettier": [true, { "singleQuote": false, "printWidth": 120 }],
        "declaration-block-trailing-semicolon": "never",
        "no-empty-source": null,
      },
    },
  ],
}

