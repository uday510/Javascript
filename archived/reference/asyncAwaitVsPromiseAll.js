// //! Promise.all
// Promise.all( [getStreetAddressPromise, getCityPromise, getStatePromise, getZipPromise ])
// .then( ([streetAddress, city, state, zip])=> {
//     return `${streetAddress}, ${city}, ${state}, ${zip}`
// })  

const { set } = require("lodash");

// //! async / await

// async function getAddress() {
//     const streetAddress = await getStreetAddress();
//     const city = await getCity();
//     const state = await getState();
//     const zip = await getZip();
//     return `${streetAddress}, ${city}, ${state}, ${zip}`;
// }

// getAddress();

// // let now = new Date().getTime();
// // let timE = now + 5000;
// // while(now < timE) {
// //     now = new Date().getTime();
// // }

// function getStreetAddress() {
//     return "a";
// }

// function getCity() {
//     setTimeout ( () => {
     
//         //  console.log("b");
//              return "b";
//     }, 5000)
// }
// function getState() {
//     return "C";
// }

// function getZip() {
//     return "d";
   
// };

// Promise.all ( [getStreetAddressPromise, getCityPromise, getStatePromise, getZipPromise])
//     .then(([streetAddress, cityAddress, stateAddress, zip]) => {
//         return `${streetAddress} ${cityAddress} ${stateAddress} ${zip}`
//     });
    
// async function getAddress() {
//     const streetAddress = await getStreetAddressPromise();
//     const cityAddress = await getCityAddressPromise();
//     const stateAddress = await getStateAddressPromise();
//     const zip = await getZipPromise();
//     return `${streetAddress} ${cityAddress} ${stateAddress} ${zip}`;
// }

// function getStreetAddress() {
//     return "Street";
// }

// function getCity() {
//     return "City";
// }

// function getState() {
//     return "State";
// }

// function getZipCode() {
//     return "Zip Code";
// }



function resolveAfter5Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Promise Resolved After 5 Seconds');
        }, 5000);
    });
}

async function asyncFunction() {
    console.log('Calling asyncFunction');

    const result = await resolveAfter5Seconds();
        console.log(result);
   
        console.log('Promise Completed');
}

asyncFunction();