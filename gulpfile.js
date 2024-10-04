const gulp =  require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imgmin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp
    .src('./src/imgs/**/*',  {encoding: false})
    .pipe(gulp.dest('./dist/imgs'));
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default =  gulp.parallel(styles, images ,scripts);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/.js', gulp.parallel(scripts))
}