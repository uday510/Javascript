// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
// fix
//     value: Number(prompt("Degree celsius")),
//   };

//   console.log(measurement);
//   console.table(measurement);

//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);
//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// console.log(measureKelvin());

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1998);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
// console.log(this);
// };

// calcAgeArrow(1998);

// const uday = {
//   year: 1998,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// uday.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = uday.calcAge; // method borrowing
// matilda.calcAge();

// const fn = uday.calcAge;

// fn();

// var firstName = "Jonas";

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
// console.log(this);
// console.log(2037 - this.year);

//   const self = this;
//   const isMillenial = function() {
//     console.log(self.year >= 1981 && self.year <= 1996);
// console.log(this.year >= 1981 && this.year <= 1996);
//   };
//   isMillenial();
// },
/**
 * ! Solution 2
 */
// const isMillenial = () => {
//   console.log(this);
// console.log(this.year >= 1981 && this.year <= 1996);
// console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// console.log(this.firstName);

// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(addExpr(2, 5, 10, 23));

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
// }

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Jonas",
//   age: 30,
// };

// const friend = me;

// friend.age = 27;

// console.log("Friend", friend);
// console.log("Me", me);

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before', jessica);
// console.log('After', marriedJessica);

const jessicaCopy = Object.assign({}, jessica);

jessicaCopy.lastName = 'Davis';

 console.log('Before', jessica);
console.log("After", jessicaCopy);