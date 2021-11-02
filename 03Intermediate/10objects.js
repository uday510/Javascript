var user = {

    firstName : "Linux",
    secondName : "Torvalds",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};

console.log(user.loginCount);

console.log(user["loginCount"]);


user.loginCount = 45;
console.log(user.loginCount);

// console.table(user);
// console.log(user);




