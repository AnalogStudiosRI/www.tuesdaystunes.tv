const path = require('path');

module.exports = {
  staticDirs: ['../src'],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss'
  ],
  framework: '@storybook/web-components',
  // set publicPath (e.g. `<base href="..." />`) for GitHub Pages
  // https://github.com/storybookjs/storybook/issues/12444#issuecomment-1179671255
  // Note: Used string-replace-loader@^2.x for webpack v4 compat to support current Storybook
  webpackFinal: async (config) => {
    if (process.env.GH_PAGES) {
      config.module.rules.push({
        test: /.js$/,
        include: [
          path.resolve(__dirname, '../src/components')
        ],
        loader: 'string-replace-loader',
        options: {
          search: /\/assets\//g,
          replace: '/www.tuesdaystunes.tv/assets/',
        },
      });
    }
    return config;
  }
};