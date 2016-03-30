var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var reload      = browserSync.reload;

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src("sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
