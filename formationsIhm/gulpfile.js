/*global require */ 

var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function () {
  gulp.start('lint-js', 'usemin', 'build-html', 'build-fonts');
});

gulp.task('watch', function () {
  // calls 'build-js' whenever anything changes
  gulp.watch('src/main/webapp/**/*.js', ['lint-js']);
});

gulp.task('usemin', function () {
  return gulp.src('src/main/webapp/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [minifyHtml({
        empty: true
      })],
      js: [uglify()]
    }))
    .pipe(gulp.dest('target/webapp'));
});

gulp.task('build-html', function () {
  return gulp.src('src/main/webapp/partials/**/*.html').pipe(gulp.dest('target/webapp/partials'));
});

gulp.task('build-fonts', function () {
  return gulp.src('src/main/webapp/vendors/bootstrap/fonts/*').pipe(gulp.dest('target/webapp/fonts'));
});

gulp.task('lint-js', function () {
  return gulp.src(['./src/main/webapp/javascript/**/*.js', 'src/test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {

  var files = [

      'src/main/webapp/vendors/angular/angular.js',
      'src/main/webapp/vendors/angular-route/angular-route.js',
      'src/main/webapp/vendors/angular-resource/angular-resource.js',
      'src/main/webapp/vendors/angular-mocks/angular-mocks.js',
      'src/main/webapp/vendors/angular-jasmine-matchers/dist/matchers.js',
      'src/main/webapp/javascript/index.js',
      'src/main/webapp/javascript/formation/formation-module.js',
      'src/main/webapp/javascript/**/*.js',
      'src/test/unit/**/*.js'
    ];

  // Be sure to return the stream
  return gulp.src(files)
    .pipe(karma({
      configFile: 'src/test/config/karma.release.js',
      action: 'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});