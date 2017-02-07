(function() {


  'use strict';
  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var wiredep = require('wiredep').stream;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });


  gulp.task('wiredep', function () {
    return gulp.src(path.join(config.paths.src,'index.html'))
      .pipe(wiredep())
      .pipe(gulp.dest(config.paths.dist));
  });

}());
