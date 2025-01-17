let timer = document.querySelector(".timer");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let time = 0;
let interval;

start.addEventListener("click", () => {
    interval = setInterval(startTimer, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    time = 0;
    timer.textContent = "00:00:00";
});

function startTimer() {
    time++;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    time = 0;
    timer.textContent = "00:00:00";
}
