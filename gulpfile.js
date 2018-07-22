var gulp = require('gulp');
var sass = require('gulp-sass');


// gulp.task('styles', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });



gulp.task('style', () => {
    gulp.src('sass/**/*.scss')
        .pipe(sass({ outputStyle: "compressed"})
        .on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


// gulp.task('serve', ['style'], () => {
//     gulp.watch('sass/**/*.scss', ['style']);
// });


gulp.task('default', gulp.series(gulp.parallel(['style']), function(){
  gulp.watch('sass/**/*.scss', ['style']);
}))