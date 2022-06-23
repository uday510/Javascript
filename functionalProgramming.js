const radius = [3, 1, 2, 4];

//! Normal Way
// const calculateArea = function(radius) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function(radius) {
//    const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));
// const calculateDiameter = function(radius) {
//    const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));

//! Better Way | Functional Programming Way
const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

// const calculate = function (radius, logic) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

Array.prototype.calculate = function (logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

// const calculateArea= calculate(radius, area);
// const calculateDiameter = calculate(radius, diameter);
// const calculateCircumference = calculate(radius, circumference);

// console.log("Area", calculateArea);
// console.log("Diameter", calculateDiameter);
// console.log("Circumference", calculateCircumference);

console.log("Area", radius.calculate(area));