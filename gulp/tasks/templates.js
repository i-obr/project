import gulp from 'gulp';
import fs from 'fs';
import pug from 'gulp-pug';
import prettify from 'gulp-prettify';
import plumber from 'gulp-plumber';
import cached from 'gulp-cached';
import pugInheritance from 'gulp-pug-inheritance';
import revReplace from 'gulp-rev-replace';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
import filter from 'gulp-filter';
import posthtml from 'gulp-posthtml';
import bem from 'posthtml-bem';
import errorHandler from '../helpers/errorHandler';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

const concatBlocksData = () => {
  let dataEntry;
  let readyMocksData;

  try {
    dataEntry = fs.readFileSync('./build/temp/mocksData.js', 'utf8');
  } catch (er) {
    dataEntry = false;
  }

  if (dataEntry) {
    eval(`readyMocksData = {${dataEntry}}`); // eslint-disable-line
  } else {
    readyMocksData = '{}';
  }

  return readyMocksData;
};

const filterShowCode = (text, options) => {
  const lines = text.split('\n');
  let result = '<pre class="code">\n';
  if (typeof (options['first-line']) !== 'undefined') {
    result = `${result}<code>${options['first-line']}</code>\n`;
  }
  for (let i = 0; i < (lines.length - 1); i += 1) {
    result = `${result}<code>${lines[i]}</code>\n`;
  }
  result = `${result}</pre>\n`;
  result = result.replace(/<code><\/code>/g, '<code>&nbsp;</code>');
  return result;
};

function templates() {
  const manifest = gulp.src('./build/temp/manifest/css.json', { allowEmpty: true });

  return gulp.src(['source/pages/**/[^_]*.pug', 'source/blocks/**/[^_]*.pug'])
    .pipe(plumber({ errorHandler }))
    .pipe(gulpIf(global.watch, cached('templates')))
    .pipe(pugInheritance({ basedir: 'source', skip: 'node_modules' }))
    .pipe(filter(file => /source[\\\/]pages/.test(file.path))) // eslint-disable-line
    .pipe(pug({
      basedir: 'source',
      extension: '.pug',
      skip: ['node_modules'],
      locals: concatBlocksData(),
      filters: {
        'show-code': filterShowCode,
      },
    }))
    .pipe(prettify({
      indent_size: 4,
      wrap_attributes: 'auto',
      preserve_newlines: false,
      end_with_newline: true,
    }))
    .pipe(posthtml([
      bem({
        elemPrefix: '-',
        modPrefix: '_',
        modDlmtr: '_',
      }),
    ]))
    .pipe(rename({ dirname: '.' }))
    .pipe(gulpIf(!isDev, revReplace({ manifest })))
    .pipe(gulp.dest('build/'));
}

export default templates;
