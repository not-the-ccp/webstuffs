/* SLL-YG/3 — small camp-log touch: stamp the chapter date in the footer */
(function () {
  var foot = document.querySelector(".foot");
  if (!foot) return;
  var span = document.createElement("span");
  span.textContent = "READ LOG · " + new Date().toLocaleDateString("en-GB");
  foot.insertBefore(span, foot.querySelector(".stamp"));
})();
