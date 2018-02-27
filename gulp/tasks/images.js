import gulp from 'gulp';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';

function images() {
  return gulp.src('source/static/img/**/*.{jpg,jpeg,png,svg}')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
}

export default images;
