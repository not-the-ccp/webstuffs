/* Council of the Marble Hall — Minutes No. 230
   The gold wafer: one press seals the minutes.
   The watch sentence flares when it enters the view, once. */

(function () {
  var seal = document.getElementById("seal");
  var state = document.getElementById("sealState");
  var sentence = document.getElementById("watch");

  if (seal && state) {
    var sealed = false;
    var press = function () {
      if (sealed) return;
      sealed = true;
      seal.classList.add("sealed");
      state.textContent = "sealed \u00b7 gold wafer pressed \u00b7 19:11";
    };
    seal.addEventListener("click", press);
    seal.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        press();
      }
    });
  }

  if (sentence && "IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          sentence.classList.add("flash");
          io.disconnect();
        }
      });
    }, { threshold: 0.6 });
    io.observe(sentence);
  }
})();
