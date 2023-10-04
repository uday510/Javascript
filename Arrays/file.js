console.clear();



// console.log(arr.slice(1, 2));

// console.log(arr);


// console.log(arr.slice(0, 1));

// console.log(arr);


let arr = [1, 2, 3];


// const newArr = arr.concat(['a', 'b']);

// console.log(newArr);


// arr.reverse();

// console.log(arr);

// console.log(arr.join(' '));

// console.log(arr);


// arr.forEach(function (val, idx) {
//     console.log(idx, val, this);
// }, { num: 10 });

// console.log(arr.map(function (val, idx, arr) {
//     return val = idx * this.num;
// }, { num: 10 })
// );

const filteredArr = arr.filter(function (val, idx, arr) {
    return val > this.num;
}, { num: 1 })

// console.log(filteredArr);


const index = arr.every(function (val, idx, arr) {
    return val > this.num;
}, { num: 1 })

console.log(index);



// const sum = arr.reduce((acc, val) => acc * val )

// console.log(sum);


const sum = arr.reduce(function (accumulator, currVal) {
    return accumulator + currVal;
}, 0);

// console.log(sum);


arr = [5, 7, 3, 0];
// console.log(arr)

// arr.sort();

function compareNums(first, second) {
    return second - first;
}

arr.sort(compareNums);

console.log(arr);


