/*global require */

var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css')

gulp.task('default', function () {
  gulp.start('build');
});

gulp.task('build', function () {
  gulp.start('lint-js', 'usemin', 'build-html', 'build-fonts');
});

gulp.task('watch', function () {
  // calls 'lint-js' whenever anything changes
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
  return gulp.src(['./src/main/webapp/javascript/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

