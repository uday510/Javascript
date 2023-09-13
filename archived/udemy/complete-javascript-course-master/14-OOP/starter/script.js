'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//? do not create method inside constructor function
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jack.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(h1);

//! Class Expression
// const Personcl = class {};

//! Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.log('Not a full name');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey There`);
  }
}

// const jessica = new PersonCl('Jessica Davis', 1996);

// console.log(jessica.firstName);

// console.log(jessica.__proto__ === PersonCl.prototype);

// jessica.greet();

// console.log(jessica.age);
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(movement) {
//     this.movements.push(movement);
//   },
// };

// console.log(account.latest);

// account.latest = 50;

// console.log(account.movements);

// PersonCl.hey = function() {
//     console.log(`Hey There!`);
// }

// PersonCl.hey();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  //   console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//! Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}.`);
};

const mike = new Student('Mike', 1998, 'Computer Science');

mike.introduce();

mike.calcAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
// Always needs to be happen first.
        super(fullName, birthYear);
        this.course = course;
    }

    introduce () {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    }
}

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// martha.introduce();
// martha.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //! Protected Property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thank you for choosing HDFC Bank.`);
  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  //! Public interface
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.getMovements());
