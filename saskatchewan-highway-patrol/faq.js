/* Provincial Answer Desk — question plates */
document.querySelectorAll(".qa .q").forEach(function (q) {
  q.setAttribute("role", "button");
  q.addEventListener("click", function () {
    q.parentElement.classList.toggle("collapsed");
  });
});

/* The logbook closes northwest: gentle parallax on the shield. */
var shield = document.querySelector(".sign-wrap");
if (shield && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  window.addEventListener("mousemove", function (e) {
    var dx = (e.clientX / window.innerWidth - 0.5) * 6;
    var dy = (e.clientY / window.innerHeight - 0.5) * 4;
    shield.style.transform = "translate(" + dx + "px," + dy + "px)";
  });
}
