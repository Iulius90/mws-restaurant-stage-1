var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');


gulp.task('style', () => {
  gulp.src('sass/**/*.scss')
      .pipe(sass({ outputStyle: "compressed"})
      .on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});

gulp.task('compress-js', () => {
  gulp.src('unminified-js/**/*.js')
  .pipe(babel({
      presets: ['env']
    }))
  .pipe(uglify())
  .pipe(gulp.dest('./js/'));
});

gulp.task('default', gulp.series(gulp.parallel(['style','compress-js']), function(){
  gulp.watch('sass/**/*.scss', ['style']);
  gulp.watch('unminified-js/**/*.js', ['compress-js']);
}))


// npm install babel-preset-env --save-dev