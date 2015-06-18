'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

gulp.task('usemin', function(){
  gulp.src('src/**/*.html')
  .pipe(plugin.usemin({
    js: [plugin.uglify()],
    css: [plugin.minifyCss()]
  }))
  .pipe(gulp.dest('dist/'));
});
