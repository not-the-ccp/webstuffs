/* Nakameguro Annex — twin clocks and the hanko seal */

function pad(n) { return String(n).padStart(2, "0"); }

function tickClocks() {
  const now = new Date();
  const tokyo = new Date(now.getTime() + (9 + now.getTimezoneOffset()) * 60000);
  const portland = new Date(now.getTime() + (-7 + now.getTimezoneOffset()) * 60000);
  const tTokyo = document.getElementById("clock-tokyo");
  const tPortland = document.getElementById("clock-portland");
  if (tTokyo) tTokyo.textContent = pad(tokyo.getUTCHours()) + ":" + pad(tokyo.getUTCMinutes()) + ":" + pad(tokyo.getUTCSeconds());
  if (tPortland) tPortland.textContent = pad(portland.getUTCHours()) + ":" + pad(portland.getUTCMinutes()) + ":" + pad(portland.getUTCSeconds());
}

tickClocks();
setInterval(tickClocks, 1000);

const seal = document.getElementById("hanko");
if (seal) {
  seal.addEventListener("click", function () {
    seal.classList.toggle("stamped");
  });
}
