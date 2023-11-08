function updateTime() {
  const timeElement = document.getElementById('time');
  const currentTime = new Date();
  timeElement.innerText = currentTime.toLocaleTimeString();
}

setInterval(updateTime, 1000); // actualiza la hora cada 1 segundo (1000 milisegundos)
