//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

/**
*?   Iterator is an object which defines a  sequence and  return
*?   values when terminates.
*?   These follows Iterators protocol by having a next() method
*?   that returns two properties:
*?   1. Value: The next value in the sequence.
*?   2. Done: Indicates whether that was the last value in the
*?   sequence or not by returning true and false. True
*?   when ends, false in the middle of iteration.
*!   Generators:
*?   So, to create a iterator we need careful programing.
*?   Generator makes it very easier. It helps us to define the
*?   algorithm of iteration in a single function where execution is
*?   not continuous,
*?   It is a special type of iterator, and written with syntax
*?   function*
*/
function makeRangeIterator(start = 0, end = Infinity, step = 1) {

    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            let result;
            if(nextIndex < end) {
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done: true};
        }
    };
    return rangeIterator;
}

// Using the iterator then looks like this:

// const it = makeRangeIterator(0, 10, 2);

// let result = it.next();

// while(!result.done) {
//     console.log(result.value);
//     result = it.next();
// }


//! Generator

function* rangeIterator(begin = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for(let i = begin; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const it = rangeIterator(0, 10, 2);
let response = it.next();

while(!response.done){
    console.log(response.value);
    response = it.next();
}