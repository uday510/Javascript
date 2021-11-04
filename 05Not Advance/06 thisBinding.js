const linux = {
    firstName: "linux",
    lastName: "Torvalds",
    role: "Admin",
    courseCount: 3,
    getInfo : function() {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.LastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }, 

};

// getInfo()

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4
};

// linux.getInfo();

linux.getInfo.bind(dj)();

// linux.getInfo.call(dj);