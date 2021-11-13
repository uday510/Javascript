var getUserRole = function (name, role) {
        switch (role) {
            case "admin":
                return `${name} is admin with all access`
                break; // this is not necessary.
            case "subadmin":
                return `${name} is subadmin with access to create and delete courses`
            case "testprep":
                return `${name} is testprep with access to create and delete tests.`
            case "user":
                return `${name} is user to consume content`
            default:
               return `${name} is a trial user`
        }
}
console.log(getUserRole("uday", "user"));

var getRole = getUserRole("linux", "user");

console.log(getRole);