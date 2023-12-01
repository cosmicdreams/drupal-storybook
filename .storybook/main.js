module.exports = {
  // Change the place where storybook searched for stories.
  stories: [
    "../web/**/*.stories.@(mdx|yml)",
  ],

  // ...
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@lullabot/storybook-drupal-addon', // <----
  ],

  framework: {
    name: '@storybook/server-webpack5',
    options: {}
  },

  docs: {
    autodocs: false
  }
};
