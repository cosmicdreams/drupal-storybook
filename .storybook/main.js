module.exports = {
  stories: [
    "../web/themes/**/*.stories.mdx",
    "../web/themes/**/*.stories.@(json|yml)",
    "../web/modules/**/*.stories.mdx",
    "../web/modules/**/*.stories.@(json|yml)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@lullabot/storybook-addon-drupal"
  ],
  "framework": "@storybook/server",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
