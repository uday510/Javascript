var user = {

    firstName : "Linux",
    secondName : "Torvalds",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse: function (courseName) {
       this.courseList.push(courseName);
    },

    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`;
    },

    getInfo: function() {

  return `     Name : ${this.firstName} ${this.secondName}
     Role : ${this.role}
     Login Count : ${this.loginCount}
     Course List : ${this.courseList}`       
              
    },
};


user.buyCourse("react native");
user.buyCourse("python");
user.buyCourse("C++");
// console.log(user.getCourseCount() );
console.log(user.getInfo());
