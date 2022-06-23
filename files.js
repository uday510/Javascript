console.time('took')
// const fs = require('fs')

// try {
//     const file = fs.openSync('C:\\Users\\UDAY\\Desktop\\sorted.txt', 'r');

//     console.log(file.fd);
// } catch (err) {
//     console.error(err);
// }



const path = require('path');
const fs = require('fs/promises');
const { log } = require('console');
// Or const fs = require('fs').promises before v14.
async function example() {
  let filehandle;
  try {
    filehandle = await fs.open('C:\\Users\\UDAY\\Desktop\\sorted.txt', 'a+');
    console.log(filehandle.fd);
    console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } catch (e) {
      console.log(e);
  }finally {
    await filehandle.close();
  }
}
// example();
// const fs = require('fs/promises');

//! File stats
async function statsFn() {
  try {
    const stats = await fs.stat('C:\\Users\\UDAY\\Desktop\\sorted.txt');
    console.log(`isFile ${stats.isFile()}`); // true
    console.log(`isDirectory ${stats.isDirectory()}`);// false
    console.log(`isSymbolicLink ${stats.isSymbolicLink()}`);// false
    console.log(`size ${stats.size}`);// 1024000 //= 1MB
  } catch (err) {
    console.log(err);
  }
}
// statsFn();

const filePath = 'C:\\Users\\UDAY\\Desktop\\node.txt';

console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));

//! Read File


async function readFile() {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
readFile();


//! Write File

async function writeFile() {
  try {
    const content = 'Some content!';
    await fs.writeFile('C:\\Users\\UDAY\\Desktop\\node.txt', content,  { flag: 'a+' }, err => {
        console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
}
// writeFile();

//! Append to File
async function appendFile() {
  try {
    const content = 'File Updated!';
    await fs.appendFile('C:\\Users\\UDAY\\Desktop\\node.txt', content);
  } catch (err) {
    console.log(err);
  }
}
// appendFile();
console.timeEnd('took');