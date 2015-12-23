'use strict';

var PLUGIN_NAME = 'gulp-markdown2html';

var gutil = require('gulp-util');
var through = require('through2');

var marked = require('marked');
var renderer = new marked.Renderer();
var jade = require('jade');
var path = require('path');
var merge = require('merge')
var toc = [];

//
// Block level renderer methods
//

// renderer.code = (code, language, escaped) => {};

renderer.blockquote = (quote) => {
	return '<blockquote>\n<p>' + quote + '</p>\n</blockquote>\n';
};

// renderer.html = (html) => {};

renderer.heading = (text, level, raw) => {
	var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

	toc.push({
		anchor: escapedText,
    level: level,
    text: text
	});

	return '<a class="anchor" id="' + escapedText + '"></a>\n' +
		'<h' + level + '><a name="' +
		escapedText +
		'" class="text-muted" href="#' +
		escapedText +
		'"><button type="button" class="btn btn-link btn-xs"><span class="glyphicon glyphicon-link"></span></button></a>' +
		text + '</h' + level + '>';
};

// renderer.hr = () => {};
// renderer.list = function(body, ordered) {};
// renderer.listitem = (text) => {};
// renderer.paragraph = (text) => {};

renderer.table = (header, body) => {
	return '<table class="table table-bordered">\n' +
		'<thead>\n' +
		header +
		'</thead>\n' +
		'<tbody>\n' +
		body +
		'</tbody>\n' +
		'</table>\n';
};

// renderer.tablerow = (content) => {};
// renderer.tablecell = (content, flags) => {};

//
// Inline level renderer methods
//

// renderer.strong = (text) => {};
// renderer.em = (text) => {};
// renderer.codespan = (code) => {};
// renderer.br = () => {};
// renderer.del = (text) => {};
// renderer.link = (href, tilte, text) => {};
// renderer.image = (href, title, text) => {};
// renderer.text = (text) => {};

module.exports = function(options) {

	options = options || {};
	options.highlightTheme = options.highlightTheme || 'github';
	options.highlight = options.highlight || function(code) {
		return require('highlight.js').highlightAuto(code).value;
	};

	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return;
		}

		marked(file.contents.toString(), merge(options, {
			renderer: renderer
		}), function(err, data) {
			if (err) {
				cb(new gutil.PluginError(PLUGIN_NAME, err, {
					fileName: file.path
				}));
				return;
			}

			var locals = {
				pkg: require('./package.json'),
				toc: toc,
				content: data
			};

			file.contents = new Buffer(jade.renderFile(__dirname + '/template/layout.jade', merge(options, locals)));
			file.path = gutil.replaceExtension(file.path, '.html');

			cb(null, file);
		});
	});
};

module.exports.marked = marked;
