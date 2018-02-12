var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

const styles = gulp.task('styles', function() {
    return gulp.src('source/static/scss/entry/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(replace('url("/img', 'url("img'))
        .pipe(replace('url(/img', 'url(img'))
		.pipe(autoprefixer())
		.pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

export default styles;
