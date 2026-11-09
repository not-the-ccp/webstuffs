/* A small platform notice: the day's service status, printed on arrival. */
(function () {
  var el = document.createElement("p");
  el.id = "notice";
  var jan21 = new Date().getMonth() === 0 && new Date().getDate() === 21;
  el.textContent = jan21
    ? "Platform notice — today, 21 January: all services of the line are running."
    : "Platform notice — the line is in force on the 21st of January; the form is published and kept.";
  var main = document.querySelector("main");
  if (main && main.firstElementChild) {
    main.insertBefore(el, main.firstElementChild);
  }
})();
