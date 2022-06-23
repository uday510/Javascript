const buf = Buffer.alloc(1024);


console.time('took');
buf.write('Hey!');
for (const item of buf) {
  console.log(item); // 72 101 121 33
}

console.timeEnd('took');
