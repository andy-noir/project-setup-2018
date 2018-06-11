var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var csso = require('gulp-csso');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
      server: {
         baseDir: "./project-name"
      }
    });
  });
  
  gulp.task('bs-reload', function () {
    browserSync.reload();
  });

  gulp.task('images', function(){
    gulp.src('project-name/src/images/**/*')
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest('project-name/build/images/'));
  });

  gulp.task('styles', function(){
    gulp.src(['project-name/src/scss/styles.scss'])
      .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
      }}))
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['Chrome >= 40', 'ie >= 10', 'FireFox >= 40', 'Safari >= 7', 'Opera >= 12']
      }))
      .pipe(gulp.dest('project-name/build/css/'))
      .pipe(rename({suffix: '.min'}))
      .pipe(csso())
      .pipe(gulp.dest('project-name/build/css/'))
      .pipe(browserSync.reload({stream:true}))
  });

  gulp.task('scripts', function(){
    return gulp.src('project-name/src/js/**/*.js')
      .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
      }}))
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('project-name/build/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify()) // FIX!
    .pipe(gulp.dest('project-name/build/js/'))
    .pipe(browserSync.reload({stream:true}))
  });

  gulp.task('default', ['browser-sync'], function(){
    gulp.watch("project-name/src/scss/**/*.scss", ['styles']);
    gulp.watch("project-name/src/js/**/*.js", ['scripts']);
    gulp.watch("project-name/*.html", ['bs-reload']);
  });