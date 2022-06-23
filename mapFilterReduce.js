const array = [1, 2, 3, 4, 5];

// const double = array.map((num) => {
//    return num * num;
// });

// const binary = array.map((num) => num.toString(2));

// console.log(double);
// console.log(binary);

const odd = array.filter((num) => num % 2);

const even = array.filter((num) => num % 2 == 0);

const totalSum = array.reduce((num1, num2) => num1 + num2);
