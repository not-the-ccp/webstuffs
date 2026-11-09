// The seal of the Hall, No. 58: tap it, and the two vowels change places.
(function () {
  var seal = document.getElementById("seal");
  var pron = document.getElementById("pron");
  if (!seal || !pron) return;
  var forms = [
    "aug: aw-GUST-in \u00b7 AW-g\u0292a-steen \u00b7 OW-goo-STeen",
    "aug: AW-g\u0292a-steen \u00b7 aw-GUST-in \u00b7 OW-goo-STeen",
    "aug: OW-goo-STeen \u00b7 aw-GUST-in \u00b7 AW-g\u0292a-steen"
  ];
  var i = 0;
  seal.addEventListener("click", function () {
    i = (i + 1) % forms.length;
    pron.innerHTML = forms[i];
    pron.classList.toggle("flipped", i !== 0);
  });
})();
