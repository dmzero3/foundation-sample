'use strict'

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var pkg = require('../package.json');

gulp.task('sass', function(){
  gulp.src(pkg.path.src + '/css/sass/main.scss')
  .pipe(plugin.plumber({
    errorHandler: plugin.notify.onError('Error: <%= error.message %>')
  }))
  .pipe(plugin.using())
  .pipe(plugin.sass())
  .pipe(plugin.autoprefixer({
    browser: 'last 2 versions',
    cascade: false
  }))
  .pipe(gulp.dest(pkg.path.src + '/css/'));
});
