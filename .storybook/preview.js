// .storybook/preview.js
export const parameters = {
  // ...
  server: {
    // Replace this with your Drupal site URL, or an environment variable.
    url: 'https://core-dev.ddev.site',
  },
  globals: {
    drupalTheme: 'olivero',
    supportedDrupalThemes: {
      olivero: {title: 'Olivero'},
      claro: {title: 'Claro'},
    },
  }
  // ...
};
