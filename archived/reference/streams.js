const http = require('http');
const fs = require('fs');

process.env.NODE_ENV = 'production';


const dirname = 'C:\\Users\\UDAY\\Desktop';

const server = http.createServer(function (req, res) {
    console.time('took');
  fs.readFile(`${dirname}\\javascriptNotes.docx`, (err, data) => {
    res.end(data);
    console.timeEnd('took');
  });
});
server.listen(3000);

// console.log(process.env );
// const server = http.createServer( (req, res) => {
//     console.time('took');
//     const stream = fs.createReadStream(`${dirname}\\javascriptNotes.docx`);
//     stream.pipe(res);
//     console.timeEnd('took');
// });
// server.listen(4000);

