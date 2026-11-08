// Assessed copy: stamps the mark and counts the words, the way a teacher does.
(function () {
  var stamp = document.getElementById("stamp");
  if (stamp) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stamp.style.opacity = "0.85";
    } else {
      setTimeout(function () { stamp.classList.add("stamped"); }, 600);
    }
  }

  var count = document.getElementById("wordcount");
  var main = document.querySelector("main");
  if (count && main) {
    var words = (main.textContent || "").trim().split(/\s+/).length;
    count.textContent = words + " words, counted twice";
  }
})();
