# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. You may merge the Pull Request in once you have the sign-off of one other developer, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.
4. Commits follow the [Angular commit convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) with the use of [commitizen](https://github.com/commitizen/cz-cli) – to help you with that you can use `npm run cz`.

## Development

Visit the [issue tracker](https://github.com/bibixx/is-scrolled/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```sh
git clone https://github.com/your-username/is-scrolled.git
```

### Building

#### Setting up development environment

To install the dependencies:

```sh
npm install
```

Then to connect development package with another project for testing:

```sh
npm link
npx npm-link-shared ./path/to/your/project/node_modules . react
```

Then in your project path

```sh
npm link is-scrolled
```

#### Running project in development mode

While developing you can use the webpack in development mode that also includes the watcher

```sh
npm run start
```

#### Building project

Running the `build` task will create a CommonJS module-per-module build, a ES Modules build and a UMD build.

```sh
npm run build
```

### Linting

To only run linting:

```sh
npm run lint
```

### Docs

Improvements to the documentation are always welcome. You can find them in the [`README`](/README.md).

### Examples

Redux comes with [a few examples](/examples) to demonstrate various concepts and best practices.

When adding a new example, please adhere to the style and format of the existing examples, and try to reuse as much code as possible.
