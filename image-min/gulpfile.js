import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

import imageResize from 'gulp-image-resize';

gulp.task('optimise-images', () => {
	let imageResizeOptions = {
		width : 1920,
		height : 1920,
		crop : false,
		upscale : false
	}

	return gulp.src('images-source/*')
		.pipe(imagemin())
		.pipe(imageResize(imageResizeOptions))
		.pipe(gulp.dest('images-optimised'))
		.pipe(webp())
		.pipe(imageResize(imageResizeOptions))
        .pipe(gulp.dest('images-optimised'))
});



gulp.task('watch', () => {
	gulp.watch('images-source/*', gulp.series('optimise-images'));
});


gulp.task('build', gulp.parallel('optimise-images'));
gulp.task('default', gulp.parallel('build', gulp.parallel('watch')));