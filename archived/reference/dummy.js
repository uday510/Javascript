// const http = require('http');

// var hostname = '127.0.0.1';
// var port = 4000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World! from port 4000');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server listening at http://${hostname}:${port}`);
// });

let status = false;
let isInternetDisconnected;
let count = 1;

if (!status) {
  console.log("Not connected");
  var temp = setInterval(() => {
    if (count === 5) {
        console.log("Connected");
      clearInterval(temp);
    } else {
        console.log("Still not connected", count++);
    }
  }, 1000);
}
