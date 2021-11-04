// var value = Math.max(1, 2, 3, 4, 5, 6);

// console.log(value);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7});

// console.log(myObj);

function sumOne(a, b) {
        return a + b;
}

var myA = [5, 4, 12];

// var myA = {
//     a : 12,
//     b : 13
// };


// console.log(sumOne(...myA)); // Spread operator.

function sumTwo (a, b, ...args) {
        // console.log(args);
        add = a + b;
    let multi = 1;
    for (const arg of args) {
            multi *= arg;
    }
    return [add, multi] ;
}

console.log( sumTwo(1, 2, 3, 4) );



