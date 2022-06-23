function outest() {
    c = 100;
    function outer(b) {
        // var a = 10;
        let a = 10;
        function inner() {
            console.log(a, b, c);
        }
    return inner;
  }
  return outer;
}
let a = 1;
// outer()();
var inner = (outest())("Hello World");
inner();