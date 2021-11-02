var uName = "linux";

console.log("Line Number 3: ", uName);

function sayName () {
    // var uName = "H";
    console.log("Line Number 6: ", uName);
    sayName2();
    function sayName2 () {
        // var uName = "T";
    console.log("Line number 10: ", uName) ;
    }
}

sayName ();