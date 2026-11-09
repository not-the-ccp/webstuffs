/* The postmark is impressed after the letter settles. */
(function () {
  var mark = document.querySelector(".postmark");
  if (!mark) return;
  mark.style.opacity = "0";
  mark.style.transition = "opacity 400ms ease, transform 260ms ease";
  setTimeout(function () {
    mark.style.opacity = "1";
    mark.style.transform = "rotate(-11deg) scale(1.06)";
    setTimeout(function () {
      mark.style.transform = "rotate(-11deg) scale(1)";
    }, 280);
  }, 700);
})();
