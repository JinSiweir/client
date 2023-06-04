module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-less'],
  overrides: [
    {
      files: ['**/*.html', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
};
