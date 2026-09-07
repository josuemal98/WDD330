const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const timeInput = document.getElementById('timeInput');

let timeLeft = 10;
let timerId = null;
let isPaused = false;

function runTimer() {
  timerId = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      countdownDisplay.textContent = timeLeft;
    } else {
      clearInterval(timerId);
      setTimeout(function() {
        countdownDisplay.textContent = "Time's up!";
      }, 0);
    }
  }, 1000);
}

startButton.addEventListener('click', function() {
  clearInterval(timerId);

  timeLeft = parseInt(timeInput.value);
  countdownDisplay.textContent = timeLeft;

  isPaused = false;
  pauseButton.textContent = "Pause";

  runTimer();
});

pauseButton.addEventListener('click', function() {
  if (!isPaused) {
    clearInterval(timerId);
    isPaused = true;
    pauseButton.textContent = "Resume";
  } else {
    if (timeLeft > 0) {
      isPaused = false;
      pauseButton.textContent = "Pause";
      runTimer();
    }
  }
});