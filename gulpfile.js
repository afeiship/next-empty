(function() {


  'use strict';

  var gulp = require('gulp');
  var argv = require('yargs').argv;
  var fs = require('fs');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //import
  fs.readdirSync('./gulp').map(function(file) {
    require('./gulp/' + file);
  });


}());
