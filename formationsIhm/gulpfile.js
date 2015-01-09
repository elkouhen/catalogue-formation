var gulp = require('gulp');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
	gulp.start('lint-js', 'build-js', 'build-css', 'build-fonts');
});

gulp.task('watch', function() {
    // calls 'build-js' whenever anything changes
    gulp.watch('src/main/webapp/**/*.js', ['lint-js', 'build-js']);
});

gulp.task('build-js', function() {
	gulp.src('src/main/webapp/javascript/index.js')
	.pipe(browserify({
		insertGlobals : true,
		debug : !gulp.env.production
	}))
	.pipe(gulp.dest('target/webapp/javascript'));
});

gulp.task('build-css', function() {
	gulp.src('node_modules/bootstrap/dist/css/bootstrap.*')
	.pipe(gulp.dest('target/webapp/css'));
});

gulp.task('build-fonts', function() {
	gulp.src('node_modules/bootstrap/fonts/*')
	.pipe(gulp.dest('target/webapp/fonts'));
});

gulp.task('lint-js', function() {
	return gulp.src('./src/main/webapp/javascript/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});