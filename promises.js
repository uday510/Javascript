/**
 * ! new Promise = new Promise ( (resolve, reject) => { ...})
 * ? .then( successCallback)
 * ? .catch(errorCallback)
 * ? .finally(finallyCallback)
 * 
 */
//! https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve( "connected to database");

        // reject( () => {
        //     console.log("Error in connecting to aws rds server");
        // });
        // resolve("resolved");
        // reject("rejected");

//     }, 1000);
// });

// newPromise
// .then ( (resolve) => {
//     console.log("promise resolved", resolve);
//     return resolve;
// })

// .catch( (reject) => {
//     console.log("promise rejected");
// })

// .finally ( () => {
//     console.log("promise completed");
// })

//! Promise Hell Example
const newPromise = new Promise ((resolve, reject) => {

    // resolve( () => {
    //     return "Success"
    // });
    reject(() => {
        return "Failure"
    });
});

newPromise
    .then((resolve) => {
        console.log("Promise Resolved 1", resolve());
        return resolve;
    })
    .then((resolve) => {
        console.log("Promise Resolved 2", resolve());
        return resolve;
    })
    .then((resolve) => {
        console.log("Promise Resolved 3", resolve());
        return resolve;
    })
    .then((resolve) => {
        console.log("Promise Resolved 4", resolve());
        return resolve;
    })
    .catch((err) => {
        console.log("Promise Rejected", err());
    })
    .finally(() => {
        console.log("Final Block");
    });


//! Promise.All

connectDB()
    .then((database) => {
        return findMenu(database)
            .then((menu) => {
               return getUser(database)
               .then((user) => {
                   return suggestItems(menu, user);
               });

            });

    });


const databasePromise = connectDB();

const menuPromise = databasePromise
    .then(findMenu);
const userPromise = databasePromise
    .then(getUser);
Promise.all([userPromise,
            menuPromise
])
    .then(([menu, user]) => suggestItems(menu, user));
