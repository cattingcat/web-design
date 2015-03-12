var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');

var p = {
	src: {
		styles: 	'./src/styles/site.scss',
		html: 		'./src/html/*.html',
		js: 		'./src/scripts/*.js'
	},
	build: {
		styles: 	'./build/site/styles',
		html: 		'./build/site/',
		js: 		'./build/site/scripts/'
	},
	watch: {
		scss: 		'./src/styles',
		html: 		'./src/html',
		js: 		'./src/scripts/'
	}
}

gulp.task('scss:build', function(){
	gulp.src(p.src.styles)
        .pipe(sass())
        .pipe(gulp.dest(p.build.styles));
});

gulp.task('html:build', function(){
	gulp.src(p.src.html)
        .pipe(gulp.dest(p.build.html));
});

gulp.task('js:build', function(){
	gulp.src(p.src.js)
        .pipe(gulp.dest(p.build.js));
});



gulp.task('default', ['scss:build', 'html:build', 'js:build']);

gulp.task('watch', function(){
	watch([p.watch.scss], function(event, cb) {
        gulp.start('scss:build');
    });
});