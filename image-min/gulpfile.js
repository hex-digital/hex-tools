import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task('optimise-images', () => {
	return gulp.src('images-source/*')
		.pipe(imagemin())
		.pipe(gulp.dest('images-optimised'))
		.pipe(webp())
        .pipe(gulp.dest('images-optimised'))
});


gulp.task('watch', () => {
	gulp.watch('images-source/*', gulp.series('optimise-images'));
});


gulp.task('build', gulp.parallel('optimise-images'));
gulp.task('default', gulp.parallel('build', gulp.parallel('watch')));