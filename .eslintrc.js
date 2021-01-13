const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: false
    },
    ecmaVersion: 12,
    project: path.resolve(__dirname, 'tsconfig.json'),
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/semi': ['warn', 'never'],
    'prettier/prettier': ['warn', { semi: false, singleQuote: true }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve(__dirname, 'src')]]
      }
    }
  }
}
