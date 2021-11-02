// console.log(this);

var user = {
    firstName: 'linux',
    courseCount : 4,
    getCourseCount : function () {
        console.log("LINE NO. 7", this);

        function sayHello () {
            console.log("Hello");
            console.log("LINE 11" ,this);
        }
        sayHello();
    },
};

user.getCourseCount();
