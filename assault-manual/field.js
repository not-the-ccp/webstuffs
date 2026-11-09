// Field Manual FM-112, Chapter IX — the inspector's stamp.
// Optional garnish; the chapter reads fine without it.
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  stamp.addEventListener("click", function () {
    stamp.classList.toggle("stamped");
  });
  // The platform is inspected on arrival; a short delay keeps the ink fresh.
  setTimeout(function () {
    stamp.classList.add("stamped");
  }, 1200);
})();
