const fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
	if (err) {
		throw err;
	}
	let i = 0;
	for (i = 0 ; i < list.length ; ++i) {

		if (list[i].indexOf('.') !== -1) {

			let ext = list[i].substr(list[i].lastIndexOf('.') + 1);
			
			if (ext.localeCompare(process.argv[3]) == 0) {
				console.log(list[i]);
			}
		}
	}
});