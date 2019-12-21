const fs = require('fs'),
	path = require('path'),
	dirname = path.resolve();

//=>MKDIR && RMDIR && READ-DIR && READ-FILE && COPY-FILE
['mkdir', 'rmdir', 'readdir', 'readFile', 'copyFile', 'unlink'].forEach(item => {
	exports[item] = function (pathname, copypath = '') {
		pathname = path.resolve(dirname, pathname);
		copypath = path.resolve(dirname, copypath);
		return new Promise((resolve, reject) => {
			let arg = [(err, result) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(result || '');
			}];
			if (item === 'readFile') {
				!/(JPG|JPEG|PNG|GIF|SVG|ICO|BMP|EOT|TTF|WOFF|MP3|MP4|OGG|WAV|M4A|WMV|AVI)$/i.test(pathname) ? arg.unshift('utf8') : null;
			}
			item === 'copyFile' ? arg.unshift(copypath) : null;
			fs[item](pathname, ...arg);
		});
	};
});

//=>WRITE && APPEND
['writeFile', 'appendFile'].forEach(item => {
	exports[item] = function (pathname, content) {
		pathname = path.resolve(dirname, pathname);
		if (typeof content !== 'string') {
			content = JSON.stringify(content);
		}
		return new Promise((resolve, reject) => {
			fs[item](pathname, content, 'utf8', (err, result) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(result || '');
			});
		});
	};
});