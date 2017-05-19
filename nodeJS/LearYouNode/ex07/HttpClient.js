const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
	res.on("error", (error) => {
		return console.log(error);
	});
	res.on("data", (data) => {
		return console.log(data.toString());
	});
	res.on("end", () => {
		return ;
	});
});