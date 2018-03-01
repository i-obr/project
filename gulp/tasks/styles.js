import gulp from 'gulp';
import postcss from 'gulp-postcss';
import modules from 'postcss-modules';
import precss from 'precss';
import assets from 'postcss-assets';
import flexbugs from 'postcss-flexbugs-fixes';
import atImport from 'postcss-partial-import';
import cssnext from 'postcss-cssnext';
import normalize from 'postcss-normalize';
import fontMagic from 'postcss-font-magician';
import cssnano from 'gulp-cssnano';
import mqpacker from 'css-mqpacker';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import fs from 'fs';
import path from 'path';
import plumber from 'gulp-plumber';
import errorHandler from '../helpers/errorHandler';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

function styles() {
  return gulp.src('source/static/css/entry/*.css')
    .pipe(plumber({ errorHandler }))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(postcss([
      atImport(),
      normalize(),
      cssnext(),
      precss(),
      assets({
        basePath: 'source/',
        loadPaths: ['./static/img/'],
        relative: './static/css/',
        cachebuster: true,
      }),
      modules({
        getJSON: (cssFileName, json) => {
          const cssName = path.basename(cssFileName);
          const jsonFileName = path.resolve(`./build/temp/${cssName}.json`);
          fs.writeFileSync(jsonFileName, JSON.stringify(json));
        },
      }),
      flexbugs(),
      mqpacker({
        sort: true,
      }),
      fontMagic({
        formats: 'woff2 woff',
      }),
    ]))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulpIf(!isDev, cssnano()))
    .pipe(gulp.dest('build/css'));
}

export default styles;
