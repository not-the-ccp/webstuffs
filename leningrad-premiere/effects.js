/* The Relay Room — line effects for Thread No. 7 */
(function () {
  "use strict";

  /* Scramble-decode the thread title on load. */
  var title = document.getElementById("threadTitle");
  if (title) {
    var finalText = title.getAttribute("data-final") || title.textContent;
    var glyphs = "▮▯░▒▓/\\|<>=+#АБВГДЖЗШЩЩЧЪФ";
    var frame = 0;
    var total = 28;
    var timer = setInterval(function () {
      frame++;
      var reveal = Math.floor((frame / total) * finalText.length);
      var out = "";
      for (var i = 0; i < finalText.length; i++) {
        if (i < reveal || finalText[i] === " ") out += finalText[i];
        else out += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      title.textContent = out;
      if (frame >= total) {
        title.textContent = finalText;
        clearInterval(timer);
      }
    }, 45);
  }

  /* Posts fade in as the line warms up (scroll reveal). */
  var posts = Array.prototype.slice.call(document.querySelectorAll(".post"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    posts.forEach(function (p) { io.observe(p); });
  } else {
    posts.forEach(function (p) { p.classList.add("visible"); });
  }

  /* Line test: run the siren sweep fast for a few seconds. */
  document.querySelectorAll("[data-siren]").forEach(function (btn) {
    var busy = false;
    btn.addEventListener("click", function () {
      if (busy) return;
      busy = true;
      document.body.classList.add("siren-test");
      btn.textContent = "◉ TONE 5 HELD";
      setTimeout(function () {
        document.body.classList.remove("siren-test");
        btn.textContent = "◉ run line test";
        busy = false;
      }, 4000);
    });
  });

  /* Quiet lamp flicker on the live dot's parent (subtle). */
  var meta = document.querySelector(".thread-meta");
  if (meta) {
    setInterval(function () {
      meta.style.opacity = (0.86 + Math.random() * 0.14).toFixed(2);
    }, 900);
  }
})();
