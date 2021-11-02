var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");



let count = 0;

setInterval( () => {
    if (count < 9999) {
        if (count < 10){
            counter.innerText = `:0${count}`;
             count++;
        }
        if (count > 10) {
            counter.innerText = `:${count}`;
             count++;
        }
        else {
            count = 0
        }
    

    }
}, 1000)

setTimeout( () => {
        followers.innerText = "Time Out"
}, 3000)