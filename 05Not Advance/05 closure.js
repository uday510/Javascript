// function init() {
//     var firstName = "Linux";
//         console.log("I am init");
//     function sayFirstName() {
//         console.log(this.firstName);
//     }
//    return sayFirstName();
// };

// var value = init();

// value();


function doAddition(x) {
    return function(y) {
    return x + y;
    };
};

// var add5 = doAddition(5);

// console.log(add5(5));

console.log(doAddition(4)(2));

// TODO Function()()()..... ---> Curring