const gulp = require('gulp');

gulp.task('default', () => {
	gulp.src('fixture.md')
		.pipe(require('../index.js')({
      theme: 'sandstone'
      //highlightjsThema: 'zenburn'
    }))
		.pipe(gulp.dest('./'));
});
