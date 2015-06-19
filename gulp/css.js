'use strict'

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var path = {
  src: './src/',
  dist: './dist/'
};

gulp.task('sass', function(){
  gulp.src(path.src + 'css/sass/**/*.scss')
  .pipe(plugin.sass())
  .pipe(gulp.dest(path.src + 'css/'));
});
