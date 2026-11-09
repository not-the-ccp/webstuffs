// The Bodhisattva Jar — NR-2 Shelf Office
// Two small habits: the kettled bulletin ticker, and a bell that rings twice
// when the vow is reached. Text is fully readable with all of this off.

(function () {
  "use strict";

  var bulletin =
    "Flavour with ketchup, Leamington sauce 459 Lease, breaks in the decoy " +
    "ducks to entrap the others.";

  // ---- bulletin ticker, read back word for word ----
  var ticker = document.createElement("div");
  ticker.className = "ticker";
  ticker.setAttribute("aria-hidden", "true");
  var track = document.createElement("span");
  track.className = "track";
  var one =
    " <b>THE KITCHEN BULLETIN &middot; AS RECORDED</b>&ensp;" +
    bulletin + "&ensp;&mdash;&ensp;read it back, word for word, and let it " +
    "be&ensp;&bull;&ensp;the guest&rsquo;s bowl first&ensp;&bull;&ensp;the " +
    "kettle is off, the bell is rung&ensp;&bull;";
  track.innerHTML = one + one; // duplicated for the seamless -50% loop
  ticker.appendChild(track);
  document.body.appendChild(ticker);

  // keep page text clear of the fixed ticker
  var colophon = document.querySelector(".colophon");
  if (colophon) colophon.style.paddingBottom = "52px";

  // ---- the bell: strike twice when the vow is on screen ----
  var bell = new (window.AudioContext || window.webkitAudioContext)();
  var rung = false;
  var lastStrike = 0;

  function chime(when, gainPeak) {
    var o = bell.createOscillator();
    var g = bell.createGain();
    o.type = "sine";
    o.frequency.value = 660 + 96 * Math.random();
    o.frequency.exponentialRampToValueAtTime(430, when + 0.7);
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(gainPeak, when + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 0.9);
    o.connect(g).connect(bell.destination);
    o.start(when);
    o.stop(when + 1);
  }

  function ring() {
    var now = Date.now();
    if (now - lastStrike < 2500 || !bell) return;
    if (bell.state === "suspended") { bell.resume(); }
    lastStrike = now;
    var t = bell.currentTime;
    chime(t, 0.16);          // the mule-bell habit of the Pashupati gate
    chime(t + 0.55, 0.10);   // ... rings twice
  }

  if ("IntersectionObserver" in window) {
    var vow = document.getElementById("vow");
    if (vow) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !rung) { rung = true; ring(); }
        });
      }, { threshold: 0.25 }).observe(vow);
    }
  }

  // the kettle is off; the bell is rung only once the vow has been read
})();
