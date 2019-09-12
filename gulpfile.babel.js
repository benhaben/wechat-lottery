import gulp from "gulp";
import del from "del";
var webpack = require("webpack-stream");
const named = require("vinyl-named");

const paths = {
  scripts: {
    src: ["faas/*.js"],
    dest: "faas/webpack/"
  }
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del(["faas/gulp/"]);

export function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(named())
    .pipe(
      webpack({
        target: "node",
        output: {
          library: "exports.main",
          libraryTarget: "assign",
          libraryExport: "default"
        },
        mode: "production"
        // mode: "development"
        // devtool: "inline-source-map"
      })
    )
    .pipe(gulp.dest(paths.scripts.dest));
}

/*
 * You could even use `export as` to rename exported tasks
 */
function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
}
export { watchFiles as watch };

const build = gulp.series(clean, gulp.parallel(scripts));
/*
 * Export a default task
 */
export default build;
