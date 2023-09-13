'use strict';
// const begin = Date.now();
console.time();
/**
 * ! Default parameters
 */
// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 199) { // ES6 Way of defining default arguments

    /**
     * ES5 Default arguments
     * numPassengers = numPassengers || 1;
     * price = price || 1
     */
//     const booking = {
//     flightNum,
//     numPassengers,
//     price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123');
// createBooking('LH123');

// const flight = 'LH234';
// const jonas = {
//     name: "John F Kennedy",
//     passport: 123456789
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 123456789) {
//         console.log('Check In');
//     } else console.log('Wrong Passport');
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport= function(person) {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jonas);
// checkIn(flight,jonas)

/**
 * ! First class Functions vs Higher Order Functions
 */

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// Higher Order Function
// const transformer = function(str, fn) {
    // console.log(str);
//     const output = fn(str);
//     console.log(output);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best', upperFirstWord);

// transformer('JavaScript is the best', oneWord);

// const high5 = function() {
//     console.log('👋');
// }

// document.addEventListener('click', high5);

// ['jonas', 'atom', 'silicon', ].forEach(high5);


// const greet = (greeting) => 
// (name) => console.log(`${greeting} ${name}`);

// greet('Hey')('Bitch');

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} ${flightNum}.`);
//         this.bookings.push(`${name} booked a seat on ${this.airline} ${flightNum}.`);
//         console.log(this.bookings);
//     }
// }


// lufthansa.book(239, 'Jonas Smith');

// const euroWings = {
//     airline: 'EuroWings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// Does not work.
// book(23, 'Eminem');

// book.call(euroWings, 23, 'Eminem');

// book.call(lufthansa, 239, 'TH')


// const swiss = {
//     airlines: 'Swiss Air lines',
//     iataCode: 'SW',
//     bookings: [],
// }

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

 /**
 * ! Apply method
 */

// const flightData = [583, 'George Washington'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookKLX = book.bind(swiss);

// bookEW(23, 'Steve Rogers');

// const bookEW23 = book.bind(euroWings, 25);
// bookEW23('JOCKEY');
// bookEW23('DA-VINCI');

/**
 * ! Immediately Invokes functions
 */


// (function() {
//     console.log(`This will never run again`);
// })();

// (() => console.log('This will never run'))();
// dotContainercxz

// console.timeEnd();

/**
 * ! Closures
 */

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

// const booker1 = secureBooking();
// const booker2 = secureBooking();

// booker1();
// booker1();
// booker2();

// console.dir(booker1);
// console.dir(booker2);

//? Example 2
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

// g();
// f();
// console.dir(f)
// Re-assigning f function
// h();
// f();
// console.dir(f);

//? Example 2

const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

     setTimeout( function() {
        console.log(`We are boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds.`);
}

boardPassengers(100, 3);
