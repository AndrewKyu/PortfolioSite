const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
gulp.task("nodemon", cb => {
  var started = false;

  return nodemon({
    script: "server.js"
  }).on("start", () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});
gulp.task("minify", () =>
  gulp
    .src("public/js/*.js")
    .pipe(uglify())
    .pipe(concat("compressed.js"))
    .pipe(gulp.dest("./public/js"))
);
gulp.task("minify-css", () => {
  return gulp
    .src("./public/css/*.css")
    .pipe(cleanCSS())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("default", ["nodemon"]);
