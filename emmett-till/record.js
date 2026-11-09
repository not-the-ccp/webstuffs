// Case No. 245 — small touches for the folder; the record reads without this.
(function () {
  var box = document.getElementById("counter");
  if (box) {
    var n = parseInt(box.textContent.replace(/\D/g, ""), 10) || 4217;
    n += 1;
    box.textContent = String(n).padStart(6, "0");
  }

  var form = document.querySelector(".guest form");
  if (form) {
    var btn = form.querySelector("button");
    var name = form.querySelector("input");
    var line = form.querySelectorAll("input")[1];
    var status = form.querySelector(".signed");
    if (btn) {
      btn.onclick = function () {
        var who = name && name.value ? name.value : "the record-keeper";
        var text = line && line.value ? line.value : "the record stands as reported.";
        status.textContent = "Entered in the book, as reported: " + who + " — “" + text + "”";
      };
    }
  }
})();
