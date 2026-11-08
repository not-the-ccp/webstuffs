// One postmark per visit: click anywhere on the sleeve and the
// post office stamps the sleeve. No JavaScript? The notes still
// read fine — the mark is optional, like a stamp on a postcard.
(function () {
  var mark = document.createElement("div");
  mark.className = "postmark";
  mark.setAttribute("aria-hidden", "true");
  mark.innerHTML =
    '<span class="pm-1">AŞAĞIBÜKLÜ KÖYÜ</span>' +
    '<span class="pm-2">49510</span>' +    '<span class="pm-3">BULANIK / MUS</span>' +
    '<span class="pm-3">RECEIVED &middot; BY HAND</span>';
  document.body.appendChild(mark);

  var sleeve = document.querySelector(".sleeve");
  if (sleeve) {
    sleeve.addEventListener("click", function () {
      mark.classList.toggle("stamped");
    });
  }
})();
