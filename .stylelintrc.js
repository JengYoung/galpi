module.exports = {
  extends: ['stylelint-config-recess-order', "stylelint-config-recommended-vue/scss", "stylelint-config-recommended-vue"],
  plugins: ["stylelint-prettier", 'stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        "prettier/prettier": true,
      },
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-html',
      rules: {
        "prettier/prettier": true,
      },
    }
  ],
  rules: {
    "no-empty-source": null,
  }
}

