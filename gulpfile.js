
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

var assetsPath = "app/js/*.js";

// Concat each js file
gulp.task('scripts', function(){
	// Define source of files to concat
	return gulp.src(assetsPath)
		// Set the name of the file with all concat js
		.pipe(concat('app.js'))
		// Set the directory where the file will be
		.pipe(gulp.dest('public/js'))
});

// Minify js
gulp.task('script-prod',function(){
	return gulp.src("public/js/app.js")
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('public/js'))
});




gulp.task('scripts-prod', function() {
    return gulp.src("public/js/main.js")
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('default',['scripts', 'script-prod']);