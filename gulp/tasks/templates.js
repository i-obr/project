import gulp from 'gulp';
import fs from 'fs';
import pug from 'gulp-pug';
import prettify from 'gulp-prettify';
import plumber from 'gulp-plumber';
import cached from 'gulp-cached';
import pugInheritance from 'gulp-pug-inheritance';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
import filter from 'gulp-filter';
import errorHandler from '../helpers/errorHandler';

function concatBlocksData() {
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
}

function templates() {
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
    }))
    .pipe(prettify({
      indent_size: 4,
      wrap_attributes: 'auto',
      preserve_newlines: false,
      end_with_newline: true,
    }))
    .pipe(rename({ dirname: '.' }))
    .pipe(gulp.dest('build/'));
}

export default templates;
