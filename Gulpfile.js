'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var clean = require('gulp-clean');
var changed = require('gulp-changed');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var opacity = require('postcss-opacity');
var mixins = require('postcss-mixins');
var neat = require('postcss-neat');
var simpleVars = require('postcss-simple-vars');
var reset = require('postcss-css-reset');
var color = require('postcss-color-function');

var processors = [
  postcssImport,
  simpleVars,
  reset,
  color,
  autoprefixer({ browsers: ["last 2 version", "safari 5", "ie > 9", "opera 12.1", "ios 6", "android 2.3"] }),
  precss,
  neat,
  mixins,
  opacity
];

gulp.task('css', function () {
  return gulp.src('./client/assets/css/src/style.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./client/assets/css'));
});

gulp.task('clean-css', function() {
  return gulp.src('./client/assets/css/style.css', {read: false})
    .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch('./client/assets/css/src/*.css', ['clean-css', 'css']);
  });

gulp.task('default', ['watch']);