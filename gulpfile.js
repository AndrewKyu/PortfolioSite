const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

// gulp.task("imageMin", () =>
//   gulp
//     .src("public/img/*")
//     .pipe(imagemin())
//     .pipe(gulp.dest("dist/images"))
// );

// gulp.task("minify", () =>
//   gulp
//     .src("public/js/*.js")
//     .pipe(uglify())
//     .pipe(gulp.dest("dist/js"))
// );

// gulp.task("minify-css", () => {
//   return gulp
//     .src("public/css/style.css")
//     .pipe(cleanCSS())
//     .pipe(gulp.dest("dist/css"));
// });

gulp.task("default", () => {});
