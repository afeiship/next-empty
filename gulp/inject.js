(function() {

  'use strict';
  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var injectOptions = {
    name: 'app',
    addRootSlash: true
  };

  //for build:
  gulp.task('inject-scripts', function() {
    return gulp.src(path.join(config.paths.dist, 'index.html'))
      .pipe($.inject(config.appStream.js(), injectOptions))
      .pipe(gulp.dest('dist'));
  });


  gulp.task('inject-styles', function() {
    return gulp.src(path.join(config.paths.dist, 'index.html'))
      .pipe($.inject(config.appStream.css(), injectOptions))
      .pipe(gulp.dest('dist'));
  });


  gulp.task('inject', function(callback) {
    return $.sequence(
      'wiredep',
      'inject-scripts',
      'inject-styles'
    )(callback);
  });



}());
