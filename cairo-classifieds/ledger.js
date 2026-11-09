// The Cairene Ledger — the register column, run like a pawnshop
(function () {
  "use strict";

  var form = document.getElementById("register-form");
  var list = document.getElementById("register-list");
  var nameInput = document.getElementById("reg-name");
  var claimInput = document.getElementById("reg-claim");
  if (!form || !list || !nameInput || !claimInput) return;

  var lineNo = 3; // Moti holds line 3 by proxy

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = nameInput.value.trim();
    var claim = claimInput.value.trim();
    if (!name) {
      nameInput.focus();
      return;
    }
    lineNo += 1;
    var li = document.createElement("li");
    li.className = "fresh";

    var strong = document.createElement("span");
    strong.className = "rl-name";
    strong.textContent = name;

    li.appendChild(strong);
    li.appendChild(document.createTextNode(
      " \u2014 " + (claim || "a line in the roll, held at the day's rate") +
      " \u00b7 line " + lineNo
    ));
    list.appendChild(li);

    nameInput.value = "";
    claimInput.value = "";
    nameInput.focus();
    li.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  // Give each ad its seal, named after the column
  var stamps = {
    "Rooms to Let": "TO LET",
    "Lost: a Cow, Name Moti": "LOST",
    "By the Water": "THE QUAY",
    "Service: a Scribe for the New City": "WANTED",
    "Found: a Ledger in a Green Cloth": "FOUND",
    "For Sale: one Stone of the Wall of 969": "FOR SALE"
  };
  document.querySelectorAll(".ad").forEach(function (ad) {
    var h = ad.querySelector(".adhead");
    if (h && stamps[h.textContent.trim()]) {
      ad.setAttribute("data-stamp", stamps[h.textContent.trim()]);
    }
  });
})();
