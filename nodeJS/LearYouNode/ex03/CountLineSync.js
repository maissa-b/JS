var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var i;
var count = 0;
for (i = 0; i < buf.length ;i++) {
  if (buf[i] == 10) {
    count++;
  }
}

console.log(count);
