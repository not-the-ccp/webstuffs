// Newsletter No. 31 — a small ripple for the archive line.
(function () {
  var items = document.querySelectorAll(".item");
  items.forEach(function (item, i) {
    item.style.opacity = "0";
    item.style.transform = "translateY(10px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    setTimeout(function () {
      item.style.opacity = "1";
      item.style.transform = "none";
    }, 120 + i * 90);
  });

  // The margin line, when tapped, marks itself in the ledger's red.
  var marginLine = document.querySelector(".item:nth-of-type(2) strong");
  if (marginLine) {
    marginLine.style.cursor = "pointer";
    marginLine.title = "the line in the margin, as written";
    marginLine.addEventListener("click", function () {
      marginLine.style.color = marginLine.style.color === "" ? "#9c3d22" : "";
      marginLine.style.boxShadow =
        marginLine.style.boxShadow === ""
          ? "0 2px 0 #9c3d22"
          : "";
    });
  }
})();
