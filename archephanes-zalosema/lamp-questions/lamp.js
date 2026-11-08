/* Lamp flicker and the drifting specimen */
(function(){
  var bulb = document.querySelector(".lamp .glow");
  if (bulb){
    setInterval(function(){
      var f = 0.82 + Math.random() * 0.18;
      bulb.style.opacity = String(f);
    }, 1200);
  }
  var flyer = document.getElementById("flyer");
  if (flyer && window.matchMedia("(prefers-reduced-motion: no-preference)").matches){
    setInterval(function(){
      var r = (Math.random() * 40 - 20).toFixed(1);
      flyer.style.transform += "";
      flyer.setAttribute("style", "animation-play-state: running");
      flyer.style.rotate = r + "deg";
    }, 9000);
  } else if (flyer){
    flyer.style.display = "none";
  }
})();
