/* Verbatim record — small ceremonial motions */
(function () {
  "use strict";

  // The line on the inside front cover, underlined in brown.
  var listLine = document.querySelector(".exhibit.list");
  if (listLine) {
    var mark = document.createElement("mark");
    mark.setAttribute("aria-hidden", "false");
    mark.textContent = listLine.textContent;
    listLine.textContent = "";
    listLine.appendChild(mark);
  }

  // Once the record has been read to the list, the court draws its underline.
  var fired = false;
  function onScroll() {
    if (fired || !listLine) return;
    var r = listLine.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.72 && r.bottom > 0) {
      fired = true;
      document.body.classList.add("read");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // The wax seal: the reader may close the matter.
  var wax = document.querySelector(".wax");
  if (wax && !wax.hasAttribute("role")) wax.setAttribute("role", "button");
  wax.addEventListener("click", function () {
    wax.classList.remove("stamp");
    void wax.offsetWidth; // restart the stamp animation
    wax.classList.add("stamp");
    wax.textContent = "CLOSED";
    setTimeout(function () { wax.textContent = "SEAL IT"; }, 1600);
  });
})();
