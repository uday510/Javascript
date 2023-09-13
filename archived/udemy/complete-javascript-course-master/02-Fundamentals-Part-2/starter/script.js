/**
 *! 1. strict mode forbids us to do certain things.
 *! 2. It will actual create visible errors in certain situations in which
 *! without strict mode javascript fails silently without letting 
 *! us know that we did a mistake.
 */

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;

// if(hasDriversLicense) 
//     console.log("Hi");

// const interface = 'Audio';
// const private = 10;

function logger() {
    console.log('My name is Uday ');
}

// logger(); //! Calling || invoking || running function 

// function foodProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and
//         ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = foodProcessor(5, 0);

// console.log(appleJuice);

// const uday = {
//     firstName: 'Uday',
//     lastName: 'Teja',
//     age: 2037 - 2022,
//     job: 'development',
//     friends: ['LeetCode', 'LinkedIn', 'Google Chrome']
// };

// console.log(uday.lastName);
// console.log(uday['lastName']);

// const nameKey = 'Name';

// console.log(uday['first' + nameKey]);
// console.log(uday['last' + nameKey]);

// const aboutMe = prompt('Hi ASSHOLE, tell me about your self');

// console.log(aboutMe);

const uday = {
    firstName: 'Uday',
    lastName: 'Teja',
    birthYear: 1998,
    job: 'development',
    friends: ['LeetCode', 'LinkedIn', 'Google Chrome'],
    isAlive: true,
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        console.log(this);
    }
};

// uday.calcAge();
// console.log(uday.age);
// console.log(uday['calcAge'](1991));


