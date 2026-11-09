/* Timetable No. 19 — a small touch: the SUSPENDED row pulses, the
   "delay stamp" wobbles gently. Text stays fully readable without this. */
(function () {
  var suspended = document.querySelector("tr.late td.time");
  if (suspended) {
    suspended.setAttribute("title", "Service to the elevator remains suspended.");
  }
  var late = document.querySelectorAll("tr.late");
  for (var i = 0; i < late.length; i++) {
    late[i].addEventListener("mouseenter", function () {
      this.style.background = "rgba(179,59,42,.16)";
    });
    late[i].addEventListener("mouseleave", function () {
      this.style.background = "";
    });
  }
})();
