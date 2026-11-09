// The War of Sections - page 41: visitor counter and guestbook touches
(function () {
  var KEY = "war-of-sections-visits";
  var n = parseInt(localStorage.getItem(KEY) || "46", 10) + 1;
  localStorage.setItem(KEY, String(n));
  var el = document.getElementById("counter");
  if (el) el.textContent = String(n).padStart(6, "0");

  // The guestbook form signs itself, quietly, into a line at the foot.
  var form = document.querySelector(".gb-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var names = form.querySelectorAll("input[type=text]");
      var table = names[0] ? names[0].value : "the Clerkenwell Table";
      var quarter = names[1] ? names[1].value : "00";
      var sel = form.querySelector("select");
      var disease = sel ? sel.value : "one token";
      var note = document.querySelector(".gb-note");
      if (note) {
        note.textContent = "New signature: " + table + ", " + quarter +
          "th quarter, " + disease + ". The ward is not shared.";
      }
    });
  }
})();
