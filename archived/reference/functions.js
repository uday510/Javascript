
a();
// console.log(fun);
//! Function Statement AKA Function Declaration
function a() {
    console.log("a called");
}

//! Function Expression
var fun = function () {
    console.log("fun called");
}

//! Anonymous Function

// function () {
//     console.log("Anonymous function called");
// }

//! Named Function Expression
var fun = function namedFunctionExpression() {
    console.log("fun called");
}

//! Difference between Parameters & Arguments

function fun(param1, param2) {


}

fun(arg1, arg2);
//! First Class Functions
// A programming language is said to have First-class functions when functions
// in that language are treated like any other variable. For example, 
// in such a language, a function can be passed as an argument to other 
// functions, can be returned by another function and can be assigned as a value to a variable.
//! Arrow Functions


