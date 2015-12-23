const gulp = require('gulp');

const markdown2html = require('./index');
const runSequence = require('run-sequence');
const rename = require("gulp-rename");
const del = require('del');
const wrapper = require('gulp-wrapper');
const ghPages = require('gulp-gh-pages');

const bootstrapThemes = [
	'Cerulean',
	'Cosmo',
	'Cyborg',
	'Darkly',
	'Flatly',
	'Journal',
	'Lumen',
	'Paper',
	'Readable',
	'Sandstone',
	'Simplex',
	'Slate',
	'Spacelab',
	'Superhero',
	'United',
	'Yeti'
].map((theme) => theme.toLowerCase());

const githubRibbon = '<a href="https://github.com/mitsuruog/gulp-markdown2bootstrap"><img style="position: fixed; top: 0; right: 0; border: 0;z-index: 10001;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>';

gulp.task('clean', del.bind(null, ['docs']));

gulp.task('copy:images', () => {
	return gulp.src('./thumbnails/*.png', {
			base: '.'
		})
		.pipe(gulp.dest('docs'));
});

gulp.task('gen:theme', () => {
	bootstrapThemes.map((theme) => {
		return gulp.src('./test/fixture.md')
			.pipe(markdown2html({
				theme: theme,
			}))
			.pipe(wrapper({
				header: githubRibbon
			}))
			.pipe(rename(`${theme}.html`))
			.pipe(gulp.dest('docs'));
	});
});

gulp.task('gen:index', () => {
	return gulp.src('./readme.md')
		.pipe(markdown2html())
		.pipe(wrapper({
			header: githubRibbon
		}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('docs'));
});

gulp.task('ghPages', () => {
	return gulp.src('docs/**/*')
		.pipe(ghPages());
})

gulp.task('deploy', ['clean'], () => {
	runSequence(
		['gen:index', 'gen:theme', 'copy:images'],
		'ghPages'
	);
});
