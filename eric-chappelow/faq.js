// Small touch for the Conscience Register: each answer is kept "stamped"
// into place on load; the text itself is fully readable without this.
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".qa");
  items.forEach(function (item, i) {
    item.style.opacity = "0";
    item.style.transform = "translateY(8px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    setTimeout(function () {
      item.style.opacity = "1";
      item.style.transform = "none";
    }, 120 * i);
  });
});
