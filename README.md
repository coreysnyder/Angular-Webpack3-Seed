# Accessing the application
The app is available at [http://localhost/corey-app](http://localhost/corey-app).

# Front End Seed App

This is a seed app that demonstrates how to build front-end applications using
the Aver UI scaffolding. Front-end applications at Aver should use this as their starting point.  



## Getting Started

### Create empty Github Repo

### Install Cookie Cutter

### Run CookieCutter against aver-front-end-seed Template 
 `cookiecutter githubURL`
 
 Questions:
    
 
### Hitting your server


## Developing

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application. We use `npm`, the [node package manager][npm], to manage and install
dependencies.

First, install dependencies with

    npm install

### Run unit tests

The aver-seed app comes with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma] test runner. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing; the unit test file for
`foo.js` is named `foo_test.js`.

To run unit tests:

    npm run --silent test

To run unit tests continuously in watch mode (where file changes trigger tests):

    npm run test-watch

### Compile the code for deployment

Use the following command to compile the front-end code for deployment.

    npm run build

This command compiles the front-end code into the `/dist` directory. It does **not**
start a server that serves the compiled code, it only compiles it.

### Lint

We use `eslint` for linting - the configuration can be found in `.eslintrc.json`. To lint:

    npm run --silent lint

### Run the app locally

The project includes a simple development web server that runs inside the development container. 

Before starting the development server, you *must* compile the front-end code with `npm run build`.

To start the server:

    docker-compose up --build

You could also call `docker-compose build` instead of using the `--build` flag.



### Toggling webpack config with env vars

You can use environment variables to configure webpack compilation. The list
of env vars that correspond to configuration points can be found in the
`docker-compose` config file. The configuration defaults can be found in the
`webpack` config file.

For example, source maps are off by default when building. To build with sourcemaps:

    SOURCEMAPS=1 npm run build

To build with sourcemaps and without uglifying (not that you would ever want to do this):

    SOURCEMAPS=1 UGLIFY='' npm run build

As another example, to start the dev server with uglificiation (which is off by default):

    UGLIFY=1 docker-compose up

## Versioning

This repo uses [semantic versioning][semver]. To define a new version, create a tag and push
it to origin:

    git tag -a [version] -m [message]
    git push --tags

where `[version]` is a semver-compliant version like `2.3.0`.


[git]: https://git-scm.com/
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
[npm]: https://www.npmjs.org/
[semver]: http://semver.org/
