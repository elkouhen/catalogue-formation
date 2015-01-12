// Karma configuration
// Generated on Fri Jan 09 2015 14:11:56 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

      'src/main/webapp/vendors/angular/angular.js',
      'src/main/webapp/vendors/angular-route/angular-route.js',
      'src/main/webapp/vendors/angular-resource/angular-resource.js',
      'src/main/webapp/vendors/angular-mocks/angular-mocks.js',
      'src/main/webapp/javascript/index.js',
      'src/main/webapp/javascript/formation/formation-module.js',
      'src/main/webapp/javascript/**/*.js',
      'src/test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'src/main/webapp/javascript/**/*.js': 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'junit', 'coverage' ],
      
    junitReporter: {
      outputFile: 'target/test-results.xml'
    }, 
      
    coverageReporter: {
        dir : 'target/coverage'
    }, 

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });
};
