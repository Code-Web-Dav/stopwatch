
let timer;
let startTime;
let lapCount = 1;

function start() {
    if (!timer) {
        startTime = Date.now();
        timer = setInterval(updateTime, 1000);
    }
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    document.getElementById("display").textContent = `${hours} : ${minutes} : ${seconds}`;
}

function lap() {
    const lapTime = document.getElementById("display").textContent;
    document.getElementById("laps").innerHTML += `Lap ${lapCount}: ${lapTime}<br>`;
    lapCount++;
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    document.getElementById("display").textContent = "00 : 00 : 00";
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
}
