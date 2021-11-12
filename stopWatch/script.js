var counterHH = document.querySelector(".counterHH");
var counterMM = document.querySelector(".counterMM");
var counterSS= document.querySelector(".counterSS");
// var followers = document.querySelector(".followers");

var count = 0;
var countMMT = 0;
var countHHT = 0;

setInterval( () => {
        
    if (count < 1000) {
        if (count < 10){
            counterSS.innerText = `:0${count}`;
             count++;
        }
         else if ((count >= 10) && (count <= 99) ){
            counterSS.innerText = `:${count}`;
             count++;
        } 
        else if (count > 99) {
            count = 0;
            counterSS.innerText = `:0${count}`;

           if (countMMT < 10){
                counterMM.innerText = `:0${countMMT}`; 
                countMMT += 1;
           }
           else if ((countMMT >= 10) && (countMMT <= 59)) {
               counterMM.innerText = `:${countMMT}`;
               countMMT += 1;
           }
            else if (countMMT > 59) {
                countMMT = 0;
                counterMM.innerText = `:0${countMMT}`;

            if (countHHT < 10) {
                counterHH.innerText = `0${countHHT}`;
                countHHT += 1;
            }
            else if ((countHHT >= 10) && (countHHT <= 59)) {
                counterHH.innerText = `${countHHT}`;
                countHHT += 1;
           }
           else if (countHHT > 59) {
                countHHT = 0;
                counterHH.innerText = `${countHHT}`;
           }
        }       
    }
    }   
}, 1)

setTimeout( () => {
        followers.innerText = "Time Out"
}, 30000)