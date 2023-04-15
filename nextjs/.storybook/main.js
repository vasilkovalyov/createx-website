const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: [path.resolve(__dirname, '../public')],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
  ],
  presets: [path.resolve(__dirname, './next-preset.js')],
}
