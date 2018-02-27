import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import styles from './gulp/tasks/styles';
import templates from './gulp/tasks/templates';
import { imagesStatic, imagesBlocks } from './gulp/tasks/images';
import concatData from './gulp/helpers/concat-data';
import symbols from './gulp/tasks/symbols';
import watch from './gulp/tasks/watch';
import server from './gulp/tasks/server';

const build = gulp.series(
  clean, concatData,
  gulp.parallel(templates, styles, imagesStatic, imagesBlocks), symbols,
);

const dev = gulp.series(
  build,
  gulp.parallel(
    watch,
    server,
  ),
);

export { build, dev };
