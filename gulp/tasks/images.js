import gulp from 'gulp';
import newer from 'gulp-newer';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';

const fileStaticToProcessing = [
  'source/static/img/**/*.{jpg,jpeg,png,gif,svg}',
  '!source/static/img/svg/*.svg',
];

const fileBlocksToProcessing = [
  'source/blocks/**/assets/*.{jpg,jpeg,png,gif,svg}',
];

export function imagesStatic() {
  return gulp.src(fileStaticToProcessing)
    .pipe(newer('build/img/'))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 4 }),
      imagemin.svgo({
        plugins: [
          { cleanupAttrs: true },
          { cleanupIDs: false },
          { removeDoctype: true },
          { cleanupEnableBackground: true },
          { cleanupNumericValues: true },
          { collapseGroups: true },
          { removeTitle: true },
          { removeEmptyAttrs: true },
          { removeEditorsNSData: true },
          { convertStyleToAttrs: true },
          { collapseGroups: true },
        ],
      }),
    ]))
    .pipe(gulp.dest('build/img'));
}

export function imagesBlocks() {
  return gulp.src(fileBlocksToProcessing)
    .pipe(newer('build/img/'))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 4 }),
      imagemin.svgo({
        plugins: [
          { cleanupAttrs: true },
          { cleanupIDs: false },
          { removeDoctype: true },
          { cleanupEnableBackground: true },
          { cleanupNumericValues: true },
          { collapseGroups: true },
          { removeTitle: true },
          { removeEmptyAttrs: true },
          { removeEditorsNSData: true },
          { convertStyleToAttrs: true },
          { collapseGroups: true },
        ],
      }),
    ]))
    .pipe(rename({ dirname: './assets/' }))
    .pipe(gulp.dest('build/img'));
}

