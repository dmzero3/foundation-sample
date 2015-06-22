'use strict'

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var plugin = require('gulp-load-plugins')();

var pkg = require('../package.json');

gulp.task('bower_concat', function(){
  gulp.src(mainBowerFiles())
  .pipe(plugin.concat('vendor.js'))
  .pipe(gulp.dest(pkg.path.src + '/js/'));
});

gulp.task('jshint', function(){
  gulp.src(pkg.path.src + '/js/*.js')
  .pipe(plugin.jshint());
});
