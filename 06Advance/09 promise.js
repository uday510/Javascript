const uno = () => {
    return "I am One";
};

// const dos = async () => {
//     setTimeout( () => {
//         return "Wooohooo";
//     }, 3000)
    
// };


const dos = async () => {
    return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve("I am two");
            }, 3000);
    
    });
    
}

const tres = () => {
    return "I am Three";
};

const callMe = async () => {

    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);


};

callMe();