# Same Page Preview | Full repo

We've set this repository up for sharing / development purposes.  It has the
same_page_preview module included as a git repository and a Storybook driven
component library server ready to go.

## Installation
We prefer to use ddev for local development.  If you don't have it installed, install it [using their documentation](https://ddev.readthedocs.io/en/stable/#installation).

Then...
1. Clone this repository into a directory named `spp-storybook`
2. `cd spp-storybook && ddev composer i -W`
3. `ddev yarn install`
4. Run `ddev yarn storybook` and navigate to https://spp-storybook.ddev.site:6006

## Contributing

Contributions are welcome in the form of GitHub pull requests. However, the
`pantheon-upstreams/drupal-composer-managed` repository is a mirror that does not
directly accept pull requests.

Instead, to propose a change, please fork [pantheon-systems/drupal-composer-managed](https://github.com/pantheon-systems/drupal-composer-managed)
and submit a PR to that repository.
