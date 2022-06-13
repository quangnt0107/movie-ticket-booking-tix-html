const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
};


function watchStyles(){
  buildStyles();
  gulp.watch('./src/scss/**/*.scss', buildStyles);
}

exports.buildStyles = buildStyles;
exports.watchStyles = watchStyles;