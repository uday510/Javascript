var countries = ["India", "USA", "Japan", "Russia"];


var states = new Array("Telangana", "Karnataka", "Maharashtra");

// console.log(states[0]);

// console.log(states.length);

states[0] = "Punjab";

// console.log(states);

var user = ["uday", "email@example.com", 4, 12, true];

// console.log(user);

user.pop(); //pop last item
user.pop();
// console.log(user);
user.unshift("NEW VALUE"); // add at first and shift all elements.
// console.log(user);
user.shift(); // pops first element and shifts all elements
// console.log(user);


console.log(user.indexOf(4));
console.log(user.indexOf("uday"));
console.log(user.indexOf("linux"));

console.log(Array.from("1234567"));