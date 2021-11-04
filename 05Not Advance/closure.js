function init() {
    var firstName = "Linux";
        console.log("I am init");
    function sayFirstName() {
        console.log(this.firstName);
    }
   return sayFirstName();
};

var value = init();

value();

