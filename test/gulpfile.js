const gulp = require('gulp');

gulp.task('default', () => {
	gulp.src('fixture.md')
		.pipe(require('../index.js')({
      theme: 'sandstone',
      highlightTheme: 'zenburn',
    }))
		.pipe(gulp.dest('./'));
});
