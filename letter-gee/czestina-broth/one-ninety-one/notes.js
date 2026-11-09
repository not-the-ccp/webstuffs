/* One Ninety-One Chairs — the needle and the chairs */
(function () {
  "use strict";

  var vinyl = document.getElementById("vinyl");
  var label = document.getElementById("vinyl-label");
  var count = document.getElementById("chair-count");
  var spin = document.getElementById("spin");
  if (!vinyl || !spin) return;

  // Drop the needle: the record spins; lift it: the record rests.
  spin.addEventListener("click", function () {
    var on = vinyl.classList.toggle("spinning");
    spin.setAttribute("aria-pressed", on ? "true" : "false");
    spin.innerHTML = on ? "&#10074;&#10074;&thinsp;lift the needle" : "&#9654;&thinsp;drop the needle";
    if (!on && count) {
      count.textContent = "191";
      label.querySelector("small").innerHTML = "&Scaron;ED&Aacute; DESKA<br>SIDE A";
    }
  });

  // The side note on the label: counting the chairs as the record turns.
  var chairs = 0;
  var total = 191;
  function tick() {
    chairs += 1;
    if (count) count.textContent = String(chairs);
    if (chairs < total && vinyl.classList.contains("spinning")) {
      requestAnimationFrame(function () { setTimeout(tick, 24); });
    } else if (chairs >= total && label) {
      label.querySelector("small").innerHTML = "&Scaron;ED&Aacute; DESKA<br>THE HALL";
    }
  }

  // Clicking a track sets the number on the label.
  var tracks = document.querySelectorAll(".tracks li");
  Array.prototype.forEach.call(tracks, function (li) {
    li.addEventListener("click", function () {
      var no = li.querySelector(".no");
      if (!no || !label) return;
      if (!vinyl.classList.contains("spinning")) {
        vinyl.classList.add("spinning");
        spin.setAttribute("aria-pressed", "true");
        spin.innerHTML = "&#10074;&#10074;&thinsp;lift the needle";
      }
      label.querySelector("small").innerHTML = "&Scaron;ED&Aacute; DESKA<br>" + no.textContent;
    });
  });

  // First drop of the needle counts the hall out.
  var armed = true;
  spin.addEventListener("click", function () {
    if (vinyl.classList.contains("spinning") && armed) {
      armed = false;
      chairs = 0;
      tick();
    }
  });
})();
