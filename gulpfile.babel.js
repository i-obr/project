import gulp from 'gulp';
import styles from './gulp/tasks/styles';
import html from './gulp/tasks/html';
import img from './gulp/tasks/img';

const build = gulp.parallel(styles, html, img);

const dev = gulp.series(build);

export { build, dev };
