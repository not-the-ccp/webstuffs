/* BZ-2511 — live trace on SHZ-01: the mainshock, the minute, the Mw 6.5 reprisal. */
(function () {
  var canvas = document.getElementById("seismo");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;
  var mid = H / 2;
  var x = 0;
  var t = 0;

  // one full passage: quiet -> mainshock -> ~60 sample quiet -> second event -> quiet
  var period = 2400;

  function amp(ph) {
    // ph in [0,1)
    if (ph < 0.08) return 1.2;                                    // background
    if (ph < 0.22) {                                               // mainshock
      var q = (ph - 0.08) / 0.14;
      return 1.2 + 34 * Math.sin(q * Math.PI);
    }
    if (ph < 0.55) return 1.5;                                     // the minute between
    if (ph < 0.72) {                                               // second event, harder, shorter
      var q = (ph - 0.55) / 0.17;
      return 1.5 + 30 * Math.sin(q * Math.PI);
    }
    if (ph < 0.92) return 1.0;                                     // aftershock decay
    return 1.2;
  }

  function sample(ph) {
    var a = amp(ph);
    var n = Math.sin(t * 0.9 + ph * 40) * 0.4 + Math.sin(t * 2.3 + ph * 90) * 0.3 + (Math.random() - 0.5) * 0.5;
    return a * n;
  }

  function frame() {
    t += 0.06;
    var ph = (t % period) / period;
    var y = mid - sample(ph);
    ctx.strokeStyle = "rgba(253,250,240,0.9)";
    ctx.beginPath();
    ctx.moveTo(x, mid);
    ctx.lineTo(x, y);
    ctx.stroke();
    // pen dot
    ctx.fillStyle = "#8c1f12";
    ctx.fillRect(x - 1, y - 1, 2, 2);
    x += 1;
    if (x > W) {
      // roll the drum: slide left, leave a fresh column
      ctx.drawImage(canvas, -2, 0);
      ctx.clearRect(W - 2, 0, 2, H);
      x = W - 2;
    }
    requestAnimationFrame(frame);
  }

  // pre-roll a little background before the big passages begin
  t = period * 0.985;
  frame();
})();
