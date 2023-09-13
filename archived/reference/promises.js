/**
 * ! new Promise = new Promise ( (resolve, reject) => { ...})
 * ? .then( successCallback)
 * ? .catch(errorCallback)
 * ? .finally(finallyCallback)
 *
 */
//! https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
// resolve( "connected to database");

const { set } = require("lodash");

// reject( () => {
//     return "Error in connecting to aws rds server";
// });
// resolve("resolved");
//     reject("rejected");
//   }, 1000);
// });

// newPromise
//   .then((resolve) => {
//     console.log("promise resolved", resolve);
//     return resolve;
//   })

// .catch((reject) => {
// console.log(reject());
// console.log(reject, "promise rejected");
// })

// .finally(() => {
//   console.log("promise completed");
// });


//! Promise Hell Example
// const newPromise = new Promise ((resolve, reject) => {

//     resolve( () => {
//         return "Success"
//     });
//     reject(() => {
//         return "Failure"
//     });
// });

// newPromise
//     .then((resolve) => {
//         console.log("Promise Resolved 1", resolve());
//         return resolve;
//     })
//     .then((resolve) => {
//         console.log("Promise Resolved 2", resolve());
//         return resolve;
//     })
//     .then((resolve) => {
//         console.log("Promise Resolved 3", resolve());
//         return resolve;
//     })
//     .then((resolve) => {
//         console.log("Promise Resolved 4", resolve());
//         return resolve;
//     })
//     .catch((err) => {
//         console.log("Promise Rejected", err());
//     })
//     .finally(() => {
//         console.log("Final Block");
//     });

// //! Promise.All

// connectDB()
//     .then((database) => {
//         return findMenu(database)
//             .then((menu) => {
//                return getUser(database)
//                .then((user) => {
//                    return suggestItems(menu, user);
//                });

//             });
//     });

// const databasePromise = connectDB();

// const menuPromise = databasePromise
//     .then(findMenu);
// const userPromise = databasePromise
//     .then(getUser);
// Promise.all([userPromise,
//             menuPromise
// ])
//     .then(([menu, user]) => suggestItems(menu, user));

// const crypto = require("crypto");
// const start = Date.now();
// function logHashTime() {
//  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
// console.log("Hash: ", Date.now() - start);
//  });
// }
// logHashTime();

// async function fun(req, res) {
//     let response = await request.get('https://restcountries.com/v2/alpha/ind');
//      if (response.err) { console.log('error');}
//     else { console.log('fetched response') };
// }

//! Array of Promises

function promiseAll(promises) {
  const outputs = [];
  let settledPromiseCounter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          outputs[i] = value;
          settledPromiseCounter++;
          if (settledPromiseCounter === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });
}

const slowPromise = new Promise((res) => {
  setTimeout(() => res("done"), 2000);
});
const promises = [
  Promise.resolve(2),
  Promise.resolve(10),
  Promise.resolve("Promise Resolved"),
  Promise.reject("Promise Rejected"),
  slowPromise,
];

// promiseAll(promises)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

promiseAll(promises).then(console.log).catch(console.log);

console.log("HI")


const promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('connected to database.')
  }, 1000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Promise Complete');
  })