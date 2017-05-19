const fs = require('fs');
let count = 0;

fs.readFile(process.argv[2], "utf-8", function (err, data) {
	if (err) {
		throw err;
	}
	let i = 0;
	for(i = 0; i < data.length; ++i) {
		if (data[i] == "\n") {
			++count;
		}
	}
	console.log(count);
});
