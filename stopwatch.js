let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let milliseconds = 0;

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(updateStopwatch, 10);
    isRunning = true;
    document.getElementById("startBtn").textContent = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startBtn").textContent = "Start";
  }
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startBtn").textContent = "Start";
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliseconds = 0;
  document.getElementById("display").textContent = "00:00:00:00";
  document.getElementById("startBtn").textContent = "Start";
}

function updateStopwatch() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  const displayMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  document.getElementById("display").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);