const buf = Buffer.alloc(1024);

buf.write('Hey!');
// for (const item of buf) {
//   console.log(item); // 72 101 121 33
// }

console.log(buf.length);


