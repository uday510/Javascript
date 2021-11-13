var name = "uday";

console.log("Line number 1", name);

function sayName() {
    var name = "Mr H"
    console.log("Line number 6", name);
    sayName2();

function sayName2() {
     var name = "Mr HC"
    console.log("Line number 10", name);
}
}
sayName();




