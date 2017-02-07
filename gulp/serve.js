(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var browserSync = require('browser-sync');
  var spa = require('browser-sync-spa');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  // Static Server + watching scss/html files
  gulp.task('serve', ['watch'], function() {
    gulp.start([
      'images',
      'styles',
      'scripts',
      'inject'
    ]);
    browserSync.init({
      server: {
        baseDir: path.join(config.paths.dist),
        routes: {
          '/bower_components': path.join(config.paths.root, 'bower_components'),
          '/src/app': path.join(config.paths.dist, 'app'),
          '/src/assets': path.join(config.paths.src, 'assets')
        }
      }
    });
    browserSync.use(spa({
      selector: '[ng-app]' // Only needed for angular apps
    }));
  });

}());
