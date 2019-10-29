const gulp        = require("gulp");
const sass        = require("gulp-sass");
const browserSync = require("browser-sync").create();
const cleanCSS    = require('gulp-clean-css');
const rename      = require("gulp-rename");

sass.compiler = require('node-sass');

// Compile SCSS into CSS

function style() {
  // 1. where is my scss files or 'app/scss/**/*.scss'
  return gulp.src('app/scss/app.scss', {sourcemaps: true})
  // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. rename the output
    .pipe(rename('custom-style.css'))
  // 4. where do i save the compiled CSS?
    .pipe(gulp.dest('app/css', {sourcemaps: true}))
  // 5. minify and check compatibility
    .pipe(cleanCSS({compatibility: 'ie8'}))
  // 6. rename to .min
    .pipe(rename({suffix: '.min'}))
  // 7. add to app/css directory
    .pipe(gulp.dest('app/css', {sourcemaps: true}))
  // 8. stream changes to all browsers
    .pipe(browserSync.stream())
}

function bootstrap() {
  // 1. where is my scss files or 'app/scss/**/*.scss'
  return gulp.src('app/scss/bootstrap.scss', {sourcemaps: true})
  // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. rename the output
    .pipe(rename('custom-bootstrap.css'))
  // 3. where do i save the compiled CSS?
    .pipe(gulp.dest('app/css', {sourcemaps: true}))
  // 5. minify and check compatibility
    .pipe(cleanCSS({compatibility: 'ie8'}))
  // 6. rename to .min
    .pipe(rename({suffix: '.min'}))
  // 7. add to app/css directory
    .pipe(gulp.dest('app/css', {sourcemaps: true}))
  // 8. stream changes to all browsers
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
  gulp.watch('app/scss/**/*.scss', style);
  gulp.watch('app/scss/**/*.scss', bootstrap);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;