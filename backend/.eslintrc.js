module.exports = {
  root: true,
  env: { node: true, es2021: true },
  extends: ['eslint:recommended', 'plugin:@stylistic/recommended-extends'],
  rules: {
    '@stylistic/semi': ['warn', 'always'],
  },
};
