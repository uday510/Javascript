var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // This is not necessary
        case "subAdmin":
            return `${name} is subAdmin with create and delete access`;
        case "testPrep":
            return `${name} is a test prep with access to create and delete tests`;
        case "user":
            return `${name} is a user to consume content`;
        default:
            return `${name} is trial user`;
    }
}

console.log(getUserRole("uday", "user"));