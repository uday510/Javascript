// const http = require('http');

// const port = process.env.PORT || 4000;

// const server = http.createServer( (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World!</h1>');
// });

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// })


const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const https = require('https');

const options = {
    hostname: 'udayteja.com',
    port: 4000,
    path: '/www',
    method: 'GET'
};

const req = https.request(options, res => {
    console.log(`status code: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
});


req.end();

