'use strict'

require('require-dir')('./gulp');

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var plugin = require('gulp-load-plugins')();
var browserSync = require('browser-sync');


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



gulp.task('watch', ['server'], function(){
	var glob = [
		'./css/sass/*.scss',
		'./css/sass/**/*.scss',
		'./*.html',
		'./**/*.html'
	];
	gulp.watch(glob, ['sass', browserSync.reload]);
});

// TODO: ディレクトリを変数化
