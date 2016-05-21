var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



//* Processes SCSS and coppies to build
gulp.task('sass', function(){
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

//* Concatinate JS Files
gulp.task('js', function(){
  return gulp.src(['./src/js/vue.min.js','./src/js/app.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});


//* Gulp watch Files
gulp.task('serve', ['sass'],  function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
gulp.watch('./src/scss/**/*', ['sass']);
gulp.watch("*.html").on('change', browserSync.reload);
});
