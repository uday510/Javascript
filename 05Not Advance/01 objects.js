var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log("Course count is: ", this.courseCount);
    };
};

//TODO USING PROTOTYPE WE CAN INJECT WHATEVER WE WANT WITHOUT TOUCHING THE ACTUAL DEFINITION.



var uday = new User("uday", 4);

console.log(uday);

var uday2 = new User("uday2", 2);

console.log(uday2);