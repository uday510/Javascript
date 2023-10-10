// const person = {
//     isHuman: true
// }

// const child = Object.create(person);
// child.[[Prototype]] = person;
// child.__proto__ = person;
// console.log(child);

// const child = {};
// child.__proto__ = person;
//
// console.log(child);

// const child = Object.create(person);
// child.maxAge = 19;

// const child = Object.assign(Object.create(person), {
//     maxAge: 18
// });
//
// console.log(child);


// const child = {
//     maxAge : 18
// }
// Object.setPrototypeOf(child, person);
//
//
// console.log(person.maxAge);
// console.log(child);

// const child = {
//     isHuman: false
// }

// const child = Object.create(person, {
//     maxAge: {
//         value: 18,
//         writable: true,
//         configurable: true
//     }
// });
// const child = Object.create(person);

// const john = Object.create(child);
// john.name = 'John';
// console.log(john.__proto__);

// console.log(Object.getPrototypeOf(john));


// child.maxAge = 20;

// console.log(john.__proto__.__proto__);

// console.log(john.maxAge)



// const funcProto = Object.getPrototypeOf(() => {});
//
//
// console.log(Object.getOwnPropertyNames(funcProto));
//
//
// const arrayProto = Object.getPrototypeOf([]);
// console.log(Object.getOwnPropertyNames(arrayProto));



// function Person(name) {
//     this.name = name;
// }
//
// const udayTeja = new Person('Uday Teja');
//
// console.log(udayTeja);

// Person.prototype = {
//     constructor: Person,
//     isHuman: true
// }
//
// const uday = new Person('Uday Teja');
// console.log(Object.getPrototypeOf(uday));
//
// const teja = new Person('Teja Uday');
// console.log(Object.getPrototypeOf(teja))
//
// console.log(Object.getPrototypeOf(uday) === Object.getPrototypeOf(teja));
//
//
// Person.prototype.test = () => {
//     console.log('Test Function')
// }
//
// const newObject = new uday.constructor('Teja');


// Array.prototype.push = function (val) {
//     this[this.length] = val;
// }
//
// const arr = [1, 2, 3];
//
//
// Array.prototype.addNum = function (val) {
//     this[this.length] = val;
// }
//
// arr.addNum(10);
//
// console.log(arr)



class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('Started Speaking.')
    }
}

const person = new Person();
person.speak();