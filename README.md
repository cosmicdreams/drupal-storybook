# Single Directory Components + Drupal

I have set up this repository to demonstrate a new workflow that has been made possible in Drupal 10.1 thanks to the inclusion of the single directory components (SDC).

After you complete the installation process below you'll be able to create new components in Drupal.

## Installation
We prefer to use ddev for local development.  If you don't have it installed, install it [using their documentation](https://ddev.readthedocs.io/en/stable/#installation).

Then...
1. Clone this repository: 'git clone https://github.com/cosmicdreams/drupal-storybook.git'
2. `cd drupal-storybook && ddev start && ddev composer i -W`
3. `ddev yarn install`
4. Run `ddev yarn storybook` and navigate to https://spp-storybook.ddev.site:6006

## Contributing

Contributions are welcome in the form of GitHub pull requests. However, the
`pantheon-upstreams/drupal-composer-managed` repository is a mirror that does not
directly accept pull requests.

Instead, to propose a change, please fork [pantheon-systems/drupal-composer-managed](https://github.com/pantheon-systems/drupal-composer-managed)
and submit a PR to that repository.
