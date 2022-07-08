import {marked} from 'marked';
import {readFile, writeFile} from 'fs/promises';

function convert(c) {
	return new Promise((resolve, reject) => {
		resolve(marked.parse(String(c)));
	});
}

Promise.all([
	readFile('README.md').then(convert),
	readFile('layout.html')
]).then(([ content, tpl]) => {
	// let content = res[0], tpl = res[1];
	let output = String(tpl).replace('{content}', content);
	return writeFile('static/index.html', output);
})