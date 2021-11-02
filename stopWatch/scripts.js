var milliSeconds = document.querySelector(".milliseconds");


let count = 1;

setInterval( () => {
    if ( count < 1000 ) {
        count++;
    milliSeconds.innerHTML = count;
    }
}, 1000);

