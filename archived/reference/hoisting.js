// // getName();

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// // function getName() {
// //     console.log("welcome to JS");
// // }

// var getName = () => {
//     console.log("Hello World");
// }

// var getName2 = function() {
//     console.log("Hello World");
// }

// const { log } = require("console");
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, world!\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// });

// import fetch from "node-fetch";

// async function getData() {
//     const response = await fetch("http://localhost:4000");
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

// getData();


// console.log(data);

// let data = 10;

// console.log(data);

let name = {
    firstName: "Alan",
    secondName: "Turing",
}

let name2 = {
    firstName: "Adolf",
    secondName: "Hitler"
}
printFullName = function (hometown, place) {
    console.log(this.firstName + " " + this.secondName + " from "  + hometown + " " + place);
}

// printFullName.call(name2, "Germany", "Europe")

// printFullName.apply(name2, ["Germany", "Europe"]);

let printName = printFullName.bind(name2, "Germany", "Europe");

printName();
