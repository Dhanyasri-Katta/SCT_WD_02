let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay(){

    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;
    let ms = milliseconds < 10 ? "00"+milliseconds :
             milliseconds < 100 ? "0"+milliseconds :
             milliseconds;

    display.innerHTML = h + ":" + m + ":" + s + ":" + ms;

}

function stopwatch(){

    milliseconds += 10;

    if(milliseconds == 1000){

        milliseconds = 0;
        seconds++;

    }

    if(seconds == 60){

        seconds = 0;
        minutes++;

    }

    if(minutes == 60){

        minutes = 0;
        hours++;

    }

    updateDisplay();

}

document.getElementById("start").onclick = function(){

    if(timer !== null) return;

    timer = setInterval(stopwatch,10);

}

document.getElementById("pause").onclick = function(){

    clearInterval(timer);

    timer = null;

}

document.getElementById("reset").onclick = function(){

    clearInterval(timer);

    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    laps.innerHTML="";

}

document.getElementById("lap").onclick = function(){

    if(timer===null) return;

    let li = document.createElement("li");

    li.innerHTML = display.innerHTML;

    laps.appendChild(li);

}

updateDisplay();