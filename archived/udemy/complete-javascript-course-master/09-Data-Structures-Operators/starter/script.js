'use strict';

// const openingHours = {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };
// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

  //! ES6 Enhanced object literal
//   openingHours: openingHours

// };

/**
 * ! Destructuring Arrays
 */
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [d, e, f] = arr; //! Destructuring

// let [main , , secondary] = restaurant.categories;

// console.log(main, secondary);

// [secondary, main] = [main, secondary];


// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6], 7, 8];

// const [i, , j] = nested;

// console.log(nested);
// const[i, ,[j, k]] = nested; 

// console.log(i, j, k);

 //! Default values

// const [p, q, r] = [8, 9];

// console.log(p,q, r);


/**
 * ! Object Destructuring
 */

// const {name, openingHours, categories} = restaurant;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

//! change key names
// const {name: newRestaurentName, openingHours: newOpeningHours, categories: newCategories} = restaurant;
// console.log(newRestaurentName);

// console.log(newOpeningHours);
// console.log(newCategories);


// ! set default values if does not exist

// const {menu = [], starterMenu: starters = []} = restaurant;

//! mutating variables

// let a = 111;
// let b = 999;

// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);

// console.log(a, b);


//! nested objects

// const { fri: {open, close} } = openingHours;

// console.log(close);

/**
 * ! Spread Operator
 */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];

// console.log(newArr);

//! Iterables: Arrays, strings, maps, sets, NOT Objects
// const str = 'Jonas';
// const letter = [...str, ' ', 's.'];

// console.log(letter);

// console.log(`j o ${...str}`); // SyntaxError

// ! SPREAD, because of RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// ! REST, because of LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];

// console.log(a, b, others);

/**
 * ! Logical Assignment operators
 */

// const rest1 = {
//   name: 'capri1',
//   numGuests: 0
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

/**
 * ! Logical Nullish operator
 */
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/**
 * ! for-of loop
 */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu) {
//   console.log(item);
// }

// for(const item of menu.entries()) {
//   console.log(item);
// }

/**
* ! Enhanced object literal
*/

/**
 * ! Optional Chaining
 */
// console.log(restaurant.openingHours ?.mon ?.open);
/**
* ! Object: keys,values and pairs
*/

// for(const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// for(const day of Object.values(openingHours)) {
//   console.log(day);
// }
// for(const day of Object.entries(openingHours)) {
//   console.log(day);
// }

/**
 * ! Sets
 */
// const orderSet = new Set(['pasta',
//   'pizza',
//   'pizza', 
//   'Risotto'
// ]);

// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');

// console.log(orderSet);
// orderSet.delete('Garlic Bread');
// orderSet.clear();
// console.log(orderSet);

// for(const order of orderSet) console.log(order);

/**
 * ! Example 
 * 
 */
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];

// const set = new Set(staff);
//! convert to array
// const set = [...new Set(staff)];

// console.log(set);


//! maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// rest.set(2, 'Lisbon Portugal');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open:D')
// .set(false, 'We are closed:(')

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);

// console.log(rest.size);
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);

// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What is the best programming language in the world ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!']
// ]);

// console.log(question);

// console.log(Object.entries(openingHours));
// Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));
// for(const [key, value] of question) {
//   if(typeof key === 'number')
//       console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));

// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// convert map to array

// console.log([...question]);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';


// console.log(plane[0]);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(2, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf(' ') + 1));

// console.log(airline.slice(-8));

// const checkMiddleSeat = function(seat) {
  // B and E are middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else {
//     console.log('You are lucky');
//   }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());


// //? Fix capitalization in name

// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

//  //! Comparing Emails

//  const email = 'hello@example.com';
//  const loginEmail = ' Hello@Example.com \n';

//  const lowerEmail = loginEmail.toLowerCase();
//  const trimmedEmail = lowerEmail.trim();
//  console.log(trimmedEmail);

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// //! Replacing

// const priceGB = '288,97£';
// const priceUSD = priceGB.replace('£', '$').replace(',', '.');

// const announcement = 'All passengers come to the boarding door 23!';

// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate')); // alternative of replaceAll
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(priceUSD);

//Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Airbus') && plane.endsWith('A320neo'));


// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')) 
//       console.log('You are not allowed to board');
//   else 
//       console.log('Welcome Aboard');
// }
// checkBaggage('I have a laptop, some food and a pocket KNIFE');
// checkBaggage('Socks and camera');
// checkBaggage('Got sone snacks and a gun for protection');


// console.log(('a+event+lol+Ass+dummy'.split('+')));

// console.log('Uday Teja'.split(' '));

//split and join
// const [firstName, lastName] = 'Uday Teja'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')

// console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(" ");

  const namesUpper = [];
  for(const name of names) {
    // namesUpper.push(name[0].toUpperCase() + name.slice(1));
    namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

//! Padding a string
const message = 'Go to gate 23!';

// console.log(message.padStart(25, '+').padEnd(35, '+'));

const creditCardNumber = 5211080012780978;
const phoneNumber = 8142099823;

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  // return last.padStart(str.length, '*');
  return last.padStart(str.length + 3, '**** ');
}

console.log(maskCreditCard(creditCardNumber));
//! Repeat
// const message2 ='Bad Weather... All Departures Delayed\n';

// console.log(message2.repeat(5));

// const planesInLine = function(num) {
//   console.log(`There are ${num} planes in line ${'✈️'}.\n`
//   .repeat(num));
// }

// planesInLine(5);
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => {
  return str.slice(0, 3).toUpperCase();
};

for(const flight of flights.split('+')) {

  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴': ''} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} 
  (${time.replaceAll(':', 'h')}).`.padStart(46);
  
  console.log(output);
}