var counterMinute = document.querySelector(".counterHH");
var counterSecond = document.querySelector(".counterMM");
var counterMilliSecond = document.querySelector(".counterSS");

var milliSeconds = 0;
var seconds = 0;
var minutes = 0;

var getTimerCount = prompt("Enter the count in Minutes:");
getTimerCount = getTimerCount * 60000;

setInterval( () => {  
    if (milliSeconds < getTimerCount) {
        if (milliSeconds < 10){
            counterMilliSecond.innerText = `:0${milliSeconds}`;
             milliSeconds++;
        }
         else if ((milliSeconds >= 10) && (milliSeconds <= 99) ){
            counterMilliSecond.innerText = `:${milliSeconds}`;
             milliSeconds++;
        } 
        else if (milliSeconds > 99) {
            milliSeconds = 0;
            counterMilliSecond.innerText = `:0${milliSeconds}`;

           if (seconds < 10){
                counterSecond.innerText = `:0${seconds}`; 
                seconds++;
           }
           else if ((seconds >= 10) && (seconds <= 59)) {
               counterSecond.innerText = `:${seconds}`;
               seconds++;
           }
            else if (seconds > 59) {
                seconds = 0;
                counterSecond.innerText = `:0${seconds}`;
            if (minutes < 10) {
                counterMinute.innerText = `0${minutes}`;
                minutes--;
            }
            else if ((minutes >= 10) && (minutes <= 59)) {
                counterMinute.innerText = `${minutes}`;
                minutes++;
           }
           else if (minutes > 59) {
                minutes = 0;
                counterMinute.innerText = `${minutes}`;
           }
        }       
    }
    }   
}, 1)

setTimeout( () => {
    timeOutText.innerText = "Time out"
}, getTimerCount)
