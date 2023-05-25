// .storybook/preview.js
export const parameters = {
  // ...
  server: {
    // Replace this with your Drupal site URL, or an environment variable.
    url: 'https://drupal-storybook.ddev.site',
  },
  globals: {
    drupalTheme: 'olivero',
    supportedDrupalThemes: {
      olivero: {title: 'Olivero'},
      claro: {title: 'Claro'},
      umami: {title: 'Umami'},
    },
  }
  // ...
};
