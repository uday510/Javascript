//! Not scalable

// function counter() {
//     var count = 0;

//     return function incrementCounter() {
//     count++;
//     console.log(count);
//     }
// }

// counter()();
// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();

// counter2();
// counter2();

//! constructor function | scalable constructor
function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

const counter1 = new Counter();

counter1.incrementCounter();
counter1.decrementCounter();
