var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
const webp = require('gulp-webp');


gulp.task('style', () => {
  gulp.src('sass/**/*.scss')
      .pipe(sass({ outputStyle: "compressed"})
      .on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
      .pipe(browserSync.stream());
});

gulp.task('compress-js', () => {
  gulp.src('unminified-js/**/*.js')
  .pipe(babel({
      presets: ['env']
    }))
  .pipe(uglify())
  .pipe(gulp.dest('./js/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('jpg-to-webp', function () {
  gulp.src('img-raw/**/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('./img/'))
})

gulp.task('default', gulp.series(gulp.parallel(['style','compress-js','jpg-to-webp']), function(){
  gulp.watch('sass/**/*.scss', ['style']);
  gulp.watch('unminified-js/**/*.js', ['compress-js']);
}))
