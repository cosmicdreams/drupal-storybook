module.exports = {
  // Change the place where storybook searched for stories.
  stories: [
    "../web/themes/**/*.stories.mdx",
    "../web/themes/**/*.stories.@(json|yml)",
    "../web/modules/**/*.stories.mdx",
    "../web/modules/**/*.stories.@(json|yml)",
  ],
  // ...
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@lullabot/storybook-drupal-addon', // <----
  ],
  framework: '@storybook/server',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
