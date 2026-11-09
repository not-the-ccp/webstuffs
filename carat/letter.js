/* Notice No. 48 — the weighing slip toggle */
(function () {
  var slip = document.getElementById("slip");
  var btn = document.getElementById("slip-toggle");
  if (!slip || !btn) return;
  btn.addEventListener("click", function () {
    var filed = slip.classList.toggle("is-filed");
    btn.setAttribute("aria-pressed", filed ? "false" : "true");
    btn.textContent = filed ? "Show the slip as amended" : "Show the slip as filed";
  });
})();
