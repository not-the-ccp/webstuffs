// Elkhart Grove Middle School — Term Report No. 4
// Click the grade box: it gets "stamped" (a brief thump animation).

(function () {
  var grade = document.getElementById("grade");
  if (!grade) return;

  grade.addEventListener("click", function () {
    grade.classList.remove("stamped");
    // force reflow so the class re-applies cleanly on rapid clicks
    void grade.offsetWidth;
    grade.classList.add("stamped");
  });

  // the stamp arrives on its own shortly after the page settles
  setTimeout(function () {
    grade.classList.add("stamped");
  }, 900);
})();
