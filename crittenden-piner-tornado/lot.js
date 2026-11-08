// Room 4: strike the hammer to record the lot's sale.
(function () {
  var realised = document.getElementById("realised");
  if (!realised) return;
  realised.hidden = false;
  var estimate = realised.closest(".estimate");
  if (!estimate) return;
  estimate.style.cursor = "pointer";
  estimate.title = "The hammer at ten forty-one";
  estimate.addEventListener("click", function () {
    realised.style.transform = realised.style.transform
      ? ""
      : "rotate(-2deg) scale(1.04)";
  });
})();
