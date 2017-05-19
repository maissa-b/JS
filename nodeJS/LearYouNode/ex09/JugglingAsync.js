const http = require('http');
const bl = require('bl');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, (res) => {
	res.pipe(bl((err, data) => {
		data.on("end", () => {
			console.log(data.toString());
			http.get(url2, (res) => {
				res.pipe(bl((err, data) => {
					data.on("end", () => {
						console.log(data.toString());
						http.get(url3, (res) => {
							res.pipe(bl((err, data) => {
								data.on("end", () => {
									console.log(data.toString());
								}
			})
		})
	})
})