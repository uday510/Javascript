'use strict';

/**
 * ! callback hell
 * ! callback inside callback
 */

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {

//   //! AJAX call country (1)
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request1.send();

//   request1.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //! Render Country (1)
//     renderCountry(data);

//     //! Get Neighbour Country (2)
//     const neighbour = data.borders;

//     if(!neighbour) return;

//   //! AJAX call country (2)
//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour[0]}`);
//   request2.send();

//   request2.addEventListener('load', function() {
//     const data2 = JSON.parse(request2.responseText);
//     console.log(data2);

//     renderCountry(data2, 'neighbour');
//   });

//   });
// }

// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('republic of india');

// setTimeout( () => {
//   console.log(`1 second passed`);
//   setTimeout( () => {
//   console.log(`2 seconds passed`);
//         setTimeout( () => {
//          console.log(`3 seconds passed`);
//               setTimeout( () => {
//               console.log(`4 seconds passed`);
//                     setTimeout( () => {
//                     console.log(`5 seconds passed`);
//                       }, 1000);
//               }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

/**
 * ! Promises (To escape callback hell)
 */

//  const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour[0]}`);
//   request2.send();

/**
 * ! Promise : An object that is used as a placeholder for the future result of an asynchronous operation.
 * 
 * ! less formal definition
 * ? >> A container for an asynchronously delivered value.
 * ? >> A container for a future value.
 * 
 * ! Promise life cycle
 * ? Pending --> Settled --> Fulfilled (Success! The value is now available) OR Rejected (An error happened).
 * ? Promise is settled only once.
 * ? Promise is either fulfilled or rejected.
 * 
 * ? BUILD PROMISE(fetch API returns promise) --> CONSUME PROMISE (promise returned from fetch API).
 */

// const request = fetch('https://restcountries.com/v2/name/usa');

// console.log(request);

// const renderError = function(msg) {
//   countriesContainer.insertAdjacentHTML('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// }
// const getCountryData = function(country) {
  
//   //Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(response => {
//     console.log(response);

//     if(!response.ok) 
//         throw new Error(`Country not found ${response.status}`)
//     return response.json()
//   })
//   .then(data => {
//     renderCountry(data[0]);

//     const neighbour = data[0].borders;
//     // const neighbour = "Cetrsh";
//     console.log("NEIGHBOUR", neighbour);
//     if(!neighbour) return;

//     //Country 2
//    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//   })
//   .then((response) => {
//      if(!response.ok) 
//         throw new Error(`Country not found ${response.status}`)
//     response.json()
//   })
//   .then(data => renderCountry(data, 'neighbour'))
//   .catch((error) => {
//     // alert(error.message)
//     console.log(error.message);
//     renderError(`Something went wrong 💥💥 ${error.message}. Try again!`)
//   })
//   .finally( () => {
//       countriesContainer.style.opacity = 1;
//   });
// }

// btn.addEventListener('click', function() {
//   getCountryData('portugal');
// })

// getCountryData('afvgbjsbiunr');

/**
 * ! Promises
 */
// console.log(`Test start`); 

// setTimeout(() => console.log(`O sec Timer`), 0); 
// Promise.resolve(`Resolved Promise 1`). 
// then(res => console.log(res)); 

// Promise.resolve(`Resolved Promise 2`). 
// then(res => {
//   console.log(res);
// }); 

// console.log("Test End"); 

// const lotteryPromise = new Promise(function(resolve, reject) {

//   console.log(`Lottery Draw is happening...`);
//   setTimeout(function() {
//   if(Math.random() >= 0.5) {
//     resolve(`YOU WIN 💰`);
//   } else {
//     reject(new Error(`YOU LOST YOUR MONEY 💩`));
//   }
//   }, 2000)

// });

// lotteryPromise.then(res => console.log(res))
//               .catch(err => console.log(err))
//               .finally(() => console.log('promise completed'))

//! Promisifying setTimeout
// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//       setTimeout((resolve, seconds * 1000));
//     });
// };

// wait(1).then(() => {
//   console.log(`Waited for 1 second`);
//   return wait(2);
// }).then(() => {
//   console.log(`Waited for 2 seconds`);
//   return wait(3);
// }).then(() => {
//   console.log(`Waited for 3 seconds`);
//   return wait(4);
// }).then(() => {
//   console.log(`Waited for 4 seconds`);
// });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.log(x));

// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => console.log(position), 
    //   err => console.log(err)
    // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
// }

// getPosition().
// then(pos => console.log(pos))
// .catch(err => console.error(err))

/**
 * ! Async Await (does not block main thread)
 */

// const whereAmI = async function(country) {
//     const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//     const data = await res.json();
//     console.log(data);

    /**
     * fetch(`https://restcountries.com/v2/name/${country}`).then( res => console.log(res) )
    * 
     */
// }

// whereAmI('usa');
// console.log("FIRST STATE");


// try {
//   let y = 1;
//   const x = 2;
//   x = 3
// } catch (e) {
//     console.log(new Error (e));
// }

// console.log("bye");




/**
 * ! Running promises in parallel
 */

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// !Running Promises in Parallel
// const get3Countries = async function (c1, c2, c3) {
//   try {
   /**
    * ! Bad Practice (all run promises in parallel)
    *  const [data1] = await getJSON(
      `https://restcountries.com/v2/name/${c1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.com/v2/name/${c2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.com/v2/name/${c3}`
    );
    console.log([data1.capital, data2.capital, data3.capital]);
    */

    /**
     * ! Promise.all()
     */
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//     // console.error(err);
//   }
//   } catch (err) {
//     console.error(err);
    // console.error(err);
//   }
// };
// get3Countries('usa', 'canada', 'mexico');



/**
 * ! Promise.race (only 1 promise settled)
 */

// (async function() {
//     const res = await Promise.race([
//       getJSON(`https://restcountries.com/v2/name/italy`),
//       getJSON(`https://restcountries.com/v2/name/egypt`),
//       getJSON(`https://restcountries.com/v2/name/mexico`),
//     ]);
//     console.log(res[0]);
// })();

const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request Timeout: ${sec}`))
        }, sec * 1000)
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/tanzania`),
    timeout(0.1)
]).then(res => console.log(res))
  .catch(err => console.error(err));

/**
 * ! Promise.allSettled (ES 2020)
 */

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.resolve('Success'),
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success')
]).then(res => console.log(res))
  .catch(err => console.error(err));

//! Promise.any (ES 2021) (returns first fulfilled promise)

Promise.any([
    Promise.resolve('Success'),
    Promise.resolve('Success'),
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success')
]).then(res => console.log(res))
  .catch(err => console.error(err));