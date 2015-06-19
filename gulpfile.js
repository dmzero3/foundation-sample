'use strict'

require('require-dir')('./gulp');

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var plugin = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var path = {
  src: './src/',
  dist: './dist/'
};


var server = function(env){
  return function(){
    if(!env){
      env = './src/'
    }
    browserSync({
      server: {
        baseDir: env
      }
    });
  };
};
gulp.task('server', server());
gulp.task('server:prod', server('dist'));



gulp.task('watch', ['sass', 'server'], function(){
	var glob = [
		path.src + 'css/sass/*.scss',
		path.src + 'css/sass/**/*.scss',
    path.src + 'js/*.js',
		path.src + '*.html',
		path.src + '**/*.html'
	];
	gulp.watch(glob, ['sass', browserSync.reload]);
});
