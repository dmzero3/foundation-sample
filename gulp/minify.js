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
    js: [plugin.uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); })],
    css: [plugin.minifyCss()]
  }))
  .pipe(gulp.dest(path.dist));
});
