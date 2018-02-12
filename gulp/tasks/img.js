var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');

const img = gulp.task('img', function() {
    return gulp.src('source/static/img/**/*.{jpg,jpeg,png,svg}')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

export default img;
