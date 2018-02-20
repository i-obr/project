import gulp from 'gulp';
// import styles from './styles';
import templates from './templates';
import concatData from '../helpers/concat-data';
// import images from './images';
// import symbols from './symbols';

const fileToCmopile = [
  'source/pages/**/*.pug',
  'source/blocks/**/*.pug',
  '!source/pages/**/_*.pug',
  '!source/blocks/**/_*.pug'];

export function watchTemplates() {
  global.watch = true;
  gulp.watch(fileToCmopile, gulp.series(concatData, templates));

  // gulp.watch('src/css/**/*.css', styles);
  // gulp.watch('src/assets/img/*.{png,jpg,gif,svg}', images);
  // gulp.watch('src/assets/img/icons/*.svg', symbols);
}

export function watchData() {
  gulp.watch('source/blocks/**/data/data.js', gulp.series(concatData, templates));
}

// export default watch;
