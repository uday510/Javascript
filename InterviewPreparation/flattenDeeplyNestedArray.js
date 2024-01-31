var flat = function (arr, n) {
   let res = [];
   const helper = (arr, n, curr) => {
       for (const o of arr) {
           if (Array.isArray(o) && curr < n) {
               helper(o, n, curr+1);
           } else {
               res.push(o);
           }
       }
   }
   helper(arr, n, 0);
   return res;
};

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 2;

console.log(flat(arr, n));
