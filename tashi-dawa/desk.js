/* Reader's Desk, Lhasa — small courtesy for the accordion */
(function () {
  var all = Array.prototype.slice.call(document.querySelectorAll("details"));

  // Only one question open at a time, as at a real desk.
  all.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (!d.open) return;
      all.forEach(function (o) {
        if (o !== d && o.open) o.open = false;
      });
      var qa = d.closest(".qa");
      if (qa) qa.classList.add("is-open");
      all.forEach(function (o) {
        var other = o.closest(".qa");
        if (other && other !== qa) other.classList.remove("is-open");
      });
    });
  });

  // Deep links: open the section named in the hash.
  function openFromHash() {
    var id = location.hash.replace("#", "");
    if (!id) return;
    var section = document.getElementById(id);
    if (section) {
      var d = section.querySelector("details");
      if (d) {
        d.open = true;
        d.dispatchEvent(new Event("toggle"));
      }
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  window.addEventListener("hashchange", openFromHash);
  if (location.hash) openFromHash();
})();
