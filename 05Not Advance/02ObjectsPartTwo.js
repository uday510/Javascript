var User = {
    name: "",
    getUserName : function() { 
        console.log(`User name is : ${this.name}`);
    },
};

// var linux = Object.create(User);

// linux.name = "Linux"
// console.log(linux);


// linux.getUserName();


var sam = Object.create(User, {
    name: {value: "sammer"}
});

sam.getUserName();