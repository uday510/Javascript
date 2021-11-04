var User = {
    name : "",
    getUserName : function() { 
    console.log(`User name is : ${this.name}`);

    },
};

var linux = Object.create(User, {
    name : {value: "Linux"},
});


linux.getUserName();
