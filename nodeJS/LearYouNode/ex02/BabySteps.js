let sum = 0;







process.argv.forEach(function (arg) {
  if (isNaN(arg) == false) {
    sum = sum + parseInt(arg);
  }
});

console.log(sum);
