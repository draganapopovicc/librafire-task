import pkg from 'gulp';
const { src, dest, watch, series, parallel } = pkg;
import gulpif from 'gulp-if';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cleanCss from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import webpack from 'webpack-stream';
import { deleteAsync } from 'del';
import yargs from 'yargs';

const args = yargs(process.argv).argv;
const PRODUCTION = args.prod;

export const styles = (done) => {
  src(['src/scss/styles.scss']) //
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('dist/css'));

  done();
};

export const images = (done) => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}').pipe(imagemin()).pipe(dest('dist/images'));
};

export const scripts = (done) => {
  return src('src/js/app.js')
    .pipe(
      webpack({
        mode: PRODUCTION ? 'production' : 'development',
        devtool: !PRODUCTION ? 'inline-source-map' : false,
        output: {
          filename: 'app.js',
        },
      })
    )
    .pipe(dest('dist/js'));
};

export const copy = (done) => {
  return src(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*']).pipe(dest('dist'));
};

export const clean = () => {
  return deleteAsync(['assets']);
};

export const watchForChanges = (done) => {
  watch('src/scss/**/*.scss', series(styles));
  watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', series(images));
  watch('src/js/**/*.js', series(scripts));
};

export const dev = series(parallel(styles, images, scripts, copy), watchForChanges);
export const build = series(clean, parallel(styles, images, scripts, copy));
export default dev;
