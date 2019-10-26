const gulp        = require("gulp");
const sass        = require("gulp-sass");
const browserSync = require("browser-sync").create();
const cleanCSS    = require('gulp-clean-css');
const rename      = require("gulp-rename");

// Compile SCSS into CSS

function style() {
  // 1. location of SCSS files
  return gulp.src('app/scss/**/*.scss')
  // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. rename the output
    .pipe(rename('custom-style.css'))
  // 4. location of saved CSS file
    .pipe(gulp.dest('app/css'))
  // 5. minify and check compatibility
    .pipe(cleanCSS({compatibility: 'ie8'}))
  // 6. rename to .min (must use .min.css in index.html)
    .pipe(rename({suffix: '.min'}))
  // 7. add to app/css directory
    .pipe(gulp.dest('app/css'))
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
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
  
}

exports.style = style;
exports.watch = watch;