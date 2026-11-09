// Polygon Man Experience — visitor counter and guestbook
(function () {
  var base = 4187; // the counter's starting figure, per the log
  var el = document.getElementById("visitor-count");
  if (el) {
    var n = base + Math.floor(Math.random() * 90) + 1;
    el.textContent = String(n).padStart(6, "0");
  }

  var form = document.getElementById("gb-form");
  var text = document.getElementById("gb-text");
  var btn = document.getElementById("gb-btn");
  var box = document.getElementById("gb-entries");
  if (form && text && btn && box) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = text.value.trim();
      if (!v) return;
      var p = document.createElement("p");
      p.className = "gb-entry";
      p.textContent = "Anonymous, the road — " + v;
      box.appendChild(p);
      text.value = "";
    });
    btn.addEventListener("click", function () {
      form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit", { cancelable: true }));
    });
  }
})();
