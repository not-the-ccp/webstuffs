// General Despatch Office: open / close the whole file at once.
document.addEventListener("DOMContentLoaded", function () {
  var bar = document.createElement("div");
  bar.className = "togglebar";
  var btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "Open the whole file";
  bar.appendChild(btn);
  var faq = document.querySelector(".faq");
  if (faq && faq.parentNode) faq.parentNode.insertBefore(bar, faq);

  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry details"));
  btn.addEventListener("click", function () {
    var anyClosed = entries.some(function (d) { return !d.open; });
    entries.forEach(function (d) { d.open = anyClosed; });
    btn.textContent = anyClosed ? "Close the file" : "Open the whole file";
  });
});
