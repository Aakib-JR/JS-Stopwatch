let display = document.getElementById("display");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let timer = null;

function updateDisplay() {

    hourD = hour.toString().padStart(2, "0");
    minuteD = minute.toString().padStart(2, "0");
    secondD = second.toString().padStart(2, "0");
    msD = millisecond.toString().padStart(2, "0");

    display.innerText = `${hourD}:${minuteD}:${secondD}:${msD}`;
}

function start() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(() => {

        millisecond++
        if (millisecond == 100) {
            millisecond = 0;
            second++;
        }
        if (second == 60) {
            second = 0;
            minute++;
        }
        if (minute == 60) {
            minute = 0;
            hour++;
        }

        updateDisplay()

    }, 10);
}

function stop() {
    clearInterval(timer)
    timer = null;
}

function reset() {
    stop();

    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    updateDisplay();
}