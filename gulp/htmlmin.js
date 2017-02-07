(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //test
  gulp.task('htmlmin', function() {
    return gulp.src(
        path.join(config.paths.dist, 'index.html')
      )
      .pipe($.debug())
      .pipe($.htmlmin(config.htmlminOptions))
      .pipe(gulp.dest(config.paths.dist));
  });

}());
