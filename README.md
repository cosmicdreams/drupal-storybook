# Single Directory Components + Drupal

I have set up this repository to demonstrate a new workflow that has been made possible in Drupal 10.1 thanks to the inclusion of the single directory components (SDC).

After you complete the installation process below you'll be able to create new components in Drupal.

## Installation
We prefer to use ddev for local development.  If you don't have it installed, install it [using their documentation](https://ddev.readthedocs.io/en/stable/#installation).

### Drupal part

1. Install dependencies: `ddev drush en storybook`
2. Fix permissions: `ddev drush role:perm:add anonymous 'render storybook stories'`
3. Use the generator to produce stories from any compatible source: `ddev drush storybook:generate-all-stories`

### Storybook part

1. Update yarn: `ddev yarn`
2. Run storybook: `ddev yarn storybook`
3. Navigate to your storybook: https://<your-project-name>.ddev.site:6006

## General usage
To prepare your modules and themes for use with storybook you'll mainly rely upon the drush command `ddev drush storybook:generate-all-stories`.  If you find yourself executing that command frequently you can automate the execute of the command by doing the following:
1. SSH into your ddev instance: `ddev ssh`
2. Run `watch drush storybook:generate-all-stories`

The command will run when it detects file changes, or every 2 seconds.

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
