# gulp-markdown2html [![Build Status](https://travis-ci.org/mitsuruog/gulp-markdown2html.svg?branch=master)](https://travis-ci.org/mitsuruog/gulp-markdown2html)

> markdown to html bootstrap page converter

*Issues with the output should be reported on the marked [issue tracker](https://github.com/chjj/marked/issues).*


## Install

```
$ npm install --save-dev gulp-markdown2html
```


## Usage

```js
var gulp = require('gulp');
var markdown2html = require('gulp-markdown2html');

gulp.task('default', function () {
	return gulp.src('intro.md')
		.pipe(markdown2html())
		.pipe(gulp.dest('dist'));
});
```


## API

### markdown2html(options)

See the marked [options](https://github.com/chjj/marked#options-1).

#### theme

Specify the bootswatch theme. see other [themes](https://bootswatch.com/)

**Type**: `String`

**Default**: pure bootstrap

#### highlightTheme

Specify the highlightjs theme. see other [themes](https://highlightjs.org/static/demo/)

**Type**: `String`

**Default**: `github`

### markdown.marked

Access the `marked` object to customize the [lexer](https://github.com/chjj/marked#access-to-lexer-and-parser), [parser](https://github.com/chjj/marked#access-to-lexer-and-parser) or [renderer](https://github.com/chjj/marked#renderer).


## License

MIT © [mitsuruog](https://github.com/mitsuruog)
