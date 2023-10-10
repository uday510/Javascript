const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

// let timerID;
let animationFrameID;
setTimeout(() => console.log(performance.now()), 1000)
const date = new Date(2023, 0, 10, 8, 10, 23);
console.log(date);

let timeoutID = setTimeout(() => {
    console.log('Timeout');
}, 1000);

// clearTimeout(timeoutID);
function startTime(timestamp) {
    console.log(timestamp);
    count.textContent++;
   animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
    cancelAnimationFrame(animationFrameID);
    // count.textContent = 0;
}