let targetDate = new Date("2025-01-12T14:00:00");
// let targetDate = new Date("2025-01-04T00:50:00");
let setId = 0;
let timerText = document.querySelector(".timer");

function updateCountDown() {
  let currentMiliseconds = targetDate - new Date().getTime();

  // en los days, estamos pasando de milisegundos a segundos (/ 1000) luego de segundos a minutos (/ 60) luego de minutos a horas ( / 60) luego de horas a días ( / 24)
  let days = Math.floor(currentMiliseconds / 1000 / 60 / 60 / 24);
  // en las siguientes operaciones hacemos uso del operador % para mantener un rango de horas entre 0 - 23, minutos entre 0 - 59 y segundos entre 0 - 59, y con este operador lo logramos
  // con este tenemos las horas restantes ya que le decimos que debe tener un rango de 0 - 23  horas
  let hours = Math.floor(currentMiliseconds / 1000 / 60 / 60) % 24;
  // acá sucede lo mismo solo que lo hacemos con minutos y le decimos que tenga un rango siempre de 0 - 59
  let minutes = Math.floor(currentMiliseconds / 1000 / 60) % 60;
  // lo mismo que el anterior, de esta forma nos aseguramos que tienen un rango, ya que si no hacemos esto podemos ver en las horas valores que no siguen nuestro estandar de horas como 25 horas, 50 horas, entonces con este operador les ponemos un rango el cual es perfecto para nuestra cuenta regresiva
  let seconds = Math.floor(currentMiliseconds / 1000) % 60;

  // timerText.textContent = `${formatDate(days)} d ${formatDate(
  //   hours
  // )} h ${formatDate(minutes)} m ${formatDate(seconds)} s`;
  timerText.textContent = `${formatDate(days)} días, ${formatDate(
    hours
  )} horas, ${formatDate(minutes)} minutos, ${formatDate(seconds)} segundos`;

  if (currentMiliseconds < 0) {
    clearInterval(setId);
    timerText.textContent = "heyyy today is the great day!!!!🎉🎉🎉🎊🎊🍾";
    return;
  }
}

function formatDate(date) {
  return date < 10 ? "0" + date : date;
}

updateCountDown();
setId = setInterval(updateCountDown, 1000);
