/* Chapter XI — a light frost on the page: a few slow snowflakes,
   and the crease rule that reveals as you scroll. Text is fully
   readable without this script. */
(function () {
  "use strict";

  var flakes = document.createElement("div");
  flakes.className = "snow";
  flakes.setAttribute("aria-hidden", "true");

  var styles = document.createElement("style");
  styles.textContent =
    ".snow{position:fixed;inset:0;pointer-events:none;z-index:50;overflow:hidden}" +
    ".snow i{position:absolute;top:-6vh;display:block;color:rgba(22,40,61,.28);" +
    "font-style:normal;animation:fall linear infinite}" +
    "@keyframes fall{to{transform:translateY(112vh) rotate(300deg)}}";
  document.head.appendChild(styles);

  for (var i = 0; i < 14; i++) {
    var f = document.createElement("i");
    f.textContent = "❄";
    var s = 10 + Math.random() * 12;
    f.style.left = (Math.random() * 100) + "vw";
    f.style.fontSize = s + "px";
    f.style.opacity = (0.12 + Math.random() * 0.22).toFixed(2);
    f.style.animationDuration = (18 + Math.random() * 22) + "s";
    f.style.animationDelay = (-Math.random() * 30) + "s";
    flakes.appendChild(f);
  }
  document.body.appendChild(flakes);

  /* the roman numerals on the rules fill in as each enters view */
  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("seen");
          seen.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    var items = document.querySelectorAll(".rules li");
    items.forEach(function (li) {
      li.style.opacity = "0";
      li.style.transform = "translateX(-8px)";
      li.style.transition = "opacity .6s ease, transform .6s ease";
      seen.observe(li);
    });
    var extra = document.createElement("style");
    extra.textContent = ".rules li.seen{opacity:1;transform:none}";
    document.head.appendChild(extra);
  }
})();
