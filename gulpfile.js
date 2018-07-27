const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('imageMin', () =>
    gulp.src('public/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('minify', () =>
    gulp.src('public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
);