/* The Puchero Clock — built from the misbound line:
   4 or 5 onions, 5 turnips, 3/4 to 1 hour, per pot.
   Six eaters to a pot; 4 kg of beef to six. */
(function () {
  var slider = document.getElementById("eaters");
  if (!slider) return;

  var out = {
    eaters: document.getElementById("eatersOut"),
    beef: document.getElementById("beefOut"),
    pots: document.getElementById("potsOut"),
    onions: document.getElementById("onionsOut"),
    turnips: document.getElementById("turnipsOut"),
    time: document.getElementById("timeOut"),
    fare: document.getElementById("fareOut")
  };

  function plural(n, w) { return n + " " + w + (n === 1 ? "" : "s"); }

  function render() {
    var n = Math.max(1, Math.min(24, parseInt(slider.value, 10) || 1));
    slider.value = n;
    var pots = Math.ceil(n / 6);
    out.eaters.textContent = n;
    out.beef.textContent = (n * 4 / 6).toFixed(1).replace(/\.0$/, "") + " kg";
    out.pots.textContent = plural(pots, "pot") +
      (pots === 1 ? " · 4–5 onions · 5 turnips" : " · " + (4 * pots) + "–" + (5 * pots) + " onions · " + (5 * pots) + " turnips");
    out.onions.textContent = (4 * pots) + " to " + (5 * pots);
    out.turnips.textContent = plural(5 * pots, "turnip");
    out.time.textContent = pots === 1 ? "3/4 to 1 hour" : "3/4 to 1 hour " + (pots - 1) + " on, " + pots + " at once";
    out.fare.textContent = "one shell, or a number — unchanged";
  }

  slider.addEventListener("input", render);
  var up = document.getElementById("eatersUp");
  var down = document.getElementById("eatersDown");
  if (up) up.addEventListener("click", function () { slider.value = Math.min(24, parseInt(slider.value, 10) + 1); render(); });
  if (down) down.addEventListener("click", function () { slider.value = Math.max(1, parseInt(slider.value, 10) - 1); render(); });

  render();
})();
