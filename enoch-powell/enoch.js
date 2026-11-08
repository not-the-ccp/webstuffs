/* Enoch Powell — Biographical Entry: small touches.
   The Greek margin cycles its letter; the second chair settles. */
(function () {
  var letters = ['Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω'];
  var margin = document.getElementById('greek-margin');
  if (margin) {
    var i = 0;
    setInterval(function () {
      margin.style.transition = 'opacity 0.6s';
      margin.style.opacity = 0.1;
      setTimeout(function () {
        i = (i + 1) % letters.length;
        margin.textContent = letters[i];
        margin.style.opacity = 0.28;
      }, 600);
    }, 2600);
  }
})();
