/* The Never-Shorten-Twice Checker, bench at the door of the page. */
(function () {
  "use strict";

  var form = document.getElementById("checker");
  var verdictBox = document.getElementById("verdict");
  if (!form || !verdictBox) return;

  var FULL_NAMES = {
    "ernest": {
      allowed: ["erni"],
      refused: {
        "erni": null,
        "ernie": "The wrong drawer. One letter apart, two degrees cold, and the working form the household actually carries has been skipped entirely.",
        "erns": "The locksmith's box. The name is filed past the end of the alphabet and the key no longer turns.",
        "nest": "Not in the register, and not on the forty-fourth shelf, which is reserved for names, not for rhymes."
      }
    },
    "ernst": {
      allowed: ["erni"],
      refused: {
        "ernie": "The Rhineland font gives <em>Ernst</em> to the shorter of us, <em>Erni</em> — not to the one with the second letter replaced by a habit. Wrong drawer, two degrees cold.",
        "erni": null,
        "erny": "The register in Wuppertal does not run to that vowel. The ink was honest; you are not."
      }
    }
  };

  var ALREADY_SHORT = {
    "erni": "Erni is already the shortened form. Whatever you were about to say is a shortening of the shortening, and the conversation cools by exactly two degrees. Do not shorten it twice."
  };

  var SURNAMES = [
    "erni", "alabau", "kowalczyk", "reyes", "chaplin", "lloren\u00e7", "talls"
  ];
  var SURNAME_RULING =
    "A surname. Surnames are not to be shortened, not pluralised, and not pronounced with a flourish. Ask the name, pronounce it flatly, thank them, and sit down.";

  function norm(s) {
    return s.trim().toLowerCase();
  }

  function say(ruling, text, ok) {
    verdictBox.classList.remove("ok", "bad");
    verdictBox.classList.add(ok ? "ok" : "bad");
    verdictBox.innerHTML =
      '<p class="ruling">' + ruling + "</p>" +
      "<p>" + text + "</p>";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var full = norm(form.fullname.value);
    var proposed = norm(form.proposed.value);

    if (!full || !proposed) {
      say("The bench declines.", "Two blanks are not a name and a shortening. Both, please.", false);
      return;
    }
    if (full === proposed) {
      say("Permitted.",
        "No change at all — the safest shortening in the register. Say the name as it stands, and the host owes you a nod.");
      return;
    }

    if (SURNAMES.indexOf(full) !== -1) {
      say("The wrong drawer.", SURNAME_RULING, false);
      return;
    }

    var entry = FULL_NAMES[full];
    if (entry) {
      if (entry.allowed.indexOf(proposed) !== -1) {
        say("Permitted, with the host's nod, and only once.",
          "<em>" + form.fullname.value.trim() + "</em> may give <em>" + form.proposed.value.trim() +
          "</em> — once, and only after the host has said the full name first. After that you return to the shorter, which is the name the person actually carries.");
        return;
      }
      var note = entry.refused[proposed];
      if (note) {
        say("The wrong drawer.", note + " The bench records the reception in Danzig: two degrees colder, recovered only by the fish.", false);
        return;
      }
    }

    if (ALREADY_SHORT[full]) {
      say("Never.", ALREADY_SHORT[full] + " The rule the whole chapter hangs on.", false);
      return;
    }

    say("Not in the register.",
      "The bench knows the full forms, the already-short form, and the surnames the file keeps dear; it does not know the rest of the world. For those, the old advice stands: measure twice, cut once, and when in doubt, ask the host.", false);
  });
})();
