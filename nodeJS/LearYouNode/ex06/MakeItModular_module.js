const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {

		fs.readdir(directory, (err, list) => {

		if (err) {
			return callback(err);
		}

		let filteredList;

		filteredList = list.filter((fileName) => {

			if (path.extname(fileName) === '.' + extension) {
				return true;
			}
		});
		return callback(null, filteredList);
	});
};