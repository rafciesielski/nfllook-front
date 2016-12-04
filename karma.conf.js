// #docregion
module.exports = function(config) {

  var appBase    = 'app/'; // transpiled app JS and map files
  var appSrcBase = '../src/app/'; // app source TS files
  var appAssets  = 'base/app/'; // component assets fetched by Angular's compiler

  var testBase    = 'app/'; // transpiled test JS and map files
  var testSrcBase = '../src/app/'; // test source TS files

  config.set({
    basePath: 'build',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'), // click "Debug" in browser to see it
      require('karma-htmlfile-reporter') // crashing w/ strange socket error
    ],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'lib/systemjs/dist/system.src.js',

      // Polyfills
      'lib/core-js/client/shim.min.js',
      'lib/reflect-metadata/Reflect.js',

      // zone.js
      'lib/zone.js/dist/zone.js',
      'lib/zone.js/dist/long-stack-trace-zone.js',
      'lib/zone.js/dist/proxy.js',
      'lib/zone.js/dist/sync-test.js',
      'lib/zone.js/dist/jasmine-patch.js',
      'lib/zone.js/dist/async-test.js',
      'lib/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'lib/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'lib/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      {pattern: 'lib/@angular/**/*.js', included: false, watched: false},
      {pattern: 'lib/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'systemjs.config.js', included: false, watched: false},
      '../karma-test-shim.js',

      // transpiled application & spec code paths loaded via module imports
      //{pattern: appBase + '**/*.js', included: false, watched: true},
      {pattern: testBase + '**/*.js', included: false, watched: true},


      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: appBase + '**/*.html', included: false, watched: true},
      {pattern: appBase + '**/*.css', included: false, watched: true},

      // Paths for debugging with source maps in dev tools
      {pattern: appSrcBase + '**/*.ts', included: false, watched: false},
      {pattern: appBase + '**/*.js.map', included: false, watched: false},
      {pattern: testSrcBase + '**/*.ts', included: false, watched: false},
      {pattern: testBase + '**/*.js.map', included: false, watched: false}
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/": appAssets
    },

    exclude: [],
    preprocessors: {},
    // disabled HtmlReporter; suddenly crashing w/ strange socket error
    reporters: ['progress', 'kjhtml'],//'html'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })

  if (process.env.TRAVIS) {
      config.browsers = ['Chrome_travis_ci'];
  }

}
