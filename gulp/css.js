'use strict'

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var pkg = require('../package.json');

gulp.task('sass', function(){
  gulp.src(pkg.path.src + '/css/sass/**/*.scss')
  .pipe(plugin.sass())
  .pipe(gulp.dest(pkg.path.src + '/css/'));
});
