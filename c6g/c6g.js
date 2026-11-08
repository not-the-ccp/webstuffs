/* C6G liner notes — track selection and running time */
(function () {
  var tracks = Array.prototype.slice.call(document.querySelectorAll(".tracks li"));
  var nowEl = document.getElementById("now");
  var current = null;
  var seconds = 0;
  var timer = null;

  function parse(t) {
    var p = t.split(":");
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }

  function fmt(s) {
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    if (current) { current.classList.remove("playing"); current = null; }
  }

  tracks.forEach(function (li) {
    li.addEventListener("click", function () {
      var total = parse(li.querySelector(".time").textContent);
      if (current === li) {
        stop();
        if (nowEl) nowEl.textContent = "Needle: rest on the run-out groove.";
        return;
      }
      stop();
      current = li;
      seconds = 0;
      li.classList.add("playing");
      timer = setInterval(function () {
        seconds++;
        if (seconds >= total) {
          stop();
          if (nowEl) nowEl.textContent = "Side complete. Do not flip before the hush.";
          return;
        }
        if (nowEl) nowEl.textContent = "Needle: track " + li.querySelector(".no").textContent + " — " + fmt(seconds) + " in.";
      }, 1000);
      if (nowEl) nowEl.textContent = "Needle: track " + li.querySelector(".no").textContent + " — 0:00 in.";
    });
  });
})();
