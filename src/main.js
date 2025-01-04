let targetDate = new Date("2025-01-12T14:00:00");
// let targetDate = new Date("2025-01-04T00:50:00");
let setId = 0;
let timerText = document.querySelector(".timer");

function updateCountDown() {
  let currentMiliseconds = targetDate - new Date().getTime();

  let days = Math.floor(currentMiliseconds / 1000 / 60 / 60 / 24);
  let hours = Math.floor(currentMiliseconds / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(currentMiliseconds / 1000 / 60) % 60;
  let seconds = Math.floor(currentMiliseconds / 1000) % 60;

  timerText.textContent = `${formatDate(days)} d ${formatDate(
    hours
  )} h ${formatDate(minutes)} m ${formatDate(seconds)} s`;

  if (currentMiliseconds < 0) {
    clearInterval(setId);
    timerText.textContent = "heyyy today is the great day!!!!";
  }
}

function formatDate(date) {
  return date < 10 ? "0" + date : date;
}

updateCountDown();
setId = setInterval(updateCountDown, 1000);
