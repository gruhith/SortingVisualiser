let delay = 260;
let speedElement = document.getElementById("input-speed");

speedElement.addEventListener('input', () => {
  delay = 200 - parseInt(speedElement.value);
});
