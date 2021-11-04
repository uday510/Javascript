class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];


    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollCourse(...name) {
        this.#courseList.push(...name);
    }
    getCourseList() {
        return this.#courseList;
    }

    login() {
        return "You are now logged in";
    }

}

class SubAdmin extends User{
    getAdminInfo() {
        return "I am subAdmin";
    }
}



module.exports = User;

const rock = new User("rock", "rock@email.com");

console.log(rock.getInfo());

rock.enrollCourse("Angular");

console.log(rock.getCourseList());

// console.log(rock.courseList);



const tom = new SubAdmin();
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
