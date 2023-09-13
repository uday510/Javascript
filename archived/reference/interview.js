// // function reverseWords(string) {
// // console.log(str);
// //     console.log(str);
// // 	let startOfWord = 0;
// // 	let output = "";
// // 	for(let i = 0; i < str.length; i++) {
// // 	const char = str[i];
// // 	 if(char == " ") {
// // 	 	output += reverse(str, startOfWord, i);
// // 	 	output += " ";
// //         console.log(output);
// // 	 	startOfWord = i;
// // 	 }
// //     }
// // return output;
// // }

// // function reverse(str, start, end) {
// // 	let output = "";

// // 	while(start < end) {
// // 		output += str[start++];
// // 		output += str[end--];
// // 	}
// // 	return output;
// // }

// // const str = "Bandi Uday Teja"; // ! output = "idnaB yadY, ajeT";

// // console.log(reverseWords(str));

// // function mergesort(arr) {

// //     return mergeSortHelper(arr, 0, arr.length - 1);
// // }

// // function mergeSortHelper(arr, start, end) {
// //     if(start === end) return;

// //     const midIdx = Math.floor((start + end) / 2);

// //     mergeSortHelper(arr, start, midIdx);
// //     mergeSortHelper(arr, midIdx + 1, end);
// //     return doMerge()
// // }

// // function sort(arr) {
// //     let firstIdx = 0;
// //     let secondIdx = 0;
// //     let thirdIdx = arr.length - 1;

// //     while(secondIdx <= thirdIdx) {
// //         const value = arr[secondIdx];

// //         if(value === 'a') {
// //             swap(firstIdx, secondIdx, arr);
// //             firstIdx++;
// //             secondIdx++;
// //         } else if(value === 'b')
// //             secondIdx++;
// //           else {
// //                 swap(secondIdx, thirdIdx, arr);
// //                 thirdIdx--;
// //             }
// //     }
// //     return arr;
// // }

// // function swap(i, j, array) {
// //     [array[i], array[j]] = [array[j], array[i]];
// // }

// // // const arr = ["a", "b", "c", "a", "b", "c"];
// // const arr = ['c', 'a', 'b', 'b', 'c', 'c', 'b', 'b'];

// // console.log(sort(arr));

// // function add(a, b, cb) {

// //     return cb(a, b);
// // }

// // function sum(a, b) {
// //     return a + b;
// // }
// // const output = add(1, 2, sum);

// // (function () {
// //   var x = y = 5;
// // })();

// // console.log(y);

// // async function appendFile() {
// //   try {
// //     const content = "File Updated!";
// //     await fs.appendFile("C:\\Users\\UDAY\\Desktop\\node.txt", content);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // }

// const fs = require("fs/promises");
// async function generateRandomDates() {
//   for (let i = 2022; i > 2015; i--) {
//     const content =
//       "'" +
//       Math.floor(2000 + Math.random() * 22) +
//       "-" +
//       Math.floor(Math.random() * 11 + 1) +
//       "-" +
//       Math.floor(Math.random() * 30 + 1) +
//       "'" +
//       "," +
//       Math.floor(Math.random() * 999 + 1) +
//       "," +
//       Math.floor(Math.random() * 999 + 1) +
//       "," +
//       Math.floor(Math.random() * 999 + 1);
//     await fs.appendFile("/Users/uday/Desktop/data.txt", ",");
//     await fs.appendFile("/Users/uday/Desktop/data.txt", content);
//     await fs.appendFile("/Users/uday/Desktop/data.txt", ")");
//     await fs.appendFile("/Users/uday/Desktop/data.txt", ",");
//   }
// }
// generateRandomDates();

// // const content = "Some content!";

// // try {
// //   fs.writeFileSync("/Users/uday/Desktop/data.txt", content);
// //   // file written successfully
// // } catch (err) {
// //   console.error(err);
// // };

// function asyncTask() {
//   return functionA()
//     .then((valueA) => functionB(valueB))
//     .then((valueB) => functionC(valueB))
//     .then((valueC) => functionD(valueC))
//     .catch((err) => console.log(err));
// }

// function functionA() { }

// function functionB(val) { }

// function functionC(val) { }

// function functionD(val) { }

// async function asyncTask() {
//   try {
//     const valueA = await functionA();
//     const valueB = await functionB(valueA);
//     const valueC = await functionC(valueB);
//     const result = await functionD(valueC);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function functionA() { }

// async function functionB(val) { }

// async function functionC(val) { }

// async function functionD(val) { }

function powerset(array, B, C) {
  // Write your code here.
  const subsets = [[]];
  for (const ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
}



let A = [2, 2, 4, 5];
let B = 3;
let C = 7;

let res = powerset(A, B, C);

console.log(res);