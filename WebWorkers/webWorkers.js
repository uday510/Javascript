const slowBtn = document.getElementById('slow');
const helloBtn = document.getElementById('hello');

slowBtn.addEventListener('click', slowOperation);

helloBtn.addEventListener('click', hello);


// function slowOperation() {
//     const worker = new Worker('./worker.js');
//     worker.postMessage(10);
    
//     worker.addEventListener('message', event => {
//         console.log('Main Thread ' , event.data);
//     })
//     // for (let i = 0; i < 3000000000; i++) {
//     // }
//     // console.log('Slow Operation Finished');

//     // worker.terminate();
// }

function slowOperation() {
    const worker = new SharedWorker('./worker.js');
    worker.port.postMessage(10);
    
    worker.port.onmessage = event => 
        console.log('Main Thread ' , event.data);
}

function hello() {
    console.log('Hello World');
}