module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,
  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  // Rules order is important, please avoid shuffling them
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint', // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue',
    'prettier',
  ],
  globals: {
    ga: 'readonly',
    // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error'],
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // The core 'import/named' rules
    // does not work with type definitions
    'import/named': 'off',
    'prefer-promise-reject-errors': 'off',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',
    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',
    // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
