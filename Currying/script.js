
function curriedSum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// console.log(curriedSum(1)(2)(3));



function curry(func) {
    return (a) => (b) => (c) => func(a, b, c);
}

function sum(a, b, c) {
    return a + b + c;
}

function subtract(a, b, c) {
    return a - b - c;
}


const value = curry(subtract);

console.log(value(1)(2)(3));