let seconds = 0o0;
let tens = 0o0;
let mins = 0o0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMins = document.getElementById("mins");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let Interval;

buttonStart.addEventListener('click',()=> {
    Interval = setInterval(startTimer, 10)
})

buttonStop.addEventListener('click',()=> {
    clearInterval(Interval);
})

buttonReset.addEventListener('click',()=> {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    appendMins.innerHTML = mins;
})


function startTimer(){
    tens++;
    if(tens <= 9){
        appendTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59){
        mins ++;
        appendMins.innerHTML = '0' + mins;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
    }
    if (mins > 9){
        appendSeconds.innerHTML = mins;
    }
}
