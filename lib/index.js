/**
 * sails-generate-auth
 *
 * Usage:
 * `sails generate auth`
 *
 * @type {Object}
 */
module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: {
    './': {
      exec: function (scope, cb) {
        console.log('Running generator (sails-generate-test) @ `'+scope.rootPath+'`...');
        cb();
      }
    },

    // unit test readme
    './test/README.md': { template: 'test/README.md' },

    // make file
    './Makefile': { template: 'Makefile' },

    // test bootstrap
    './test/bootstrap.test.js': { template: 'test/bootstrap.test.js' },

    // unit test file structure
    './test/controllers/.gitkeep': { template: 'test/controllers/.gitkeep' },
    './test/fixtures/.gitkeep': { template: 'test/fixtures/.gitkeep' },
    './test/policies/.gitkeep': { template: 'test/policies/.gitkeep' },
    './test/responses/.gitkeep': { template: 'test/responses/.gitkeep' },
    './test/services/.gitkeep': { template: 'test/services/.gitkeep'},

    // unit test demo with response controller
    './api/controllers/ResponseController.js': { template: 'api/controllers/ResponseController.js'},

    //response controllers unit test
    './test/responses/badRequest.test.js': { template: 'test/responses/badRequest.test.js'},
    './test/responses/forbidden.test.js': { template: 'test/responses/forbidden.test.js'},
    './test/responses/notFound.test.js': { template: 'test/responses/notFound.test.js'},
    './test/responses/ok.test.js': { template: 'test/responses/ok.test.js'},
    './test/responses/serverError.test.js': { template: 'test/responses/serverError.test.js'},

    //add unit test to grunt task
    './task/config/mocha-coverage.js': { template: 'task/config/mocha-coverage.js'},
    './task/register/coverage.js': { template: 'task/register/coverage.js'}


  }
};
