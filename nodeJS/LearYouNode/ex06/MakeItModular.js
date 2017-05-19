const myModule = require('./MakeItModular_module');

const callback = (err, list) => {
	if (err) {
		throw err;
	}
	list.forEach((fileName) => {
		console.log(fileName);
	});
}

myModule(process.argv[2], process.argv[3], callback);