/* Card No. 7 — the weighing basket: food gifts against the 30,000-won ceiling of 2016 */
(function () {
  var CEILING = 30000;

  document.querySelectorAll(".basket li").forEach(function (li) {
    var btn = li.querySelector("button");
    var verdict = li.querySelector(".verdict");
    var won = parseInt(li.getAttribute("data-won"), 10);

    btn.addEventListener("click", function () {
      if (li.classList.contains("stays") || li.classList.contains("reported")) {
        li.classList.remove("stays", "reported");
        verdict.textContent = "";
        return;
      }
      if (won <= CEILING) {
        li.classList.add("stays");
        verdict.textContent = "Weighed: under the ceiling. Stays for the staff.";
      } else {
        li.classList.add("reported");
        verdict.textContent =
          "Weighed: " + (won - CEILING).toLocaleString() + " won over the ceiling. Written up and reported within ten days.";
      }
    });
  });
})();
