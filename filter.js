const arr = [5, 1, 3, 2, 6];

// Filter odd values 

function isOdd(num) {
    return (num % 2)
}

function isEven(num) {
    return !(num % 2)
}
const output = arr.filter((even) => !(even % 2));
// const output = arr.filter((odd) => (odd % 2));

console.log(output);