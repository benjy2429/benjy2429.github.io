var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('js', function() {
  var bundleStream = browserify('_assets/main.js').bundle();
  return bundleStream
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./assets'))
});

gulp.task('css', function() {
  return gulp.src('_assets/main.scss')
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(gulp.dest('assets'));
});

gulp.task('default', ['js', 'css']);
