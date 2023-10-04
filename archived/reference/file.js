function fetchData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const randomVal = Math.random();

            if (randomVal < 0.5) {
                resolve("SUCESS")
            } else {
                reject("REJECT")
            }
        }, 1000);
    });
}

// fetchData()
//     .then((res) => console.log(res))
//     .catch(err => console.log(err))
//     .finally(console.log("PROMISE COMPLETED"));




// async function asyncFunc() {
//     try {
//         const res = await fetchData();
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// }

// asyncFunc();
// console.log("END");



// require("http").createServer((req, res) => res.end("Hello Wolrd")).listen(4000);