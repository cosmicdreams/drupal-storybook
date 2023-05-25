# Single Directory Components + Drupal

I have set up this repository to demonstrate a new workflow that has been made possible in Drupal 10.1 thanks to the inclusion of the single directory components (SDC).

After you complete the installation process below you'll be able to create new components in Drupal.

## Installation
We prefer to use ddev for local development.  If you don't have it installed, install it [using their documentation](https://ddev.readthedocs.io/en/stable/#installation).

Then...
1. Clone this repository: 'git clone https://github.com/cosmicdreams/drupal-storybook.git'
2. Build: `cd drupal-storybook && ddev start && ddev composer i && ddev yarn`
3. Install Drupal: `ddev drush si --account-name=admin --account-pass=admin demo_umami -y`
4. Install modules: `ddev drush en cl_server sdc_examples -y`
5. Login to Drupal and modify the cl_server permissions to permit anonymous users to
![permissions.png](docs%2Fpermissions.png)
6. Run `ddev yarn storybook` and navigate to https://drupal-storybook.ddev.site:6006

## Troubleshooting
It's quite easy to have issues with storybook and drupal thanks to CORS.  If you have trouble loading components via this setup, please first check:

1. The permission for the cl_server module is set to allow anonymous users to access the component library.
2. The CORS configuration is actually loading: `ddev drush php:eval "var_export(\Drupal::getContainer()->getParameter('cors.config'));"`
3. Then, you can check if your component is named properly or has some other kind of error.
4. Also, check our browser's dev console.  It usuallly has a lot of good debugging detail logged there.
