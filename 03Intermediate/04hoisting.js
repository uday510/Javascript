// TODO  Function declarations are scanned and made available.

// TODO  Variable declarations are scanned and made undefined.

// tipper("5");


function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 50);
} 

// bigTipper("200");


uName = "12";

console.log(uName);

var uName = "uday";
function sayName () {
    var uName = "linux";
    console.log(uName);
}

sayName();

console.log(uName);
