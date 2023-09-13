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