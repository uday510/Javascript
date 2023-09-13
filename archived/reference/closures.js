function x() {
    var a = 10;
    return function y() {
        console.log(a);
    }
    // return y;
}
// var z = x();
// console.log(z);
// z();

function z() {
    var b = 10;
    function x() {
        var a = 10;
        function y() {
            console.log(a," + ", b);
        }
        y();
    }
    x();
}
z();
z();

// var fun = (function() {
//     console.log("Hello World");
// })();


// fun();
// fun();