var user = {
    Model : 'MacBook Pro',
    Processor : 'M1',
    RAM : "512 GB",
    SSD : "1 TB",
    COLOR : "GREY/SILVER"
};

console.log(user.firstName);
console.log(user["firstName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.table(user);





