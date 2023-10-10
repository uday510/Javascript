// // state -> pending, fulfilled, rejected
// console.clear();
// const { log } = require("console");

// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => resolve('Promise Resolved'), 1000);

//     // reject('Promise Rejected');
// });

// // console.log(promise);

// // setTimeout(() => console.log(promise), 1500);

// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Promise Completed'));


// const promise1 = Promise.resolve(10);

// // console.log(promise1);

// promise1
//     .then(val => val + 1)
//     .then(val => val * 2)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//         return 10;
//     })
//     .then(console.log)
//     .finally(console.log('Promise Completed'));



// Promise.all([
//     Promise.resolve(10),
//     Promise.resolve(20),
//     Promise.resolve(30),
//     new Promise((res, rej) => setTimeout(() => rej('Promise Rejected'), 1000))
// ]).then(console.log).catch(err => console.log(err));


// Promise.any([
//     new Promise((res, rej) => setTimeout(() => res(10), 2000)),
//     new Promise((res, rej) => setTimeout(() => res(100), 2000)),
//     new Promise((res, rej) => setTimeout(() => rej('Oh no'), 1000))
// ]).then(console.log);




async function tester() {
    return await new Promise((res, rej) =>
        setTimeout(() => rej(new Error('Something went wrong')),
        1000));

}


tester()
    .then(res => console.log(res))
    .catch(err => console.log(err));


console.log('Promise Completed');