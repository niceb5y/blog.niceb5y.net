'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')

const SRC = {
  SCSS: "./src/scss/**/*.scss"
}

const DIST = {
  SCSS: "./static/css/"
}

gulp.task('scss', () => {
  return gulp.src(SRC.SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({ compatibility: 'last 2 versions' }))
    .pipe(gulp.dest(DIST.SCSS))
})

gulp.task('watch', () => {
  gulp.watch(SRC.SCSS, ['scss'])
})

gulp.task('default', ['scss', 'watch'])