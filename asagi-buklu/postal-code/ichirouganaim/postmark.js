// Notice No. 44 — stamp the "RECEIVED" mark as if the desk rubber just came down.
// Purely cosmetic; the notice reads fine without it.
(function () {
  var stamp = document.getElementById("received");
  if (!stamp) return;

  function land() {
    stamp.classList.add("pre-stamp");
    // let the browser paint the lifted state, then drop it
    void stamp.offsetWidth;
    stamp.classList.remove("pre-stamp");
    stamp.classList.add("stamped");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(land, 350);
    });
  } else {
    setTimeout(land, 350);
  }
})();
