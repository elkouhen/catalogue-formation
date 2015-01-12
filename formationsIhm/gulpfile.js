var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');

gulp.task('default', function () {
    gulp.start('lint-js', 'build-js', 'build-css', 'build-fonts');
});

gulp.task('watch', function () {
    // calls 'build-js' whenever anything changes
    gulp.watch('src/main/webapp/**/*.js', ['lint-js']);
});

gulp.task('build-js', function () {

});

gulp.task('build-css', function () {

});

gulp.task('build-fonts', function () {

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