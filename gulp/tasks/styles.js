import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import assets from 'postcss-assets';
import inlineSVG from 'postcss-inline-svg';
import cssnano from 'gulp-cssnano';
import rev from 'gulp-rev';
import mqpacker from 'css-mqpacker';
import { obj as combine } from 'stream-combiner2';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import errorHandler from '../helpers/errorHandler';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

function styles() {
  return gulp.src('source/static/scss/entry/*.scss')
    .pipe(plumber({ errorHandler }))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      inlineSVG(),
      assets({
        basePath: 'build/',
        loadPaths: ['./img/assets/', './img/general/', './img/content/'],
        cachebuster: true,
      }),
      mqpacker({
        sort: true,
      }),
    ]))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulpIf(!isDev, combine(cssnano(), rev())))
    .pipe(gulp.dest('build/css'))
    .pipe(gulpIf(!isDev, combine(rev.manifest('css.json'), gulp.dest('build/temp/manifest'))));
}

export default styles;
