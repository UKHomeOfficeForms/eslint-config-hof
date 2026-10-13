'use strict';

const globals = require('globals');
const stylistic = require('@stylistic/eslint-plugin');
const importX = require('eslint-plugin-import-x');
const n = require('eslint-plugin-n');

// ESLint 9+ flat config: exported as an array of config objects
module.exports = [
  {
    name: 'hof/ignores',
    ignores: ['coverage/**', 'public/js/bundle.js']
  },
  {
    name: 'hof/default',
    plugins: {
      '@stylistic': stylistic,
      'import-x': importX,
      n
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    settings: {
      'import-x/resolver-next': [
        importX.createNodeResolver({
          modules: ['node_modules', 'src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        })
      ]
    },
    rules: {
      /**
       * Variables
       */
      'no-var': 2, // https://eslint.org/docs/rules/no-var
      'prefer-const': 2, // https://eslint.org/docs/rules/prefer-const
      'no-shadow': 2, // https://eslint.org/docs/rules/no-shadow
      'no-shadow-restricted-names': 2, // https://eslint.org/docs/rules/no-shadow-restricted-names
      'no-undef': 2, // https://eslint.org/docs/rules/no-undef
      'no-unused-vars': [
        2,
        {
          // https://eslint.org/docs/rules/no-unused-vars
          vars: 'local',
          args: 'after-used',
          caughtErrors: 'none' // ESLint 9 changed the default to 'all'; keep previous behaviour
        }
      ],
      'no-use-before-define': 2, // https://eslint.org/docs/rules/no-use-before-define

      /**
       * Possible errors
       */
      'no-cond-assign': [2, 'always'], // https://eslint.org/docs/rules/no-cond-assign
      'no-console': 1, // https://eslint.org/docs/rules/no-console
      'no-debugger': 1, // https://eslint.org/docs/rules/no-debugger
      'no-alert': 1, // https://eslint.org/docs/rules/no-alert
      'no-constant-condition': 1, // https://eslint.org/docs/rules/no-constant-condition
      'no-dupe-keys': 2, // https://eslint.org/docs/rules/no-dupe-keys
      'no-duplicate-case': 2, // https://eslint.org/docs/rules/no-duplicate-case
      'no-empty': 2, // https://eslint.org/docs/rules/no-empty
      'no-ex-assign': 2, // https://eslint.org/docs/rules/no-ex-assign
      'no-extra-boolean-cast': 0, // https://eslint.org/docs/rules/no-extra-boolean-cast
      '@stylistic/no-extra-semi': 2, // https://eslint.style/rules/no-extra-semi
      'no-func-assign': 2, // https://eslint.org/docs/rules/no-func-assign
      'no-inner-declarations': 2, // https://eslint.org/docs/rules/no-inner-declarations
      'no-invalid-regexp': 2, // https://eslint.org/docs/rules/no-invalid-regexp
      'no-irregular-whitespace': 2, // https://eslint.org/docs/rules/no-irregular-whitespace
      'no-obj-calls': 2, // https://eslint.org/docs/rules/no-obj-calls
      'no-sparse-arrays': 2, // https://eslint.org/docs/rules/no-sparse-arrays
      'no-unreachable': 2, // https://eslint.org/docs/rules/no-unreachable
      'use-isnan': 2, // https://eslint.org/docs/rules/use-isnan
      'block-scoped-var': 2, // https://eslint.org/docs/rules/block-scoped-var

      /**
       * Best practices
       */
      'consistent-return': 2, // https://eslint.org/docs/rules/consistent-return
      curly: [2, 'multi-line'], // https://eslint.org/docs/rules/curly
      'default-case': 2, // https://eslint.org/docs/rules/default-case
      'dot-notation': [
        2,
        {
          // https://eslint.org/docs/rules/dot-notation
          allowKeywords: true
        }
      ],
      eqeqeq: 2, // https://eslint.org/docs/rules/eqeqeq
      'guard-for-in': 2, // https://eslint.org/docs/rules/guard-for-in
      'no-caller': 2, // https://eslint.org/docs/rules/no-caller
      'no-else-return': 2, // https://eslint.org/docs/rules/no-else-return
      'no-eq-null': 2, // https://eslint.org/docs/rules/no-eq-null
      'no-eval': 2, // https://eslint.org/docs/rules/no-eval
      'no-extend-native': 2, // https://eslint.org/docs/rules/no-extend-native
      'no-extra-bind': 2, // https://eslint.org/docs/rules/no-extra-bind
      'no-fallthrough': 2, // https://eslint.org/docs/rules/no-fallthrough
      '@stylistic/no-floating-decimal': 2, // https://eslint.style/rules/no-floating-decimal
      'no-implied-eval': 2, // https://eslint.org/docs/rules/no-implied-eval
      'no-lone-blocks': 2, // https://eslint.org/docs/rules/no-lone-blocks
      'no-loop-func': 2, // https://eslint.org/docs/rules/no-loop-func
      'no-multi-str': 2, // https://eslint.org/docs/rules/no-multi-str
      'no-global-assign': 2, // https://eslint.org/docs/rules/no-global-assign (replaces no-native-reassign)
      'no-new': 2, // https://eslint.org/docs/rules/no-new
      'no-new-func': 2, // https://eslint.org/docs/rules/no-new-func
      'no-new-wrappers': 2, // https://eslint.org/docs/rules/no-new-wrappers
      'no-octal': 2, // https://eslint.org/docs/rules/no-octal
      'no-octal-escape': 2, // https://eslint.org/docs/rules/no-octal-escape
      'no-param-reassign': 2, // https://eslint.org/docs/rules/no-param-reassign
      'no-proto': 2, // https://eslint.org/docs/rules/no-proto
      'no-redeclare': 2, // https://eslint.org/docs/rules/no-redeclare
      'no-return-assign': 2, // https://eslint.org/docs/rules/no-return-assign
      'no-script-url': 2, // https://eslint.org/docs/rules/no-script-url
      'no-self-compare': 2, // https://eslint.org/docs/rules/no-self-compare
      'no-sequences': 2, // https://eslint.org/docs/rules/no-sequences
      'no-throw-literal': 2, // https://eslint.org/docs/rules/no-throw-literal
      'no-with': 2, // https://eslint.org/docs/rules/no-with
      radix: 2, // https://eslint.org/docs/rules/radix
      'vars-on-top': 2, // https://eslint.org/docs/rules/vars-on-top
      yoda: 2, // https://eslint.org/docs/rules/yoda

      /**
       * Style (core formatting rules are deprecated, so these use @stylistic)
       */
      '@stylistic/indent': [
        2,
        2,
        {
          // https://eslint.style/rules/indent
          SwitchCase: 1
        }
      ],
      '@stylistic/brace-style': [
        2,
        '1tbs',
        {
          // https://eslint.style/rules/brace-style
          allowSingleLine: true
        }
      ],
      '@stylistic/quotes': [
        2,
        'single',
        {
          // https://eslint.style/rules/quotes
          avoidEscape: true
        }
      ],
      camelcase: [
        2,
        {
          // https://eslint.org/docs/rules/camelcase
          properties: 'never'
        }
      ],
      '@stylistic/comma-spacing': [
        2,
        {
          // https://eslint.style/rules/comma-spacing
          before: false,
          after: true
        }
      ],
      '@stylistic/comma-dangle': [2, 'never'], // https://eslint.style/rules/comma-dangle
      '@stylistic/comma-style': [2, 'last'], // https://eslint.style/rules/comma-style
      '@stylistic/eol-last': 2, // https://eslint.style/rules/eol-last
      '@stylistic/key-spacing': [
        2,
        {
          // https://eslint.style/rules/key-spacing
          beforeColon: false,
          afterColon: true
        }
      ],
      'new-cap': [
        0,
        {
          // https://eslint.org/docs/rules/new-cap
          newIsCap: true
        }
      ],
      '@stylistic/no-multiple-empty-lines': [
        2,
        {
          // https://eslint.style/rules/no-multiple-empty-lines
          max: 2,
          maxEOF: 0,
          maxBOF: 1
        }
      ],
      '@stylistic/quote-props': [2, 'as-needed'], // https://eslint.style/rules/quote-props
      'no-nested-ternary': 2, // https://eslint.org/docs/rules/no-nested-ternary
      'no-object-constructor': 2, // https://eslint.org/docs/rules/no-object-constructor (replaces no-new-object)
      // https://eslint.style/rules/function-call-spacing (replaces no-spaced-func)
      '@stylistic/function-call-spacing': 2,
      '@stylistic/no-trailing-spaces': 2, // https://eslint.style/rules/no-trailing-spaces
      '@stylistic/no-extra-parens': [2, 'functions'], // https://eslint.style/rules/no-extra-parens
      'no-underscore-dangle': 0, // https://eslint.org/docs/rules/no-underscore-dangle
      'one-var': [2, 'never'], // https://eslint.org/docs/rules/one-var
      '@stylistic/padded-blocks': [2, 'never'], // https://eslint.style/rules/padded-blocks
      '@stylistic/semi': [2, 'always'], // https://eslint.style/rules/semi
      '@stylistic/semi-spacing': [
        2,
        {
          // https://eslint.style/rules/semi-spacing
          before: false,
          after: true
        }
      ],
      '@stylistic/space-before-blocks': 2, // https://eslint.style/rules/space-before-blocks
      // https://eslint.style/rules/space-before-function-paren
      '@stylistic/space-before-function-paren': [
        2,
        {
          asyncArrow: 'always',
          anonymous: 'always',
          named: 'never'
        }
      ],
      '@stylistic/space-infix-ops': 2, // https://eslint.style/rules/space-infix-ops
      '@stylistic/spaced-comment': [
        2,
        'always',
        {
          // https://eslint.style/rules/spaced-comment
          exceptions: ['-', '+'],
          markers: ['=', '!'] // space here to support sprockets directives
        }
      ],
      '@stylistic/max-len': [2, { code: 120 }], // https://eslint.style/rules/max-len

      /**
       * Imports
       */
      'import-x/no-unresolved': 2,
      'import-x/named': 2,
      'import-x/default': 2,
      'import-x/no-duplicates': 2,

      /**
       * ES6 Rules
       */
      '@stylistic/arrow-parens': [2, 'as-needed'], // https://eslint.style/rules/arrow-parens
      '@stylistic/arrow-spacing': [
        2,
        {
          // https://eslint.style/rules/arrow-spacing
          before: true,
          after: true
        }
      ],
      '@stylistic/generator-star-spacing': [
        2,
        {
          // https://eslint.style/rules/generator-star-spacing
          after: true,
          before: false
        }
      ],
      'no-class-assign': 2, // https://eslint.org/docs/rules/no-class-assign
      'no-useless-computed-key': 2, // https://eslint.org/docs/rules/no-useless-computed-key
      'no-useless-rename': 2, // https://eslint.org/docs/rules/no-useless-rename

      /**
       * Node (https://github.com/eslint-community/eslint-plugin-n)
       */
      'n/file-extension-in-import': [2, 'always', { '.js': 'never' }],
      'n/no-exports-assign': 2,
      'n/no-missing-import': 2,
      'n/no-missing-require': 2,
      'n/no-unsupported-features/es-builtins': 2,
      'n/no-unsupported-features/node-builtins': 2,
      'n/no-deprecated-api': 2
    }
  },
  {
    name: 'hof/tests',
    files: ['test/**/*.js'],
    rules: {
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'max-nested-callbacks': 'off',
      'no-warning-comments': 'off'
    }
  }
];
