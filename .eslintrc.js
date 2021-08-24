module.exports = {
  extends: ['plugin:gm-react-app/recommended'],
  rules: {
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-named-as-default': 0,
  },
  ignorePatterns: ['node_modules/'],
}
