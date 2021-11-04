// import User from "./06classjs";


const User = require("./06classjs.js");

const linux = new User("Linux", "linux@email.com");

linux.enrollCourse("React", "C++", "DSA", "DJango", "ML");

console.log(linux.getInfo());

// console.log(linux.getCourseList());

let courses = linux.getCourseList();

courses.forEach( (c) => console.log(c) );
