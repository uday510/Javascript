// Function declarations are scanned and made available.
// variable declarations are scanned and made undefined.

// tipper("40");

// tipper("40");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

var  bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// bigTipper("200");

console.log(name);
var name = "uday";
console.log(name);



function sayName() {
    var name = "Mr. H";
    console.log(name);
}

sayName ();
console.log(name);

