import gulp from 'gulp';
import concat from 'gulp-concat';

function concatDate() {
    return gulp.src('./source/blocks/**/data/data.js')
        .pipe(concat('mocksData.js', { newLine: ',\n\n' }))
        .pipe(gulp.dest('./build/temp/'));
}

export default concatDate;
