'use strict'

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

gulp.task('sass', function(){
  gulp.src('src/css/sass/**/*.scss')
  .pipe(plugin.sass())
  .pipe(gulp.dest('src/css/'));
});
