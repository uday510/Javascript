function filter(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element !== null && element !== undefined && element !== '')
        newArray[newArray.length] = element;
    } 
    return newArray;
}

const array =  [0, 1, undefined, 2, null, 3, 'four', ''];
const newArray = filter(array);

console.log(newArray);