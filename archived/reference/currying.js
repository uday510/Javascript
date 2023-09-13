// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByThree = multiply.bind(this, 3, 6);

// multiplyByTwo(5);
// multiplyByThree(5);

//! Currying
// let multiply = function(x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }

// const multiplyTwo = multiply(2);
// multiplyTwo(3);

function memoizedAddTo10() {
  const cache = {};

  return function (num) {
    var counter = 0;
    if (!(num in cache)) {
      cache[num] = num + 10;
      counter++;
      console.log(counter);
    }
    return cache[num];
  };
}

var memoizedFunc = memoizedAddTo10();

console.log(memoizedFunc(10));
console.log(memoizedFunc(10));
