/* Studio 12: the on-air lamp, ticking along with the dial */
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;
  lamp.classList.add("lit");
  // the needle drifts, one notch per "tick", the way the dial does on the air
  var needle = document.querySelector(".dial .needle");
  var marks = [0.12, 0.3, 0.48, 0.62, 0.78, 0.9];
  var i = 2;
  if (needle && marks.length) {
    setInterval(function () {
      i = (i + 1) % marks.length;
      needle.style.transition = "left 0.6s steps(1)";
      needle.style.left = (marks[i] * 100) + "%";
    }, 1800);
  }
})();
