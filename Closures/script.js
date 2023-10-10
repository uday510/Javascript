// console.clear();

// function makeFunctions() {
//     let privateNum = 0;

//     function privateIncrement() {
//         privateNum++;
//     }
//     return {
//         logNum: () => console.log(privateNum),
//         increment: () => {
//             privateIncrement();
//             console.log('Incremented');
//         }
//     }
// }


// const { logNum, increment } = makeFunctions();
// logNum();

// increment();

// logNum();


for (let i = 0; i < 3; ++i) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}