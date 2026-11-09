// Track 8, do not flip: the hush.
(function () {
  var btn = document.getElementById("read-aloud");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var card = btn.closest(".margin-card");
    var gk = card ? card.querySelector(".gk") : null;
    if (gk) gk.textContent = "ἡ δὲ χάρις τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ μετὰ τοῦ νοὸς ὑμῶν";
    var gloss = card ? card.querySelector(".gloss") : null;
    if (gloss) gloss.textContent = "— the last line, in the big letters, to the chair";
    var sheet = document.querySelector(".sheet");
    if (sheet) {
      sheet.classList.remove("hushing");
      // restart the dim
      void sheet.offsetWidth;
      sheet.classList.add("hushing");
    }
    btn.textContent = "The chair is holding its place (do not flip)";
    window.setTimeout(function () {
      btn.textContent = "Read it to the chair (track 8, do not flip)";
    }, 3200);
  });
})();
