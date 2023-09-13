let name = {
  firstName: "Ken",
  secondName: "Thompson",
};
// name.printFullName();

let printFullName = function (hometown, state) {
  console.log(this.firstName, this.secondName, hometown, state);
};

let name2 = {
  firstName: "Dennis",
  secondName: "Ritchie",
};

//! function borrowing
// printFullName.call(name, "Hyderabad", "Telangana");

// printFullName.apply(name2, ["Bengaluru", "Karnataka"]);

//bind method

let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");

printMyName();