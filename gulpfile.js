var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat-util');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var cssnano = require('gulp-cssnano');

var loadingScreenInit = "$(\'.loading\').css({\n\'display\':\'flex\'\n});\n";
var disableScroll = '$(\'html, body\').css({\n\'overflow\': \'hidden\', \n\'height\': \'100%\'\n});\n';
var readyWrap = '$(function(){\n';

gulp.task('jsbundle', function() {
    gulp.src('js/assets/{,*/}*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets:[env],
            plugins:[strict],
        }))
        .pipe(concat('js.bundle.js'))
        .pipe(concat.header(
            loadingScreenInit +
            disableScroll +
            readyWrap
            ))
        .pipe(concat.footer('\n});'))
        .pipe(gulpif('*.js', uglify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js/dist'))
});

gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({
            outputStyle:'expanded',
            sourceComments: 'map'
          }))
          .pipe(gulpif('*.css', cssnano()))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('css'))
          .pipe(browserSync.reload({
            stream: true
          }));
 });

gulp.task('reloadBrowser', function (done) {
   browserSync.reload();
   done();
});

 gulp.task('browserSync', function(){
   browserSync.init({
     server: {
       baseDir: "./"
     },
     browser: "google chrome"
   });
 });

gulp.task('watch',['browserSync','sass','jsbundle'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/assets/*.js',['jsbundle']);
  gulp.watch('js/dist/*.js', ['reloadBrowser']);
  gulp.watch('*.html',['reloadBrowser']);
});
