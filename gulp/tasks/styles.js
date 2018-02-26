import gulp from 'gulp';
import sass from 'gulp-sass';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import mqpacker from 'css-mqpacker';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minifyCss from 'gulp-minify-css';

function styles() {
    return gulp.src('source/static/scss/entry/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(replace('url("/img', 'url("img'))
        .pipe(replace('url(/img', 'url(img'))
        .pipe(postcss([
          autoprefixer({browsers: [
            'last 2 version'
          ]}),
          mqpacker({
            sort: true
          })
        ]))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
}

export default styles;
