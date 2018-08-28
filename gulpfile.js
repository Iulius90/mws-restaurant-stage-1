var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var webp = require('gulp-webp');
var concat = require('gulp-concat');

gulp.task('style', () => {
  gulp.src('sass/**/*.scss')
      .pipe(sass({ outputStyle: "compressed"})
      .on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
      .pipe(browserSync.stream());
});

gulp.task('jpg-to-webp', function () {
  gulp.src('img-raw/**/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('./img/'))
})


// concat + minify all js
gulp.task('scripts',  () => {

  //js file for index.html
  gulp.src(['unminified-js/dbhelper.js','unminified-js/restaurant_info.js','unminified-js/main.js'])
    .pipe(concat('all.js'))
    .pipe(babel({
      presets: [ "es2015", "stage-0" ]

    }))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));

  //js file for restaurant.html
  gulp.src(['unminified-js/dbhelper.js','unminified-js/restaurant_info.js'])
    .pipe(concat('restaurant.js'))
    .pipe(babel({
      presets: [ "es2015", "stage-0" ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('default', gulp.series(gulp.parallel(['style','jpg-to-webp','scripts']), function(){
  gulp.watch('sass/**/*.scss', ['style']);
  gulp.watch('unminified-js/**/*.js', ['compress-js']);
}))
