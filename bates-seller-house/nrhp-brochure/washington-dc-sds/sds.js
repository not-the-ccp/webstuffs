// Safety data sheet — small stamp interaction
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  var clicks = 0;
  document.querySelectorAll(".sds h2").forEach(function (h) {
    h.style.cursor = "pointer";
    h.title = "Certify this section";
    h.addEventListener("click", function () {
      clicks += 1;
      stamp.classList.add("shown");
      if (clicks % 4 === 0) {
        stamp.classList.remove("shown");
        void stamp.offsetWidth;
      }
    });
  });
})();
