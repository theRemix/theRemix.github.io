var gulp = require('gulp');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('gulp-autoprefixer');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

const compileSass = () => gulp.src('./scss/*.scss')
  .pipe($.sass({
    includePaths: sassPaths
  })
    .on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./assets/styles'));

gulp.task('sass', compileSass);

gulp.task('watch', () => gulp.watch('./scss/**/*.scss', compileSass));

gulp.task('default', gulp.parallel('watch', 'sass'));
