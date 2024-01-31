function* getNums(count) {

    // for (let i = 1; i < count; ++i) {
    //     yield i;
    // }
    const value = yield 0;
    yield value + 3;
}

const generator = getNums(10);

// for (let val of generator) {
//     console.log(val);
// }

console.log(generator.next());
console.log(generator.next());

