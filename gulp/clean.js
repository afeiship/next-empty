(function() {


  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  //clean
  gulp.task('clean', function() {
    return $.del([
      config.paths.dist,
      path.join(config.paths.src,'partial')
    ]);
  });


  gulp.task('clean:app', function() {
    return $.del([
      path.join(config.paths.dist, 'app'),
      path.join(config.paths.src,'partials')
    ]);
  });


}());
