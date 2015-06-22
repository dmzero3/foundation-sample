'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var pkg = require('../package.json');

gulp.task('usemin', ['clean'], function(){
  gulp.src(pkg.path.src + '/**/*.html')
  .pipe(plugin.usemin({
    js: [plugin.uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); })],
    css: [plugin.minifyCss()]
  }))
  .pipe(gulp.dest(pkg.path.dist));
});
