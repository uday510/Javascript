var User = function(firstName, courseCount ) {

    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getDetails = function() {
    console.log(`course count : ${this.courseCount}` );  
 };
};


User.prototype.getFirstName = function() {
    console.log(`Your first name is : ${this.firstName}`);
};

var linux = new User("Linux", 2);
if (linux.hasOwnProperty("firstName")) {
            linux.getFirstName();
}
linux.getDetails();

console.log(linux);

// var sam = new User ("sam", 1)
// console.log(sam);