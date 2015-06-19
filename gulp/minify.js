'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var path = {
  src: './src/',
  dist: './dist/'
};

gulp.task('usemin', function(){
  gulp.src(path.src + '**/*.html')
  .pipe(plugin.usemin({
    js: [plugin.uglify()],
    css: [plugin.minifyCss()]
  }))
  .pipe(gulp.dest(path.dist));
});
