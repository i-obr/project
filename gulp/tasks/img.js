import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';

function img() {
    return gulp.src('source/static/img/**/*.{jpg,jpeg,png,svg}')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

export default img;
