/* Goygol Plain Gazette, No. 118 — tap an ad to mark it SOLD. */
document.querySelectorAll(".ad[data-ad]").forEach(function (ad) {
  ad.addEventListener("click", function (e) {
    if (e.target.closest("a")) return; // never eat a link click
    ad.classList.toggle("sold");
  });
});
