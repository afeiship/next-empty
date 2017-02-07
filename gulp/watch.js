(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var browserSync = require('browser-sync');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  //watch
  gulp.task('watch', function() {
    gulp.watch(path.join(config.paths.src, '/assets/images'), ['images']);
    gulp.watch(path.join(config.paths.src, '/app/**/*.scss'), ['styles']);

    gulp.watch([
      path.join(config.paths.src, '/app/**/*.js'),
      path.join(config.paths.src, '/app/**/*.html')
    ], ['scripts']);

    gulp.watch([
      path.join(config.paths.src, 'index.html'),
      path.join(config.paths.dist, 'index.html')
    ], ['inject']);


    gulp.watch([
      path.join(config.paths.src, '/app/**/*.scss'),
      path.join(config.paths.src, '/app/**/*.js'),
      path.join(config.paths.src, '/app/**/*.html'),
      path.join(config.paths.src, 'index.html'),
      path.join(config.paths.dist, 'index.html')
    ]).on('change', function(event) {
      console.log(event);
      switch (event.type) {
        case 'changed':
          setTimeout(function() {
            browserSync.reload();
          },500);
          break;
      }
    })
  });


}());
