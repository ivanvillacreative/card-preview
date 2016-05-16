var gulp = require('gulp');
var sass = require('gulp-sass');



//* Processes SCSS and coppies to build
gulp.task('sass', function(){
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

//* Coppies The HTML file to the Build Folder
gulp.task('html', function(){
  gulp.src('./src/index.html')
  .pipe(gulp.dest('./build'));
});


//* Default Task
gulp.task('default', ['sass', 'html']);


//* Gulp watch Files
gulp.task('watch', function() {
gulp.watch('./src/scss/**/*', ['sass']);
});
