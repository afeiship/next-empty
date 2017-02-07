(function() {

  'use strict';

  var rootPath = process.cwd();
  var path = require('path');
  var gulp = require('gulp');
  var gutil = require('gulp-util');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });
  var paths = {
    root: rootPath,
    src: rootPath + '/src',
    tmp: rootPath + '/.tmp',
    dist: rootPath + '/dist'
  };
  var sassOptions = {
    style: 'expanded'
  };
  var htmlminOptions = {
    removeEmptyAttributes: true,
    removeAttributeQuotes: true,
    collapseBooleanAttributes: false,
    collapseWhitespace: true
  };
  var errorHandler = function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }


  module.exports = {
    paths: paths,
    sassOptions: sassOptions,
    htmlminOptions: htmlminOptions,
    errorHandler: errorHandler,
    angularTmplOptions: {
      module: 'dacangRemix',
      root: 'app'
    },
    userefOptions:{
      transformPath: function(filePath) {
        return filePath.replace('/src', '')
      }
    },
    appStream: {
      js: function() {
        return gulp.src([
            path.join(paths.src, 'app/**/*.js'),
            path.join(paths.src, 'partials/*.js')
          ])
          .pipe($.ngAnnotate())
          .pipe($.angularFilesort());
      },
      css: function() {
        var currentTask = gulp.seq.slice(-1)[0];
        if (currentTask === 'styles:dist') {
          sassOptions.style = 'compressed';
        }
        return gulp.src([
            path.join(paths.src, '/app/**/*.scss')
          ])
          .pipe($.concat('index.scss'))
          .pipe($.sass(sassOptions)).on('error', errorHandler('Sass'))
          .pipe($.autoprefixer('last 2 version')).on('error', errorHandler('Autoprefixer'))
      }
    }
  };


}());
