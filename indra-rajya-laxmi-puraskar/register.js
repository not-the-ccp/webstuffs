// Small touches for the patent register page.
document.addEventListener("DOMContentLoaded", function () {
  var panels = document.querySelectorAll(".panel");
  panels.forEach(function (panel) {
    panel.style.opacity = "0";
    panel.style.transform = "translateY(6px)";
    panel.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        panel.style.opacity = "1";
        panel.style.transform = "none";
      });
    });
  });
});
