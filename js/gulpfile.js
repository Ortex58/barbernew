var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(plumber())
		.pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('start',function() {
	gulp.run('sass');
    gulp.watch('sass/**/*.scss',['sass']);
	gulp.run('sass');
});
