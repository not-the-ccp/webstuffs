// FM-1942-7 verification stamp: press once, the copy is verified.
(function () {
  var btn = document.getElementById("stampBtn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var on = document.body.classList.toggle("stamped");
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.textContent = on ? "VERIFIED — PRESS TO UNSTAMP" : "PRESS TO VERIFY THIS COPY";
  });
})();
