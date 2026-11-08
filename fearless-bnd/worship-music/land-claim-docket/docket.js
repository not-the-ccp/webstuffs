/* Docket page: line numbers on the transcript, like the reporter's copy. */
(function () {
  var block = document.getElementById("transcript");
  if (!block) return;
  var paras = Array.prototype.slice.call(block.querySelectorAll("p"));

  var btn = document.createElement("button");
  btn.className = "linenos";
  btn.type = "button";
  btn.textContent = "Reporter's line numbers: off";
  btn.setAttribute("aria-pressed", "false");

  function lineNo(el, n) {
    var span = document.createElement("span");
    span.className = "lineno";
    span.textContent = String(n).padStart(3, "0");
    return span;
  }

  function apply() {
    var on = btn.getAttribute("aria-pressed") === "true";
    paras.forEach(function (p, i) {
      if (on) {
        p.classList.add("lined");
        var old = p.querySelector(".lineno");
        if (old) old.remove();
        p.insertBefore(lineNo(p, 5 + i * 7), p.firstChild);
      } else {
        p.classList.remove("lined");
        var o = p.querySelector(".lineno");
        if (o) o.remove();
      }
    });
    btn.textContent = on ? "Reporter's line numbers: on" : "Reporter's line numbers: off";
  }

  btn.addEventListener("click", function () {
    btn.setAttribute("aria-pressed", btn.getAttribute("aria-pressed") === "true" ? "false" : "true");
    apply();
  });

  document.body.appendChild(btn);
})();
