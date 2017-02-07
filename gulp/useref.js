(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var htmlFilter = $.filter('*.html', {restore: true});
  var jsFilter = $.filter('**/*.js', {restore: true});
  var cssFilter = $.filter('**/*.css', {restore: true});

  gulp.task('useref', function() {
    return gulp.src(path.join(config.paths.dist, 'index.html'))
      .pipe($.useref(config.userefOptions))
      .pipe(jsFilter)
      .pipe($.ngAnnotate())
      .pipe($.uglify()) // Minify any javascript sources
      .pipe($.rev()) // Rename the concatenated files
      .pipe(jsFilter.restore)
      .pipe($.revReplace())
      .pipe(cssFilter)
      .pipe($.csso()) // Minify any CSS sources
      .pipe($.rev()) // Rename the concatenated files
      .pipe(cssFilter.restore)
      .pipe($.revReplace())
      .pipe(gulp.dest('dist'));
  });

}());
