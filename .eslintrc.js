module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  extends: ['plugin:jest/recommended', 'prettier'],
  rules: {
    'jest/no-done-callback': 'off',
  },
}
