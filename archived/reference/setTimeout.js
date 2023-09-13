var util = require('util');

console.log(util.inspect(process.memoryUsage()));

console.log(`Start`);
// process.exit(1);
// console.log(process.execPath);
// console.log(process.env);
setTimeout(function() {
    console.log("Callback");
}, 5000);

//! Block main thread for 10 seconds

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000) {

    endDate = new Date().getTime();
}

console.log("While Expires");



