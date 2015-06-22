'use strict'

require('require-dir')('./gulp');

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var plugin = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var pkg = require('./package.json');


var server = function(env){
  return function(){
    if(!env){
      env = pkg.path.src
    }
    browserSync({
      server: {
        baseDir: env
      }
    });
  };
};
gulp.task('server', server());
gulp.task('server:dist',['usemin'], server('dist'));


var watch = function(env){
  return function(){
    if(env === ''){
      env = pkg.path.src
    }
    var glob = [
  		pkg.path.src + '/css/sass/*.scss',
  		pkg.path.src + '/css/sass/**/*.scss',
      pkg.path.src + '/js/*.js',
  		pkg.path.src + '/*.html',
  		pkg.path.src + '/**/*.html'
  	];
    gulp.watch(glob, ['sass', browserSync.reload]);
  }
};

gulp.task('watch', ['sass', 'server'], watch());
gulp.task('watch:dist', ['sass', 'server:dist'], watch('dist'));

// bower_concat時にfoundation内のCSSを読み込ませない処理を追加するか
// src配下を修正したときに都度、ビルドしてリロードさせるか
// TODO: Add gulp-plumber
// TODO: Add gulp-notify
