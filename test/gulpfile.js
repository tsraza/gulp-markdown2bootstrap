const gulp = require('gulp');

gulp.task('default', () => {
	gulp.src('fixture.md')
		.pipe(require('../index.js')({
      thema: 'sandstone'
      //highlightjsThema: 'zenburn'
    }))
		.pipe(gulp.dest('./'));
});
