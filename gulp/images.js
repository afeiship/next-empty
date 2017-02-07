(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('images', function() {
    return gulp.src(path.join(config.paths.src, '/assets/images/**'))
      .pipe(gulp.dest(path.join(config.paths.dist, '/assets/images')));
  });

}())
