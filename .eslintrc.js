// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'standard-react'
  ],
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    // always semi
    'semi': ['error', 'always'],
    // space-before-function-paren
    'space-before-function-paren': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // cancel jsx-curly-spacing
    'react/jsx-curly-spacing': 'off',
    // double-quotes
    'jsx-quotes': [2, 'prefer-double'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
