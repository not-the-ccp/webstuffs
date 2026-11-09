/* The ledger: one question open at a time, like one lamp at the door. */
(function () {
  var questions = Array.prototype.slice.call(document.querySelectorAll("details.q"));
  questions.forEach(function (q) {
    q.addEventListener("toggle", function () {
      if (!q.open) return;
      questions.forEach(function (other) {
        if (other !== q && other.open) other.open = false;
      });
    });
  });
})();
