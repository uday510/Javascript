'use strict';

/**
 * ? Topics Included:
 *! High-level
 *! Garbage-collected
 *! Interpreted or just-in-time compiled
 *! Multi-paradigm
 *! Prototype-based object-oriented
 *! First-class functions
 *! Dynamic
 *! Single-threaded
 *! Non-blocking event loop
 */

 /**
  * ! Paradigm types
  * ? 1. Procedural Programming.
  * ? 2. Functional programming.
  * ? 3. Object-oriented programming.
  */

 /**
  * ! Scoping
  */

//  function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     console.log(lastName);
//     function printAge() {
//         const output = `${firstName} You are born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = "LOL";
//             const str = `Oh, and you're a millenial.
//                     ${firstName}`;
//                     console.log(str);
//             function add(a, b) { //! block scoped only in strict mode.
//                 return a + b;
//             }
           
//         }
//         console.log(str);
//         console.log(millenial); 
//         console.log( add(1, 2));
//     }
//     printAge();
//     return age;
//  }

//  const firstName = 'Jones';
//  console.log( calcAge(1991));

/**
 * ! Hoisting and Temporal Dead Zone.
 */
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'LOL';
// let job = 'Learner';
// const year = 1991;

// Function

// console.log(addDecl(1, 2));
// console.log(addEpr(1, 2));
// console.log(addArrow(1, 2));
// function addDecl(a, b) {
//     return a + b;
// }
// const addEpr = function (a, b) { // TEMPORAL DEAD ZONE
//     return a + b;
// }
// const addArrow = (a, b) => a + b; // TEMPORAL DEAD ZONE

// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//     console.log(`All products deleted successfully.`);
// }
// var x = 1;
// let y = 2;
// let z = 3;

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(100);

// const calcAgeArrow = (birthYear) => {
//     console.log("Arrow", 2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1000);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017,

// };

// matilda.calcAge = jonas.calcAge; //! Method borrowing

// matilda.calcAge();

/**
 * ! Regular functions vs Arrow Functions
 */

// const firstName = 'jonas (global scope)';

// const jonas = {
//     firstName: "jonas (jonas object)",
//     year: 1991,
//     calcAge: function() {
        // console.log(this);
        // console.log(2037 - this.year);
        // const self = this;
        
        //!Solution 1
        // const isMillenial = function() {
        //  console.log(this); // set to undefined by default.
            // console.log(self);
        //     console.log(this.year >= 1981 && this.year <= 1996); // referenceError
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // isMillenial();

        //! Solution 2
//         const isMillenial = () => {
//           console.log(this); //? set to jonas object (parent's scope).
//             console.log(this.year >= 1981 && this.year <= 1996); // referenceError
//         }
//         isMillenial();
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },

//     regularFn: function() {console.log(this.firstName);}
// };

// jonas.calcAge();
// jonas.greet();

// ! Arguments keyword
// ! Arguments keyword only exists in regular function expressions and regular function declarations
// const addExpr = function (a, b) {
//     console.log(arguments);
//     for(let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//     return a + b;
// };

// console.log(addExpr(2, 5, 8, 12));
// console.log(addExpr(2, 5));
// var addArrow = (a, b) => {
//     console.log(arguments); // referenceError
//     console.log(a, b);
// }

// addArrow(2, 5, 8, 12); 


/**
 * ! Primitives vs Objects (Primitive vs. Reference Types)
 * 
 * ! (Primitive Types) Primitives Data Types:
 * ? Number, String, Boolean, Undefined, Null, Symbol, BigInt
 * ? Primitive types are stored in JS Engine's call-stack (Execution context in which they declared)
 * 
 * ! WARNING: VALUE AT CERTAIN MEMORY ADDRESS IS IMMUTABLE.
 * 
 * ! (Reference Types) Objects:
 * ?  Object literal, Arrays, Functions, Many more...
 * ? Reference Types are directly stored in JS Engine's Heap Memory.
 */

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'jonas',
//     age: 30,
// };

// const friend = me; //! Friend variable referring to me object.
// friend.age = 27;

// console.log('Friend', friend);
// console.log("Me", me);

//! Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//! Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica; // Both refers to same memory
// marriedJessica.lastName = 'Davis';

// console.log("Before marriage:", jessica);
// console.log("After marriage:", marriedJessica);

//! Copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob', 'Foo', 'Bar', 'Baz']
};

//Object.assign() works only for first level i.e shallow copy and not a deep copy.

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';

// console.log("Jessica copied", jessicaCopy);

jessicaCopy.family.push('Monica');
jessicaCopy.family.push('Keerthana');

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
