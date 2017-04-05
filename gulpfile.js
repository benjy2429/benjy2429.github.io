var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
  var bundleStream = browserify('_assets/main.js').bundle();
  return bundleStream
    .pipe(source('main.js'))
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./assets'))
});

gulp.task('default', ['js']);
