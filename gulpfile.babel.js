import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import styles from './gulp/tasks/styles';
import templates from './gulp/tasks/templates';
import images from './gulp/tasks/images';
import concatData from './gulp/helpers/concat-data';
import symbols from './gulp/tasks/symbols';
import { watchTemplates, watchData } from './gulp/tasks/watch';
import server from './gulp/tasks/server';

// const build = gulp.parallel(styles, templates, img);
const build = gulp.series(clean, concatData, gulp.parallel(templates, styles));

// const dev = gulp.series(clean, concatData, templates, watchTemplates);
// const dev = gulp.series(
//   build,
//   gulp.parallel(
//     watchData,
//     watchTemplates,
//     server,
//   ),
// );
const dev = gulp.series(clean, build, symbols);

export { build, dev };
