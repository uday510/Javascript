
//! Function Statement AKA Function Declaration
function a() {
    console.log("a called");
}
// a();

//! Function Expression
var b = function () {
    console.log("b called");
}

a();
b();

//! Anonymous Function 
// function () {

// }

//! Named Function Expression

var c = function xyz() {
    console.log("c called");
}

c();

//! Difference between Parameters & Arguments ?
function d(param1, param2) {
    console.log();
}

b("arg 1", 28, "arg 2", 29);

//! First Class Functions
//? The ability to use functions as values is called First Class Functions.

var e = function(param1) {
    console.log(param1);
}
e(function () {

});

var f = function (param1) {
    console.log(param1);
}

function xyz() {
console.log("xyz");
}

f(xyz);

var h = function (param1) {
    return function () {

    }
}
 
console.log(h(xyz));

//! First class Citizens - Ability to be used like values.

//! Arrow functions

