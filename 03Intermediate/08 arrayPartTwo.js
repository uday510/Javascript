var isEven = (element) => {

    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
};
// console.log(isEven(11));

// var result = [2, 1, 3, 4, 5, 6].every(isEven);

// console.log(result);


//  var result = [2, 4, 6, 4, 8, 6].every((e) => {
//      return e % 2 === 0;
//  } );

var result = [2, 4, 6, 4, 8, 6].every((e) => (e % 2 === 0) );

console.log(result);

