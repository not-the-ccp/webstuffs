// The office dial: keeps all five offices' times on one face.
// Pure garnish — the log reads fine with this disabled.
(function () {
  var offices = [
    { name: "New York", zone: "America/New_York" },
    { name: "Geneva",   zone: "Europe/Zurich" },
    { name: "Nairobi",  zone: "Africa/Nairobi" },
    { name: "Vienna",   zone: "Europe/Vienna" },
    { name: "The Hague",zone: "Europe/Amsterdam" }
  ];

  var line = document.createElement("p");
  line.className = "dial-line";
  line.style.cssText =
    "font-family:'Courier New',monospace;font-size:12px;letter-spacing:.05em;" +
    "color:#1d4379;border:1px dashed #a97e2f;padding:8px 10px;margin:0;background:rgba(169,126,47,.05);";
  line.setAttribute("aria-hidden", "true");

  function tick() {
    var parts = [];
    for (var i = 0; i < offices.length; i++) {
      var t;
      try {
        t = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", timeZone: offices[i].zone
        }).format(new Date());
      } catch (e) {
        t = "–:–";
      }
      parts.push(offices[i].name + " " + t);
    }
    line.textContent = "OFFICE DIAL · " + parts.join("  ·  ");
  }

  var head = document.querySelector(".log-head");
  if (head) {
    head.appendChild(line);
    tick();
    setInterval(tick, 30000);
  }
})();
