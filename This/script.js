'use strict';

// function logThis() {
//     console.log(this[0]);
//     console.log(this[1], this[2]);
// }

// const obj = {
//     num: 10,
//     val: 20
// }

// const bindLogThis = logThis.bind(obj, 30, 40);
// bindLogThis();

// logThis.call(obj, 30, 40);
// logThis.apply([obj, 30, 40]);


// [1, 2, 3].forEach(function (num) {
//     console.log(this);
//     console.log(num);
// }, {num: 10});


class Person {
    constructor(name) {
        console.log(this);
        this.name = name;
    }

    speak() {
        console.log('Speaking...', this.name);
    }
}

const person = new Person('Uday Teja');

person.speak();

