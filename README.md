![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-test

a `test` generator for use with the Sails command-line interface.

### Installing this generator

> Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

<!--
```sh
$ npm install sails-generate-test
```
-->


##### For a particular app

In your app directory:

```sh
$ npm install sails-generate-test
```

Then edit this project's `./.sailsrc` file (see below for details).  If no local `.sailsrc` file exists yet, you can just create one.


##### As the default for your global Sails install

In your $HOME folder (i.e. `~/`):

```sh
$ npm install sails-generate-test
```

Then edit your global `~/.sailsrc` file (see below for details).  If no global `.sailsrc` file exists yet, you can just create one.


##### Configuring a `.sailsrc` file to use this generator

Add or replace the module used for generating a "test" demo:

```json
{
	"generators": {
		"modules": {
			"test": "sails-generate-test"
		}
	}
}
```

##### Add unit test necessary module packages

In your `package.json` add a script and then Install test packages to your project with: `npm install` :

```json
{
  "devDependencies": {
    "istanbul": "^0.3.6",
    "grunt-mocha-istanbul": "^2.2.0",
    "barrels": "^1.4.0",
    "mocha": "*",
    "should": "*"
  }
}
```

### Usage

Now that the generator is installed, you can test it:

```sh
$ sails generate test
```

### Run Test

run unit test

```sh
$ make test
```

run unit and create test reports

```sh
$ make coverage
```


### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [Twitter](https://twitter.com/sailsjs)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
