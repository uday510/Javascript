function init() {
    var firstName = "Linux";

    function sayFirstName() {
        console.log(this.firstName);
    }
    sayFirstName();
};

var nun = init();




