var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function(done){
  gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
    done();
});