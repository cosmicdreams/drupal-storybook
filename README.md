# Single Directory Components + Drupal

I have set up this repository to demonstrate a new workflow that has been made possible in Drupal 10.1 thanks to the inclusion of the single directory components (SDC).

After you complete the installation process below you'll be able to create new components in Drupal.

## Installation
We prefer to use ddev for local development.  If you don't have it installed, install it [using their documentation](https://ddev.readthedocs.io/en/stable/#installation).

Then...
1. Clone this repository: 'git clone https://github.com/cosmicdreams/drupal-storybook.git'
2. Build: `cd drupal-storybook && ddev start && ddev composer i && ddev yarn`
3. Install Drupal: `ddev drush si --account-name=admin --account-pass=admin demo_umami -y`
4. Install modules: `ddev drush en storybook -y`
5. Login to Drupal and modify the cl_server permissions to permit anonymous users to
![permissions.png](docs%2Fpermissions.png)
6. Run `ddev yarn storybook` and navigate to https://drupal-storybook.ddev.site:6006

## Troubleshooting
### CORS
It's quite easy to have issues with storybook and drupal thanks to CORS.  If you have trouble loading components via this setup, please first check:

1. The permission for the cl_server module is set to allow anonymous users to access the component library.
2. The CORS configuration is actually loading: `ddev drush php:eval "var_export(\Drupal::getContainer()->getParameter('cors.config'));"`
3. Then, you can check if your component is named properly or has some other kind of error.
4. Also, check our browser's dev console.  It usuallly has a lot of good debugging detail logged there.

### Different name
Did you get an error that looked like this?

> Starting drupal-storybook...
Failed to start drupal-storybook: project drupal-storybook project root is already set to /Users/Chris.Weber/OpenSource/drupal-storybook, refusing to change it to /Users/Chris.Weber/OpenSource/test1; you can `ddev stop --unlist drupal-storybook` and start again if the listed project root is in error 

That's because you checked out this repo in a folder that isn't named drupal-storybook.  No worries.  Create a new file in your .ddev folder named config.local.yml.  In it add this:

> name: --the name of your folder--

Just replace --the name of your folder-- with the name of your folder.  Then run `ddev start`. 
