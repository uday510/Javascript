var user = {
    firstName: "Ken",
    lastName: "Thompson",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (...courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course/s`
    },

    getInfo: function () { 
 return `
 firstName: ${this.firstName}
 lastName: ${this.lastName}
 role: ${this.role}
 loginCount: ${this.loginCount}
 facebookSignedIn: ${this.facebookSignedIn}
 courseList: ${this.courseList}`
    }
};

user.buyCourse("C++", "Backend", "React", "Node JS", "DJango");

console.log(user.getCourseCount());
console.log(user.getInfo());


