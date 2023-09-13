// console.time();
// let js = "Amazing";
//   if(js == "Amazing") {
//     alert("Javascript is fun");
//   }
// console.log( 40 + 8 + 23 - 10);

// console.log("Javascript");
// console.log(10);

// let foo = "Bar";

// console.log(foo);

// let myFirstJob = "Leaner";

// let myCurrentJob = "Leaner";

/**
 *todo: Primitive Data Types
 * 
 *? 1. Number : Floating point numbers --> Used for decimals and integers
 *? 2. String: Sequence of characters
 *? 3. Boolean: true / false
 *? 4. Undefined: Value taken by a variable that is not yet defined (empty value)
 *? 5. Null: Empty value
 *? 6. Symbol(ES2015): Value that is unique and cannot be changed [Not useful for now]
 *? 7. BigInt(ES2020): Larger integers than the Number type can hold
 *
 * ! JavaScript has dynamic typing: We don't have to manually define the data type of the
 * ! value stored in a variable, Instead data types are determined automatically
 * 
 */

//  let javascriptIsFun = true;
//  console.log(javascriptIsFun);
//  console.log(typeof javascriptIsFun);
//  console.log(typeof 10);
//  console.log(typeof 'uday');

//  javascriptIsFun = false;

//  console.log(javascriptIsFun);

//  let year;
//  console.log(year, typeof year);

//  console.log(null, typeof null);
//  console.timeEnd();


 /**
  * ? variable declaration
  * ! let, const, var
  */

//  let age = 30;
//  age = 31;
//  console.log(age);


/**
 * ! operators
 * 
 */

// const now = 2037;
// const ageJones = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJones);
// console.log(ageSarah);

// console.log(ageJones * 2, ageJones / 10, 2 ** 20);

// const firstName = 'uday';
// const lastName = 'teja';

// console.log(firstName, "", lastName);

// Assignment operators
// let x = 10 + 12;
// x += 10; // x = x + 10
// x *= 12; // x = x * 12
// x--; // x = x - 1
// x++; // x = x + 1
// console.log(x)

// Comparison operators
// console.log(ageJones > ageSarah);
// console.log(ageJones >= 18);

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(x, y);

// const averageAge = (ageJones + ageSarah) / 2;
// console.log(ageJones, ageSarah, averageAge);


//? Coding Challenge #1 
// const marksMass = 78;
// const johnMass = 92;

// const marksHeight = 1.69;
// const johnHeight = 1.95;

// const marksBMI = marksMass / marksHeight ** 2;

// const johnBMI = johnHeight / marksHeight ** marksHeight;
// const markHigherBMI = marksBMI > johnBMI;

// console.log(marksBMI,"\n",johnBMI);

// console.log(markHigherBMI);

// const firstName = 'Uday';
// const lastName = 'Teja';
// const birthYear = 1998;
// const year = 2040;

// const whoami = "I'm " + firstName + ',a ' + (year - 
//     birthYear) + ' years old';

// console.log(whoami);
// template literals
// const whoamiNew = `I'm ${firstName}, a ${year - birthYear} years old.`;

// console.log(whoamiNew);

// console.log('String with \n\
// multiple \n\
// lines');

// const age = 16;
// const isOldEnough = (age >= 18);

// if(isOldEnough) {
//     console.log('Sarah can start driving license ✔️');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young wait another ${yearsLeft} years starting from now.`);
// }

/**
 * ! Control structure 
*? if() {
*?
*?  } else {
*?  
*?  }
 */

//todo Coding Challenge #2

// const marksMass = 78;
// const johnMass = 92;

// const marksHeight = 1.69;
// const johnHeight = 1.95;

// const marksBMI = marksMass / marksHeight ** 2;

// const johnBMI = johnHeight / marksHeight ** marksHeight;
// const markHigherBMI = (marksBMI > johnBMI);

// if(markHigherBMI) {
//     console.log(`Marks BMI Is higher than Johns`);
// } else {
//      console.log(`Johns BMI Is higher than Marks`);
// }

/**
 * ! Type Conversion and Coercion
 * 
 * ? Type Conversion is explicit
 * ? Coercion is implicit
 */

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('years'));

// console.log(String(23));

//! Type coercion

// console.log('I am ' + 23 + ' years old.');

// console.log('23' - '10' -3);
// console.log('23' / '10');

//! Truthy and Falsy Values

/**
 *! There are 5 Falsy values
 *! 1. 0, 2. '', 3. undefined. 4. null, 5. NaN
 * ? 
 */

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 1;

// if(money) console.log("Don't spend it all");
// else console.log("You will never get a job in this life.");

// let height;
// if(height) console.log('height is defined');
// else console.log('height is not defined');

/**
 * ! Equality operators
 * 
 * == Loose equality operator
 * === strict equality operator
 * == does type conversion
 * === doesn't type conversion
 */

// const age = '18';
// if(age === 18) console.log('You just became an adult (strict)');
// if(age == 18) console.log('You just became an adult (loose)');

// const favourite = prompt("What's your favourite number ? ");
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23) {
//   console.log('Cool 23 is amazing number');
// } else if(favourite === 7) {
//   console.log('7 is also a cool number');
// }

/**
 * ! Boolean logic
 */

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);

// console.log(hasDriverLicense || hasGoodVision);

// console.log(!hasDriverLicense);


/**
 * ! switch 
 * ! switch statement is the alternative way for writing complicated if else
 * ! statements.
 */

// const day = 'thursday';

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//   default:
//     console.log('Not a valid day');
// }

// if(day === 'monday') {
//   console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if(day === 'tuesday') {
//  console.log('Prepare theory videos');
// } else if(day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');

// } else if(day === 'friday') {
//   console.log('Record videos');
// } else if(day == 'saturday' || day == 'sunday') {
//   console.log('Enjoy the weekend :D')
// }

/**
 * ! statements vs expression
 * 
 * ? An expression is a piece of code that produce a value.
 * ? E.g: 3 + 4
 * 
 * ? A statement is bigger piece of code that is executed
 * ? and which does not produce the value on itself.
 * 
 * E.g: 
 * if(23 > 10) {
    const str = '23 is bigger';
  }
 */

// console.log(`I'm ${2037 - 1991} years old`);

/**
 * ! Ternary operator
 * ? condition ? if : else 
 * 
 */
const age = 23;
// age >= 18 ? console.log('I Like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'Wine' : 'Water';

// console.log(drink);

// let drink2;
// if(age >= 18) drink2 = 'Wine';
// else drink2 = 'Water';

// console.log(drink2);

// console.log(`I like to drink ${ age >= 18 ? 'Wine' : 'Water'}`);