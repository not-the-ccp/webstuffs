// Application No. GY-66/07 — docket of knockings, entered at 03:20, in triplicate
(function () {
  "use strict";

  var vat = document.getElementById("vat");
  var line = document.getElementById("docket-line");
  var read = document.getElementById("chain-read");
  if (!vat || !line || !read) return;

  var knocking = 0;
  var forms = [
    "the vat stands; the ledger is open in triplicate",
    "the plaintiff says the defendant is fined in the ledger",
    "knocking entered — one for the office, one for Baku, one for the bench",
    "knocking entered in ink, never pencil",
    "the frost token is an additive, not a penalty",
    "the most violent knocking is the one the ledger enters last"
  ];

  function record() {
    knocking += 1;
    var form = forms[knocking % forms.length];
    line.textContent = "no. " + knocking + " — " + form;
    vat.classList.remove("knock");
    // force reflow so the animation can replay
    void vat.offsetWidth;
    vat.classList.add("knock");
  }

  vat.addEventListener("click", record);
  vat.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      record();
    }
  });
  vat.setAttribute("tabindex", "0");
  vat.setAttribute("role", "button");
  vat.setAttribute("aria-label", "Strike the oak-bark vat; the knocking is entered in the docket");

  // FIG. 2 — the chain as the examiner reads it, one unit at a time
  var unit = "\u2212C(O)(CH\u2082)\u2084C(O)\u2212NH(CH\u2082)\u2086NH\u2212 ";
  var shown = 0;
  var full = unit + unit + unit + "\u00b7\u00b7\u00b7 (n)";

  function step() {
    if (shown < full.length) {
      shown = Math.min(full.length, shown + 3);
      read.textContent = full.slice(0, shown) + (shown < full.length ? "\u258c" : "");
    } else {
      read.textContent = full + " \u2014 read aloud in its fixed form";
    }
    setTimeout(step, 160); // sixteen frames per second, at the ledger's usual speed
  }
  setTimeout(step, 900);
})();
