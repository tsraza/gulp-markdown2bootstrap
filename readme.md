# gulp-markdown2bootstrap

[![Build Status](https://travis-ci.org/mitsuruog/gulp-markdown2bootstrap.svg?branch=master)](https://travis-ci.org/mitsuruog/gulp-markdown2bootstrap)

> markdown to html bootstrap page converter

*Issues with the output should be reported on the marked [issue tracker](https://github.com/chjj/marked/issues).*

## Install

```
$ npm install --save-dev gulp-markdown2bootstrap
```

## Usage

```js
var gulp = require('gulp');
var markdown2bootstrap = require('gulp-markdown2bootstrap');

gulp.task('default', function () {
	return gulp.src('intro.md')
		.pipe(markdown2bootstrap({
			theme: 'cerulean'
		}))
		.pipe(gulp.dest('dist'));
});
```

## DEMO

[![cerulean](./thumbnails/cerulean.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/cerulean.html)

[![cosmo](./thumbnails/cosmo.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/cosmo.html)

[![cyborg](./thumbnails/cyborg.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/cyborg.html)

[![darkly](./thumbnails/darkly.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/darkly.html)

[![flatly](./thumbnails/flatly.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/flatly.html)

[![journal](./thumbnails/journal.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/journal.html)

[![lumen](./thumbnails/lumen.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/lumen.html)

[![paper](./thumbnails/paper.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/paper.html)

[![readable](./thumbnails/readable.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/readable.html)

[![sandstone](./thumbnails/sandstone.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/sandstone.html)

[![simplex](./thumbnails/simplex.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/simplex.html)

[![slate](./thumbnails/slate.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/slate.html)

[![spacelab](./thumbnails/spacelab.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/spacelab.html)

[![superhero](./thumbnails/superhero.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/superhero.html)

[![united](./thumbnails/united.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/united.html)

[![yeti](./thumbnails/yeti.png)](http://mitsuruog.github.io/gulp-markdown2bootstrap/yeti.html)

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
