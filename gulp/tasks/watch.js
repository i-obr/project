import gulp from 'gulp';
import styles from './styles';
import templates from './templates';
import concatData from '../helpers/concat-data';
import { imagesStatic, imagesBlocks } from './images';
import symbols from './symbols';

const watchingTemplatesEndData = [
  'source/pages/**/*.pug',
  'source/blocks/**/*.pug',
  'source/blocks/**/data/data.js',
  '!source/pages/**/_*.pug',
  '!source/blocks/**/_*.pug',
];

const watchingStyles = [
  'source/static/scss/**/*.scss',
  'source/blocks/**/*.scss',
];

const watchingImagesBlocks = [
  'source/blocks/**/assets/img/*.{jpg,jpeg,png,gif,svg}',
];

const watchingImagesStatic = [
  'source/static/img/**/*.{jpg,jpeg,png,gif,svg}',
  '!source/static/img/svg/*.svg',
];

const watchingSymbols = ['source/static/img/svg/*.svg'];

function watch() {
  global.watch = true;
  gulp.watch(
    watchingTemplatesEndData,
    gulp.series(concatData, templates, symbols),
  );
  gulp.watch(watchingStyles, styles);
  gulp.watch(watchingImagesBlocks, imagesBlocks);
  gulp.watch(watchingImagesStatic, imagesStatic);
  gulp.watch(watchingSymbols, symbols);
}

export default watch;
