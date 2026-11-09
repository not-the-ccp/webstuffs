// The Fifty-Second Jar — strike the seal, once.
(function () {
  var btn = document.getElementById("seal-btn");
  var readout = document.getElementById("seal-readout");
  if (!btn || !readout) return;

  var struck = 0;
  btn.addEventListener("click", function () {
    struck += 1;
    if (struck % 2 === 1) {
      document.body.classList.add("sealed");
      readout.textContent =
        "Struck, once, at fol. 42:36. The seal does not strike at the same hour twice.";
    } else {
      document.body.classList.remove("sealed");
      readout.textContent =
        "Lifted. The stamp is unstruck again; the record is the same, as records are.";
    }
  });
})();
