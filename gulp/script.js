'use strict'

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var plugin = require('gulp-load-plugins')();

gulp.task('bower_concat', function(){
  gulp.src(mainBowerFiles())
  .pipe(plugin.concat('vendor.js'))
  .pipe(gulp.dest('src/js/'));
});
