const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const child = require('child_process');

gulp.task('js', () => {
  const bundleStream = browserify('_assets/main.js').bundle();
  return bundleStream
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./assets'))
});

gulp.task('css', () => {
  return gulp.src('_assets/main.scss')
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(gulp.dest('assets'));
});

gulp.task('css:watch', () => {
  gulp.watch('_sass/**/*.scss', ['css']);
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll',
    ['serve', '--watch', '--host', '0.0.0.0']);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['jekyll', 'css:watch']);
