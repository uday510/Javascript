// console.log(this);


var user = {
    firstName: "Linux",
    courseCount: 12,
    getCourse: function() {
        console.log("LINE 08", this);
        function sayHello() {
            console.log("Hello");
            console.log("LINE 11", this);
        }
        sayHello();
    },
};

user.getCourse();
