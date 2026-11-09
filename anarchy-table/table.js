/* The Anarchy Table — a grain scale that lifts one plate at a time.
   Decorative only; the manual reads fine without it. */
(function () {
  var manual = document.getElementById("manual");
  if (!manual) return;

  var scale = document.createElement("div");
  scale.setAttribute("aria-hidden", "true");
  scale.className = "grain-scale";
  scale.innerHTML =
    '<span class="gs-label">GRAIN SCALE &mdash; eleven plates, one dense body each</span>' +
    '<span class="gs-plates" id="gs-plates"></span>' +
    '<button class="gs-btn" id="gs-btn" type="button">lift one plate</button>';

  var foot = manual.querySelector(".man-foot");
  if (foot) manual.insertBefore(scale, foot);

  var plates = document.getElementById("gs-plates");
  var btn = document.getElementById("gs-btn");
  var lifted = 0;
  var MAX = 11;

  function draw() {
    var html = "";
    for (var i = 0; i < MAX; i++) {
      var cls = i < lifted ? "gs-plate up" : "gs-plate";
      html += '<span class="' + cls + '" title="plate ' + (i + 1) + '">' +
        (i < lifted ? "\u25CF" : "\u25CB") + "</span>";
    }
    plates.innerHTML = html;
    if (lifted >= MAX) {
      btn.textContent = "eleven plates \u2014 the plain is stateless";
      btn.disabled = true;
    } else {
      btn.textContent = "lift one plate (" + lifted + " / " + MAX + ")";
    }
  }

  btn.addEventListener("click", function () {
    lifted = lifted >= MAX ? 0 : lifted + 1;
    draw();
  });

  draw();
})();
