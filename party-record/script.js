(function () {
  function tick() {
    var manila = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
    document.getElementById("clock").textContent = manila.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  tick();
  setInterval(tick, 1000);
})();
